import type { Socket } from "socket.io";
export type AuthenticatedSocket = Socket & {
    user?: {
        userId: string;
        role: "VIEWER" | "HOST" | "ADMIN";
    };
};
export declare const authenticateSocket: (socket: AuthenticatedSocket, next: (error?: Error) => void) => void;
//# sourceMappingURL=socket.auth.d.ts.map