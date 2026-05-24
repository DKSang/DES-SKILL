# Phase 02 to Phase 03 Handoff

## 1. Purpose

This handoff defines what Phase 03 Requirements and KPIs can safely use from Phase 02 Business Questions.

It separates approved questions and mappings from assumptions, risks, open questions, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 02 — Business Questions |
| To Phase | 03 — Requirements and KPIs |
| From Skill | `des-business-questions` |
| Next Skill | `des-requirements-and-kpis` |
| Phase Artifact | `_des-output/planning-artifacts/02-business-question-catalog.md` |
| Support Plan | `_des-output/phase-support-plans/phase-02-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-02/phase-02-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-02-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Current Phase

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Business question catalog approved | E-001 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-002 | Question priorities approved | E-004 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-003 | Consumer mappings approved | E-002 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-004 | Target decision mappings approved | E-003 | Approved / Draft / Open | Easy / Medium / Hard |

---

## 4. Approved Inputs for Next Phase

The next phase may use the following as approved inputs:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Business Questions | Priority 1 and 2 questions to guide requirements | `_des-output/planning-artifacts/02-business-question-catalog.md` | |
| Consumer/Decision Mappings | Defines targets for KPI design | `_des-output/planning-artifacts/02-business-question-catalog.md` | |

---

## 5. Constraints for Next Phase

The next phase must respect the following constraints:

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Freshness requirements | Freshness limits from business context | Question Catalog |
| C-002 | Grain constraints | Granularity details from questions | Question Catalog |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Next Phase | Required Handling |
|---|---|---|---|---|
| RISK-001 | Answerability Risk | Critical / High / Medium / Low | Some questions may lack source data | Flag for validation in Phase 05 |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-001 | | | Phase 03 / Later | |

---

## 8. Do-Not-Assume List

The next phase must not assume:

- Candidate metrics are final KPI definitions (metrics must be formally designed in Phase 03)
- Physical database design, schemas, or tables (Phase 10/11 medallion design)
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
| E-001 | Phase 01 handoff evidence | `_des-output/evidence/phase-02/phase-02-evidence-pack.md` | |
| E-002 | Consumer mapping evidence | `_des-output/evidence/phase-02/phase-02-evidence-pack.md` | |
| E-003 | Decision mapping evidence | `_des-output/evidence/phase-02/phase-02-evidence-pack.md` | |
| E-004 | Question priority evidence | `_des-output/evidence/phase-02/phase-02-evidence-pack.md` | |
| E-005 | Scope alignment evidence | `_des-output/evidence/phase-02/phase-02-evidence-pack.md` | |
| E-006 | Answerability risk evidence | `_des-output/evidence/phase-02/phase-02-evidence-pack.md` | |

---

## 10. Recommended Next Skill

Recommended next DES skill:

```text
des-requirements-and-kpis
```

Reason:

Once the Business Question Catalog and priorities are locked down, the project proceeds to defining formal business requirements and designing KPI formulas.

---

## 11. Next Phase Starting Instructions

When starting Phase 03, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/02-business-question-catalog.md
3. _des-output/evidence/phase-02/phase-02-evidence-pack.md
4. _des-output/implementation-artifacts/phase-02-done-gate.md
5. _des-output/phase-handoffs/phase-02-to-03-handoff.md
6. skills/des-requirements-and-kpis/SKILL.md
```

The agent should not start from the next phase artifact directly without reading this handoff.

---

## 12. Handoff Decision

Choose one:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

### Handoff Status

{{HANDOFF_STATUS}}

### Explanation

{{EXPLANATION}}

### Conditions

If `Ready with Risks`, list conditions:

* Condition 1

If `Not Ready` or `Blocked`, list required actions:

* Action 1

---

## 13. Change Log

| Date | Change | Reason | Updated By |
| --- | --- | --- | --- |
| YYYY-MM-DD | Created handoff | Phase transition | |
