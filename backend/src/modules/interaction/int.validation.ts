import { z } from "zod";

export const interactionTypeSchema = z.enum([
  "VIEW",
  "LIKE",
  "DISLIKE",
  "COMPLETE",
  "SKIP",
  "WATCH",
]);

export const createInteractionSchema = z.object({
  type: interactionTypeSchema,

  position: z
    .number()
    .min(0)
    .optional()
    .nullable(),

  value: z
    .number()
    .int()
    .optional()
    .nullable(),
});

export const updateInteractionSchema = z.object({
  type: interactionTypeSchema.optional(),

  position: z
    .number()
    .min(0)
    .optional()
    .nullable(),

  value: z
    .number()
    .int()
    .optional()
    .nullable(),
});

export const titleIdParamSchema = z.object({
  titleId: z.string().uuid(),
});

export const interactionParamSchema = z.object({
  titleId: z.string().uuid(),
  interactionId: z.string().uuid(),
});

export type CreateInteractionInput = z.infer<
  typeof createInteractionSchema
>;

export type UpdateInteractionInput = z.infer<
  typeof updateInteractionSchema
>;