# Phase 12 to Phase 13 Handoff

## 1. Purpose

This handoff defines what Phase 13 Transformation Design can safely use from Phase 12 Data Contracts.

It separates approved contracts from draft/risky/blocked assumptions, field/schema gaps, metric conflicts, SLA limitations, quality expectations, and validation candidates.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 12 — Data Contracts |
| To Phase | 13 — Transformation Design |
| From Skill | `des-data-contracts` |
| Next Skill | `des-transformation-design` |
| Phase Artifact | `_des-output/planning-artifacts/12-data-contract-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-12-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-12-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Phase 12

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Contract scope | E-002 | Approved / Draft / Blocked | Easy / Moderate / Hard |
| DEC-002 | Contract inventory | E-003 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-003 | Producer/consumer/owner | E-004 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-004 | Contract level | E-005 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-005 | Business meaning and grain | E-007 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-006 | Schema and field expectations | E-008 / E-009 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-007 | Metric/KPI expectations | E-010 | Approved / Draft / Conflict / Blocked | Easy / Moderate / Hard |
| DEC-008 | Freshness/SLA and quality | E-011 / E-012 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-009 | Access/security and lineage | E-014 / E-015 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-010 | Versioning/change/incident policy | E-016 / E-017 / E-019 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-011 | Validation criteria | E-020 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |

---

## 4. Approved Inputs for Phase 13

Phase 13 may use the following as input:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Approved contract inventory | Contracts transformation must satisfy | Contract Spec / E-003 | |
| Contracted datasets/outputs | Transformation targets | Contract Spec / E-006 | |
| Business meaning and grain | Transformation output grain | Contract Spec / E-007 | |
| Schema expectations | Target schema and structure | Contract Spec / E-008 | |
| Field-level expectations | Field types, requiredness, constraints | Contract Spec / E-009 | |
| Metric/KPI expectations | Metric formulas/version expectations | Contract Spec / E-010 | |
| Freshness/SLA | Transformation scheduling/refresh implication | Contract Spec / E-011 | |
| Quality expectations | Rules that transformation must support | Contract Spec / E-012 | |
| Volume/completeness | Reconciliation/check design input | Contract Spec / E-013 | |
| Security/access | Transformation must preserve or enforce handling | Contract Spec / E-014 | |
| Lineage/metadata | Metadata transformation must produce/preserve | Contract Spec / E-015 | |
| Versioning/change policy | Transformation changes must respect contract | Contract Spec / E-016 / E-017 | |
| Validation criteria | Future tests/checks/gates | Contract Spec / E-020 | |

---

## 5. Contract Summary for Phase 13

| Contract ID | Dataset / Output | Level | Status | Transformation Impact |
|---|---|---|---|---|
| CONTRACT-001 | | Minimal / Standard / Full / External-Regulated | Approved / Ready with Risks / Blocked / Draft | Implement / Implement with caution / Do not implement / Defer |

---

## 6. Transformation-Relevant Contract Constraints

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Transformation output must match contract grain | Prevents duplicate/incorrect output | Phase 12 grain |
| C-002 | Transformation output must satisfy schema and field expectations | Prevents consumer breakage | Phase 12 schema |
| C-003 | Metric calculations must align with contractual KPI definitions | Prevents metric drift | Phase 03 + Phase 12 |
| C-004 | Transformation must produce/preserve required lineage metadata | Supports audit/debug | Phase 12 lineage |
| C-005 | Transformation must support freshness/SLA expectations | Supports consumer trust | Phase 12 freshness |
| C-006 | Transformation must support quality validation criteria | Enables Phase 14/21 tests | Phase 12 validation |
| C-007 | Transformation must preserve security/access-sensitive handling | Prevents unauthorized exposure | Phase 12 security |
| C-008 | Transformation changes must follow contract compatibility/versioning policy | Prevents breaking downstream consumers | Phase 12 change policy |

---

## 7. Validation Candidates for Later Phases

| Contract ID | Validation Candidate | Later Phase | Priority |
|---|---|---|---|
| CONTRACT-001 | Schema validation | Phase 14 / Phase 21 | Critical / High / Medium / Low |
| CONTRACT-001 | Freshness validation | Phase 15 / Phase 21 | Critical / High / Medium / Low |
| CONTRACT-001 | DQ rule validation | Phase 14 / Phase 21 | Critical / High / Medium / Low |
| CONTRACT-001 | Lineage metadata validation | Phase 18 / Phase 21 | Critical / High / Medium / Low |
| CONTRACT-001 | Access/security validation | Phase 19 / Phase 21 | Critical / High / Medium / Low |

---

## 8. Deferred or Blocked Contracts

| Contract ID | Dataset / Output | Reason | Impact on Phase 13 | Required Handling |
|---|---|---|---|---|
| | | | Do not implement / Implement as draft / Accept risk / Resolve first |

---

## 9. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 13 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 10. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 13 / Later | |

---

## 11. Do-Not-Assume List

Phase 13 must not assume:

- draft contracts are approved;
- a schema-only contract is enough for transformation design;
- contract grain can be changed inside transformation design;
- metric formulas can be redefined in transformation design;
- missing owner/consumer approval can be ignored;
- freshness/SLA can be achieved without checking upstream capability;
- quality expectations can be implemented without testable criteria;
- access/security handling can be postponed if sensitive fields exist;
- lineage metadata can be dropped for contracted outputs;
- breaking changes can be made without versioning/change policy.

If Phase 13 needs one of these assumptions, it must collect evidence, ask for user decision, or mark accepted risk.

---

## 12. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Phase 13 |
|---|---|---|---|
| E-001 | Phase 11 handoff evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Confirms contract input context |
| E-002 | Contract scope evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines what must be transformed/contracted |
| E-003 | Contract inventory evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines contracted targets |
| E-004 | Producer/consumer/owner evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines accountability |
| E-005 | Contract level evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines strictness |
| E-006 | Dataset/output identity evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines target output |
| E-007 | Business meaning/grain evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines output grain |
| E-008 | Schema expectation evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines schema target |
| E-009 | Field-level expectation evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines field obligations |
| E-010 | Metric/KPI expectation evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines metric obligations |
| E-011 | Freshness/SLA evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines schedule/freshness implications |
| E-012 | Quality expectation evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines DQ rule candidates |
| E-013 | Volume/completeness evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines reconciliation expectations |
| E-014 | Security/access evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines sensitive handling |
| E-015 | Lineage/metadata evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines metadata preservation |
| E-016 | Compatibility/versioning evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines breaking change rules |
| E-017 | Change management evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines transformation change governance |
| E-018 | Deprecation policy evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines retirement behavior |
| E-019 | Incident/escalation evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines violation response |
| E-020 | Acceptance/validation evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines future tests/checks |
| E-021 | Ownership/approval evidence | `_des-output/evidence/phase-12/phase-12-evidence-pack.md` | Defines approval status |

---

## 13. Recommended Next Skill

Recommended next DES skill:

```text
des-transformation-design
```

Reason:

Phase 13 should design transformation logic, DAG/model boundaries, transformation rules, incremental behavior, dependencies, and implementation-ready transformation plans that satisfy the approved contracts and upstream Gold/Silver/Bronze designs.

---

## 14. Phase 13 Starting Instructions

When starting Phase 13, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/01-business-discovery-brief.md
3. _des-output/planning-artifacts/02-business-question-catalog.md
4. _des-output/planning-artifacts/03-requirements-and-kpi-catalog.md
5. _des-output/planning-artifacts/04-data-product-specification.md
6. _des-output/planning-artifacts/05-data-source-inventory.md
7. _des-output/planning-artifacts/06-conceptual-domain-model.md
8. _des-output/planning-artifacts/07-architecture-decision-record.md
9. _des-output/planning-artifacts/08-ingestion-specification.md
10. _des-output/planning-artifacts/09-bronze-layer-specification.md
11. _des-output/planning-artifacts/10-silver-layer-specification.md
12. _des-output/planning-artifacts/11-gold-layer-specification.md
13. _des-output/planning-artifacts/12-data-contract-specification.md
14. _des-output/evidence/phase-12/phase-12-evidence-pack.md
15. _des-output/implementation-artifacts/phase-12-done-gate.md
16. _des-output/phase-handoffs/phase-12-to-13-handoff.md
17. skills/des-transformation-design/SKILL.md
```

The agent should not start Phase 13 from the Data Contract Specification alone.

---

## 15. Handoff Decision

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

## 16. Change Log

| Date | Change | Reason | Updated By |
|---|---|---|---|
| YYYY-MM-DD | Created handoff | Phase 12 to Phase 13 transition | |
