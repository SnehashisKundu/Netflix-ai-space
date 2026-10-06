-- CreateTable
CREATE TABLE "AiQuestionLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "titleId" TEXT NOT NULL,
    "watchSpaceId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "at" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AiQuestionLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AiQuestionLog_watchSpaceId_idx" ON "AiQuestionLog"("watchSpaceId");

-- CreateIndex
CREATE INDEX "AiQuestionLog_userId_idx" ON "AiQuestionLog"("userId");

-- CreateIndex
CREATE INDEX "AiQuestionLog_titleId_idx" ON "AiQuestionLog"("titleId");

-- CreateIndex
CREATE INDEX "AiQuestionLog_watchSpaceId_createdAt_idx" ON "AiQuestionLog"("watchSpaceId", "createdAt");

-- AddForeignKey
ALTER TABLE "AiQuestionLog" ADD CONSTRAINT "AiQuestionLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestionLog" ADD CONSTRAINT "AiQuestionLog_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Title"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuestionLog" ADD CONSTRAINT "AiQuestionLog_watchSpaceId_fkey" FOREIGN KEY ("watchSpaceId") REFERENCES "WatchSpace"("id") ON DELETE CASCADE ON UPDATE CASCADE;
