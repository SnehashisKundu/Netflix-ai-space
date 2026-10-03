import { prisma } from "../../lib/prisma.js";

import type {
  CreateInteractionInput,
  UpdateInteractionInput,
} from "./int.validation.js";

export const createInteraction = async (
  userId: string,
  titleId: string,
  input: CreateInteractionInput,
) => {
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

export const getInteractions = async (
  userId: string,
  titleId: string,
) => {
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

export const getInteractionById = async (
  userId: string,
  titleId: string,
  interactionId: string,
) => {
  const interaction =
    await prisma.interaction.findFirst({
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

export const updateInteraction = async (
  userId: string,
  titleId: string,
  interactionId: string,
  input: UpdateInteractionInput,
) => {
  const existingInteraction =
    await prisma.interaction.findFirst({
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

export const deleteInteraction = async (
  userId: string,
  titleId: string,
  interactionId: string,
) => {
  const existingInteraction =
    await prisma.interaction.findFirst({
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