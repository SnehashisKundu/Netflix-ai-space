import type { Request, Response } from "express";
import { getRecommendations } from "./rec.service.js";
import { recommendationQuerySchema } from "./rec.validation.js";

export const getRecommendationsController = async (
  req: Request,
  res: Response,
) => {
  try {
    const query =
      recommendationQuerySchema.parse(req.query);

    const userId = (req as Request & { user: { userId: string } }).user.userId;

    const recommendations =
      await getRecommendations(
        userId,
        query.limit,
      );

    return res.status(200).json({
      success: true,
      data: {
        recommendations,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to get recommendations",
    });
  }
};