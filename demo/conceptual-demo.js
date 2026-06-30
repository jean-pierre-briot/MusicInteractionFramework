import {
    Agent,
    NoteEvent,
    Sequence,
    Relation,
    Session
} from "../src/core/index.js";

import {
    InteractionModel
} from "../src/interaction/index.js";

import {
    UnaryMetric,
    MetricEngine
} from "../src/metrics/index.js";

class ManualResponseModel extends InteractionModel {
    constructor() {
        super({
            name: "Manual Response Model"
        });
    }

    build(session) {
        const sequences =
            session.getSequences();

        if (sequences.length < 2) {
            return [];
        }

        return [
            new Relation({
                name: "Manual relation",
                source: sequences[0],
                target: sequences[1],
                model: this
            })
        ];
    }
}

class SequenceDurationMetric extends UnaryMetric {
    constructor() {
        super({
            name: "Sequence duration",
            domain: "Sequence"
        });
    }

    compute(sequence) {
        return sequence.duration;
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

const seq1 =
    new Sequence({
        name: "Pianist phrase",
        agent: pianist,
        elements: [
            new NoteEvent({
                pitch: 60,
                startTime: 0,
                endTime: 1
            }),
            new NoteEvent({
                pitch: 64,
                startTime: 1,
                endTime: 2
            })
        ]
    });

const seq2 =
    new Sequence({
        name: "Continuator phrase",
        agent: continuator,
        elements: [
            new NoteEvent({
                pitch: 67,
                startTime: 2.4,
                endTime: 3.4
            })
        ]
    });

const session =
    new Session({
        name: "Conceptual demo"
    });

session.addMany([
    pianist,
    continuator,
    seq1,
    seq2
]);

const model =
    new ManualResponseModel();

const relations =
    model.build(session);

session.addMany(relations);

const metric =
    new SequenceDurationMetric();

const engine =
    new MetricEngine();

const result =
    engine.compute(
        metric,
        seq1
    );

session.add(result);

console.log("MIF CONCEPTUAL DEMO", session);
console.log("Relations", session.getRelations());
console.log("Metric result", result);

const app =
    document.getElementById("app");

if (app) {
    app.innerHTML = `
        <h2>Conceptual Foundations Demo</h2>
        <ul>
            <li>Agents: ${session.getAgents().length}</li>
            <li>Sequences: ${session.getSequences().length}</li>
            <li>Relations: ${session.getRelations().length}</li>
            <li>Metric result: ${result.value}</li>
        </ul>
    `;
}
