# Phase 13 to Phase 14 Handoff

## 1. Purpose

This handoff defines what Phase 14 Data Quality can safely use from Phase 13 Transformation Design.

It separates approved transformations from draft/risky/blocked assumptions and identifies which transformation rules must become data quality rules, tests, monitors, or acceptance gates.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 13 — Transformation Design |
| To Phase | 14 — Data Quality |
| From Skill | `des-transformation-design` |
| Next Skill | `des-data-quality` |
| Phase Artifact | `_des-output/planning-artifacts/13-transformation-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-13-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-13/phase-13-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-13-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Approved Inputs for Phase 14

| Input | Description | Source |
|---|---|---|
| Transformation inventory | Transformations requiring DQ rules | Phase 13 spec |
| Input/output mapping | Datasets to validate | Phase 13 spec |
| Output grain | Basis for uniqueness/grain checks | Phase 13 spec |
| Business rules | Candidate rule validation | Phase 13 spec |
| Cleaning/conformance rules | Candidate DQ/conformance tests | Phase 13 spec |
| Join rules | Referential/cardinality checks | Phase 13 spec |
| Dedup/survivorship rules | Duplicate/conflict checks | Phase 13 spec |
| Metric rules | Reconciliation/metric tests | Phase 13 spec |
| Incremental/backfill behavior | Freshness/reprocessing checks | Phase 13 spec |
| Error/quarantine behavior | Invalid record handling checks | Phase 13 spec |
| Contract alignment | Contract validation rules | Phase 13 + Phase 12 |
| Lineage metadata | Metadata completeness checks | Phase 13 spec |

---

## 4. Transformation Summary for Phase 14

| Transformation ID | Output | Grain | Status | DQ Impact |
|---|---|---|---|---|
| TR-001 | | | Approved / Ready with Risks / Blocked / Deferred | Define rules / Use with caution / Do not use |

---

## 5. Data Quality Candidate Rules

| Transformation ID | Candidate Rule | Rule Type | Severity | Later Phase |
|---|---|---|---|---|
| TR-001 | | Schema / Grain / RI / Null / Metric / Freshness / Contract / Lineage | Critical / High / Medium / Low | Phase 14 / Phase 21 |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 14 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 14 / Later | |

---

## 8. Do-Not-Assume List

Phase 14 must not assume:

- every Draft transformation is approved;
- validation expectations are already implemented;
- transformation grain can be changed inside DQ design;
- metric formulas can be changed inside DQ design;
- contract alignment gaps can be ignored;
- missing lineage metadata is acceptable for contracted outputs;
- error/quarantine behavior can be skipped;
- transformation code exists already;
- DQ rules can contradict transformation design without routing back.

---

## 9. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Phase 14 |
|---|---|---|---|
| E-001 | Phase 12 handoff evidence | `_des-output/evidence/phase-13/phase-13-evidence-pack.md` | Confirms transformation input context |
| E-002 | Contract-to-transformation mapping evidence | `_des-output/evidence/phase-13/phase-13-evidence-pack.md` | Contract validation targets |
| E-007 | Transformation grain evidence | `_des-output/evidence/phase-13/phase-13-evidence-pack.md` | Grain/uniqueness checks |
| E-008 | Business rule evidence | `_des-output/evidence/phase-13/phase-13-evidence-pack.md` | Business rule tests |
| E-013 | Aggregation/metric rule evidence | `_des-output/evidence/phase-13/phase-13-evidence-pack.md` | Metric reconciliation |
| E-017 | Error/quarantine evidence | `_des-output/evidence/phase-13/phase-13-evidence-pack.md` | Invalid record handling |
| E-018 | Validation/test expectation evidence | `_des-output/evidence/phase-13/phase-13-evidence-pack.md` | Direct Phase 14 input |
| E-019 | Contract alignment evidence | `_des-output/evidence/phase-13/phase-13-evidence-pack.md` | Contract checks |
| E-020 | Lineage/metadata evidence | `_des-output/evidence/phase-13/phase-13-evidence-pack.md` | Metadata checks |

---

## 10. Recommended Next Skill

```text
des-data-quality
```

Reason:

Phase 14 should convert transformation validation expectations, contract obligations, business rules, metric rules, lineage expectations, freshness expectations, and quarantine behavior into formal data quality rules and severity levels.

---

## 11. Phase 14 Starting Instructions

When starting Phase 14, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/12-data-contract-specification.md
3. _des-output/planning-artifacts/13-transformation-specification.md
4. _des-output/evidence/phase-13/phase-13-evidence-pack.md
5. _des-output/implementation-artifacts/phase-13-done-gate.md
6. _des-output/phase-handoffs/phase-13-to-14-handoff.md
7. skills/des-data-quality/SKILL.md
```

The agent should not start Phase 14 from the Transformation Specification alone.

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

### Explanation

### Conditions

If `Ready with Risks`, list conditions:

*

If `Not Ready` or `Blocked`, list required actions:

*

---

## 13. Change Log

| Date | Change | Reason | Updated By |
|---|---|---|---|
| YYYY-MM-DD | Created handoff | Phase 13 to Phase 14 transition | |
