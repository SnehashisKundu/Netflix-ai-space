-- CreateTable
CREATE TABLE "VariationVote" (
    "id" TEXT NOT NULL,
    "watchSpaceId" TEXT NOT NULL,
    "variationOptionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VariationVote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VariationVote_watchSpaceId_idx" ON "VariationVote"("watchSpaceId");

-- CreateIndex
CREATE INDEX "VariationVote_variationOptionId_idx" ON "VariationVote"("variationOptionId");

-- CreateIndex
CREATE INDEX "VariationVote_userId_idx" ON "VariationVote"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VariationVote_watchSpaceId_userId_key" ON "VariationVote"("watchSpaceId", "userId");

-- AddForeignKey
ALTER TABLE "VariationVote" ADD CONSTRAINT "VariationVote_watchSpaceId_fkey" FOREIGN KEY ("watchSpaceId") REFERENCES "WatchSpace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariationVote" ADD CONSTRAINT "VariationVote_variationOptionId_fkey" FOREIGN KEY ("variationOptionId") REFERENCES "VariationOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariationVote" ADD CONSTRAINT "VariationVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
