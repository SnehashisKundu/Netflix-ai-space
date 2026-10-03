export type AiMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type AiGenerateInput = {
  messages: AiMessage[];
  temperature?: number;
  maxTokens?: number;
};

export type AiGenerateOutput = {
  text: string;
};

export interface AiProvider {
  generate(
    input: AiGenerateInput,
  ): Promise<AiGenerateOutput>;
}