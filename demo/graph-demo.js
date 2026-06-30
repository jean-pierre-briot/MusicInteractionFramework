import {
    Agent,
    NoteEvent,
    Sequence,
    Relation,
    Session
} from "../src/core/index.js";

import {
    GraphBuilder
} from "../src/graph/index.js";

const human =
    new Agent({
        name: "Pianist",
        type: "human"
    });

const ai =
    new Agent({
        name: "Continuator",
        type: "software"
    });

const s1 =
    new Sequence({
        name: "Human phrase",
        agent: human,
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
        name: "AI phrase",
        agent: ai,
        elements: [
            new NoteEvent({
                pitch: 67,
                startTime: 1.2,
                endTime: 2.2
            })
        ]
    });

const s3 =
    new Sequence({
        name: "Human reply",
        agent: human,
        elements: [
            new NoteEvent({
                pitch: 64,
                startTime: 2.5,
                endTime: 3.5
            })
        ]
    });

const r1 =
    new Relation({
        name: "Manual relation 1",
        source: s1,
        target: s2,
        model: "manual"
    });

const r2 =
    new Relation({
        name: "Manual relation 2",
        source: s2,
        target: s3,
        model: "manual"
    });

const session =
    new Session({
        name: "Graph demo session"
    });

session.addMany([
    human,
    ai,
    s1,
    s2,
    s3,
    r1,
    r2
]);

const graph =
    GraphBuilder.fromSession(
        session
    );

console.log("MIF GRAPH DEMO", graph);
console.log("Graph size", graph.size());
console.log("Nodes", graph.nodes());
console.log("Relations", graph.relations());
console.log("Outgoing from s2", graph.outgoing(s2));
console.log("Incoming to s2", graph.incoming(s2));
console.log("Neighbors of s2", graph.neighbors(s2));

const app =
    document.getElementById("app");

if (app) {
    const size =
        graph.size();

    app.innerHTML = `
        <h2>Graph Engine Demo</h2>
        <p>Open the Chrome console to inspect the RelationGraph object.</p>
        <ul>
            <li>Nodes: ${size.nodes}</li>
            <li>Relations: ${size.relations}</li>
            <li>Neighbors of AI phrase: ${graph.neighbors(s2).length}</li>
        </ul>
    `;
}
