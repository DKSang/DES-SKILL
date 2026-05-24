# Step 02 - Read and Profile Files

Use this step when the user provides a CSV, JSON, Parquet, Excel, SQLite, spatial, or remote file.

## Goal

Produce a reliable first profile of the dataset.

## Profile Fields

Capture:

```text
file path:
file format:
row count:
column count:
schema:
sample rows:
null summary:
duplicate summary:
min/max for numeric/date columns:
top values for categorical columns:
parse/type issues:
```

## Rules

* Use safe row limits for previews.
* Do not assume inferred types are correct.
* Check date, numeric, boolean, and categorical columns carefully.
* For CSV/JSON, note parsing assumptions such as delimiter, header, encoding, nested fields, or inconsistent records.
* For Parquet, inspect metadata and schema before full scans.
* For remote files, document protocol and access method.

## Evidence

Write profile findings to the relevant DES evidence file.
