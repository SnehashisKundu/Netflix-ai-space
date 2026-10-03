import type { CreateTitleInput, UpdateTitleInput } from "./title.validation.js";
export declare const createTitle: (input: CreateTitleInput) => Promise<{
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
}>;
export declare const getTitles: () => Promise<{
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
}[]>;
export declare const getTitleById: (id: string) => Promise<({
    timelineEvents: ({
        variations: {
            id: string;
            timelineEventId: string;
            label: string;
            content: string;
            locale: string | null;
            isDefault: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        titleId: string;
        type: import("../../../generated/prisma/enums.js").TimelineEventType;
        startTime: number;
        endTime: number | null;
        eventTitle: string | null;
        description: string | null;
        payload: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    })[];
} & {
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
}) | null>;
export declare const updateTitle: (id: string, input: UpdateTitleInput) => Promise<{
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
}>;
export declare const deleteTitle: (id: string) => Promise<{
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
}>;
//# sourceMappingURL=title.service.d.ts.map