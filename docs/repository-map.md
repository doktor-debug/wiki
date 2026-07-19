---
layout: default
title: "Repository Map"
permalink: /docs/repository-map/
---

# Repository Map

See [TOC1](../../TOC1/) for the complete table. The routing rules are:

- Store global instructions in `doktor-debug/agents`.
- Store textual debugging knowledge in `doktor-debug/memory`.
- Store rendered/manual/media presentation in `doktor-debug/web`.
- Store every new proposal in `doktor-debug/proposals`.
- Store every workflow definition, plan, and template in `doktor-debug/workflows`; repository-local GitHub callers stay thin.
- Store organization profile content in `doktor-debug/.github` and public documentation in `doktor-debug/wiki`.
- Store raw intake in `doktor-debug/scanner` and reviewed facts in `doktor-debug/canonical`.
- Use active `doktor-debug/archive` and `doktor-debug/storage` for curated preservation and payload retention with item-specific visibility and distribution decisions.
- Store API implementation, OpenAPI, gates, allowlists, and tests only in `n-e-o-w-u-l-f/myAPI`. No organization API mirror is used.

Authenticated OWNER_MODE may describe every listed repository without mutation after redaction; writes remain separately gated.
