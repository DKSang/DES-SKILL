# Architecture Review Checklist

This checklist is used during Phase 07 (Architecture Design) to evaluate whether the proposed architecture meets engineering standards, business SLAs, and operational best practices.

---

## 1. Problem-First Design
- [ ] **No tool-first decisions**: Architecture choices are driven by business SLA and scale requirements — not tool preferences.
- [ ] **Data maturity aligned**: The proposed complexity is appropriate for the organization's data maturity level (avoid over-engineering at Level 1).

## 2. Storage & Compute
- [ ] **Compute-storage separation confirmed**: Data persisted on durable object storage; compute clusters are stateless and scalable independently.
- [ ] **Open format selected**: Data stored in open, tool-agnostic formats (Delta Lake, Iceberg, Parquet) to avoid storage-layer vendor lock-in.
- [ ] **Partitioning & clustering designed**: Primary and secondary access patterns documented; partition cardinality within 100MB–1GB target range.
- [ ] **Compute-storage in same region**: No inter-region egress costs for primary workloads.

## 3. Reversibility & Decision Quality
- [ ] **All major decisions classified**: Each significant architectural choice is labeled as Reversible (two-way door) or Irreversible (one-way door).
- [ ] **ADRs logged**: Decisions documented in `07b-architecture-decision-record-template.md` with options, rationale, and rollback strategy.
- [ ] **TCO estimated**: Rough Total Cost of Ownership calculated for each candidate tool (direct cost + operational burden).

## 4. Six Undercurrents Coverage
- [ ] **Security**: Credentials managed via secrets manager; no hardcoded keys; PII access restricted to authorized roles.
- [ ] **Data Management**: Metadata catalog and column lineage strategy defined.
- [ ] **DataOps**: CI/CD pipeline and automated testing strategy identified.
- [ ] **Orchestration**: Scheduler and DAG management tool selected; retry and monitoring strategies defined.
- [ ] **Software Engineering**: Code modularity, version control, and PR review process established.

## 5. Anti-Pattern Detection
- [ ] **No streaming without justification**: Streaming chosen only if business SLA is < 5 min latency. Otherwise batch is preferred.
- [ ] **No monolithic single-cluster architecture**: Components are loosely coupled; storage/compute/orchestration are independently scalable.
- [ ] **No hardcoded credentials**: Secret management reviewed in architecture plan.

## 6. Trade-off Documentation
- [ ] **Rejected options documented**: At least 2 alternatives were considered; rejection rationale is recorded.
- [ ] **Risk register created**: Identified risks have owners and mitigation plans.
