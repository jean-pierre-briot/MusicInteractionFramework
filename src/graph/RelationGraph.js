/**
 * RelationGraph represents relations as a navigable directed graph.
 *
 * Nodes are usually Sequence objects.
 * Edges are Relation objects.
 */
export default class RelationGraph {
    constructor({
        name = "Untitled relation graph",
        metadata = {}
    } = {}) {
        this.name = name;
        this.metadata = metadata;

        this._nodes = new Set();
        this._relations = [];
    }

    addNode(node) {
        this._nodes.add(node);
        return this;
    }

    addRelation(relation) {
        this.addNode(relation.source);
        this.addNode(relation.target);

        this._relations.push(relation);

        return this;
    }

    addRelations(relations) {
        for (const relation of relations) {
            this.addRelation(relation);
        }

        return this;
    }

    nodes() {
        return Array.from(this._nodes);
    }

    relations() {
        return [...this._relations];
    }

    outgoing(node) {
        return this._relations.filter(
            relation => relation.source === node
        );
    }

    incoming(node) {
        return this._relations.filter(
            relation => relation.target === node
        );
    }

    neighbors(node) {
        const outgoingTargets =
            this.outgoing(node).map(
                relation => relation.target
            );

        const incomingSources =
            this.incoming(node).map(
                relation => relation.source
            );

        return Array.from(
            new Set([
                ...outgoingTargets,
                ...incomingSources
            ])
        );
    }

    relationsBetween(source, target) {
        return this._relations.filter(
            relation =>
                relation.source === source
                &&
                relation.target === target
        );
    }

    hasNode(node) {
        return this._nodes.has(node);
    }

    size() {
        return {
            nodes: this._nodes.size,
            relations: this._relations.length
        };
    }
}
