import crypto from "node:crypto";

import { prisma } from "../../lib/prisma.js";

import type {
  CreateWatchSpaceInput,
} from "./ws.validation.js";

const MAX_PARTICIPANTS = 5;

const generateJoinCode = () => {
  return crypto
    .randomBytes(4)
    .toString("base64url")
    .replace(/[-_]/g, "")
    .slice(0, 6)
    .toUpperCase();
};

const generateUniqueJoinCode = async () => {
  for (let attempt = 0; attempt < 10; attempt++) {
    const joinCode = generateJoinCode();

    const existing = await prisma.watchSpace.findUnique({
      where: {
        joinCode,
      },
      select: {
        id: true,
      },
    });

    if (!existing) {
      return joinCode;
    }
  }

  throw new Error("FAILED_TO_GENERATE_JOIN_CODE");
};

export const createWatchSpace = async (
  userId: string,
  input: CreateWatchSpaceInput,
) => {
  const title = await prisma.title.findFirst({
    where: {
      id: input.titleId,
      isActive: true,
    },
  });

  if (!title) {
    throw new Error("TITLE_NOT_FOUND");
  }

  const joinCode = await generateUniqueJoinCode();

  return prisma.$transaction(async (tx) => {
    const watchSpace = await tx.watchSpace.create({
      data: {
        titleId: input.titleId,
        hostId: userId,
        joinCode,
        name: input.name ?? null,
        maxParticipants: MAX_PARTICIPANTS,
      },
    });

    await tx.watchSpaceParticipant.create({
      data: {
        watchSpaceId: watchSpace.id,
        userId,
        role: "HOST",
      },
    });

    await tx.playbackState.create({
      data: {
        watchSpaceId: watchSpace.id,
      },
    });

    return tx.watchSpace.findUniqueOrThrow({
      where: {
        id: watchSpace.id,
      },
      include: {
        title: true,
        host: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        participants: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        playback: true,
      },
    });
  });
};

export const getWatchSpaceById = async (
  watchSpaceId: string,
) => {
  return prisma.watchSpace.findUnique({
    where: {
      id: watchSpaceId,
    },
    include: {
      title: true,
      host: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      participants: {
        where: {
          leftAt: null,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          joinedAt: "asc",
        },
      },
      playback: true,
    },
  });
};

export const joinWatchSpace = async (
  userId: string,
  joinCode: string,
) => {
  const watchSpaceIdResult = await prisma.watchSpace.findUnique({
    where: {
      joinCode,
    },
    select: {
      id: true,
    },
  });

  if (!watchSpaceIdResult) {
    throw new Error("WATCH_SPACE_NOT_FOUND");
  }

  const watchSpaceId = watchSpaceIdResult.id;

  await prisma.$transaction(async (tx) => {
    // Lock the WatchSpace row so concurrent joins
    // for the same room are serialized.
    const lockedRooms = await tx.$queryRaw<
      Array<{
        id: string;
        status: string;
        maxParticipants: number;
      }>
    >`
      SELECT
        id,
        status,
        "maxParticipants"
      FROM "WatchSpace"
      WHERE id = ${watchSpaceId}
      FOR UPDATE
    `;

    const lockedRoom = lockedRooms[0];

    if (!lockedRoom) {
      throw new Error("WATCH_SPACE_NOT_FOUND");
    }

    if (lockedRoom.status !== "ACTIVE") {
      throw new Error("WATCH_SPACE_ENDED");
    }

    const existingParticipant =
      await tx.watchSpaceParticipant.findUnique({
        where: {
          watchSpaceId_userId: {
            watchSpaceId,
            userId,
          },
        },
      });

    // Already inside the room.
    if (existingParticipant?.leftAt === null) {
      return;
    }

    const activeParticipantCount =
      await tx.watchSpaceParticipant.count({
        where: {
          watchSpaceId,
          leftAt: null,
        },
      });

    if (activeParticipantCount >= lockedRoom.maxParticipants) {
      throw new Error("WATCH_SPACE_FULL");
    }

    if (existingParticipant) {
      // Rejoin an old participant record.
      await tx.watchSpaceParticipant.update({
        where: {
          id: existingParticipant.id,
        },
        data: {
          leftAt: null,
          joinedAt: new Date(),
          role: "PARTICIPANT",
        },
      });
    } else {
      // First-time participant.
      await tx.watchSpaceParticipant.create({
        data: {
          watchSpaceId,
          userId,
          role: "PARTICIPANT",
        },
      });
    }
  });

  return getWatchSpaceById(watchSpaceId);
};

export const leaveWatchSpace = async (
  userId: string,
  watchSpaceId: string,
) => {
  const participant = await prisma.watchSpaceParticipant.findFirst({
    where: {
      watchSpaceId,
      userId,
      leftAt: null,
    },
  });

  if (!participant) {
    throw new Error("NOT_A_PARTICIPANT");
  }

  return prisma.watchSpaceParticipant.update({
    where: {
      id: participant.id,
    },
    data: {
      leftAt: new Date(),
    },
    select: {
      id: true,
      watchSpaceId: true,
      userId: true,
      role: true,
      joinedAt: true,
      leftAt: true,
    },
  });
};

export const endWatchSpace = async (
  userId: string,
  watchSpaceId: string,
) => {
  const watchSpace = await prisma.watchSpace.findUnique({
    where: {
      id: watchSpaceId,
    },
    select: {
      id: true,
      hostId: true,
      status: true,
    },
  });

  if (!watchSpace) {
    throw new Error("WATCH_SPACE_NOT_FOUND");
  }

  if (watchSpace.hostId !== userId) {
    throw new Error("NOT_HOST");
  }

  if (watchSpace.status === "ENDED") {
    throw new Error("WATCH_SPACE_ALREADY_ENDED");
  }

  return prisma.watchSpace.update({
    where: {
      id: watchSpaceId,
    },
    data: {
      status: "ENDED",
      endedAt: new Date(),
    },
    select: {
      id: true,
      titleId: true,
      hostId: true,
      name: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      endedAt: true,
    },
  });
};

export const validateWatchSpaceMembership = async (
  userId: string,
  watchSpaceId: string,
) => {
  const watchSpace = await prisma.watchSpace.findUnique({
    where: {
      id: watchSpaceId,
    },
    select: {
      id: true,
      status: true,
      hostId: true,
      titleId: true,
    },
  });

  if (!watchSpace) {
    throw new Error("WATCH_SPACE_NOT_FOUND");
  }

  if (watchSpace.status !== "ACTIVE") {
    throw new Error("WATCH_SPACE_ENDED");
  }

  const participant = await prisma.watchSpaceParticipant.findFirst({
    where: {
      watchSpaceId,
      userId,
      leftAt: null,
    },
    select: {
      id: true,
      userId: true,
      role: true,
    },
  });

  if (!participant) {
    throw new Error("NOT_A_PARTICIPANT");
  }

  return {
    watchSpace,
    participant,
  };
};

export const castVariationVote = async (
  userId: string,
  watchSpaceId: string,
  variationId: string,
) => {
  const { watchSpace } =
    await validateWatchSpaceMembership(
      userId,
      watchSpaceId,
    );

  const variation = await prisma.variationOption.findUnique({
    where: {
      id: variationId,
    },
    select: {
      id: true,
      timelineEventId: true,
      label: true,
      content: true,
      locale: true,
      isDefault: true,
      timelineEvent: {
        select: {
          titleId: true,
        },
      },
    },
  });

  if (!variation) {
    throw new Error("VARIATION_NOT_FOUND");
  }

  if (
    variation.timelineEvent.titleId !==
    watchSpace.titleId
  ) {
    throw new Error("VARIATION_TITLE_MISMATCH");
  }

  // One vote per user per variation point.
  const existingVote =
    await prisma.variationVote.findFirst({
      where: {
        watchSpaceId,
        timelineEventId: variation.timelineEventId,
        userId,
      },
      select: {
        id: true,
      },
    });

  const vote = existingVote
    ? await prisma.variationVote.update({
        where: {
          id: existingVote.id,
        },
        data: {
          variationOptionId: variation.id,
        },
        include: {
          variationOption: {
            select: {
              id: true,
              label: true,
              content: true,
              locale: true,
              isDefault: true,
            },
          },
        },
      })
    : await prisma.variationVote.create({
        data: {
          watchSpaceId,
          timelineEventId: variation.timelineEventId,
          variationOptionId: variation.id,
          userId,
        },
        include: {
          variationOption: {
            select: {
              id: true,
              label: true,
              content: true,
              locale: true,
              isDefault: true,
            },
          },
        },
      });

  // Count only votes belonging to this variation point.
  const voteCounts =
    await prisma.variationVote.groupBy({
      by: ["variationOptionId"],
      where: {
        watchSpaceId,
        timelineEventId: variation.timelineEventId,
      },
      _count: {
        variationOptionId: true,
      },
    });

  const totalVotes = voteCounts.reduce(
    (total, item) =>
      total + item._count.variationOptionId,
    0,
  );

  return {
    watchSpaceId: watchSpace.id,
    variation: vote.variationOption,
    totalVotes,
    results: voteCounts.map((item) => ({
      variationId: item.variationOptionId,
      votes: item._count.variationOptionId,
    })),
  };
};