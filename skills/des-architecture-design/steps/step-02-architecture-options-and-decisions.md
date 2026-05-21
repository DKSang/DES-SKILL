# Step 02 — Architecture Options and Decisions

## Goal

Evaluate architecture options, make explicit architecture decisions, document trade-offs, and classify decisions by reversibility and risk.

## Required Inputs

- Confirmed context from Step 01
- Business Discovery Brief
- Business Question Catalog
- Requirements and KPI Catalog
- Data Product Specification
- Data Source Inventory
- Conceptual Domain Model
- User answers from HALT points
- Existing architecture notes, diagrams, cloud constraints, platform standards, or legacy architecture if available

## Actions

1. Define architecture goals.
2. Define architecture principles.
3. Identify architecture drivers:
   - product outputs;
   - source patterns;
   - domain model;
   - freshness/SLA;
   - quality/trust;
   - security/privacy;
   - cost/performance;
   - team capability;
   - operational maturity.
4. Identify candidate architecture options.
5. Evaluate options against requirements and constraints.
6. Decide:
   - target platform/environment direction;
   - storage strategy;
   - compute strategy;
   - batch/streaming/event strategy;
   - layer strategy;
   - integration pattern;
   - serving direction;
   - orchestration boundary;
   - observability direction;
   - security/privacy posture;
   - governance/metadata direction;
   - DataOps/software engineering direction;
   - build-versus-buy direction.
7. Record trade-offs and rejected options.
8. Classify decisions by reversibility.
9. Use HALT checkpoints for decisions the agent cannot safely infer.
10. Prepare draft ADR content.

## Hints

- Good architecture should be loosely coupled, secure, operable, scalable enough, cost-aware, and aligned to product value.
- Do not choose “big data” patterns just because they sound professional.
- Do not choose streaming if batch meets the freshness requirement.
- Do not choose custom build if managed/common components meet the need.
- Do not centralize everything unless governance or operational simplicity requires it.
- Do not decentralize everything unless ownership, contracts, and platform maturity can support it.
- Architecture should make later ingestion, storage, transformation, serving, testing, and operations easier.
- When uncertain, prefer reversible decisions and staged rollout.
- Tool choices can be captured as constraints or candidate options, but architecture decisions should explain why.

## Architecture Option Types

Consider these generic option categories where relevant:

| Option Type | Examples |
| --- | --- |
| Data warehouse | Centralized analytics warehouse |
| Data lake | Raw and curated file/object storage pattern |
| Lakehouse | Lake storage with table format and analytics capabilities |
| Medallion/layered architecture | Raw/Bronze, cleaned/Silver, curated/Gold layers |
| Event-driven architecture | Event production, routing, consumption, loosely coupled services |
| Batch-first architecture | Scheduled extraction and processing |
| Streaming-first architecture | Continuous event processing |
| Hybrid batch + streaming | Batch for most data, streaming for selected use cases |
| Data mesh-inspired | Domain-owned products with governance and contracts |
| Modern data stack | Managed ingestion, warehouse/lakehouse, transformation, BI/semantic tooling |
| Local-first development | Local validation and iteration before cloud/integration deployment |
| Cloud-first managed platform | Managed services prioritized to reduce operational burden |
| Brownfield migration | Incremental replacement of existing architecture |
| Greenfield architecture | New design with fewer legacy constraints |

## Decision Record Standard

Each architecture decision should include:

| Field | Required? |
| --- | --- |
| Decision ID | Required |
| Decision | Required |
| Context | Required |
| Options considered | Required |
| Chosen option | Required |
| Rationale | Required |
| Trade-offs | Required |
| Reversibility | Required |
| Impacted phases | Required |
| Status | Required |

Allowed statuses:

```text
Proposed | Approved | Deferred | Rejected | Superseded
```

Reversibility classes:

```text
Easy to reverse | Moderate to reverse | Hard to reverse
```

## Decision Area 1 - Target Platform and Deployment

Approve the high-level platform deployment direction for the project.

### HALT - Target Platform Direction

Stop if target platform or deployment direction is unclear.

#### Why this matters

Platform direction affects storage, compute, orchestration, security, cost, CI/CD, and operational model.

#### Decision needed

Approve platform direction.

#### Options

A. Cloud-first managed platform  
B. On-premises or self-managed platform  
C. Hybrid cloud/on-prem  
D. Multi-cloud  
E. Local-first development with cloud deployment  
F. Platform not yet selected — keep architecture vendor-neutral  
G. Custom direction  

#### Required response

Choose A/B/C/D/E/F/G.

## Decision Area 2 - Environment Strategy

Establish dev, test, and production boundaries for pipelines and assets.

### HALT - Environment Strategy Decision

Stop if development, testing, and production boundaries are unclear.

#### Why this matters

Environment strategy affects CI/CD, access control, cost, testing, promotion, and release safety.

#### Decision needed

Approve environment strategy.

#### Options

A. Single environment for MVP  
B. Dev and Prod only  
C. Dev/Test/Prod  
D. Feature/local → Dev → Test → Prod  
E. Per-domain or per-product environments  
F. Custom strategy  

#### Required response

Choose A/B/C/D/E/F.

## Decision Area 3 - Storage Strategy

Decide the storage format, partitioning, and layout patterns for all logical layers.

### HALT - Storage Strategy Decision

Stop if storage direction is unclear.

#### Why this matters

Storage strategy affects cost, governance, retention, table formats, schema evolution, compute separation, and downstream access.

#### Decision needed

Approve storage strategy.

#### Options

A. Data warehouse-centered  
B. Data lake-centered  
C. Lakehouse-centered  
D. Object storage + query engine  
E. Existing platform storage  
F. Hybrid storage strategy  
G. Custom strategy  

#### Required response

Choose A/B/C/D/E/F/G.

## Decision Area 4 - Compute Strategy

Select the compute engine, scaling model, and library dependencies for transformation pipelines.

### HALT - Compute Strategy Decision

Stop if compute strategy is unclear.

#### Why this matters

Compute strategy affects development speed, performance, operational burden, cost, scalability, and tool compatibility.

#### Decision needed

Approve compute strategy.

#### Options

A. SQL warehouse compute  
B. Spark/distributed compute  
C. Python/local compute for development, cloud compute for integration  
D. Stream processing compute  
E. Serverless/managed compute  
F. Containerized/custom compute  
G. Hybrid compute strategy  

#### Required response

Choose A/B/C/D/E/F/G.

## Decision Area 5 - Processing Latency and Event Strategy

Determine how freshness demands shape batch vs. stream processing.

### HALT - Batch, Streaming, or Event Strategy

Stop if data freshness or source generation pattern could imply batch, streaming, or event-driven architecture.

#### Why this matters

Batch, streaming, and event-driven designs have different cost, complexity, correctness, ordering, replay, and operations implications.

#### Decision needed

Approve processing and event strategy.

#### Options

A. Batch-first  
B. Streaming-first  
C. Event-driven architecture  
D. Hybrid batch + selected streaming/events  
E. Manual/on-demand for MVP  
F. Defer streaming/events until requirements justify it  

#### Recommendation

Choose A or F when freshness requirements are daily/periodic.  
Choose D when only selected use cases require low latency or events.

#### Required response

Choose A/B/C/D/E/F.

## Decision Area 6 - Logical Data Layer Strategy

Establish conformed, intermediate, and presentation data zones.

### HALT - Layer Strategy Decision

Stop if layer architecture is unclear.

#### Why this matters

Layer strategy affects ingestion, storage, transformations, quality gates, contracts, and consumer trust.

#### Decision needed

Approve logical data layer strategy.

#### Options

A. Raw → Cleaned → Curated layers  
B. Bronze → Silver → Gold / Medallion layers  
C. Source-aligned → Domain-aligned → Product-aligned layers  
D. Warehouse staging → marts pattern  
E. Virtualized/federated access with limited materialization  
F. Custom strategy  

#### Required response

Choose A/B/C/D/E/F.

## Decision Area 7 - Data Serving Architecture

Decide how consumers will query and access finalized data assets.

### HALT - Serving Direction Approval

Stop if serving direction is unclear for P1 outputs.

#### Why this matters

Serving direction affects Gold design, semantic model, API design, access control, contracts, performance, and user experience.

#### Decision needed

Approve high-level serving direction.

#### Options

A. Direct curated tables/datasets  
B. Semantic/metrics layer  
C. Dashboard/reporting layer  
D. API/application-facing serving  
E. ML/AI feature or training dataset  
F. Data sharing/export  
G. Reverse ETL/operational activation  
H. Multiple outputs by consumer  

#### Required response

Choose one or more options and mark P1 serving path.

## Decision Area 8 - Security and Privacy Posture

Define security, privacy, and compliance guidelines for storage and transport.

### HALT - Security and Privacy Policy

Stop if the architecture handles sensitive, regulated, confidential, or customer-impacting data and security posture is unclear.

#### Why this matters

Security must be designed into architecture, not bolted on later.

#### Decision needed

Approve security/privacy posture.

#### Options

A. Public/non-sensitive data posture  
B. Internal non-sensitive data posture  
C. Confidential business data posture  
D. PII/privacy-controlled posture  
E. Regulated/compliance-grade posture  
F. Unknown — route to governance/security before implementation  

#### Required response

Choose A/B/C/D/E/F.

## Decision Area 9 - Cost and Operational Burden Constraints

Balance infrastructure budget limits and team maintenance overhead.

### HALT - Cost and FinOps Constraint

Stop if cost or capacity constraints may affect architecture.

#### Why this matters

Architecture choices affect long-term total cost of ownership and opportunity cost.

#### Decision needed

Approve cost posture.

#### Options

A. Lowest-cost MVP  
B. Balanced cost and reliability  
C. Performance-first, cost monitored  
D. Enterprise governance/capacity-controlled  
E. Unknown — capture as risk and require review  

#### Required response

Choose A/B/C/D/E.

### HALT - Team Capability and Operational Gate

Stop if the proposed architecture may exceed team capability.

#### Why this matters

A technically elegant architecture can fail if the team cannot operate, debug, secure, or evolve it.

#### Decision needed

Approve operational complexity level.

#### Options

A. Low-complexity managed services only  
B. Moderate complexity with common components  
C. Advanced architecture with explicit operational ownership  
D. Experimental/learning architecture  
E. Unknown — reduce complexity or keep as Draft  

#### Required response

Choose A/B/C/D/E.

## Decision Area 10 - Hard-to-Reverse Architectural Commitments

Evaluate decisions with massive downstream lock-in or migration costs.

### HALT - Hard-To-Reverse Architectural Decision

Stop before approving any hard-to-reverse architecture decision.

#### Trigger examples

* Vendor lock-in with high migration cost
* Production platform commitment
* Large data migration
* Cross-domain governance model
* Streaming-first architecture
* Customer-facing API architecture
* Sensitive data storage strategy
* Enterprise-wide environment model

#### Decision needed

Should this decision be approved now?

#### Options

A. Approve hard-to-reverse decision with rationale  
B. Choose more reversible interim decision  
C. Defer decision until more evidence exists  
D. Run spike/proof-of-concept first  
E. Route back to requirements/source/product phase  

#### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

* architecture goals and principles are drafted;
* target architecture overview is drafted;
* major decisions are captured in ADR format;
* options and trade-offs are documented;
* environment, storage, compute, layer, serving, security, governance, DataOps, and cost directions are documented;
* hard-to-reverse decisions are explicitly approved or deferred;
* risks and assumptions are documented;
* draft ADR content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
