---
layout: default
title: "API Reference"
permalink: /docs/api-reference/
---

# API Reference

The canonical Dr.Debug API implementation, OpenAPI document, repository allowlist, gates, and tests live only in `n-e-o-w-u-l-f/myAPI`. No organization API mirror is used. This page is a human-readable summary and must stay synchronized with that canonical contract.

Authenticated `OWNER_MODE` may use read-only discovery operations to discover, read, index, summarize, and describe all 14 `doktor-debug` repositories plus `n-e-o-w-u-l-f/myAPI`. That capability never implies mutation. Write operations are authorized separately and must redact secrets, private payload content, and non-public storage locators.

## GET `/admin/ping`

**Operation ID:** `adminPing`

Performs a minimal authenticated health check for the `n-e-o-w-u-l-f/myAPI` service. The endpoint verifies that the bearer token is accepted, that the application process is reachable, and that the action bridge can receive a JSON response. It does not inspect GitHub state, write files, or reveal secrets or server configuration. Use it as the first smoke test after changing the GPT Action URL, bearer token, reverse proxy, local tunnel, or deployment.

## POST `/admin/owner-ping`

**Operation ID:** `ownerPing`

Validates the Dr.Debug mode gate for a requested operation, repository, owner identity, and reason before any mutation is attempted. It normalizes known repository aliases, checks the requested mode and capability, verifies owner requirements, and returns a structured gate result. For authenticated `OWNER_MODE`, read-only discover/read/index/summarize/describe operations may cover all 14 `doktor-debug` repositories plus `n-e-o-w-u-l-f/myAPI`; a successful description preflight grants no write permission. The endpoint performs no repository writes or file-content processing.

## POST `/admin/files/dry-run`

**Operation ID:** `filesDryRun`

Runs the complete non-writing file-change policy check for one repository. The endpoint validates the requested mode, target repository, file paths, and supplied file contents without committing anything to GitHub. It is designed to be called before any write operation and returns whether each proposed file is routeable under the current mode, whether the path is allowed, whether a redaction/secret finding exists, and whether the request should be converted into a proposal, staging item, or canonical write attempt. Use this endpoint to prevent accidental writes to protected areas while keeping CUSTOMER_MODE able to add useful debugging knowledge in approved staging/proposal paths.

## POST `/admin/github/status`

**Operation ID:** `githubStatus`

Reads repository metadata and effective GitHub token capability for a target Dr.Debug repository. The endpoint checks whether the authenticated backend can see the repository, which default branch is reported, whether write operations are likely possible with the configured token, and which policy routing applies. It does not change repository content. Use it before admin or owner writes, after rotating a token, or when a repository has just been created and needs to be added to the Dr.Debug allowlist.

## POST `/admin/github/write-files`

**Operation ID:** `githubWriteFiles`

Performs a controlled file write to one GitHub repository after all required gates pass. The endpoint enforces bearer authentication, mode/repository allowlisting, owner requirements, path policy, secret/redaction scanning, branch handling, commit-message requirements, and audit logging. It expects complete replacement file contents, not diffs, because `myAPI` must know exactly what will be stored. New proposals route only to `doktor-debug/proposals`; workflow definitions, plans, and templates route only to `doktor-debug/workflows`. The endpoint must never store secrets, raw unredacted logs, private storage locators, or payloads lacking the required item-specific visibility and distribution approval.

## POST `/admin/file-inventory/submit`

**Operation ID:** `fileInventorySubmit`

Registers a file inventory produced by Dr.Debug scanning or import tooling. Each record can include path, MD5, SHA-256, size, and artifact type so multi-file programs, driver packages, ZIP bundles, PDFs, media sets, and extracted code trees can be tracked consistently without needing to copy every byte into textual memory. The endpoint is additive metadata unless the caller routes the results into a later proposal or canonicalization flow. It is useful for detecting duplicate files, dependency bundles, versioned driver sets, and preservation candidates.

## POST `/admin/memory/fact-supersede`

**Operation ID:** `memoryFactSupersede`

Validates an autonomous Dr.Debug knowledge correction request. This endpoint exists because CUSTOMER_MODE may discover that previous knowledge was wrong, incomplete, version-scoped, dependency-scoped, or contradicted by later evidence. It requires an old claim, a replacement claim, evidence level, checked-step count, and source references so a fact can be superseded or narrowed without accepting arbitrary user assertions as truth. The endpoint supports conflict-safe knowledge evolution: do not erase history blindly; record why the older statement is no longer the best supported statement for the specific device, software version, dependency tree, or runtime context.

## POST `/admin/storage/mirror-register`

**Operation ID:** `storageMirrorRegister`

Registers active storage and mirror state for files needed for debugging, preservation, reproducibility, or dead-link recovery. It records hashes, filenames, upstream URL, source status, storage tier, distribution basis, visibility, approval state, integrity, and scan state as independent item-level facts. Outcomes may include private retention, restricted access, public metadata, or approved public artifact distribution. Upstream online/offline status alone neither permits nor forbids an outcome, and private storage locators are never returned in public descriptions.

## POST `/admin/workflows/batch-dry-run`

**Operation ID:** `workflowBatchDryRun`

Validates a staged multi-file or multi-step workflow batch without applying it. A batch may represent import results, scanner decisions, file moves, canonicalization candidates, taxonomy updates, API/OpenAPI synchronized edits, or archive registrations. The endpoint checks the requested mode, all proposed paths, redaction findings, and routing expectations so larger knowledge-base changes can be reviewed as a unit. It is the preferred entry point when several repositories may be affected and the caller needs a safe preview before any write endpoint is used.

## POST `/admin/workflows/batch-apply`

**Operation ID:** `workflowBatchApply`

Validates that a staged workflow batch is eligible to be applied and returns an apply decision, but the actual repository writes are still expected to be performed through controlled write endpoints. This design keeps batch orchestration separate from low-level GitHub file mutation. The endpoint is intended for ADMIN_MODE or OWNER_MODE when importing scanner output, promoting proposals, performing route migrations, or applying API/OpenAPI updates that must remain synchronized. It must include a reason, audit trail, rollback expectation, and validation plan.

## POST `/admin/scanner/triage`

**Operation ID:** `scannerTriage`

Registers the analysis and routing decision for a file placed in the scanner repository. The endpoint records the source path, hashes, detected file type, route hint, and lifecycle move decision. Files that contain useful knowledge should move from scanner/to_process to scanner/processed while their extracted or summarized content is routed to memory, web, agents, archive, storage, proposals, import, or canonical. After successful incorporation, processed entries may be replaced by a tombstone or reference. Files that are not currently useful move to scanner/unnecessary so they can be reconsidered later when the knowledge base or research context changes.

## POST `/admin/import/extract`

**Operation ID:** `importExtract`

Registers a planned import extraction from PDFs, code bases, archives, scripts, dependency trees, or other structured artifacts. The endpoint can request extraction of text, functions, dependencies, versions, file lists, and rebuild-relevant code structure. It does not automatically claim that imported material is canonical; it creates routeable facts, proposals, dependency records, and source-backed snippets that can later be validated. Use it when a document, ZIP, repository snapshot, or local file tree contains debugging knowledge that should be preserved without flooding canonical memory with unreviewed raw content.

## POST `/admin/proposals/canonicalize`

**Operation ID:** `proposalsCanonicalize`

Validates a proposal-to-canonical route. The endpoint receives a proposal identifier, evidence level, target repository, target path, version scope, dependency scope, and apply intent. It is designed to keep every mode able to prepare useful proposals while requiring stronger evidence and route checks before canonical knowledge is created. Canonicalization should preserve lineage, identify superseded or conflicting records, include version/dependency/hardware scope, and avoid overwriting older knowledge unless the older knowledge is explicitly shown to be false or out of scope.

## POST `/admin/archive/register`

**Operation ID:** `archiveRegister`

Registers an artifact in the active `doktor-debug/archive` Stammbaum. The endpoint records taxonomy path, filename, hashes, provenance, source status, distribution basis, visibility, approval, integrity, scan state, and storage relationship. It supports private preservation, restricted access, public metadata, and approved public artifacts without turning the repository into an uncontrolled file host. Use it for manuals, firmware packages, driver bundles, APKs, installers, source archives, and multi-file evidence packages that must remain discoverable for future repair workflows.

## POST `/admin/preservation/capture`

**Operation ID:** `preservationCapture`

Registers a preservation capture request. Dr.Debug may preserve important artifacts promptly because future availability is uncertain, but preservation and distribution remain separate item-level decisions. The request records source URL/status, filename, size, MD5, SHA-256, Stammbaum route, device/software/dependency scope, redacted storage route, scan state, distribution basis, visibility, and approval state. A successful response confirms only the explicitly approved outcome; it is never a universal claim that an artifact is malware-free, license-free, or compatible.
