import Metric from "./Metric.js";

/**
 * A metric applied to two objects.
 */
export default class BinaryMetric extends Metric {
    constructor({
        name = "Unnamed binary metric",
        domain = "Entity",
        metadata = {}
    } = {}) {
        super({
            name,
            arity: 2,
            domain,
            metadata
        });
    }
}
