import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export type AccessTokenPayload = {
  userId: string;
  role: "VIEWER" | "HOST" | "ADMIN";
};

const accessSecret = env.JWT_ACCESS_SECRET;

export const generateAccessToken = (payload: AccessTokenPayload) => {
  return jwt.sign(payload, accessSecret, {
    expiresIn: "15m",
  });
};

export const verifyAccessToken = (token: string): AccessTokenPayload => {
  return jwt.verify(token, accessSecret) as AccessTokenPayload;
};