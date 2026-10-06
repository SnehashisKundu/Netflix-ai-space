import { z } from "zod";
import { getWatchSpaceAnalytics } from "./dash.analytics.service.js";
const analyticsParamSchema = z.object({
    watchSpaceId: z.string().uuid(),
});
export const getWatchSpaceAnalyticsController = async (req, res) => {
    try {
        const { watchSpaceId } = analyticsParamSchema.parse(req.params);
        const userId = req.user
            .userId;
        const analytics = await getWatchSpaceAnalytics(watchSpaceId, userId);
        return res.status(200).json({
            success: true,
            data: analytics,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.message ===
                "Watch space not found") {
                return res.status(404).json({
                    success: false,
                    message: error.message,
                });
            }
            if (error.message ===
                "You are not a participant of this watch space") {
                return res.status(403).json({
                    success: false,
                    message: error.message,
                });
            }
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        return res.status(500).json({
            success: false,
            message: "Failed to get watch space analytics",
        });
    }
};
//# sourceMappingURL=dash.analytics.controller.js.map