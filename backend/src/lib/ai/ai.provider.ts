import { env } from "../../config/env.js";

import { FallbackAiProvider } from "./fallback.provider.js";
import { GeminiProvider } from "./gemini.provider.js";
import type { AiProvider } from "./ai.types.js";

const primaryProvider = new GeminiProvider(
  env.GEMINI_PRIMARY_MODEL,
);

const fallbackProvider = new GeminiProvider(
  env.GEMINI_FALLBACK_MODEL,
);

export const aiProvider: AiProvider =
  new FallbackAiProvider([
    primaryProvider,
    fallbackProvider,
  ]);