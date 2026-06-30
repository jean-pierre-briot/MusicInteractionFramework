# MusicInteractionFramework Architecture Book

## Purpose

MusicInteractionFramework is a software architecture for representing, analysing and comparing temporal interaction models.

It originated in the analysis of musical interaction between a human player and the Continuator, but it is designed as a more general platform for temporal interaction analysis.

## Main layers

1. Core ontology
2. Builders
3. Graph representations
4. Pipelines
5. Plugins
6. Metrics
7. Visualisation

## Core ontology

The ontology layer defines stable objects:

- Entity
- Agent
- TemporalElement
- NoteEvent
- Sequence
- Relation
- Session
- MetricResult
- Provenance

## Architectural principles

- The core is independent from MIDI, Logic Pro, the Continuator and any specific musical software.
- Relations are created by interaction models or builders.
- Relations are represented in graphs only when needed.
- Metrics produce MetricResult objects and should not mutate analysed objects.
- Derived objects should preserve provenance.
- The framework should welcome several temporal theories rather than impose one.
