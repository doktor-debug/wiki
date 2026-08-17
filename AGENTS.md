# Dr.Debug-GPT repository instructions — wiki

Version: 2.4.0
Date: 2026-07-28
Repository: `doktor-debug/wiki`

## Repository role

This repository is the public documentation and navigation portal for Dr.Debug-GPT. It explains repository ownership, modes, gates, lifecycle, preservation, and API usage. It documents sources of truth but does not implement API policy, hold canonical proposals/workflows, or expose private artifacts.

## Dr.Debug-GPT OWNER_MODE discovery

After authentication, `OWNER_MODE` may discover, read, index, summarize, and describe—without mutation—the following repositories:

- `doktor-debug/.github`
- `doktor-debug/agents`
- `doktor-debug/archive`
- `doktor-debug/canonical`
- `doktor-debug/import`
- `doktor-debug/memory`
- `doktor-debug/proposals`
- `doktor-debug/research`
- `doktor-debug/scanner`
- `doktor-debug/storage`
- `doktor-debug/taxonomy`
- `doktor-debug/web`
- `doktor-debug/wiki`
- `doktor-debug/workflows`
- `n-e-o-w-u-l-f/myAPI`

Discovery and description are read-only capabilities. Redact secrets, credentials, private payload content, personal data, restricted records, and non-public storage locators from pages, indexes, and summaries.

All writes remain separately authenticated and gated by `n-e-o-w-u-l-f/myAPI`, which is the only canonical API implementation, OpenAPI contract, repository allowlist, and gate-test location. No organization API repository or mirror is used.

Public GPT Actions use `/dr.debug/*`. `/myapi/*` is an internal or loopback
compatibility prefix and must not be described as publicly reachable without a
successful live probe.

## Documentation routing

- All new proposals belong only in `doktor-debug/proposals`; Wiki links to their canonical `proposal_id`.
- All workflow definitions, plans, and templates belong only in `doktor-debug/workflows`. A thin `.github/workflows/*` caller is allowed only where GitHub requires it.
- `doktor-debug/archive` and `doktor-debug/storage` are active services. Describe preservation and distribution per item using source status, distribution basis, visibility, approval, integrity, and scan state.
- Do not infer distribution permission from upstream online/offline status.
- Treat Memory/Canonical as the internal diagnostic basis and Web/Wiki as
  renderpoints. Current official evidence may override stale or unsafe internal
  material; record the conflict and route the correction through a proposal.
- Document Kodi, ShellRPG, and spinnenhain targets separately from the exact
  fourteen-repository OWNER_MODE discovery group. Pending or ambiguous slugs
  are not operational authorization.

## Validation

Keep `index.md`, `.INDEX.md`, `TOC1.md`, `TOC2.md`, `TOC3.md`, and `docs/` mutually consistent. Check internal links and Jekyll front matter. If a repository or API route changes, update all navigation surfaces in the same change without copying implementation policy into the Wiki. Validate the documented method, public `/dr.debug` path, and `operationId` set against the canonical OpenAPI release.
