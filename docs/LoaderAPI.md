# Loader API

The Loader API opens MusicInteractionFramework to external data sources.

## Principle

A Loader transforms external data into a Session.

```text
External data
    ↓
Loader
    ↓
Session
```

## Main classes

- Loader
- LoaderResult
- LoaderRegistry
- JsonSessionLoader

## LoaderResult

A loader returns a LoaderResult containing:

- the Session
- provenance
- warnings
- metadata

This keeps import operations reproducible and inspectable.

## Plugins

Loaders can be registered as plugin capabilities.
