import Entity from "./Entity.js";

/**
 * A Relation connects two sequences.
 *
 * The semantic interpretation of a relation is provided by the InteractionModel that created it.
 */
export default class Relation extends Entity {
    constructor({
        id,
        name = null,
        source,
        target,
        model = null,
        directed = true,
        metadata = {}
    } = {}) {
        super({
            id,
            name,
            metadata
        });

        this.source = source;
        this.target = target;
        this.model = model;
        this.directed = directed;
        this.attributes = {};
    }

    setAttribute(key, value) {
        this.attributes[key] = value;
        return this;
    }

    getAttribute(key, defaultValue = null) {
        return this.attributes[key] ?? defaultValue;
    }
}
