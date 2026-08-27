---
layout: default
title: "TOC3 — Diagnostic Lifecycle"
permalink: /TOC3/
---

# TOC3 — Diagnostic Lifecycle

Dr.Debug uses this canonical evidence-driven lifecycle:

```text
INTAKE
  -> TRIAGE
  -> REPRODUCE
  -> ISOLATE
  -> HYPOTHESIS
  -> ROOT_CAUSE_VERIFIED
  -> REPAIR_PLAN
  -> APPLY
  -> VERIFY_FIX
  -> REGRESSION_CHECK
  -> CANONICALIZE / POSTMORTEM
```

`ROOT_CAUSE_VERIFIED` requires evidence that distinguishes the verified cause from competing explanations. `APPLY` records a controlled change; it is not proof of success. `VERIFY_FIX` must reproduce the original acceptance test or failure condition and show that the failure no longer occurs under the relevant scope. `REGRESSION_CHECK` tests relevant neighboring behavior before a repair can be treated as reusable successful knowledge.

## Incident fast path

For active incidents where impact reduction is more urgent than complete diagnosis:

```text
ASSESS IMPACT
  -> PRESERVE CRITICAL EVIDENCE
  -> MITIGATE
  -> STABILIZE
  -> ROOT-CAUSE ANALYSIS
  -> REPAIR
  -> VERIFY
  -> POSTMORTEM
```

Mitigation and stabilization may precede full root-cause verification, but they must preserve critical evidence where feasible and must not be mislabeled as verified repair.

## Repository routing through the lifecycle

- `.scanner` receives untrusted artifacts and triage records; intake artifacts are not executed.
- `.import` performs controlled extraction and staging.
- `.research` records sources, claims, conflicts and supporting evidence.
- `.proposals` holds hypotheses, unconfirmed fixes and proposed changes.
- `.workflows` holds reproducible repair, validation and rollback procedures.
- `.memory` stores accepted observations with evidence, scope and state.
- `.canonical` receives only verified reusable diagnostic knowledge.
- `.archive` and `.storage` preserve relevant evidence and artifacts under controlled retention/distribution rules.
- `.web`, `wiki`, and `doktor-debug.github.io` are presentation/release layers with distinct private/public responsibilities; they are not evidence authorities.

## API boundary

`doktor-debug/.api` owns Dr.Debug domain contracts and implementation for `/doktor-debug/**`. The shared `n-e-o-w-u-l-f/.myAPI` control plane owns cross-project gateway concerns such as authentication, owner resolution, discovery, audit, dispatch and common enforcement. The two layers must not duplicate ownership.
