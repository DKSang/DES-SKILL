# Step 01 — Context and Readiness

## Goal

Confirm that Cost and Performance Optimization is the correct next step, that upstream architecture, operations, governance, serving, transformation, and quality context is available, and that Phase 19 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 20 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ workload / baseline / cost driver / SLO / trade-off validation
→ artifact revision
→ done gate
→ handoff
```

---

## Required Inputs

Look for:

* `_des-output/planning-artifacts/07-architecture-decision-record.md`;
* `_des-output/planning-artifacts/08-ingestion-specification.md`;
* `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
* `_des-output/planning-artifacts/16-semantic-model-specification.md`;
* `_des-output/planning-artifacts/17-serving-layer-specification.md`;
* `_des-output/planning-artifacts/18-lineage-metadata-specification.md`;
* `_des-output/planning-artifacts/19-governance-security-specification.md`;
* `_des-output/phase-handoffs/phase-19-to-20-handoff.md`;
* `_des-output/evidence/phase-19/phase-19-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-19-done-gate.md`, if available;
* workflow status file;
* P1 workloads;
* expected data volume and growth;
* expected query patterns;
* expected refresh frequency;
* freshness/SLA expectations;
* serving latency expectations;
* platform/capacity constraints;
* cost constraints;
* runtime/performance monitoring signals;
* known bottlenecks and risks;
* governance/security constraints affecting optimization;
* existing `20-cost-performance-optimization-specification.md`, if present;
* existing `phase-20-support-plan.md`, if present;
* existing `phase-20-evidence-pack.md`, if present;
* existing `phase-20-to-21-handoff.md`, if present.

---

## Actions

1. Read `customize.toml`.
2. Identify these configured paths:

   * `output_file`;
   * `template_file`;
   * `checklist_file`;
   * `status_file`;
   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
3. Check whether required upstream artifacts exist.
4. Check whether Phase 19 handoff exists.
5. Check whether Phase 19 Done Gate exists.
6. Read or summarize:

   * Architecture Decision Record;
   * Ingestion Specification;
   * Bronze Layer Specification;
   * Silver Layer Specification;
   * Gold Layer Specification;
   * Data Contract Specification;
   * Transformation Specification;
   * Data Quality Specification;
   * Orchestration and Observability Specification;
   * Semantic Model Specification;
   * Serving Layer Specification;
   * Lineage and Metadata Specification;
   * Governance and Security Specification.
7. Read or summarize Phase 19 to Phase 20 Handoff if available.
8. Extract:

   * P1/P2 workloads and serving outputs;
   * high-cost workflows;
   * high-latency queries or serving paths;
   * storage growth risks;
   * expensive transformations;
   * costly quality rules;
   * freshness/SLA constraints;
   * cost constraints and budget guardrails;
   * security/governance constraints that affect optimization;
   * monitoring signals already defined;
   * missing baseline metrics;
   * do-not-assume items from Phase 19.
9. Check whether existing `20-cost-performance-optimization-specification.md` exists.
10. Check whether Phase 20 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new optimization specification;
* update an existing optimization specification;
* continue Phase 20 evidence/handoff work;
* route back to Phase 19;
* route back to Phase 15/17 if monitoring or serving performance context is missing;
* stop at HALT.

---

## Hints

* Do not optimize without knowing what matters.
* P1 workloads and consumer-facing outputs should be optimized first.
* Optimization should start with measurement.
* Cost and performance are connected: faster is often more expensive, cheaper may violate SLA.
* Storage optimization can conflict with retention/audit needs.
* Caching can improve speed but may introduce stale data or security exposure.
* Materialization can reduce query cost but increase storage and refresh cost.
* Query tuning should be guided by actual query patterns.
* Quality checks can be optimized, but not silently weakened.
* Phase 21 will turn measurable targets into tests and release gates where appropriate.

---

## Phase 19 Handoff Readiness

Before generating Phase 20 cost/performance design, classify Phase 19 readiness:

| Item                                  | Status                                                   | Action                              |
| ------------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Governance and Security Specification | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 19 Done Gate                    | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 19 Handoff                      | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Governance/security constraints       | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Retention/deletion constraints        | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Access/caching constraints            | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 19 Do-Not-Assume list           | Found / Missing                                          | Carry forward / Ask user            |
| Phase 19 open questions               | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT — Missing or Weak Governance/Operations Context

Stop if upstream operations or governance context is missing or too weak to optimize safely.

### Trigger

Use this HALT if:

* `19-governance-security-specification.md` is missing;
* Phase 19 handoff is missing;
* `15-orchestration-observability-specification.md` is missing;
* P1 workloads are unclear;
* monitoring signals are missing;
* access/security constraints are unclear;
* retention/audit constraints are missing;
* serving latency expectations are unclear.

### Options

A. Route back to `des-orchestration-observability`
B. Route back to `des-governance-security-design`
C. Route back to `des-serving-layer-design`
D. Continue Phase 20 as Draft using current context
E. User provides missing optimization context now
F. Stop workflow

### Recommendation

Choose A if runtime/cost observability is missing.
Choose B if security/retention/governance constraints are missing.
Choose D only if the user accepts that optimization remains Draft.

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Missing Phase 19 Handoff

Stop if the Governance and Security Specification exists but Phase 19 Done Gate or Phase 19 handoff is missing.

### Options

A. Route back to `des-governance-security-design` to create Done Gate and handoff
B. Continue Phase 20 as Draft with accepted risk
C. Treat current Phase 19 artifact as accepted risk and create a temporary Phase 20 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT — Optimization Scope Required

Stop if optimization scope is unclear.

### Options

A. P1 workloads only
B. P1 serving outputs only
C. P1 ingestion + transformation + serving workflows
D. All P1 + P2 workloads
E. Full project FinOps and performance framework
F. Known bottlenecks only
G. Custom scope

### Recommendation

Choose C for first-release readiness.
Choose F if there are already known bottlenecks.

### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 19 handoff is found or missing-handoff risk is accepted;
* optimization scope is selected or marked unresolved;
* P1 workloads, cost drivers, performance drivers, SLAs, constraints, and missing baselines are extracted;
* existing Phase 20 files are detected if present;
* the agent knows whether to create, update, or defer the optimization specification.

## Next Step

After completion, load only:

```text
steps/step-02-cost-performance-and-scalability-decisions.md
```
