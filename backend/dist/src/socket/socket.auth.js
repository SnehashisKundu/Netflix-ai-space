import { verifyAccessToken } from "../lib/jwt.js";
export const authenticateSocket = (socket, next) => {
    try {
        const token = socket.handshake.auth?.token ||
            socket.handshake.headers.authorization?.replace(/^Bearer\s+/, "");
        if (!token) {
            return next(new Error("Authentication required"));
        }
        const payload = verifyAccessToken(token);
        socket.user = payload;
        next();
    }
    catch {
        next(new Error("Invalid or expired access token"));
    }
};
//# sourceMappingURL=socket.auth.js.map