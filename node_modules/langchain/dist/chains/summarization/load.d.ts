import { BaseLLM } from "../../llms/index.js";
import { PromptTemplate } from "../../prompts/index.js";
import { StuffDocumentsChain, MapReduceDocumentsChain } from "../combine_docs_chain.js";
interface summarizationChainParams {
    prompt?: PromptTemplate;
    combineMapPrompt?: PromptTemplate;
    combinePrompt?: PromptTemplate;
    type?: "map_reduce" | "stuff";
}
export declare const loadSummarizationChain: (llm: BaseLLM, params?: summarizationChainParams) => StuffDocumentsChain | MapReduceDocumentsChain;
export {};
