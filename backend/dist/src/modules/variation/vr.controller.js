import { createVariation, deleteVariation, getVariationById, getVariations, updateVariation, } from "./vr.service.js";
import { createVariationSchema, timelineEventIdParamSchema, updateVariationSchema, variationParamSchema, } from "./vr.validation.js";
export const createVariationController = async (req, res) => {
    try {
        const { timelineEventId } = timelineEventIdParamSchema.parse(req.params);
        const input = createVariationSchema.parse(req.body);
        const variation = await createVariation(timelineEventId, input);
        return res.status(201).json({
            success: true,
            message: "Variation created successfully",
            data: variation,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name === "ZodError") {
                return res.status(400).json({
                    success: false,
                    message: "Invalid request data",
                    error: error.message,
                });
            }
            if (error.message === "TIMELINE_EVENT_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Timeline event not found",
                });
            }
        }
        console.error("Create variation error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create variation",
        });
    }
};
export const getVariationsController = async (req, res) => {
    try {
        const { timelineEventId } = timelineEventIdParamSchema.parse(req.params);
        const variations = await getVariations(timelineEventId);
        return res.status(200).json({
            success: true,
            message: "Variations fetched successfully",
            data: variations,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name === "ZodError") {
                return res.status(400).json({
                    success: false,
                    message: "Invalid timeline event id",
                });
            }
            if (error.message === "TIMELINE_EVENT_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Timeline event not found",
                });
            }
        }
        console.error("Get variations error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch variations",
        });
    }
};
export const getVariationByIdController = async (req, res) => {
    try {
        const { timelineEventId, variationId } = variationParamSchema.parse(req.params);
        const variation = await getVariationById(timelineEventId, variationId);
        return res.status(200).json({
            success: true,
            message: "Variation fetched successfully",
            data: variation,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name === "ZodError") {
                return res.status(400).json({
                    success: false,
                    message: "Invalid parameters",
                });
            }
            if (error.message === "VARIATION_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Variation not found",
                });
            }
        }
        console.error("Get variation error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch variation",
        });
    }
};
export const updateVariationController = async (req, res) => {
    try {
        const { timelineEventId, variationId } = variationParamSchema.parse(req.params);
        const input = updateVariationSchema.parse(req.body);
        const variation = await updateVariation(timelineEventId, variationId, input);
        return res.status(200).json({
            success: true,
            message: "Variation updated successfully",
            data: variation,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name === "ZodError") {
                return res.status(400).json({
                    success: false,
                    message: "Invalid request data",
                    error: error.message,
                });
            }
            if (error.message === "VARIATION_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Variation not found",
                });
            }
        }
        console.error("Update variation error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update variation",
        });
    }
};
export const deleteVariationController = async (req, res) => {
    try {
        const { timelineEventId, variationId } = variationParamSchema.parse(req.params);
        await deleteVariation(timelineEventId, variationId);
        return res.status(200).json({
            success: true,
            message: "Variation deleted successfully",
        });
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name === "ZodError") {
                return res.status(400).json({
                    success: false,
                    message: "Invalid parameters",
                });
            }
            if (error.message === "VARIATION_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Variation not found",
                });
            }
        }
        console.error("Delete variation error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete variation",
        });
    }
};
//# sourceMappingURL=vr.controller.js.map