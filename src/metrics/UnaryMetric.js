import Metric from "./Metric.js";

/**
 * A metric applied to one object.
 */
export default class UnaryMetric extends Metric {
    constructor({
        name = "Unnamed unary metric",
        domain = "Entity",
        metadata = {}
    } = {}) {
        super({
            name,
            arity: 1,
            domain,
            metadata
        });
    }
}
