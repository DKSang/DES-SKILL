# Phase 19 to Phase 20 Handoff

## 1. Purpose

This handoff defines what Phase 20 Cost and Performance Optimization can safely use from Phase 19 Governance and Security Design.

It separates approved governance/security constraints from draft/risky/blocked assumptions and identifies which controls may affect storage, compute, partitioning, indexing, caching, serving latency, encryption, masking, access checks, audit logging, retention, and cost/performance trade-offs.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 19 — Governance and Security Design |
| To Phase | 20 — Cost and Performance Optimization |
| From Skill | `des-governance-security-design` |
| Next Skill | `des-cost-and-performance-optimization` |
| Phase Artifact | `_des-output/planning-artifacts/19-governance-security-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-19-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-19/phase-19-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-19-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Approved Inputs for Phase 20

| Input | Description | Source |
|---|---|---|
| Classification policy | Determines protection and optimization constraints | Phase 19 spec |
| Asset sensitivity inventory | Identifies restricted assets | Phase 19 spec |
| Access model | Determines serving/auth overhead and caching limits | Phase 19 spec |
| RLS/CLS/object/measure restrictions | Affects query and semantic performance design | Phase 19 spec |
| Masking/tokenization/anonymization requirements | Affects transformation and serving cost/performance | Phase 19 spec |
| Encryption/secret handling expectations | Affects storage/compute/network assumptions | Phase 19 spec |
| Retention/deletion policy | Affects storage lifecycle optimization | Phase 19 spec |
| Audit/access monitoring requirements | Affects logging and monitoring costs | Phase 19 spec |
| Sharing/API/AI/reverse ETL constraints | Affects serving performance and cost design | Phase 19 spec |

---

## 4. Cost/Performance-Relevant Security Constraints

| Constraint ID | Constraint | Affects | Notes |
|---|---|---|---|
| SEC-COST-001 | | storage / compute / query latency / cache / serving / monitoring / network | |

---

## 5. Assets Requiring Optimization Under Governance Constraints

| Asset | Classification | Security Constraint | Optimization Implication |
|---|---|---|---|
| | Public / Internal / Confidential / PII / Sensitive / Secret-bearing / Unknown | | |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 20 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 20 / Later | |

---

## 8. Do-Not-Assume List

Phase 20 must not assume:

- optimization can weaken access control;
- caching can bypass RLS/CLS/security boundaries;
- masking/tokenization can be removed for performance;
- raw data can be retained indefinitely for convenience;
- audit logging can be disabled to save cost without approval;
- external sharing/API/AI/reverse ETL constraints can be ignored;
- restricted datasets can be duplicated into cheaper or faster stores without governance review.

---

## 9. Recommended Next Skill

```text
des-cost-and-performance-optimization
```

Reason:

Phase 20 should optimize storage, compute, query performance, partitioning, caching, materialization, serving latency, and cost only within approved governance and security constraints.

---

## 10. Phase 20 Starting Instructions

When starting Phase 20, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/07-architecture-decision-record.md
3. _des-output/planning-artifacts/11-gold-layer-specification.md
4. _des-output/planning-artifacts/15-orchestration-observability-specification.md
5. _des-output/planning-artifacts/17-serving-layer-specification.md
6. _des-output/planning-artifacts/19-governance-security-specification.md
7. _des-output/evidence/phase-19/phase-19-evidence-pack.md
8. _des-output/implementation-artifacts/phase-19-done-gate.md
9. _des-output/phase-handoffs/phase-19-to-20-handoff.md
10. skills/des-cost-and-performance-optimization/SKILL.md
```

The agent should not start Phase 20 from the Governance and Security Specification alone.

---

## 11. Handoff Decision

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

## 12. Change Log

| Date | Change | Reason | Updated By |
|---|---|---|---|
| YYYY-MM-DD | Created handoff | Phase 19 to Phase 20 transition | |
