# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Ingestion Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Ingestion design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Ingestion Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved ingestion decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-bronze-layer-design`.

## Hints

- The artifact should be source-specific.
- Do not write pipeline code.
- Do not design Bronze table schema yet.
- Do not hide blocked source access or unknown incremental strategy.
- Use “Draft” or “Risk” status when ingestion can be designed conceptually but not implemented safely yet.
- Use “Blocked” when access, legal, security, or source owner approval is missing for P1 ingestion.
- This artifact should enable Phase 9 to design Bronze datasets and metadata.

## Artifact Sections

The Ingestion Specification should contain:

1. Ingestion Summary
2. Ingestion Scope
3. Source-to-Ingestion Mapping
4. Ingestion Pattern per Source
5. Batch Streaming and Event Decision
6. Frequency and Trigger
7. Bounded and Unbounded Data Classification
8. Access and Extraction Method
9. Incremental and Checkpoint Strategy
10. Idempotency Strategy
11. Replay and Backfill Strategy
12. Late Arriving Data Handling
13. Ordering and Deduplication Expectations
14. Payload and Serialization Expectations
15. Schema Drift and Evolution Policy
16. Error Handling and Quarantine
17. Security and Credential Handling
18. Source Impact Rate Limits and Throttling
19. Landing Target Expectations
20. Ingestion Metadata Expectations
21. Monitoring Evidence and Audit Expectations
22. Operational Dependencies
23. Risks
24. Assumptions
25. Open Questions
26. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 source has no ingestion pattern.
- P1 source access is blocked or unknown.
- Batch/streaming/event choice conflicts with architecture.
- Frequency does not satisfy downstream freshness/SLA.
- Incremental/checkpoint strategy is unknown for incremental ingestion.
- Idempotency strategy is missing.
- Replay/backfill behavior is missing.
- Schema drift policy is missing.
- Error handling/recovery is missing.
- Sensitive data or credential handling is unresolved.
- Artifact contains pipeline implementation code or Bronze schema prematurely.

### Options

A. Fix the specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 ingestion decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_08_ingestion_design:
  skill: des-ingestion-design
  artifact: .agents/des-skill/output/08-ingestion-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  ingestion_sources:
    - source_id: SRC-001
      pattern: ...
      frequency: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  open_questions:
    - ...
  next_recommended_skill: des-bronze-layer-design
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 9 without user approval.
