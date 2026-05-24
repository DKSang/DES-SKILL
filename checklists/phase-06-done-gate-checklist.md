# Phase 06 Done Gate Checklist — Domain Modeling

Use this checklist before marking Phase 06 Domain Modeling as Done.

## Required Inputs

- [ ] Conceptual Domain Model exists (`_des-output/planning-artifacts/06-conceptual-domain-model.md`).
- [ ] Phase 06 support plan exists (`_des-output/phase-support-plans/phase-06-support-plan.md`).
- [ ] Phase 06 evidence pack exists (`_des-output/evidence/phase-06/phase-06-evidence-pack.md`) or evidence is waived with reason.
- [ ] Artifact revision report exists (`_des-output/implementation-artifacts/phase-06-artifact-revision.md`).
- [ ] Handoff to Phase 07 exists (`_des-output/phase-handoffs/phase-06-to-07-handoff.md`).
- [ ] Workflow status file is available.
- [ ] Upstream Phase 05 handoff is reviewed.

## Artifact Completion

- [ ] Domain scope is defined.
- [ ] Business glossary exists.
- [ ] Ontology-lite concept map exists or is waived with reason.
- [ ] P1 entities have business definition, conceptual grain, identity rule, and source alignment.
- [ ] P1 events have subject, timing meaning, and mutability.
- [ ] Important relationships are documented with cardinalities.
- [ ] Source-to-concept mapping is documented.
- [ ] Source-of-truth mappings are documented or explicitly open.
- [ ] Terminology conflicts are documented and not silently resolved.
- [ ] Temporal concepts are documented.
- [ ] Lifecycle/state definitions are documented where relevant.
- [ ] Source caveats from Phase 05 are carried forward.
- [ ] Artifact does not copy source schema as domain model.
- [ ] Artifact does not design physical schemas, tables, Bronze/Silver/Gold layouts, star schemas, Data Vault models, semantic models, dashboards, APIs, transformations, orchestration, or code.
- [ ] Assumptions, risks, and open questions are explicit.

## Support Work and Evidence Validation

- [ ] All required support work listed in customize.toml is complete or waived with reason:
  - Phase 05 handoff review
  - Business glossary check
  - Source-to-concept mapping check
  - Ontology-lite boundary check
  - Core entity identity check
  - Conceptual grain check
  - Relationship cardinality check
  - Source-of-truth mapping check
  - Terminology conflict check
  - Temporal concept check
  - Lifecycle state check
  - Source caveat propagation check
  - Phase 06 done gate check
  - Phase 06 to 07 handoff
- [ ] Evidence pack validates the critical decisions (E-001 to E-012) or accepted risk is explicitly recorded.
- [ ] Conceptual Domain Model is revised from evidence.

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

- [ ] If Pass: Phase 06 may be marked Done.
- [ ] If Pass with risks: Phase 06 may be marked Done only if risks are carried forward in the handoff.
- [ ] If Fail: required fixes are listed.
- [ ] If Blocked: blocker owner and next action are listed.
