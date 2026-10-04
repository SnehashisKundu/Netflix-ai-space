import { z } from "zod";

export const createWatchSpaceSchema = z.object({
  titleId: z.string().uuid(),
  name: z.string().trim().min(1).max(100).optional(),
});

export const joinWatchSpaceSchema = z.object({
  joinCode: z
    .string()
    .trim()
    .length(6)
    .transform((value) => value.toUpperCase()),
});

export const watchSpaceIdParamSchema = z.object({
  id: z.string().uuid(),
});

export type CreateWatchSpaceInput = z.infer<
  typeof createWatchSpaceSchema
>;

export const variationVoteParamSchema = z.object({
  id: z.string().uuid(),
  variationId: z.string().uuid(),
});

export type VariationVoteParam = z.infer<
  typeof variationVoteParamSchema
>;