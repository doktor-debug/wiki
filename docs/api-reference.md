---
layout: default
title: "API Reference"
permalink: /docs/api-reference/
---

# API Reference

The OpenAPI document embeds complete endpoint descriptions. This page summarizes them for humans.

## GET `/admin/ping`

**Operation ID:** `adminPing`

Performs a minimal authenticated health check for the Dr.Debug GPT backend. The endpoint verifies that the bearer token is accepted by the backend, that the application process is reachable, and that the action bridge can receive a JSON response. It does not inspect GitHub state, does not write files, and does not reveal secrets or server configuration. Use it as the first smoke test after changing the GPT Action URL, bearer token, reverse proxy, local tunnel, or API deployment.

## POST `/admin/owner-ping`

**Operation ID:** `ownerPing`

Validates the Dr.Debug mode gate for a single requested operation, repository, owner identity, and reason. This endpoint is intended to answer the question “would this mode/repo/operation combination be accepted before any write path is evaluated?” It normalizes known repository aliases, checks the requested mode against the allowed repository set, verifies owner requirements for ADMIN_MODE and OWNER_MODE, and returns a structured gate result. It is safe for diagnostics because it performs no repository writes and no file-content processing.

## POST `/admin/files/dry-run`

**Operation ID:** `filesDryRun`

Runs the complete non-writing file-change policy check for one repository. The endpoint validates the requested mode, target repository, file paths, and supplied file contents without committing anything to GitHub. It is designed to be called before any write operation and returns whether each proposed file is routeable under the current mode, whether the path is allowed, whether a redaction/secret finding exists, and whether the request should be converted into a proposal, staging item, or canonical write attempt. Use this endpoint to prevent accidental writes to protected areas while keeping CUSTOMER_MODE able to add useful debugging knowledge in approved staging/proposal paths.

## POST `/admin/github/status`

**Operation ID:** `githubStatus`

Reads repository metadata and effective GitHub token capability for a target Dr.Debug repository. The endpoint checks whether the authenticated backend can see the repository, which default branch is reported, whether write operations are likely possible with the configured token, and which policy routing applies. It does not change repository content. Use it before admin or owner writes, after rotating a token, or when a repository has just been created and needs to be added to the Dr.Debug allowlist.

## POST `/admin/github/write-files`

**Operation ID:** `githubWriteFiles`

Performs a controlled file write to one GitHub repository after all required gates pass. The endpoint enforces bearer authentication, mode/repository allowlisting, owner requirements, path policy, secret/redaction scanning, branch handling, commit-message requirements, and audit logging. It expects complete replacement file contents, not diffs, because the backend must know exactly what will be stored. CUSTOMER_MODE writes remain routed to approved knowledge, proposal, archive, preservation, or staging paths; ADMIN_MODE and OWNER_MODE may write broader operational files when the request is authorized and validated. The endpoint must never be used to store secrets, raw unredacted logs, or unreviewed public binary rehosting payloads.

## POST `/admin/file-inventory/submit`

**Operation ID:** `fileInventorySubmit`

Registers a file inventory produced by Dr.Debug scanning or import tooling. Each record can include path, MD5, SHA-256, size, and artifact type so multi-file programs, driver packages, ZIP bundles, PDFs, media sets, and extracted code trees can be tracked consistently without needing to copy every byte into textual memory. The endpoint is additive metadata unless the caller routes the results into a later proposal or canonicalization flow. It is useful for detecting duplicate files, dependency bundles, versioned driver sets, and preservation candidates.

## POST `/admin/memory/fact-supersede`

**Operation ID:** `memoryFactSupersede`

Validates an autonomous Dr.Debug knowledge correction request. This endpoint exists because CUSTOMER_MODE may discover that previous knowledge was wrong, incomplete, version-scoped, dependency-scoped, or contradicted by later evidence. It requires an old claim, a replacement claim, evidence level, checked-step count, and source references so a fact can be superseded or narrowed without accepting arbitrary user assertions as truth. The endpoint supports conflict-safe knowledge evolution: do not erase history blindly; record why the older statement is no longer the best supported statement for the specific device, software version, dependency tree, or runtime context.

## POST `/admin/storage/mirror-register`

**Operation ID:** `storageMirrorRegister`

Registers private storage or mirror metadata for files that may be needed for future debugging, preservation, or deadlink recovery. This endpoint separates private preservation from public rehosting: it may record hashes, filenames, upstream URL, source status, and storage status immediately, but it must not imply that the backend is offering a public download. Public rehosting remains a separate review decision. Use this endpoint for drivers, firmware, installers, manuals, APKs, ZIPs, archives, and other artifacts that might disappear upstream while still being important to reproduce a repair workflow.

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

Registers an archive artifact in the established Dr.Debug stammbaum structure. The endpoint records the target taxonomy path, filename, hashes, upstream availability, and public mirror status. It supports immediate preservation records, deadlink candidates, private manifests, and later public rehosting review without turning the archive repository into an uncontrolled file host. Use it for manuals, firmware packages, driver bundles, APKs, installers, source archives, and multi-file evidence packages that must remain discoverable for future debugging and repair workflows.

## POST `/admin/preservation/capture`

**Operation ID:** `preservationCapture`

Registers an immediate private preservation capture. This endpoint is based on the preserve-now / rehost-later-review rule: Dr.Debug should preserve important debugging artifacts while they are still reachable or available, because it cannot know when an upstream file will disappear. The request can record source URL, source status, filename, size, MD5, SHA-256, stammbaum route, device/software/dependency scope, storage location, scan status, and public rehosting status. A successful response means the metadata and private-preservation intent are accepted; it does not mean the file is publicly offered, malware-free, license-free, or approved for redistribution.
