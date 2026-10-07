import { describe, expect, it, vi } from "vitest";

vi.mock("../../lib/prisma.js", () => ({
  prisma: {
    title: {
      findMany: vi.fn(),
    },
    interaction: {
      findMany: vi.fn(),
    },
  },
}));

import { prisma } from "../../lib/prisma.js";
import { getRecommendations } from "./rec.service.js";

describe("Recommendation Service", () => {
  it("should recommend titles based on the user's genre interaction", async () => {
    vi.mocked(prisma.title.findMany).mockResolvedValue([
      {
        id: "title-1",
        name: "Interstellar",
        description: "Space adventure",
        thumbnailUrl: null,
        genre: "Sci-Fi",
        duration: 5000,
      },
      {
        id: "title-2",
        name: "Dune",
        description: "Sci-Fi epic",
        thumbnailUrl: null,
        genre: "Sci-Fi",
        duration: 6000,
      },
      {
        id: "title-3",
        name: "The Conjuring",
        description: "Horror movie",
        thumbnailUrl: null,
        genre: "Horror",
        duration: 7000,
      },
    ] as never);

    vi.mocked(prisma.interaction.findMany)
      .mockResolvedValueOnce([
        {
          titleId: "title-1",
          type: "LIKE",
        },
      ] as never)
      .mockResolvedValueOnce([]);

    const recommendations =
      await getRecommendations("user-1", 10);

    expect(recommendations).toHaveLength(1);

    expect(recommendations[0]?.name).toBe(
      "Dune",
    );

    expect(recommendations[0]?.score).toBe(3);

    expect(recommendations[0]?.reason).toBe(
      "Because you interact with Sci-Fi content",
    );
  });
    it("should recommend titles based on similar users", async () => {
    vi.mocked(prisma.title.findMany).mockResolvedValue([
      {
        id: "title-1",
        name: "Interstellar",
        description: "Space adventure",
        thumbnailUrl: null,
        genre: "Sci-Fi",
        duration: 5000,
      },
      {
        id: "title-2",
        name: "Dune",
        description: "Sci-Fi epic",
        thumbnailUrl: null,
        genre: "Sci-Fi",
        duration: 6000,
      },
      {
        id: "title-3",
        name: "The Conjuring",
        description: "Horror movie",
        thumbnailUrl: null,
        genre: "Horror",
        duration: 7000,
      },
    ] as never);

    vi.mocked(prisma.interaction.findMany)
      .mockResolvedValueOnce([
        {
          titleId: "title-1",
          type: "LIKE",
        },
      ] as never)
      .mockResolvedValueOnce([
        {
          userId: "user-2",
          titleId: "title-1",
          type: "LIKE",
        },
        {
          userId: "user-2",
          titleId: "title-2",
          type: "LIKE",
        },
      ] as never);

    const recommendations =
      await getRecommendations("user-1", 10);

    expect(recommendations).toHaveLength(1);

    expect(recommendations[0]?.name).toBe(
      "Dune",
    );

    expect(recommendations[0]?.score).toBe(13);

    expect(recommendations[0]?.reason).toBe(
      "Recommended based on your interests and similar viewers",
    );
  });

    it("should return an empty array for a new user", async () => {
    vi.mocked(prisma.title.findMany).mockResolvedValue([
      {
        id: "title-1",
        name: "Interstellar",
        description: "Space adventure",
        thumbnailUrl: null,
        genre: "Sci-Fi",
        duration: 5000,
      },
      {
        id: "title-2",
        name: "Dune",
        description: "Sci-Fi epic",
        thumbnailUrl: null,
        genre: "Sci-Fi",
        duration: 6000,
      },
    ] as never);

    vi.mocked(prisma.interaction.findMany)
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([]);

    const recommendations =
      await getRecommendations("new-user", 10);

    expect(recommendations).toEqual([]);
  });
});