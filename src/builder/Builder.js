/**
 * Abstract base class for all builders.
 */
export default class Builder {
    constructor({
        name = "Unnamed builder",
        metadata = {}
    } = {}) {
        this.name = name;
        this.metadata = metadata;
    }

    build() {
        throw new Error(
            `${this.constructor.name}.build(...) must be implemented`
        );
    }
}
