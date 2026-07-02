/**
 * Abstract base class for all loaders.
 *
 * A Loader transforms external data into a framework Session.
 */
export default class Loader {
    constructor({
        name = "Unnamed loader",
        format = "unknown",
        metadata = {}
    } = {}) {
        this.name = name;
        this.format = format;
        this.metadata = metadata;
    }

    async load() {
        throw new Error(
            `${this.constructor.name}.load(input) must be implemented`
        );
    }
}
