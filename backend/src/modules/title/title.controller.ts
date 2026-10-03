import type { Response } from "express";
import type { AuthRequest } from "../../middleware/auth.middleware.js";
import {
  createTitleSchema,
  titleIdParamSchema,
  updateTitleSchema,
} from "./title.validation.js";
import {
  createTitle,
  deleteTitle,
  getTitleById,
  getTitles,
  updateTitle,
} from "./title.service.js";

export const create = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const input = createTitleSchema.parse(req.body);

    const title = await createTitle(input);

    return res.status(201).json({
      success: true,
      message: "Title created successfully",
      data: title,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Invalid request data",
        errors: error,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to create title",
    });
  }
};

export const list = async (
  _req: AuthRequest,
  res: Response,
) => {
  try {
    const titles = await getTitles();

    return res.status(200).json({
      success: true,
      data: titles,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch titles",
    });
  }
};

export const getById = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { id } = titleIdParamSchema.parse(req.params);

    const title = await getTitleById(id);

    if (!title) {
      return res.status(404).json({
        success: false,
        message: "Title not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: title,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Invalid title ID",
        errors: error,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to fetch title",
    });
  }
};

export const update = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { id } = titleIdParamSchema.parse(req.params);
    const input = updateTitleSchema.parse(req.body);

    const title = await updateTitle(id, input);

    return res.status(200).json({
      success: true,
      message: "Title updated successfully",
      data: title,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Invalid request data",
        errors: error,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to update title",
    });
  }
};

export const remove = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { id } = titleIdParamSchema.parse(req.params);

    await deleteTitle(id);

    return res.status(200).json({
      success: true,
      message: "Title deactivated successfully",
    });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Invalid title ID",
        errors: error,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to deactivate title",
    });
  }
};