# Phase 21 to Phase 22 Handoff

## 1. Purpose

This handoff defines what Phase 22 Project Evaluation can safely evaluate from Phase 21 CI/CD and Testing.

It separates approved release-readiness controls from draft/risky/blocked assumptions and identifies which tests, gates, environments, approvals, rollback paths, evidence records, and release risks must be evaluated before final delivery.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 21 — CI/CD and Testing |
| To Phase | 22 — Project Evaluation |
| From Skill | `des-cicd-and-testing` |
| Next Skill | `des-project-evaluation` |
| Phase Artifact | `_des-output/planning-artifacts/21-cicd-testing-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-21-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-21/phase-21-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-21-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Approved Inputs for Phase 22

| Input | Description | Source |
|---|---|---|
| CI/CD scope | What release framework covers | Phase 21 spec |
| Artifact inventory | What is versioned/tested/deployed | Phase 21 spec |
| Test inventory | What should be evaluated for coverage | Phase 21 spec |
| Release gates | What blocks/warns/informs release | Phase 21 spec |
| Environment promotion path | Release workflow to evaluate | Phase 21 spec |
| Rollback and recovery strategy | Operational readiness evidence | Phase 21 spec |
| Release evidence/audit trail | Evidence for final evaluation | Phase 21 spec |
| Open risks and blockers | Final readiness decision inputs | Phase 21 spec/evidence |

---

## 4. Release Readiness Summary

| Area | Status | Evaluation Implication |
|---|---|---|
| Repository/artifact inventory | Approved / Risk / Blocked | |
| Branch/review strategy | Approved / Risk / Blocked | |
| Environment/promotion strategy | Approved / Risk / Blocked | |
| Contract gates | Approved / Risk / Blocked | |
| Quality gates | Approved / Risk / Blocked | |
| Security/governance gates | Approved / Risk / Blocked | |
| Cost/performance gates | Approved / Risk / Blocked | |
| Rollback/recovery | Approved / Risk / Blocked | |
| Release evidence/audit | Approved / Risk / Blocked | |

---

## 5. Final Evaluation Evidence Candidates

| Evidence Candidate | Needed For |
|---|---|
| Test coverage map | Completeness evaluation |
| Gate behavior map | Release safety evaluation |
| Environment promotion path | Deployment readiness evaluation |
| Approval workflow | Accountability evaluation |
| Rollback strategy | Operational recovery evaluation |
| Release evidence policy | Auditability evaluation |
| Risk register | Go/no-go decision |
| Open questions | Remaining work assessment |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 22 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 22 / Final delivery | |

---

## 8. Do-Not-Assume List

Phase 22 must not assume:

- CI/CD implementation exists just because CI/CD design exists;
- tests have been executed unless evidence says so;
- release gates are approved unless marked approved;
- rollback is safe unless documented and reviewed;
- production readiness exists without release evidence;
- unresolved blockers can be ignored in final evaluation;
- missing test coverage can be treated as complete.

---

## 9. Recommended Next Skill

```text
des-project-evaluation
```

Reason:

Phase 22 should evaluate the completed design and evidence against business goals, success criteria, data product readiness, release readiness, risk posture, trust expectations, and remaining gaps.

---

## 10. Phase 22 Starting Instructions

When starting Phase 22, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/01-business-discovery-brief.md
3. _des-output/planning-artifacts/02-business-question-catalog.md
4. _des-output/planning-artifacts/03-requirements-and-kpi-catalog.md
5. _des-output/planning-artifacts/04-data-product-specification.md
6. _des-output/planning-artifacts/20-cost-performance-optimization-specification.md
7. _des-output/planning-artifacts/21-cicd-testing-specification.md
8. _des-output/evidence/phase-21/phase-21-evidence-pack.md
9. _des-output/implementation-artifacts/phase-21-done-gate.md
10. _des-output/phase-handoffs/phase-21-to-22-handoff.md
11. skills/des-project-evaluation/SKILL.md
```

The agent should not start Phase 22 from the CI/CD and Testing Specification alone.

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
| YYYY-MM-DD | Created handoff | Phase 21 to Phase 22 transition | |
