import type { Response } from "express";
import { ZodError } from "zod";

import type { AuthRequest } from "../../middleware/auth.middleware.js";
import { titleIdParamSchema, qaQuerySchema } from "../timeline/tl.validation.js";
import { getQaContext } from "../timeline/tl.service.js";
import { generateQaAnswer } from "./qa.service.js";

export const askQuestionController = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { titleId } = titleIdParamSchema.parse(req.params);
    const query = qaQuerySchema.parse(req.query);

    const context = await getQaContext(titleId, query);

    const result = await generateQaAnswer({
      question: context.question,
      at: context.at,
      sources: context.sources,
    });

    return res.status(200).json({
      success: true,
      message: "Question answered successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.issues,
      });
    }

    if (
      error instanceof Error &&
      error.message === "TITLE_NOT_FOUND"
    ) {
      return res.status(404).json({
        success: false,
        message: "Title not found",
      });
    }

    console.error("Ask question error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to answer question",
    });
  }
};