import type { Response } from "express";
import type { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const createTimelineEventController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getTimelineEventsController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getTimelineEventByIdController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateTimelineEventController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteTimelineEventController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getTimelineContextController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getTriviaAtController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getQaContextController: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=tl.controller.d.ts.map