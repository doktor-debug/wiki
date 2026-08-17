---
layout: default
title: "API Reference"
permalink: /docs/api-reference/
---

# API reference

Version: 2.4.0
Date: 2026-07-28

The canonical implementation, OpenAPI document, repository allowlist, gates,
and API tests live only in `n-e-o-w-u-l-f/myAPI`. This page is a
human-readable route index, not a second machine contract.

## Prefix and authentication contract

| Surface | Prefix | Reachability |
|---|---|---|
| Public GPT Action gateway | `/dr.debug/*` | Observed external route; use this in the published Action schema. |
| Internal/loopback compatibility | `/myapi/*` | Backend compatibility route only; no public reachability claim. |

The operation suffix is identical after the prefix. For example, public
`/dr.debug/admin/ping` maps internally to `/myapi/admin/ping` when the gateway
forwards the request.

`health` and `root` are public descriptors. All admin operations use the
OpenAPI `bearerAuth` security scheme. Authentication is configured in the GPT
Action UI; it is not modeled as an operation-level `Authorization` or
`X-Owner-Secret` header parameter.

## Operation index

| Method | Public path | Operation ID | Effect |
|---|---|---|---|
| GET | `/dr.debug/health` | `health` | Public health descriptor; no GitHub dependency or write. |
| GET | `/dr.debug/` | `root` | Public service descriptor; no write. |
| GET | `/dr.debug/admin/ping` | `adminPing` | Bearer-authenticated smoke test; no GitHub write. |
| POST | `/dr.debug/admin/owner-ping` | `ownerPing` | Validates mode, repository, owner claim, and reason; no write. |
| POST | `/dr.debug/admin/files/dry-run` | `filesDryRun` | Single-repository path, routing, and redaction preflight; no write. |
| POST | `/dr.debug/admin/github/status` | `githubStatus` | Reads repository/token capability metadata; no write. |
| POST | `/dr.debug/admin/github/repositories/discover` | `githubRepositoriesDiscover` | Owner-only discovery of the configured repository group; no write. |
| POST | `/dr.debug/admin/github/repository/inspect` | `githubRepositoryInspect` | Owner-only bounded, redacted tree/document inspection; no write. |
| POST | `/dr.debug/admin/github/write-files` | `githubWriteFiles` | Controlled single-repository write only when every gate passes and `apply=true`. |
| POST | `/dr.debug/admin/files/dry-run-multi` | `filesDryRunMulti` | Validates every multi-repository target before the first write; no write. |
| POST | `/dr.debug/admin/github/write-files-multi` | `githubWriteFilesMulti` | Controlled multi-repository write; partial results require explicit reporting and rollback. |
| POST | `/dr.debug/admin/file-inventory/submit` | `fileInventorySubmit` | Registers inventory metadata; no implicit file hosting or GitHub write. |
| POST | `/dr.debug/admin/memory/fact-supersede` | `memoryFactSupersede` | Validates a scoped fact correction; repository write remains separate. |
| POST | `/dr.debug/admin/storage/mirror-register` | `storageMirrorRegister` | Registers item-specific storage/preservation metadata; uploads no binary. |
| POST | `/dr.debug/admin/workflows/batch-dry-run` | `workflowBatchDryRun` | Validates a staged workflow batch; no write. |
| POST | `/dr.debug/admin/workflows/batch-apply` | `workflowBatchApply` | Returns an apply decision; low-level writes still use controlled write operations. |
| POST | `/dr.debug/admin/scanner/triage` | `scannerTriage` | Registers scanner analysis and lifecycle routing. |
| POST | `/dr.debug/admin/import/extract` | `importExtract` | Registers a bounded extraction plan; creates no canonical claim by itself. |
| POST | `/dr.debug/admin/proposals/canonicalize` | `proposalsCanonicalize` | Validates proposal lineage, scope, evidence, route, and apply intent. |
| POST | `/dr.debug/admin/archive/register` | `archiveRegister` | Registers provenance, hashes, visibility, approval, integrity, and scan state. |
| POST | `/dr.debug/admin/preservation/capture` | `preservationCapture` | Registers an item-specific preservation request; preservation is not distribution. |

The public Action surface contains exactly 21 operations in this release.

## OWNER_MODE repository reading

After bearer authentication and a server-resolved owner claim,
`githubRepositoriesDiscover` and `githubRepositoryInspect` may discover, read,
index, summarize, and describe:

- the exact fourteen `doktor-debug/*` repositories listed in the organization
  policy; and
- `n-e-o-w-u-l-f/myAPI` as a separately identified control plane.

Inspection is bounded and redacted. It rejects sensitive paths, binary files,
oversized documents, secrets, personal data, private payloads, and non-public
archive/storage locators. Read authority never grants mutation authority.

External Kodi, ShellRPG, and spinnenhain project families are separate targets.
They are not added to the fourteen-repository read group merely because a policy
proposal names them.

## Write contract

A real write requires bearer authentication, server-resolved owner mutation
authority, exact repository, route-matching change type, reason, branch, commit
message, complete file contents, path policy, secret/redaction scan, successful
dry-run, validation, rollback, and explicit `apply: true`.

Multi-repository changes must validate every target before the first write. If
the transport cannot provide atomicity, a mid-flight failure is reported as
`PARTIAL_WRITE` with exact per-repository results and rollback actions. It must
never be reported as success.

Responses and handoffs state:

- result and whether a write occurred;
- exact repositories and files;
- validation evidence;
- rollback state;
- whether a service restart or deployment is required.

Tool existence, credentials, execution, and output must be proven before a
capability or result is claimed.
