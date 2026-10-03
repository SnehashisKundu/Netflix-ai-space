import { env } from "../../config/env.js";
import { FallbackAiProvider } from "./fallback.provider.js";
import { GeminiProvider } from "./gemini.provider.js";
const primaryProvider = new GeminiProvider(env.GEMINI_PRIMARY_MODEL);
const fallbackProvider = new GeminiProvider(env.GEMINI_FALLBACK_MODEL);
export const aiProvider = new FallbackAiProvider([
    primaryProvider,
    fallbackProvider,
]);
//# sourceMappingURL=ai.provider.js.map