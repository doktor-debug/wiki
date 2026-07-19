---
layout: default
title: "Dr.Debug Wiki"
description: "Evidence-routed debugging knowledge, active preservation, and controlled repository operations."
permalink: /
---

# Dr.Debug Wiki

<span class="badge">v2.3.0 documentation</span>

Dr.Debug Wiki is the documentation portal for the 14 `doktor-debug` repositories and the external enforcement service `n-e-o-w-u-l-f/myAPI`. It explains repository ownership, modes, scanner intake, active archive/storage preservation, imports, proposals, canonical facts, workflows, and separately gated writes.

<div class="hero-grid">
  <div class="tile"><strong>Evidence-routed</strong>All new proposals originate in <code>doktor-debug/proposals</code>; reviewed facts retain lineage before canonical promotion.</div>
  <div class="tile"><strong>Actively preserved</strong><code>archive</code> and <code>storage</code> preserve records and artifacts with item-specific rights, visibility, integrity, scan, and approval states.</div>
  <div class="tile"><strong>Safely operable</strong>Authenticated OWNER_MODE may describe every repository without mutation; writes remain separately gated by <code>n-e-o-w-u-l-f/myAPI</code>.</div>
</div>

## Start here

- [Full internal index](./.INDEX.md)
- [TOC1 — Repository map](./TOC1.md)
- [TOC2 — Modes and gates](./TOC2.md)
- [TOC3 — Lifecycle](./TOC3.md)
- [Architecture](./docs/architecture/)
- [API reference](./docs/api-reference/)
- [Preservation and distribution](./docs/preservation/)

## Public documentation layout

1. `doktor-debug/.github` renders the organization overview at `https://github.com/doktor-debug`.
2. `doktor-debug/wiki` publishes this standalone project documentation site.
3. `doktor-debug/web` renders device, software, manual, media, archive, and storage presentation views.

API code and policy are not mirrored into the organization. The canonical implementation, OpenAPI contract, gates, and tests live only in `n-e-o-w-u-l-f/myAPI`.
