import { z } from "zod";
export declare const playbackUpdateSchema: z.ZodObject<{
    position: z.ZodNumber;
    isPlaying: z.ZodBoolean;
    playbackRate: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export declare const playbackSeekSchema: z.ZodObject<{
    position: z.ZodNumber;
}, z.core.$strip>;
export declare const watchSpaceIdSchema: z.ZodObject<{
    watchSpaceId: z.ZodString;
}, z.core.$strip>;
export type PlaybackUpdateInput = z.infer<typeof playbackUpdateSchema>;
export type PlaybackSeekInput = z.infer<typeof playbackSeekSchema>;
//# sourceMappingURL=pb.validation.d.ts.map