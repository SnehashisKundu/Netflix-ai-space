import { z } from "zod";
export declare const sendMessageSchema: z.ZodObject<{
    message: z.ZodString;
    videoTime: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const watchSpaceChatParamSchema: z.ZodObject<{
    watchSpaceId: z.ZodString;
}, z.core.$strip>;
export type SendMessageInput = z.infer<typeof sendMessageSchema>;
//# sourceMappingURL=chat.validation.d.ts.map