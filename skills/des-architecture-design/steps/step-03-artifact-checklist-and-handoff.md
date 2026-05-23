# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Architecture Decision Record, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Architecture decision draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Architecture Decision Record using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved decisions as `Proposed`, `Deferred`, `Open`, `Risk`, or `Blocked`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-ingestion-design`.

## Hints

- The artifact should be an architecture blueprint, not a tool shopping list.
- Keep implementation details for later phases.
- Capture why rejected options were rejected.
- Use reversible decisions where uncertainty remains.
- If architecture depends on a platform choice not yet approved, mark the ADR as Draft or Proposed.
- If architecture impacts security, cost, or operations heavily, mark explicit follow-up for governance/security, cost/performance, and CI/CD phases.
- This artifact should enable ingestion design and layer design.

## Artifact Sections

The Architecture Decision Record should contain:

1. Architecture Summary
2. Decision Context
3. Architecture Goals
4. Architecture Principles
5. Target Architecture Overview
6. Lifecycle Alignment
7. Environment Strategy
8. Storage Strategy
9. Compute Strategy
10. Batch Streaming and Event Strategy
11. Integration Pattern
12. Layer Strategy
13. Serving Strategy
14. Orchestration Boundary
15. Observability Direction
16. Security and Privacy Posture
17. Governance and Metadata Direction
18. DataOps and Software Engineering Direction
19. Build Versus Buy Considerations
20. Technology Constraints and Options
21. Architecture Decisions
22. Trade-Offs
23. Reversibility Classification
24. Risks
25. Assumptions
26. Open Questions
27. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- architecture scope is unclear;
- target architecture is only a list of tools;
- environment strategy is missing;
- storage or compute strategy is missing;
- security/privacy posture is missing;
- serving direction is missing for P1 outputs;
- hard-to-reverse decisions are made without approval;
- architecture conflicts with requirements, source realities, or product expectations;
- artifact contains detailed ingestion pipeline or physical schema design prematurely.

### Options

A. Fix the ADR now  
B. Mark ADR as Draft with blockers  
C. Return to Step 02 architecture decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_07_architecture_design:
  skill: des-architecture-design
  artifact: _des-output/planning-artifacts/07-architecture-decision-record.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  architecture_scope: ...
  target_architecture: ...
  decisions:
    - id: ADR-001
      decision: ...
      status: Proposed | Approved | Deferred | Rejected | Superseded
      reversibility: Easy to reverse | Moderate to reverse | Hard to reverse
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-ingestion-design
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 8 without user approval.
