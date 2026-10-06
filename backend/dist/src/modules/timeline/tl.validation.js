import { z } from "zod";
export const timelineEventTypeSchema = z.enum([
    "SCENE",
    "CHARACTER",
    "TRIVIA",
    "DIALOGUE",
    "LOCATION",
    "MUSIC",
    "CUSTOM",
]);
export const createTimelineEventSchema = z
    .object({
    type: timelineEventTypeSchema,
    startTime: z
        .number()
        .min(0),
    endTime: z
        .number()
        .min(0)
        .optional()
        .nullable(),
    eventTitle: z
        .string()
        .trim()
        .min(1)
        .max(200)
        .optional()
        .nullable(),
    description: z
        .string()
        .trim()
        .max(2000)
        .optional()
        .nullable(),
    payload: z
        .unknown()
        .optional()
        .nullable(),
})
    .refine((data) => data.endTime === null ||
    data.endTime === undefined ||
    data.endTime >= data.startTime, {
    message: "endTime must be greater than or equal to startTime",
    path: ["endTime"],
});
export const updateTimelineEventSchema = z
    .object({
    type: timelineEventTypeSchema.optional(),
    startTime: z
        .number()
        .min(0)
        .optional(),
    endTime: z
        .number()
        .min(0)
        .optional()
        .nullable(),
    eventTitle: z
        .string()
        .trim()
        .min(1)
        .max(200)
        .optional()
        .nullable(),
    description: z
        .string()
        .trim()
        .max(2000)
        .optional()
        .nullable(),
    payload: z
        .unknown()
        .optional()
        .nullable(),
})
    .refine((data) => {
    if (data.startTime !== undefined &&
        data.endTime !== undefined &&
        data.endTime !== null) {
        return data.endTime >= data.startTime;
    }
    return true;
}, {
    message: "endTime must be greater than or equal to startTime",
    path: ["endTime"],
});
export const titleIdParamSchema = z.object({
    titleId: z.uuid(),
});
export const timelineEventParamSchema = z.object({
    titleId: z.uuid(),
    eventId: z.uuid(),
});
export const timelineContextQuerySchema = z
    .object({
    from: z.coerce.number().min(0),
    to: z.coerce.number().min(0),
})
    .refine((data) => data.to >= data.from, {
    message: "to must be greater than or equal to from",
    path: ["to"],
});
export const triviaAtQuerySchema = z.object({
    at: z.coerce.number().min(0),
});
export const qaQuerySchema = z.object({
    question: z
        .string()
        .trim()
        .min(1)
        .max(1000),
    at: z.coerce
        .number()
        .min(0),
    watchSpaceId: z
        .uuid()
        .optional(),
});
//# sourceMappingURL=tl.validation.js.map