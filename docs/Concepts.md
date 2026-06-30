# Core Concepts

MusicInteractionFramework is based on a small set of conceptual objects.

## Entity

The root abstraction. Every object in the framework has an identity, a name and metadata.

## Agent

An entity that produces temporal sequences.

Examples:

- human pianist
- Continuator
- software improviser
- robot musician
- ensemble member

## TemporalElement

An atomic temporal element.

Examples:

- note
- chord
- gesture
- audio fragment
- symbolic event

## Sequence

A coherent temporal unit produced by one agent.

A sequence is not necessarily a turn. It may overlap with other sequences, be simultaneous, be causal, be provoked or be part of a larger structure.

## Relation

A link between two sequences.

The semantic meaning of a relation is not hard-coded in the relation itself. It is provided by the InteractionModel that created it.

## InteractionModel

A model that analyses a session and creates relations between sequences.

Examples:

- turn-taking model
- response model
- imitation model
- overlap model
- provocation model

## Metric

An operator applied to one or several framework objects.

Metrics may be unary, binary or n-ary.

They produce MetricResult objects.
