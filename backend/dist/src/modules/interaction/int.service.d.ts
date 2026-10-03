import type { CreateInteractionInput, UpdateInteractionInput } from "./int.validation.js";
export declare const createInteraction: (userId: string, titleId: string, input: CreateInteractionInput) => Promise<{
    id: string;
    userId: string;
    titleId: string;
    type: import("../../../generated/prisma/enums.js").InteractionType;
    position: number | null;
    value: number | null;
    createdAt: Date;
}>;
export declare const getInteractions: (userId: string, titleId: string) => Promise<{
    id: string;
    userId: string;
    titleId: string;
    type: import("../../../generated/prisma/enums.js").InteractionType;
    position: number | null;
    value: number | null;
    createdAt: Date;
}[]>;
export declare const getInteractionById: (userId: string, titleId: string, interactionId: string) => Promise<{
    id: string;
    userId: string;
    titleId: string;
    type: import("../../../generated/prisma/enums.js").InteractionType;
    position: number | null;
    value: number | null;
    createdAt: Date;
}>;
export declare const updateInteraction: (userId: string, titleId: string, interactionId: string, input: UpdateInteractionInput) => Promise<{
    id: string;
    userId: string;
    titleId: string;
    type: import("../../../generated/prisma/enums.js").InteractionType;
    position: number | null;
    value: number | null;
    createdAt: Date;
}>;
export declare const deleteInteraction: (userId: string, titleId: string, interactionId: string) => Promise<void>;
//# sourceMappingURL=int.service.d.ts.map