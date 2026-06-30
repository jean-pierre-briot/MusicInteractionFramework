import Entity from "./Entity.js";

/**
 * A TemporalElement is an atomic temporal object.
 */
export default class TemporalElement extends Entity {
    constructor({
        id,
        name = null,
        startTime = 0,
        endTime = 0,
        metadata = {}
    } = {}) {
        super({
            id,
            name,
            metadata
        });

        this.startTime = startTime;
        this.endTime = endTime;
    }

    get duration() {
        return this.endTime - this.startTime;
    }
}
