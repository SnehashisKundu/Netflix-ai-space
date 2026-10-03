import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware.js";

import {
  createInteractionController,
  deleteInteractionController,
  getInteractionByIdController,
  getInteractionsController,
  updateInteractionController,
} from "./int.controller.js";

const router = Router();

router.use(authenticate);

router.post(
  "/titles/:titleId/interactions",
  createInteractionController,
);

router.get(
  "/titles/:titleId/interactions",
  getInteractionsController,
);

router.get(
  "/titles/:titleId/interactions/:interactionId",
  getInteractionByIdController,
);

router.patch(
  "/titles/:titleId/interactions/:interactionId",
  updateInteractionController,
);

router.delete(
  "/titles/:titleId/interactions/:interactionId",
  deleteInteractionController,
);

export default router;