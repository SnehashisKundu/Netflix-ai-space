import type { Server } from "socket.io";
import type { AuthenticatedSocket } from "./socket.auth.js";

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

const getRoomName = (watchSpaceId: string) =>
  `watch-space:${watchSpaceId}`;

const ensureHost = (socket: AuthenticatedSocket) => {
  if (!socket.user) {
    throw new Error("AUTHENTICATION_REQUIRED");
  }

  if (
    socket.user.role !== "HOST" &&
    socket.user.role !== "ADMIN"
  ) {
    throw new Error("HOST_ONLY");
  }
};

/**
 * Make sure the socket is inside the watch-space room.
 */
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

export const registerSocketEvents = (
  io: Server,
  socket: AuthenticatedSocket,
) => {
  // ==========================================
  // WATCH SPACE JOIN
  // ==========================================
  socket.on(
    "watch-space:join",
    async (watchSpaceId: string) => {
      console.log(
        "WATCH SPACE JOIN EVENT:",
        watchSpaceId,
      );

      try {
        if (!socket.user) {
          socket.emit("watch-space:error", {
            message: "Authentication required",
          });
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

        const room = getRoomName(watchSpaceId);

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
          await getPlaybackState(watchSpaceId);

        socket.emit("watch-space:joined", {
          watchSpaceId,
          userId: socket.user.userId,
          role: socket.user.role,
        });

        socket.emit("playback:state", {
          playback,
          serverTime: Date.now(),
        });

        socket.to(room).emit(
          "watch-space:user-joined",
          {
            userId: socket.user.userId,
            role: socket.user.role,
          },
        );
      } catch (error) {
        console.error(
          "WATCH SPACE JOIN ERROR:",
          error,
        );

        if (
          error instanceof Error &&
          error.message === "WATCH_SPACE_NOT_FOUND"
        ) {
          socket.emit("watch-space:error", {
            message: "Watch space not found",
          });
          return;
        }

        if (
          error instanceof Error &&
          error.message === "WATCH_SPACE_ENDED"
        ) {
          socket.emit("watch-space:error", {
            message: "Watch space has ended",
          });
          return;
        }

        if (
          error instanceof Error &&
          error.message === "NOT_A_PARTICIPANT"
        ) {
          socket.emit("watch-space:error", {
            message:
              "You are not a participant of this watch space",
          });
          return;
        }

        socket.emit("watch-space:error", {
          message: "Failed to join watch space",
        });
      }
    },
  );

  // ==========================================
  // WATCH SPACE LEAVE
  // ==========================================

  socket.on(
    "watch-space:leave",
    async (watchSpaceId: string) => {
      console.log(
        "WATCH SPACE LEAVE EVENT:",
        watchSpaceId,
      );

      if (!socket.user) {
        return;
      }

      const room = getRoomName(watchSpaceId);

      await socket.leave(room);

      console.log(
        "SOCKET LEFT ROOM:",
        room,
      );

      socket.to(room).emit(
        "watch-space:user-left",
        {
          userId: socket.user.userId,
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
          socket.emit("chat:error", {
            message: "Authentication required",
          });
          return;
        }

        await validateWatchSpaceMembership(
          socket.user.userId,
          watchSpaceId,
        );

        console.log(
          "CHAT STEP 1: membership check passed",
        );

        const input = sendMessageSchema.parse({
          message,
          videoTime,
        });

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
          error.message === "WATCH_SPACE_NOT_FOUND"
        ) {
          socket.emit("chat:error", {
            message: "Watch space not found",
          });
          return;
        }

        if (
          error instanceof Error &&
          error.message === "WATCH_SPACE_ENDED"
        ) {
          socket.emit("chat:error", {
            message: "Watch space has ended",
          });
          return;
        }

        if (
          error instanceof Error &&
          error.message === "NOT_A_PARTICIPANT"
        ) {
          socket.emit("chat:error", {
            message:
              "You are not a participant of this watch space",
          });
          return;
        }

        if (
          error instanceof Error &&
          error.name === "ZodError"
        ) {
          socket.emit("chat:error", {
            message: "Invalid chat message",
          });
          return;
        }

        socket.emit("chat:error", {
          message: "Failed to send chat message",
        });
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
          playbackUpdateSchema.parse({
            position,
            isPlaying: true,
            playbackRate: 1,
          });

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
          await io.in(room).fetchSockets();

        console.log(
          "ROOM SOCKETS:",
          roomSockets.map(
            (roomSocket) => roomSocket.id,
          ),
        );

        io.to(room).emit(
          "playback:updated",
          {
            playback,
            action: "PLAY",
            serverTime: Date.now(),
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
          playbackUpdateSchema.parse({
            position,
            isPlaying: false,
            playbackRate: 1,
          });

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
            serverTime: Date.now(),
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
          playbackSeekSchema.parse({
            position,
          });

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
            serverTime: Date.now(),
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
    error.message === "HOST_ONLY"
  ) {
    socket.emit("playback:error", {
      message:
        "Only the host can control playback",
    });
    return;
  }

  if (
    error instanceof Error &&
    error.message ===
      "AUTHENTICATION_REQUIRED"
  ) {
    socket.emit("playback:error", {
      message: "Authentication required",
    });
    return;
  }

  if (
    error instanceof Error &&
    error.message ===
      "NOT_A_PARTICIPANT"
  ) {
    socket.emit("playback:error", {
      message:
        "You are not a participant of this watch space",
    });
    return;
  }

  if (
    error instanceof Error &&
    error.message ===
      "WATCH_SPACE_ENDED"
  ) {
    socket.emit("playback:error", {
      message:
        "Watch space has ended",
    });
    return;
  }

  if (
    error instanceof Error &&
    error.message ===
      "PLAYBACK_STATE_NOT_FOUND"
  ) {
    socket.emit("playback:error", {
      message:
        "Playback state not found",
    });
    return;
  }

  if (
    error instanceof Error &&
    error.name === "ZodError"
  ) {
    socket.emit("playback:error", {
      message: "Invalid playback data",
    });
    return;
  }

  socket.emit("playback:error", {
    message:
      "Failed to update playback",
  });
};