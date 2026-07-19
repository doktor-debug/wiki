---
layout: default
title: "Preservation and Distribution"
permalink: /docs/preservation/
---

# Preservation and distribution

`doktor-debug/archive` and `doktor-debug/storage` are active services. They support prompt preservation, private or restricted retention, public metadata, and approved public artifact distribution.

Preservation does not automatically authorize distribution. Decide distribution item by item regardless of current upstream availability, using independent evidence:

- source URL, retrieval date, and source status;
- filename, media type, and size;
- SHA-256 and optional legacy MD5;
- device, software, version, and dependency scope;
- integrity verification;
- scan status, tooling, date, and limitations;
- distribution basis or rights evidence;
- visibility and approval state;
- redacted archive/storage route.

Possible visibility states include private, restricted, public metadata, and public artifact. Approval can be review-required, approved, rejected, or revoked. Never publish secrets, private payloads, or non-public storage locators, and never present a scan as a universal safety guarantee.

New preservation proposals belong in `doktor-debug/proposals`; reusable preservation workflows belong in `doktor-debug/workflows`; capture and publication writes remain gated by `n-e-o-w-u-l-f/myAPI`.
