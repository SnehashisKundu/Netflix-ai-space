import type { AiGenerateInput, AiGenerateOutput, AiProvider } from "./ai.types.js";
export declare class GeminiProvider implements AiProvider {
    private readonly client;
    private readonly model;
    constructor(model: string);
    generate(input: AiGenerateInput): Promise<AiGenerateOutput>;
    private normalizeError;
    private getStatus;
}
//# sourceMappingURL=gemini.provider.d.ts.map