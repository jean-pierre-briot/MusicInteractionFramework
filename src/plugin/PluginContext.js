/**
 * PluginContext gives plugins controlled access to framework services.
 */
export default class PluginContext {
    constructor({
        registry,
        metadata = {}
    } = {}) {
        this.registry = registry;
        this.metadata = metadata;
    }

    register(type, name, value) {
        this.registry.register(
            type,
            name,
            value
        );

        return this;
    }

    get(type, name) {
        return this.registry.get(
            type,
            name
        );
    }
}
