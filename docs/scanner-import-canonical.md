---
layout: default
title: "Scanner, Import, and Canonical Lifecycle"
permalink: /docs/scanner-import-canonical/
---

# Scanner, Import, and Canonical Lifecycle

1. Files enter `scanner/to_process`.
2. Dr.Debug analyzes type, hashes, bundle layout, text, functions, dependencies, versions, and debug relevance.
3. Useful files move to `scanner/processed` while extracted knowledge routes to `import`, `proposals`, `archive`, `storage`, `memory`, `web`, or `agents`.
4. Finished processed files can be removed from `processed` or replaced by tombstone references.
5. Not currently useful files move to `scanner/unnecessary` for future re-evaluation.
6. Canonical truth is written only when evidence, version scope, dependency scope, conflict review, and route validation are sufficient.
