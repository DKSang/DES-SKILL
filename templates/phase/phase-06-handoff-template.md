# Phase 06 to Phase 07 Handoff

## 1. Purpose

This handoff defines what Phase 07 Architecture Design can safely use from Phase 06 Domain Modeling.

It separates approved conceptual domain concepts, entities, events, grains, and relationship cardinalities from assumptions, risks, open questions, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 06 — Domain Modeling |
| To Phase | 07 — Architecture Design |
| From Skill | `des-domain-modeling` |
| Next Skill | `des-architecture-design` |
| Phase Artifact | `_des-output/planning-artifacts/06-conceptual-domain-model.md` |
| Support Plan | `_des-output/phase-support-plans/phase-06-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-06/phase-06-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-06-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Current Phase

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | Glossary approved | E-002 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-002 | Entities identity approved | E-005 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-003 | Grains approved | E-006 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-004 | Source-of-truth approved | E-008 | Approved / Draft / Open | Easy / Medium / Hard |

---

## 4. Approved Inputs for Next Phase

The next phase may use the following as approved inputs:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| Glossary & Terms | Approved terminology and meanings for business concepts | `_des-output/planning-artifacts/06-conceptual-domain-model.md` | |
| Core Entities & Events | Core entities and event definitions | `_des-output/planning-artifacts/06-conceptual-domain-model.md` | |
| Grains & identity rules | Defined grain and unique business identity keys | `_des-output/planning-artifacts/06-conceptual-domain-model.md` | |
| Relationships | Validated business relationships and cardinalities | `_des-output/planning-artifacts/06-conceptual-domain-model.md` | |

---

## 5. Constraints for Next Phase

The next phase must respect the following constraints:

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | Domain scope boundaries | Architecture must align with approved domain scope | Domain Scope |
| C-002 | Source alignment constraints | Physical databases or structures must map to approved conformed concepts | Source Alignment |
| C-003 | Source caveats | Source quality, license, or freshness caveats carry forward | Caveats |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Next Phase | Required Handling |
|---|---|---|---|---|
| RISK-001 | Ambiguous glossary terms | High / Medium / Low | Potential logical schema mismatches | Clarify terms before physical database modeling |
| RISK-002 | Unresolved M:M relationships | High / Medium / Low | Fan-out rows or join complexity in physical model | Review join crosswalks in Gold design |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-001 | | | Phase 07 / Later | |

---

## 8. Do-Not-Assume List

The next phase must not assume:

- Physical Medallion tables, column definitions, or database types (Phase 09/10/11 medallion design)
- Serving layer APIs, BI dashboards, or endpoints (Phase 17 serving design)
- Ingestion pipelines or tools (Phase 08 ingestion design)
- Specific database indexing or partition layouts (Phase 20 cost & performance)

If the next phase needs one of these assumptions, it must either:

1. Collect evidence.
2. Ask for user decision.
3. Route back to the previous phase.
4. Mark the item as accepted risk.

---

## 9. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Next Phase |
|---|---|---|---|
| E-002 | Business glossary evidence | `_des-output/evidence/phase-06/phase-06-evidence-pack.md` | |
| E-005 | Entity identity evidence | `_des-output/evidence/phase-06/phase-06-evidence-pack.md` | |
| E-006 | Conceptual grain evidence | `_des-output/evidence/phase-06/phase-06-evidence-pack.md` | |
| E-008 | Source of truth evidence | `_des-output/evidence/phase-06/phase-06-evidence-pack.md` | |
