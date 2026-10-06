export declare const getDashboard: (userId: string, limit: number) => Promise<{
    recentlyWatched: {
        interactionId: string;
        type: import("../../../generated/prisma/enums.js").InteractionType;
        position: number | null;
        watchedAt: Date;
        title: {
            id: string;
            name: string;
            description: string | null;
            thumbnailUrl: string | null;
            videoUrl: string | null;
            genre: string | null;
            duration: number | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }[];
    activeWatchSpaces: {
        watchSpaceId: string;
        name: string | null;
        joinCode: string;
        status: import("../../../generated/prisma/enums.js").WatchSpaceStatus;
        joinedAt: Date;
        title: {
            id: string;
            name: string;
            description: string | null;
            thumbnailUrl: string | null;
            videoUrl: string | null;
            genre: string | null;
            duration: number | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        host: {
            id: string;
            name: string;
        };
        playback: {
            id: string;
            watchSpaceId: string;
            position: number;
            isPlaying: boolean;
            playbackRate: number;
            version: number;
            updatedAt: Date;
            syncedAt: Date;
        } | null;
    }[];
    quickRejoin: {
        watchSpaceId: string;
        name: string | null;
        joinCode: string;
        status: import("../../../generated/prisma/enums.js").WatchSpaceStatus;
        joinedAt: Date;
        title: {
            id: string;
            name: string;
            description: string | null;
            thumbnailUrl: string | null;
            videoUrl: string | null;
            genre: string | null;
            duration: number | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        host: {
            id: string;
            name: string;
        };
        playback: {
            id: string;
            watchSpaceId: string;
            position: number;
            isPlaying: boolean;
            playbackRate: number;
            version: number;
            updatedAt: Date;
            syncedAt: Date;
        } | null;
    }[];
}>;
//# sourceMappingURL=dash.service.d.ts.map