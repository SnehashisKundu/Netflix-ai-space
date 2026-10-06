import { z } from "zod";
export declare const recommendationQuerySchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type RecommendationQuery = z.infer<typeof recommendationQuerySchema>;
//# sourceMappingURL=rec.validation.d.ts.map