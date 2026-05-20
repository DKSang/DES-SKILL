---
name: de-serving-layer-design
description: Use when designing the consumer-facing serving layer including dashboards, APIs, exports, reverse ETL, AI agent tools, and feature serving for ML.
---

# de-serving-layer-design

## When To Use

Use after semantic model design and before production deployment. Use when data products need to be accessed by BI tools, applications, AI agents, ML systems, or operational systems.

## Purpose

Design the consumer-facing serving interface that delivers certified data products with the correct access pattern, performance, and SLA — matching each consumer type to the optimal serving mechanism.

## Inputs Required

- Semantic model design (`16-semantic-model-design.md`).
- Data product definitions (`04-data-product-definition.md`).
- Consumer SLA requirements (`03-requirements-and-kpis.md`).
- Access control policy (`19-governance-and-security.md`).

## Decision Matrix — Serving Interface Selection

| Consumer Type | Recommended Serving Interface | Key Design Consideration |
| :--- | :--- | :--- |
| Business analysts, self-serve BI | **Power BI / Looker / Superset** connecting to Semantic Layer | Partition pruning; pre-aggregated Gold for performance |
| Applications requiring real-time lookup | **REST API** (FastAPI, Azure Function) with cache | Response time SLA; cache TTL; rate limiting |
| ML model training | **Feature Store** (Feast, Databricks Feature Store) | Point-in-time correctness to prevent label leakage |
| Operational system sync (CRM, CDP) | **Reverse ETL** (Hightouch, Census) | Dedup and upsert logic; API rate limit awareness |
| AI agent / LLM grounding | **Vector store** (Azure AI Search, Pinecone) or **Structured context** | Chunking strategy; metadata filtering |
| File delivery to partners | **SFTP drop / Azure Blob Export** | PGP encryption; delivery manifest; SLA confirmation |

## Decision Matrix — Query Performance Strategy

| Problem | Solution |
| :--- | :--- |
| Dashboard P90 > 10 sec | Add partition pruning; create pre-aggregated Gold summary table |
| API P99 > 500ms | Add Redis cache with appropriate TTL; use read replica |
| High concurrent dashboard user load | Enable query result caching in BI tool; add connection pooling |
| Feature serving P99 > 100ms | Pre-compute and materialize features in Feature Store; avoid on-demand joins |

## Step-By-Step Process

1. Map each data product to its consumer type using the Decision Matrix.
2. Choose the serving interface per consumer type.
3. Design the access pattern for each interface (query filters, API endpoints, export schedule).
4. Define performance targets and the optimization strategy per interface.
5. Confirm RBAC and RLS rules are applied at the serving layer.
6. Define monitoring: P50/P90/P99 response time, error rate, cache hit rate.
7. Document consumer onboarding guide (how to connect, what the data means, known limitations).

## Output File

Write the final artifact to:

`.agents/des-skill/output/17-serving-layer-design.md`

Use the example output format below because this skill does not have a dedicated template file.

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Consumer-to-interface mapping.
- Performance targets and optimization strategy per interface.
- Access control confirmation (RBAC/RLS applied at serving layer).
- Consumer onboarding guide outline.
- Monitoring signals per interface.

## Quality Checklist

- [ ] Every data product has a serving interface matched to its consumer type.
- [ ] Dashboard P90 latency target is met in staging load test.
- [ ] API rate limiting and authentication are configured.
- [ ] PII is confirmed absent from all serving layer outputs — or access-controlled via RLS.
- [ ] Consumer onboarding guide exists for all consumer teams.
- [ ] No direct Gold or Silver table access for BI consumers — semantic layer is the entry point.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Giving BI consumers direct SQL access to Gold tables | Bypasses semantic layer; metric definitions diverge across tools |
| Building custom API for data a Semantic Layer could serve | Doubles maintenance burden; creates inconsistent metric definitions |
| No caching for high-frequency API endpoints | Repeated identical queries overwhelm the warehouse; latency spikes under load |
| ML training reading from Gold directly without point-in-time joins | Label leakage: features from the future contaminate the model |
| File exports without delivery manifest | Partner cannot verify completeness; missing files go undetected |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | RLS enforced at semantic layer; API authentication configured; file exports encrypted |
| Data Management | Consumer onboarding guide includes data dictionary and known limitations |
| DataOps | Serving layer performance tested in staging before production; automated regression tests |
| Data Architecture | Serving interface choice (API vs. BI vs. reverse ETL) is architectural; documented in ADR if non-standard |
| Orchestration | Serving layer refresh triggered by upstream Gold refresh completion |
| Software Engineering | API versioning strategy defined; breaking changes follow semantic versioning |

## Handoff To The Next Skill

Next use `de-lineage-and-metadata` to document column-level lineage, register all datasets in the catalog, and assign stewardship.

## Example Output Format

```markdown
# Serving Layer Design
| Data Product | Consumer Type | Interface | Access Pattern | P90 Target | Auth Method |
| Regional Revenue Dashboard | BI Analysts | Power BI → Semantic Model | Filter by region, week | < 5 sec | OAuth 2.0 / RBAC |
## Performance Optimization Plan
## Consumer Onboarding Guides
## Monitoring Signals
```
