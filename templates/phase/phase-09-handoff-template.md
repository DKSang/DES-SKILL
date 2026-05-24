# Phase 09 to Phase 10 Handoff

## 1. Purpose

This handoff defines what Phase 10 Silver Layer Design can safely use from Phase 09 Bronze Layer Design.

It separates approved Bronze dataset decisions from draft/blocked assumptions, raw source caveats, metadata requirements, quarantine behavior, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 09 — Bronze Layer Design |
| To Phase | 10 — Silver Layer Design |
| From Skill | `des-bronze-layer-design` |
| Next Skill | `des-silver-layer-design` |
| Phase Artifact | `_des-output/planning-artifacts/09-bronze-layer-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-09-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-09/phase-09-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-09-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Phase 09

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Bronze scope | E-001 / E-002 | Approved / Draft / Blocked | Easy / Moderate / Hard |
| DEC-002 | Source-to-Bronze mapping | E-002 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-003 | Bronze dataset boundary | E-004 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-004 | Raw preservation strategy | E-005 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-005 | Storage format and organization | E-006 / E-007 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-006 | Partitioning strategy | E-008 | Approved / Draft / Risk / Not applicable | Easy / Moderate / Hard |
| DEC-007 | Mandatory metadata | E-009 / E-010 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-008 | Schema drift handling | E-011 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-009 | Replay/backfill support | E-012 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-010 | Quarantine/rejected data handling | E-014 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-011 | Access and retention | E-015 / E-016 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |

---

## 4. Approved Inputs for Phase 10

Phase 10 may use the following as input:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Bronze dataset inventory | Raw/source-aligned datasets Silver may consume | Bronze Spec / E-002 / E-004 | |
| Source-to-Bronze mapping | Source provenance per Bronze dataset | Bronze Spec / E-002 | |
| Raw preservation strategy | What fields/payload are preserved | Bronze Spec / E-005 | |
| Storage format and organization | Where and how Bronze is stored | Bronze Spec / E-006 / E-007 | |
| Partitioning strategy | How Bronze is organized for reads/replay | Bronze Spec / E-008 | |
| Mandatory metadata | Metadata Silver must preserve or inherit | Evidence Pack / E-009 | |
| Ingestion audit metadata | Run/window/count/status evidence | Evidence Pack / E-010 | |
| Schema drift handling | How changed/unknown fields are represented | Evidence Pack / E-011 | |
| Replay/backfill support | How raw data can be reprocessed | Evidence Pack / E-012 | |
| Idempotency boundary | What duplicate behavior Bronze controls | Evidence Pack / E-013 | |
| Quarantine/rejected data | What Silver should or should not consume | Evidence Pack / E-014 | |
| Retention/lifecycle policy | Availability of raw history for Silver reprocessing | Evidence Pack / E-015 | |
| Access/sensitivity classification | Security constraints for Silver design | Evidence Pack / E-016 | |
| Bronze boundary quality | Which checks are already done before Silver | Evidence Pack / E-017 | |
| Lineage/traceability expectations | Traceability Silver should carry forward | Evidence Pack / E-018 | |

---

## 5. Bronze Dataset Summary for Phase 10

| Bronze Dataset | Source ID | Source Object/Feed | Status | Silver Usage |
|---|---|---|---|---|
| | | | Approved / Ready with Risks / Blocked / Deferred | Use / Use with caution / Do not use |
| | | | Approved / Ready with Risks / Blocked / Deferred | Use / Use with caution / Do not use |

---

## 6. Metadata to Preserve Into Silver

| Metadata Field | Preserve Into Silver? | Reason | Notes |
|---|---:|---|---|
| `des_source_system` | Yes | Source traceability | |
| `des_source_object` | Yes | Source object traceability | |
| `des_ingestion_run_id` | Recommended | Debugging/replay lineage | |
| `des_ingestion_timestamp` | Recommended | Audit and freshness context | |
| `des_source_file_path` | Required when file traceability is needed | Debugging and replay | |
| `des_extract_window_start` | Recommended when windowed | Reprocessing context | |
| `des_extract_window_end` | Recommended when windowed | Reprocessing context | |
| `des_source_event_timestamp` | Yes when available | Business/event time logic | |
| `des_source_update_timestamp` | Yes when available | Change handling/SCD support | |
| `des_schema_version` | Recommended | Schema drift context | |
| `des_ingestion_status` | Recommended | Quarantine/partial-load context | |

Note:

Silver may reduce metadata compared with Bronze, but must keep enough metadata to trace back to Bronze/source when data quality or business issues appear.

---

## 7. Bronze-to-Silver Constraints

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Silver must not treat Bronze as business-clean data | Bronze preserves source truth, not conformed business truth | Phase 09 guardrail |
| C-002 | Silver must inherit enough lineage metadata to trace back to Bronze/source | Debugging, audit, and DQ analysis | Phase 09 metadata |
| C-003 | Silver must handle schema drift/rescued data explicitly | Prevents silent data loss | Phase 09 drift policy |
| C-004 | Silver must not consume quarantined/rejected data unless explicitly designed | Prevents bad data leakage | Phase 09 quarantine policy |
| C-005 | Silver must respect raw sensitivity/access constraints | Prevents exposure of sensitive data | Phase 09 access classification |
| C-006 | Silver business dedup/conformance must be separate from Bronze ingestion dedup boundary | Preserves raw evidence and correctness | Phase 09 dedup boundary |
| C-007 | Silver quality rules must know which Bronze boundary checks already occurred | Avoids duplicate or missing checks | Phase 09 boundary quality |
| C-008 | Blocked/deferred Bronze datasets must not drive approved Silver design | Prevents dependence on unavailable raw data | Phase 09 Done Gate |

---

## 8. Deferred or Blocked Bronze Datasets

| Bronze Dataset | Reason | Impact on Phase 10 | Required Handling |
|---|---|---|---|
| | | | Do not design / Design as future / Accept risk / Resolve first |

---

## 9. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 10 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 10. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 10 / Later | |

---

## 11. Do-Not-Assume List

Phase 10 must not assume:

- Bronze data is business-clean;
- Bronze schema equals Silver schema;
- raw source field names are canonical business names;
- quarantined/rejected data is safe to consume;
- Bronze ingestion deduplication equals business deduplication;
- Bronze metadata can be dropped without traceability impact;
- schema drift/rescued data can be ignored;
- sensitive Bronze fields can be exposed in Silver without governance handling;
- blocked/deferred Bronze datasets can support approved Silver entities;
- source-of-truth conflicts are resolved unless handoff says so.

If Phase 10 needs one of these assumptions, it must collect evidence, ask for user decision, or mark accepted risk.

---

## 12. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Phase 10 |
|---|---|---|---|
| E-001 | Phase 08 handoff evidence | `_des-output/evidence/phase-09/phase-09-evidence-pack.md` | Confirms Bronze input context |
| E-002 | Source-to-Bronze mapping evidence | `_des-output/evidence/phase-09/phase-09-evidence-pack.md` | Defines Bronze datasets Silver may consume |
| E-003 | Ingestion-to-Bronze alignment evidence | `_des-output/evidence/phase-09/phase-09-evidence-pack.md` | Shows ingestion assumptions Bronze preserves |
| E-012 | Replay/backfill support evidence | `_des-output/evidence/phase-09/phase-09-evidence-pack.md` | Shows whether Silver can reprocess history |
| E-016 | Access/sensitivity evidence | `_des-output/evidence/phase-09/phase-09-evidence-pack.md` | Guides Silver access/masking decisions |

---

## 13. Recommended Next Skill

Recommended next DES skill:

```text
des-silver-layer-design
```

Reason:

Phase 10 should design the Silver layer so it can clean, standardize, conform, deduplicate, validate, and enrich Bronze data while preserving enough lineage and source traceability.

---

## 14. Phase 10 Starting Instructions

When starting Phase 10, the agent should read:

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
11. _des-output/evidence/phase-09/phase-09-evidence-pack.md
12. _des-output/implementation-artifacts/phase-09-done-gate.md
13. _des-output/phase-handoffs/phase-09-to-10-handoff.md
14. skills/des-silver-layer-design/SKILL.md
```

The agent should not start Phase 10 from the Bronze Layer Specification alone.

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
| YYYY-MM-DD | Created handoff | Phase 09 to Phase 10 transition |            |
