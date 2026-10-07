import { describe, expect, it, vi } from "vitest";
vi.mock("../../lib/prisma.js", () => ({
    prisma: {
        watchSpace: {
            findUnique: vi.fn(),
        },
        watchSpaceParticipant: {
            findUnique: vi.fn(),
        },
        $transaction: vi.fn(),
    },
}));
import { prisma } from "../../lib/prisma.js";
import { joinWatchSpace } from "./ws.service.js";
describe("Watch Space Service", () => {
    it("should join an active watch space", async () => {
        const transactionClient = {
            $queryRaw: vi.fn().mockResolvedValue([
                {
                    id: "space-1",
                    titleId: "title-1",
                    status: "ACTIVE",
                    maxParticipants: 5,
                },
            ]),
            watchSpaceParticipant: {
                findUnique: vi.fn().mockResolvedValue(null),
                create: vi.fn().mockResolvedValue({
                    id: "participant-1",
                    watchSpaceId: "space-1",
                    userId: "user-1",
                    joinedAt: new Date(),
                    leftAt: null,
                }),
                update: vi.fn(),
                count: vi.fn().mockResolvedValue(1),
            },
        };
        vi.mocked(prisma.watchSpace.findUnique).mockResolvedValue({
            id: "space-1",
            titleId: "title-1",
            status: "ACTIVE",
            maxParticipants: 5,
        });
        vi.mocked(prisma.$transaction).mockImplementation(async (callback) => {
            return callback(transactionClient);
        });
        const result = await joinWatchSpace("space-1", "user-1");
        expect(prisma.$transaction).toHaveBeenCalled();
        expect(transactionClient.$queryRaw).toHaveBeenCalled();
        expect(transactionClient.watchSpaceParticipant
            .findUnique).toHaveBeenCalled();
        expect(transactionClient.watchSpaceParticipant
            .create).toHaveBeenCalled();
        expect(result).toEqual({
            id: "space-1",
            titleId: "title-1",
            status: "ACTIVE",
            maxParticipants: 5,
        });
    });
    it("should reuse an existing participant when the user rejoins", async () => {
        const existingParticipant = {
            id: "participant-1",
            watchSpaceId: "space-1",
            userId: "user-1",
            joinedAt: new Date("2026-10-07T03:00:00.000Z"),
            leftAt: new Date("2026-10-07T03:30:00.000Z"),
        };
        const updatedParticipant = {
            ...existingParticipant,
            joinedAt: new Date(),
            leftAt: null,
        };
        const transactionClient = {
            $queryRaw: vi.fn().mockResolvedValue([
                {
                    id: "space-1",
                    titleId: "title-1",
                    status: "ACTIVE",
                    maxParticipants: 5,
                },
            ]),
            watchSpaceParticipant: {
                findUnique: vi.fn().mockResolvedValue(existingParticipant),
                create: vi.fn(),
                update: vi.fn().mockResolvedValue(updatedParticipant),
                count: vi.fn().mockResolvedValue(1),
            },
        };
        vi.mocked(prisma.$transaction).mockImplementation(async (callback) => {
            return callback(transactionClient);
        });
        const result = await joinWatchSpace("space-1", "user-1");
        expect(transactionClient.watchSpaceParticipant
            .findUnique).toHaveBeenCalled();
        expect(transactionClient.watchSpaceParticipant
            .update).toHaveBeenCalled();
        expect(transactionClient.watchSpaceParticipant
            .create).not.toHaveBeenCalled();
        expect(result).toEqual({
            id: "space-1",
            titleId: "title-1",
            status: "ACTIVE",
            maxParticipants: 5,
        });
    });
    it("should reject joining when the watch space is full", async () => {
        const transactionClient = {
            $queryRaw: vi.fn().mockResolvedValue([
                {
                    id: "space-1",
                    titleId: "title-1",
                    status: "ACTIVE",
                    maxParticipants: 2,
                },
            ]),
            watchSpaceParticipant: {
                findUnique: vi.fn().mockResolvedValue(null),
                create: vi.fn(),
                update: vi.fn(),
                count: vi.fn().mockResolvedValue(2),
            },
        };
        vi.mocked(prisma.$transaction).mockImplementation(async (callback) => {
            return callback(transactionClient);
        });
        await expect(joinWatchSpace("space-1", "user-3")).rejects.toThrow();
        expect(transactionClient.watchSpaceParticipant
            .create).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=ws.service.test.js.map