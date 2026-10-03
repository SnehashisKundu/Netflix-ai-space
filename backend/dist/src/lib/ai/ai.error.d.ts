export type AiErrorCode = "AI_TIMEOUT" | "AI_RATE_LIMITED" | "AI_SERVER_ERROR" | "AI_PROVIDER_ERROR" | "AI_INVALID_REQUEST";
export declare class AiError extends Error {
    readonly code: AiErrorCode;
    readonly retryable: boolean;
    readonly status: number | undefined;
    constructor(code: AiErrorCode, message: string, options?: {
        retryable?: boolean;
        status?: number;
    });
}
//# sourceMappingURL=ai.error.d.ts.map