# FUNDAMENTALS-MAP.md

## Purpose

This file maps DES-SKILL lifecycle phases to foundational Data Engineering concepts.

It is used by DES learning skills to explain artifacts in a consistent, beginner-friendly, and fundamentals-oriented way.

This file does not replace the source book. It is a conceptual map for learning and teaching.

---

## Core Framework

The main conceptual framework is the Data Engineering lifecycle:

1. Generation / Source Systems
2. Storage
3. Ingestion
4. Transformation
5. Serving Data

Across the lifecycle, several undercurrents appear repeatedly:

1. Security
2. Data Management
3. DataOps
4. Data Architecture
5. Orchestration
6. Software Engineering

DES-SKILL maps these concepts into 22 practical project phases.

---

# Part 1 — DES Main Phase Mapping

## Phase 01 — Business Discovery

Artifact:

```text
01-business-discovery-brief.md
```

Related concepts:

* Business value of data
* Downstream data consumers
* Data maturity
* Data Engineering as a business-enabling discipline

Learning goal:

The user should understand that Data Engineering does not start with tools, pipelines, or schemas. It starts with the business problem, the target decision, and the consumers who need reliable data.

Key teaching points:

* A data system has no value if it does not support a real decision or use case.
* Data Engineering sits upstream of analytics, machine learning, and operational decision-making.
* The first artifact prevents solution-first design.

Common mistakes:

* Starting from Fabric, Databricks, dbt, Spark, or dashboards before clarifying the business problem.
* Treating “build a lakehouse” as the business goal.
* Ignoring the primary consumer.

---

## Phase 02 — Business Questions

Artifact:

```text
02-business-question-catalog.md
```

Related concepts:

* Downstream use cases
* Data consumers
* Analytical questions
* Decision support

Learning goal:

The user should understand that business questions convert vague goals into specific decision needs.

Key teaching points:

* Business questions define what the data product must answer.
* Good questions guide KPI design, source selection, grain, and serving layer design.
* Poor questions create vague dashboards and unstable requirements.

Common mistakes:

* Writing generic questions that cannot be measured.
* Mixing business questions with technical tasks.
* Asking questions that no available source can support.

---

## Phase 03 — Requirements and KPIs

Artifact:

```text
03-requirements-and-kpi-catalog.md
```

Related concepts:

* Data consumers
* Data definitions
* Metrics logic
* Trust and usability

Learning goal:

The user should understand that KPIs are not just formulas. KPIs define meaning, grain, freshness, ownership, and quality expectations.

Key teaching points:

* A KPI must have a clear definition and business meaning.
* KPI grain affects Gold modeling and dashboard correctness.
* KPI trust depends on source reliability, transformation logic, and quality checks.

Common mistakes:

* Defining KPIs without grain.
* Defining KPIs without owner or consumer.
* Defining dashboard metrics before understanding source limitations.

---

## Phase 04 — Data Product Definition

Artifact:

```text
04-data-product-specification.md
```

Related concepts:

* Serving data
* Data products
* Trust
* Use case and user
* Self-service analytics

Learning goal:

The user should understand that a data product packages data, definitions, quality expectations, and access patterns for a specific consumer or use case.

Key teaching points:

* A data product is not only a table.
* A data product should be useful, understandable, trustworthy, and maintainable.
* Data product design connects business questions to serving and consumption.

Common mistakes:

* Calling every table a data product.
* Ignoring the user and use case.
* Not defining trust expectations.

---

## Phase 05 — Data Source Assessment

Artifact:

```text
05-data-source-inventory.md
```

Related concepts:

* Generation / source systems
* APIs
* Application databases
* Logs
* Third-party sources
* Upstream stakeholders
* Schema stability

Learning goal:

The user should understand that source assessment is not just listing data sources. It evaluates reliability, ownership, access, schema stability, freshness, and business relevance.

Key teaching points:

* Source systems generate data for operational purposes, not always for analytics.
* Source ownership and schema change behavior matter.
* Source reliability affects ingestion, contracts, quality, and trust.

Common mistakes:

* Assuming a source is reliable because it is public or official.
* Ignoring access limits, freshness, and schema drift.
* Selecting sources before confirming they answer the business questions.

---

## Phase 06 — Domain Modeling

Artifact:

```text
06-conceptual-domain-model.md
```

Related concepts:

* Data modeling
* Conceptual models
* Business entities
* Domain concepts
* Relationships

Learning goal:

The user should understand that domain modeling clarifies the business concepts before logical or physical schema design.

Key teaching points:

* A conceptual model is not a database schema.
* It defines important entities, relationships, and vocabulary.
* It helps avoid inconsistent definitions across artifacts.

Common mistakes:

* Jumping directly to tables and columns.
* Mixing technical fields with business concepts.
* Ignoring relationships between concepts.

---

## Phase 07 — Architecture Design

Artifact:

```text
07-architecture-decision-record.md
```

Related concepts:

* Data architecture
* Good architecture principles
* Scalability
* Failure planning
* Loose coupling
* Reversible decisions
* Security
* FinOps

Learning goal:

The user should understand that architecture is a set of decisions and trade-offs, not a diagram only.

Key teaching points:

* Architecture should support business goals and lifecycle needs.
* Good architecture considers failure, scalability, cost, security, and evolution.
* Architecture decisions should be documented with rationale.

Common mistakes:

* Choosing tools before architecture principles.
* Designing for maximum complexity instead of actual needs.
* Ignoring cost and operational burden.

---

## Phase 08 — Ingestion Design

Artifact:

```text
08-ingestion-specification.md
```

Related concepts:

* Ingestion
* Batch ingestion
* Streaming ingestion
* Push, pull, and polling patterns
* Serialization and deserialization
* Reliability
* Durability
* Schema evolution
* Late-arriving data
* Error handling

Learning goal:

The user should understand that ingestion is about safely and repeatedly moving data from source systems into the data platform while preserving traceability and recoverability.

Key teaching points:

* Ingestion is not just copying files.
* Ingestion design must consider frequency, payload, schema changes, errors, replay, and durability.
* Ingestion decisions affect Bronze design and downstream trust.

Common mistakes:

* Ignoring schema evolution.
* Not planning retries or replay.
* Treating batch and streaming as only speed differences.
* Not preserving source metadata.

---

## Phase 09 — Bronze Layer Design

Artifact:

```text
09-bronze-layer-specification.md
```

Related concepts:

* Storage
* Raw data retention
* Object storage
* Serialization formats
* Metadata
* Replayability
* Data lifecycle

Learning goal:

The user should understand that Bronze is the raw or near-raw landing layer that preserves source evidence and enables recovery.

Key teaching points:

* Bronze should retain enough source fidelity for audit and replay.
* Bronze is not primarily for business consumption.
* Metadata is critical for traceability.

Common mistakes:

* Cleaning too much in Bronze.
* Dropping source metadata.
* Making Bronze look like a business-ready table.

---

## Phase 10 — Silver Layer Design

Artifact:

```text
10-silver-layer-specification.md
```

Related concepts:

* Transformation
* Data cleaning
* Standardization
* Data quality
* Deduplication
* Schema normalization

Learning goal:

The user should understand that Silver turns raw data into standardized, validated, and more usable data, but not necessarily final business marts.

Key teaching points:

* Silver handles technical cleaning and standardization.
* Silver should improve reliability while preserving traceability.
* Silver is a bridge between raw source data and business-oriented Gold outputs.

Common mistakes:

* Putting business KPI logic too early into Silver.
* Removing lineage fields.
* Not separating technical validation from business transformation.

---

## Phase 11 — Gold Layer Design

Artifact:

```text
11-gold-layer-specification.md
```

Related concepts:

* Serving data
* Analytics models
* Data products
* Business logic
* Metrics layer
* Consumer-oriented design

Learning goal:

The user should understand that Gold is designed around business consumption, analytics, KPIs, dashboards, ML features, or application needs.

Key teaching points:

* Gold should align with business questions and KPI definitions.
* Gold grain must be explicit.
* Gold is where data becomes easier for consumers to use.

Common mistakes:

* Building Gold tables without defined consumers.
* Mixing unrelated grains.
* Recomputing inconsistent KPI logic in multiple places.

---

## Phase 12 — Data Contracts

Artifact:

```text
12-data-contract-specification.md
```

Related concepts:

* Data management
* Schema expectations
* Data quality expectations
* Ownership
* Trust
* Producer-consumer agreements

Learning goal:

The user should understand that data contracts define expectations between producers and consumers of data.

Key teaching points:

* Contracts reduce ambiguity and unexpected breakage.
* Contracts should include schema, freshness, quality, ownership, and change handling.
* Contracts are especially important when downstream users depend on stable data.

Common mistakes:

* Treating contracts as only column lists.
* Not defining change management.
* Not assigning ownership.

---

## Phase 13 — Transformation Design

Artifact:

```text
13-transformation-specification.md
```

Related concepts:

* Transformation
* Batch transformation
* Streaming transformation
* Materialization
* Data modeling
* SQL and query logic

Learning goal:

The user should understand that transformation converts data into useful structures and meanings while preserving correctness and maintainability.

Key teaching points:

* Transformation logic should be explainable and testable.
* Transformation belongs to different layers depending on its purpose.
* Business logic should be controlled and documented.

Common mistakes:

* Hiding business logic inside undocumented SQL.
* Mixing cleaning, modeling, and KPI logic without boundaries.
* Not testing transformation assumptions.

---

## Phase 14 — Data Quality

Artifact:

```text
14-data-quality-specification.md
```

Related concepts:

* Data management
* Data quality
* Trust
* Validation
* Monitoring
* Consumer expectations

Learning goal:

The user should understand that data quality is about fitness for use, not abstract perfection.

Key teaching points:

* Quality rules should connect to business impact.
* Different layers need different quality checks.
* Quality issues should have severity, owner, and handling strategy.

Common mistakes:

* Creating generic checks without business meaning.
* Treating all quality failures equally.
* Not defining what happens when a rule fails.

---

## Phase 15 — Orchestration and Observability

Artifact:

```text
15-orchestration-observability-specification.md
```

Related concepts:

* Orchestration
* DataOps
* Dependency management
* Monitoring
* Alerting
* Reliability

Learning goal:

The user should understand that orchestration coordinates pipeline execution, while observability helps detect and diagnose failure.

Key teaching points:

* Pipelines need dependencies, schedules, retries, and monitoring.
* Observability makes pipeline behavior visible.
* Orchestration connects ingestion, transformation, quality, and serving.

Common mistakes:

* Treating orchestration as only scheduling.
* Not defining failure handling.
* Not monitoring freshness or quality.

---

## Phase 16 — Semantic Model Design

Artifact:

```text
16-semantic-model-specification.md
```

Related concepts:

* Serving data
* Metrics layer
* Data definitions
* Business logic
* Self-service analytics

Learning goal:

The user should understand that semantic modeling creates a shared business meaning layer for metrics, dimensions, and relationships.

Key teaching points:

* Semantic models reduce inconsistent metric definitions.
* They help analysts consume data safely.
* They connect Gold outputs to business-facing tools.

Common mistakes:

* Letting every dashboard define metrics differently.
* Not documenting dimensions and metric grain.
* Confusing semantic model with physical schema only.

---

## Phase 17 — Serving Layer Design

Artifact:

```text
17-serving-layer-specification.md
```

Related concepts:

* Serving data
* Analytics
* Machine learning
* Reverse ETL
* APIs
* File exchange
* Databases
* Self-service

Learning goal:

The user should understand that serving design determines how data reaches consumers and applications.

Key teaching points:

* Different consumers need different serving patterns.
* Serving should consider latency, access, trust, and usability.
* Serving is the final connection between data engineering and business value.

Common mistakes:

* Assuming Power BI or dashboards are the only serving option.
* Ignoring access control and performance.
* Serving data before quality and definitions are stable.

---

## Phase 18 — Lineage and Metadata

Artifact:

```text
18-lineage-metadata-specification.md
```

Related concepts:

* Data management
* Metadata
* Lineage
* Catalogs
* Traceability
* Governance

Learning goal:

The user should understand that lineage and metadata make the data system understandable, auditable, and maintainable.

Key teaching points:

* Metadata explains what data is, where it came from, and how it changed.
* Lineage helps debug and assess impact.
* Metadata is essential for governance and trust.

Common mistakes:

* Treating metadata as optional.
* Not preserving source-to-serving traceability.
* Not documenting ownership or definitions.

---

## Phase 19 — Governance and Security

Artifact:

```text
19-governance-security-specification.md
```

Related concepts:

* Security
* Privacy
* Least privilege
* Access control
* Encryption
* Logging
* Monitoring
* Data governance

Learning goal:

The user should understand that governance and security are not final add-ons; they must exist across the lifecycle.

Key teaching points:

* Security applies to source, storage, pipelines, transformation, and serving.
* Governance defines who owns, accesses, changes, and trusts data.
* Privacy risks must be considered early.

Common mistakes:

* Adding security only at the dashboard layer.
* Giving broad access by default.
* Ignoring sensitive data classification.

---

## Phase 20 — Cost and Performance Optimization

Artifact:

```text
20-cost-performance-optimization-specification.md
```

Related concepts:

* FinOps
* Cost optimization
* Performance tuning
* Scalability
* Storage and compute trade-offs
* Total cost of ownership

Learning goal:

The user should understand that performance and cost are design constraints, not afterthoughts.

Key teaching points:

* Faster is not always better if cost is unjustified.
* Optimization should be tied to business value.
* Architecture should avoid unnecessary heavy lifting.

Common mistakes:

* Overengineering for imagined scale.
* Ignoring cloud cost visibility.
* Benchmarking without real workload context.

---

## Phase 21 — CI/CD and Testing

Artifact:

```text
21-cicd-testing-specification.md
```

Related concepts:

* Software engineering
* DataOps
* Testing
* Deployment
* Version control
* Automation
* Reliability

Learning goal:

The user should understand that Data Engineering needs software engineering discipline: tests, versioning, reviews, repeatable deployment, and rollback.

Key teaching points:

* Data pipelines should be tested like software systems.
* CI/CD improves repeatability and reduces manual errors.
* Data tests should include schema, logic, quality, and integration behavior.

Common mistakes:

* Deploying notebooks manually without version control.
* Testing only code syntax, not data behavior.
* Not defining rollback or environment promotion.

---

## Phase 22 — Project Evaluation

Artifact:

```text
22-project-evaluation-report.md
```

Related concepts:

* Data product value
* Trust
* Operational maturity
* Data lifecycle assessment
* Continuous improvement

Learning goal:

The user should understand that a data project should be evaluated against business value, technical quality, reliability, governance, and maintainability.

Key teaching points:

* Evaluation closes the loop between design and outcome.
* A project can work technically but fail as a data product.
* Evaluation identifies what to improve in the next cycle.

Common mistakes:

* Judging success only by whether pipelines run.
* Ignoring user adoption.
* Not reviewing quality, cost, governance, and maintainability.

---

# Part 2 — Learning Output Standard

Every learning output should include:

1. Artifact purpose
2. Related lifecycle concept
3. Why it matters
4. Key decisions
5. Upstream dependencies
6. Downstream impact
7. Common mistakes
8. Example
9. Reflection questions
10. Recommended next skill

---

# Part 3 — Teaching Rule

The agent should not simply summarize artifacts.

The agent should teach the user how to think like a Data Engineer.
