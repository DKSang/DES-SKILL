# DuckLake vs Delta / Iceberg / Fabric Lakehouse

## Purpose

Use this reference when the DES project must decide whether DuckLake is only a local prototype or part of the target architecture.

## Comparison Frame

Do not compare only features. Compare against DES requirements:

```text
runtime target
team skill
cloud platform
governance
interoperability
catalog requirement
ACID requirement
schema evolution
time travel
orchestration
CI/CD
Power BI / semantic model integration
cost
operational maturity
```

## Positioning

Use DuckLake when:

* local-first lakehouse experimentation matters;
* DuckDB is the main execution engine;
* the project wants Parquet + SQL catalog simplicity;
* lightweight snapshots/time travel are needed;
* team wants to avoid distributed lakehouse complexity during design.

Use Delta/Fabric Lakehouse when:

* Microsoft Fabric is the production runtime;
* Power BI / semantic model integration is central;
* OneLake governance is required;
* Fabric Data Pipeline / Notebook / Deployment Pipeline is the deployment path.

Use Iceberg when:

* broad engine interoperability is a primary requirement;
* external catalogs and multiple engines are central;
* the organization already standardizes on Iceberg.

## DES Rule

DuckLake can be a strong design/prototype layer, but production adoption must be decided in Phase 07 Architecture Decision Record.

## Output

When comparing, produce:

```text
recommended role:
prototype only / production candidate:
pros:
risks:
DES phase impact:
handoff target:
```
