# Phase 03 Done Gate Checklist — Requirements and KPIs

Use this checklist before marking Phase 03 Requirements and KPIs as Done.

## Required Inputs

- [ ] Requirements and KPI Catalog exists (`_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`).
- [ ] Phase 03 support plan exists (`_des-output/phase-support-plans/phase-03-support-plan.md`).
- [ ] Phase 03 evidence pack exists (`_des-output/evidence/phase-03/phase-03-evidence-pack.md`) or evidence is waived with reason.
- [ ] Artifact revision report exists (`_des-output/implementation-artifacts/phase-03-artifact-revision.md`).
- [ ] Handoff to Phase 04 exists (`_des-output/phase-handoffs/phase-03-to-04-handoff.md`).
- [ ] Workflow status file is available.
- [ ] Upstream Phase 02 handoff is reviewed.

## Artifact Completion

- [ ] Each P1/P2 business question maps to at least one requirement or is explicitly deferred.
- [ ] Each P1 functional requirement has consumer, priority, status, and acceptance criteria.
- [ ] Each approved KPI has business meaning, formula, grain, owner, and approval status.
- [ ] Candidate metrics are clearly marked as Candidate or Draft.
- [ ] Freshness and SLA expectations are measurable or marked unresolved.
- [ ] Quality expectations are measurable or marked unresolved.
- [ ] Security/privacy constraints are documented when relevant.
- [ ] Cost/performance constraints are documented when relevant.
- [ ] Metric conflicts are documented and not silently resolved.
- [ ] Assumptions, risks, and open questions are explicit.
- [ ] The catalog does not design Gold tables, schemas, sources, or code.

## Support Work and Evidence Validation

- [ ] All required support work listed in customize.toml is complete or waived with reason:
  - Phase 02 handoff review
  - Business question to requirement traceability check
  - Functional requirement testability check
  - Non-functional requirement measurability check
  - KPI formula check
  - Metric grain check
  - Metric owner check
  - Freshness/SLA check
  - Acceptance criteria check
  - Metric conflict check
  - Phase 03 done gate check
  - Phase 03 to 04 handoff
- [ ] Evidence pack validates the critical decisions (E-001 to E-010) or accepted risk is explicitly recorded.
- [ ] Requirements and KPI Catalog is revised from evidence.

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

- [ ] If Pass: Phase 03 may be marked Done.
- [ ] If Pass with risks: Phase 03 may be marked Done only if risks are carried forward in the handoff.
- [ ] If Fail: required fixes are listed.
- [ ] If Blocked: blocker owner and next action are listed.
