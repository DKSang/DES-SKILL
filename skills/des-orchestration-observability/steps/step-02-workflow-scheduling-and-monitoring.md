# Step 02 — Workflow Scheduling, Gates, Monitoring, and Evidence

## Goal

Define workflows, dependencies, schedules, triggers, source readiness checks, quality gates, publish gates, retry/timeout policies, failure handling, recovery, backfill/replay operations, alerting, incidents, monitoring signals, SLA tracking, run evidence, operational ownership, and supporting evidence.

This step prepares the Orchestration and Observability Specification and identifies which operational decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Phase 14 to Phase 15 handoff, if available
- Phase 14 evidence pack, if available
- Data Quality Specification
- Transformation Specification
- Data Contract Specification
- Ingestion Specification
- Architecture Decision Record
- User answers from HALT points
- Existing operational standards, alert policies, runbooks, or orchestration platform constraints if available

---

## Actions

1. Define orchestration scope and non-scope.
2. Define orchestration design principles.
3. Create workflow inventory.
4. Define dependency graph.
5. Define schedule and trigger strategy.
6. Define source readiness checks.
7. Define ingestion orchestration.
8. Define Bronze/Silver/Gold transformation orchestration.
9. Define quality gate integration.
10. Define publish and release gates.
11. Define retry and timeout policy.
12. Define failure handling and recovery policy.
13. Define backfill and replay operations.
14. Define late data and correction operations.
15. Define alerting and notification policy.
16. Define incident and escalation policy.
17. Define observability signal inventory.
18. Define freshness and SLA monitoring.
19. Define volume and completeness monitoring.
20. Define quality result monitoring.
21. Define runtime and performance monitoring.
22. Define cost and usage monitoring.
23. Define run evidence and audit metadata.
24. Define operational ownership.
25. Map each critical operational decision to evidence.
26. Mark unsupported operational claims as `Draft`, `Risk`, `Blocked`, `Deferred`, `Unknown`, or `Waived with reason`.
27. Identify required Phase 15 support work.
28. Use HALT checkpoints for unresolved decisions.
29. Prepare draft Orchestration and Observability Specification content.
30. Prepare content for the Phase 15 Support Plan.

---

## Orchestration Design Principles

| Principle | Meaning |
|---|---|
| Dependency-first | Workflow order follows data dependencies, not convenience |
| Gate-aware | Quality and publish gates are part of orchestration |
| Idempotency-aware | Retry only when safe or explicitly approved |
| Observable | Workflows emit operational and data-state signals |
| Recoverable | Failure, retry, rollback, and replay paths are explicit |
| Audit-ready | Runs capture evidence for debugging and governance |
| Owner-driven | Alerts and incidents route to accountable owners |
| Platform-bounded | Platform choices follow Phase 07, but no code is implemented here |
| Consumer-safe | Bad data should not silently reach consumers |
| Evidence-based | Operational decisions require source artifacts or accepted risk |

---

## Workflow Standard

Each workflow must define:

| Field | Required? |
|---|---|
| Workflow ID | Required |
| Name | Required |
| Type | Required |
| Trigger | Required |
| Schedule/frequency | Required or marked event-driven/manual |
| Dependencies | Required |
| Inputs | Required |
| Outputs | Required |
| Quality gates | Required where applicable |
| Publish behavior | Required for serving outputs |
| Retry/timeout | Required |
| Failure handling | Required |
| Backfill/replay behavior | Required where relevant |
| Late/correction behavior | Required where relevant |
| Observability signals | Required |
| Alert owner | Required for P1 |
| Evidence captured | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

---

## Operational Evidence Mapping

For every P1 workflow, capture evidence status.

| Operational Field        | Evidence Status                                | Allowed Output                    |
| ------------------------ | ---------------------------------------------- | --------------------------------- |
| Phase 14 handoff         | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Workflow scope           | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Workflow inventory       | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Dependency graph         | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Schedule/trigger         | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Source readiness         | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk           |
| Quality gate integration | Confirmed / Partial / Conflict / Missing       | Approved / Draft / Risk / Blocked |
| Publish/release gate     | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Retry/timeout            | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Failure/recovery         | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Backfill/replay          | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk           |
| Late/correction          | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk           |
| Alerting/notification    | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Incident/escalation      | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Observability signals    | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| SLA monitoring           | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Run evidence/audit       | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Operational ownership    | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk / Blocked |

---

## HALT — Schedule and Trigger Strategy

Stop if workflow trigger or schedule is unclear.

### Options

A. Fixed schedule
B. Event/file arrival trigger
C. Source availability trigger
D. Upstream workflow completion trigger
E. Manual/on-demand trigger
F. Continuous/streaming trigger
G. Contract/SLA-driven trigger
H. Custom trigger
I. Keep Draft pending timing decision

### Required response

Choose A/B/C/D/E/F/G/H/I and specify timing/timezone where relevant.

---

## HALT — Dependency Order

Stop if dependency order is unclear.

### Required fields

* upstream workflow(s);
* downstream workflow(s);
* blocking dependencies;
* soft dependencies;
* parallelizable steps;
* manual approval steps.

### Options

A. Strict sequential dependency
B. Parallel by source, then merge
C. Parallel by layer, then quality gate
D. Event-driven dependency
E. Manual approval dependency
F. Custom dependency graph
G. Keep Draft pending dependency clarification

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Source Readiness Checks

Stop if source availability or pre-check behavior is unclear.

### Options

A. Check file/API/table availability before ingestion
B. Check source freshness timestamp
C. Check source row/file/event count expectation
D. Check source schema compatibility
E. Check source authentication/permission
F. No source readiness check for MVP
G. Custom source readiness check

### Required response

Choose one or more options.

---

## HALT — Quality Gate Behavior

Stop if quality gates do not have clear workflow impact.

### Options

A. P1 rules block downstream publish
B. P1 rules fail current workflow stage
C. P2 rules warn and continue
D. P3 rules record only
E. Manual approval required after selected failures
F. Gate behavior follows Phase 14 exactly
G. Custom gate behavior

### Required response

Choose one or more options.

---

## HALT — Publish Gate Behavior

Stop if output exposure to consumers is unclear.

### Options

A. Publish only after all P1 quality gates pass
B. Publish with warning if P2 gates fail
C. Keep previous successful output if publish blocked
D. Publish partial output with warning flag
E. Manual approval required before publish
F. Publish immediately after transformation
G. Custom publish policy

### Required response

Choose one or more options.

---

## HALT — Retry and Timeout Policy

Stop if retry or timeout behavior is unclear.

### Options

A. No retry; fail fast
B. Retry fixed number of times
C. Retry with exponential backoff
D. Retry only idempotent steps
E. Timeout long-running tasks and alert
F. Manual retry only
G. Custom retry policy

### Required response

Choose one or more options and specify retry count/timeout if known.

---

## HALT — Failure Handling and Recovery Policy

Stop if recovery behavior is unclear.

### Options

A. Stop workflow and alert owner
B. Continue independent downstream branches only
C. Quarantine bad records and continue
D. Roll back output to previous successful version
E. Keep previous published output visible
F. Create incident/ticket
G. Require manual approval to resume
H. Custom recovery policy

### Required response

Choose one or more options.

---

## HALT — Backfill and Replay Operations

Stop if historical reprocessing operation is unclear.

### Options

A. Full end-to-end rebuild
B. Backfill selected date/time windows
C. Backfill selected partitions/files/batches
D. Replay from Bronze immutable archive
E. Replay from source/CDC/log/stream retention
F. Recompute affected Gold windows only
G. Manual backfill runbook required
H. Backfill not supported in MVP
I. Custom operation

### Required response

Choose A/B/C/D/E/F/G/H/I.

---

## HALT — Late Data and Correction Operations

Stop if late/corrected data can affect trusted outputs.

### Options

A. Ignore late data after cutoff
B. Reprocess affected partitions/windows
C. Apply correction in next scheduled run
D. Maintain correction history and current state
E. Quarantine late/corrected records for review
F. Trigger targeted downstream recomputation
G. Custom behavior

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Alerting Owner Required

Stop if no alert owner is defined.

### Options

A. Data engineering owner
B. Data product owner
C. Business data steward
D. Source system owner
E. Platform/SRE owner
F. Consumer representative
G. Shared escalation group
H. Unknown — keep alerting Draft/Risk

### Required response

Choose A/B/C/D/E/F/G/H.

---

## HALT — Incident and Escalation Policy

Stop if incident handling is unclear.

### Options

A. Create incident for P1 Blocking failure
B. Create ticket for repeated P2 warnings
C. Notify producer and consumer for contract violation
D. Escalate after SLA breach duration
E. Manual approval required to override gate
F. Post-incident review required for production failure
G. Custom incident policy

### Required response

Choose one or more options.

---

## HALT — Freshness and SLA Monitoring

Stop if SLA monitoring method is unclear.

### Options

A. publish_time compared to SLA deadline
B. max_event_time compared to current time
C. ingestion_time compared to source availability time
D. transformation_completion_time compared to schedule
E. contract freshness status
F. consumer-visible freshness timestamp
G. Custom measurement

### Required response

Choose one or more options.

---

## HALT — Observability Signal Inventory

Stop if required monitoring signals are unclear.

### Options

A. workflow status
B. task status
C. duration/runtime
D. freshness status
E. row/file/event count
F. quality rule pass/fail
G. quality failure rate
H. contract compliance status
I. publish status
J. cost/compute usage
K. retry count
L. incident count
M. custom signal

### Required response

Choose all required signals.

---

## HALT — Run Evidence and Audit Metadata

Stop if run evidence is unclear.

### Options

A. workflow_run_id
B. task_run_id
C. input dataset versions
D. output dataset versions
E. source extraction window
F. row/file/event counts
G. quality rule results
H. contract validation status
I. publish status and timestamp
J. error message and retry count
K. cost/runtime metrics
L. operator/manual approval identity
M. custom evidence

### Required response

Choose all required evidence fields.

---

## HALT — Operational Ownership

Stop if workflow ownership is unclear.

### Options

A. Data engineering owns orchestration
B. Platform/SRE owns runtime platform
C. Data product owner owns publish decision
D. Source owner owns source readiness
E. Business steward owns data correctness issue
F. Shared RACI required
G. Unknown — keep Draft/Risk

### Required response

Choose one or more options.

---

## Completion Criteria

This step is complete when:

* orchestration scope and principles are defined;
* workflow inventory is created;
* dependency graph is defined;
* each P1 workflow has trigger/schedule, dependencies, gates, retry, failure handling, alert owner, and evidence;
* publish behavior is defined for consumer-facing outputs;
* backfill/replay and late/correction operations are defined;
* observability signals are defined;
* SLA/freshness monitoring is defined;
* operational ownership is defined;
* evidence mapping is prepared;
* required support work is identified;
* risks and assumptions are explicit;
* draft orchestration/observability specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
