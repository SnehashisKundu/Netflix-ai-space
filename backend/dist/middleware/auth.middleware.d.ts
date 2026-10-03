import type { NextFunction, Request, Response } from "express";
export type AuthRequest = Request & {
    user?: {
        userId: string;
        role: "VIEWER" | "HOST" | "ADMIN";
    };
};
export declare const authenticate: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.middleware.d.ts.map