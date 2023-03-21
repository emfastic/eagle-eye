import { Tool } from "../../tools/index.js";
import { Toolkit } from "../base.js";
import { BaseLLM } from "../../../llms/index.js";
import { CreatePromptArgs } from "../../mrkl/index.js";
import { AgentExecutor } from "../../executor.js";
import { SqlDatabase } from "../../../sql_db.js";
type SqlCreatePromptArgs = {
    /** Number of results to return. */
    topK?: number;
} & CreatePromptArgs;
export declare class SqlToolkit extends Toolkit {
    tools: Tool[];
    db: SqlDatabase;
    dialect: string;
    constructor(db: SqlDatabase);
}
export declare function createSqlAgent(llm: BaseLLM, toolkit: SqlToolkit, args?: SqlCreatePromptArgs): AgentExecutor;
export {};
