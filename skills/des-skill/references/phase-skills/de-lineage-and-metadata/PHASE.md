---
name: de-lineage-and-metadata
description: Use when documenting source-to-target lineage, column-level lineage, dataset ownership, catalog metadata, transformation lineage, or metric lineage.
---

# de-lineage-and-metadata

## When To Use

Use after serving design and before governance finalization. Use when users need to know where data came from, how it changed, who owns it, and which downstream assets depend on it.

## Purpose

Create lineage and metadata artifacts that make the data platform explainable, auditable, searchable, and safer to change.

## Inputs Required

- Source inventory.
- Ingestion, transformation, and pipeline specs.
- Bronze, Silver, Gold, semantic, and serving specs.
- Data contracts and metric definitions.
- Tooling context such as dbt docs, OpenLineage, DataHub, Purview, Collibra, Fabric, Databricks, Snowflake, or BigQuery if used.

## Step-By-Step Process

1. Document dataset-level lineage from sources to Bronze, Silver, Gold, semantic model, and serving channels.
2. Document column-level lineage for critical fields and metrics.
3. Capture transformation logic references and pipeline ownership.
4. Define catalog metadata: description, owner, steward, classification, tags, freshness, SLA, quality status, and consumers.
5. Define metric lineage from business definition to Gold fields and source columns.
6. Identify downstream dependencies and blast radius for schema or logic changes.
7. Decide which metadata is manual, generated, or tool-managed.

## Required Outputs

- Source-to-target lineage map.
- Column-level lineage for critical fields.
- Metric lineage map.
- Data catalog metadata table.
- Dependency and impact analysis notes.

## Quality Checklist

- Critical business metrics trace to source fields.
- Dataset owners and consumers are recorded.
- Sensitive fields have metadata classification.
- Lineage covers serving assets, not only tables.
- Change impact can be assessed from the artifact.

## Common Mistakes To Avoid

- Treating lineage as a diagram only.
- Ignoring column-level lineage for certified metrics.
- Forgetting dashboards, APIs, and AI agents as downstream consumers.
- Maintaining metadata manually when tooling can generate it reliably.

## Handoff To The Next Skill

Next use `de-governance-and-security` to turn lineage and metadata into access, ownership, retention, privacy, and change-control policies.

## Example Output Format

```markdown
# Lineage And Metadata
## Dataset Lineage
| Source | Bronze | Silver | Gold | Semantic | Serving |
## Column Lineage
| Output Field | Transformation | Input Fields | Owner |
## Catalog Metadata
## Dependency Impact Notes
```
