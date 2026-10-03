export type AiErrorCode =
  | "AI_TIMEOUT"
  | "AI_RATE_LIMITED"
  | "AI_SERVER_ERROR"
  | "AI_PROVIDER_ERROR"
  | "AI_INVALID_REQUEST";

export class AiError extends Error {
  readonly code: AiErrorCode;
  readonly retryable: boolean;
  readonly status: number | undefined;

  constructor(
    code: AiErrorCode,
    message: string,
    options?: {
      retryable?: boolean;
      status?: number;
    },
  ) {
    super(message);

    this.name = "AiError";
    this.code = code;
    this.retryable =
      options?.retryable ?? false;
    this.status = options?.status;
  }
}