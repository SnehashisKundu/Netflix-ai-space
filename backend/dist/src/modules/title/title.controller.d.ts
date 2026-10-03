import type { Response } from "express";
import type { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const create: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const list: (_req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getById: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const update: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const remove: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=title.controller.d.ts.map