import type { SendMessageInput } from "./chat.validation.js";
export declare const validateChatMembership: (userId: string, watchSpaceId: string) => Promise<void>;
export declare const createChatMessage: (userId: string, watchSpaceId: string, input: SendMessageInput) => Promise<{
    user: {
        id: string;
        name: string;
    };
} & {
    id: string;
    watchSpaceId: string;
    userId: string;
    message: string;
    videoTime: number | null;
    createdAt: Date;
}>;
export declare const getChatMessages: (userId: string, watchSpaceId: string) => Promise<({
    user: {
        id: string;
        name: string;
    };
} & {
    id: string;
    watchSpaceId: string;
    userId: string;
    message: string;
    videoTime: number | null;
    createdAt: Date;
})[]>;
//# sourceMappingURL=chat.service.d.ts.map