# Phase 08 to Phase 09 Handoff

## 1. Purpose

This handoff defines what Phase 09 Bronze Layer Design can safely use from Phase 08 Ingestion Design.

It separates approved ingestion decisions from draft/blocked ingestion assumptions, source risks, metadata expectations, monitoring expectations, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 08 — Ingestion Design |
| To Phase | 09 — Bronze Layer Design |
| From Skill | `des-ingestion-design` |
| Next Skill | `des-bronze-layer-design` |
| Phase Artifact | `_des-output/planning-artifacts/08-ingestion-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-08-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-08-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Phase 08

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Ingestion scope | E-002 | Approved / Draft / Blocked | Easy / Moderate / Hard |
| DEC-002 | Source-to-ingestion mapping | E-002 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-003 | Ingestion pattern per source | E-004 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-004 | Batch/streaming/event mode | E-005 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-005 | Frequency and trigger | E-006 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-006 | Checkpoint and idempotency | E-008 / E-009 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-007 | Replay/backfill strategy | E-010 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-008 | Schema drift and error handling | E-011 / E-012 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-009 | Security and credential handling | E-013 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |
| DEC-010 | Landing metadata expectations | E-015 | Approved / Draft / Risk / Blocked | Easy / Moderate / Hard |

---

## 4. Approved Inputs for Phase 09

Phase 09 may use the following as input:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Ingestion scope | Sources/flows Bronze must support | Ingestion Spec / E-002 | |
| Ingestion pattern per source | Determines raw/landing preservation needs | Ingestion Spec / E-004 | |
| Frequency and trigger | Informs partitioning/time metadata expectations | Ingestion Spec / E-006 | |
| Access/extraction method | Informs source object/file/API metadata | Ingestion Spec / E-007 | |
| Checkpoint strategy | Informs extract window and run metadata | Ingestion Spec / E-008 | |
| Idempotency strategy | Informs raw file/manifest/dedup metadata | Ingestion Spec / E-009 | |
| Replay/backfill strategy | Informs raw immutability and history needs | Ingestion Spec / E-010 | |
| Schema drift policy | Informs raw payload/rescued data expectations | Ingestion Spec / E-011 | |
| Error/quarantine policy | Informs quarantine/rejected/rescued structures | Ingestion Spec / E-012 | |
| Security posture | Informs access, masking, and sensitive fields | Ingestion Spec / E-013 | |
| Landing metadata expectations | Direct input for Bronze metadata design | Evidence Pack / E-015 | |
| Monitoring/audit expectations | Direct input for Bronze auditability | Evidence Pack / E-016 | |

---

## 5. Source-to-Bronze Input Summary

| Source ID | Ingestion Pattern | Landing Expectation | Metadata Needed | Bronze Design Status |
|---|---|---|---|---|
| SRC-001 | | Immutable raw / Raw payload / Source-aligned landing / Stream landing / Manual versioned | | Ready / Ready with Risks / Blocked |
| SRC-002 | | Immutable raw / Raw payload / Source-aligned landing / Stream landing / Manual versioned | | Ready / Ready with Risks / Blocked |

---

## 6. Ingestion Metadata Requirements for Phase 09

| Metadata Field | Required? | Applies To | Purpose |
|---|---:|---|---|
| `des_source_system` | Yes | All sources | Identify source system |
| `des_source_id` | Recommended | All sources | Identify source object/source-specific ID |
| `des_source_file_path` | Required when file-based | File/drop/object sources | Trace to original file |
| `des_source_object` | Recommended | API/DB/topic/file sources | Trace to endpoint/table/topic/object |
| `des_ingestion_run_id` | Yes | All batch/micro-batch runs | Trace to run |
| `des_ingestion_timestamp` | Yes | All records/files/events | Record ingestion time |
| `des_extract_window_start` | Required when windowed | Incremental/windowed extraction | Trace source window |
| `des_extract_window_end` | Required when windowed | Incremental/windowed extraction | Trace source window |
| `des_source_event_timestamp` | Required when available | Events/observations | Preserve event time |
| `des_source_update_timestamp` | Required when available | Updated records | Preserve update time |
| `des_payload_hash` | Recommended | Raw payload/file/event | Dedup/audit helper |
| `des_record_hash` | Optional | Record-level data | Change detection helper |
| `des_schema_version` | Recommended | Schema-aware sources | Trace schema version |
| `des_ingestion_status` | Recommended | All ingestion records | Success/partial/quarantine status |

---

## 7. Bronze-Relevant Constraints

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Bronze design must preserve raw/source evidence needed for replay and audit | Supports recovery and traceability | Phase 08 replay/audit decisions |
| C-002 | Bronze design must support idempotent reruns | Prevents duplicate/corrupt raw data | Phase 08 idempotency decision |
| C-003 | Bronze design must preserve source file path/object/window/run metadata where applicable | Enables lineage and debugging | Phase 08 metadata expectations |
| C-004 | Bronze design must account for schema drift policy | Prevents source changes from silently corrupting Bronze | Phase 08 schema drift decision |
| C-005 | Bronze design must support quarantine/rejected/rescued data expectations | Preserves bad records and failure evidence | Phase 08 error handling decision |
| C-006 | Bronze design must respect security/privacy posture | Prevents raw sensitive data exposure | Phase 08 security decision |
| C-007 | Blocked ingestion sources must not drive approved Bronze design | Prevents designing around unavailable sources | Phase 08 Done Gate |

---

## 8. Deferred or Blocked Ingestion Sources

| Source ID | Reason | Impact on Phase 09 | Required Handling |
|---|---|---|---|
| SRC-XXX | | | Do not design / Design as future / Accept risk / Resolve first |

---

## 9. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 09 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 10. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 09 / Later | |

---

## 11. Do-Not-Assume List

Phase 09 must not assume:

- ingestion pattern means Bronze schema is already designed;
- landing target expectation equals final Bronze table design;
- raw payload can be flattened or transformed in Bronze without approval;
- source schema is stable unless Phase 08 says so;
- missing metadata can be recovered later;
- idempotency can be solved entirely in downstream layers;
- schema drift policy can be ignored;
- sensitive raw data can be broadly accessible;
- blocked/deferred sources can drive approved Bronze design;
- ingestion observability replaces data quality testing.

If Phase 09 needs one of these assumptions, it must collect evidence, ask for user decision, or mark accepted risk.

---

## 12. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Phase 09 |
|---|---|---|---|
| E-001 | Phase 07 handoff evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Confirms ingestion architecture input context |
| E-002 | Source-to-ingestion mapping evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Defines sources in scope for Bronze |
| E-003 | Architecture constraint alignment evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Carries layer/security/platform constraints |
| E-004 | Ingestion pattern fit evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Determines raw preservation needs |
| E-005 | Batch/streaming/event alignment evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Informs batch/stream landing design |
| E-006 | Frequency/trigger evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Informs time/run metadata |
| E-007 | Access/extraction evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Shows source availability |
| E-008 | Incremental/checkpoint evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Informs extract windows/checkpoints |
| E-009 | Idempotency evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Informs rerun-safe Bronze design |
| E-010 | Replay/backfill evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Informs raw immutability/history needs |
| E-011 | Schema drift policy evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Informs schema/rescued-data behavior |
| E-012 | Error/quarantine evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Informs quarantine/rejected data expectations |
| E-013 | Security/credential evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Informs raw data access control |
| E-014 | Source impact/rate limit evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Informs ingestion limitations |
| E-015 | Landing metadata evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Directly informs Bronze metadata |
| E-016 | Monitoring/audit evidence | `_des-output/evidence/phase-08/phase-08-evidence-pack.md` | Informs Bronze auditability |

---

## 13. Recommended Next Skill

Recommended next DES skill:

```text
des-bronze-layer-design
```

Reason:

Phase 09 should design the Bronze/raw layer so it preserves source fidelity, ingestion metadata, schema drift evidence, replayability, traceability, and quarantine expectations from Phase 08.

---

## 14. Phase 09 Starting Instructions

When starting Phase 09, the agent should read:

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
10. _des-output/evidence/phase-08/phase-08-evidence-pack.md
11. _des-output/implementation-artifacts/phase-08-done-gate.md
12. _des-output/phase-handoffs/phase-08-to-09-handoff.md
13. skills/des-bronze-layer-design/SKILL.md
```

The agent should not start Phase 09 from the Ingestion Specification alone.

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
| YYYY-MM-DD | Created handoff | Phase 08 to Phase 09 transition |            |
