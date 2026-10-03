import { z } from "zod";
export const playbackUpdateSchema = z.object({
    position: z.number().min(0),
    isPlaying: z.boolean(),
    playbackRate: z.number().positive().max(4).default(1),
});
export const playbackSeekSchema = z.object({
    position: z.number().min(0),
});
export const watchSpaceIdSchema = z.object({
    watchSpaceId: z.string().uuid(),
});
//# sourceMappingURL=pb.validation.js.map