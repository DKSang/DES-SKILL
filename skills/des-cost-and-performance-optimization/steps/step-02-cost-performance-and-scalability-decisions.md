# Step 02 — Cost, Performance, Scalability, and Evidence Decisions

## Goal

Define workload priorities, cost drivers, performance drivers, baseline measurements, storage/compute/ingestion/transformation/query/serving optimization strategies, monitoring, budget guardrails, scalability planning, trade-offs, and supporting evidence.

This step prepares the Cost and Performance Optimization Specification and identifies which optimization decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Phase 19 to Phase 20 handoff, if available
- Phase 19 evidence pack, if available
- Architecture Decision Record
- Ingestion Specification
- Transformation Specification
- Data Quality Specification
- Orchestration and Observability Specification
- Serving Layer Specification
- Governance and Security Specification
- User answers from HALT points
- Existing profiling, runtime logs, warehouse/lakehouse metrics, query plans, or cost reports if available

---

## Actions

1. Define optimization scope and non-scope.
2. Define optimization design principles.
3. Create workload inventory.
4. Prioritize workloads.
5. Create cost driver inventory.
6. Create performance driver inventory.
7. Define baseline measurement plan.
8. Define storage optimization strategy.
9. Define compute optimization strategy.
10. Define ingestion optimization strategy.
11. Define transformation optimization strategy.
12. Define query and semantic model optimization strategy.
13. Define serving performance strategy.
14. Define orchestration runtime optimization.
15. Define data quality cost/performance considerations.
16. Define caching and materialization strategy.
17. Define partitioning, clustering, and file sizing expectations.
18. Define incremental processing and recomputation strategy.
19. Define retention lifecycle and storage tiering.
20. Define cost monitoring and budget guardrails.
21. Define performance monitoring and SLOs.
22. Define scalability and capacity planning.
23. Define trade-off decisions.
24. Map each critical cost/performance decision to evidence.
25. Mark unsupported optimization claims as `Draft`, `Risk`, `Blocked`, `Deferred`, `Unknown`, or `Waived with reason`.
26. Identify required Phase 18 support work.
27. Use HALT checkpoints for unresolved decisions.
28. Prepare draft Cost and Performance Optimization Specification content.
29. Prepare content for the Phase 20 Support Plan.

---

## Optimization Principles

Use these defaults unless overridden:

| Principle | Meaning |
|---|---|
| Measure first | Do not optimize without baseline evidence |
| P1 first | Optimize business-critical workloads first |
| Fit-for-workload | Match storage/compute/model to access pattern |
| Incremental by default where safe | Avoid full refresh when incremental is correct |
| Avoid hidden cost | Track query, compute, egress, storage, API, monitoring, and quality costs |
| Optimize without breaking trust | Do not weaken contracts, quality, security, or lineage silently |
| Make trade-offs explicit | Cost/performance/SLA/security trade-offs need approval |
| Monitor continuously | Optimization is ongoing, not one-time |
| No implementation here | Design strategy and targets, do not tune code or infrastructure |

---

## Workload Types

Classify workloads as:

| Workload Type | Examples |
|---|---|
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

---

## Cost and Performance Evidence Mapping

For every P1 workload, capture evidence status.

| Optimization Field | Evidence Status | Allowed Output |
|---|---|---|
| Phase 19 handoff | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Optimization scope | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Workload inventory | Confirmed / Partial / Missing / Waived | Approved / Draft / Risk |
| Workload priority | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Cost drivers | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Performance drivers | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Baseline measurement | Confirmed / Plan only / Missing / Waived | Approved / Draft / Risk |
| Storage optimization | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Compute optimization | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Ingestion optimization | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Transformation optimization | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Query/semantic optimization | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Serving performance | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Orchestration runtime | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Quality cost/performance | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Caching/materialization | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk |
| Partitioning/clustering/file sizing | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk |
| Incremental/recomputation | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Retention/storage tiering | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Cost monitoring/budget guardrail | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Performance monitoring/SLO | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Scalability/capacity plan | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk |
| Trade-off decision | Confirmed / Assumed / Missing / Waived | Approved / Draft / Risk / Blocked |

---

## HALT — Workload Priority

Stop if workload priority is unclear.

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

---

## HALT — Baseline Measurement

Stop if optimization lacks measurement baseline.

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

---

## HALT — Cost and Budget Constraint

Stop if budget or cost boundary is unclear.

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

---

## HALT — Performance SLA Target

Stop if performance target is unclear.

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

---

## HALT — Storage Optimization Strategy

Stop if storage optimization may affect retention, lineage, audit, or replay.

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

---

## HALT — Compute Optimization Strategy

Stop if compute optimization affects SLA, reliability, or cost.

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

---

## HALT — Ingestion Optimization Strategy

Stop if ingestion optimization is unclear or may affect source limits/freshness.

### Options

A. Incremental extraction where source supports it  
B. Batch window tuning  
C. Source rate-limit-aware scheduling  
D. Parallelize source ingestion only where safe  
E. Reduce redundant pulls through checkpointing  
F. Use compression and efficient landing format  
G. Keep full refresh only for small/static sources  
H. Keep Draft pending source constraint review  

### Required response

Choose one or more options.

---

## HALT — Transformation Optimization Strategy

Stop if transformation optimization is unclear.

### Options

A. Incremental transformations where safe  
B. Recompute only affected partitions/windows  
C. Materialize expensive intermediate results  
D. Push filters/projections earlier where safe  
E. Separate heavy batch transforms from interactive workloads  
F. Optimize join strategy later using profiling/query plan evidence  
G. Keep Draft pending profiling baseline  

### Required response

Choose one or more options.

---

## HALT — Query and Serving Optimization

Stop if query/serving performance is unclear.

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

---

## HALT — Orchestration Runtime Optimization

Stop if workflow runtime optimization is unclear.

### Options

A. Parallelize independent tasks  
B. Sequence dependent tasks strictly  
C. Separate critical path from non-critical monitoring/profiling tasks  
D. Run expensive non-blocking checks asynchronously  
E. Use retry/backoff according to Phase 15 policy  
F. Avoid over-parallelization that increases cost/source pressure  
G. Keep Draft pending runtime baseline  

### Required response

Choose one or more options.

---

## HALT — Caching and Materialization

Stop if caching/materialization may create stale or insecure outputs.

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

---

## HALT — Quality Cost Trade-Off

Stop if quality checks are costly or slow.

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

---

## HALT — Retention Lifecycle and Storage Tiering

Stop if storage reduction affects audit, replay, privacy, or governance.

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

---

## HALT — Cost Monitoring and Budget Guardrails

Stop if cost monitoring is missing.

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

---

## HALT — Performance Monitoring and SLOs

Stop if performance monitoring is missing.

### Options

A. Workflow runtime SLO  
B. Freshness SLO  
C. Query latency SLO  
D. Dashboard load SLO  
E. API latency SLO  
F. Export delivery SLO  
G. Quality check runtime SLO  
H. Capacity utilization SLO  
I. Custom performance signal  

### Required response

Choose one or more options.

---

## HALT — Scalability and Capacity Planning

Stop if data growth or consumer growth is expected but planning is unclear.

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

---

## HALT — Trade-Off Approval

Stop if optimization changes affect SLA, cost, security, quality, or user experience.

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

---

## Completion Criteria

This step is complete when:

- optimization scope and principles are defined;
- workload inventory is created;
- workload priority is documented;
- cost and performance drivers are documented;
- baseline measurement plan is defined;
- storage, compute, ingestion, transformation, query, serving, orchestration, quality, caching, retention, monitoring, and scalability strategies are documented;
- trade-offs are explicit;
- evidence mapping is prepared;
- required support work is identified;
- risks and assumptions are explicit;
- draft cost/performance specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
