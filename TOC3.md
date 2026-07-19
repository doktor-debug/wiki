---
layout: default
title: "TOC3 — Lifecycle"
permalink: /TOC3/
---

# TOC3 — Preservation, Scanner, Import, Proposal, Workflow, and Canonical Lifecycle

```text
scanner/to_process
  -> scanner/processed         useful content is extracted or routed
  -> scanner/unnecessary       not useful now, eligible for later review
  -> import/IMPORTS            PDF/code/dependency extraction
  -> proposals/PROPOSALS       the only proposal source of truth
  -> workflows                 definitions, plans, dry runs and rollback
  -> archive                   provenance, manifests and curated artifacts
  -> storage                   retained payloads and controlled access tiers
  -> canonical/CANONICAL       reviewed canonical truth
  -> memory/web/wiki           knowledge and presentation outputs
```

## Preserve promptly, decide distribution per item

Dr.Debug may preserve relevant artifacts when needed for repair, reproducibility, comparison, or dead-link prevention. Source status, distribution basis, visibility, approval, integrity, and scan status are recorded separately. Online/offline status alone neither permits nor forbids distribution.

All writes pass separately through `n-e-o-w-u-l-f/myAPI`. Authenticated OWNER_MODE description remains read-only.
