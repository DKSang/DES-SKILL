# Data Engineering Lifecycle Gate Checklist

This checklist acts as the primary quality gate for transitioning across the phases of a data project. It enforces a problem-first approach and checks that all stages of the lifecycle align with business requirements.

---

## Phase Gate 1: Business Discovery & Requirements
- [ ] **Problem defined without tool names**: The business objective is written in terms of business goals (e.g., "reduce latency", "improve sales tracking") rather than tool choices (e.g., "install Spark", "deploy Snowflake").
- [ ] **Downstream consumers identified**: Every data product has a defined owner and primary consumers (Analysts, ML models, External APIs).
- [ ] **Decisions and actions mapped**: Downstream stakeholders have specified the actions they will take based on the data.
- [ ] **Scope boundaries set**: In-scope and out-of-scope criteria are clearly documented to prevent scope creep.

## Phase Gate 2: Architecture & Source Assessment
- [ ] **Upstream source characterized**: Sources are classified by operational write patterns (CRUD vs. Insert-only) and access type.
- [ ] **Reversible decisions documented**: Architectural choices distinguish between easy-to-reverse paths (e.g., database selection behind a virtual schema) and hard-to-reverse paths (e.g., core cloud platform selection).
- [ ] **Compute-storage separation planned**: The storage layer is decoupled from compute engines to optimize costs and scalability.
- [ ] **Upstream SLAs and change notice agreements signed off**: A communication channel/process is established for when upstream schemas evolve.

## Phase Gate 3: Ingestion & Storage Design
- [ ] **Ingestion mode justified**: The choice between Batch, CDC, or Event Streaming is selected based on business SLA latency needs.
- [ ] **Idempotent ingestion designed**: Pipelines can be run multiple times for the same time window without creating duplicate records.
- [ ] **Raw serialization selected**: File format (e.g., Parquet, Avro, JSON) and compression are optimized for ingestion speed and cost.
- [ ] **Partitioning and clustering defined**: Selected based on downstream query access patterns, avoiding high partition cardinality.

## Phase Gate 4: Transformation & Data Quality
- [ ] **Deduplication strategy explicit**: A specific mechanism (e.g., windowing functions or primary key constraints) is set.
- [ ] **Kimball grain or modeling pattern selected**: The analytical database model (OBT, Kimball Dimensional, Inmon) is defined and documented.
- [ ] **Standardization rules set**: Standard policies for null default substitution, timezone normalization (UTC), and naming formats are mapped.
- [ ] **DQ checks mapped to six dimensions**: Test cases cover Completeness, Validity, Accuracy, Consistency, Timeliness, and Uniqueness.

## Phase Gate 5: Serving, Orchestration & Operations
- [ ] **Serving method selected**: Data is served via direct views, API, Metrics Layer, or Reverse ETL.
- [ ] **SLA latency and uptime monitors set**: Metrics are logged and automated alerts are linked to page target systems.
- [ ] **Orchestration DAG dependency defined**: Workflows are structured as acyclic graphs with retry configurations (backoff + jitter).
- [ ] **Governance & PII Policy implemented**: PII columns are masked/hashed, and column-level lineage is tracked.
- [ ] **FinOps review completed**: Total Cost of Ownership (TCO) and partition deletion policies are validated.
