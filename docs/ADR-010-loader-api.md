# ADR-010 — Loader API

## Status

Accepted.

## Decision

Introduce a Loader API.

A Loader transforms external data into a Session and returns a LoaderResult.

Initial loader:

- JsonSessionLoader

## Consequences

The core remains independent from any specific format.

Future importers can be implemented as plugins.
