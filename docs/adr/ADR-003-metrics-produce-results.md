# ADR-003 — Metrics Produce Metric Results

## Status

Accepted.

## Context

Earlier versions stored metric values directly inside relation objects.

This couples relations and analyses too strongly.

## Decision

Metrics should produce MetricResult objects.

MetricResult links:

- the metric
- the target object
- the computed value
- optional metadata

## Consequences

Relations remain pure structural objects.

Multiple analyses may coexist without modifying the underlying session graph.
