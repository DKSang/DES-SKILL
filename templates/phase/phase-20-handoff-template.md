# Phase 20 to Phase 21 Handoff

## 1. Purpose

This handoff defines what Phase 21 CI/CD and Testing can safely use from Phase 20 Cost and Performance Optimization.

It separates approved optimization targets from draft/risky/blocked assumptions and identifies which cost, performance, scalability, quality, security, and release-readiness expectations should become automated tests, CI checks, release gates, or monitoring thresholds.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | 20 — Cost and Performance Optimization |
| To Phase | 21 — CI/CD and Testing |
| From Skill | `des-cost-and-performance-optimization` |
| Next Skill | `des-cicd-and-testing` |
| Phase Artifact | `_des-output/planning-artifacts/20-cost-performance-optimization-specification.md` |
| Support Plan | `_des-output/phase-support-plans/phase-20-support-plan.md` |
| Evidence Pack | `_des-output/evidence/phase-20/phase-20-evidence-pack.md` |
| Done Gate | `_des-output/implementation-artifacts/phase-20-done-gate.md` |
| Handoff Date | YYYY-MM-DD |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Approved Inputs for Phase 21

| Input | Description | Source |
|---|---|---|
| Workload inventory | Workloads needing tests/gates | Phase 20 spec |
| Baseline measurement plan | Measurement checks to collect/validate | Phase 20 spec |
| Performance SLOs | Release/performance test candidates | Phase 20 spec |
| Cost guardrails | Cost check/release guardrail candidates | Phase 20 spec |
| Scalability/capacity assumptions | Load/capacity test candidates | Phase 20 spec |
| Caching/materialization constraints | Freshness/security test candidates | Phase 20 spec |
| Trade-off decisions | Accepted risks and rollback expectations | Phase 20 spec |
| Governance/security constraints | Must not be weakened by testing/deployment | Phase 19/20 handoff |
| Quality/contract constraints | Must be included in test gates | Phase 12/14/20 |

---

## 4. Test and Gate Candidates for Phase 21

| Candidate ID | Type | Applies To | Suggested Gate |
|---|---|---|---|
| TEST-PERF-001 | performance | workflow / query / API / dashboard | runtime / latency / load / capacity |
| TEST-COST-001 | cost | workflow / dataset / capacity / query | budget alert / cost regression check |
| TEST-FRESH-001 | freshness | serving output / dataset | freshness SLO check |
| TEST-CACHE-001 | cache/materialization | serving output | freshness + access boundary check |
| TEST-SCALE-001 | scalability | P1 workload | capacity/load readiness check |

---

## 5. Optimization Constraints for Testing

| Constraint | Impact on Phase 21 |
|---|---|
| Baselines must be captured before claiming improvement | Tests should compare against baseline or collect baseline first |
| Security cannot be weakened for performance | Security tests remain required |
| Quality gates cannot be removed for cost | DQ tests/gates remain required |
| Caching must respect freshness and access policy | Tests must validate freshness/status/access |
| Storage tiering must respect retention/audit | Tests/release checks must validate lifecycle policy |
| Cost alerts should not replace correctness tests | Cost monitoring is additional, not substitute |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Phase 21 | Required Handling |
|---|---|---|---|---|
| RISK-001 | | Critical / High / Medium / Low | | |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-OPEN-001 | | | Phase 21 / Later | |

---

## 8. Do-Not-Assume List

Phase 21 must not assume:

- optimization targets are approved unless marked approved;
- cost savings are real without baseline measurement;
- performance tests can replace quality/security tests;
- caching is safe unless freshness and access rules are tested;
- expensive quality rules can be disabled in CI/CD without approval;
- release gates can ignore cost/performance risks;
- tests can use production sensitive data without governance approval.

---

## 9. Recommended Next Skill

```text
des-cicd-and-testing
```

Reason:

Phase 21 should turn architecture, contracts, quality rules, security constraints, orchestration behavior, cost/performance targets, and release expectations into test suites, CI/CD gates, deployment readiness checks, and promotion rules.

---

## 10. Phase 21 Starting Instructions

When starting Phase 21, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. _des-output/planning-artifacts/12-data-contract-specification.md
3. _des-output/planning-artifacts/14-data-quality-specification.md
4. _des-output/planning-artifacts/15-orchestration-observability-specification.md
5. _des-output/planning-artifacts/19-governance-security-specification.md
6. _des-output/planning-artifacts/20-cost-performance-optimization-specification.md
7. _des-output/evidence/phase-20/phase-20-evidence-pack.md
8. _des-output/implementation-artifacts/phase-20-done-gate.md
9. _des-output/phase-handoffs/phase-20-to-21-handoff.md
10. skills/des-cicd-and-testing/SKILL.md
```

The agent should not start Phase 21 from the Cost and Performance Optimization Specification alone.

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
| YYYY-MM-DD | Created handoff | Phase 20 to Phase 21 transition | |
