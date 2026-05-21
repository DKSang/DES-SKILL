# Step 02 — Workflow Scheduling and Monitoring

## Goal

Define workflows, dependencies, schedules, triggers, quality gates, publish gates, retry/timeout policies, failure handling, recovery, backfill/replay operations, alerting, incidents, monitoring signals, SLA tracking, run evidence, and operational ownership.

## Required Inputs

- Confirmed context from Step 01
- Data Quality Specification
- Transformation Specification
- Data Contract Specification
- Ingestion Specification
- Architecture Decision Record
- User answers from HALT points
- Existing operational standards, alert policies, runbooks, or orchestration platform constraints if available

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
25. Use HALT checkpoints for unresolved decisions.

## Hints

- Keep orchestration design platform-agnostic unless Phase 7 approved a platform.
- A workflow can contain ingestion, transformation, quality gates, publish, and notification stages.
- Dependency graph can be logical; implementation-specific DAG comes later.
- Retry policy must respect idempotency from ingestion/transformation design.
- Publish gates should protect consumers from bad data.
- Observability should monitor data state and pipeline state.
- SLA monitoring should use clear evidence, such as publish_time, max_event_time, or freshness timestamp.
- Alerts should be actionable and routed to an owner.
- Backfill should not accidentally overwrite current trusted outputs without policy.
- Manual approval should be explicit where used.

## Workflow Types

Classify workflows as one or more:

| Workflow Type | Description |
| --- | --- |
| Ingestion workflow | Moves source data into landing/Bronze boundary |
| Bronze validation workflow | Checks raw load and metadata |
| Silver transformation workflow | Cleans/conforms trusted entity/event data |
| Silver quality gate | Validates conformed data |
| Gold transformation workflow | Produces consumer-ready outputs |
| Gold quality gate | Validates metric/consumer readiness |
| Contract validation workflow | Checks contract compliance |
| Publish workflow | Promotes or exposes output to consumers |
| Backfill/replay workflow | Reprocesses historical data |
| Recovery workflow | Repairs or reruns after failure |
| Monitoring workflow | Collects operational/data signals |
| Notification workflow | Sends alerts or status updates |

## Workflow Standard

Each workflow must define:

| Field | Required? |
| --- | --- |
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
| Alert owner | Required for P1 |
| Evidence captured | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

## HALT — Schedule and Trigger Strategy

Stop if workflow trigger or schedule is unclear.

### Decision needed

Approve schedule/trigger for `<workflow>`.

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

## HALT — Dependency Order

Stop if dependency order is unclear.

### Decision needed

Approve dependency order.

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

## HALT — Quality Gate Behavior

How should quality gates affect workflow execution?

### Decision needed

How should quality gates affect workflow execution?

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

## HALT — Publish Gate Behavior

Stop if output exposure to consumers is unclear.

### Decision needed

When is an output safe to publish?

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

## HALT — Retry and Timeout Policy

Stop if retry or timeout behavior is unclear.

### Decision needed

Approve retry/timeout policy.

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

## HALT — Failure Handling and Recovery Policy

Stop if recovery behavior is unclear.

### Decision needed

What happens after failure?

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

## HALT — Backfill and Replay Operations

Stop if historical reprocessing operation is unclear.

### Decision needed

Approve backfill/replay operation.

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

## HALT — Late Data and Correction Operations

Stop if late/corrected data can affect trusted outputs.

### Decision needed

Approve late/correction operation.

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

## HALT — Alerting Owner Required

Stop if no alert owner is defined.

### Why this matters

Alerts without accountable owners become noise.

### Decision needed

Who receives and acts on alerts?

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

## HALT — Incident and Escalation Policy

Stop if incident handling is unclear.

### Decision needed

Approve incident policy.

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

## HALT — Freshness and SLA Monitoring

Stop if SLA monitoring method is unclear.

### Decision needed

How should freshness/SLA be measured?

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

## HALT — Run Evidence and Audit Metadata

Stop if run evidence is unclear.

### Decision needed

What operational evidence must be captured?

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
L. custom evidence

### Required response

Choose all required evidence fields.

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
* risks and assumptions are explicit;
* draft orchestration/observability specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
