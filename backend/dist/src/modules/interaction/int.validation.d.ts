import { z } from "zod";
export declare const interactionTypeSchema: z.ZodEnum<{
    COMPLETE: "COMPLETE";
    DISLIKE: "DISLIKE";
    LIKE: "LIKE";
    SKIP: "SKIP";
    VIEW: "VIEW";
    WATCH: "WATCH";
}>;
export declare const createInteractionSchema: z.ZodObject<{
    type: z.ZodEnum<{
        COMPLETE: "COMPLETE";
        DISLIKE: "DISLIKE";
        LIKE: "LIKE";
        SKIP: "SKIP";
        VIEW: "VIEW";
        WATCH: "WATCH";
    }>;
    position: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    value: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const updateInteractionSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<{
        COMPLETE: "COMPLETE";
        DISLIKE: "DISLIKE";
        LIKE: "LIKE";
        SKIP: "SKIP";
        VIEW: "VIEW";
        WATCH: "WATCH";
    }>>;
    position: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    value: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const titleIdParamSchema: z.ZodObject<{
    titleId: z.ZodString;
}, z.core.$strip>;
export declare const interactionParamSchema: z.ZodObject<{
    titleId: z.ZodString;
    interactionId: z.ZodString;
}, z.core.$strip>;
export type CreateInteractionInput = z.infer<typeof createInteractionSchema>;
export type UpdateInteractionInput = z.infer<typeof updateInteractionSchema>;
//# sourceMappingURL=int.validation.d.ts.map