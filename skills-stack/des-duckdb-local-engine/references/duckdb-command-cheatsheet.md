# DuckDB Command Cheatsheet for DES

## Safe Defaults

Prefer scoped execution:

```text
read_csv_auto('path/to/file.csv') limit 10
describe select * from 'path/to/file.parquet'
select count(*) from 'path/to/file.json'
```

## Useful Extensions

```sql
INSTALL httpfs;
LOAD httpfs;
INSTALL spatial;
LOAD spatial;
INSTALL sqlite;
LOAD sqlite;
```

## Export Commands

```sql
COPY (SELECT * FROM my_table) TO 'output.parquet' (FORMAT PARQUET);
COPY (SELECT * FROM my_table) TO 'output.csv' (FORMAT CSV, HEADER);
```

## Cost Control

* Use row limits for exploration.
* Filter data as early as possible.
* Use Parquet for large local datasets.
* Avoid full scans on large remote files when possible.
