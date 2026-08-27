---
layout: default
title: "Dr.Debug Wiki"
description: "Evidence-routed debugging knowledge, controlled repair, and repository governance."
permalink: /
---

# Dr.Debug Wiki

<span class="badge">v2.4.0 documentation</span>

Dr.Debug Wiki documents the current 16-repository `doktor-debug` architecture and the shared gateway/control-plane service in `n-e-o-w-u-l-f/.myAPI`. Dr.Debug is limited to software and hardware error analysis, diagnosis, reproduction, isolation, root-cause verification, mitigation, repair planning, controlled repair, fix verification, regression checking, preservation, and evidence-based diagnostic knowledge.

<div class="hero-grid">
  <div class="tile"><strong>Evidence-routed</strong>Hypotheses and unconfirmed fixes belong in <code>doktor-debug/.proposals</code>; only verified reusable knowledge is promoted to <code>doktor-debug/.canonical</code>.</div>
  <div class="tile"><strong>Verification-first</strong><code>APPLY</code> is not proof of repair. <code>VERIFY_FIX</code> must retest the original failure, followed by regression checking before successful repair claims can be canonicalized.</div>
  <div class="tile"><strong>Role-separated</strong><code>doktor-debug/.api</code> owns Dr.Debug domain contracts under <code>/doktor-debug/**</code>; <code>n-e-o-w-u-l-f/.myAPI</code> owns shared gateway concerns such as authentication, owner resolution, audit, discovery, dispatch, and common enforcement.</div>
</div>

## Start here

- [Full internal index](./.INDEX.md)
- [TOC1 — Repository map](./TOC1.md)
- [TOC2 — Modes and gates](./TOC2.md)
- [TOC3 — Diagnostic lifecycle](./TOC3.md)
- [Architecture](./docs/architecture/)
- [API reference](./docs/api-reference/)
- [Preservation and distribution](./docs/preservation/)

## Public and private presentation

1. `doktor-debug/.github` is the public organization profile source.
2. `doktor-debug/wiki` is the public documentation portal.
3. `doktor-debug/.web` is a private presentation/source repository and must not be treated as the public release target.
4. `doktor-debug/doktor-debug.github.io` is the designated sanitized public-release repository. Publication requires a deliberate release and must not be inferred merely from repository existence; its current visibility is managed separately.

Dot-prefixed repositories are private by default unless a special GitHub role requires otherwise. Public documentation must not expose secrets, private storage locators, restricted evidence, raw sensitive logs, or unsanitized artifacts.
