# Phase 17 to Phase 18 Handoff

## 1. Purpose

This handoff defines what Phase 18 Lineage and Metadata Design can safely use from Phase 17 Serving Layer Design.

It separates approved serving outputs from draft/risky/blocked outputs and identifies which lineage, metadata, ownership, freshness, quality, contract, semantic, usage, and trust metadata must be captured for consumer-facing delivery.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 17 — Serving Layer Design |
| To Phase | 18 — Lineage and Metadata Design |
| From Skill | `des-serving-layer-design` |
| Next Skill | `des-lineage-metadata-design` |
| Phase Artifact | `_des-output/planning-artifacts/17-serving-layer-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-17-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-17/phase-17-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-17-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Approved Inputs for Phase 18

| Input | Description | Source |
|---|---|---|
| Serving output inventory | Outputs requiring lineage/metadata | Phase 17 spec |
| Gold/Semantic-to-serving mapping | End-to-end serving lineage path | Phase 17 spec |
| Consumer/persona mapping | Metadata audience and discoverability needs | Phase 17 spec |
| Access/security model | Metadata visibility constraints | Phase 17 spec |
| Freshness/quality visibility | Metadata fields for trust display | Phase 17 spec |
| API/export/sharing/agent needs | Channel-specific metadata needs | Phase 17 spec |
| Usage monitoring expectations | Adoption/usage metadata needs | Phase 17 spec |
| Feedback/support model | Ownership and issue metadata needs | Phase 17 spec |

---

## 4. Serving Output Summary for Phase 18

| Serving Output ID | Channel | Source | Status | Metadata / Lineage Implication |
|---|---|---|---|---|
| SERVE-001 | | Gold / Semantic / API / Export / Agent | Approved / Ready with Risks / Blocked / Deferred | |

---

## 5. Metadata Requirements Carried Forward

| Metadata Area | Required For | Notes |
|---|---|---|
| Business definition | Serving outputs, measures, dimensions | |
| Technical source mapping | Gold/Semantic-to-serving | |
| Contract version | API/system-facing/export outputs | |
| Quality status | Trusted serving outputs | |
| Freshness status | SLA-bound outputs | |
| Certification/trust status | BI/self-service/agent outputs | |
| Access classification | Restricted/external outputs | |
| Owner/support contact | All P1 serving outputs | |
| Usage/adoption signal | P1 serving outputs | |
| Feedback/issue reference | Consumer-facing outputs | |

---

## 6. Lineage Requirements Carried Forward

| Lineage Path | Required? | Notes |
|---|---:|---|
| Source → Bronze → Silver → Gold | Yes for trusted outputs | |
| Gold → Semantic Model | Yes where semantic objects are served | |
| Semantic Model → BI/API/App/Export/Agent | Yes for consumer-facing serving | |
| Quality Gate → Publish Status | Yes where gates affect visibility | |
| Contract Version → Serving Output | Yes for system-facing outputs | |
| Serving Output → Consumer/Persona | Yes for supportability | |

---

## 7. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 18 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 8. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 18 / Later | |

---

## 9. Do-Not-Assume List

Phase 18 must not assume:

- every serving output is approved;
- Draft serving outputs need full production lineage;
- blocked serving outputs should be exposed in catalogs;
- freshness and quality metadata can be omitted for trusted outputs;
- AI/data-agent access can ignore semantic definitions and lineage;
- external sharing metadata can be visible to all users;
- usage metrics are the same as quality metrics;
- serving metadata can ignore support owner and feedback path.

---

## 10. Recommended Next Skill

```text
des-lineage-metadata-design
```

Reason:

Phase 18 should design lineage paths, metadata fields, ownership metadata, freshness/quality metadata, run metadata, contract metadata, semantic metadata, discoverability metadata, and traceability expectations across the data product.

---

## 11. Phase 18 Starting Instructions

When starting Phase 18, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/11-gold-layer-specification.md
3. _des-output/planning-artifacts/12-data-contract-specification.md
4. _des-output/planning-artifacts/14-data-quality-specification.md
5. _des-output/planning-artifacts/15-orchestration-observability-specification.md
6. _des-output/planning-artifacts/16-semantic-model-specification.md
7. _des-output/planning-artifacts/17-serving-layer-specification.md
8. _des-output/evidence/phase-17/phase-17-evidence-pack.md
9. _des-output/implementation-artifacts/phase-17-done-gate.md
10. _des-output/phase-handoffs/phase-17-to-18-handoff.md
11. skills/des-lineage-metadata-design/SKILL.md
```

The agent should not start Phase 18 from the Serving Layer Specification alone.

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
| YYYY-MM-DD | Created handoff | Phase 17 to Phase 18 transition | |
