import { z } from "zod";
export declare const dashboardQuerySchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type DashboardQuery = z.infer<typeof dashboardQuerySchema>;
//# sourceMappingURL=dash.validation.d.ts.map