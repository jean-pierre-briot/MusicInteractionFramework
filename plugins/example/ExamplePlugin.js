import {
    Plugin
} from "../../src/plugin/index.js";

import {
    PipelineStep
} from "../../src/pipeline/index.js";

class ExamplePipelineStep extends PipelineStep {
    constructor() {
        super({
            name: "Example plugin step"
        });
    }

    execute(context) {
        context.set(
            "example-plugin-ran",
            true
        );

        context.log(
            "Example plugin step executed"
        );

        return context;
    }
}

export default class ExamplePlugin extends Plugin {
    constructor() {
        super({
            name: "ExamplePlugin",
            version: "0.3.0"
        });
    }

    install(context) {
        context.register(
            "pipeline-step",
            "example-step",
            ExamplePipelineStep
        );

        context.register(
            "metadata",
            "example-plugin-description",
            "A minimal plugin used to demonstrate the plugin architecture."
        );
    }
}
