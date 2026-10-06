import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import {
  getRecommendationsController,
} from "./rec.controller.js";

const router = Router();

router.use(authenticate);

router.get(
  "/",
  getRecommendationsController,
);

export default router;