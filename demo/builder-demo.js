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

const provenance =
    new Provenance({
        source: "builder-demo",
        method: "manual relation construction",
        version: "0.2.5",
        parameters: {
            example: true
        }
    });

const relation =
    new RelationBuilder()
        .named("Builder-created relation")
        .from(s1, s2)
        .model("manual-demo-model")
        .attribute("confidence", 1.0)
        .provenance(provenance)
        .build();

const session =
    new Session({
        name: "Builder demo session"
    });

session.addMany([
    pianist,
    continuator,
    s1,
    s2,
    relation
]);

const graph =
    new GraphBuilder().fromSession(session);

console.log("MIF BUILDER DEMO", session);
console.log("Relation", relation);
console.log("Provenance", relation.metadata.provenance);
console.log("Graph", graph);
console.log("Graph size", graph.size());

const app =
    document.getElementById("app");

if (app) {
    const size =
        graph.size();

    app.innerHTML = `
        <h2>Builder Framework Demo</h2>
        <p>Open the Chrome console to inspect RelationBuilder, Provenance and RelationGraph.</p>
        <ul>
            <li>Nodes: ${size.nodes}</li>
            <li>Relations: ${size.relations}</li>
            <li>Relation confidence: ${relation.getAttribute("confidence")}</li>
            <li>Provenance method: ${relation.metadata.provenance.method}</li>
        </ul>
    `;
}
