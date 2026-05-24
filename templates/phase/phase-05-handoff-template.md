# Phase 05 to Phase 06 Handoff

## 1. Purpose

This handoff defines what Phase 06 Domain Modeling can safely use from Phase 05 Data Source Assessment.

It separates approved conformed sources, authoritativeness, and formats from assumptions, risks, open questions, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 05 — Data Source Assessment |
| To Phase | 06 — Domain Modeling |
| From Skill | `des-data-source-assessment` |
| Next Skill | `des-domain-modeling` |
| Phase Artifact | `_des-output/planning-artifacts/05-data-source-inventory.md` |
| Support Plan | `_des-output/phase-support-plans/phase-05-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-05/phase-05-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-05-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Current Phase

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Source inventory approved | E-003 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-002 | Source access verified | E-004 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-003 | Schemas/formats verified | E-005, E-006 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-004 | Source of truth defined | E-011 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-005 | Ingestion feasibility rated | E-012 | Approved / Draft / Open | Easy / Medium / Hard |

---

## 4. Approved Inputs for Next Phase

The next phase may use the following as approved inputs:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Authoritative Sources | Authoritative sources per key business concept | `_des-output/planning-artifacts/05-data-source-inventory.md` | |
| Source Schemas | Verified formats, field names, and structures to guide conceptual modeling | `_des-output/planning-artifacts/05-data-source-inventory.md` | |
| Conformed key hints | Primary/foreign keys identified to conjoin entities | `_des-output/planning-artifacts/05-data-source-inventory.md` | |

---

## 5. Constraints for Next Phase

The next phase must respect the following constraints:

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Quality limits | Known source quality issues must be mitigated in logical model | Inventory |
| C-002 | Security/sensitive data | Sensitive data constraints drive domain entity access | Inventory |
| C-003 | Change management | Schema evolution patterns affect logical structures | Inventory |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Next Phase | Required Handling |
|---|---|---|---|---|
| RISK-001 | Unresolved source of truth | High / Medium / Low | Potential logic conflicts in domain model | Model conformed entities with flags |
| RISK-002 | Vague quality profiles | High / Medium / Low | Downstream profiling may reveal anomalies | Review conformed entity data in Phase 10 |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-001 | | | Phase 06 / Later | |

---

## 8. Do-Not-Assume List

The next phase must not assume:

- Physical Medallion database layouts or table names (Phase 10/11 medallion design)
- Production ingestion pipeline schedules or tools (Phase 08 ingestion design)
- Serving layer technology or APIs (Phase 17 serving design)
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
| E-004 | Access probe evidence | `_des-output/evidence/phase-05/phase-05-evidence-pack.md` | |
| E-005 | Schema snapshot evidence | `_des-output/evidence/phase-05/phase-05-evidence-pack.md` | |
| E-006 | Sample data evidence | `_des-output/evidence/phase-05/phase-05-evidence-pack.md` | |
| E-011 | Source of truth evidence | `_des-output/evidence/phase-05/phase-05-evidence-pack.md` | |
