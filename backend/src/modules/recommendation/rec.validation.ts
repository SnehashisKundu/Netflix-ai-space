import { z } from "zod";

export const recommendationQuerySchema = z.object({
  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(20)
    .default(10),
});

export type RecommendationQuery = z.infer<
  typeof recommendationQuerySchema
>;