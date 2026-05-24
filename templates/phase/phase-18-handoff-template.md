# Phase 18 to Phase 19 Handoff

## 1. Purpose

This handoff defines what Phase 19 Governance and Security Design can safely use from Phase 18 Lineage and Metadata Design.

It separates approved metadata controls from draft/risky/blocked metadata assumptions and identifies which assets, metadata fields, lineage paths, ownership records, trust signals, audit records, and access classifications must be governed and secured.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 18 — Lineage and Metadata Design |
| To Phase | 19 — Governance and Security Design |
| From Skill | `des-lineage-metadata-design` |
| Next Skill | `des-governance-security-design` |
| Phase Artifact | `_des-output/planning-artifacts/18-lineage-metadata-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-18-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-18/phase-18-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-18-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Approved Inputs for Phase 19

| Input | Description | Source |
|---|---|---|
| Metadata asset inventory | Assets requiring governance/security controls | Phase 18 spec |
| Catalog requirements | Metadata fields requiring access/control | Phase 18 spec |
| Ownership/stewardship metadata | RACI and accountability basis | Phase 18 spec |
| Sensitivity/access metadata | Starting point for security model | Phase 18 spec |
| Quality/trust metadata | Trust signals requiring governance policy | Phase 18 spec |
| Contract metadata | Contract governance and version control | Phase 18 spec |
| Audit/compliance metadata | Audit and retention requirements | Phase 18 spec |
| Usage/consumer metadata | Access review and usage monitoring needs | Phase 18 spec |
| Lineage scope | Impact analysis and sensitive lineage scope | Phase 18 spec |

---

## 4. Governance-Relevant Metadata Summary

| Asset | Asset Type | Sensitivity / Access Metadata | Owner / Steward | Governance Implication |
|---|---|---|---|---|
| | source / dataset / metric / contract / semantic / serving | | | |

---

## 5. Security-Relevant Metadata Summary

| Asset | Sensitive Fields / Outputs | Access Boundary | Lineage Need | Notes |
|---|---|---|---|---|
| | | internal / restricted / external / tenant / role | dataset / column-critical / full-column | |

---

## 6. Audit and Compliance Metadata Carried Forward

| Metadata Area | Required? | Governance/Security Use |
|---|---|---|
| Access audit metadata | Yes / No | Access review, incident investigation |
| Change/version audit metadata | Yes / No | Change control, rollback, contract governance |
| Contract approval metadata | Yes / No | Contract lifecycle governance |
| Data deletion/retention traceability | Yes / No | Retention/privacy controls |
| Sensitive field lineage | Yes / No | Security impact analysis |
| Quality gate evidence | Yes / No | Trust and release governance |
| Incident history | Yes / No | Operational governance |

---

## 7. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 19 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 8. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 19 / Later | |

---

## 9. Do-Not-Assume List

Phase 19 must not assume:

- all metadata is approved;
- all metadata can be visible to every user;
- ownership metadata is complete unless marked approved;
- column-level lineage exists unless scoped and evidenced;
- sensitive field lineage can be skipped;
- metadata maintenance is automatic;
- usage metadata can be ignored for access review;
- quality/trust metadata does not require governance policy.

---

## 10. Recommended Next Skill

```text
des-governance-security-design
```

Reason:

Phase 19 should design governance, access control, privacy/security classification, stewardship, approval workflow, retention, audit, compliance, policy enforcement, and risk controls using Phase 18 metadata and lineage requirements.

---

## 11. Phase 19 Starting Instructions

When starting Phase 19, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/12-data-contract-specification.md
3. _des-output/planning-artifacts/14-data-quality-specification.md
4. _des-output/planning-artifacts/17-serving-layer-specification.md
5. _des-output/planning-artifacts/18-lineage-metadata-specification.md
6. _des-output/evidence/phase-18/phase-18-evidence-pack.md
7. _des-output/implementation-artifacts/phase-18-done-gate.md
8. _des-output/phase-handoffs/phase-18-to-19-handoff.md
9. skills/des-governance-security-design/SKILL.md
```

The agent should not start Phase 19 from the Lineage and Metadata Specification alone.

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
| YYYY-MM-DD | Created handoff | Phase 18 to Phase 19 transition | |
