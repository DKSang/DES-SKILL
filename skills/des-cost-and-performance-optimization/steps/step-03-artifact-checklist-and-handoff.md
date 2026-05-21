# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Cost and Performance Optimization Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Cost/performance optimization draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Cost and Performance Optimization Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved optimization decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-cicd-and-testing`.

## Hints

- This artifact should define optimization decisions, not implement them.
- If there is no baseline, mark optimization recommendations as Draft.
- Do not claim cost savings without evidence.
- Do not weaken quality/security/lineage silently.
- Optimization trade-offs should be traceable to business goals and SLAs.
- The next phase will convert these constraints into testing and release gates where appropriate.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 workload has no optimization review.
- No baseline measurement plan exists.
- Cost drivers are unknown.
- Performance drivers are unknown.
- SLA-bound workload has no performance target.
- Optimization conflicts with security/governance.
- Optimization weakens quality or contract without approval.
- Cost monitoring is missing.
- Scalability planning is missing for expected growth.
- Artifact includes implementation/tuning code prematurely.

### Options

A. Fix the optimization specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 optimization decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_20_cost_performance_optimization:
  skill: des-cost-and-performance-optimization
  artifact: .agents/des-skill/output/20-cost-performance-optimization-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  optimized_workloads:
    - workload_id: ...
      type: ingestion | transformation | quality | semantic | serving | monitoring
      priority: P1 | P2 | P3
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  cost_guardrails:
    - ...
  performance_slos:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-cicd-and-testing
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 21 without user approval.
