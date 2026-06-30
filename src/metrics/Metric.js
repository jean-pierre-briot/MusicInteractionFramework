/**
 * Base class for all metrics.
 *
 * A metric is an operator applied to one or several framework objects.
 */
export default class Metric {
    constructor({
        name = "Unnamed metric",
        arity = 1,
        domain = "Entity",
        metadata = {}
    } = {}) {
        this.name = name;
        this.arity = arity;
        this.domain = domain;
        this.metadata = metadata;
    }

    compute() {
        throw new Error(
            `${this.constructor.name}.compute(...) must be implemented`
        );
    }
}
