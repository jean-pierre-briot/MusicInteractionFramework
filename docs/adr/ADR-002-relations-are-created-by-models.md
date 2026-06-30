# ADR-002 — Relations Are Created by Interaction Models

## Status

Accepted.

## Context

A relation may correspond to several interpretations:

- response
- imitation
- overlap
- provocation
- accompaniment
- synchronization

A single pair of sequences may participate in multiple relation types simultaneously.

## Decision

A Relation is a graph edge between two sequences.

Its semantic interpretation is provided by the InteractionModel that created it.

## Consequences

The same pair of sequences can be connected by multiple relations created by different models.

Metrics can be applied independently of the model that created the relation.
