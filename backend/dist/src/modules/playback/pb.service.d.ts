import type { PlaybackSeekInput, PlaybackUpdateInput } from "./pb.validation.js";
export declare const getPlaybackState: (watchSpaceId: string) => Promise<{
    id: string;
    watchSpaceId: string;
    position: number;
    isPlaying: boolean;
    playbackRate: number;
    version: number;
    syncedAt: Date;
    updatedAt: Date;
} | null>;
export declare const updatePlaybackState: (watchSpaceId: string, input: PlaybackUpdateInput) => Promise<{
    id: string;
    watchSpaceId: string;
    position: number;
    isPlaying: boolean;
    playbackRate: number;
    version: number;
    syncedAt: Date;
    updatedAt: Date;
}>;
export declare const seekPlayback: (watchSpaceId: string, input: PlaybackSeekInput) => Promise<{
    id: string;
    watchSpaceId: string;
    position: number;
    isPlaying: boolean;
    playbackRate: number;
    version: number;
    syncedAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=pb.service.d.ts.map