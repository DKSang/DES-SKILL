---
name: des-cost-and-performance-optimization
description: Use when designing cost, performance, scalability, storage, compute, query, serving, monitoring, and FinOps optimization strategies for data products.
---

# des-cost-and-performance-optimization

## Purpose

Use this skill to create and validate the Cost and Performance Optimization Specification for any data engineering project.

This skill defines how storage, compute, ingestion, transformations, queries, orchestration, quality checks, semantic models, serving outputs, monitoring, and cloud/platform usage should be optimized for cost, performance, reliability, and scalability.

The goal is to avoid premature optimization while still making cost and performance measurable, observable, testable, and aligned with business value, SLAs, contracts, and governance constraints.

Cost and Performance Optimization should answer:

```text
Which workloads matter most?
What drives cost?
What drives latency or slow runtime?
What baseline must be measured before tuning?
What SLOs or targets must be met?
Which optimizations are safe?
Which optimizations conflict with security, quality, lineage, contracts, or freshness?
Which trade-offs are approved?
How will cost and performance be monitored?
Which targets should become CI/CD or release gates later?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Cost and Performance Optimization Specification is first written.

Phase 20 is Done only when:

```text
Cost and Performance Optimization Specification exists
+ Phase 19 artifact and handoff are reviewed
+ cost/performance validation work is identified
+ cost/performance evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 20 Done Gate passes
+ Phase 20 to Phase 21 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 19 Governance and Security Specification exists;
* Phase 19 handoff exists or the user explicitly accepts the risk of continuing without it;
* pipeline cost, query performance, storage growth, compute usage, refresh time, API latency, dashboard performance, or capacity planning needs review;
* the project is moving toward implementation/release;
* there are concerns about cloud spend, warehouse/lakehouse cost, Spark cost, API cost, storage cost, egress cost, dashboard load, semantic model size, or orchestration runtime;
* the workflow router selects Phase 20.

Do not use this skill to rewrite SQL/Python/dbt code, change infrastructure, tune actual indexes, resize clusters, configure autoscaling, deploy caching, implement partitioning changes, or implement cost controls.

Allowed in this phase:

```text
optimization scope design
workload inventory design
cost driver inventory design
performance driver inventory design
baseline measurement plan
storage optimization strategy
compute optimization strategy
ingestion optimization strategy
transformation optimization strategy
query and semantic model optimization strategy
serving performance strategy
orchestration runtime optimization
data quality cost/performance considerations
caching and materialization strategy
partitioning, clustering, and file sizing expectations
incremental processing and recomputation strategy
retention lifecycle and storage tiering strategy
cost monitoring and budget guardrail design
performance monitoring and SLO design
scalability and capacity planning
trade-off decision design
```

---

## Required Inputs

The agent should look for:

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
* workflow status file, if present;
* expected data volume;
* expected query patterns;
* freshness/SLA expectations;
* runtime expectations;
* cost constraints;
* performance bottleneck notes;
* platform/capacity constraints;
* storage format/partitioning decisions;
* serving latency expectations;
* governance/security constraints affecting optimization.

If Governance and Security or Orchestration context is missing, stop and ask whether to route back to the relevant phase.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/20-cost-performance-optimization-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-20-support-plan.md
_des-output/evidence/phase-20/phase-20-evidence-pack.md
_des-output/implementation-artifacts/phase-20-artifact-revision.md
_des-output/implementation-artifacts/phase-20-done-gate.md
_des-output/phase-handoffs/phase-20-to-21-handoff.md
```

The main artifact must capture:

* cost and performance summary;
* optimization scope;
* optimization non-scope;
* optimization design principles;
* workload inventory;
* cost driver inventory;
* performance driver inventory;
* baseline measurement plan;
* storage optimization strategy;
* compute optimization strategy;
* ingestion optimization strategy;
* transformation optimization strategy;
* query and semantic model optimization strategy;
* serving performance strategy;
* orchestration runtime optimization;
* data quality cost and performance considerations;
* caching and materialization strategy;
* partitioning, clustering, and file sizing expectations;
* incremental processing and recomputation strategy;
* retention lifecycle and storage tiering;
* cost monitoring and budget guardrails;
* performance monitoring and SLOs;
* scalability and capacity planning;
* trade-off decisions;
* cost and performance evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 20 evidence summary;
* Phase 20 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Identify Phase-Orchestrated Support files:

   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
5. Load only `steps/step-01-context-and-readiness.md`.
6. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
7. Stop at every HALT point and wait for user input.
8. Do not invent volume, cost, latency, concurrency, budget, or SLA numbers.
9. Do not implement tuning changes or infrastructure changes.
10. Do not optimize by weakening security, quality, contract, lineage, or freshness without explicit decision.
11. Before marking Phase 20 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream architecture, operations, governance, serving, transformation, and quality context.
2. Confirm Phase 19 handoff readiness.
3. Identify datasets and outputs requiring optimization.
4. Define workload inventory and priority.
5. Define cost and performance drivers.
6. Define baseline measurement plan.
7. Define storage, compute, ingestion, transformation, query, and serving optimization strategies.
8. Define orchestration, quality, caching, partitioning, and incremental strategies.
9. Define retention lifecycle, storage tiering, monitoring, SLOs, and scalability.
10. Define trade-off decisions.
11. Ask HALT questions for unresolved optimization decisions.
12. Draft the Cost and Performance Optimization Specification.
13. Create the Phase 20 Support Plan.
14. Collect or reference Phase 20 evidence.
15. Revise the Cost and Performance Optimization Specification using evidence.
16. Run the Phase 20 Done Gate.
17. Create the Phase 20 to Phase 21 Handoff.
18. Update workflow status.
19. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 20 uses cost/performance validation support work.

The purpose is not performance implementation. The purpose is to make optimization decisions measurable, safe, testable, and ready to become CI/CD and release readiness gates.

### Required Support Work

| Support Work                               | Purpose                                                                       | Output                      |
| ------------------------------------------ | ----------------------------------------------------------------------------- | --------------------------- |
| Phase 19 Handoff Review                    | Check optimization respects governance/security constraints.                  | Evidence pack section       |
| Optimization Scope Check                   | Validate optimization boundary.                                               | Evidence pack section       |
| Workload Inventory Check                   | Ensure workloads are listed.                                                  | Evidence pack section       |
| Workload Priority Check                    | Validate P1/P2/P3 priority.                                                   | Evidence pack section       |
| Cost Driver Inventory Check                | Identify compute/storage/query/API/egress/etc. cost drivers.                  | Evidence pack section       |
| Performance Driver Inventory Check         | Identify runtime/query/API/dashboard/serving drivers.                         | Evidence pack section       |
| Baseline Measurement Plan Check            | Ensure measurement precedes tuning.                                           | Evidence pack section       |
| Storage Optimization Check                 | Validate storage/layout/tiering decisions.                                    | Evidence pack section       |
| Compute Optimization Check                 | Validate compute/capacity strategy.                                           | Evidence pack section       |
| Ingestion Optimization Check               | Validate ingestion performance/cost strategy.                                 | Evidence pack section       |
| Transformation Optimization Check          | Validate transformation performance/cost strategy.                            | Evidence pack section       |
| Query/Semantic Optimization Check          | Validate query and semantic performance plan.                                 | Evidence pack section       |
| Serving Performance Check                  | Validate dashboard/API/export/agent performance plan.                         | Evidence pack section       |
| Orchestration Runtime Check                | Validate scheduling/parallelism/runtime strategy.                             | Evidence pack section       |
| Data Quality Cost/Performance Check        | Validate quality gates are optimized without weakening trust.                 | Evidence pack section       |
| Caching/Materialization Check              | Validate freshness/security/cost trade-offs.                                  | Evidence pack section       |
| Partitioning/Clustering/File Sizing Check  | Validate layout expectations.                                                 | Evidence pack section       |
| Incremental Processing/Recomputation Check | Validate safe incremental/recompute strategy.                                 | Evidence pack section       |
| Retention Lifecycle/Storage Tiering Check  | Validate Phase 19 governance constraints are respected.                       | Evidence pack section       |
| Cost Monitoring/Budget Guardrail Check     | Validate FinOps signals and thresholds.                                       | Evidence pack section       |
| Performance Monitoring/SLO Check           | Validate measurable performance targets.                                      | Evidence pack section       |
| Scalability/Capacity Planning Check        | Validate expected growth planning.                                            | Evidence pack section       |
| Trade-Off Decision Check                   | Validate approved cost/performance/security/SLA trade-offs.                   | Evidence pack section       |
| Phase 20 Done Gate                         | Decide whether Phase 20 is Done, Done with risks, or Blocked.                 | `phase-20-done-gate.md`     |
| Phase 20 Handoff                           | Tell Phase 21 what cost/performance constraints become testing/release gates. | `phase-20-to-21-handoff.md` |

---

## Guardrails

The agent must not:

* prematurely optimize low-risk or non-P1 workloads;
* claim cost savings without evidence;
* recommend broad scaling without baseline measurement;
* reduce quality gates only to save cost without approval;
* remove lineage or audit metadata to improve performance without governance approval;
* expose sensitive data through cached/materialized outputs without security review;
* increase refresh frequency without source/cost impact review;
* optimize only for speed while ignoring cost;
* optimize only for cost while breaking SLA;
* cache without invalidation or freshness status;
* ignore data growth, retention, and storage lifecycle;
* implement SQL/Python/dbt tuning, infrastructure changes, autoscaling, cache deployment, index changes, compute resizing, or code in this phase;
* mark optimization Done if cost drivers, performance drivers, monitoring, trade-offs, and risks are not documented.

---

## Handoff To The Next Skill

Recommend `des-cicd-and-testing` only after:

```text
Cost and Performance Optimization Specification exists
+ Phase 20 support plan exists or is waived with reason
+ Phase 20 evidence pack exists or evidence is waived with reason
+ Phase 20 Done Gate is Pass or Pass with risks
+ Phase 20 to Phase 21 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-cost-and-performance-optimization
return to Step 02 cost, performance, and scalability decisions
resolve HALT question
route back to des-governance-security-design
route back to des-orchestration-observability
route back to des-serving-layer-design
route back to des-data-quality
des-wise
des-correct-course
```
