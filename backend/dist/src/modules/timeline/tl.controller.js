import { ZodError } from "zod";
import { createTimelineEvent, deleteTimelineEvent, getTimelineContext, getTimelineEventById, getTimelineEvents, getTriviaAt, getQaContext, updateTimelineEvent, } from "./tl.service.js";
import { createTimelineEventSchema, titleIdParamSchema, qaQuerySchema, timelineContextQuerySchema, timelineEventParamSchema, updateTimelineEventSchema, triviaAtQuerySchema, } from "./tl.validation.js";
export const createTimelineEventController = async (req, res) => {
    try {
        const { titleId } = titleIdParamSchema.parse(req.params);
        const input = createTimelineEventSchema.parse(req.body);
        const event = await createTimelineEvent(titleId, input);
        return res.status(201).json({
            success: true,
            message: "Timeline event created successfully",
            data: event,
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
            if (error.message === "TITLE_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Title not found",
                });
            }
        }
        console.error("Create timeline event error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create timeline event",
        });
    }
};
export const getTimelineEventsController = async (req, res) => {
    try {
        const { titleId } = titleIdParamSchema.parse(req.params);
        const events = await getTimelineEvents(titleId);
        return res.status(200).json({
            success: true,
            message: "Timeline events fetched successfully",
            data: events,
        });
    }
    catch (error) {
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
        console.error("Get timeline events error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch timeline events",
        });
    }
};
export const getTimelineEventByIdController = async (req, res) => {
    try {
        const { titleId, eventId } = timelineEventParamSchema.parse(req.params);
        const event = await getTimelineEventById(titleId, eventId);
        return res.status(200).json({
            success: true,
            message: "Timeline event fetched successfully",
            data: event,
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
            if (error.message ===
                "TIMELINE_EVENT_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Timeline event not found",
                });
            }
        }
        console.error("Get timeline event error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch timeline event",
        });
    }
};
export const updateTimelineEventController = async (req, res) => {
    try {
        const { titleId, eventId } = timelineEventParamSchema.parse(req.params);
        const input = updateTimelineEventSchema.parse(req.body);
        const event = await updateTimelineEvent(titleId, eventId, input);
        return res.status(200).json({
            success: true,
            message: "Timeline event updated successfully",
            data: event,
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
            if (error.message ===
                "TIMELINE_EVENT_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Timeline event not found",
                });
            }
            if (error.message ===
                "END_TIME_BEFORE_START_TIME") {
                return res.status(400).json({
                    success: false,
                    message: "endTime must be greater than or equal to startTime",
                });
            }
        }
        console.error("Update timeline event error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update timeline event",
        });
    }
};
export const deleteTimelineEventController = async (req, res) => {
    try {
        const { titleId, eventId } = timelineEventParamSchema.parse(req.params);
        await deleteTimelineEvent(titleId, eventId);
        return res.status(200).json({
            success: true,
            message: "Timeline event deleted successfully",
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
            if (error.message ===
                "TIMELINE_EVENT_NOT_FOUND") {
                return res.status(404).json({
                    success: false,
                    message: "Timeline event not found",
                });
            }
        }
        console.error("Delete timeline event error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete timeline event",
        });
    }
};
export const getTimelineContextController = async (req, res) => {
    try {
        const { titleId } = titleIdParamSchema.parse(req.params);
        const query = timelineContextQuerySchema.parse(req.query);
        const events = await getTimelineContext(titleId, query);
        return res.status(200).json({
            success: true,
            message: "Timeline context fetched successfully",
            data: events,
        });
    }
    catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: error.issues,
            });
        }
        if (error instanceof Error && error.message === "TITLE_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Title not found",
            });
        }
        return res.status(500).json({
            success: false,
            message: "Failed to fetch timeline context",
        });
    }
};
export const getTriviaAtController = async (req, res) => {
    try {
        const { titleId } = titleIdParamSchema.parse(req.params);
        const query = triviaAtQuerySchema.parse(req.query);
        const trivia = await getTriviaAt(titleId, query);
        return res.status(200).json({
            success: true,
            message: "Trivia fetched successfully",
            data: trivia,
        });
    }
    catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: error.issues,
            });
        }
        if (error instanceof Error &&
            error.message === "TITLE_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Title not found",
            });
        }
        console.error("Get trivia error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch trivia",
        });
    }
};
export const getQaContextController = async (req, res) => {
    try {
        const { titleId } = titleIdParamSchema.parse(req.params);
        const query = qaQuerySchema.parse(req.query);
        const context = await getQaContext(titleId, query);
        return res.status(200).json({
            success: true,
            message: "Q&A context fetched successfully",
            data: context,
        });
    }
    catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: error.issues,
            });
        }
        if (error instanceof Error &&
            error.message === "TITLE_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Title not found",
            });
        }
        console.error("Get Q&A context error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch Q&A context",
        });
    }
};
//# sourceMappingURL=tl.controller.js.map