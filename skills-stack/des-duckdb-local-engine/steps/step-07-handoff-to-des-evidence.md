# Step 07 - Handoff to DES Evidence

Use this step when DuckDB analysis supports a DES Done Gate.

## Evidence Pack

Write to the relevant phase evidence folder.

Suggested file names:

```text
phase-05/duckdb-source-profile.md
phase-08/duckdb-ingestion-assessment.md
phase-10/duckdb-silver-validation.md
phase-11/duckdb-gold-grain-validation.md
phase-12/duckdb-contract-evidence.md
```

## Evidence Structure

```text
# DuckDB Evidence Pack

## DES Phase

## Source Files / Databases

## DuckDB Version / Runtime

## Profiling Summary

## Schema Findings

## Grain Findings

## Quality Findings

## SQL Prototypes

## Conversion Outputs

## Limitations

## Recommended Artifact Revisions

## Done Gate Recommendation
```

## Done Gate Recommendation

Use one of:

```text
PASS
PASS_WITH_LIMITATIONS
FAIL
BLOCKED
```
