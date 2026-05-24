# Phase 11 to Phase 12 Handoff

## 1. Purpose

This handoff defines what Phase 12 Data Contracts can safely use from Phase 11 Gold Layer Design.

It separates approved Gold outputs from draft/blocked assumptions, metric conflicts, consumer expectations, quality limitations, contract levels, lineage constraints, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 11 — Gold Layer Design |
| To Phase | 12 — Data Contracts |
| From Skill | `des-gold-layer-design` |
| Next Skill | `des-data-contracts` |
| Phase Artifact | `_des-output/planning-artifacts/11-gold-layer-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-11-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-11-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Phase 11

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Gold scope | E-002 / E-004 | Approved / Draft / Blocked | Easy / Moderate / Hard |
| DEC-002 | Business question mapping | E-002 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-003 | KPI/metric mapping | E-003 / E-009 | Approved / Draft / Conflict / Blocked | Easy / Moderate / Hard |
| DEC-004 | Gold dataset boundary | E-006 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-005 | Consumer and serving alignment | E-007 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-006 | Grain and aggregation | E-008 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-007 | Modeling pattern | E-010 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-008 | Freshness/SLA | E-013 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-009 | Access/security | E-015 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-010 | Contract expectation | E-016 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |

---

## 4. Approved Inputs for Phase 12

Phase 12 may use the following as input:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Gold dataset inventory | Outputs requiring contracts | Gold Spec / E-006 | |
| Consumer and serving alignment | Determines contract strictness | Gold Spec / E-007 | |
| Gold grain | Must be contractually stable | Gold Spec / E-008 | |
| Metric/KPI definitions | Must align to approved KPI versions | Gold Spec / E-009 | |
| Fields and output type | Basis for schema contract | Gold Spec / E-010 | |
| Freshness/SLA expectations | Basis for service expectations | Gold Spec / E-013 | |
| Gold quality rules | Basis for quality contract | Gold Spec / E-014 | |
| Access/security handling | Basis for access contract | Gold Spec / E-015 | |
| Contract expectation level | Direct input to Phase 12 | Gold Spec / E-016 | |
| Lineage/traceability | Basis for audit and incident handling | Gold Spec / E-017 | |
| Performance/cost constraints | Helps set realistic contract terms | Gold Spec / E-018 | |

---

## 5. Gold Dataset Summary for Phase 12

| Gold Dataset | Output Type | Consumer | Contract Expectation | Status |
|---|---|---|---|---|
| | | | None / Minimal / Standard / Full / External-Regulated / Deferred | Approved / Ready with Risks / Blocked / Deferred |
| | | | None / Minimal / Standard / Full / External-Regulated / Deferred | Approved / Ready with Risks / Blocked / Deferred |

---

## 6. Contract-Relevant Gold Constraints

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Contract must preserve approved Gold grain | Prevents metric and join errors | Phase 11 grain rules |
| C-002 | Contract must reference approved KPI/metric definition version | Prevents metric drift | Phase 03 + Phase 11 |
| C-003 | Contract must include freshness/SLA expectation for P1 outputs | Supports consumer trust | Phase 11 SLA |
| C-004 | Contract must include Gold boundary quality expectations | Defines publish readiness | Phase 11 DQ rules |
| C-005 | Contract must include access/security requirements | Prevents unauthorized exposure | Phase 11 security |
| C-006 | Contract must include lineage/owner/change expectations where required | Supports incident/debug/change management | Phase 11 contract expectation |
| C-007 | Draft/risky Gold outputs must not receive production-grade contracts | Prevents overpromising | Phase 11 Done Gate |

---

## 7. Recommended Contract Level by Output

| Gold Dataset | Recommended Contract Level | Reason | Notes |
|---|---|---|---|
| | Minimal / Standard / Full / External-Regulated / Deferred | | |

Contract level guide:

| Level | Use When |
|---|---|
| None | Exploratory/ad hoc output |
| Minimal | Internal prototype or single analyst output |
| Standard | Shared dashboard, semantic model, internal decision-support |
| Full | Production-grade shared product with SLA and incident expectations |
| External-Regulated | External, regulated, legal, compliance, or customer-facing output |
| Deferred | Output not ready for contract yet |

---

## 8. Deferred or Blocked Gold Outputs

| Gold Dataset | Reason | Impact on Phase 12 | Required Handling |
|---|---|---|---|
| | | | Do not contract / Contract as future / Accept risk / Resolve first |

---

## 9. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 12 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 10. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 12 / Later | |

---

## 11. Do-Not-Assume List

Phase 12 must not assume:

- every Gold dataset requires a production-grade contract;
- draft/risky Gold outputs are production-ready;
- metric formulas can be changed inside the contract phase;
- Gold grain can be redefined without returning to Phase 11;
- consumer access policy can be relaxed without security review;
- freshness/SLA can exceed upstream Silver/Gold capability;
- contract quality thresholds can ignore Gold boundary DQ limitations;
- lineage can be omitted for shared decision-support outputs;
- external/regulated outputs can use internal-only contract terms.

If Phase 12 needs one of these assumptions, it must collect evidence, ask for user decision, or mark accepted risk.

---

## 12. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Phase 12 |
|---|---|---|---|
| E-001 | Phase 10 handoff evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Confirms Gold input context |
| E-002 | Business question to Gold mapping evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Shows why output exists |
| E-003 | KPI/requirement to Gold mapping evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Defines metric obligations |
| E-004 | Data product output to Gold mapping evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Shows product output alignment |
| E-005 | Silver-to-Gold mapping evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Shows trusted upstream inputs |
| E-006 | Gold dataset boundary evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Defines contract target |
| E-007 | Consumer/serving alignment evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Determines contract strictness |
| E-008 | Grain/aggregation evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Contract must preserve grain |
| E-009 | Metric definition alignment evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Contract must reference metric version |
| E-010 | Modeling pattern evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Defines output shape |
| E-011 | Filtering/slicing evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Helps contract consumer constraints |
| E-012 | History/SCD behavior evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Defines current/history expectations |
| E-013 | Freshness/SLA evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Contract freshness expectation |
| E-014 | Gold boundary quality evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Contract DQ expectations |
| E-015 | Access/security evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Contract access/security terms |
| E-016 | Contract expectation evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Direct input for Phase 12 |
| E-017 | Lineage/traceability evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Contract lineage/audit terms |
| E-018 | Performance/cost evidence | `_des-output/evidence/phase-11/phase-11-evidence-pack.md` | Prevents unrealistic contract SLA |

---

## 13. Recommended Next Skill

Recommended next DES skill:

```text
des-data-contracts
```

Reason:

Phase 12 should define contract fields, grain, ownership, freshness/SLA, quality rules, lineage, access, versioning, and change policy for approved Gold outputs and any other contracted datasets.

---

## 14. Phase 12 Starting Instructions

When starting Phase 12, the agent should read:

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
13. _des-output/evidence/phase-11/phase-11-evidence-pack.md
14. _des-output/implementation-artifacts/phase-11-done-gate.md
15. _des-output/phase-handoffs/phase-11-to-12-handoff.md
16. skills/des-data-contracts/SKILL.md
```

The agent should not start Phase 12 from the Gold Layer Specification alone.

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
| YYYY-MM-DD | Created handoff | Phase 11 to Phase 12 transition | |
