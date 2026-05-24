# Phase 05 Done Gate Checklist — Data Source Assessment

Use this checklist before marking Phase 05 Data Source Assessment as Done.

## Required Inputs

- [ ] Data Source Inventory exists (`_des-output/planning-artifacts/05-data-source-inventory.md`).
- [ ] Phase 05 support plan exists (`_des-output/phase-support-plans/phase-05-support-plan.md`).
- [ ] Phase 05 evidence pack exists (`_des-output/evidence/phase-05/phase-05-evidence-pack.md`) or evidence is waived with reason.
- [ ] Artifact revision report exists (`_des-output/implementation-artifacts/phase-05-artifact-revision.md`).
- [ ] Handoff to Phase 06 exists (`_des-output/phase-handoffs/phase-05-to-06-handoff.md`).
- [ ] Workflow status file is available.
- [ ] Upstream Phase 04 handoff is reviewed.

## Artifact Completion

- [ ] Each P1 product output maps to at least one candidate source or is marked blocked.
- [ ] Each P1 source maps to product output, requirement, KPI, or source need.
- [ ] Source type, data generation pattern, access method, and permissions are documented.
- [ ] Source owner/contact is documented or marked risk.
- [ ] Source of truth decisions are resolved or documented.
- [ ] Sample, schema, or probe evidence exists for P1 sources or is waived with reason.
- [ ] Freshness, update patterns, expected volume, and growth are documented.
- [ ] Quality profile and known issues are documented.
- [ ] Security/privacy classification is documented.
- [ ] Cost, licensing, and usage limits are documented.
- [ ] Ingestion feasibility is rated for all candidate sources.
- [ ] Assumptions, risks, and open questions are explicit.
- [ ] The inventory does not design production ingestion pipelines, Bronze tables, Silver transformations, Gold schemas, orchestration, or code.

## Support Work and Evidence Validation

- [ ] All required support work listed in customize.toml is complete or waived with reason:
  - Phase 04 handoff review
  - Source need mapping check
  - Candidate source inventory check
  - Source access probe
  - Schema inspection
  - Sample data or response capture
  - Data quality profile or sampling
  - Freshness and update pattern check
  - License, terms, and usage limit review
  - Security and privacy classification check
  - Source of truth check
  - Ingestion feasibility check
  - Phase 05 done gate check
  - Phase 05 to 06 handoff
- [ ] Evidence pack validates the critical decisions (E-001 to E-012) or accepted risk is explicitly recorded.
- [ ] Data Source Inventory is revised from evidence.

## Risk and Open Question Handling

- [ ] Risks are documented.
- [ ] Accepted risks have owner or explicit acceptance.
- [ ] Open questions are documented.
- [ ] Carry-forward risks are included in handoff.

## Workflow Status

- [ ] Workflow status update is prepared.
- [ ] Workflow status v2 sections are updated.

## Gate Result

Choose one:

- [ ] Pass
- [ ] Pass with risks
- [ ] Fail
- [ ] Blocked

## Completion

- [ ] If Pass: Phase 05 may be marked Done.
- [ ] If Pass with risks: Phase 05 may be marked Done only if risks are carried forward in the handoff.
- [ ] If Fail: required fixes are listed.
- [ ] If Blocked: blocker owner and next action are listed.
