import ProcessingContext from "./ProcessingContext.js";

/**
 * Pipeline orchestrates a sequence of processing steps.
 */
export default class Pipeline {
    constructor({
        name = "Untitled pipeline",
        metadata = {}
    } = {}) {
        this.name = name;
        this.metadata = metadata;
        this.steps = [];
    }

    add(step) {
        this.steps.push(step);
        return this;
    }

    run(session, options = {}) {
        const context =
            new ProcessingContext({
                session,
                options,
                metadata: {
                    pipeline: this.name,
                    ...this.metadata
                }
            });

        context.log(
            `Pipeline started: ${this.name}`
        );

        for (const step of this.steps) {
            context.log(
                `Step started: ${step.name}`
            );

            step.execute(context);

            context.log(
                `Step completed: ${step.name}`
            );
        }

        context.log(
            `Pipeline completed: ${this.name}`
        );

        return context;
    }
}
