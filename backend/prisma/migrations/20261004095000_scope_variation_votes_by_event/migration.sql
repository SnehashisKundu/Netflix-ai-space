-- Add timeline event scope to existing votes
ALTER TABLE "VariationVote"
ADD COLUMN "timelineEventId" TEXT;

-- Backfill existing votes from their selected variation option
UPDATE "VariationVote" vv
SET "timelineEventId" = vo."timelineEventId"
FROM "VariationOption" vo
WHERE vv."variationOptionId" = vo."id";

-- Make the new scope mandatory
ALTER TABLE "VariationVote"
ALTER COLUMN "timelineEventId" SET NOT NULL;

-- Remove old one-vote-per-watch-space constraint
DROP INDEX IF EXISTS "VariationVote_watchSpaceId_userId_key";

-- Add one vote per user per variation point
CREATE UNIQUE INDEX "VariationVote_watchSpaceId_timelineEventId_userId_key"
ON "VariationVote"("watchSpaceId", "timelineEventId", "userId");

-- Index the new relation
CREATE INDEX "VariationVote_timelineEventId_idx"
ON "VariationVote"("timelineEventId");

-- Add relation
ALTER TABLE "VariationVote"
ADD CONSTRAINT "VariationVote_timelineEventId_fkey"
FOREIGN KEY ("timelineEventId")
REFERENCES "TimelineEvent"("id")
ON DELETE CASCADE
ON UPDATE CASCADE;