import { z } from "zod";
export declare const createWatchSpaceSchema: z.ZodObject<{
    titleId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const joinWatchSpaceSchema: z.ZodObject<{
    joinCode: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
}, z.core.$strip>;
export declare const watchSpaceIdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type CreateWatchSpaceInput = z.infer<typeof createWatchSpaceSchema>;
//# sourceMappingURL=ws.validation.d.ts.map