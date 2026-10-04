import { Router } from "express";

import {
  authenticate,
} from "../../middleware/auth.middleware.js";

import {
  createVariationController,
  deleteVariationController,
  getLocalizedVariationController,
  getVariationByIdController,
  getVariationsController,
  updateVariationController,
} from "./vr.controller.js";

const router = Router();

router.use(authenticate);

// ==========================================
// CREATE
// ==========================================

router.post(
  "/timeline/:timelineEventId/variations",
  createVariationController,
);

// ==========================================
// GET LOCALIZED
// IMPORTANT: before /:variationId
// ==========================================

router.get(
  "/timeline/:timelineEventId/variations/localized/:locale",
  getLocalizedVariationController,
);

// ==========================================
// GET ALL
// ==========================================

router.get(
  "/timeline/:timelineEventId/variations",
  getVariationsController,
);

// ==========================================
// GET BY ID
// ==========================================

router.get(
  "/timeline/:timelineEventId/variations/:variationId",
  getVariationByIdController,
);

// ==========================================
// UPDATE
// ==========================================

router.patch(
  "/timeline/:timelineEventId/variations/:variationId",
  updateVariationController,
);

// ==========================================
// DELETE
// ==========================================

router.delete(
  "/timeline/:timelineEventId/variations/:variationId",
  deleteVariationController,
);

export default router;