import { prisma } from "../../lib/prisma.js";
export const createInteraction = async (userId, titleId, input) => {
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
    return prisma.interaction.create({
        data: {
            userId,
            titleId,
            type: input.type,
            position: input.position ?? null,
            value: input.value ?? null,
        },
    });
};
export const getInteractions = async (userId, titleId) => {
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
    return prisma.interaction.findMany({
        where: {
            userId,
            titleId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
export const getInteractionById = async (userId, titleId, interactionId) => {
    const interaction = await prisma.interaction.findFirst({
        where: {
            id: interactionId,
            userId,
            titleId,
        },
    });
    if (!interaction) {
        throw new Error("INTERACTION_NOT_FOUND");
    }
    return interaction;
};
export const updateInteraction = async (userId, titleId, interactionId, input) => {
    const existingInteraction = await prisma.interaction.findFirst({
        where: {
            id: interactionId,
            userId,
            titleId,
        },
        select: {
            id: true,
        },
    });
    if (!existingInteraction) {
        throw new Error("INTERACTION_NOT_FOUND");
    }
    return prisma.interaction.update({
        where: {
            id: interactionId,
        },
        data: {
            ...(input.type !== undefined && {
                type: input.type,
            }),
            ...(input.position !== undefined && {
                position: input.position,
            }),
            ...(input.value !== undefined && {
                value: input.value,
            }),
        },
    });
};
export const deleteInteraction = async (userId, titleId, interactionId) => {
    const existingInteraction = await prisma.interaction.findFirst({
        where: {
            id: interactionId,
            userId,
            titleId,
        },
        select: {
            id: true,
        },
    });
    if (!existingInteraction) {
        throw new Error("INTERACTION_NOT_FOUND");
    }
    await prisma.interaction.delete({
        where: {
            id: interactionId,
        },
    });
};
//# sourceMappingURL=int.service.js.map