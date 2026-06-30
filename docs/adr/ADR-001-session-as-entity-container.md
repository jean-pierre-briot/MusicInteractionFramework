# ADR-001 — Session as Entity Container

## Status

Accepted.

## Context

Earlier versions represented a session using separate arrays:

- agents
- sequences
- relations

This works for small examples but becomes rigid when new objects are introduced, such as annotations, metric results, markers, tempo maps or audio tracks.

## Decision

A Session stores a single collection of Entity objects.

Specialized views are computed through methods:

- getAgents()
- getSequences()
- getRelations()
- getMetricResults()

## Consequences

The Session class can evolve without changing its internal structure.

New object types can be introduced without modifying the session storage model.
