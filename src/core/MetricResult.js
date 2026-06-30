import Entity from "./Entity.js";

/**
 * A MetricResult stores the value produced by applying a Metric to a target object.
 *
 * The target may be a Sequence, Relation, Session or any other Entity.
 */
export default class MetricResult extends Entity {
    constructor({
        id,
        name = null,
        metric,
        target,
        value,
        metadata = {}
    } = {}) {
        super({
            id,
            name,
            metadata
        });

        this.metric = metric;
        this.target = target;
        this.value = value;
    }
}
