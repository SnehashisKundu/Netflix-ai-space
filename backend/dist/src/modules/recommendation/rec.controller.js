import { getRecommendations } from "./rec.service.js";
import { recommendationQuerySchema } from "./rec.validation.js";
export const getRecommendationsController = async (req, res) => {
    try {
        const query = recommendationQuerySchema.parse(req.query);
        const userId = req.user.userId;
        const recommendations = await getRecommendations(userId, query.limit);
        return res.status(200).json({
            success: true,
            data: {
                recommendations,
            },
        });
    }
    catch (error) {
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
//# sourceMappingURL=rec.controller.js.map