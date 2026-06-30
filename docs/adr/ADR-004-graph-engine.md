# ADR-004 — Relations and Graph Representation Are Decoupled

## Status

Accepted.

## Context

A relation is a conceptual link between two sequences.

However, graph analysis requires a navigable structure with methods such as:

- outgoing()
- incoming()
- neighbors()
- edges()
- nodes()

Embedding this functionality directly in Relation or Session would overload those classes.

## Decision

Introduce a separate graph module:

- RelationGraph
- GraphBuilder

Interaction models create Relation objects.

GraphBuilder converts session relations into a RelationGraph.

## Consequences

The core model stays simple.

Graph analysis can evolve independently.

A session may be represented by different graphs according to different analytical needs.
