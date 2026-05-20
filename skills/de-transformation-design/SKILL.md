---
name: de-transformation-design
description: Use when designing SQL, Python, Spark, dbt, DuckDB, or warehouse transformations from raw and standardized data into validated analytics models.
---

# de-transformation-design

## When To Use

Use after layer designs and data contracts. Use before writing transformation code or dbt models.

## Purpose

Create an implementable transformation plan that maps inputs to outputs, defines business rules, handles edge cases, and supports testing.

## Inputs Required

- Bronze, Silver, and Gold specifications.
- Data contracts.
- Metric definitions.
- Data quality requirements.
- Tooling choices from architecture.

## Step-By-Step Process

1. Map each output table to input tables.
2. Define transformation logic by stage: clean, conform, enrich, aggregate, serve.
3. Choose implementation tool: SQL, Python, Spark, dbt, DuckDB, warehouse SQL, or notebooks converted to jobs.
4. Define incremental processing and backfill behavior.
5. Define edge cases: nulls, duplicates, late records, deletes, changing dimensions.
6. Define tests for business rules and row-level expectations.
7. Sequence transformations by dependencies.

## Output File

Write the final artifact to:

`.agents/des-skill/output/13-transformation-design.md`

Use the example output format below because this skill does not have a dedicated template file.

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Transformation design document.
- Source-to-target mapping.
- Incremental and backfill strategy.
- Test plan for transformation logic.

## Quality Checklist

- Every output column has a source or derivation.
- Incremental logic is deterministic.
- Business rules are named and testable.
- Backfill behavior is documented.
- Transformations respect data contracts.

## Common Mistakes To Avoid

- Encoding undocumented business logic in code.
- Building transformations that cannot be backfilled.
- Using notebooks as production logic without job structure.
- Ignoring deletes and late-arriving data.

## Handoff To The Next Skill

Next use `de-data-quality` to define and implement checks around the transformation outputs.

## Example Output Format

```markdown
# Transformation Design
| Output | Input | Logic | Grain | Incremental Key | Tests |
## Business Rules
## Dependency Graph
## Backfill Plan
```
