import Builder from "./Builder.js";
import RelationGraph from "../graph/RelationGraph.js";

/**
 * Builds RelationGraph objects from sessions or relation collections.
 */
export default class GraphBuilder extends Builder {
    constructor({
        name = "Graph builder",
        metadata = {}
    } = {}) {
        super({
            name,
            metadata
        });
    }

    fromSession(session, options = {}) {
        const graph =
            new RelationGraph({
                name:
                    options.name
                    ??
                    `${session.name} graph`,

                metadata:
                    options.metadata
                    ??
                    {}
            });

        graph.addRelations(session.getRelations());

        return graph;
    }

    fromRelations(relations, options = {}) {
        const graph =
            new RelationGraph({
                name:
                    options.name
                    ??
                    "Relation graph",

                metadata:
                    options.metadata
                    ??
                    {}
            });

        graph.addRelations(relations);

        return graph;
    }
}
