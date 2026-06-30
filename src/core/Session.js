import Entity from "./Entity.js";
import Agent from "./Agent.js";
import Sequence from "./Sequence.js";
import Relation from "./Relation.js";

/**
 * A Session is a container for framework entities.
 */
export default class Session extends Entity {
    constructor({
        id,
        name = "Untitled session",
        metadata = {}
    } = {}) {
        super({
            id,
            name,
            metadata
        });

        this.entities = [];
    }

    add(entity) {
        this.entities.push(entity);
        return this;
    }

    addMany(entities) {
        for (const entity of entities) {
            this.add(entity);
        }

        return this;
    }

    getAgents() {
        return this.entities.filter(entity => entity instanceof Agent);
    }

    getSequences() {
        return this.entities.filter(entity => entity instanceof Sequence);
    }

    getRelations() {
        return this.entities.filter(entity => entity instanceof Relation);
    }

    getSequencesByAgent(agent) {
        return this.getSequences().filter(sequence => sequence.agent === agent);
    }

    getOutgoingRelations(sequence) {
        return this.getRelations().filter(relation => relation.source === sequence);
    }

    getIncomingRelations(sequence) {
        return this.getRelations().filter(relation => relation.target === sequence);
    }
}
