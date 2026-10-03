import type { Response } from "express";

import type { AuthRequest } from "../../middleware/auth.middleware.js";

import {
  createInteraction,
  deleteInteraction,
  getInteractionById,
  getInteractions,
  updateInteraction,
} from "./int.service.js";

import {
  createInteractionSchema,
  interactionParamSchema,
  titleIdParamSchema,
  updateInteractionSchema,
} from "./int.validation.js";

export const createInteractionController = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { titleId } =
      titleIdParamSchema.parse(req.params);

    const input = createInteractionSchema.parse(
      req.body,
    );

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const interaction = await createInteraction(
      req.user.userId,
      titleId,
      input,
    );

    return res.status(201).json({
      success: true,
      message: "Interaction created successfully",
      data: interaction,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Invalid request data",
          error: error.message,
        });
      }

      if (error.message === "TITLE_NOT_FOUND") {
        return res.status(404).json({
          success: false,
          message: "Title not found",
        });
      }
    }

    console.error(
      "Create interaction error:",
      error,
    );

    return res.status(500).json({
      success: false,
      message: "Failed to create interaction",
    });
  }
};

export const getInteractionsController = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { titleId } =
      titleIdParamSchema.parse(req.params);

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const interactions = await getInteractions(
      req.user.userId,
      titleId,
    );

    return res.status(200).json({
      success: true,
      message: "Interactions fetched successfully",
      data: interactions,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Invalid title id",
        });
      }

      if (error.message === "TITLE_NOT_FOUND") {
        return res.status(404).json({
          success: false,
          message: "Title not found",
        });
      }
    }

    console.error(
      "Get interactions error:",
      error,
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch interactions",
    });
  }
};

export const getInteractionByIdController = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { titleId, interactionId } =
      interactionParamSchema.parse(req.params);

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const interaction =
      await getInteractionById(
        req.user.userId,
        titleId,
        interactionId,
      );

    return res.status(200).json({
      success: true,
      message: "Interaction fetched successfully",
      data: interaction,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Invalid parameters",
        });
      }

      if (
        error.message === "INTERACTION_NOT_FOUND"
      ) {
        return res.status(404).json({
          success: false,
          message: "Interaction not found",
        });
      }
    }

    console.error(
      "Get interaction error:",
      error,
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch interaction",
    });
  }
};

export const updateInteractionController = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { titleId, interactionId } =
      interactionParamSchema.parse(req.params);

    const input = updateInteractionSchema.parse(
      req.body,
    );

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const interaction =
      await updateInteraction(
        req.user.userId,
        titleId,
        interactionId,
        input,
      );

    return res.status(200).json({
      success: true,
      message: "Interaction updated successfully",
      data: interaction,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Invalid request data",
          error: error.message,
        });
      }

      if (
        error.message === "INTERACTION_NOT_FOUND"
      ) {
        return res.status(404).json({
          success: false,
          message: "Interaction not found",
        });
      }
    }

    console.error(
      "Update interaction error:",
      error,
    );

    return res.status(500).json({
      success: false,
      message: "Failed to update interaction",
    });
  }
};

export const deleteInteractionController = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { titleId, interactionId } =
      interactionParamSchema.parse(req.params);

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    await deleteInteraction(
      req.user.userId,
      titleId,
      interactionId,
    );

    return res.status(200).json({
      success: true,
      message: "Interaction deleted successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          success: false,
          message: "Invalid parameters",
        });
      }

      if (
        error.message === "INTERACTION_NOT_FOUND"
      ) {
        return res.status(404).json({
          success: false,
          message: "Interaction not found",
        });
      }
    }

    console.error(
      "Delete interaction error:",
      error,
    );

    return res.status(500).json({
      success: false,
      message: "Failed to delete interaction",
    });
  }
};