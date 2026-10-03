import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { createVariationController, deleteVariationController, getVariationByIdController, getVariationsController, updateVariationController, } from "./vr.controller.js";
const router = Router();
router.use(authenticate);
router.post("/timeline/:timelineEventId/variations", createVariationController);
router.get("/timeline/:timelineEventId/variations", getVariationsController);
router.get("/timeline/:timelineEventId/variations/:variationId", getVariationByIdController);
router.patch("/timeline/:timelineEventId/variations/:variationId", updateVariationController);
router.delete("/timeline/:timelineEventId/variations/:variationId", deleteVariationController);
export default router;
//# sourceMappingURL=vr.routes.js.map