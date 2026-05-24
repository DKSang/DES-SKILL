# Phase 07 to Phase 08 Handoff

## 1. Purpose

This handoff defines what Phase 08 Ingestion Design can safely use from Phase 07 Architecture Design.

It separates approved architecture decisions from proposed/deferred decisions, tool assumptions, risks, open questions, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 07 — Architecture Design |
| To Phase | 08 — Ingestion Design |
| From Skill | `des-architecture-design` |
| Next Skill | `des-ingestion-design` |
| Phase Artifact | `_des-output/planning-artifacts/07-architecture-decision-record.md` |
| Support Plan | `_des-output/phase-support-plans/phase-07-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-07-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Phase 07

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| ADR-001 | Architecture scope | E-002 | Approved / Proposed / Deferred | Easy / Moderate / Hard |
| ADR-002 | Target platform direction | E-004 | Approved / Proposed / Deferred | Easy / Moderate / Hard |
| ADR-003 | Environment strategy | E-005 | Approved / Proposed / Deferred | Easy / Moderate / Hard |
| ADR-004 | Storage strategy | E-006 | Approved / Proposed / Deferred | Easy / Moderate / Hard |
| ADR-005 | Compute strategy | E-006 | Approved / Proposed / Deferred | Easy / Moderate / Hard |
| ADR-006 | Batch/streaming/event strategy | E-007 | Approved / Proposed / Deferred | Easy / Moderate / Hard |
| ADR-007 | Layer strategy | E-008 | Approved / Proposed / Deferred | Easy / Moderate / Hard |
| ADR-008 | Serving strategy | E-009 | Approved / Proposed / Deferred | Easy / Moderate / Hard |
| ADR-009 | Security/privacy posture | E-010 | Approved / Proposed / Deferred | Easy / Moderate / Hard |
| ADR-010 | Governance/metadata direction | E-011 | Approved / Proposed / Deferred | Easy / Moderate / Hard |

---

## 4. Approved Inputs for Phase 08

Phase 08 may use the following as input:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Architecture scope | Boundary for ingestion design | ADR / E-002 | |
| Target platform direction | Platform constraints for ingestion pattern | ADR / E-004 | |
| Environment strategy | Where ingestion artifacts run and promote | ADR / E-005 | |
| Storage strategy | Landing/storage constraints for ingestion outputs | ADR / E-006 | |
| Compute strategy | Runtime constraints for ingestion logic | ADR / E-006 | |
| Batch/streaming/event strategy | Determines ingestion mode | ADR / E-007 | |
| Layer strategy | Defines where raw/Bronze/source-aligned outputs go | ADR / E-008 | |
| Security/privacy posture | Defines credential, access, masking, and storage controls | ADR / E-010 | |
| Observability direction | Defines minimal ingestion monitoring expectations | ADR | |
| Governance/metadata direction | Defines ingestion metadata and lineage expectations | ADR / E-011 | |
| Source caveats | Source risks ingestion design must account for | Phase 05/06 handoffs | |

---

## 5. Ingestion-Relevant Architecture Constraints

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Ingestion design must follow approved batch/stream/event strategy | Prevents over/under-engineering ingestion | ADR |
| C-002 | Ingestion design must respect environment strategy | Keeps dev/test/prod promotion safe | ADR |
| C-003 | Ingestion outputs must align with approved layer strategy | Prevents inconsistent Bronze/raw design | ADR |
| C-004 | Ingestion design must preserve metadata needed for traceability | Supports lineage, audit, debugging | ADR/governance direction |
| C-005 | Credential handling must follow security/privacy posture | Prevents secret leakage and access risk | ADR/security posture |
| C-006 | Ingestion design must carry source caveats forward | Prevents hiding source quality/freshness risks | Phase 05/06 evidence |
| C-007 | Hard-to-reverse proposed decisions must not be treated as approved | Prevents premature lock-in | ADR reversibility review |

---

## 6. Architecture Decision Summary for Phase 08

| Decision ID | Decision Area | Chosen Direction | Status | Ingestion Impact |
|---|---|---|---|---|
| ADR-001 | Target platform | | Approved / Proposed / Deferred | |
| ADR-002 | Environment strategy | | Approved / Proposed / Deferred | |
| ADR-003 | Storage strategy | | Approved / Proposed / Deferred | |
| ADR-004 | Compute strategy | | Approved / Proposed / Deferred | |
| ADR-005 | Processing strategy | Batch / Streaming / Event / Hybrid / Manual / Deferred | Approved / Proposed / Deferred | |
| ADR-006 | Layer strategy | | Approved / Proposed / Deferred | |
| ADR-007 | Security/privacy posture | | Approved / Proposed / Deferred | |
| ADR-008 | Observability direction | | Approved / Proposed / Deferred | |

---

## 7. Deferred or Proposed Decisions

| Decision ID | Decision | Status | Impact on Phase 08 | Required Handling |
|---|---|---|---|---|
| ADR-XXX | | Proposed / Deferred / Open | | Do not assume / Accept risk / Resolve first |

---

## 8. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 08 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 9. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 08 / Later | |

---

## 10. Do-Not-Assume List

Phase 08 must not assume:

- proposed architecture decisions are approved;
- target platform choice means detailed ingestion pattern is already designed;
- layer strategy equals physical Bronze schema;
- storage strategy equals table partitioning strategy;
- compute strategy equals production job implementation;
- batch/streaming/event strategy can ignore source caveats;
- security posture can be deferred if source data is sensitive;
- observability direction means exact monitoring implementation is complete;
- architecture handoff removes the need for ingestion feasibility checks;
- hard-to-reverse architecture decisions can be expanded without approval.

If Phase 08 needs one of these assumptions, it must collect evidence, ask for user decision, or mark accepted risk.

---

## 11. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Phase 08 |
|---|---|---|---|
| E-001 | Phase 06 handoff evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Confirms architecture input context |
| E-002 | Architecture driver traceability evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Shows why decisions exist |
| E-003 | Option comparison evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Prevents unsupported ingestion constraints |
| E-004 | Platform feasibility evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Guides ingestion platform constraints |
| E-005 | Environment strategy evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Guides dev/test/prod ingestion design |
| E-006 | Storage/compute fit evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Guides ingestion runtime/storage assumptions |
| E-007 | Batch/streaming/event fit evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Guides ingestion mode |
| E-008 | Layer strategy evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Guides raw/Bronze/source-aligned landing |
| E-009 | Serving strategy evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Helps align ingestion with output needs |
| E-010 | Security/privacy evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Guides credential/access/storage controls |
| E-011 | Governance/metadata evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Guides lineage/metadata requirements |
| E-012 | Cost/operational burden evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Guides ingestion complexity |
| E-013 | Reversibility/lock-in evidence | `_des-output/evidence/phase-07/phase-07-evidence-pack.md` | Flags hard-to-reverse design constraints |

---

## 12. Recommended Next Skill

Recommended next DES skill:

```text
des-ingestion-design
```

Reason:

Phase 08 should design source-specific ingestion patterns that comply with approved architecture decisions, source evidence, security posture, environment strategy, layer strategy, and observability expectations.

---

## 13. Phase 08 Starting Instructions

When starting Phase 08, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/01-business-discovery-brief.md
3. _des-output/planning-artifacts/02-business-question-catalog.md
4. _des-output/planning-artifacts/03-requirements-and-kpi-catalog.md
5. _des-output/planning-artifacts/04-data-product-specification.md
6. _des-output/planning-artifacts/05-data-source-inventory.md
7. _des-output/planning-artifacts/06-conceptual-domain-model.md
8. _des-output/planning-artifacts/07-architecture-decision-record.md
9. _des-output/evidence/phase-07/phase-07-evidence-pack.md
10. _des-output/implementation-artifacts/phase-07-done-gate.md
11. _des-output/phase-handoffs/phase-07-to-08-handoff.md
12. skills/des-ingestion-design/SKILL.md
```

The agent should not start Phase 08 from the Architecture Decision Record alone.

---

## 14. Handoff Decision

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

## 15. Change Log

| Date       | Change          | Reason                          | Updated By |
| ---------- | --------------- | ------------------------------- | ---------- |
| YYYY-MM-DD | Created handoff | Phase 07 to Phase 08 transition |            |
