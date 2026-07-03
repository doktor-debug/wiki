---
layout: default
title: "Architecture"
permalink: /docs/architecture/
---

# Architecture

Dr.Debug is separated into repositories so knowledge growth is not blocked by a single over-strict gate or polluted by unreviewed imports.

```text
scanner -> import -> proposals -> canonical -> memory -> web/wiki
           archive/storage ----^
api controls gates, paths, OpenAPI, and writes
agents define global routines
research and taxonomy support source-backed routing
```

The key design is separation of concerns: raw or uncertain material can enter scanner/import/proposals, while canonical repositories stay evidence-routed.
