# Ontology

## Entity

Root abstraction. Every framework object has an identity, a name and metadata.

## Agent

An entity capable of producing temporal sequences.

## TemporalElement

An atomic temporal object.

Examples: note, chord, gesture, symbolic event, audio fragment.

## Sequence

A coherent temporal unit produced by an Agent.

A Sequence is not necessarily a conversational turn.

## Relation

A conceptual link between two Sequences.

A Relation does not hard-code its semantic type. The semantic interpretation is provided by the model or process that creates it.

## Session

A container for entities.

A Session is not itself a graph. It may be projected into one or several graphs.

## Provenance

A description of how a derived object was produced.

Provenance supports scientific reproducibility.
