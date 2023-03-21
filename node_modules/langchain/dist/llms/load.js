import { BaseLLM } from "./base.js";
import { loadFromFile, parseFileConfig } from "../util/index.js";
/**
 * Load an LLM from a local file.
 *
 * @example
 * ```ts
 * import { loadLLM } from "langchain/llms";
 * const model = await loadLLM("/path/to/llm.json");
 * ```
 */
const loader = (file, path) => BaseLLM.deserialize(parseFileConfig(file, path));
export const loadLLM = (uri) => loadFromFile(uri, loader);
//# sourceMappingURL=load.js.map