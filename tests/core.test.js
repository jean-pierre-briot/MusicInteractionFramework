import {
    Agent,
    Sequence,
    Relation,
    Session
} from "../src/core/index.js";

const agent = new Agent({
    name: "Test Agent"
});

const sequence = new Sequence({
    agent,
    elements: []
});

const relation = new Relation({
    source: sequence,
    target: sequence
});

const session = new Session();

session.addMany([
    agent,
    sequence,
    relation
]);

console.assert(session.getAgents().length === 1, "Expected one agent");
console.assert(session.getSequences().length === 1, "Expected one sequence");
console.assert(session.getRelations().length === 1, "Expected one relation");

console.log("Core tests passed.");
