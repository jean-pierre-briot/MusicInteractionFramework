import Entity from "./Entity.js";

/**
 * An Agent is an entity that produces temporal sequences.
 */
export default class Agent extends Entity {
    constructor({
        id,
        name,
        type = "unknown",
        metadata = {}
    } = {}) {
        super({
            id,
            name,
            metadata
        });

        this.type = type;
    }
}
