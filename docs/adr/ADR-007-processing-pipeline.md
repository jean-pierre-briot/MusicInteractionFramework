# ADR-007 — Processing Pipeline

## Status

Accepted.

## Context

As the framework grows, analyses will involve several stages:

- creating relations
- building graphs
- computing metrics
- exporting results
- rendering visualisations

Manually wiring these stages in user code would become repetitive and error-prone.

## Decision

Introduce a pipeline module with:

- ProcessingContext
- PipelineStep
- Pipeline

## Consequences

The framework gains an explicit orchestration layer.

Analysis workflows become reproducible and composable.

Future modules such as loaders, interaction models, metric engines and renderers can be integrated as pipeline steps.
