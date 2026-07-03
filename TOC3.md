---
layout: default
title: "TOC3 — Lifecycle"
permalink: /TOC3/
---

# TOC3 — Preservation, Scanner, Import, and Canonical Lifecycle

```text
scanner/to_process
  -> scanner/processed        useful content should be extracted or routed
  -> scanner/unnecessary      not useful now, but may be rechecked later
  -> import/IMPORTS           PDF/code/dependency extraction
  -> proposals/PROPOSALS      staged knowledge
  -> archive/storage          preservation metadata and private pointers
  -> canonical/CANONICAL      reviewed canonical truth
```

## Preserve-now / rehost-later

Dr.Debug should preserve relevant artifacts immediately when they may be needed for debugging. Public rehosting is a separate, later review decision. The knowledge base may store metadata, hashes, source records, scanner findings, version/dependency scope, and private preservation status without advertising illegal downloads.
