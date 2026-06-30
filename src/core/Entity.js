/**
 * Base class for all conceptual objects in MusicInteractionFramework.
 */
export default class Entity {
    constructor({
        id = crypto.randomUUID(),
        name = null,
        metadata = {}
    } = {}) {
        this.id = id;
        this.name = name;
        this.metadata = metadata;
    }

    setMetadata(key, value) {
        this.metadata[key] = value;
        return this;
    }

    getMetadata(key, defaultValue = null) {
        return this.metadata[key] ?? defaultValue;
    }
}
