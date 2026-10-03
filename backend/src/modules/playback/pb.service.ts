import { prisma } from "../../lib/prisma.js";
import type {
  PlaybackSeekInput,
  PlaybackUpdateInput,
} from "./pb.validation.js";

export const getPlaybackState = async (
  watchSpaceId: string,
) => {
  return prisma.playbackState.findUnique({
    where: {
      watchSpaceId,
    },
  });
};

export const updatePlaybackState = async (
  watchSpaceId: string,
  input: PlaybackUpdateInput,
) => {
  const playback = await prisma.playbackState.findUnique({
    where: {
      watchSpaceId,
    },
  });

  if (!playback) {
    throw new Error("PLAYBACK_STATE_NOT_FOUND");
  }

  return prisma.playbackState.update({
    where: {
      watchSpaceId,
    },
    data: {
      position: input.position,
      isPlaying: input.isPlaying,
      playbackRate: input.playbackRate,
      syncedAt: new Date(),
      version: {
        increment: 1,
      },
    },
  });
};

export const seekPlayback = async (
  watchSpaceId: string,
  input: PlaybackSeekInput,
) => {
  const playback = await prisma.playbackState.findUnique({
    where: {
      watchSpaceId,
    },
  });

  if (!playback) {
    throw new Error("PLAYBACK_STATE_NOT_FOUND");
  }

  return prisma.playbackState.update({
    where: {
      watchSpaceId,
    },
    data: {
      position: input.position,
      syncedAt: new Date(),
      version: {
        increment: 1,
      },
    },
  });
};