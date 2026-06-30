import Entity from "./Entity.js";

/**
 * A Sequence is a coherent temporal unit produced by one Agent.
 */
export default class Sequence extends Entity {
    constructor({
        id,
        name = null,
        agent,
        elements = [],
        startTime = null,
        endTime = null,
        metadata = {}
    } = {}) {
        super({
            id,
            name,
            metadata
        });

        this.agent = agent;
        this.elements = elements;
        this.startTime = startTime ?? this.computeStartTime();
        this.endTime = endTime ?? this.computeEndTime();
    }

    addElement(element) {
        this.elements.push(element);
        this.startTime = this.computeStartTime();
        this.endTime = this.computeEndTime();
        return this;
    }

    computeStartTime() {
        if (this.elements.length === 0) {
            return null;
        }

        return Math.min(
            ...this.elements.map(element => element.startTime)
        );
    }

    computeEndTime() {
        if (this.elements.length === 0) {
            return null;
        }

        return Math.max(
            ...this.elements.map(element => element.endTime)
        );
    }

    get duration() {
        if (this.startTime === null || this.endTime === null) {
            return null;
        }

        return this.endTime - this.startTime;
    }
}
