---
layout: default
title: "TOC2 — Modes and Gates"
permalink: /TOC2/
---

# TOC2 — Modes and Gates

## CUSTOMER_MODE

Purpose: keep knowledge building moving. CUSTOMER_MODE may submit routed proposals only to `doktor-debug/proposals` and may use separately allowed scanner, preservation-metadata, import, or textual-knowledge paths after authentication, redaction, and path validation.

## ADMIN_MODE

Purpose: operate controlled imports, scanner runs, workflow batches, and repository routing through the canonical `n-e-o-w-u-l-f/myAPI` gates. Workflow definitions, plans, and templates remain in `doktor-debug/workflows`.

## OWNER_MODE

After authentication, OWNER_MODE may discover, read, index, summarize, and describe all 14 `doktor-debug` repositories plus `n-e-o-w-u-l-f/myAPI` without mutation. Description output must redact secrets, private payloads, personal data, restricted records, and non-public storage locators.

Mutation is a separate capability. Canonical promotion, release packaging, destructive migration, visibility changes, and artifact distribution require explicit apply intent, exact affected paths, item-specific approval evidence, validation, audit, and rollback through `myAPI`.

## Non-negotiable hard blocks

- Secret or credential storage
- Raw unredacted logs or private payload disclosure
- Non-public storage locator disclosure
- Path traversal
- Destructive action without rollback
- Unauthorized repository access
- Public artifact distribution without an item-specific basis and approval
- Unsupported claims that a binary is malware-free, license-free, or universally compatible
