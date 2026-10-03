import { prisma } from "../../lib/prisma.js";
import { Prisma } from "../../../generated/prisma/client.js";
export const createTimelineEvent = async (titleId, input) => {
    const title = await prisma.title.findUnique({
        where: {
            id: titleId,
        },
        select: {
            id: true,
        },
    });
    if (!title) {
        throw new Error("TITLE_NOT_FOUND");
    }
    return prisma.timelineEvent.create({
        data: {
            titleId,
            type: input.type,
            startTime: input.startTime,
            endTime: input.endTime ?? null,
            eventTitle: input.eventTitle ?? null,
            description: input.description ?? null,
            payload: input.payload ?? Prisma.JsonNull,
        },
    });
};
export const getTimelineEvents = async (titleId) => {
    const title = await prisma.title.findUnique({
        where: {
            id: titleId,
        },
        select: {
            id: true,
        },
    });
    if (!title) {
        throw new Error("TITLE_NOT_FOUND");
    }
    return prisma.timelineEvent.findMany({
        where: {
            titleId,
        },
        orderBy: {
            startTime: "asc",
        },
    });
};
export const getTimelineContext = async (titleId, query) => {
    const title = await prisma.title.findUnique({
        where: { id: titleId },
        select: { id: true },
    });
    if (!title) {
        throw new Error("TITLE_NOT_FOUND");
    }
    return prisma.timelineEvent.findMany({
        where: {
            titleId,
            startTime: {
                lte: query.to,
            },
            OR: [
                {
                    endTime: null,
                },
                {
                    endTime: {
                        gte: query.from,
                    },
                },
            ],
        },
        include: {
            variations: true,
        },
        orderBy: {
            startTime: "asc",
        },
    });
};
export const getTriviaAt = async (titleId, query) => {
    const title = await prisma.title.findUnique({
        where: { id: titleId },
        select: { id: true },
    });
    if (!title) {
        throw new Error("TITLE_NOT_FOUND");
    }
    return prisma.timelineEvent.findMany({
        where: {
            titleId,
            type: "TRIVIA",
            startTime: {
                lte: query.at,
            },
            OR: [
                {
                    endTime: null,
                },
                {
                    endTime: {
                        gte: query.at,
                    },
                },
            ],
        },
        orderBy: {
            startTime: "asc",
        },
    });
};
export const getQaContext = async (titleId, query) => {
    const title = await prisma.title.findUnique({
        where: { id: titleId },
        select: { id: true },
    });
    if (!title) {
        throw new Error("TITLE_NOT_FOUND");
    }
    const events = await prisma.timelineEvent.findMany({
        where: {
            titleId,
            startTime: {
                lte: query.at,
            },
        },
        include: {
            variations: true,
        },
        orderBy: {
            startTime: "desc",
        },
        take: 10,
    });
    return {
        question: query.question,
        at: query.at,
        sources: events,
    };
};
export const getTimelineEventById = async (titleId, eventId) => {
    const event = await prisma.timelineEvent.findFirst({
        where: {
            id: eventId,
            titleId,
        },
        include: {
            variations: true,
        },
    });
    if (!event) {
        throw new Error("TIMELINE_EVENT_NOT_FOUND");
    }
    return event;
};
export const updateTimelineEvent = async (titleId, eventId, input) => {
    const existingEvent = await prisma.timelineEvent.findFirst({
        where: {
            id: eventId,
            titleId,
        },
        select: {
            id: true,
            startTime: true,
            endTime: true,
        },
    });
    if (!existingEvent) {
        throw new Error("TIMELINE_EVENT_NOT_FOUND");
    }
    const nextStartTime = input.startTime ??
        existingEvent.startTime;
    const nextEndTime = input.endTime ?? existingEvent.endTime;
    if (nextEndTime !== null &&
        nextEndTime < nextStartTime) {
        throw new Error("END_TIME_BEFORE_START_TIME");
    }
    return prisma.timelineEvent.update({
        where: {
            id: eventId,
        },
        data: {
            ...(input.type !== undefined && {
                type: input.type,
            }),
            ...(input.startTime !== undefined && {
                startTime: input.startTime,
            }),
            ...(input.endTime !== undefined && {
                endTime: input.endTime,
            }),
            ...(input.eventTitle !== undefined && {
                eventTitle: input.eventTitle,
            }),
            ...(input.description !== undefined && {
                description: input.description,
            }),
            ...(input.payload !== undefined && {
                payload: input.payload ?? Prisma.JsonNull,
            }),
        },
    });
};
export const deleteTimelineEvent = async (titleId, eventId) => {
    const existingEvent = await prisma.timelineEvent.findFirst({
        where: {
            id: eventId,
            titleId,
        },
        select: {
            id: true,
        },
    });
    if (!existingEvent) {
        throw new Error("TIMELINE_EVENT_NOT_FOUND");
    }
    await prisma.timelineEvent.delete({
        where: {
            id: eventId,
        },
    });
};
//# sourceMappingURL=tl.service.js.map