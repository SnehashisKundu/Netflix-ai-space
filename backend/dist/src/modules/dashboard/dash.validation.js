import { z } from "zod";
export const dashboardQuerySchema = z.object({
    limit: z.coerce.number().int().min(1).max(20).default(10),
});
//# sourceMappingURL=dash.validation.js.map