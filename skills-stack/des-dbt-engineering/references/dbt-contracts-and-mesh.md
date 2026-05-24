# dbt Contracts and Mesh for DES

## Purpose

Use this reference when dbt models are public, shared, contracted, or consumed by dashboards, APIs, semantic layers, ML datasets, or other projects.

## DES Mapping

DES Data Contract maps to dbt through:

- model descriptions;
- column descriptions;
- tests;
- model contracts;
- versions;
- access settings;
- groups;
- exposures;
- semantic models;
- deprecation notes.

## Contract Expectations

For each public model, define:

```text
owner:
consumer:
grain:
primary key:
columns:
data types:
freshness:
quality tests:
access:
versioning:
breaking change policy:
```

## Red Flags

* public model without owner;
* public model without grain;
* column meaning only implied by name;
* breaking change without versioning;
* downstream dashboard/API not documented;
* tests not aligned with contract promises.

## Handoff

If contract expectations are unclear, route back to `des-data-contracts`.
