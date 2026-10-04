import { z } from "zod";

export const timelineEventIdParamSchema =
  z.object({
    timelineEventId: z.string().uuid(),
  });

export const variationParamSchema =
  z.object({
    timelineEventId: z.string().uuid(),
    variationId: z.string().uuid(),
  });

export const localeParamSchema =
  z.object({
    timelineEventId: z.string().uuid(),
    locale: z
      .string()
      .trim()
      .min(2)
      .max(20),
  });

export const createVariationSchema =
  z.object({
    label: z
      .string()
      .trim()
      .min(1)
      .max(200),

    content: z
      .string()
      .trim()
      .min(1),

    locale: z
      .string()
      .trim()
      .min(2)
      .max(20)
      .nullable()
      .optional(),

    isDefault: z
      .boolean()
      .optional(),
  });

export const updateVariationSchema =
  z.object({
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
      .optional(),

    locale: z
      .string()
      .trim()
      .min(2)
      .max(20)
      .nullable()
      .optional(),

    isDefault: z
      .boolean()
      .optional(),
  });

export type CreateVariationInput =
  z.infer<
    typeof createVariationSchema
  >;

export type UpdateVariationInput =
  z.infer<
    typeof updateVariationSchema
  >;