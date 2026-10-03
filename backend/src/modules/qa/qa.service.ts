import { generateAiResponse } from "../../lib/ai/ai.service.js";
import type { AiMessage } from "../../lib/ai/ai.types.js";

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

export const generateQaAnswer = async (
  input: GenerateQaAnswerInput,
) => {
  const sourceContext = input.sources
    .map((source) => {
      return [
        `Source ID: ${source.id}`,
        `Type: ${source.type}`,
        `Time: ${source.startTime}-${source.endTime ?? "open"}`,
        `Title: ${source.eventTitle ?? "N/A"}`,
        `Description: ${source.description ?? "N/A"}`,
        `Payload: ${JSON.stringify(source.payload ?? {})}`,
      ].join("\n");
    })
    .join("\n\n");

  const messages: AiMessage[] = [
    {
      role: "system",
      content:
        "Answer only using the supplied timeline metadata. " +
        "Do not invent facts. If the supplied metadata does not " +
        "contain enough information to answer the question, say " +
        "that the available timeline context does not provide " +
        "enough information.",
    },
    {
      role: "user",
      content: [
        `Question: ${input.question}`,
        `Current playback time: ${input.at}`,
        "",
        "Timeline sources:",
        sourceContext || "No timeline sources available.",
      ].join("\n"),
    },
  ];

  const result = await generateAiResponse({
    messages,
    temperature: 0,
    maxTokens: 500,
  });

  return {
    answer: result.text,
    sources: input.sources.map((source) => ({
      id: source.id,
      type: source.type,
      startTime: source.startTime,
      endTime: source.endTime,
      eventTitle: source.eventTitle,
    })),
  };
};