import { prisma } from "../../lib/prisma.js";
export const getDashboard = async (userId, limit) => {
    const [recentInteractions, activeParticipations] = await Promise.all([
        prisma.interaction.findMany({
            where: {
                userId,
                type: {
                    in: ["WATCH", "COMPLETE"],
                },
            },
            orderBy: {
                createdAt: "desc",
            },
            take: limit,
            include: {
                title: true,
            },
        }),
        prisma.watchSpaceParticipant.findMany({
            where: {
                userId,
                leftAt: null,
                watchSpace: {
                    status: "ACTIVE",
                },
            },
            orderBy: {
                joinedAt: "desc",
            },
            include: {
                watchSpace: {
                    include: {
                        title: true,
                        host: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        playback: true,
                    },
                },
            },
        }),
    ]);
    const recentlyWatched = recentInteractions.map((interaction) => ({
        interactionId: interaction.id,
        type: interaction.type,
        position: interaction.position,
        watchedAt: interaction.createdAt,
        title: interaction.title,
    }));
    const activeWatchSpaces = activeParticipations.map((participant) => ({
        watchSpaceId: participant.watchSpace.id,
        name: participant.watchSpace.name,
        joinCode: participant.watchSpace.joinCode,
        status: participant.watchSpace.status,
        joinedAt: participant.joinedAt,
        title: participant.watchSpace.title,
        host: participant.watchSpace.host,
        playback: participant.watchSpace.playback,
    }));
    return {
        recentlyWatched,
        activeWatchSpaces,
        quickRejoin: activeWatchSpaces,
    };
};
//# sourceMappingURL=dash.service.js.map