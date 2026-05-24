# Phase 03 to Phase 04 Handoff

## 1. Purpose

This handoff defines what Phase 04 Data Product Definition can safely use from Phase 03 Requirements and KPIs.

It separates approved requirements, KPIs, and mappings from assumptions, risks, open questions, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 03 — Requirements and KPIs |
| To Phase | 04 — Data Product Definition |
| From Skill | `des-requirements-and-kpis` |
| Next Skill | `des-data-product-definition` |
| Phase Artifact | `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md` |
| Support Plan | `_des-output/phase-support-plans/phase-03-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-03/phase-03-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-03-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Current Phase

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Requirements catalog approved | E-001, E-002 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-002 | KPI formulas approved | E-005 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-003 | Metric grains approved | E-006 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-004 | Metric owners approved | E-007 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-005 | SLA and freshness approved | E-008 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-006 | Acceptance criteria approved | E-009 | Approved / Draft / Open | Easy / Medium / Hard |

---

## 4. Approved Inputs for Next Phase

The next phase may use the following as approved inputs:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Functional Requirements | Priority 1 and 2 requirements to guide product bounds | `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md` | |
| Approved KPIs | Formally defined KPIs with formulas and grains | `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md` | |
| SLA and Freshness | Latency and scheduling requirements for ingestion and pipelines | `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md` | |

---

## 5. Constraints for Next Phase

The next phase must respect the following constraints:

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Quality expectations | Quality thresholds to guide data product checks | Catalog |
| C-002 | Security/privacy constraints | Data masking and encryption boundaries | Catalog |
| C-003 | Cost/performance constraints | Budget and latency constraints | Catalog |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Next Phase | Required Handling |
|---|---|---|---|---|
| RISK-001 | Draft KPIs | High / Medium / Low | Formulas and grains are not finalized | Mark as Candidate/Draft in data product spec |
| RISK-002 | Unresolved conflicts | High / Medium / Low | Overlapping definitions remain | Document in data product registry |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-001 | | | Phase 04 / Later | |

---

## 8. Do-Not-Assume List

The next phase must not assume:

- Candidate metrics are final approved KPIs (must remain Draft/Candidate in Phase 04)
- Physical schema design, database layouts, or tables (Phase 10/11 medallion design)
- Source system availability, freshness, or schema compliance (Phase 05 source assessment)
- Serving layer technology or API models (Phase 16/17 serving design)

If the next phase needs one of these assumptions, it must either:

1. Collect evidence.
2. Ask for user decision.
3. Route back to the previous phase.
4. Mark the item as accepted risk.

---

## 9. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Next Phase |
|---|---|---|---|
| E-001 | Phase 02 handoff evidence | `_des-output/evidence/phase-03/phase-03-evidence-pack.md` | |
| E-002 | Traceability check evidence | `_des-output/evidence/phase-03/phase-03-evidence-pack.md` | |
| E-005 | KPI formula evidence | `_des-output/evidence/phase-03/phase-03-evidence-pack.md` | |
| E-006 | Metric grain evidence | `_des-output/evidence/phase-03/phase-03-evidence-pack.md` | |
