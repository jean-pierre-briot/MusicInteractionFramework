/**
 * Provenance describes how an object was produced.
 *
 * It is used for scientific reproducibility.
 */
export default class Provenance {
    constructor({
        source = null,
        method = null,
        version = null,
        parameters = {},
        timestamp = new Date(),
        metadata = {}
    } = {}) {
        this.source = source;
        this.method = method;
        this.version = version;
        this.parameters = parameters;
        this.timestamp = timestamp;
        this.metadata = metadata;
    }
}
