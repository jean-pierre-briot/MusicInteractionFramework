/**
 * ProcessingContext is the shared state passed through a Pipeline.
 *
 * It stores the current session, intermediate results, options and logs.
 */
export default class ProcessingContext {
    constructor({
        session,
        options = {},
        metadata = {}
    } = {}) {
        this.session = session;
        this.options = options;
        this.metadata = metadata;

        this.data = new Map();
        this.logs = [];
    }

    set(key, value) {
        this.data.set(key, value);
        return this;
    }

    get(key, defaultValue = null) {
        if (!this.data.has(key)) {
            return defaultValue;
        }

        return this.data.get(key);
    }

    has(key) {
        return this.data.has(key);
    }

    log(message, metadata = {}) {
        this.logs.push({
            message,
            metadata,
            timestamp: new Date()
        });

        return this;
    }
}
