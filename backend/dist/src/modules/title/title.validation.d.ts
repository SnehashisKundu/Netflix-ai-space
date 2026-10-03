import { z } from "zod";
export declare const createTitleSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodURL>;
    videoUrl: z.ZodOptional<z.ZodURL>;
    genre: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateTitleSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    thumbnailUrl: z.ZodOptional<z.ZodOptional<z.ZodURL>>;
    videoUrl: z.ZodOptional<z.ZodOptional<z.ZodURL>>;
    genre: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    duration: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const titleIdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type CreateTitleInput = z.infer<typeof createTitleSchema>;
export type UpdateTitleInput = z.infer<typeof updateTitleSchema>;
//# sourceMappingURL=title.validation.d.ts.map