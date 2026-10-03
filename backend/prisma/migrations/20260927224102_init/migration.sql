-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('VIEWER', 'HOST', 'ADMIN');

-- CreateEnum
CREATE TYPE "TimelineEventType" AS ENUM ('SCENE', 'CHARACTER', 'TRIVIA', 'DIALOGUE', 'LOCATION', 'MUSIC', 'CUSTOM');

-- CreateEnum
CREATE TYPE "WatchSpaceStatus" AS ENUM ('ACTIVE', 'ENDED');

-- CreateEnum
CREATE TYPE "ParticipantRole" AS ENUM ('HOST', 'PARTICIPANT');

-- CreateEnum
CREATE TYPE "InteractionType" AS ENUM ('VIEW', 'LIKE', 'DISLIKE', 'COMPLETE', 'SKIP', 'WATCH');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'VIEWER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Title" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "thumbnailUrl" TEXT,
    "videoUrl" TEXT,
    "genre" TEXT,
    "duration" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Title_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimelineEvent" (
    "id" TEXT NOT NULL,
    "titleId" TEXT NOT NULL,
    "type" "TimelineEventType" NOT NULL,
    "startTime" DOUBLE PRECISION NOT NULL,
    "endTime" DOUBLE PRECISION,
    "eventTitle" TEXT,
    "description" TEXT,
    "payload" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimelineEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariationOption" (
    "id" TEXT NOT NULL,
    "timelineEventId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "locale" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VariationOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchSpace" (
    "id" TEXT NOT NULL,
    "titleId" TEXT NOT NULL,
    "hostId" TEXT NOT NULL,
    "name" TEXT,
    "status" "WatchSpaceStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "WatchSpace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchSpaceParticipant" (
    "id" TEXT NOT NULL,
    "watchSpaceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "ParticipantRole" NOT NULL DEFAULT 'PARTICIPANT',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leftAt" TIMESTAMP(3),

    CONSTRAINT "WatchSpaceParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaybackState" (
    "id" TEXT NOT NULL,
    "watchSpaceId" TEXT NOT NULL,
    "position" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "isPlaying" BOOLEAN NOT NULL DEFAULT false,
    "playbackRate" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "version" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlaybackState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "watchSpaceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "videoTime" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "titleId" TEXT NOT NULL,
    "type" "InteractionType" NOT NULL,
    "position" DOUBLE PRECISION,
    "value" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Interaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "Title_name_idx" ON "Title"("name");

-- CreateIndex
CREATE INDEX "Title_genre_idx" ON "Title"("genre");

-- CreateIndex
CREATE INDEX "Title_isActive_idx" ON "Title"("isActive");

-- CreateIndex
CREATE INDEX "TimelineEvent_titleId_idx" ON "TimelineEvent"("titleId");

-- CreateIndex
CREATE INDEX "TimelineEvent_titleId_startTime_idx" ON "TimelineEvent"("titleId", "startTime");

-- CreateIndex
CREATE INDEX "TimelineEvent_type_idx" ON "TimelineEvent"("type");

-- CreateIndex
CREATE INDEX "VariationOption_timelineEventId_idx" ON "VariationOption"("timelineEventId");

-- CreateIndex
CREATE INDEX "VariationOption_locale_idx" ON "VariationOption"("locale");

-- CreateIndex
CREATE INDEX "WatchSpace_titleId_idx" ON "WatchSpace"("titleId");

-- CreateIndex
CREATE INDEX "WatchSpace_hostId_idx" ON "WatchSpace"("hostId");

-- CreateIndex
CREATE INDEX "WatchSpace_status_idx" ON "WatchSpace"("status");

-- CreateIndex
CREATE INDEX "WatchSpace_createdAt_idx" ON "WatchSpace"("createdAt");

-- CreateIndex
CREATE INDEX "WatchSpaceParticipant_watchSpaceId_idx" ON "WatchSpaceParticipant"("watchSpaceId");

-- CreateIndex
CREATE INDEX "WatchSpaceParticipant_userId_idx" ON "WatchSpaceParticipant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "WatchSpaceParticipant_watchSpaceId_userId_key" ON "WatchSpaceParticipant"("watchSpaceId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "PlaybackState_watchSpaceId_key" ON "PlaybackState"("watchSpaceId");

-- CreateIndex
CREATE INDEX "ChatMessage_watchSpaceId_createdAt_idx" ON "ChatMessage"("watchSpaceId", "createdAt");

-- CreateIndex
CREATE INDEX "ChatMessage_userId_idx" ON "ChatMessage"("userId");

-- CreateIndex
CREATE INDEX "Interaction_userId_idx" ON "Interaction"("userId");

-- CreateIndex
CREATE INDEX "Interaction_titleId_idx" ON "Interaction"("titleId");

-- CreateIndex
CREATE INDEX "Interaction_userId_titleId_idx" ON "Interaction"("userId", "titleId");

-- CreateIndex
CREATE INDEX "Interaction_type_idx" ON "Interaction"("type");

-- AddForeignKey
ALTER TABLE "TimelineEvent" ADD CONSTRAINT "TimelineEvent_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Title"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariationOption" ADD CONSTRAINT "VariationOption_timelineEventId_fkey" FOREIGN KEY ("timelineEventId") REFERENCES "TimelineEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchSpace" ADD CONSTRAINT "WatchSpace_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Title"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchSpace" ADD CONSTRAINT "WatchSpace_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchSpaceParticipant" ADD CONSTRAINT "WatchSpaceParticipant_watchSpaceId_fkey" FOREIGN KEY ("watchSpaceId") REFERENCES "WatchSpace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchSpaceParticipant" ADD CONSTRAINT "WatchSpaceParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaybackState" ADD CONSTRAINT "PlaybackState_watchSpaceId_fkey" FOREIGN KEY ("watchSpaceId") REFERENCES "WatchSpace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_watchSpaceId_fkey" FOREIGN KEY ("watchSpaceId") REFERENCES "WatchSpace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaction" ADD CONSTRAINT "Interaction_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Title"("id") ON DELETE CASCADE ON UPDATE CASCADE;
