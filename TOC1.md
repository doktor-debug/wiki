---
layout: default
title: "TOC1 — Repository Map"
permalink: /TOC1/
---

# TOC1 — Repository Map

| Repository | Main responsibility | Writes should contain |
|---|---|---|
| `agents` | Global agent instructions | Policies, routines, routing, eval prompts |
| `memory` | Textual debug memory | Facts, workflows, error descriptions, source-backed knowledge |
| `web` | Rendered/manual/media memory | Pages, renderers, HTML/CSS/JS, visual/manual metadata |
| `api` | GPT backend API mirror | FastAPI code, policy gates, OpenAPI, tests |
| `.github` | GitHub organization profile | `profile/README.md` and profile navigation |
| `wiki` | Standalone documentation portal | `index.md`, TOC pages, docs, assets |
| `archive` | Preservation metadata | Private preservation, file manifests, source records |
| `scanner` | File intake and triage | to_process, processed, unnecessary, reports |
| `proposals` | Draft knowledge | Proposals, move requests, canonicalization requests |
| `import` | Extraction pipeline | PDF text imports, code/function/dependency extraction |
| `canonical` | Reviewed truth | Canonical facts, superseded facts, conflicts |
| `workflows` | Batch orchestration | Batches, migrations, rollback, validation |
| `storage` | Large-file/preserved pointers | Git LFS pointers, private storage metadata |
| `research` | Source review | Sources, claims, conflicts, rights notes |
| `taxonomy` | Stammbaum | Device/software/ECLASS/dependency classification |
