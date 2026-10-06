import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { getDashboardController } from "./dash.controller.js";
import { getWatchSpaceAnalyticsController, } from "./dash.analytics.controller.js";
const router = Router();
router.use(authenticate);
router.get("/", getDashboardController);
router.get("/watch-spaces/:watchSpaceId/analytics", getWatchSpaceAnalyticsController);
export default router;
//# sourceMappingURL=dash.routes.js.map