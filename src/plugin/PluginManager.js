import PluginRegistry from "./PluginRegistry.js";
import PluginContext from "./PluginContext.js";

/**
 * PluginManager installs plugins and manages their capabilities.
 */
export default class PluginManager {
    constructor({
        registry = new PluginRegistry(),
        metadata = {}
    } = {}) {
        this.registry = registry;
        this.metadata = metadata;
        this._plugins = [];
    }

    use(plugin) {
        const context =
            new PluginContext({
                registry: this.registry,
                metadata: {
                    plugin: plugin.name,
                    version: plugin.version
                }
            });

        plugin.install(context);

        this._plugins.push(plugin);

        return this;
    }

    plugins() {
        return [...this._plugins];
    }

    get(type, name) {
        return this.registry.get(
            type,
            name
        );
    }

    getAll(type = null) {
        return this.registry.getAll(type);
    }
}
