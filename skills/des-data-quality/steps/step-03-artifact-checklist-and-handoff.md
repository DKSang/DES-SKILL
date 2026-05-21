# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Data Quality Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Data quality design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Data Quality Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved quality decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-orchestration-observability`.

## Hints

- This artifact should define rules and gates, not implement tests.
- Keep rule severity explicit.
- Do not hide unknown thresholds.
- Do not mark every rule as blocking.
- If a rule protects a data contract, make that link explicit.
- If a rule requires profiling before threshold approval, mark it Draft.
- If quality failure should trigger incident behavior, record that for Phase 15.
- If rule should become CI/CD gate, record that for Phase 21.

## Artifact Sections

The Data Quality Specification should contain:

1. Data Quality Summary
2. Quality Scope
3. Quality Design Principles
4. Quality Dimensions
5. Quality Rule Inventory
6. Dataset to Rule Mapping
7. Layer Specific Quality Rules
8. Contract Quality Alignment
9. Transformation Validation Alignment
10. Freshness Rules
11. Completeness and Volume Rules
12. Uniqueness and Grain Rules
13. Validity and Domain Rules
14. Referential Integrity Rules
15. Consistency and Reconciliation Rules
16. Accuracy and Business Reasonableness Rules
17. Schema and Compatibility Rules
18. Null and Missing Value Rules
19. Anomaly and Threshold Rules
20. Severity Classification
21. Failure Handling and Quality Gates
22. Ownership and Stewardship
23. Evidence and Reporting Expectations
24. Risks
25. Assumptions
26. Open Questions
27. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 contracted output has no quality rules.
- Quality rule has no dataset/output.
- Rule has no dimension.
- Threshold or pass/fail condition is missing.
- Severity is missing.
- Failure handling is missing.
- Owner/steward is missing for P1 rule.
- Contract quality expectations are not mapped.
- Freshness SLA quality rule is missing for P1 output.
- Metric reconciliation rule is missing where required.
- Artifact includes test implementation code prematurely.

### Options

A. Fix the quality specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 quality decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_14_data_quality_design:
  skill: des-data-quality
  artifact: .agents/des-skill/output/14-data-quality-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  quality_rules:
    - rule_id: ...
      dataset: ...
      dimension: ...
      severity: P1 Blocking | P2 Warning | P3 Info | Draft | Not Applicable
      status: Draft | Approved | Risk | Blocked | Deferred
  gates:
    - name: ...
      applies_to: ...
      behavior: block | warn | info | manual approval
  open_questions:
    - ...
  next_recommended_skill: des-orchestration-observability
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 15 without user approval.
