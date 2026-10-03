import { prisma } from "../../lib/prisma.js";
import type { SendMessageInput } from "./chat.validation.js";

export const validateChatMembership = async (
  userId: string,
  watchSpaceId: string,
) => {
  const watchSpace = await prisma.watchSpace.findUnique({
    where: {
      id: watchSpaceId,
    },
    select: {
      status: true,
    },
  });

  if (!watchSpace) {
    throw new Error("WATCH_SPACE_NOT_FOUND");
  }

  if (watchSpace.status !== "ACTIVE") {
    throw new Error("WATCH_SPACE_ENDED");
  }

  const participant =
    await prisma.watchSpaceParticipant.findFirst({
      where: {
        watchSpaceId,
        userId,
        leftAt: null,
      },
      select: {
        id: true,
      },
    });

  if (!participant) {
    throw new Error("NOT_A_PARTICIPANT");
  }
};

export const createChatMessage = async (
  userId: string,
  watchSpaceId: string,
  input: SendMessageInput,
) => {
  await validateChatMembership(userId, watchSpaceId);

  return prisma.chatMessage.create({
    data: {
      watchSpaceId,
      userId,
      message: input.message,
      videoTime: input.videoTime ?? null,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

export const getChatMessages = async (
  userId: string,
  watchSpaceId: string,
) => {
  await validateChatMembership(userId, watchSpaceId);

  return prisma.chatMessage.findMany({
    where: {
      watchSpaceId,
    },
    orderBy: {
      createdAt: "asc",
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};
