# doktor-debug/wiki

Version: 2.3.0
Date: 2026-07-19

Standalone GitHub Pages documentation and navigation portal for Dr.Debug-GPT.

## Entry points

- `index.md` — GitHub Pages home page
- `.INDEX.md` — complete documentation and repository index
- `TOC1.md` — repository map
- `TOC2.md` — modes and gates
- `TOC3.md` — preservation, scanner, import, proposal, workflow, and canonical lifecycle
- `docs/` — long-form pages

The 14 repositories under `doktor-debug` own their respective knowledge and artifact domains. The only canonical API implementation, OpenAPI contract, repository allowlist, and gate tests live externally in `n-e-o-w-u-l-f/myAPI`; no organization API mirror is used.

All new proposals originate in `doktor-debug/proposals`, and all workflow definitions, plans, and templates originate in `doktor-debug/workflows`. Authenticated `OWNER_MODE` may describe all 14 repositories plus `myAPI` without mutation; every write remains separately gated. Archive and storage are active services with item-specific visibility and distribution decisions.

Expected Pages URL: `https://doktor-debug.github.io/wiki/`.
