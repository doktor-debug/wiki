# Validation v2.4.0

Date: 2026-07-28

## Structure

- `index.md`, `.INDEX.md`, `TOC1.md`, `TOC2.md`, and `TOC3.md` exist.
- `_config.yml` includes `.INDEX.md` and sets the document language.
- Every home-page, index, TOC, layout, and `docs/` link resolves to a tracked
  page or asset.
- Jekyll front matter and permalinks are unique.

## API synchronization

- The public API index contains exactly 21 method/path/operation-ID rows.
- Public paths use `/dr.debug/*`.
- `/myapi/*` is described only as internal or loopback compatibility.
- `health` and `root` are public; admin operations use `bearerAuth`.
- Repository discovery and inspection are OWNER_MODE, bounded, redacted, and
  non-mutating.
- No page claims public `/myapi/*` reachability.
- The route suffixes and operation IDs match the released canonical OpenAPI in
  `n-e-o-w-u-l-f/myAPI`.

## Policy boundaries

- Proposals route only to `doktor-debug/proposals`.
- Workflow definitions route only to `doktor-debug/workflows`.
- API implementation and tests remain only in `n-e-o-w-u-l-f/myAPI`.
- External project-family policy intent is separated from implemented access.
- The suspected `.github.oi` typo is never presented as an authorized alias.
- Archive/storage visibility and distribution remain item-specific.

## Safety

- Public content contains no secrets, private payloads, personal data, raw logs,
  or non-public archive/storage locators.
- Memory/Canonical is distinguished from the Web/Wiki renderpoint.
- Current official or reproduced evidence may supersede stale internal records
  only through conflict-preserving proposal/review.

## Required checks

1. Inspect the complete diff.
2. Run a Markdown/internal-link check.
3. Compare Wiki API rows with canonical OpenAPI.
4. Build Jekyll when dependencies are available.
5. Regenerate and check the repository inventory.
