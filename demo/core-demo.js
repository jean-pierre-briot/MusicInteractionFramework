import {
    Agent,
    NoteEvent,
    Sequence,
    Relation,
    Session
} from "../src/core/index.js";

const pianist = new Agent({
    name: "Pianist",
    type: "human"
});

const continuator = new Agent({
    name: "Continuator",
    type: "software"
});

const pianistSequence = new Sequence({
    name: "Pianist phrase 1",
    agent: pianist,
    elements: [
        new NoteEvent({
            pitch: 60,
            velocity: 100,
            startTime: 0,
            endTime: 1
        }),
        new NoteEvent({
            pitch: 64,
            velocity: 96,
            startTime: 1,
            endTime: 2
        })
    ]
});

const continuatorSequence = new Sequence({
    name: "Continuator phrase 1",
    agent: continuator,
    elements: [
        new NoteEvent({
            pitch: 67,
            velocity: 90,
            startTime: 2.2,
            endTime: 3.2
        })
    ]
});

const relation = new Relation({
    name: "Initial response relation",
    source: pianistSequence,
    target: continuatorSequence,
    model: "manual"
});

const session = new Session({
    name: "Core model demo"
});

session.addMany([
    pianist,
    continuator,
    pianistSequence,
    continuatorSequence,
    relation
]);

console.log("MIF CORE DEMO", session);
console.log("Agents", session.getAgents());
console.log("Sequences", session.getSequences());
console.log("Relations", session.getRelations());

const app = document.getElementById("app");

if (app) {
    app.innerHTML = `
        <h2>Core Model Demo</h2>
        <p>Open the Chrome console to inspect the generated Session object.</p>
        <ul>
            <li>Agents: ${session.getAgents().length}</li>
            <li>Sequences: ${session.getSequences().length}</li>
            <li>Relations: ${session.getRelations().length}</li>
        </ul>
    `;
}
