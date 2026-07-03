---
layout: default
title: "TOC2 — Modes and Gates"
permalink: /TOC2/
---

# TOC2 — Modes and Gates

## CUSTOMER_MODE

Purpose: keep knowledge building moving. CUSTOMER_MODE may write routed proposals, scanner results, preservation metadata, import plans, and textual debug knowledge. It may supersede earlier false knowledge when Dr.Debug has stronger evidence than the old claim.

## ADMIN_MODE

Purpose: operate the API and controlled write machinery. ADMIN_MODE can manage imports, scanner runs, OpenAPI/API synchronization, workflow batches, and repository routing after authentication, owner context where configured, path policy, redaction, validation, and audit.

## OWNER_MODE

Purpose: final approvals, canonical promotion, release packaging, destructive migrations, and public rehosting decisions. OWNER_MODE requires stronger review metadata, explicit apply intent, affected paths, rollback, and validation.

## Non-negotiable hard blocks

- Secret storage
- Raw unredacted logs
- Path traversal
- Destructive action without rollback
- Unauthorized repository access
- Public rehosting without review
- Unsupported claims that a binary is malware-free, license-free, or universally compatible
