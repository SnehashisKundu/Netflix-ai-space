import { GoogleGenAI } from "@google/genai";

import { env } from "../../config/env.js";

import { AiError } from "./ai.error.js";

import type {
  AiGenerateInput,
  AiGenerateOutput,
  AiProvider,
} from "./ai.types.js";

const AI_TIMEOUT_MS = 8_000;

export class GeminiProvider implements AiProvider {
  private readonly client: GoogleGenAI;
  private readonly model: string;

  constructor(model: string) {
    this.client = new GoogleGenAI({
      apiKey: env.GEMINI_API_KEY,
    });

    this.model = model;
  }

  async generate(
    input: AiGenerateInput,
  ): Promise<AiGenerateOutput> {
    const systemMessage = input.messages.find(
      (message) => message.role === "system",
    );

    const conversation = input.messages
      .filter((message) => message.role !== "system")
      .map(
        (message) =>
          `${message.role.toUpperCase()}: ${message.content}`,
      )
      .join("\n\n");

    const request = this.client.models.generateContent({
      model: this.model,
      contents: conversation,
      config: {
        ...(systemMessage
          ? { systemInstruction: systemMessage.content }
          : {}),
        temperature: input.temperature ?? 0,
        maxOutputTokens: input.maxTokens ?? 500,
      },
    });

    try {
      const response = await Promise.race([
        request,
        new Promise<never>((_, reject) => {
          setTimeout(() => {
            reject(
              new AiError(
                "AI_TIMEOUT",
                `AI provider timed out after ${AI_TIMEOUT_MS}ms`,
                {
                  retryable: true,
                },
              ),
            );
          }, AI_TIMEOUT_MS);
        }),
      ]);

      const text = response.text?.trim();

      if (!text) {
        throw new AiError(
          "AI_PROVIDER_ERROR",
          "AI provider returned an empty response",
          {
            retryable: true,
          },
        );
      }

      return {
        text,
      };
    } catch (error) {
      if (error instanceof AiError) {
        throw error;
      }

      throw this.normalizeError(error);
    }
  }

  private normalizeError(error: unknown): AiError {
    const status = this.getStatus(error);

    if (status === 429) {
      return new AiError(
        "AI_RATE_LIMITED",
        "AI provider rate limit exceeded",
        {
          retryable: true,
          ...(status !== undefined ? { status } : {}),
        },
      );
    }

    if (status !== undefined && status >= 500) {
      return new AiError(
        "AI_SERVER_ERROR",
        "AI provider returned a server error",
        {
          retryable: true,
          ...(status !== undefined ? { status } : {}),
        },
      );
    }

    if (
      status === 400 ||
      status === 401 ||
      status === 403 ||
      status === 404
    ) {
      return new AiError(
        "AI_INVALID_REQUEST",
        "AI provider rejected the request",
        {
          retryable: false,
          status,
        },
      );
    }

    return new AiError(
      "AI_PROVIDER_ERROR",
      error instanceof Error
        ? error.message
        : "Unknown AI provider error",
      {
        retryable: true,
        ...(status !== undefined ? { status } : {}),
      },
    );
  }

  private getStatus(error: unknown): number | undefined {
    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      typeof error.status === "number"
    ) {
      return error.status;
    }

    return undefined;
  }
}