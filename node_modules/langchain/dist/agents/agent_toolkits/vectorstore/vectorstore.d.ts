import { Tool } from "../../tools/index.js";
import { VectorStore } from "../../../vectorstores/index.js";
import { Toolkit } from "../base.js";
import { BaseLLM } from "../../../llms/index.js";
import { CreatePromptArgs } from "../../mrkl/index.js";
import { AgentExecutor } from "../../executor.js";
export interface VectorStoreInfo {
    vectorStore: VectorStore;
    name: string;
    description: string;
}
export declare class VectorStoreToolkit extends Toolkit {
    tools: Tool[];
    llm: BaseLLM;
    constructor(vectorStoreInfo: VectorStoreInfo, llm: BaseLLM);
}
export declare class VectorStoreRouterToolkit extends Toolkit {
    tools: Tool[];
    vectorStoreInfos: VectorStoreInfo[];
    llm: BaseLLM;
    constructor(vectorStoreInfos: VectorStoreInfo[], llm: BaseLLM);
}
export declare function createVectorStoreAgent(llm: BaseLLM, toolkit: VectorStoreToolkit, args?: CreatePromptArgs): AgentExecutor;
export declare function createVectorStoreRouterAgent(llm: BaseLLM, toolkit: VectorStoreRouterToolkit, args?: CreatePromptArgs): AgentExecutor;
