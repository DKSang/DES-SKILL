# DuckDB Local Engine Checklist

## Context

- [ ] DES phase identified
- [ ] DES artifact read
- [ ] source file/database identified
- [ ] file format identified
- [ ] runtime interface selected: CLI, Python, dbt-duckdb, notebook

## Profiling

- [ ] row count captured
- [ ] schema captured
- [ ] sample rows inspected
- [ ] nulls checked
- [ ] duplicates checked where relevant
- [ ] min/max checked for numeric/date fields
- [ ] top categories checked for categorical fields
- [ ] parse/type inference issues documented

## Grain

- [ ] target grain stated
- [ ] candidate key tested
- [ ] composite key tested if needed
- [ ] join cardinality checked
- [ ] aggregation grain checked

## Conversion

- [ ] raw files preserved
- [ ] derived outputs written separately
- [ ] row count before/after conversion checked
- [ ] schema after conversion checked
- [ ] partition/compression choices documented

## DuckLake

- [ ] DuckLake role is clear: prototype, evidence layer, CI sample lakehouse, or production candidate
- [ ] catalog type selected
- [ ] data path selected
- [ ] DES layer mapping defined
- [ ] snapshot/time travel need assessed
- [ ] schema evolution need assessed
- [ ] partitioning need assessed
- [ ] transaction requirements assessed
- [ ] comparison with Fabric/Delta/Iceberg documented if architecture decision is affected
- [ ] limitations documented

## Evidence

- [ ] SQL or command summary captured
- [ ] findings written to DES evidence folder
- [ ] limitations documented
- [ ] downstream handoff identified
