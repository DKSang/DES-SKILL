# Phase 10 to Phase 11 Handoff

## 1. Purpose

This handoff defines what Phase 11 Gold Layer Design can safely use from Phase 10 Silver Layer Design.

It separates approved Silver datasets from draft/blocked assumptions, source-of-truth conflicts, quality limitations, lineage constraints, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 10 — Silver Layer Design |
| To Phase | 11 — Gold Layer Design |
| From Skill | `des-silver-layer-design` |
| Next Skill | `des-gold-layer-design` |
| Phase Artifact | `_des-output/planning-artifacts/10-silver-layer-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-10-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-10-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Phase 10

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Silver scope | E-002 / E-003 | Approved / Draft / Blocked | Easy / Moderate / Hard |
| DEC-002 | Bronze-to-Silver mapping | E-002 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-003 | Domain alignment | E-003 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-004 | Grain and identity | E-005 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-005 | Key strategy | E-006 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-006 | Dedup/survivorship | E-007 | Approved / Draft / Risk / Not applicable | Easy / Moderate / Hard |
| DEC-007 | Conformance/standardization | E-008 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-008 | Source-of-truth/reconciliation | E-015 | Approved / Draft / Conflict / Risk | Easy / Moderate / Hard |
| DEC-009 | Silver DQ boundary | E-016 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-010 | Privacy/lineage/metadata inheritance | E-018 / E-019 / E-020 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |

---

## 4. Approved Inputs for Phase 11

Phase 11 may use the following as input:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Silver dataset inventory | Trusted datasets Gold may consume | Silver Spec / E-002 / E-003 | |
| Domain alignment | Entity/event meaning of each Silver dataset | Silver Spec / E-003 | |
| Grain and identity | Prevents incorrect Gold aggregation | Silver Spec / E-005 | |
| Key strategy | Supports joins and dimensional modeling | Silver Spec / E-006 | |
| Conformance rules | Shows canonical fields/categories/units/time | Evidence Pack / E-008 to E-012 | |
| Source-of-truth rules | Shows conflict resolution/survivorship | Evidence Pack / E-015 | |
| Silver DQ status | Shows trust level for Gold inputs | Evidence Pack / E-016 | |
| Rejected/quarantine policy | Shows what data Gold should not consume | Evidence Pack / E-017 | |
| Privacy/security handling | Shows constraints for Gold outputs | Evidence Pack / E-018 | |
| Lineage/metadata inheritance | Shows traceability Gold should preserve | Evidence Pack / E-019 / E-020 | |
| Refresh behavior | Shows incremental/latency behavior for Gold | Evidence Pack / E-021 | |

---

## 5. Silver Dataset Summary for Phase 11

| Silver Dataset | Domain Concept | Grain | Status | Gold Usage |
|---|---|---|---|---|
| | | | Approved / Ready with Risks / Blocked / Deferred | Use / Use with caution / Do not use |
| | | | Approved / Ready with Risks / Blocked / Deferred | Use / Use with caution / Do not use |

---

## 6. Silver-to-Gold Constraints

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Gold must not aggregate Silver unless Silver grain is approved | Prevents duplicate or incorrect metrics | Phase 10 grain rules |
| C-002 | Gold must respect Silver DQ status and rejected/quarantine rules | Prevents bad data leakage into products | Phase 10 DQ/rejection rules |
| C-003 | Gold must use approved source-of-truth and survivorship rules | Prevents hidden conflicts | Phase 10 reconciliation rules |
| C-004 | Gold must preserve required lineage for traceability | Supports audit/debugging | Phase 10 lineage rules |
| C-005 | Gold must respect Silver privacy/security handling | Prevents exposure in marts/dashboards/APIs | Phase 10 security rules |
| C-006 | Gold must not treat draft/risky Silver datasets as trusted | Prevents false confidence | Phase 10 Done Gate |
| C-007 | Gold metrics must map back to Phase 03 KPI definitions and Phase 02 questions | Prevents metric drift | Phase 02/03 + Phase 10 |

---

## 7. Metadata Recommended for Gold

| Metadata Field | Preserve Into Gold? | Reason | Notes |
|---|---:|---|---|
| `des_source_system` | Recommended | Source traceability | |
| `des_source_object` | Recommended | Source traceability | |
| `des_ingestion_run_id` | Optional / Recommended | Debugging/replay lineage | |
| `des_ingestion_timestamp` | Optional / Recommended | Freshness and audit context | |
| `des_silver_run_id` | Recommended | Trace Silver transform run | |
| `des_silver_timestamp` | Recommended | Freshness/debugging | |
| `des_dq_status` | Recommended | Consumer trust and filtering | |
| `des_lineage_key` | Recommended | Traceability helper | |

Note:

Gold may reduce technical metadata, but must preserve enough information to trace back to Silver/Bronze when metric or quality issues appear.

---

## 8. Deferred or Blocked Silver Datasets

| Silver Dataset | Reason | Impact on Phase 11 | Required Handling |
|---|---|---|---|
| | | | Do not design / Design as future / Accept risk / Resolve first |

---

## 9. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 11 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 10. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 11 / Later | |

---

## 11. Do-Not-Assume List

Phase 11 must not assume:

- Silver datasets are final reporting marts;
- Silver grain can be changed silently in Gold;
- draft/risky Silver datasets are trusted;
- source-of-truth conflicts are resolved unless handoff says so;
- Silver DQ rules are sufficient for every Gold metric;
- rejected/quarantined records can be included without explicit design;
- privacy/security controls can be relaxed in Gold;
- lineage metadata can be dropped without traceability impact;
- Silver canonical field names automatically imply approved KPI formulas;
- Gold metrics can ignore Phase 02 questions and Phase 03 KPI definitions.

If Phase 11 needs one of these assumptions, it must collect evidence, ask for user decision, or mark accepted risk.

---

## 12. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Phase 11 |
|---|---|---|---|
| E-001 | Phase 09 handoff evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Confirms Silver input context |
| E-002 | Bronze-to-Silver mapping evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Defines Silver inputs |
| E-003 | Domain alignment evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Shows entity/event meaning |
| E-004 | Conceptual-to-logical mapping evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Shows logical fields available |
| E-005 | Grain/identity evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Prevents wrong Gold aggregation |
| E-006 | Key strategy evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides joins |
| E-007 | Dedup/survivorship evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Shows duplicate/conflict handling |
| E-008 | Conformance/standardization evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides canonical Gold fields |
| E-009 | Data type normalization evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides metric calculations |
| E-010 | Timezone/temporal normalization evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides time aggregations |
| E-011 | Unit/currency normalization evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides numeric metrics |
| E-012 | Code/status/category mapping evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides dimensions/categories |
| E-013 | Null/missing handling evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides metric exclusions |
| E-014 | Schema evolution handling evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides Gold robustness |
| E-015 | Source-of-truth/reconciliation evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides authoritative metrics |
| E-016 | Silver boundary quality evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides Gold trust level |
| E-017 | Rejected/quarantine handling evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Prevents bad-data leakage |
| E-018 | Privacy/security handling evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides Gold access |
| E-019 | Lineage/traceability evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides Gold lineage |
| E-020 | Metadata inheritance evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides Gold metadata reduction |
| E-021 | Refresh/incremental behavior evidence | `_des-output/evidence/phase-10/phase-10-evidence-pack.md` | Guides Gold refresh design |

---

## 13. Recommended Next Skill

Recommended next DES skill:

```text
des-gold-layer-design
```

Reason:

Phase 11 should design Gold marts and product-ready datasets that answer Phase 02 business questions and Phase 03 KPI definitions using trusted Silver datasets.

---

## 14. Phase 11 Starting Instructions

When starting Phase 11, the agent should read:

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
12. _des-output/evidence/phase-10/phase-10-evidence-pack.md
13. _des-output/implementation-artifacts/phase-10-done-gate.md
14. _des-output/phase-handoffs/phase-10-to-11-handoff.md
15. skills/des-gold-layer-design/SKILL.md
```

The agent should not start Phase 11 from the Silver Layer Specification alone.

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

| Date       | Change          | Reason                          | Updated By |
| ---------- | --------------- | ------------------------------- | ---------- |
| YYYY-MM-DD | Created handoff | Phase 10 to Phase 11 transition |            |
