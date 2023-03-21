import { BaseLLM } from "../../../llms/index.js";
import { JsonSpec, Tool } from "../../tools/index.js";
import { AgentExecutor } from "../../executor.js";
import { CreatePromptArgs } from "../../mrkl/index.js";
import { Toolkit } from "../base.js";
import { Headers } from "../../tools/requests.js";
export declare class RequestsToolkit extends Toolkit {
    tools: Tool[];
    constructor(headers?: Headers);
}
export declare class OpenApiToolkit extends RequestsToolkit {
    constructor(jsonSpec: JsonSpec, llm: BaseLLM, headers?: Headers);
}
export declare function createOpenApiAgent(llm: BaseLLM, openApiToolkit: OpenApiToolkit, args?: CreatePromptArgs): AgentExecutor;
