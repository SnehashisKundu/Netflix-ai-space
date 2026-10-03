import bcrypt from "bcrypt";
import crypto from "node:crypto";
import { prisma } from "../../../lib/prisma.js";
import { generateAccessToken } from "../../../lib/jwt.js";
const SALT_ROUNDS = 12;
const REFRESH_TOKEN_DAYS = 30;
const hashRefreshToken = (token) => {
    return crypto.createHash("sha256").update(token).digest("hex");
};
const generateRefreshToken = () => {
    return crypto.randomBytes(48).toString("hex");
};
const getRefreshExpiry = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + REFRESH_TOKEN_DAYS);
    return expiry;
};
export const registerUser = async (input) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email: input.email,
        },
    });
    if (existingUser) {
        throw new Error("EMAIL_ALREADY_EXISTS");
    }
    const passwordHash = await bcrypt.hash(input.password, SALT_ROUNDS);
    const user = await prisma.user.create({
        data: {
            name: input.name,
            email: input.email,
            passwordHash,
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });
    return user;
};
export const loginUser = async (input) => {
    const user = await prisma.user.findUnique({
        where: {
            email: input.email,
        },
    });
    if (!user) {
        throw new Error("INVALID_CREDENTIALS");
    }
    const passwordValid = await bcrypt.compare(input.password, user.passwordHash);
    if (!passwordValid) {
        throw new Error("INVALID_CREDENTIALS");
    }
    const accessToken = generateAccessToken({
        userId: user.id,
        role: user.role,
    });
    const refreshToken = generateRefreshToken();
    await prisma.refreshToken.create({
        data: {
            userId: user.id,
            tokenHash: hashRefreshToken(refreshToken),
            expiresAt: getRefreshExpiry(),
        },
    });
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
        accessToken,
        refreshToken,
    };
};
export const refreshAccessToken = async (refreshToken) => {
    const tokenHash = hashRefreshToken(refreshToken);
    const storedToken = await prisma.refreshToken.findUnique({
        where: {
            tokenHash,
        },
        include: {
            user: true,
        },
    });
    if (!storedToken ||
        storedToken.revokedAt ||
        storedToken.expiresAt <= new Date()) {
        throw new Error("INVALID_REFRESH_TOKEN");
    }
    const accessToken = generateAccessToken({
        userId: storedToken.user.id,
        role: storedToken.user.role,
    });
    return accessToken;
};
export const revokeRefreshToken = async (refreshToken) => {
    const tokenHash = hashRefreshToken(refreshToken);
    await prisma.refreshToken.updateMany({
        where: {
            tokenHash,
            revokedAt: null,
        },
        data: {
            revokedAt: new Date(),
        },
    });
};
export const getCurrentUser = async (userId) => {
    return prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        },
    });
};
//# sourceMappingURL=auth.service.js.map