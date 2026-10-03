import { z } from "zod";

export const createTitleSchema = z.object({
  name: z.string().trim().min(1).max(200),

  description: z.string().trim().max(5000).optional(),

  thumbnailUrl: z.url().optional(),

  videoUrl: z.url().optional(),

  genre: z.string().trim().max(100).optional(),

  duration: z.number().int().positive().optional(),
});

export const updateTitleSchema = createTitleSchema.partial();

export const titleIdParamSchema = z.object({
  id: z.string().uuid(),
});

export type CreateTitleInput = z.infer<typeof createTitleSchema>;
export type UpdateTitleInput = z.infer<typeof updateTitleSchema>;