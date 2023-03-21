export class BaseChatMessage {
    constructor(text) {
        /** The text of the message. */
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.text = text;
    }
}
export class HumanChatMessage extends BaseChatMessage {
    _getType() {
        return "human";
    }
}
export class AIChatMessage extends BaseChatMessage {
    _getType() {
        return "ai";
    }
}
export class SystemChatMessage extends BaseChatMessage {
    _getType() {
        return "system";
    }
}
export class ChatMessage extends BaseChatMessage {
    constructor(text, role) {
        super(text);
        Object.defineProperty(this, "role", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.role = role;
    }
    _getType() {
        return "generic";
    }
}
/**
 * Base PromptValue class. All prompt values should extend this class.
 */
export class BasePromptValue {
}
//# sourceMappingURL=index.js.map