# Provero Connectors for DES

## Stable Connectors

Use stable connectors first:

```text
DuckDB
PostgreSQL
DataFrame
```

## Beta Connectors

Use with caution and document risk:

```text
Snowflake
BigQuery
MySQL
Redshift
```

## DuckDB Connector

Use for local-first validation:

```text
read_csv('data.csv')
read_parquet('*.parquet')
DuckDB tables
DuckLake prototypes via DuckDB-accessible tables if supported
```

## PostgreSQL Connector

Use for relational source/target validation.

## DataFrame Connector

Use for notebook/local Python validation.

## DES Rule

Connector maturity must be documented in evidence when it affects trust level.
