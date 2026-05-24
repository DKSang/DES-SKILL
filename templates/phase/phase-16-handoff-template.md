# Phase 16 to Phase 17 Handoff

## 1. Purpose

This handoff defines what Phase 17 Serving Layer Design can safely use from Phase 16 Semantic Model Design.

It separates approved semantic models, certified measures, promoted measures, draft metrics, relationship risks, security constraints, trust labels, freshness/quality visibility, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 16 — Semantic Model Design |
| To Phase | 17 — Serving Layer Design |
| From Skill | `des-semantic-model-design` |
| Next Skill | `des-serving-layer-design` |
| Phase Artifact | `_des-output/planning-artifacts/16-semantic-model-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-16-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-16/phase-16-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-16-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Approved Inputs for Phase 17

| Input | Description | Source |
|---|---|---|
| Semantic model inventory | Models/views to serve | Phase 16 spec |
| Certified/promoted measures | Metrics safe to expose | Phase 16 spec |
| Draft/risky measures | Metrics needing warning or exclusion | Phase 16 spec |
| Dimensions and hierarchies | Consumer slicing/drill paths | Phase 16 spec |
| Relationships and join behavior | Serving model constraints | Phase 16 spec |
| Security/access model | Serving access constraints | Phase 16 spec |
| Freshness/quality display expectations | User-facing trust signals | Phase 16 spec |
| Lineage/metadata expectations | Explainability/debug metadata | Phase 16 spec |

---

## 4. Semantic Model Summary for Phase 17

| Semantic Model | Consumer | Trust Status | Serving Implication |
|---|---|---|---|
| | | Draft / Promoted / Certified / Risk / Blocked / Deprecated | Serve / Serve with warning / Do not serve / Defer |

---

## 5. Measure Exposure Guidance

| Measure | Status | Exposure Guidance | Notes |
|---|---|---|---|
| | Certified | Safe for trusted serving | |
| | Approved / Promoted | Serve with definition and owner | |
| | Draft | Serve only with warning or exclude from P1 | |
| | Blocked | Do not expose | |

---

## 6. Serving Constraints

| Constraint ID | Constraint | Impact on Phase 17 | Source |
|---|---|---|---|
| C-001 | Serving layer must not expose blocked semantic objects | Prevents unsafe consumption | Phase 16 trust status |
| C-002 | Serving layer must respect semantic security model | Prevents unauthorized access | Phase 16 security |
| C-003 | Serving layer must show freshness/quality status where required | Supports user trust | Phase 16 freshness/quality display |
| C-004 | Serving layer must not redefine semantic metrics | Prevents metric drift | Phase 16 measure definitions |
| C-005 | Serving layer must avoid ambiguous relationships and double-count risks | Prevents wrong reports/API responses | Phase 16 relationships |

---

## 7. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 17 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 8. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 17 / Later | |

---

## 9. Do-Not-Assume List

Phase 17 must not assume:

- Draft measures are safe for trusted serving;
- Certified status can be assigned by the serving layer;
- semantic metrics can be redefined in APIs/dashboards;
- freshness and quality warnings can be hidden when required;
- security rules can be relaxed for convenience;
- relationship risks can be ignored;
- technical Gold field names are user-facing semantic names;
- all semantic objects are ready for every consumer.

---

## 10. Recommended Next Skill

```text
des-serving-layer-design
```

Reason:

Phase 17 should design how approved semantic objects, Gold outputs, APIs, BI datasets, app-facing outputs, exports, or AI-agent-accessible data are served safely to consumers.

---

## 11. Phase 17 Starting Instructions

When starting Phase 17, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/11-gold-layer-specification.md
3. _des-output/planning-artifacts/12-data-contract-specification.md
4. _des-output/planning-artifacts/14-data-quality-specification.md
5. _des-output/planning-artifacts/15-orchestration-observability-specification.md
6. _des-output/planning-artifacts/16-semantic-model-specification.md
7. _des-output/evidence/phase-16/phase-16-evidence-pack.md
8. _des-output/implementation-artifacts/phase-16-done-gate.md
9. _des-output/phase-handoffs/phase-16-to-17-handoff.md
10. skills/des-serving-layer-design/SKILL.md
```

The agent should not start Phase 17 from the Semantic Model Specification alone.

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
| YYYY-MM-DD | Created handoff | Phase 16 to Phase 17 transition | |
