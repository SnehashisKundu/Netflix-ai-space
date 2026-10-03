import type { LoginInput, RegisterInput } from "./auth.validation.js";
export declare const registerUser: (input: RegisterInput) => Promise<{
    createdAt: Date;
    email: string;
    id: string;
    name: string;
    role: import("../../../../generated/prisma/enums.js").UserRole;
}>;
export declare const loginUser: (input: LoginInput) => Promise<{
    user: {
        id: string;
        name: string;
        email: string;
        role: import("../../../../generated/prisma/enums.js").UserRole;
    };
    accessToken: string;
    refreshToken: string;
}>;
export declare const refreshAccessToken: (refreshToken: string) => Promise<string>;
export declare const revokeRefreshToken: (refreshToken: string) => Promise<void>;
export declare const getCurrentUser: (userId: string) => Promise<{
    createdAt: Date;
    email: string;
    id: string;
    name: string;
    role: import("../../../../generated/prisma/enums.js").UserRole;
    updatedAt: Date;
} | null>;
//# sourceMappingURL=auth.service.d.ts.map