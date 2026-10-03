import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { askQuestionController } from "./qa.controller.js";
const router = Router();
router.use(authenticate);
router.get("/titles/:titleId/qa/answer", askQuestionController);
export default router;
//# sourceMappingURL=qa.routes.js.map