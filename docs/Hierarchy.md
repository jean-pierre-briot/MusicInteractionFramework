# Conceptual Hierarchy

```text
Entity
├── Agent
├── TemporalElement
│   └── NoteEvent
├── Sequence
├── Relation
├── Session
└── MetricResult
```

Higher-level components:

```text
InteractionModel
├── creates Relation objects
└── does not compute metrics

Metric
├── UnaryMetric
├── BinaryMetric
└── NaryMetric

MetricEngine
├── applies metrics to sequences, relations or sessions
└── produces MetricResult objects
```

## Important design decision

Relations are intentionally lightweight.

A relation does not itself decide whether it is a response, imitation or provocation.  
The InteractionModel that creates it provides the semantic interpretation.

This allows several relations to exist between the same pair of sequences.
