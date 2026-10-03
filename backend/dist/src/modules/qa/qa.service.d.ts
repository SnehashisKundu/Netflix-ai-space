type QaSource = {
    id: string;
    type: string;
    startTime: number;
    endTime: number | null;
    eventTitle: string | null;
    description: string | null;
    payload: unknown;
};
type GenerateQaAnswerInput = {
    question: string;
    at: number;
    sources: QaSource[];
};
export declare const generateQaAnswer: (input: GenerateQaAnswerInput) => Promise<{
    answer: string;
    sources: {
        id: string;
        type: string;
        startTime: number;
        endTime: number | null;
        eventTitle: string | null;
    }[];
}>;
export {};
//# sourceMappingURL=qa.service.d.ts.map