---
layout: default
title: "TOC2 — Modes and Gates"
permalink: /TOC2/
---

# TOC2 — Modes and Gates

Authority mode controls what an actor may do. It does not determine whether a diagnostic claim is true.

## CUSTOMER_MODE

Purpose: intake, observation, evidence contribution, and other explicitly allowed non-privileged operations. CUSTOMER_MODE may contribute diagnostic material only through the route and gate applicable to that artifact. It cannot promote a hypothesis to verified root cause or a repair attempt to verified fix merely by submitting it.

## ADMIN_MODE

Purpose: operate controlled imports, scanner processing, workflow execution, validation, and repository routing within defined policy. ADMIN_MODE still does not prove a hypothesis, root cause, repair, or regression result. Apply operations require scope, rollback, evidence preservation, and post-apply verification.

## OWNER_MODE

Purpose: authorize high-impact repository, policy, release, and mutation operations after server-side identity resolution. OWNER_MODE is mutation authority, not evidence. Canonical promotion, destructive migration, visibility changes, release publication, and artifact distribution require their own explicit gates and evidence.

## Evidence states

Evidence state is tracked separately from authority:

`draft` → `candidate` → `validated` → `canonical`

A record may instead become `superseded` or `rejected`. Promotion requires evidence appropriate to the claim. No authority mode can skip evidence requirements.

## Repair verification gates

- A completed command or successful process exit proves only that the command completed.
- `APPLY` does not imply the original failure is fixed.
- `VERIFY_FIX` must retest the original failure condition and record acceptance evidence.
- `REGRESSION_CHECK` must examine relevant neighboring behavior before a successful repair can be canonicalized.
- Failed repairs remain diagnostic evidence and must not be rewritten as success.

## Non-negotiable hard blocks

- Secret or credential storage
- Raw unredacted sensitive logs or private payload disclosure
- Non-public storage locator disclosure
- Path traversal
- Destructive action without rollback
- Unauthorized repository access
- Public artifact distribution without item-specific authority and sanitization
- Unsupported claims that an artifact is malware-free, license-free, universally compatible, or repaired without matching verification evidence
