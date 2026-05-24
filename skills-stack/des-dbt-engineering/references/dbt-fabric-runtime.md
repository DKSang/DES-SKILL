# dbt on Microsoft Fabric Runtime Notes

## Purpose

Use this reference when dbt is used with Microsoft Fabric, Synapse-compatible endpoints, Lakehouse, Warehouse, or OneLake-oriented workflows.

## DES Role

Fabric is the runtime/deployment target. DES artifacts still define:

- business goals;
- source inventory;
- medallion design;
- Silver/Gold meaning;
- contracts;
- orchestration;
- evidence.

## Things to Check

- target endpoint type;
- adapter maturity;
- authentication method;
- workspace/environment separation;
- lakehouse or warehouse target;
- naming convention;
- incremental strategy;
- permission model;
- deployment pipeline compatibility;
- CI/CD approach;
- data movement between OneLake, Lakehouse, Warehouse, and semantic model.

## Local-First Rule

When possible:

```text
prototype in DuckDB
validate logic
then promote to Fabric runtime
capture Fabric evidence before Done
```

## Evidence

Fabric-specific dbt evidence should include:

```text
workspace:
environment:
target:
models built:
test results:
runtime notes:
known limitations:
```
