# Graph Engine

The Graph Engine represents relations as a navigable graph.

## Principle

Relation creation and relation representation are separated.

- Interaction models create Relation objects.
- RelationGraph represents and queries these relations.
- GraphBuilder builds a graph from a Session.

## Vocabulary

A RelationGraph is a directed graph whose nodes are usually Sequence objects and whose edges are Relation objects.

The framework keeps the word Relation because it is meaningful for musical interaction analysis, while the graph module provides graph-oriented navigation methods.

## Typical workflow

```js
const graph =
    GraphBuilder.fromSession(session);

graph.outgoing(sequence);
graph.incoming(sequence);
graph.neighbors(sequence);
```
