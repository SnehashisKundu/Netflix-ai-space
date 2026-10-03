import type { CreateVariationInput, UpdateVariationInput } from "./vr.validation.js";
export declare const createVariation: (timelineEventId: string, input: CreateVariationInput) => Promise<{
    id: string;
    timelineEventId: string;
    label: string;
    content: string;
    locale: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const getVariations: (timelineEventId: string) => Promise<{
    id: string;
    timelineEventId: string;
    label: string;
    content: string;
    locale: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const getVariationById: (timelineEventId: string, variationId: string) => Promise<{
    id: string;
    timelineEventId: string;
    label: string;
    content: string;
    locale: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const updateVariation: (timelineEventId: string, variationId: string, input: UpdateVariationInput) => Promise<{
    id: string;
    timelineEventId: string;
    label: string;
    content: string;
    locale: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const deleteVariation: (timelineEventId: string, variationId: string) => Promise<void>;
//# sourceMappingURL=vr.service.d.ts.map