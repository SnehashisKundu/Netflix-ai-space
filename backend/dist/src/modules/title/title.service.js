import { prisma } from "../../lib/prisma.js";
export const createTitle = async (input) => {
    return prisma.title.create({
        data: {
            name: input.name,
            description: input.description ?? null,
            thumbnailUrl: input.thumbnailUrl ?? null,
            videoUrl: input.videoUrl ?? null,
            genre: input.genre ?? null,
            duration: input.duration ?? null,
        },
    });
};
export const getTitles = async () => {
    return prisma.title.findMany({
        where: {
            isActive: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
export const getTitleById = async (id) => {
    return prisma.title.findUnique({
        where: {
            id,
        },
        include: {
            timelineEvents: {
                orderBy: {
                    startTime: "asc",
                },
                include: {
                    variations: true,
                },
            },
        },
    });
};
export const updateTitle = async (id, input) => {
    return prisma.title.update({
        where: {
            id,
        },
        data: {
            ...(input.name !== undefined ? { name: input.name } : {}),
            ...(input.description !== undefined
                ? { description: input.description }
                : {}),
            ...(input.thumbnailUrl !== undefined
                ? { thumbnailUrl: input.thumbnailUrl }
                : {}),
            ...(input.videoUrl !== undefined ? { videoUrl: input.videoUrl } : {}),
            ...(input.genre !== undefined ? { genre: input.genre } : {}),
            ...(input.duration !== undefined ? { duration: input.duration } : {}),
        },
    });
};
export const deleteTitle = async (id) => {
    return prisma.title.update({
        where: {
            id,
        },
        data: {
            isActive: false,
        },
    });
};
//# sourceMappingURL=title.service.js.map