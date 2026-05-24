---
name: des-dlt-ingestion
description: Use when designing, implementing, reviewing, or validating dlt ingestion pipelines inside a DES workflow, including REST APIs, SQL databases, filesystems, cloud storage, sources, resources, write dispositions, incremental state, schema evolution, schema contracts, destinations, Bronze loading, and evidence handoff.
---

# des-dlt-ingestion

## Purpose

Use this skill to design and implement dlt-based ingestion pipelines inside a DES workflow.

dlt is used here as the ingestion and loading layer:

```text
source system
→ dlt source/resource
→ extract
→ normalize
→ load
→ schema/state/trace/load info
→ Bronze dataset
→ handoff to DuckDB/dbt/Fabric/Provero/Airflow
```

This skill does not replace DES phases. It supports them by turning source assessment and ingestion specifications into executable, evidence-producing ingestion pipelines.

Core principle:

```text
DES defines what should be ingested and why.
dlt implements how source data is extracted, normalized, loaded, tracked, and evidenced.
```

---

## When To Use

Use this skill when:

* Phase 05 Data Source Inventory and Assessment needs executable ingestion feasibility checks.
* Phase 08 Ingestion Specification needs source/resource/write-disposition design.
* Phase 09 Bronze Layer Specification needs raw landing table/file design.
* Phase 10 Silver Layer Specification needs light normalization or nested data handling.
* Phase 12 Data Contract Specification needs schema contract or schema evolution behavior.
* Phase 13 Pipeline Implementation needs dlt code.
* Phase 14 Orchestration needs Airflow/serverless/notebook deployment planning.
* Phase 16 Quality Validation needs load evidence, row counts, schema drift findings, or failed load diagnostics.
* The source is REST API, SQL database, filesystem, cloud storage, Python data structures, or a verified dlt source.
* The project needs incremental loading, cursor tracking, merge/upsert, append-only event ingestion, or full refresh behavior.

Do not use this skill to design analytics marts, dimensional models, dashboard logic, or complex transformation layers. Route those to dbt, DuckDB, Fabric, or Gold-layer skills.

---

## Required Inputs

Look for DES artifacts:

```text
_des-output/planning-artifacts/04-data-product-specification.md
_des-output/planning-artifacts/05-data-source-inventory.md
_des-output/planning-artifacts/08-ingestion-specification.md
_des-output/planning-artifacts/09-bronze-layer-specification.md
_des-output/planning-artifacts/10-silver-layer-specification.md
_des-output/planning-artifacts/12-data-contract-specification.md
_des-output/phase-handoffs/
_des-output/evidence/
```

Look for source and runtime context:

```text
source API docs
source database connection notes
sample files
sample API responses
source rate limits
source auth requirements
source owner
target destination
environment config
secrets strategy
existing dlt pipeline code
pyproject.toml / requirements.txt
Airflow DAGs / notebooks / scripts
```

---

## Activation Protocol

When activated:

1. Identify the DES phase and the ingestion task.
2. Read the source inventory and ingestion specification before writing dlt code.
3. Classify the source:

   * REST API
   * SQL database
   * filesystem/cloud storage
   * Python iterable/dataframe
   * verified dlt source
4. Decide the source/resource structure.
5. Decide destination and dataset naming.
6. Decide write disposition:

   * append
   * replace
   * merge
7. Decide incremental state strategy.
8. Decide schema evolution and schema contract behavior.
9. Define Bronze output expectations.
10. Define load validation and evidence capture.
11. Hand off to DuckDB/dbt/Fabric/Provero/Airflow as needed.

---

## DES-to-dlt Mapping

| DES concern             | dlt implementation concern                                      |
| ----------------------- | --------------------------------------------------------------- |
| Source inventory        | source type, auth, endpoint/table/file list, sample response    |
| Source assessment       | feasibility, rate limits, pagination, nested data, drift risk   |
| Ingestion specification | dlt pipeline, source, resource, destination, dataset name       |
| Bronze design           | table naming, raw preservation, metadata columns, load packages |
| Silver design           | normalization, nested table handling, light conformance         |
| Data contracts          | schema hints, schema contracts, primary/merge keys              |
| Quality evidence        | load info, row counts, schema changes, failed jobs              |
| Orchestration           | Airflow DAG, notebook, serverless, schedule, retry, state       |
| Operations              | pipeline state, traces, load packages, full refresh strategy    |

---

## Stack Best Practices

Apply these practices:

* Treat dlt as the source-to-Bronze ingestion layer, not the main analytics modeling layer.
* Keep extraction logic explicit and testable.
* Model source endpoints/tables/files as dlt resources.
* Group related resources into dlt sources.
* Define `pipeline_name`, `destination`, and `dataset_name` intentionally.
* Choose write disposition based on data behavior, not convenience.
* Use `append` for immutable events.
* Use `replace` for small snapshots or full refresh datasets.
* Use `merge` for mutable entities with primary keys or merge keys.
* Use incremental loading for large or frequently updated sources.
* Document cursor fields, initial values, lag windows, and state reset behavior.
* Add schema hints where inference is risky.
* Use schema contracts when downstream expectations must be protected.
* Separate secrets/config from code.
* Capture load info, row counts, schema changes, and state behavior as DES evidence.
* Do not hide source caveats; reflect them in DES artifacts.

---

## Decision Matrix

| Situation              | Preferred action                                                            |
| ---------------------- | --------------------------------------------------------------------------- |
| REST API source        | Design endpoint resources, pagination, auth, rate limit, incremental cursor |
| SQL database source    | Design table resources, primary keys, incremental columns, merge strategy   |
| Filesystem source      | Design file discovery, file pattern, metadata, conversion/handoff           |
| Immutable events       | `write_disposition='append'`                                                |
| Small full snapshot    | `write_disposition='replace'`                                               |
| Mutable entities       | `write_disposition='merge'` with primary/merge keys                         |
| Nested JSON            | Use normalization and nested hints where needed                             |
| Schema drift risk      | Define schema evolution/contract behavior                                   |
| Need local validation  | Destination DuckDB/filesystem, then inspect with DuckDB skill               |
| Need production Fabric | Load to supported destination/staging, then hand off to Fabric skill        |
| Need orchestration     | Hand off to Airflow skill after pipeline design is stable                   |

---

## Output Files

Depending on context, create or update:

```text
_des-output/implementation-artifacts/dlt-ingestion-plan.md
_des-output/implementation-artifacts/dlt-source-resource-spec.md
_des-output/implementation-artifacts/dlt-incremental-state-spec.md
_des-output/implementation-artifacts/dlt-schema-contract-spec.md
_des-output/evidence/phase-08/dlt-ingestion-evidence.md
_des-output/evidence/phase-09/dlt-bronze-load-evidence.md
_des-output/evidence/phase-12/dlt-schema-contract-evidence.md
_des-output/evidence/phase-13/dlt-pipeline-run-evidence.md
```

---

## Quality Checklist

Before marking dlt-supported work Done, verify:

* DES phase and source artifact are identified.
* Source type and ingestion pattern are clear.
* Source/resource boundaries are documented.
* Auth and secrets strategy is documented.
* Destination and dataset naming are intentional.
* Write disposition is justified.
* Incremental strategy is defined or explicitly not needed.
* Primary key, merge key, or cursor field is documented where relevant.
* Schema inference risks are documented.
* Schema evolution/contract behavior is documented.
* Bronze output path/table naming is documented.
* Load evidence is captured.
* Failed rows/errors/retries are documented if applicable.
* Handoff target is clear: DuckDB, dbt, Fabric, Provero, Airflow, or DES artifact revision.

---

## Common Mistakes To Avoid

* Using `append` for mutable entities that require updates.
* Using `replace` for large datasets without cost/freshness justification.
* Using `merge` without understanding primary key or merge key.
* Treating dlt schema inference as a complete data contract.
* Mixing heavy business transformation into ingestion code.
* Ignoring pagination, rate limits, retries, or auth expiry.
* Hiding schema drift instead of documenting it.
* Forgetting that dlt pipeline state affects repeatability.
* Sharing pipeline state between dev/test/prod unintentionally.
* Storing secrets in committed code or evidence files.
* Marking Phase 08/09 Done without load evidence.

---

## Handoff To The Next Skill

After this skill completes:

* hand off to `des-duckdb-local-engine` when loaded data needs profiling, grain validation, or local SQL inspection;
* hand off to `des-dbt-engineering` when Bronze/Silver outputs should become dbt sources/models;
* hand off to `des-fabric-engineering` when destinations and outputs must be promoted to Microsoft Fabric;
* hand off to `des-airflow-orchestration` when scheduling/retries/dependencies are needed;
* hand off to `des-provero-validation` or data-quality skill when rules need formal validation;
* hand off to `des-data-contracts` when schema contract behavior changes consumer expectations.
