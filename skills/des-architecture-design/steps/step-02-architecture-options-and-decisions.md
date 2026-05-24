# Step 02 — Architecture Options, Evidence, and Decisions

## Goal

Evaluate architecture options, make explicit architecture decisions, document trade-offs, classify decisions by reversibility and risk, and prepare architecture evidence for Phase 07 completion.

This step prepares the Architecture Decision Record and identifies which architecture decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Business Discovery Brief
- Business Question Catalog
- Requirements and KPI Catalog
- Data Product Specification
- Data Source Inventory
- Conceptual Domain Model
- Phase 06 to Phase 07 handoff, if available
- Phase 06 do-not-assume list
- User answers from HALT points
- Existing architecture notes, diagrams, cloud constraints, platform standards, or legacy architecture if available

---

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
   - environment strategy;
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
9. Map each architecture decision to evidence.
10. Mark unsupported architecture claims as `Proposed`, `Draft`, `Open`, `Risk`, `Deferred`, `Blocked`, or `Waived with reason`.
11. Identify required Phase 07 support work.
12. Use HALT checkpoints for decisions the agent cannot safely infer.
13. Prepare draft ADR content.
14. Prepare content for the Phase 07 Support Plan.

---

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
- Local-first development may be part of the architecture if it reduces feedback-loop cost and risk.
- Cloud platform choices should be justified by requirements, constraints, cost, governance, and team capability.
- Do not design physical schemas, detailed ingestion pipelines, transformations, dashboards, APIs, CI/CD files, or code.

---

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

---

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
| Evidence | Required |
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

---

## Architecture Evidence Mapping

For every major ADR decision, capture the evidence status.

| Architecture Field               | Evidence Status                        | Allowed Output                 |
| -------------------------------- | -------------------------------------- | ------------------------------ |
| Architecture driver traceability | Confirmed / Partial / Missing / Waived | Approved / Proposed / Risk     |
| Option comparison                | Complete / Partial / Missing / Waived  | Approved / Proposed / Deferred |
| Platform feasibility             | Confirmed / Assumed / Missing / Waived | Approved / Proposed / Risk     |
| Environment strategy             | Confirmed / Assumed / Missing / Waived | Approved / Proposed / Risk     |
| Storage/compute fit              | Confirmed / Assumed / Missing / Waived | Approved / Proposed / Risk     |
| Batch/stream/event fit           | Confirmed / Assumed / Missing / Waived | Approved / Proposed / Risk     |
| Layer strategy fit               | Confirmed / Assumed / Missing / Waived | Approved / Proposed / Risk     |
| Serving strategy fit             | Confirmed / Assumed / Missing / Waived | Approved / Proposed / Risk     |
| Security/privacy fit             | Confirmed / Assumed / Missing / Waived | Approved / Proposed / Risk     |
| Cost/operational burden          | Confirmed / Assumed / Missing / Waived | Approved / Proposed / Risk     |
| Reversibility/lock-in            | Confirmed / Partial / Missing / Waived | Approved / Proposed / Deferred |

---

## Phase 07 Required Support Work

Based on the architecture decisions above, prepare a support plan using these categories:

| Support Work                           | Required When                                          | Output           |
| -------------------------------------- | ------------------------------------------------------ | ---------------- |
| Phase 06 Handoff Review                | Always                                                 | Evidence pack    |
| Architecture Driver Traceability Check | Always                                                 | Evidence pack    |
| Architecture Option Comparison         | Major decisions exist                                  | Evidence pack    |
| Platform Feasibility Check             | Platform direction is selected or constrained          | Evidence pack    |
| Environment Strategy Check             | Always                                                 | Evidence pack    |
| Storage/Compute Fit Check              | Storage or compute strategy is selected                | Evidence pack    |
| Batch/Streaming/Event Fit Check        | Freshness/source patterns influence processing         | Evidence pack    |
| Layer Strategy Check                   | Layered architecture is proposed                       | Evidence pack    |
| Serving Strategy Check                 | P1 outputs require access/serving                      | Evidence pack    |
| Security/Privacy Architecture Check    | Any source/product has security/privacy implications   | Evidence pack    |
| Governance/Metadata Architecture Check | Product trust, lineage, contracts, or ownership matter | Evidence pack    |
| Cost and Operational Burden Check      | Always                                                 | Evidence pack    |
| Reversibility and Lock-In Check        | Major decisions exist                                  | Evidence pack    |
| Done Gate                              | Always before marking Done                             | Done Gate result |
| Handoff to Phase 08                    | Always before Phase 08                                 | Handoff file     |

---

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

---

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

---

## Decision Area 3 - Storage Strategy

Decide the storage direction and layout pattern for all logical layers.

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

---

## Decision Area 4 - Compute Strategy

Select the compute direction and scaling model for transformation pipelines.

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

---

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

---

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

---

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

---

## Decision Area 8 - Orchestration Boundary

Define what should be orchestrated and what should remain manual/local/external for this phase.

### HALT - Orchestration Boundary

Stop if orchestration ownership is unclear.

#### Why this matters

Orchestration affects reliability, retries, monitoring, cost, dependencies, and incident handling.

#### Options

A. Managed cloud pipeline orchestration
B. Notebook/job-based orchestration
C. dbt/job scheduler orchestration
D. External workflow orchestrator
E. Local/manual orchestration for MVP
F. Hybrid orchestration
G. Defer detailed orchestration to Phase 15

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 9 - Observability Direction

Define the high-level monitoring and observability direction.

### HALT - Observability Direction

Stop if the product trust expectation requires monitoring but observability is unclear.

#### Options

A. Basic run status and error logs
B. Pipeline metrics + freshness checks
C. Data quality + freshness + lineage monitoring
D. Production-grade monitoring and alerting
E. Compliance/audit-grade observability
F. Defer detailed design to Phase 15 with risks documented

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 10 - Security and Privacy Posture

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

---

## Decision Area 11 - Governance and Metadata Direction

Define high-level governance, metadata, catalog, lineage, and ownership direction.

### HALT - Governance and Metadata Direction

Stop if product trust, lineage, ownership, or contracts matter but governance direction is unclear.

#### Options

A. Lightweight documentation and owner register
B. Catalog + lineage + metadata conventions
C. Contract-aware governance with owners and change process
D. Enterprise governance platform direction
E. Defer governance tooling but document metadata requirements
F. Unknown — route to governance/security phase

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 12 - Cost and Operational Burden Constraints

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

---

## Decision Area 13 - Team Capability and Operational Gate

Stop if the proposed architecture may exceed team capability.

### HALT - Team Capability and Operational Gate

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

---

## Decision Area 14 - Hard-to-Reverse Architectural Commitments

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

---

## Completion Criteria

This step is complete when:

* architecture goals and principles are drafted;
* target architecture overview is drafted;
* major decisions are captured in ADR format;
* options and trade-offs are documented;
* environment, storage, compute, layer, serving, orchestration, observability, security, governance, DataOps, and cost directions are documented;
* hard-to-reverse decisions are explicitly approved or deferred;
* evidence mapping is prepared;
* required support work is identified;
* risks and assumptions are documented;
* draft ADR content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
