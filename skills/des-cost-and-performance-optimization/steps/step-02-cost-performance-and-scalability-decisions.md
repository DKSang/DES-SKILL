# Step 02 — Cost, Performance, and Scalability Decisions

## Goal

Define workload priorities, cost drivers, performance drivers, baseline measurements, optimization strategies, monitoring, budget guardrails, scalability planning, and approved trade-offs.

## Required Inputs

- Confirmed context from Step 01
- Architecture Decision Record
- Ingestion Specification
- Transformation Specification
- Data Quality Specification
- Orchestration and Observability Specification
- Serving Layer Specification
- Governance and Security Specification
- User answers from HALT points
- Existing profiling, runtime logs, warehouse/lakehouse metrics, query plans, or cost reports if available

## Actions

1. Define optimization scope and non-scope.
2. Define optimization design principles.
3. Create workload inventory.
4. Create cost driver inventory.
5. Create performance driver inventory.
6. Define baseline measurement plan.
7. Define storage optimization strategy.
8. Define compute optimization strategy.
9. Define ingestion optimization strategy.
10. Define transformation optimization strategy.
11. Define query and semantic model optimization strategy.
12. Define serving performance strategy.
13. Define orchestration runtime optimization.
14. Define data quality cost/performance considerations.
15. Define caching and materialization strategy.
16. Define partitioning, clustering, and file sizing expectations.
17. Define incremental processing and recomputation strategy.
18. Define retention lifecycle and storage tiering.
19. Define cost monitoring and budget guardrails.
20. Define performance monitoring and SLOs.
21. Define scalability and capacity planning.
22. Define trade-off decisions.
23. Use HALT checkpoints for unresolved decisions.

## Optimization Principles

Use these defaults unless overridden:

| Principle | Meaning |
| --- | --- |
| Measure first | Do not optimize without baseline evidence |
| P1 first | Optimize business-critical workloads first |
| Fit-for-workload | Match storage/compute/model to access pattern |
| Incremental by default where safe | Avoid full refresh when incremental is correct |
| Avoid hidden cost | Track query, compute, egress, storage, API, and quality costs |
| Optimize without breaking trust | Do not weaken contracts, quality, security, or lineage silently |
| Make trade-offs explicit | Cost/performance/SLA/security trade-offs need approval |
| Monitor continuously | Optimization is ongoing, not one-time |

## Workload Types

Classify workloads as:

| Workload Type | Examples |
| --- | --- |
| Ingestion | API pulls, file loads, CDC, streams |
| Bronze storage | raw retention, metadata, partitioning |
| Silver transformation | cleaning, conformance, dedup, identity, SCD |
| Gold transformation | aggregates, marts, metrics |
| Quality validation | tests, profiling, reconciliation |
| Semantic/query | BI model, metrics layer, analyst query |
| Dashboard/reporting | visual consumption |
| API/application serving | low-latency read model |
| ML/AI serving | features, inference, training datasets |
| Export/reverse ETL | file delivery, SaaS writeback |
| Monitoring/observability | logs, metrics, audit evidence |

## HALT — Workload Priority

Stop if workload priority is unclear.

### Decision needed

Which workloads should be optimized first?

### Options

A. P1 SLA-bound workflows  
B. P1 consumer-facing serving outputs  
C. Highest-cost workflows  
D. Slowest workflows  
E. Most frequently queried datasets  
F. Contracted outputs only  
G. Known bottlenecks only  
H. Custom priority  

### Required response

Choose one or more options.

## HALT — Baseline Measurement

Stop if optimization lacks measurement baseline.

### Decision needed

What baseline should be captured before optimization?

### Options

A. Runtime duration by workflow/task  
B. Query latency and concurrency  
C. Compute usage/capacity usage  
D. Storage size and growth rate  
E. Scanned data / bytes processed  
F. API calls and rate limit usage  
G. Data quality check runtime/cost  
H. Dashboard load time  
I. Cost by workflow/dataset/output  
J. No baseline yet — mark Draft and collect first  

### Required response

Choose one or more options.

## HALT — Cost and Budget Constraint

Stop if budget or cost boundary is unclear.

### Decision needed

Approve cost constraint or FinOps guardrail.

### Options

A. No formal budget yet; monitor only  
B. Soft budget alert  
C. Hard budget/capacity guardrail  
D. Cost per run target  
E. Cost per dataset/output target  
F. Cost per consumer/query target  
G. Monthly project budget target  
H. Custom cost boundary  

### Required response

Choose A/B/C/D/E/F/G/H and specify value if known.

## HALT — Performance SLA Target

Stop if performance target is unclear.

### Decision needed

Approve performance target.

### Options

A. Workflow runtime target  
B. Data freshness target  
C. Query latency target  
D. Dashboard load target  
E. API latency target  
F. Export delivery window  
G. ML feature availability window  
H. Best-effort only  
I. Custom target  

### Required response

Choose one or more options and specify target if known.

## HALT — Storage Optimization Strategy

Stop if storage optimization may affect retention, lineage, audit, or replay.

### Decision needed

Approve storage strategy.

### Options

A. Keep raw Bronze immutable for replay  
B. Compact small files periodically  
C. Partition by approved access pattern  
D. Cluster/Z-order/sort by common filters where platform supports it  
E. Tier old data to cheaper storage  
F. Retain aggregates and archive details after retention period  
G. Drop unnecessary duplicate datasets  
H. Keep Draft pending governance/retention review  

### Required response

Choose one or more options.

## HALT — Compute Optimization Strategy

Stop if compute optimization affects SLA, reliability, or cost.

### Decision needed

Approve compute strategy.

### Options

A. Use right-sized compute for P1 workflows  
B. Scale up temporarily for SLA-bound jobs  
C. Scale down/stop compute when idle  
D. Use ephemeral compute where appropriate  
E. Separate interactive and batch compute  
F. Use reserved capacity/committed capacity if usage is stable  
G. Use serverless/pay-per-query for variable workload  
H. Keep Draft pending platform cost review  

### Required response

Choose one or more options.

## HALT — Query and Serving Optimization

Stop if query/serving performance is unclear.

### Decision needed

Approve query/serving optimization.

### Options

A. Use Gold aggregates for common queries  
B. Use semantic model optimization/certified measures  
C. Materialize expensive joins  
D. Precompute high-use metrics  
E. Cache dashboard/API responses where freshness allows  
F. Reduce exposed fields for serving outputs  
G. Add query pattern monitoring before tuning  
H. Keep Draft pending usage data  

### Required response

Choose one or more options.

## HALT — Caching and Materialization

Stop if caching/materialization may create stale or insecure outputs.

### Decision needed

Approve caching/materialization policy.

### Options

A. No cache/materialization for MVP  
B. Cache dashboard/report outputs with freshness display  
C. Materialize Gold aggregates  
D. Materialize API read models  
E. Cache semantic model where platform supports it  
F. Cache only non-sensitive outputs  
G. Invalidate cache after successful publish  
H. Keep Draft pending freshness/security review  

### Required response

Choose one or more options.

## HALT — Quality Cost Trade-Off

Stop if quality checks are costly or slow.

### Decision needed

Approve quality optimization.

### Options

A. Keep all P1 Blocking rules mandatory  
B. Run expensive checks less frequently if non-blocking  
C. Sample/profile only for P2/P3 rules  
D. Push simple checks earlier in pipeline  
E. Reuse quality evidence across gates where safe  
F. Optimize rule implementation later, not weaken rule  
G. Keep Draft pending owner approval  

### Required response

Choose one or more options.

## HALT — Retention Lifecycle and Storage Tiering

Stop if storage reduction affects audit, replay, privacy, or governance.

### Decision needed

Approve retention/storage tiering decision.

### Options

A. Follow Phase 19 retention policy exactly  
B. Tier old raw data to cheaper storage  
C. Archive historical Gold outputs  
D. Keep only aggregates after detail retention expires  
E. Delete/anonymize according to privacy rule  
F. Keep replay-critical data despite cost  
G. Keep Draft pending governance approval  

### Required response

Choose one or more options.

## HALT — Cost Monitoring and Budget Guardrails

Stop if cost monitoring is missing.

### Decision needed

Approve cost monitoring signals.

### Options

A. Cost by workflow  
B. Cost by dataset/output  
C. Cost by compute pool/capacity  
D. Storage growth cost  
E. Query/bytes scanned cost  
F. API/egress cost  
G. Alert on cost spike  
H. Hard stop or graceful degradation on excessive cost  
I. Custom cost signal  

### Required response

Choose one or more options.

## HALT — Scalability and Capacity Planning

Stop if data growth or consumer growth is expected but planning is unclear.

### Decision needed

Approve scalability plan.

### Options

A. Monitor growth only  
B. Plan for expected volume growth  
C. Plan for peak refresh windows  
D. Plan for concurrency growth  
E. Plan for additional serving channels  
F. Capacity review before production release  
G. Capacity review on threshold breach  
H. Custom plan  

### Required response

Choose one or more options.

## HALT — Trade-Off Approval

Stop if optimization changes affect SLA, cost, security, quality, or user experience.

### Decision needed

Approve trade-off.

### Required fields

- optimization decision;
- expected benefit;
- cost impact;
- performance impact;
- SLA impact;
- quality impact;
- security/governance impact;
- rollback option.

### Options

A. Approve trade-off  
B. Approve only for MVP  
C. Reject trade-off  
D. Route back to affected upstream phase  
E. Keep Draft pending owner approval  

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

- optimization scope and principles are defined;
- workload inventory is created;
- cost and performance drivers are documented;
- baseline measurement plan is defined;
- storage, compute, ingestion, transformation, query, serving, orchestration, quality, caching, retention, monitoring, and scalability strategies are documented;
- trade-offs are explicit;
- draft cost/performance specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
