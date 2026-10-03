import { validateWatchSpaceMembership } from "../modules/watch-space/ws.service.js";
export const registerSocketEvents = (io, socket) => {
    socket.on("watch-space:join", async (watchSpaceId) => {
        console.log("WATCH SPACE JOIN EVENT:", watchSpaceId);
        try {
            if (!socket.user) {
                socket.emit("watch-space:error", {
                    message: "Authentication required",
                });
                return;
            }
            await validateWatchSpaceMembership(socket.user.userId, watchSpaceId);
            console.log("WATCH SPACE MEMBERSHIP VALID:", socket.user.userId, watchSpaceId);
            const room = `watch-space:${watchSpaceId}`;
            void socket.join(room);
            socket.emit("watch-space:joined", {
                watchSpaceId,
                userId: socket.user.userId,
                role: socket.user.role,
            });
            socket.to(room).emit("watch-space:user-joined", {
                userId: socket.user.userId,
                role: socket.user.role,
            });
        }
        catch (error) {
            if (error instanceof Error &&
                error.message === "WATCH_SPACE_NOT_FOUND") {
                socket.emit("watch-space:error", {
                    message: "Watch space not found",
                });
                return;
            }
            if (error instanceof Error &&
                error.message === "WATCH_SPACE_ENDED") {
                socket.emit("watch-space:error", {
                    message: "Watch space has ended",
                });
                return;
            }
            if (error instanceof Error &&
                error.message === "NOT_A_PARTICIPANT") {
                socket.emit("watch-space:error", {
                    message: "You are not a participant of this watch space",
                });
                return;
            }
            console.error("Socket watch-space join failed:", error);
            socket.emit("watch-space:error", {
                message: "Failed to join watch space",
            });
        }
    });
    socket.on("watch-space:leave", (watchSpaceId) => {
        console.log("WATCH SPACE LEAVE EVENT:", watchSpaceId);
        if (!socket.user) {
            return;
        }
        const room = `watch-space:${watchSpaceId}`;
        void socket.leave(room);
        socket.to(room).emit("watch-space:user-left", {
            userId: socket.user.userId,
        });
    });
};
//# sourceMappingURL=socket.events.backup.js.map