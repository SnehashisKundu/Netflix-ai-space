import type { Response } from "express";
import type { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const register: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const login: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const refresh: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const logout: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const me: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=auth.controller.d.ts.map