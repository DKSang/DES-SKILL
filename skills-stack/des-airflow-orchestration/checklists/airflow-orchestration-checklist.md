# Airflow Orchestration Checklist

## DES Context

- [ ] DES phase identified
- [ ] relevant DES artifacts read
- [ ] Dag purpose defined
- [ ] owner identified
- [ ] deployment target identified

## Dag Design

- [ ] Dag boundary is clear
- [ ] schedule defined
- [ ] freshness expectation defined
- [ ] catchup/backfill policy defined
- [ ] task groups defined
- [ ] dependencies documented

## Task Design

- [ ] each task has one responsibility
- [ ] inputs/outputs documented
- [ ] idempotency documented
- [ ] retry safety documented
- [ ] timeout documented
- [ ] secrets not hardcoded

## Stack Integration

- [ ] dlt tasks documented if used
- [ ] dbt tasks documented if used
- [ ] Provero tasks documented if used
- [ ] Fabric tasks documented if used
- [ ] DuckDB/local tasks documented if used

## Validation Gates

- [ ] Bronze validation gate defined
- [ ] Silver validation gate defined
- [ ] Gold validation gate defined
- [ ] contract validation gate defined if needed
- [ ] publish blocked on failed blocker checks

## Operations

- [ ] alerts defined
- [ ] logs sufficient
- [ ] lineage documented
- [ ] test plan defined
- [ ] deployment plan defined
- [ ] evidence pack path defined