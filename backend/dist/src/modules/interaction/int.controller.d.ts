import type { Response } from "express";
import type { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const createInteractionController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getInteractionsController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getInteractionByIdController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateInteractionController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteInteractionController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=int.controller.d.ts.map