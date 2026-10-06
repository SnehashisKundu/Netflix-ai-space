import { prisma } from "../../lib/prisma.js";
const SIGNAL_WEIGHTS = {
    LIKE: 5,
    COMPLETE: 4,
    WATCH: 3,
    VIEW: 2,
    DISLIKE: -5,
    SKIP: -3,
};
const POSITIVE_INTERACTIONS = [
    "LIKE",
    "COMPLETE",
    "WATCH",
    "VIEW",
];
const CONSUMED_INTERACTIONS = [
    "VIEW",
    "LIKE",
    "WATCH",
    "COMPLETE",
];
export const getRecommendations = async (userId, limit) => {
    const [titles, userInteractions] = await Promise.all([
        prisma.title.findMany({
            where: {
                isActive: true,
            },
            select: {
                id: true,
                name: true,
                description: true,
                thumbnailUrl: true,
                genre: true,
                duration: true,
            },
        }),
        prisma.interaction.findMany({
            where: {
                userId,
            },
            select: {
                titleId: true,
                type: true,
            },
        }),
    ]);
    /*
     * --------------------------------------------------
     * 1. Remove titles already consumed by this user
     * --------------------------------------------------
     */
    const consumedTitleIds = new Set(userInteractions
        .filter((interaction) => CONSUMED_INTERACTIONS.includes(interaction.type))
        .map((interaction) => interaction.titleId));
    /*
     * --------------------------------------------------
     * 2. Build user's genre affinity
     * --------------------------------------------------
     */
    const titleById = new Map(titles.map((title) => [title.id, title]));
    const genreScores = new Map();
    for (const interaction of userInteractions) {
        const title = titleById.get(interaction.titleId);
        if (!title?.genre) {
            continue;
        }
        const weight = SIGNAL_WEIGHTS[interaction.type] ?? 0;
        genreScores.set(title.genre, (genreScores.get(title.genre) ?? 0) +
            weight);
    }
    /*
     * --------------------------------------------------
     * 3. Get interaction data from other users
     * --------------------------------------------------
     */
    const otherInteractions = await prisma.interaction.findMany({
        where: {
            userId: {
                not: userId,
            },
        },
        select: {
            userId: true,
            titleId: true,
            type: true,
        },
    });
    /*
     * --------------------------------------------------
     * 4. Find users with overlapping positive interests
     *
     * Example:
     *
     * Current user:
     *   Dark -> LIKE
     *   Interstellar -> COMPLETE
     *
     * Similar user:
     *   Dark -> LIKE
     *   The Matrix -> LIKE
     *
     * Therefore:
     *   The Matrix becomes a collaborative candidate.
     * --------------------------------------------------
     */
    const currentPositiveTitleIds = new Set(userInteractions
        .filter((interaction) => POSITIVE_INTERACTIONS.includes(interaction.type))
        .map((interaction) => interaction.titleId));
    const similarUserScores = new Map();
    for (const interaction of otherInteractions) {
        if (!currentPositiveTitleIds.has(interaction.titleId)) {
            continue;
        }
        const weight = SIGNAL_WEIGHTS[interaction.type] ?? 0;
        similarUserScores.set(interaction.userId, (similarUserScores.get(interaction.userId) ?? 0) + weight);
    }
    /*
     * --------------------------------------------------
     * 5. Generate collaborative candidate scores
     *
     * Similar users' positive interactions become
     * candidate recommendations.
     * --------------------------------------------------
     */
    const collaborativeScores = new Map();
    for (const interaction of otherInteractions) {
        const similarity = similarUserScores.get(interaction.userId) ??
            0;
        if (similarity <= 0) {
            continue;
        }
        if (!POSITIVE_INTERACTIONS.includes(interaction.type)) {
            continue;
        }
        if (consumedTitleIds.has(interaction.titleId)) {
            continue;
        }
        const interactionWeight = SIGNAL_WEIGHTS[interaction.type] ?? 0;
        const score = similarity * interactionWeight;
        collaborativeScores.set(interaction.titleId, (collaborativeScores.get(interaction.titleId) ?? 0) + score);
    }
    /*
     * --------------------------------------------------
     * 6. Build final hybrid recommendations
     *
     * Content-based  = 60%
     * Collaborative  = 40%
     * --------------------------------------------------
     */
    const recommendations = titles
        .filter((title) => !consumedTitleIds.has(title.id))
        .map((title) => {
        const contentScore = title.genre
            ? genreScores.get(title.genre) ?? 0
            : 0;
        const collaborativeScore = collaborativeScores.get(title.id) ?? 0;
        const finalScore = contentScore * 0.6 +
            collaborativeScore * 0.4;
        let reason = "Recommended based on your viewing activity";
        if (collaborativeScore > 0 &&
            contentScore > 0) {
            reason =
                "Recommended based on your interests and similar viewers";
        }
        else if (collaborativeScore > 0) {
            reason =
                "Popular with viewers having similar viewing patterns";
        }
        else if (contentScore > 0) {
            reason =
                `Because you interact with ${title.genre} content`;
        }
        return {
            ...title,
            score: Number(finalScore.toFixed(2)),
            reason,
        };
    })
        .filter((item) => item.score > 0)
        .sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.name.localeCompare(b.name);
    })
        .slice(0, limit);
    return recommendations;
};
//# sourceMappingURL=rec.service.js.map