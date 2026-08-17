---
layout: default
title: "Architecture"
permalink: /docs/architecture/
---

# Architecture

Dr.Debug separates intake, review, preservation, knowledge, presentation, and enforcement so that read-only discovery is broad while mutation remains explicit and auditable.

```text
scanner -> import -> proposals -> workflows -> canonical -> memory -> web/wiki
              |            |             |
              +------> archive <---------+
                        storage

public /dr.debug gateway -> n-e-o-w-u-l-f/myAPI controls authentication, repository/path gates,
redaction, OpenAPI, writes, approvals and audit.
agents defines global routines; research and taxonomy support routing.
```

All new proposals originate in `doktor-debug/proposals`; all workflow definitions, plans, and templates originate in `doktor-debug/workflows`. Archive and storage are active lifecycle participants, not metadata-only sinks.

Authenticated OWNER_MODE may discover and describe all 14 organization repositories plus `myAPI` without mutation. A separate write decision is still required for every changed repository and path. No API implementation is mirrored into the organization.

## Repair-answer and renderpoint priority

For diagnosis, start with current Memory/Canonical records, then use Web/Wiki
renderpoints, user evidence, official vendor or project sources, current
research, and finally community evidence. This is an efficiency order, not a
truth override: current official or reproduced evidence supersedes stale or
unsafe internal records. Preserve the conflict and create a proposal before
changing canonical knowledge.

Web and Wiki render selected, redacted views. They do not become a second source
of technical truth or a host for full manuals and binaries.

## Gateway prefixes

The externally observed GPT Action prefix is `/dr.debug/*`. The backend may
retain `/myapi/*` on loopback or internal routes for compatibility. Public
documentation must not claim `/myapi/*` live reachability.
