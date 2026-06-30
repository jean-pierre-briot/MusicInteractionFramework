/**
 * Base class for framework plugins.
 */
export default class Plugin {
    constructor({
        name = "Unnamed plugin",
        version = "0.0.0",
        metadata = {}
    } = {}) {
        this.name = name;
        this.version = version;
        this.metadata = metadata;
    }

    install() {
        throw new Error(
            `${this.constructor.name}.install(context) must be implemented`
        );
    }
}
