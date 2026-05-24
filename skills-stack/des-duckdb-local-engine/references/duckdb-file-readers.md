# DuckDB File Readers

## Purpose

Use this reference when reading files through DuckDB.

## Common Formats

DuckDB is useful for inspecting:

```text
CSV
TSV
JSON
JSONL / NDJSON
Parquet
Excel
SQLite
DuckDB database
GeoJSON
GeoPackage
Shapefile
remote HTTPS files
cloud object storage files
```

The upstream `duckdb-skills` repo has a `read-file` skill specifically for reading CSV, JSON, Parquet, Avro, Excel, spatial, and remote URLs such as S3 and HTTPS.

## DES Rules

* For source assessment, always capture schema and row count.
* For CSV/JSON, verify inferred types.
* For Parquet, inspect schema and metadata before expensive scans.
* For Excel, document sheet assumptions.
* For SQLite/DuckDB files, inspect tables, columns, and row counts.
* For spatial data, document geometry type and coordinate assumptions.

## Output

Add findings to the source profile evidence.
