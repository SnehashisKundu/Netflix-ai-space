import { Server } from "socket.io";
import { authenticateSocket, } from "./socket.auth.js";
import { registerSocketEvents } from "./socket.events.js";
export const initializeSocket = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: true,
            credentials: true,
        },
    });
    io.use(authenticateSocket);
    io.on("connection", (socket) => {
        const authenticatedSocket = socket;
        console.log(`Socket connected: ${authenticatedSocket.id} | user: ${authenticatedSocket.user?.userId}`);
        registerSocketEvents(io, authenticatedSocket);
        authenticatedSocket.on("disconnect", (reason) => {
            console.log(`Socket disconnected: ${authenticatedSocket.id} | reason: ${reason}`);
        });
    });
    return io;
};
//# sourceMappingURL=socket.server.js.map