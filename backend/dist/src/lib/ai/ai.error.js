export class AiError extends Error {
    code;
    retryable;
    status;
    constructor(code, message, options) {
        super(message);
        this.name = "AiError";
        this.code = code;
        this.retryable =
            options?.retryable ?? false;
        this.status = options?.status;
    }
}
//# sourceMappingURL=ai.error.js.map