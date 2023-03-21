import { BaseLLM } from "../../llms/index.js";
import { PromptTemplate } from "../../prompts/index.js";
import { StuffDocumentsChain, MapReduceDocumentsChain } from "../combine_docs_chain.js";
interface qaChainParams {
    prompt?: PromptTemplate;
    combineMapPrompt?: PromptTemplate;
    combinePrompt?: PromptTemplate;
    type?: string;
}
export declare const loadQAChain: (llm: BaseLLM, params?: qaChainParams) => StuffDocumentsChain | MapReduceDocumentsChain;
interface StuffQAChainParams {
    prompt?: PromptTemplate;
}
export declare const loadQAStuffChain: (llm: BaseLLM, params?: StuffQAChainParams) => StuffDocumentsChain;
interface MapReduceQAChainParams {
    combineMapPrompt?: PromptTemplate;
    combinePrompt?: PromptTemplate;
}
export declare const loadQAMapReduceChain: (llm: BaseLLM, params?: MapReduceQAChainParams) => MapReduceDocumentsChain;
export {};
