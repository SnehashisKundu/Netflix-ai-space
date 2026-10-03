export type AccessTokenPayload = {
    userId: string;
    role: "VIEWER" | "HOST" | "ADMIN";
};
export declare const generateAccessToken: (payload: AccessTokenPayload) => string;
export declare const verifyAccessToken: (token: string) => AccessTokenPayload;
//# sourceMappingURL=jwt.d.ts.map