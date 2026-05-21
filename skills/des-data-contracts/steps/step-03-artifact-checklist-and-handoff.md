# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Data Contract Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Contract draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Data Contract Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved contract decisions as `Draft`, `Proposed`, `Risk`, `Blocked`, or `Deprecated`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-transformation-design`.

## Hints

- The artifact should describe obligations, not implementation code.
- Use contract levels to avoid over-governance.
- Keep exploratory outputs lightweight.
- Keep production/system-facing outputs strict.
- If schema is not finalized, mark the contract Draft.
- If contract depends on unresolved Gold grain, route back to Gold design.
- If ownership is unclear, mark contract as Risk or Blocked.
- This artifact should enable transformation design, data quality rules, observability, and CI/CD gates.
- Do not write transformation SQL/Python code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or write pipeline implementation code.

## Artifact Sections

The Data Contract Specification should contain:

1. Data Contract Summary
2. Contract Scope
3. Contract Design Principles
4. Contract Inventory
5. Producer and Consumer Mapping
6. Contract Level
7. Dataset and Output Identity
8. Business Meaning and Grain
9. Schema Expectations
10. Field Level Expectations
11. Metric and KPI Expectations
12. Freshness and SLA Expectations
13. Quality Expectations
14. Volume and Completeness Expectations
15. Security and Access Expectations
16. Lineage and Metadata Expectations
17. Compatibility and Versioning Policy
18. Change Management Policy
19. Deprecation Policy
20. Incident and Escalation Policy
21. Acceptance and Validation Criteria
22. Contract Ownership and Approval
23. Risks
24. Assumptions
25. Open Questions
26. Next Skill Recommendation

---

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 system-facing output has no contract.
- Contract has no producer or consumer.
- Contract has no owner or approver.
- Contract level is missing.
- Schema expectation is missing.
- Grain is missing.
- Freshness/SLA is missing for P1 output.
- Quality expectations are missing.
- Access/security classification is unresolved.
- Change/versioning policy is missing.
- Incident/escalation policy is missing for Standard+ contract.
- Validation criteria are missing.
- Contract includes metric definitions that conflict with Phase 3.

### Options

A. Fix the contract specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 contract decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_12_data_contracts:
  skill: des-data-contracts
  artifact: .agents/des-skill/output/12-data-contract-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  contracts:
    - contract_id: ...
      dataset_or_output: ...
      level: None | Minimal | Standard | Full | External / Regulated
      producer: ...
      consumer: ...
      status: Draft | Proposed | Approved | Risk | Blocked | Deprecated
      risks:
        - ...
  open_questions:
    - ...
  next_recommended_skill: des-transformation-design
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 13 without user approval.
