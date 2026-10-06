import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { create, end, getById, join, leave, voteVariation, } from "./ws.controller.js";
const router = Router();
router.use(authenticate);
router.post("/", create);
router.post("/join", join);
router.post("/:id/leave", leave);
router.patch("/:id/end", end);
router.get("/:id", getById);
router.post("/:id/variations/:variationId/vote", voteVariation);
export default router;
//# sourceMappingURL=ws.routes.js.map