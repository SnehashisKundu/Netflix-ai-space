import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { createTimelineEventController, deleteTimelineEventController, getTimelineEventByIdController, getTimelineContextController, getTimelineEventsController, updateTimelineEventController, getTriviaAtController, getQaContextController, } from "./tl.controller.js";
const router = Router();
router.use(authenticate);
router.post("/:titleId/timeline", createTimelineEventController);
router.get("/:titleId/timeline", getTimelineEventsController);
router.get("/:titleId/timeline/context", getTimelineContextController);
router.get("/:titleId/trivia", getTriviaAtController);
router.get("/:titleId/qa", getQaContextController);
router.get("/:titleId/timeline/:eventId", getTimelineEventByIdController);
router.patch("/:titleId/timeline/:eventId", updateTimelineEventController);
router.delete("/:titleId/timeline/:eventId", deleteTimelineEventController);
export default router;
//# sourceMappingURL=tl.routes.js.map