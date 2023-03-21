import { BasePromptValue, LLMResult } from "../schema/index.js";
import { CallbackManager } from "../callbacks/index.js";
/**
 * Base interface for language model parameters.
 * A subclass of {@link BaseLanguageModel} should have a constructor that
 * takes in a parameter that extends this interface.
 */
export interface BaseLanguageModelParams {
    verbose?: boolean;
    callbackManager?: CallbackManager;
}
/**
 * Base class for language models.
 */
export declare abstract class BaseLanguageModel implements BaseLanguageModelParams {
    /**
     * Whether to print out response text.
     */
    verbose: boolean;
    callbackManager: CallbackManager;
    protected constructor(params: BaseLanguageModelParams);
    abstract generatePrompt(promptValues: BasePromptValue[], stop?: string[]): Promise<LLMResult>;
    abstract _modelType(): string;
    abstract getNumTokens(text: string): number;
}
