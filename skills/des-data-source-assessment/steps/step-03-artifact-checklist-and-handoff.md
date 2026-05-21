# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Data Source Inventory and Assessment, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- Source inventory and assessment draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Data Source Inventory using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved source decisions as `Open`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-domain-modeling`.

## Hints

- The artifact should help future phases understand what data is available and what risks must be designed around.
- Do not design ingestion pipelines here.
- Do not design Bronze/Silver/Gold schemas here.
- Do not write full data contracts here; record contract/SLA expectations only.
- If a P1 output lacks a viable source, mark the product output as blocked or route back to product definition.
- If source of truth is unresolved, mark downstream domain modeling and Gold design as risk.
- If sensitive data exists, flag governance/security follow-up.

## Artifact Sections

The Data Source Inventory should contain:

1. Source Inventory Summary
2. Source-to-Product Mapping
3. Source-to-Requirement and KPI Mapping
4. Source System Inventory
5. Source Type and Generation Pattern
6. Ownership and Contacts
7. Access Method and Permissions
8. Source of Truth Decisions
9. Data Format and Schema
10. Update Frequency and Freshness
11. Volume and Growth
12. History and Retention
13. Quality Profile
14. Reliability and Availability
15. Schema Change and Evolution
16. Security and Privacy Classification
17. Compliance and Regulatory Concerns
18. Cost, Licensing, and Usage Limits
19. Operational Dependencies
20. Contract and SLA Expectations
21. Ingestion Feasibility
22. Risks
23. Assumptions
24. Open Questions
25. Next Skill Recommendation

## HALT - Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 product output has no mapped source.
- P1 source has no owner/contact and cannot be assessed.
- Source access is unknown or denied.
- Source of truth conflict blocks domain modeling.
- Sensitive data classification is unknown for a source likely to contain sensitive data.
- Source quality is unknown for a P1 output.
- Cost, licensing, or API limits may block usage.
- Artifact contains ingestion design or implementation code prematurely.

### Options

A. Fix the inventory now  
B. Mark inventory as Draft with blockers  
C. Return to Step 02 source assessment  
D. Route back to `des-data-product-definition`  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_05_data_source_assessment:
  skill: des-data-source-assessment
  artifact: .agents/des-skill/output/05-data-source-inventory.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  sources:
    - name: ...
      type: ...
      feasibility: Ready | Viable with risks | Blocked | Unknown | Deferred
      owner: ...
      access_status: ...
  source_of_truth_decisions:
    - concept: ...
      decision: ...
      status: Approved | Draft | Open
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-domain-modeling
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 6 without user approval.
