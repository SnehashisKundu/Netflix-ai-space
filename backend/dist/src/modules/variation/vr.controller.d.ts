import type { Response } from "express";
import type { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const createVariationController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getVariationsController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getVariationByIdController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateVariationController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteVariationController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=vr.controller.d.ts.map