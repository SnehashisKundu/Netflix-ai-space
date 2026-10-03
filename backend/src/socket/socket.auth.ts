import type { Socket } from "socket.io";
import { verifyAccessToken } from "../lib/jwt.js";

export type AuthenticatedSocket = Socket & {
  user?: {
    userId: string;
    role: "VIEWER" | "HOST" | "ADMIN";
  };
};

export const authenticateSocket = (
  socket: AuthenticatedSocket,
  next: (error?: Error) => void,
) => {
  try {
    const token =
      socket.handshake.auth?.token ||
      socket.handshake.headers.authorization?.replace(
        /^Bearer\s+/,
        "",
      );

    if (!token) {
      return next(new Error("Authentication required"));
    }

    const payload = verifyAccessToken(token);

    socket.user = payload;

    next();
  } catch {
    next(new Error("Invalid or expired access token"));
  }
};
