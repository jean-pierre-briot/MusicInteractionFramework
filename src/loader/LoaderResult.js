/**
 * LoaderResult wraps the result of a loading operation.
 */
export default class LoaderResult {
    constructor({
        session,
        provenance = null,
        warnings = [],
        metadata = {}
    } = {}) {
        this.session = session;
        this.provenance = provenance;
        this.warnings = warnings;
        this.metadata = metadata;
    }

    hasWarnings() {
        return this.warnings.length > 0;
    }
}
