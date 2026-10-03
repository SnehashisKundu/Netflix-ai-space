import type { Response } from "express";
import type { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const sendMessage: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getMessages: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=chat.controller.d.ts.map