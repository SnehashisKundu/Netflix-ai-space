import { aiProvider } from "./ai.provider.js";
import type {
  AiGenerateInput,
  AiGenerateOutput,
} from "./ai.types.js";

export const generateAiResponse = async (
  input: AiGenerateInput,
): Promise<AiGenerateOutput> => {
  return aiProvider.generate(input);
};