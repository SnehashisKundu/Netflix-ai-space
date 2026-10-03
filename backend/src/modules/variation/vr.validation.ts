import { z } from "zod";

export const createVariationSchema = z.object({
  label: z
    .string()
    .trim()
    .min(1)
    .max(200),

  content: z
    .string()
    .trim()
    .min(1)
    .max(5000),

  locale: z
    .string()
    .trim()
    .min(2)
    .max(20)
    .optional()
    .nullable(),

  isDefault: z
    .boolean()
    .optional(),
});

export const updateVariationSchema = z.object({
  label: z
    .string()
    .trim()
    .min(1)
    .max(200)
    .optional(),

  content: z
    .string()
    .trim()
    .min(1)
    .max(5000)
    .optional(),

  locale: z
    .string()
    .trim()
    .min(2)
    .max(20)
    .optional()
    .nullable(),

  isDefault: z
    .boolean()
    .optional(),
});

export const timelineEventIdParamSchema = z.object({
  timelineEventId: z.string().uuid(),
});

export const variationParamSchema = z.object({
  timelineEventId: z.string().uuid(),
  variationId: z.string().uuid(),
});

export type CreateVariationInput = z.infer<
  typeof createVariationSchema
>;

export type UpdateVariationInput = z.infer<
  typeof updateVariationSchema
>;