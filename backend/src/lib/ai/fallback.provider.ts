import { AiError } from "./ai.error.js";

import type {
  AiGenerateInput,
  AiGenerateOutput,
  AiProvider,
} from "./ai.types.js";

export class FallbackAiProvider implements AiProvider {
  private readonly providers: AiProvider[];

  constructor(providers: AiProvider[]) {
    if (providers.length === 0) {
      throw new Error("AI_NO_PROVIDERS_CONFIGURED");
    }

    this.providers = providers;
  }

  async generate(
    input: AiGenerateInput,
  ): Promise<AiGenerateOutput> {
    const tryProvider = async (
      index: number,
      lastError?: unknown,
    ): Promise<AiGenerateOutput> => {
      if (index >= this.providers.length) {
        throw lastError ?? new Error("AI_ALL_PROVIDERS_FAILED");
      }

      try {
        return await this.providers[index]!.generate(input);
      } catch (error) {
        if (
          error instanceof AiError &&
          !error.retryable
        ) {
          throw error;
        }

        console.error(
          "AI provider failed, trying fallback:",
          error,
        );

        return tryProvider(index + 1, error);
      }
    };

    return tryProvider(0);
  }
}