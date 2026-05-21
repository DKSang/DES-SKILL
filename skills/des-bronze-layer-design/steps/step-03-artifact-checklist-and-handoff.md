# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Bronze Layer Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Bronze design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Bronze Layer Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved Bronze decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-silver-layer-design`.

## Hints

- The artifact should preserve source truth and ingestion evidence.
- Do not include detailed Silver/Gold cleaning logic or design detailed Silver/Gold tables, physical transformations, or write pipeline implementation code.
- Do not pretend raw sensitive data is safe because it is “only Bronze.”
- If retention is unknown, mark as Risk or Draft.
- If raw preservation conflicts with privacy/compliance, mark as Blocked or route to governance/security review.
- This artifact should enable Phase 10 Silver design.

## Artifact Sections

The Bronze Layer Specification should contain:

1. Bronze Layer Summary
2. Bronze Scope
3. Bronze Design Principles
4. Source to Bronze Mapping
5. Bronze Dataset Inventory
6. Raw Preservation Strategy
7. Storage Format Decision
8. File and Table Organization
9. Partitioning Strategy
10. Mandatory Metadata Columns
11. Ingestion Audit Metadata
12. Schema Drift and Evolution Handling
13. Replay and Backfill Support
14. Idempotency and Deduplication Boundary
15. Quarantine and Rejected Data Handling
16. Retention and Lifecycle Policy
17. Access Control and Sensitivity Classification
18. Bronze Boundary Data Quality Expectations
19. Lineage and Traceability Expectations
20. Operational Evidence Requirements
21. Risks
22. Assumptions
23. Open Questions
24. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails or is blocked by outstanding decisions.

### Blocking examples

- P1 ingestion source has no Bronze dataset.
- Bronze dataset boundary is unclear.
- Raw preservation strategy is missing.
- Storage format is missing.
- Partitioning strategy is missing or risky without approval.
- Mandatory metadata is missing.
- Schema drift policy is missing.
- Replay/backfill support is missing.
- Retention policy is missing.
- Sensitive raw access policy is unresolved.
- Quarantine policy is missing.
- Artifact includes Silver/Gold transformation logic, physical database schemas, or pipeline implementation code prematurely.

### Options

A. Fix the Bronze specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 Bronze decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_09_bronze_layer_design:
  skill: des-bronze-layer-design
  artifact: .agents/des-skill/output/09-bronze-layer-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  bronze_datasets:
    - dataset: ...
      source_id: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      partition_strategy: ...
      retention_policy: ...
      access_classification: ...
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-silver-layer-design
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 10 without user approval.
