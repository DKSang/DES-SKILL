---
name: des-cost-and-performance-optimization
description: Use when creating the Cost and Performance Optimization Specification to define how storage, compute, and queries should be optimized for scale and efficiency.
---

# des-cost-and-performance-optimization

## Purpose

Use this skill to create the Cost and Performance Optimization Specification for any data engineering project.

This skill defines how storage, compute, ingestion, transformations, queries, orchestration, quality checks, semantic models, serving outputs, monitoring, and cloud/platform usage should be optimized for cost, performance, reliability, and scalability.

The goal is to avoid premature optimization while still making cost and performance measurable, observable, and aligned with business value, SLAs, contracts, and governance constraints.

## When To Use

Use this skill when:

- Phase 19 Governance and Security Specification exists;
- pipeline cost, query performance, storage growth, compute usage, refresh time, API latency, dashboard performance, or capacity planning needs review;
- the project is moving toward implementation/release;
- there are concerns about cloud spend, warehouse/lakehouse cost, Spark cost, API cost, storage cost, egress cost, dashboard load, semantic model size, or orchestration runtime;
- the workflow router selects Phase 20.

Do not use this skill to rewrite SQL/Python/dbt code, change infrastructure, tune actual indexes, resize clusters, configure autoscaling, deploy caching, or implement cost controls.

## Required Inputs

The agent should look for:

- `.agents/des-skill/output/07-architecture-decision-record.md`;
- `.agents/des-skill/output/08-ingestion-specification.md`;
- `.agents/des-skill/output/09-bronze-layer-specification.md`;
- `.agents/des-skill/output/10-silver-layer-specification.md`;
- `.agents/des-skill/output/11-gold-layer-specification.md`;
- `.agents/des-skill/output/12-data-contract-specification.md`;
- `.agents/des-skill/output/13-transformation-specification.md`;
- `.agents/des-skill/output/14-data-quality-specification.md`;
- `.agents/des-skill/output/15-orchestration-observability-specification.md`;
- `.agents/des-skill/output/16-semantic-model-specification.md`;
- `.agents/des-skill/output/17-serving-layer-specification.md`;
- `.agents/des-skill/output/18-lineage-metadata-specification.md`;
- `.agents/des-skill/output/19-governance-security-specification.md`;
- workflow status file, if present;
- expected data volume;
- expected query patterns;
- freshness/SLA expectations;
- runtime expectations;
- cost constraints;
- performance bottleneck notes;
- platform/capacity constraints;
- storage format/partitioning decisions;
- serving latency expectations.

If Governance and Security or Orchestration context is missing, stop and ask whether to route back to the relevant phase.

## Output

Create or update:

```text
.agents/des-skill/output/20-cost-performance-optimization-specification.md
```

The artifact must capture:

* cost and performance summary;
* optimization scope and non-scope;
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
* data quality cost/performance considerations;
* caching and materialization strategy;
* partitioning clustering and file sizing expectations;
* incremental processing and recomputation strategy;
* retention lifecycle and storage tiering;
* cost monitoring and budget guardrails;
* performance monitoring and SLOs;
* scalability and capacity planning;
* trade-off decisions;
* risks;
* assumptions;
* open questions;
* next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent volume, cost, latency, concurrency, budget, or SLA numbers.
8. Do not implement tuning changes or infrastructure changes.
9. Do not optimize by weakening security, quality, contract, or lineage without explicit decision.
10. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Guardrails

The agent must not:

* prematurely optimize low-risk/non-P1 workloads;
* reduce quality gates only to save cost without approval;
* remove lineage or audit metadata to improve performance without governance approval;
* expose sensitive data through cached/materialized outputs without security review;
* increase refresh frequency without source/cost impact review;
* optimize only for speed while ignoring cost;
* optimize only for cost while breaking SLA;
* recommend broad scaling without baseline measurement;
* ignore data growth and retention;
* mark optimization Done if cost drivers, performance drivers, monitoring, trade-offs, and risks are not documented.

## HALT Policy

This skill must stop when an optimization decision cannot be safely inferred.

Stop especially when:

* cost/performance scope is unclear;
* workload priority is unclear;
* baseline metrics are missing;
* budget/cost constraint is missing;
* SLA or latency target is unclear;
* storage strategy affects governance or retention;
* compute strategy affects cost/SLA;
* caching/materialization affects freshness or security;
* optimization conflicts with data contracts;
* quality checks are expensive but required;
* query performance issue lacks evidence;
* capacity/scalability requirement is unclear.

## Quality Checklist

- [ ] Optimization scope and principles are clearly defined.
- [ ] Workload inventory is created and prioritized.
- [ ] Cost and performance drivers are documented for P1 workloads.
- [ ] Baseline measurement plan is established.
- [ ] Storage, compute, and ingestion strategies are defined.
- [ ] Transformation and query optimizations are identified.
- [ ] Caching and materialization policies address freshness and security.
- [ ] Cost monitoring and budget guardrails are in place.
- [ ] Performance SLOs are measurable and aligned with SLAs.
- [ ] Scalability and capacity planning address expected growth.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Premature optimization without measurement | Wastes engineering time on non-bottlenecks; can introduce unnecessary complexity. |
| Weakening quality or security to save cost | Saves money at the expense of trust; leads to data corruption or breaches. |
| Ignoring hidden costs like egress or API rates | Cloud billing is complex; ignoring small drivers can lead to massive cost spikes. |
| Cache without invalidation or freshness status | Misleads users with stale data; breaks decision-making trust. |
| Scaling only for speed while ignoring cost | Leads to unviable business models; violates FinOps principles. |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Optimization must not bypass access controls or expose sensitive data via caching. |
| Data Management | Storage optimization must respect retention and tiering policies from Phase 19. |
| DataOps | FinOps practices, cost monitoring, and performance SLOs are core DataOps responsibilities. |
| Data Architecture | Partitioning, clustering, and incremental processing are key architectural decisions. |
| Orchestration | Orchestration runtime and parallelism are optimized for cost and SLA alignment. |
| Software Engineering | API serving performance and compute efficiency follow best engineering practices. |

## Handoff To The Next Skill

Next use `des-cicd-and-testing` to turn these optimization constraints and targets into automated testing gates and release readiness criteria.
