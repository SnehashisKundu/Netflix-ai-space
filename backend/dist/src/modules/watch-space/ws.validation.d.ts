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
export declare const variationVoteParamSchema: z.ZodObject<{
    id: z.ZodString;
    variationId: z.ZodString;
}, z.core.$strip>;
export type VariationVoteParam = z.infer<typeof variationVoteParamSchema>;
//# sourceMappingURL=ws.validation.d.ts.map