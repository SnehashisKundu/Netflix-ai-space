import { prisma } from "../../lib/prisma.js";
const calculatePeakConcurrentParticipants = (participants, sessionEnd) => {
    const events = [];
    for (const participant of participants) {
        events.push({
            time: participant.joinedAt.getTime(),
            delta: 1,
        });
        events.push({
            time: (participant.leftAt ?? sessionEnd).getTime(),
            delta: -1,
        });
    }
    events.sort((a, b) => {
        if (a.time !== b.time) {
            return a.time - b.time;
        }
        return a.delta - b.delta;
    });
    let current = 0;
    let peak = 0;
    for (const event of events) {
        current += event.delta;
        peak = Math.max(peak, current);
    }
    return peak;
};
export const getWatchSpaceAnalytics = async (watchSpaceId, userId) => {
    const watchSpace = await prisma.watchSpace.findUnique({
        where: {
            id: watchSpaceId,
        },
        select: {
            id: true,
            name: true,
            status: true,
            createdAt: true,
            endedAt: true,
            titleId: true,
            title: {
                select: {
                    id: true,
                    name: true,
                },
            },
            participants: {
                select: {
                    userId: true,
                    joinedAt: true,
                    leftAt: true,
                },
            },
        },
    });
    if (!watchSpace) {
        throw new Error("Watch space not found");
    }
    const isParticipant = watchSpace.participants.some((participant) => participant.userId === userId);
    if (!isParticipant) {
        throw new Error("You are not a participant of this watch space");
    }
    const sessionEnd = watchSpace.endedAt ?? new Date();
    const durationSeconds = Math.max(0, Math.floor((sessionEnd.getTime() -
        watchSpace.createdAt.getTime()) /
        1000));
    const peakConcurrentParticipants = calculatePeakConcurrentParticipants(watchSpace.participants, sessionEnd);
    const [chatActivity, triviaCardsAvailable, aiQuestions,] = await Promise.all([
        prisma.chatMessage.count({
            where: {
                watchSpaceId,
            },
        }),
        prisma.timelineEvent.count({
            where: {
                titleId: watchSpace.titleId,
                type: "TRIVIA",
            },
        }),
        prisma.aiQuestionLog.count({
            where: {
                watchSpaceId,
            },
        }),
    ]);
    return {
        watchSpace: {
            id: watchSpace.id,
            name: watchSpace.name,
            status: watchSpace.status,
            title: watchSpace.title,
        },
        session: {
            startedAt: watchSpace.createdAt,
            endedAt: watchSpace.endedAt,
            durationSeconds,
        },
        peakConcurrentParticipants,
        chatActivity,
        triviaCardsAvailable,
        aiQuestions,
    };
};
//# sourceMappingURL=dash.analytics.service.js.map