export declare const getWatchSpaceAnalytics: (watchSpaceId: string, userId: string) => Promise<{
    watchSpace: {
        id: string;
        name: string | null;
        status: import("../../../generated/prisma/enums.js").WatchSpaceStatus;
        title: {
            id: string;
            name: string;
        };
    };
    session: {
        startedAt: Date;
        endedAt: Date | null;
        durationSeconds: number;
    };
    peakConcurrentParticipants: number;
    chatActivity: number;
    triviaCardsAvailable: number;
    aiQuestions: number;
}>;
//# sourceMappingURL=dash.analytics.service.d.ts.map