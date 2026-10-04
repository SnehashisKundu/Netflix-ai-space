import type { Server } from "socket.io";
import type { AuthenticatedSocket } from "./socket.auth.js";
import { prisma } from "../lib/prisma.js";
import {
  getLocalizedVariation,
  getVariations,
} from "../modules/variation/vr.service.js";
import { validateWatchSpaceMembership } from "../modules/watch-space/ws.service.js";

import {
  getPlaybackState,
  seekPlayback,
  updatePlaybackState,
} from "../modules/playback/pb.service.js";

import {
  playbackSeekSchema,
  playbackUpdateSchema,
} from "../modules/playback/pb.validation.js";

import {
  createChatMessage,
} from "../modules/chat/chat.service.js";

import {
  sendMessageSchema,
} from "../modules/chat/chat.validation.js";

// ==========================================
// VARIATION VOTE STATE
// ==========================================

const activeVariationVotes = new Map<
  string,
  NodeJS.Timeout
>();

// ==========================================
// ROOM NAME
// ==========================================

const getRoomName = (watchSpaceId: string) =>
  `watch-space:${watchSpaceId}`;

// ==========================================
// HOST CHECK
// ==========================================

const ensureHost = (
  socket: AuthenticatedSocket,
) => {
  if (!socket.user) {
    throw new Error(
      "AUTHENTICATION_REQUIRED",
    );
  }

  if (
    socket.user.role !== "HOST" &&
    socket.user.role !== "ADMIN"
  ) {
    throw new Error("HOST_ONLY");
  }
};

// ==========================================
// ENSURE SOCKET IN ROOM
// ==========================================

const ensureSocketInRoom = async (
  socket: AuthenticatedSocket,
  watchSpaceId: string,
) => {
  const room = getRoomName(watchSpaceId);

  if (!socket.rooms.has(room)) {
    console.log(
      "SOCKET NOT IN ROOM. JOINING NOW:",
      room,
    );

    await socket.join(room);
  }

  console.log("SOCKET ROOM CHECK:", {
    socketId: socket.id,
    room,
    joined: socket.rooms.has(room),
    rooms: [...socket.rooms],
  });

  return room;
};

// ==========================================
// VARIATION VOTE DATA
// ==========================================

const getVariationVoteData = async (
  watchSpaceId: string,
  timelineEventId: string,
) => {
  const watchSpace =
    await prisma.watchSpace.findUnique({
      where: {
        id: watchSpaceId,
      },
      select: {
        id: true,
        titleId: true,
      },
    });

  if (!watchSpace) {
    throw new Error(
      "WATCH_SPACE_NOT_FOUND",
    );
  }

  const timelineEvent =
    await prisma.timelineEvent.findUnique({
      where: {
        id: timelineEventId,
      },
      select: {
        id: true,
        titleId: true,
      },
    });

  if (!timelineEvent) {
    throw new Error(
      "TIMELINE_EVENT_NOT_FOUND",
    );
  }

  if (
    timelineEvent.titleId !==
    watchSpace.titleId
  ) {
    throw new Error(
      "TIMELINE_TITLE_MISMATCH",
    );
  }

  const options = await getVariations(
    timelineEventId,
  );

  if (options.length < 2) {
    throw new Error(
      "INSUFFICIENT_VARIATION_OPTIONS",
    );
  }

  return {
    watchSpace,
    timelineEvent,
    options,
  };
};

// ==========================================
// FINALIZE VARIATION VOTE
// ==========================================

const finalizeVariationVote = async (
  io: Server,
  watchSpaceId: string,
  timelineEventId: string,
) => {
  const voteKey =
    `${watchSpaceId}:${timelineEventId}`;

  try {
    const room =
      getRoomName(watchSpaceId);

    const options =
      await getVariations(
        timelineEventId,
      );

    if (options.length < 2) {
      throw new Error(
        "INSUFFICIENT_VARIATION_OPTIONS",
      );
    }

    const voteCounts =
      await prisma.variationVote.groupBy({
        by: [
          "variationOptionId",
        ],
        where: {
          watchSpaceId,
          timelineEventId,
        },
        _count: {
          variationOptionId: true,
        },
      });

    const countMap = new Map(
      voteCounts.map((item) => [
        item.variationOptionId,
        item._count
          .variationOptionId,
      ]),
    );

    // Deterministic winner:
    // highest vote count wins.
    // On a tie, getVariations()
    // ordering decides the winner.
    const winningOption =
      options.reduce(
        (winner, option) => {
          const winnerVotes =
            countMap.get(
              winner.id,
            ) ?? 0;

          const optionVotes =
            countMap.get(
              option.id,
            ) ?? 0;

          return optionVotes >
            winnerVotes
            ? option
            : winner;
        },
        options[0]!,
      );

    const winningOptionId =
      winningOption.id;

    io.to(room).emit(
      "room.variation.applied",
      {
        variationId:
          timelineEventId,
        winningOptionId,
      },
    );

    console.log(
      "VARIATION VOTE APPLIED:",
      {
        room,
        timelineEventId,
        winningOptionId,
        votes:
          countMap.get(
            winningOptionId,
          ) ?? 0,
      },
    );
  } catch (error) {
    console.error(
      "VARIATION VOTE FINALIZE ERROR:",
      error,
    );

    io.to(
      getRoomName(
        watchSpaceId,
      ),
    ).emit(
      "variation:error",
      {
        message:
          "Failed to finalize variation vote",
      },
    );
  } finally {
    activeVariationVotes.delete(
      voteKey,
    );
  }
};

// ==========================================
// REGISTER SOCKET EVENTS
// ==========================================

export const registerSocketEvents = (
  io: Server,
  socket: AuthenticatedSocket,
) => {
  // ==========================================
  // WATCH SPACE JOIN
  // ==========================================

  socket.on(
    "watch-space:join",
    async (
      watchSpaceId: string,
    ) => {
      console.log(
        "WATCH SPACE JOIN EVENT:",
        watchSpaceId,
      );

      try {
        if (!socket.user) {
          socket.emit(
            "watch-space:error",
            {
              message:
                "Authentication required",
            },
          );
          return;
        }

        await validateWatchSpaceMembership(
          socket.user.userId,
          watchSpaceId,
        );

        console.log(
          "WATCH SPACE MEMBERSHIP VALID:",
          socket.user.userId,
          watchSpaceId,
        );

        const room =
          getRoomName(
            watchSpaceId,
          );

        await socket.join(room);

        console.log(
          "SOCKET JOINED ROOM:",
          room,
        );

        console.log(
          "CURRENT SOCKET ROOMS:",
          [...socket.rooms],
        );

        const playback =
          await getPlaybackState(
            watchSpaceId,
          );

        socket.emit(
          "watch-space:joined",
          {
            watchSpaceId,
            userId:
              socket.user.userId,
            role:
              socket.user.role,
          },
        );

        socket.emit(
          "playback:state",
          {
            playback,
            serverTime:
              Date.now(),
          },
        );

        socket
          .to(room)
          .emit(
            "watch-space:user-joined",
            {
              userId:
                socket.user
                  .userId,
              role:
                socket.user.role,
            },
          );
      } catch (error) {
        console.error(
          "WATCH SPACE JOIN ERROR:",
          error,
        );

        if (
          error instanceof Error &&
          error.message ===
            "WATCH_SPACE_NOT_FOUND"
        ) {
          socket.emit(
            "watch-space:error",
            {
              message:
                "Watch space not found",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "WATCH_SPACE_ENDED"
        ) {
          socket.emit(
            "watch-space:error",
            {
              message:
                "Watch space has ended",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "NOT_A_PARTICIPANT"
        ) {
          socket.emit(
            "watch-space:error",
            {
              message:
                "You are not a participant of this watch space",
            },
          );
          return;
        }

        socket.emit(
          "watch-space:error",
          {
            message:
              "Failed to join watch space",
          },
        );
      }
    },
  );

  // ==========================================
  // WATCH SPACE LEAVE
  // ==========================================

  socket.on(
    "watch-space:leave",
    async (
      watchSpaceId: string,
    ) => {
      console.log(
        "WATCH SPACE LEAVE EVENT:",
        watchSpaceId,
      );

      if (!socket.user) {
        return;
      }

      const room =
        getRoomName(
          watchSpaceId,
        );

      await socket.leave(room);

      console.log(
        "SOCKET LEFT ROOM:",
        room,
      );

      socket
        .to(room)
        .emit(
          "watch-space:user-left",
          {
            userId:
              socket.user.userId,
          },
        );
    },
  );

  // ==========================================
  // CHAT
  // ==========================================

  console.log(
    "REGISTERING CHAT SOCKET HANDLER:",
    socket.id,
  );

  socket.on(
    "chat:send",
    async (
      watchSpaceId: string,
      message: string,
      videoTime?: number,
    ) => {
      console.log(
        "CHAT SEND EVENT RECEIVED:",
        {
          watchSpaceId,
          message,
          videoTime,
          user: socket.user,
        },
      );

      try {
        if (!socket.user) {
          socket.emit(
            "chat:error",
            {
              message:
                "Authentication required",
            },
          );
          return;
        }

        await validateWatchSpaceMembership(
          socket.user.userId,
          watchSpaceId,
        );

        console.log(
          "CHAT STEP 1: membership check passed",
        );

        const input =
          sendMessageSchema.parse(
            {
              message,
              videoTime,
            },
          );

        console.log(
          "CHAT STEP 2: validation passed",
          input,
        );

        const chatMessage =
          await createChatMessage(
            socket.user.userId,
            watchSpaceId,
            input,
          );

        console.log(
          "CHAT STEP 3: message saved",
          chatMessage,
        );

        const room =
          await ensureSocketInRoom(
            socket,
            watchSpaceId,
          );

        console.log(
          "CHAT STEP 4: emitting to room",
          room,
        );

        io.to(room).emit(
          "chat:message",
          chatMessage,
        );

        console.log(
          "CHAT STEP 5: chat:message emitted",
        );
      } catch (error) {
        console.error(
          "CHAT SOCKET ERROR:",
          error,
        );

        if (
          error instanceof Error &&
          error.message ===
            "WATCH_SPACE_NOT_FOUND"
        ) {
          socket.emit(
            "chat:error",
            {
              message:
                "Watch space not found",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "WATCH_SPACE_ENDED"
        ) {
          socket.emit(
            "chat:error",
            {
              message:
                "Watch space has ended",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "NOT_A_PARTICIPANT"
        ) {
          socket.emit(
            "chat:error",
            {
              message:
                "You are not a participant of this watch space",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.name ===
            "ZodError"
        ) {
          socket.emit(
            "chat:error",
            {
              message:
                "Invalid chat message",
            },
          );
          return;
        }

        socket.emit(
          "chat:error",
          {
            message:
              "Failed to send chat message",
          },
        );
      }
    },
  );

  // ==========================================
  // PLAY
  // ==========================================

  socket.on(
    "playback:play",
    async (
      watchSpaceId: string,
      position: number,
    ) => {
      console.log(
        "PLAYBACK PLAY EVENT RECEIVED:",
        {
          watchSpaceId,
          position,
          user: socket.user,
        },
      );

      try {
        console.log(
          "PLAY STEP 1: checking host",
        );

        ensureHost(socket);

        console.log(
          "PLAY STEP 2: host check passed",
        );

        await validateWatchSpaceMembership(
          socket.user!.userId,
          watchSpaceId,
        );

        console.log(
          "PLAY STEP 3: membership check passed",
        );

        const input =
          playbackUpdateSchema.parse(
            {
              position,
              isPlaying: true,
              playbackRate: 1,
            },
          );

        console.log(
          "PLAY STEP 4: validation passed",
          input,
        );

        const playback =
          await updatePlaybackState(
            watchSpaceId,
            input,
          );

        console.log(
          "PLAY STEP 5: database updated",
          playback,
        );

        const room =
          await ensureSocketInRoom(
            socket,
            watchSpaceId,
          );

        console.log(
          "PLAY STEP 6: emitting to room",
          room,
        );

        const roomSockets =
          await io
            .in(room)
            .fetchSockets();

        console.log(
          "ROOM SOCKETS:",
          roomSockets.map(
            (roomSocket) =>
              roomSocket.id,
          ),
        );

        io.to(room).emit(
          "playback:updated",
          {
            playback,
            action: "PLAY",
            serverTime:
              Date.now(),
          },
        );

        console.log(
          "PLAY STEP 7: playback:updated emitted",
        );
      } catch (error) {
        handlePlaybackError(
          socket,
          error,
        );
      }
    },
  );

  // ==========================================
  // PAUSE
  // ==========================================

  socket.on(
    "playback:pause",
    async (
      watchSpaceId: string,
      position: number,
    ) => {
      console.log(
        "PLAYBACK PAUSE EVENT RECEIVED:",
        {
          watchSpaceId,
          position,
          user: socket.user,
        },
      );

      try {
        ensureHost(socket);

        await validateWatchSpaceMembership(
          socket.user!.userId,
          watchSpaceId,
        );

        const input =
          playbackUpdateSchema.parse(
            {
              position,
              isPlaying: false,
              playbackRate: 1,
            },
          );

        const playback =
          await updatePlaybackState(
            watchSpaceId,
            input,
          );

        const room =
          await ensureSocketInRoom(
            socket,
            watchSpaceId,
          );

        io.to(room).emit(
          "playback:updated",
          {
            playback,
            action: "PAUSE",
            serverTime:
              Date.now(),
          },
        );

        console.log(
          "PLAYBACK PAUSE EMITTED:",
          room,
        );
      } catch (error) {
        handlePlaybackError(
          socket,
          error,
        );
      }
    },
  );

  // ==========================================
  // SEEK
  // ==========================================

  socket.on(
    "playback:seek",
    async (
      watchSpaceId: string,
      position: number,
    ) => {
      console.log(
        "PLAYBACK SEEK EVENT RECEIVED:",
        {
          watchSpaceId,
          position,
          user: socket.user,
        },
      );

      try {
        ensureHost(socket);

        await validateWatchSpaceMembership(
          socket.user!.userId,
          watchSpaceId,
        );

        const input =
          playbackSeekSchema.parse(
            {
              position,
            },
          );

        const playback =
          await seekPlayback(
            watchSpaceId,
            input,
          );

        const room =
          await ensureSocketInRoom(
            socket,
            watchSpaceId,
          );

        io.to(room).emit(
          "playback:updated",
          {
            playback,
            action: "SEEK",
            serverTime:
              Date.now(),
          },
        );

        console.log(
          "PLAYBACK SEEK EMITTED:",
          room,
        );
      } catch (error) {
        handlePlaybackError(
          socket,
          error,
        );
      }
    },
  );

  // ==========================================
  // VARIATION VOTE OPEN
  // ==========================================

  socket.on(
    "variation:vote-open",
    async (
      watchSpaceId: string,
      timelineEventId: string,
      durationMs: number = 10_000,
    ) => {
      console.log(
        "VARIATION VOTE OPEN EVENT RECEIVED:",
        {
          watchSpaceId,
          timelineEventId,
          durationMs,
          user: socket.user,
        },
      );

      try {
        ensureHost(socket);

        await validateWatchSpaceMembership(
          socket.user!.userId,
          watchSpaceId,
        );

        if (
          !Number.isInteger(
            durationMs,
          ) ||
          durationMs < 1_000 ||
          durationMs > 60_000
        ) {
          throw new Error(
            "INVALID_VOTE_DURATION",
          );
        }

        const {
          timelineEvent,
          options,
        } =
          await getVariationVoteData(
            watchSpaceId,
            timelineEventId,
          );

        const room =
          await ensureSocketInRoom(
            socket,
            watchSpaceId,
          );

        const voteKey =
          `${watchSpaceId}:${timelineEvent.id}`;

        // Cancel an already active vote
        // for the same variation point.
        const existingTimer =
          activeVariationVotes.get(
            voteKey,
          );

        if (existingTimer) {
          clearTimeout(
            existingTimer,
          );

          activeVariationVotes.delete(
            voteKey,
          );
        }

        const closesAt =
          Date.now() +
          durationMs;

        io.to(room).emit(
          "room.variation.voteOpen",
          {
            variationId:
              timelineEvent.id,
            options:
              options.map(
                (option) => ({
                  id: option.id,
                  label: option.label,
                  content:
                    option.content,
                  locale:
                    option.locale,
                  isDefault:
                    option.isDefault,
                }),
              ),
            closesAt,
          },
        );

        // Automatically finalize when
        // the voting window expires.
        const timer =
          setTimeout(() => {
            void finalizeVariationVote(
              io,
              watchSpaceId,
              timelineEvent.id,
            );
          }, durationMs);

        activeVariationVotes.set(
          voteKey,
          timer,
        );

        console.log(
          "VARIATION VOTE OPENED:",
          {
            room,
            timelineEventId:
              timelineEvent.id,
            closesAt,
            durationMs,
          },
        );
      } catch (error) {
        console.error(
          "VARIATION VOTE OPEN ERROR:",
          error,
        );

        if (
          error instanceof Error &&
          error.message ===
            "HOST_ONLY"
        ) {
          socket.emit(
            "variation:error",
            {
              message:
                "Only the host can open a variation vote",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "WATCH_SPACE_NOT_FOUND"
        ) {
          socket.emit(
            "variation:error",
            {
              message:
                "Watch space not found",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "WATCH_SPACE_ENDED"
        ) {
          socket.emit(
            "variation:error",
            {
              message:
                "Watch space has ended",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "NOT_A_PARTICIPANT"
        ) {
          socket.emit(
            "variation:error",
            {
              message:
                "You are not a participant of this watch space",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "TIMELINE_EVENT_NOT_FOUND"
        ) {
          socket.emit(
            "variation:error",
            {
              message:
                "Timeline event not found",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "TIMELINE_TITLE_MISMATCH"
        ) {
          socket.emit(
            "variation:error",
            {
              message:
                "Timeline event does not belong to this title",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "INSUFFICIENT_VARIATION_OPTIONS"
        ) {
          socket.emit(
            "variation:error",
            {
              message:
                "At least two variation options are required",
            },
          );
          return;
        }

        if (
          error instanceof Error &&
          error.message ===
            "INVALID_VOTE_DURATION"
        ) {
          socket.emit(
            "variation:error",
            {
              message:
                "Vote duration must be between 1 and 60 seconds",
            },
          );
          return;
        }

        socket.emit(
          "variation:error",
          {
            message:
              "Failed to open variation vote",
          },
        );
      }
    },
  );

  // ==========================================
// SUBTITLE / LOCALIZATION SWAP
// ==========================================

socket.on(
  "subtitle:swap",
  async (
    watchSpaceId: string,
    timelineEventId: string,
    locale: string,
  ) => {
    console.log(
      "SUBTITLE SWAP EVENT RECEIVED:",
      {
        watchSpaceId,
        timelineEventId,
        locale,
        user: socket.user,
      },
    );

    try {
      if (!socket.user) {
        socket.emit(
          "subtitle:error",
          {
            message:
              "Authentication required",
          },
        );
        return;
      }

      await validateWatchSpaceMembership(
        socket.user.userId,
        watchSpaceId,
      );

      if (
        typeof locale !== "string" ||
        locale.trim().length < 2 ||
        locale.trim().length > 20
      ) {
        throw new Error(
          "INVALID_LOCALE",
        );
      }

      const variation =
        await getLocalizedVariation(
          timelineEventId,
          locale,
        );

      const timelineEvent =
        await prisma.timelineEvent.findUnique({
          where: {
            id: timelineEventId,
          },
          select: {
            id: true,
            titleId: true,
          },
        });

      if (!timelineEvent) {
        throw new Error(
          "TIMELINE_EVENT_NOT_FOUND",
        );
      }

      const watchSpace =
        await prisma.watchSpace.findUnique({
          where: {
            id: watchSpaceId,
          },
          select: {
            id: true,
            titleId: true,
          },
        });

      if (!watchSpace) {
        throw new Error(
          "WATCH_SPACE_NOT_FOUND",
        );
      }

      if (
        timelineEvent.titleId !==
        watchSpace.titleId
      ) {
        throw new Error(
          "TIMELINE_TITLE_MISMATCH",
        );
      }

      // Send only to the requesting viewer.
      // Playback state is NOT touched.
      socket.emit(
        "subtitle:swapped",
        {
          timelineEventId:
            timelineEvent.id,

          variationId:
            variation.id,

          locale:
            variation.locale,

          label:
            variation.label,

          content:
            variation.content,

          isDefault:
            variation.isDefault,

          serverTime:
            Date.now(),
        },
      );

      console.log(
        "SUBTITLE SWAP APPLIED:",
        {
          socketId: socket.id,
          timelineEventId,
          variationId:
            variation.id,
          locale:
            variation.locale,
        },
      );
    } catch (error) {
      console.error(
        "SUBTITLE SWAP ERROR:",
        error,
      );

      if (
        error instanceof Error &&
        error.message ===
          "WATCH_SPACE_NOT_FOUND"
      ) {
        socket.emit(
          "subtitle:error",
          {
            message:
              "Watch space not found",
          },
        );
        return;
      }

      if (
        error instanceof Error &&
        error.message ===
          "WATCH_SPACE_ENDED"
      ) {
        socket.emit(
          "subtitle:error",
          {
            message:
              "Watch space has ended",
          },
        );
        return;
      }

      if (
        error instanceof Error &&
        error.message ===
          "NOT_A_PARTICIPANT"
      ) {
        socket.emit(
          "subtitle:error",
          {
            message:
              "You are not a participant of this watch space",
          },
        );
        return;
      }

      if (
        error instanceof Error &&
        error.message ===
          "TIMELINE_EVENT_NOT_FOUND"
      ) {
        socket.emit(
          "subtitle:error",
          {
            message:
              "Timeline event not found",
          },
        );
        return;
      }

      if (
        error instanceof Error &&
        error.message ===
          "TIMELINE_TITLE_MISMATCH"
      ) {
        socket.emit(
          "subtitle:error",
          {
            message:
              "Timeline event does not belong to this title",
          },
        );
        return;
      }

      if (
        error instanceof Error &&
        error.message ===
          "LOCALIZED_VARIATION_NOT_FOUND"
      ) {
        socket.emit(
          "subtitle:error",
          {
            message:
              "Requested locale variation not found",
          },
        );
        return;
      }

      if (
        error instanceof Error &&
        error.message ===
          "INVALID_LOCALE"
      ) {
        socket.emit(
          "subtitle:error",
          {
            message:
              "Invalid locale",
          },
        );
        return;
      }

      socket.emit(
        "subtitle:error",
        {
          message:
            "Failed to swap subtitle localization",
        },
      );
    }
  },
);
};

// ==========================================
// PLAYBACK ERROR HANDLER
// ==========================================

const handlePlaybackError = (
  socket: AuthenticatedSocket,
  error: unknown,
) => {
  console.error(
    "PLAYBACK SOCKET ERROR:",
    error,
  );

  if (
    error instanceof Error &&
    error.message ===
      "HOST_ONLY"
  ) {
    socket.emit(
      "playback:error",
      {
        message:
          "Only the host can control playback",
      },
    );
    return;
  }

  if (
    error instanceof Error &&
    error.message ===
      "AUTHENTICATION_REQUIRED"
  ) {
    socket.emit(
      "playback:error",
      {
        message:
          "Authentication required",
      },
    );
    return;
  }

  if (
    error instanceof Error &&
    error.message ===
      "NOT_A_PARTICIPANT"
  ) {
    socket.emit(
      "playback:error",
      {
        message:
          "You are not a participant of this watch space",
      },
    );
    return;
  }

  if (
    error instanceof Error &&
    error.message ===
      "WATCH_SPACE_ENDED"
  ) {
    socket.emit(
      "playback:error",
      {
        message:
          "Watch space has ended",
      },
    );
    return;
  }

  if (
    error instanceof Error &&
    error.message ===
      "PLAYBACK_STATE_NOT_FOUND"
  ) {
    socket.emit(
      "playback:error",
      {
        message:
          "Playback state not found",
      },
    );
    return;
  }

  if (
    error instanceof Error &&
    error.name === "ZodError"
  ) {
    socket.emit(
      "playback:error",
      {
        message:
          "Invalid playback data",
      },
    );
    return;
  }

  socket.emit(
    "playback:error",
    {
      message:
        "Failed to update playback",
    },
  );
};