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

n-e-o-w-u-l-f/myAPI controls authentication, repository/path gates,
redaction, OpenAPI, writes, approvals and audit.
agents defines global routines; research and taxonomy support routing.
```

All new proposals originate in `doktor-debug/proposals`; all workflow definitions, plans, and templates originate in `doktor-debug/workflows`. Archive and storage are active lifecycle participants, not metadata-only sinks.

Authenticated OWNER_MODE may discover and describe all 14 organization repositories plus `myAPI` without mutation. A separate write decision is still required for every changed repository and path. No API implementation is mirrored into the organization.
