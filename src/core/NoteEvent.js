import TemporalElement from "./TemporalElement.js";

/**
 * A NoteEvent is a pitched temporal element.
 */
export default class NoteEvent extends TemporalElement {
    constructor({
        id,
        name = null,
        pitch,
        velocity = 100,
        startTime = 0,
        endTime = 0,
        metadata = {}
    } = {}) {
        super({
            id,
            name,
            startTime,
            endTime,
            metadata
        });

        this.pitch = pitch;
        this.velocity = velocity;
    }
}
