# Step 01 — Context and Readiness

## Goal

Confirm that Cost and Performance Optimization is the correct next step and that upstream architecture, operations, governance, serving, transformation, and quality context is available.

## Required Inputs

Look for:

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
- workflow status file;
- P1 workloads;
- expected data volume and growth;
- expected query patterns;
- expected refresh frequency;
- freshness/SLA expectations;
- serving latency expectations;
- platform/capacity constraints;
- cost constraints;
- runtime/performance monitoring signals;
- known bottlenecks and risks.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize:
   - Architecture Decision Record;
   - Ingestion Specification;
   - Bronze Layer Specification;
   - Silver Layer Specification;
   - Gold Layer Specification;
   - Data Contract Specification;
   - Transformation Specification;
   - Data Quality Specification;
   - Orchestration and Observability Specification;
   - Semantic Model Specification;
   - Serving Layer Specification;
   - Lineage and Metadata Specification;
   - Governance and Security Specification.
4. Extract:
   - P1 workloads and serving outputs;
   - high-cost workflows;
   - high-latency queries or serving paths;
   - storage growth risks;
   - expensive transformations;
   - quality rules that may be costly;
   - freshness/SLA constraints;
   - security/governance constraints that affect optimization;
   - monitoring signals already defined;
   - missing baseline metrics.
5. Check whether existing `20-cost-performance-optimization-specification.md` exists.
6. Decide whether to create a new optimization specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Do not optimize without knowing what matters.
- P1 workloads and consumer-facing outputs should be optimized first.
- Optimization should start with measurement.
- Cost and performance are connected: faster is often more expensive, cheaper may violate SLA.
- Storage optimization can conflict with retention/audit needs.
- Caching can improve speed but may introduce stale data or security exposure.
- Materialization can reduce query cost but increase storage and refresh cost.
- Query tuning should be guided by actual query patterns.
- Quality checks can be optimized, but not silently weakened.

## Cost and Performance Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Workload | Which workflow/query/output needs optimization? |
| Priority | Is it P1, P2, or exploratory? |
| Cost | What drives cost: compute, storage, query, egress, API, orchestration, quality checks? |
| Performance | What is slow: ingestion, transformation, query, dashboard, API, ML serving? |
| Baseline | What current metric proves the issue? |
| SLA | What target must be met? |
| Trade-off | What can be changed without breaking quality/security/contract? |
| Monitoring | How will cost/performance be tracked over time? |
| Owner | Who owns optimization decisions? |

## HALT — Missing or Weak Governance/Operations Context

Stop if upstream operations or governance context is missing or too weak to optimize safely.

### Trigger

Use this HALT if:

- `19-governance-security-specification.md` is missing;
- `15-orchestration-observability-specification.md` is missing;
- P1 workloads are unclear;
- monitoring signals are missing;
- access/security constraints are unclear;
- retention/audit constraints are missing;
- serving latency expectations are unclear.

### Decision needed

How should the agent proceed?

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

## HALT — Optimization Scope Required

Stop if optimization scope is unclear.

### Decision needed

What optimization scope should Phase 20 cover?

### Options

A. P1 workloads only  
B. P1 serving outputs only  
C. P1 ingestion + transformation + serving workflows  
D. All P1 + P2 workloads  
E. Full project FinOps and performance framework  
F. Known bottlenecks only  
G. Custom scope  

### Recommendation

Choose C for first-release readiness. Choose F if there are already known bottlenecks.

### Required response

Choose A/B/C/D/E/F/G.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- optimization scope is selected or marked unresolved;
- P1 workloads, cost drivers, performance drivers, SLAs, constraints, and missing baselines are extracted;
- the agent knows whether to create, update, or defer the optimization specification.

## Next Step

After completion, load only:

```text
steps/step-02-cost-performance-and-scalability-decisions.md
```
