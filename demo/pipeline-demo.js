import {
    Agent,
    NoteEvent,
    Sequence,
    Session,
    Provenance
} from "../src/core/index.js";

import {
    RelationBuilder,
    GraphBuilder
} from "../src/builder/index.js";

import {
    Pipeline,
    PipelineStep
} from "../src/pipeline/index.js";

class ManualRelationStep extends PipelineStep {
    constructor() {
        super({
            name: "Manual relation step"
        });
    }

    execute(context) {
        const sequences =
            context.session.getSequences();

        if (sequences.length < 2) {
            return context;
        }

        const relation =
            new RelationBuilder()
                .named("Pipeline-created relation")
                .from(sequences[0], sequences[1])
                .model(this.name)
                .provenance(
                    new Provenance({
                        source: this.name,
                        method: "execute",
                        version: "0.2.6"
                    })
                )
                .build();

        context.session.add(relation);

        context.set(
            "relations",
            context.session.getRelations()
        );

        return context;
    }
}

class GraphBuildStep extends PipelineStep {
    constructor() {
        super({
            name: "Graph build step"
        });
    }

    execute(context) {
        const graph =
            new GraphBuilder()
                .fromSession(context.session);

        context.set(
            "graph",
            graph
        );

        return context;
    }
}

const pianist =
    new Agent({
        name: "Pianist",
        type: "human"
    });

const continuator =
    new Agent({
        name: "Continuator",
        type: "software"
    });

const s1 =
    new Sequence({
        name: "Pianist phrase",
        agent: pianist,
        elements: [
            new NoteEvent({
                pitch: 60,
                startTime: 0,
                endTime: 1
            })
        ]
    });

const s2 =
    new Sequence({
        name: "Continuator phrase",
        agent: continuator,
        elements: [
            new NoteEvent({
                pitch: 67,
                startTime: 1.2,
                endTime: 2.2
            })
        ]
    });

const session =
    new Session({
        name: "Pipeline demo session"
    });

session.addMany([
    pianist,
    continuator,
    s1,
    s2
]);

const pipeline =
    new Pipeline({
        name: "Minimal interaction pipeline"
    });

pipeline
    .add(new ManualRelationStep())
    .add(new GraphBuildStep());

const context =
    pipeline.run(session);

const graph =
    context.get("graph");

console.log("MIF PIPELINE DEMO", context);
console.log("Session", context.session);
console.log("Graph", graph);
console.log("Logs", context.logs);

const app =
    document.getElementById("app");

if (app) {
    const size =
        graph.size();

    app.innerHTML = `
        <h2>Processing Pipeline Demo</h2>
        <p>Open the Chrome console to inspect the ProcessingContext.</p>
        <ul>
            <li>Agents: ${session.getAgents().length}</li>
            <li>Sequences: ${session.getSequences().length}</li>
            <li>Relations: ${session.getRelations().length}</li>
            <li>Graph nodes: ${size.nodes}</li>
            <li>Graph relations: ${size.relations}</li>
            <li>Pipeline logs: ${context.logs.length}</li>
        </ul>
    `;
}
