import type { CreateTimelineEventInput, UpdateTimelineEventInput, TimelineContextQuery, TriviaAtQuery, QaQuery } from "./tl.validation.js";
export declare const createTimelineEvent: (titleId: string, input: CreateTimelineEventInput) => Promise<{
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
}>;
export declare const getTimelineEvents: (titleId: string) => Promise<{
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
}[]>;
export declare const getTimelineContext: (titleId: string, query: TimelineContextQuery) => Promise<({
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
})[]>;
export declare const getTriviaAt: (titleId: string, query: TriviaAtQuery) => Promise<{
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
}[]>;
export declare const getQaContext: (titleId: string, query: QaQuery) => Promise<{
    question: string;
    at: number;
    sources: ({
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
}>;
export declare const getTimelineEventById: (titleId: string, eventId: string) => Promise<{
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
}>;
export declare const updateTimelineEvent: (titleId: string, eventId: string, input: UpdateTimelineEventInput) => Promise<{
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
}>;
export declare const deleteTimelineEvent: (titleId: string, eventId: string) => Promise<void>;
//# sourceMappingURL=tl.service.d.ts.map