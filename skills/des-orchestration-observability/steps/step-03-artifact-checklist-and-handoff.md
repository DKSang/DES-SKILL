# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Orchestration and Observability Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Orchestration/observability design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Orchestration and Observability Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved operational decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-semantic-model-design`.

## Hints

- This artifact should define operations, not implement DAGs.
- Keep platform-specific implementation for later.
- Make all gates and alerts actionable.
- If alert ownership is missing, mark as Risk.
- If P1 publish behavior is missing, mark as Blocked.
- If freshness cannot be measured, mark SLA monitoring as Risk.
- If run evidence is missing, future debugging and audit will be weak.

## Artifact Sections

The Orchestration and Observability Specification should contain:

1. Orchestration and Observability Summary
2. Orchestration Scope
3. Orchestration Design Principles
4. Workflow Inventory
5. Dependency Graph
6. Schedule and Trigger Strategy
7. Source Readiness Checks
8. Ingestion Orchestration
9. Bronze Silver Gold Transformation Orchestration
10. Quality Gate Integration
11. Publish and Release Gates
12. Retry and Timeout Policy
13. Failure Handling and Recovery Policy
14. Backfill and Replay Operations
15. Late Data and Correction Operations
16. Alerting and Notification Policy
17. Incident and Escalation Policy
18. Observability Signal Inventory
19. Freshness and SLA Monitoring
20. Volume and Completeness Monitoring
21. Quality Result Monitoring
22. Runtime and Performance Monitoring
23. Cost and Usage Monitoring
24. Run Evidence and Audit Metadata
25. Operational Ownership
26. Risks
27. Assumptions
28. Open Questions
29. Next Skill Recommendation

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 workflow has no trigger/schedule.
- P1 workflow has no dependency order.
- P1 quality gate behavior is missing.
- Publish behavior is missing for consumer-facing outputs.
- Retry is allowed for non-idempotent step without approval.
- Failure recovery is missing.
- Alert owner is missing.
- Freshness/SLA monitoring is missing.
- Run evidence/audit metadata is missing.
- Artifact includes orchestration implementation code prematurely.

### Options

A. Fix the orchestration/observability specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 operational decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_15_orchestration_observability:
  skill: des-orchestration-observability
  artifact: .agents/des-skill/output/15-orchestration-observability-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  workflows:
    - workflow_id: ...
      trigger: ...
      schedule: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      owner: ...
  gates:
    - gate_id: ...
      behavior: block | warn | info | manual approval
  alerts:
    - alert_id: ...
      owner: ...
      severity: P1 | P2 | P3
  open_questions:
    - ...
  next_recommended_skill: des-semantic-model-design
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 16 without user approval.
