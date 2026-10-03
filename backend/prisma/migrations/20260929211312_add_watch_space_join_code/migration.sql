/*
  Warnings:

  - A unique constraint covering the columns `[joinCode]` on the table `WatchSpace` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `joinCode` to the `WatchSpace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WatchSpace" ADD COLUMN     "joinCode" TEXT NOT NULL,
ADD COLUMN     "maxParticipants" INTEGER NOT NULL DEFAULT 5;

-- CreateIndex
CREATE UNIQUE INDEX "WatchSpace_joinCode_key" ON "WatchSpace"("joinCode");
