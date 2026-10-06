import { ZodError } from "zod";
import { prisma } from "../../lib/prisma.js";
import { titleIdParamSchema, qaQuerySchema, } from "../timeline/tl.validation.js";
import { getQaContext } from "../timeline/tl.service.js";
import { generateQaAnswer } from "./qa.service.js";
export const askQuestionController = async (req, res) => {
    try {
        const { titleId } = titleIdParamSchema.parse(req.params);
        const query = qaQuerySchema.parse(req.query);
        const userId = req.user.userId;
        if (query.watchSpaceId) {
            const participant = await prisma.watchSpaceParticipant.findFirst({
                where: {
                    watchSpaceId: query.watchSpaceId,
                    userId,
                    leftAt: null,
                    watchSpace: {
                        status: "ACTIVE",
                        titleId,
                    },
                },
                select: {
                    id: true,
                },
            });
            if (!participant) {
                return res.status(403).json({
                    success: false,
                    message: "You are not an active participant of this watch space",
                });
            }
        }
        const context = await getQaContext(titleId, query);
        const result = await generateQaAnswer({
            question: context.question,
            at: context.at,
            sources: context.sources,
        });
        if (query.watchSpaceId) {
            await prisma.aiQuestionLog.create({
                data: {
                    userId,
                    titleId,
                    watchSpaceId: query.watchSpaceId,
                    question: context.question,
                    at: context.at,
                },
            });
        }
        return res.status(200).json({
            success: true,
            message: "Question answered successfully",
            data: result,
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
        console.error("Ask question error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to answer question",
        });
    }
};
//# sourceMappingURL=qa.controller.js.map