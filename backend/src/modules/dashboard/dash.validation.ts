import { z } from "zod";

export const dashboardQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(20).default(10),
});

export type DashboardQuery = z.infer<typeof dashboardQuerySchema>;
