import { sendMessageSchema, watchSpaceChatParamSchema, } from "./chat.validation.js";
import { createChatMessage, getChatMessages, } from "./chat.service.js";
export const sendMessage = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const { watchSpaceId } = watchSpaceChatParamSchema.parse(req.params);
        const input = sendMessageSchema.parse(req.body);
        const message = await createChatMessage(req.user.userId, watchSpaceId, input);
        return res.status(201).json({
            success: true,
            message: "Chat message sent successfully",
            data: message,
        });
    }
    catch (error) {
        if (error instanceof Error && error.message === "WATCH_SPACE_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Watch space not found",
            });
        }
        if (error instanceof Error && error.message === "WATCH_SPACE_ENDED") {
            return res.status(409).json({
                success: false,
                message: "Watch space has ended",
            });
        }
        if (error instanceof Error && error.message === "NOT_A_PARTICIPANT") {
            return res.status(403).json({
                success: false,
                message: "You are not a participant of this watch space",
            });
        }
        if (error instanceof Error && error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Invalid chat message",
                errors: error,
            });
        }
        console.error("Send chat message failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to send chat message",
        });
    }
};
export const getMessages = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const { watchSpaceId } = watchSpaceChatParamSchema.parse(req.params);
        const messages = await getChatMessages(req.user.userId, watchSpaceId);
        return res.status(200).json({
            success: true,
            data: messages,
        });
    }
    catch (error) {
        if (error instanceof Error && error.message === "WATCH_SPACE_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Watch space not found",
            });
        }
        if (error instanceof Error && error.message === "WATCH_SPACE_ENDED") {
            return res.status(409).json({
                success: false,
                message: "Watch space has ended",
            });
        }
        if (error instanceof Error && error.message === "NOT_A_PARTICIPANT") {
            return res.status(403).json({
                success: false,
                message: "You are not a participant of this watch space",
            });
        }
        if (error instanceof Error && error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Invalid watch space ID",
                errors: error,
            });
        }
        console.error("Get chat messages failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch chat messages",
        });
    }
};
//# sourceMappingURL=chat.controller.js.map