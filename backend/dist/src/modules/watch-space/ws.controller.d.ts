import type { Response } from "express";
import type { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const create: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getById: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const join: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const leave: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const end: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=ws.controller.d.ts.map