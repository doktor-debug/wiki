---
layout: default
title: "TOC1 — Repository Map"
permalink: /TOC1/
---

# TOC1 — Repository Map

| Repository | Main responsibility | Writes should contain |
|---|---|---|
| `agents` | Global agent instructions | Policies, routines, routing, eval prompts |
| `memory` | Textual debug memory | Error descriptions, source-backed troubleshooting knowledge |
| `web` | Rendered/manual/media memory | Pages, renderers, HTML/CSS/JS, redacted presentation metadata |
| `.github` | GitHub organization profile | `profile/README.md` and profile navigation |
| `wiki` | Standalone documentation portal | `index.md`, TOC pages, docs, assets |
| `archive` | Active curated preservation | Provenance, manifests, hashes, preservation and approved distribution records/artifacts |
| `scanner` | File intake and triage | `to_process`, `processed`, `unnecessary`, reports |
| `proposals` | Only proposal source of truth | Canonical proposals and linked move/import/canonicalization requests |
| `import` | Extraction pipeline | PDF text imports, code/function/dependency extraction |
| `canonical` | Reviewed truth | Canonical facts, superseded facts, conflicts |
| `workflows` | Only workflow source of truth | Definitions, plans, templates, batches, migrations, rollback, validation |
| `storage` | Active payload retention | Large-file/object tiers, integrity, access and retention metadata |
| `research` | Source review | Sources, claims, conflicts, rights and distribution-basis notes |
| `taxonomy` | Stammbaum | Device/software/ECLASS/dependency classification |

External service: `n-e-o-w-u-l-f/myAPI` is the only FastAPI/OpenAPI implementation, repository allowlist, gate, write-policy, and API-test location. It has no organization mirror.
