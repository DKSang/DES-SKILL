# Step 05 - Convert and Export Datasets

Use this step when converting files, especially CSV/JSON/Excel to Parquet.

## Good Use Cases

- Convert raw CSV/JSON to Parquet for faster local analytics.
- Normalize file format before dbt-duckdb.
- Prepare sample data for CI.
- Export evidence datasets.
- Create lightweight local Gold prototypes.

## Rules

- Never overwrite raw files.
- Write outputs to a derived folder.
- Preserve source path and conversion timestamp in documentation.
- Validate row count before and after conversion.
- Validate schema after conversion.
- Prefer Parquet for analytics-oriented intermediate files.
- Document compression and partitioning choices.

## Output

Create a conversion note:

```text
input file:
output file:
input format:
output format:
row count before:
row count after:
schema changes:
partitioning:
compression:
reason:
```
