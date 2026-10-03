import { z } from "zod";
export declare const timelineEventTypeSchema: z.ZodEnum<{
    CHARACTER: "CHARACTER";
    CUSTOM: "CUSTOM";
    DIALOGUE: "DIALOGUE";
    LOCATION: "LOCATION";
    MUSIC: "MUSIC";
    SCENE: "SCENE";
    TRIVIA: "TRIVIA";
}>;
export declare const createTimelineEventSchema: z.ZodObject<{
    type: z.ZodEnum<{
        CHARACTER: "CHARACTER";
        CUSTOM: "CUSTOM";
        DIALOGUE: "DIALOGUE";
        LOCATION: "LOCATION";
        MUSIC: "MUSIC";
        SCENE: "SCENE";
        TRIVIA: "TRIVIA";
    }>;
    startTime: z.ZodNumber;
    endTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    eventTitle: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    payload: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
}, z.core.$strip>;
export declare const updateTimelineEventSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<{
        CHARACTER: "CHARACTER";
        CUSTOM: "CUSTOM";
        DIALOGUE: "DIALOGUE";
        LOCATION: "LOCATION";
        MUSIC: "MUSIC";
        SCENE: "SCENE";
        TRIVIA: "TRIVIA";
    }>>;
    startTime: z.ZodOptional<z.ZodNumber>;
    endTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    eventTitle: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    payload: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
}, z.core.$strip>;
export declare const titleIdParamSchema: z.ZodObject<{
    titleId: z.ZodUUID;
}, z.core.$strip>;
export declare const timelineEventParamSchema: z.ZodObject<{
    titleId: z.ZodUUID;
    eventId: z.ZodUUID;
}, z.core.$strip>;
export declare const timelineContextQuerySchema: z.ZodObject<{
    from: z.ZodCoercedNumber<unknown>;
    to: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export type TimelineContextQuery = z.infer<typeof timelineContextQuerySchema>;
export type CreateTimelineEventInput = z.infer<typeof createTimelineEventSchema>;
export type UpdateTimelineEventInput = z.infer<typeof updateTimelineEventSchema>;
export declare const triviaAtQuerySchema: z.ZodObject<{
    at: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export type TriviaAtQuery = z.infer<typeof triviaAtQuerySchema>;
export declare const qaQuerySchema: z.ZodObject<{
    question: z.ZodString;
    at: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export type QaQuery = z.infer<typeof qaQuerySchema>;
//# sourceMappingURL=tl.validation.d.ts.map