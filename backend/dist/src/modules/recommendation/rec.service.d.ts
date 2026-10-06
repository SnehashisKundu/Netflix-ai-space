export declare const getRecommendations: (userId: string, limit: number) => Promise<{
    score: number;
    reason: string;
    description: string | null;
    duration: number | null;
    genre: string | null;
    id: string;
    name: string;
    thumbnailUrl: string | null;
}[]>;
//# sourceMappingURL=rec.service.d.ts.map