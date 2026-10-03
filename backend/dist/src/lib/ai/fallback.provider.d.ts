import type { AiGenerateInput, AiGenerateOutput, AiProvider } from "./ai.types.js";
export declare class FallbackAiProvider implements AiProvider {
    private readonly providers;
    constructor(providers: AiProvider[]);
    generate(input: AiGenerateInput): Promise<AiGenerateOutput>;
}
//# sourceMappingURL=fallback.provider.d.ts.map