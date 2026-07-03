---
layout: default
title: "Dr.Debug Wiki"
description: "Evidence-routed debugging knowledge and preservation portal."
permalink: /
---

# Dr.Debug Wiki

<span class="badge">v2.2.2 documentation basis</span>

Dr.Debug Wiki is the standalone documentation portal for the `doktor-debug` organization. It explains how repositories, modes, scanner intake, preservation, imports, proposals, canonical facts, workflows, and the GPT backend API fit together.

<div class="hero-grid">
  <div class="tile"><strong>Evidence-routed</strong>Knowledge moves through proposals, imports, scanner reports, and validation before canonical promotion.</div>
  <div class="tile"><strong>Preserve now</strong>Private preservation records are created before upstream files disappear; public rehosting is reviewed later.</div>
  <div class="tile"><strong>Version-aware</strong>Hardware revision, firmware version, dependency tree, runtime, and date scope are part of the fact.</div>
</div>

## Start here

- [Full internal index](./.INDEX.md)
- [TOC1 — Repository map](./TOC1.md)
- [TOC2 — Modes and gates](./TOC2.md)
- [TOC3 — Preservation, scanner, import, and canonical lifecycle](./TOC3.md)
- [Architecture](./docs/architecture/)
- [API reference](./docs/api-reference/)

## Recommended GitHub layout

Use two separate public-facing documentation surfaces:

1. `doktor-debug/.github` for the organization overview at `https://github.com/doktor-debug`.
2. `doktor-debug/wiki` for this standalone GitHub Pages documentation site.

A repository named `doktor-debug.github.io` would be useful only if you want the organization-level root site at `https://doktor-debug.github.io/`. For this task, `doktor-debug/wiki` is the better fit because it keeps the wiki separate from the profile and can publish as a project site.
