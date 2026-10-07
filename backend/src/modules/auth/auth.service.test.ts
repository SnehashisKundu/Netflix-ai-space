import { describe, expect, it, vi } from "vitest";

vi.mock("bcrypt", () => ({
  default: {
    compare: vi.fn(),
    hash: vi.fn(),
  },
}));

vi.mock("../../lib/prisma.js", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
    },

    refreshToken: {
      create: vi.fn(),
      findUnique: vi.fn(),
    },
  },
}));

vi.mock("../../lib/jwt.js", () => ({
  generateAccessToken: vi.fn(),
}));

import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma.js";
import { generateAccessToken } from "../../lib/jwt.js";
import {
  loginUser,
  refreshAccessToken,
} from "./auth.service.js";

describe("Auth Service", () => {
  it("should login successfully with valid credentials", async () => {
    const user = {
      id: "user-1",
      name: "Test User",
      email: "test@example.com",
      role: "VIEWER",
      passwordHash: "hashed-password",
    };

    vi.mocked(prisma.user.findUnique).mockResolvedValue(
      user as never,
    );

    vi.mocked(bcrypt.compare).mockResolvedValue(true as never);

    vi.mocked(generateAccessToken).mockReturnValue(
      "access-token",
    );

    vi.mocked(
      prisma.refreshToken.create,
    ).mockResolvedValue({
      id: "refresh-token-1",
      userId: "user-1",
      tokenHash: "hashed-refresh-token",
      expiresAt: new Date(
        "2026-11-06T00:00:00.000Z",
      ),
      revokedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as never);

    const result = await loginUser({
      email: "test@example.com",
      password: "Password123!",
    });

    expect(
      prisma.user.findUnique,
    ).toHaveBeenCalledWith({
      where: {
        email: "test@example.com",
      },
    });

    expect(
      bcrypt.compare,
    ).toHaveBeenCalledWith(
      "Password123!",
      "hashed-password",
    );

    expect(
      generateAccessToken,
    ).toHaveBeenCalledWith({
      userId: "user-1",
      role: "VIEWER",
    });

    expect(
      prisma.refreshToken.create,
    ).toHaveBeenCalled();

    expect(result.user).toEqual({
      id: "user-1",
      name: "Test User",
      email: "test@example.com",
      role: "VIEWER",
    });

    expect(result.accessToken).toBe(
      "access-token",
    );

    expect(result.refreshToken).toEqual(
      expect.any(String),
    );

    expect(result.refreshToken.length).toBe(96);
  });

    it("should reject login with an invalid password", async () => {
    const user = {
      id: "user-1",
      name: "Test User",
      email: "test@example.com",
      role: "VIEWER",
      passwordHash: "hashed-password",
    };

    vi.mocked(prisma.user.findUnique).mockResolvedValue(
      user as never,
    );

    vi.mocked(bcrypt.compare).mockResolvedValue(
      false as never,
    );

    await expect(
      loginUser({
        email: "test@example.com",
        password: "WrongPassword123!",
      }),
    ).rejects.toThrow("INVALID_CREDENTIALS");

    expect(
      bcrypt.compare,
    ).toHaveBeenCalledWith(
      "WrongPassword123!",
      "hashed-password",
    );

    expect(
      generateAccessToken,
    ).not.toHaveBeenCalled();

    expect(
      prisma.refreshToken.create,
    ).not.toHaveBeenCalled();
  });

    it("should reject login when the user does not exist", async () => {
    vi.mocked(prisma.user.findUnique).mockResolvedValue(
      null,
    );

    await expect(
      loginUser({
        email: "unknown@example.com",
        password: "Password123!",
      }),
    ).rejects.toThrow("INVALID_CREDENTIALS");

    expect(
      prisma.user.findUnique,
    ).toHaveBeenCalledWith({
      where: {
        email: "unknown@example.com",
      },
    });

    expect(
      bcrypt.compare,
    ).not.toHaveBeenCalled();

    expect(
      generateAccessToken,
    ).not.toHaveBeenCalled();

    expect(
      prisma.refreshToken.create,
    ).not.toHaveBeenCalled();
  });

    it("should generate a new access token from a valid refresh token", async () => {
    const futureExpiry = new Date(
      Date.now() + 24 * 60 * 60 * 1000,
    );

    vi.mocked(
      prisma.refreshToken.findUnique,
    ).mockResolvedValue({
      id: "refresh-1",
      userId: "user-1",
      tokenHash: "hashed-token",
      expiresAt: futureExpiry,
      revokedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: "user-1",
        name: "Test User",
        email: "test@example.com",
        role: "VIEWER",
        passwordHash: "hashed-password",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    } as never);

    vi.mocked(generateAccessToken).mockReturnValue(
      "new-access-token",
    );

    const result = await refreshAccessToken(
      "valid-refresh-token",
    );

    expect(
      prisma.refreshToken.findUnique,
    ).toHaveBeenCalled();

    expect(
      generateAccessToken,
    ).toHaveBeenCalledWith({
      userId: "user-1",
      role: "VIEWER",
    });

    expect(result).toBe("new-access-token");
  });

    it("should reject a revoked refresh token", async () => {
    vi.mocked(
      prisma.refreshToken.findUnique,
    ).mockResolvedValue({
      id: "refresh-1",
      userId: "user-1",
      tokenHash: "hashed-token",
      expiresAt: new Date(
        Date.now() + 24 * 60 * 60 * 1000,
      ),
      revokedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: "user-1",
        name: "Test User",
        email: "test@example.com",
        role: "VIEWER",
        passwordHash: "hashed-password",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    } as never);

    await expect(
      refreshAccessToken("revoked-refresh-token"),
    ).rejects.toThrow("INVALID_REFRESH_TOKEN");

    expect(
      generateAccessToken,
    ).not.toHaveBeenCalled();
  });
});