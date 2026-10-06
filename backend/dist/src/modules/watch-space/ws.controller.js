import { createWatchSpaceSchema, joinWatchSpaceSchema, variationVoteParamSchema, watchSpaceIdParamSchema, } from "./ws.validation.js";
import { castVariationVote, createWatchSpace, endWatchSpace, getWatchSpaceById, joinWatchSpace, leaveWatchSpace, } from "./ws.service.js";
export const create = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const input = createWatchSpaceSchema.parse(req.body);
        const watchSpace = await createWatchSpace(req.user.userId, input);
        return res.status(201).json({
            success: true,
            message: "Watch space created successfully",
            data: watchSpace,
        });
    }
    catch (error) {
        if (error instanceof Error &&
            error.message === "TITLE_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Title not found or inactive",
            });
        }
        if (error instanceof Error &&
            error.message === "FAILED_TO_GENERATE_JOIN_CODE") {
            return res.status(500).json({
                success: false,
                message: "Failed to generate room code",
            });
        }
        if (error instanceof Error &&
            error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Invalid request data",
                errors: error,
            });
        }
        console.error("Create watch space failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create watch space",
        });
    }
};
export const getById = async (req, res) => {
    try {
        const { id } = watchSpaceIdParamSchema.parse(req.params);
        const watchSpace = await getWatchSpaceById(id);
        if (!watchSpace) {
            return res.status(404).json({
                success: false,
                message: "Watch space not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: watchSpace,
        });
    }
    catch (error) {
        if (error instanceof Error &&
            error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Invalid watch space ID",
                errors: error,
            });
        }
        return res.status(500).json({
            success: false,
            message: "Failed to fetch watch space",
        });
    }
};
export const join = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const { joinCode } = joinWatchSpaceSchema.parse(req.body);
        const watchSpace = await joinWatchSpace(req.user.userId, joinCode);
        return res.status(200).json({
            success: true,
            message: "Joined watch space successfully",
            data: watchSpace,
        });
    }
    catch (error) {
        if (error instanceof Error &&
            error.message === "WATCH_SPACE_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Watch space not found",
            });
        }
        if (error instanceof Error &&
            error.message === "WATCH_SPACE_ENDED") {
            return res.status(409).json({
                success: false,
                message: "Watch space has ended",
            });
        }
        if (error instanceof Error &&
            error.message === "WATCH_SPACE_FULL") {
            return res.status(409).json({
                success: false,
                message: "Watch space is full",
            });
        }
        if (error instanceof Error &&
            error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Invalid join code",
                errors: error,
            });
        }
        console.error("Join watch space failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to join watch space",
        });
    }
};
export const leave = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const { id } = watchSpaceIdParamSchema.parse(req.params);
        const participant = await leaveWatchSpace(req.user.userId, id);
        return res.status(200).json({
            success: true,
            message: "Left watch space successfully",
            data: participant,
        });
    }
    catch (error) {
        if (error instanceof Error &&
            error.message === "NOT_A_PARTICIPANT") {
            return res.status(404).json({
                success: false,
                message: "You are not an active participant in this watch space",
            });
        }
        if (error instanceof Error &&
            error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Invalid watch space ID",
                errors: error,
            });
        }
        console.error("Leave watch space failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to leave watch space",
        });
    }
};
export const end = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const { id } = watchSpaceIdParamSchema.parse(req.params);
        const watchSpace = await endWatchSpace(req.user.userId, id);
        return res.status(200).json({
            success: true,
            message: "Watch space ended successfully",
            data: watchSpace,
        });
    }
    catch (error) {
        if (error instanceof Error &&
            error.message === "WATCH_SPACE_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Watch space not found",
            });
        }
        if (error instanceof Error &&
            error.message === "NOT_HOST") {
            return res.status(403).json({
                success: false,
                message: "Only the host can end this watch space",
            });
        }
        if (error instanceof Error &&
            error.message === "WATCH_SPACE_ALREADY_ENDED") {
            return res.status(409).json({
                success: false,
                message: "Watch space is already ended",
            });
        }
        if (error instanceof Error &&
            error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Invalid watch space ID",
                errors: error,
            });
        }
        console.error("End watch space failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to end watch space",
        });
    }
};
export const voteVariation = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const { id, variationId } = variationVoteParamSchema.parse(req.params);
        const result = await castVariationVote(req.user.userId, id, variationId);
        return res.status(200).json({
            success: true,
            message: "Variation vote cast successfully",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error &&
            error.message === "WATCH_SPACE_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Watch space not found",
            });
        }
        if (error instanceof Error &&
            error.message === "WATCH_SPACE_ENDED") {
            return res.status(409).json({
                success: false,
                message: "Watch space has ended",
            });
        }
        if (error instanceof Error &&
            error.message === "NOT_A_PARTICIPANT") {
            return res.status(403).json({
                success: false,
                message: "You are not an active participant in this watch space",
            });
        }
        if (error instanceof Error &&
            error.message === "VARIATION_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Variation not found",
            });
        }
        if (error instanceof Error &&
            error.message === "VARIATION_TITLE_MISMATCH") {
            return res.status(400).json({
                success: false,
                message: "Variation does not belong to this title",
            });
        }
        if (error instanceof Error &&
            error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Invalid variation vote request",
                errors: error,
            });
        }
        console.error("Vote variation failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to cast variation vote",
        });
    }
};
//# sourceMappingURL=ws.controller.js.map