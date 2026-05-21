# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Serving Layer Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Serving layer design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Serving Layer Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved serving decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-lineage-metadata-design`.

## Hints

- This artifact should describe serving decisions, not implementation.
- Do not build dashboards or APIs here.
- Do not expose Draft metrics as Certified outputs.
- If serving output is system-facing, contract expectation must be clear.
- If serving output is reverse ETL, guardrails must be explicit.
- If serving uses data sharing/federation, access and source impact must be reviewed.
- This artifact should enable lineage, governance, performance, and testing design.

## Artifact Sections

The Serving Layer Specification should contain:

1. Serving Layer Summary
2. Serving Scope
3. Serving Design Principles
4. Consumer and Persona Mapping
5. Serving Channel Inventory
6. Gold and Semantic to Serving Mapping
7. Serving Pattern Decision
8. Dashboard and Reporting Expectations
9. Self Service Analytics Expectations
10. API and Application Serving Expectations
11. ML and AI Dataset Serving Expectations
12. Reverse ETL and Export Expectations
13. Data Sharing and Federation Expectations
14. AI and Data Agent Access Expectations
15. Access Control and Security Model
16. Freshness and Quality Visibility
17. Performance and Latency Expectations
18. Caching and Materialization Expectations
19. Feedback Loop and Issue Reporting
20. Usage Monitoring and Adoption Signals
21. Ownership and Support Model
22. Risks
23. Assumptions
24. Open Questions
25. Next Skill Recommendation

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 serving output has no consumer.
- P1 serving output has no serving channel.
- Access/security policy is missing.
- Freshness/quality visibility is missing for trusted output.
- API/application output has no contract expectation.
- Reverse ETL output has no guardrails.
- Data sharing/federation has no access/source-impact review.
- Feedback/support owner is missing.
- Artifact includes dashboard/API/ML/reverse ETL implementation code prematurely.

### Options

A. Fix the serving layer specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 serving decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_17_serving_layer_design:
  skill: des-serving-layer-design
  artifact: .agents/des-skill/output/17-serving-layer-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  serving_outputs:
    - output_id: ...
      consumer: ...
      channel: ...
      source: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      risks:
        - ...
  open_questions:
    - ...
  next_recommended_skill: des-lineage-metadata-design
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 18 without user approval.
