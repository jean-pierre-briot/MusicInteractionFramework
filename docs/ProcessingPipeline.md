# Processing Pipeline

The Processing Pipeline is the orchestration layer of MusicInteractionFramework.

## Motivation

The framework now contains several independent components:

- Sessions
- Interaction models
- Relation builders
- Graph builders
- Metrics
- Metric engines
- Renderers

A user should not have to manually coordinate all these components.

The pipeline provides a unified processing workflow.

## Core concepts

### ProcessingContext

A shared context passed to every pipeline step.

It contains:

- the current session
- shared data
- intermediate results
- graphs
- metrics
- logs
- options
- metadata

### PipelineStep

A processing unit.

Every pipeline step implements:

```js
execute(context)
```

### Pipeline

A sequence of PipelineStep objects.

```js
const context =
    pipeline.run(session);
```

## Design principle

The pipeline does not impose a particular analysis model.

It provides an orchestration mechanism.

Interaction models, graph builders, metric engines, exporters and renderers may all become pipeline steps.
