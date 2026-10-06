import type { Request, Response } from "express";
import { getDashboard } from "./dash.service.js";
import { dashboardQuerySchema } from "./dash.validation.js";

export const getDashboardController = async (
  req: Request,
  res: Response,
) => {
  try {
    const query = dashboardQuerySchema.parse(req.query);
    const userId = (req as Request & { user: { userId: string } }).user.userId;

    const dashboard = await getDashboard(
      userId,
      query.limit,
    );

    return res.status(200).json({
      success: true,
      data: dashboard,
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
      message: "Failed to get dashboard",
    });
  }
};
