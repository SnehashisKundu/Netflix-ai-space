import { z } from "zod";

export const sendMessageSchema = z.object({
  message: z.string().trim().min(1).max(500),
  videoTime: z.number().min(0).optional(),
});

export const watchSpaceChatParamSchema = z.object({
  watchSpaceId: z.string().uuid(),
});

export type SendMessageInput = z.infer<typeof sendMessageSchema>;
