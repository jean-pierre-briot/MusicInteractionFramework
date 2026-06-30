import RelationGraph from "./RelationGraph.js";

/**
 * GraphBuilder creates graph views from framework objects.
 */
export default class GraphBuilder {
    static fromSession(
        session,
        options = {}
    ) {
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

        graph.addRelations(
            session.getRelations()
        );

        return graph;
    }
}
