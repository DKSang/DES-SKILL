# Phase 01 to Phase 02 Handoff

## 1. Purpose

This handoff defines what Phase 02 Business Questions can safely use from Phase 01 Business Discovery.

It separates approved decisions from assumptions, risks, open questions, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 01 — Business Discovery |
| To Phase | 02 — Business Questions |
| From Skill | `des-business-discovery` |
| Next Skill | `des-business-questions` |
| Phase Artifact | `_des-output/planning-artifacts/01-business-discovery-brief.md` |
| Support Plan | `_des-output/phase-support-plans/phase-01-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-01/phase-01-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-01-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Current Phase

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Project intent is clear | E-001 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-002 | Primary consumer is identified | E-002 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-003 | Target use cases are identified | E-003 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-004 | MVP scope and boundaries are set | E-004 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-005 | Success criteria are outlined | E-005 | Approved / Draft / Open | Easy / Medium / Hard |

---

## 4. Approved Inputs for Next Phase

The next phase may use the following as approved inputs:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Business Brief | Core business discovery details, consumers, scope, value | `_des-output/planning-artifacts/01-business-discovery-brief.md` | |
| Target Decisions | Top decisions or use cases selected | `_des-output/planning-artifacts/01-business-discovery-brief.md` | |

---

## 5. Constraints for Next Phase

The next phase must respect the following constraints:

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Platform / Ingestion constraints | E.g. platform must be Snowflake | Business Discovery Brief |
| C-002 | Timeline constraints | E.g. MVP must be completed in Q3 | Business Discovery Brief |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Next Phase | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-001 | | | Phase 02 / Later | |

---

## 8. Do-Not-Assume List

The next phase must not assume:

- Target KPI formulas (KPI design belongs in Phase 03 requirements)
- Physical database designs, table structures, schemas, or ingestion methods
- Serving technology or data contracts unless explicitly stated as constraint
- Source data completeness, quality, or accessibility without assessment (Phase 05 source assessment)

If the next phase needs one of these assumptions, it must either:

1. Collect evidence.
2. Ask for user decision.
3. Route back to the previous phase.
4. Mark the item as accepted risk.

---

## 9. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Next Phase |
|---|---|---|---|
| E-001 | Project intent evidence | `_des-output/evidence/phase-01/phase-01-evidence-pack.md` | |
| E-002 | Primary consumer evidence | `_des-output/evidence/phase-01/phase-01-evidence-pack.md` | |
| E-003 | Target use case evidence | `_des-output/evidence/phase-01/phase-01-evidence-pack.md` | |
| E-004 | MVP scope evidence | `_des-output/evidence/phase-01/phase-01-evidence-pack.md` | |
| E-005 | Success criteria evidence | `_des-output/evidence/phase-01/phase-01-evidence-pack.md` | |

---

## 10. Recommended Next Skill

Recommended next DES skill:

```text
des-business-questions
```

Reason:

Once business discovery context is locked down, the project proceeds to cataloging and refining business questions for the consumers.

---

## 11. Next Phase Starting Instructions

When starting Phase 02, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/01-business-discovery-brief.md
3. _des-output/evidence/phase-01/phase-01-evidence-pack.md
4. _des-output/implementation-artifacts/phase-01-done-gate.md
5. _des-output/phase-handoffs/phase-01-to-02-handoff.md
6. skills/des-business-questions/SKILL.md
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
