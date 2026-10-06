import type { CreateWatchSpaceInput } from "./ws.validation.js";
export declare const createWatchSpace: (userId: string, input: CreateWatchSpaceInput) => Promise<{
    host: {
        email: string;
        id: string;
        name: string;
    };
    participants: ({
        user: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        watchSpaceId: string;
        userId: string;
        role: import("../../../generated/prisma/enums.js").ParticipantRole;
        joinedAt: Date;
        leftAt: Date | null;
    })[];
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
} & {
    id: string;
    titleId: string;
    hostId: string;
    name: string | null;
    status: import("../../../generated/prisma/enums.js").WatchSpaceStatus;
    createdAt: Date;
    updatedAt: Date;
    endedAt: Date | null;
    joinCode: string;
    maxParticipants: number;
}>;
export declare const getWatchSpaceById: (watchSpaceId: string) => Promise<({
    host: {
        email: string;
        id: string;
        name: string;
    };
    participants: ({
        user: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        watchSpaceId: string;
        userId: string;
        role: import("../../../generated/prisma/enums.js").ParticipantRole;
        joinedAt: Date;
        leftAt: Date | null;
    })[];
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
} & {
    id: string;
    titleId: string;
    hostId: string;
    name: string | null;
    status: import("../../../generated/prisma/enums.js").WatchSpaceStatus;
    createdAt: Date;
    updatedAt: Date;
    endedAt: Date | null;
    joinCode: string;
    maxParticipants: number;
}) | null>;
export declare const joinWatchSpace: (userId: string, joinCode: string) => Promise<({
    host: {
        email: string;
        id: string;
        name: string;
    };
    participants: ({
        user: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        watchSpaceId: string;
        userId: string;
        role: import("../../../generated/prisma/enums.js").ParticipantRole;
        joinedAt: Date;
        leftAt: Date | null;
    })[];
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
} & {
    id: string;
    titleId: string;
    hostId: string;
    name: string | null;
    status: import("../../../generated/prisma/enums.js").WatchSpaceStatus;
    createdAt: Date;
    updatedAt: Date;
    endedAt: Date | null;
    joinCode: string;
    maxParticipants: number;
}) | null>;
export declare const leaveWatchSpace: (userId: string, watchSpaceId: string) => Promise<{
    id: string;
    joinedAt: Date;
    leftAt: Date | null;
    role: import("../../../generated/prisma/enums.js").ParticipantRole;
    userId: string;
    watchSpaceId: string;
}>;
export declare const endWatchSpace: (userId: string, watchSpaceId: string) => Promise<{
    createdAt: Date;
    endedAt: Date | null;
    hostId: string;
    id: string;
    name: string | null;
    status: import("../../../generated/prisma/enums.js").WatchSpaceStatus;
    titleId: string;
    updatedAt: Date;
}>;
export declare const validateWatchSpaceMembership: (userId: string, watchSpaceId: string) => Promise<{
    watchSpace: {
        hostId: string;
        id: string;
        status: import("../../../generated/prisma/enums.js").WatchSpaceStatus;
        titleId: string;
    };
    participant: {
        id: string;
        role: import("../../../generated/prisma/enums.js").ParticipantRole;
        userId: string;
    };
}>;
export declare const castVariationVote: (userId: string, watchSpaceId: string, variationId: string) => Promise<{
    watchSpaceId: string;
    variation: {
        content: string;
        id: string;
        isDefault: boolean;
        label: string;
        locale: string | null;
    };
    totalVotes: number;
    results: {
        variationId: string;
        votes: number;
    }[];
}>;
//# sourceMappingURL=ws.service.d.ts.map