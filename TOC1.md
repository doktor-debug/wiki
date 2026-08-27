---
layout: default
title: "TOC1 — Repository Map"
permalink: /TOC1/
---

# TOC1 — Repository Map

| Repository | Main responsibility | Writes should contain |
|---|---|---|
| `.agents` | Global governance | Agent rules, modes, gates, routing, evaluation/governance task directives |
| `.api` | Dr.Debug domain API | `/doktor-debug/**` contracts, schemas, domain handlers/adapters, contract tests |
| `.memory` | Accepted diagnostic observations | Evidence-scoped observations with explicit lifecycle state |
| `.proposals` | Unconfirmed change and diagnosis space | Hypotheses, unconfirmed fixes, structure/canonicalization proposals |
| `.workflows` | Reproducible operations | Repair, validation, migration, rollback, dry-run and verification workflows |
| `.canonical` | Verified reusable knowledge | Canonical diagnostic records, superseded records, conflicts |
| `.research` | Evidence research | Sources, claims, conflicts, provenance, rights and evidence analysis |
| `.scanner` | Untrusted artifact intake | Intake metadata, reports and triage; artifacts are never executed |
| `.import` | Controlled extraction | Extraction plans, staged imports, dependency/symbol extraction |
| `.archive` | Active preservation | Provenance, manifests, hashes and preservation records |
| `.storage` | Payload retention/delivery | Integrity, retention, access and controlled-delivery metadata |
| `.taxonomy` | Dr.Debug taxonomy | Device/software/error/dependency classification and routing taxonomy |
| `.web` | Private presentation source | Private render/source material; not the public release target |
| `.github` | Public organization profile | `profile/README.md` and organization navigation |
| `wiki` | Public documentation portal | Documentation, architecture, TOCs and sanitized references |
| `doktor-debug.github.io` | Sanitized public-release target | Deliberately generated/released public content only |

Shared gateway/control plane: `n-e-o-w-u-l-f/.myAPI` owns cross-project concerns such as root/shared health/system endpoints, discovery, authentication/owner resolution, audit, dispatch and common enforcement. It must not own or duplicate Dr.Debug domain contracts under `/doktor-debug/**`.

Repository visibility and publication are separate concerns. Dot-prefixed repositories are private by default unless a special GitHub role requires otherwise; `doktor-debug.github.io` is a release target, not proof that a public release currently exists.
