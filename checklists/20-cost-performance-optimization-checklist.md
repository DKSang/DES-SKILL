# Checklist — Cost and Performance Optimization

## Required Context

- [ ] Architecture Decision Record exists or Draft continuation is accepted.
- [ ] Ingestion Specification exists or Draft continuation is accepted.
- [ ] Bronze/Silver/Gold specifications are considered.
- [ ] Data Contract Specification is considered.
- [ ] Transformation Specification is considered.
- [ ] Data Quality Specification is considered.
- [ ] Orchestration and Observability Specification is considered.
- [ ] Semantic Model Specification is considered.
- [ ] Serving Layer Specification is considered.
- [ ] Lineage and Metadata Specification is considered.
- [ ] Governance and Security Specification exists or Draft continuation is accepted.
- [ ] P1 workloads are identified.
- [ ] Freshness/SLA and serving expectations are considered.
- [ ] Security/governance constraints are considered.

## Optimization Coverage

- [ ] Optimization scope is defined.
- [ ] Optimization design principles are defined.
- [ ] Workload inventory is created.
- [ ] Cost driver inventory is created.
- [ ] Performance driver inventory is created.
- [ ] Baseline measurement plan is documented.
- [ ] Storage optimization strategy is documented.
- [ ] Compute optimization strategy is documented.
- [ ] Ingestion optimization strategy is documented.
- [ ] Transformation optimization strategy is documented.
- [ ] Query and semantic optimization strategy is documented.
- [ ] Serving performance strategy is documented.
- [ ] Orchestration runtime optimization is documented.
- [ ] Data quality cost/performance considerations are documented.
- [ ] Caching/materialization strategy is documented.
- [ ] Partitioning/clustering/file sizing expectations are documented.
- [ ] Incremental/recomputation strategy is documented.
- [ ] Retention/storage tiering is documented.
- [ ] Cost monitoring/budget guardrails are documented.
- [ ] Performance monitoring/SLOs are documented.
- [ ] Scalability/capacity planning is documented.
- [ ] Trade-off decisions are documented.

## Safety and Trust

- [ ] Optimization does not weaken approved contracts without explicit decision.
- [ ] Optimization does not remove P1 quality gates silently.
- [ ] Optimization does not violate governance/security policies.
- [ ] Optimization does not break retention/audit requirements.
- [ ] Caching/materialization has freshness and security handling.
- [ ] Cost monitoring includes high-risk cloud cost drivers.
- [ ] Performance targets are measurable.
- [ ] Baseline gaps are marked Draft/Risk.
- [ ] Risks are documented.
- [ ] Assumptions are explicitly marked.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not implement SQL/Python/dbt optimization code.
- [ ] The artifact does not resize infrastructure.
- [ ] The artifact does not configure autoscaling.
- [ ] The artifact does not implement caching.
- [ ] The artifact does not deploy cost controls.
- [ ] Cost savings are not claimed without evidence.
- [ ] Performance improvement is not claimed without evidence.
- [ ] Premature optimization is avoided.

## HALT Validation

- [ ] Missing governance/operations context HALT resolved or artifact remains Draft.
- [ ] Optimization scope HALT resolved or artifact remains Draft.
- [ ] Workload priority HALT resolved or workload remains Draft.
- [ ] Baseline measurement HALT resolved or optimization remains Draft.
- [ ] Cost/budget HALT resolved or guardrail remains Draft.
- [ ] Performance/SLA target HALT resolved or target remains Draft.
- [ ] Storage optimization HALT resolved or strategy remains Draft/Risk.
- [ ] Compute optimization HALT resolved or strategy remains Draft/Risk.
- [ ] Query/serving optimization HALT resolved or strategy remains Draft.
- [ ] Caching/materialization HALT resolved or strategy remains Draft/Risk.
- [ ] Quality cost trade-off HALT resolved or rule remains protected.
- [ ] Retention/storage tiering HALT resolved or strategy remains Draft/Risk.
- [ ] Cost monitoring HALT resolved or monitoring remains Draft.
- [ ] Scalability/capacity HALT resolved or plan remains Draft.
- [ ] Trade-off approval HALT resolved or decision remains Draft.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
