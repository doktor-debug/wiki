---
layout: default
title: "Scanner, Import, Proposal, Workflow, and Canonical Lifecycle"
permalink: /docs/scanner-import-canonical/
---

# Scanner, import, proposal, workflow, and canonical lifecycle

1. Files enter `doktor-debug/scanner/to_process`.
2. Dr.Debug analyzes type, hashes, bundle layout, text, functions, dependencies, versions, provenance, and debugging relevance.
3. Useful files move to `scanner/processed`; extracted knowledge routes to `import`, `memory`, `web`, `agents`, active `archive`/`storage`, or a new canonical proposal in `doktor-debug/proposals`.
4. Any reusable execution definition, plan, template, dry run, migration, or rollback record routes to `doktor-debug/workflows`.
5. Finished processed files may be removed or replaced by tombstone references; not-currently-useful files move to `scanner/unnecessary` for later re-evaluation.
6. Canonical truth is written only when evidence, version/dependency/hardware scope, conflict review, lineage, and route validation are sufficient.
7. Authenticated OWNER_MODE may describe lifecycle state across all repositories without mutation after redaction. Every write remains separately gated by `n-e-o-w-u-l-f/myAPI`.

Source online/offline state is recorded but does not by itself decide preservation or artifact distribution.
