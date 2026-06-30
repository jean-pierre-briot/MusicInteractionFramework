/**
 * Abstract base class for all pipeline steps.
 */
export default class PipelineStep {
    constructor({
        name = "Unnamed pipeline step",
        metadata = {}
    } = {}) {
        this.name = name;
        this.metadata = metadata;
    }

    execute() {
        throw new Error(
            `${this.constructor.name}.execute(context) must be implemented`
        );
    }
}
