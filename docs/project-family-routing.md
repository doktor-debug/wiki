---
layout: default
title: "Project-family routing"
permalink: /docs/project-family-routing/
---

# Project-family routing

Version: 2.4.0  
Date: 2026-07-28

These repositories are external project targets, not members of the exact
fourteen-repository Dr.Debug OWNER_MODE discovery group. A target becomes
operational only after its exact GitHub slug, installation visibility, backend
allowlist, path policy, mode gate, and dry-run all pass.

## Unresolved aliases

| Family | Policy-intent name | Backend-known name | State |
|---|---|---|---|
| Kodi repository | `kodiwulf/repository` | `kodi-wulf/repository` | `PENDING_EXACT_SLUG_VERIFICATION` |
| Kodi plugin | `kodiwulf/plugin.video.xwulf` | `kod-wulf/plugin.video.xwulf` | `PENDING_EXACT_SLUG_VERIFICATION` |
| ShellRPG web | `RPGheros/ShellRPG-www` | `RPG-Wulf/ShellRPG-web` | `PENDING_EXACT_SLUG_VERIFICATION` |
| TYPO3 v13/v14 | two requested version repositories | `spinnenhain/tx_spinnenhain` | `PENDING_REPOSITORY_SPLIT_VERIFICATION` |

`spinnenhain/spinnenhain.github.oi` is treated as an invalid suspected typo, not
an alias or authorized target.

## Role routing after verification

- Kodi repository work: package metadata, add-on indexes, checksums, repository
  ZIPs, and source references.
- Kodi plugin work: add-on code, resources, manifests, tests, and bounded
  packaging. Treat ZIPs and binaries as high risk.
- ShellRPG client: terminal client, code, tests, and documentation.
- ShellRPG web/www: web client, UI, and public assets.
- ShellRPG wiki: redacted lore and system documentation.
- ShellRPG CDN: public-safe assets with explicit distribution basis.
- ShellRPG server: server-authoritative implementation; never expose
  anti-cheat, recovery internals, secrets, or private server details.
- spinnenhain TYPO3: route by verified major-version repository.
- spinnenhain bookkeeper: accounting/domain application.
- spinnenhain site: public pages and Jekyll assets.

Unknown, misspelled, pending, or conflicting slugs fail closed. Documentation of
policy intent is not proof of read or write access.
