import { getCallbackManager } from "../callbacks/index.js";
const getVerbosity = () => false;
/**
 * Base class for language models.
 */
export class BaseLanguageModel {
    constructor(params) {
        /**
         * Whether to print out response text.
         */
        Object.defineProperty(this, "verbose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "callbackManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.verbose = params.verbose ?? getVerbosity();
        this.callbackManager = params.callbackManager ?? getCallbackManager();
    }
}
//# sourceMappingURL=index.js.map