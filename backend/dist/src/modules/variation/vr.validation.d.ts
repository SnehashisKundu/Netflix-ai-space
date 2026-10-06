import { z } from "zod";
export declare const timelineEventIdParamSchema: z.ZodObject<{
    timelineEventId: z.ZodString;
}, z.core.$strip>;
export declare const variationParamSchema: z.ZodObject<{
    timelineEventId: z.ZodString;
    variationId: z.ZodString;
}, z.core.$strip>;
export declare const localeParamSchema: z.ZodObject<{
    timelineEventId: z.ZodString;
    locale: z.ZodString;
}, z.core.$strip>;
export declare const createVariationSchema: z.ZodObject<{
    label: z.ZodString;
    content: z.ZodString;
    locale: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateVariationSchema: z.ZodObject<{
    label: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    locale: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateVariationInput = z.infer<typeof createVariationSchema>;
export type UpdateVariationInput = z.infer<typeof updateVariationSchema>;
//# sourceMappingURL=vr.validation.d.ts.map