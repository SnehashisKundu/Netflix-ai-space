import { Server } from "socket.io";
import type { Server as HttpServer } from "node:http";
import {
  authenticateSocket,
  type AuthenticatedSocket,
} from "./socket.auth.js";
import { registerSocketEvents } from "./socket.events.js";

export const initializeSocket = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: true,
      credentials: true,
    },
  });

  io.use(authenticateSocket);

  io.on("connection", (socket) => {
    const authenticatedSocket =
      socket as AuthenticatedSocket;

    console.log(
      `Socket connected: ${authenticatedSocket.id} | user: ${authenticatedSocket.user?.userId}`,
    );

    registerSocketEvents(io, authenticatedSocket);

    authenticatedSocket.on("disconnect", (reason) => {
      console.log(
        `Socket disconnected: ${authenticatedSocket.id} | reason: ${reason}`,
      );
    });
  });

  return io;
};
