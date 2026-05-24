# Phase 04 to Phase 05 Handoff

## 1. Purpose

This handoff defines what Phase 05 Data Source Assessment can safely use from Phase 04 Data Product Definition.

It separates approved boundaries, outputs, and service expectations from assumptions, risks, open questions, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 04 — Data Product Definition |
| To Phase | 05 — Data Source Assessment |
| From Skill | `des-data-product-definition` |
| Next Skill | `des-data-source-assessment` |
| Phase Artifact | `_des-output/planning-artifacts/04-data-product-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-04-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-04/phase-04-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-04-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Current Phase

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Product boundary approved | E-002 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-002 | Primary consumer approved | E-003 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-003 | First release output approved | E-004 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-004 | Service expectation approved | E-005 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-005 | Trust expectation approved | E-006 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-006 | Product owner approved | E-007 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-007 | Lifecycle status approved | E-008 | Approved / Draft / Open | Easy / Medium / Hard |

---

## 4. Approved Inputs for Next Phase

The next phase may use the following as approved inputs:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Product outputs | Expected output datasets and formats for first release | `_des-output/planning-artifacts/04-data-product-specification.md` | |
| Product boundary | Inside and outside definitions of MVP | `_des-output/planning-artifacts/04-data-product-specification.md` | |
| Source needs | Identified source requirements to assess in Phase 05 | `_des-output/planning-artifacts/04-data-product-specification.md` | |

---

## 5. Constraints for Next Phase

The next phase must respect the following constraints:

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Freshness constraints | Freshness limits target source latency assessments | Specification |
| C-002 | Trust constraints | Data quality requirements target source profiles | Specification |
| C-003 | Governance/Security constraints | Constraints on what data can be accessed | Specification |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Next Phase | Required Handling |
|---|---|---|---|---|
| RISK-001 | Draft ownership | High / Medium / Low | Steward/owner is not finalized | Manage changes with user directly |
| RISK-002 | Ambiguous source needs | High / Medium / Low | Feasibility check may need to explore | Document findings in source catalog |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-001 | | | Phase 05 / Later | |

---

## 8. Do-Not-Assume List

The next phase must not assume:

- Candidate sources mentioned in Phase 04 are approved source dependencies (Phase 05 must verify availability, schema, and latency)
- Physical schema design, database layouts, or tables (Phase 10/11 medallion design)
- Ingestion mechanism or technology choices (Phase 08 ingestion design)
- Data contracts exist or are approved (Phase 12 data contracts)

If the next phase needs one of these assumptions, it must either:

1. Collect evidence.
2. Ask for user decision.
3. Route back to the previous phase.
4. Mark the item as accepted risk.

---

## 9. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Next Phase |
|---|---|---|---|
| E-001 | Phase 03 handoff evidence | `_des-output/evidence/phase-04/phase-04-evidence-pack.md` | |
| E-002 | Boundary check evidence | `_des-output/evidence/phase-04/phase-04-evidence-pack.md` | |
| E-009 | Source need evidence | `_des-output/evidence/phase-04/phase-04-evidence-pack.md` | |
