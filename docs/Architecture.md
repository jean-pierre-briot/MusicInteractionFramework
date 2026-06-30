# Architecture

## Core model

The core model contains:

- Entity
- Agent
- TemporalElement
- NoteEvent
- Sequence
- Relation
- Session

## Principle

The core must not depend on MIDI, Plotly, Tone.js, Logic Pro or the Continuator.

Loaders transform external data into framework objects.
Interaction models generate relations.
Metrics compute values on sequences, relations or sessions.
Renderers visualise results.
