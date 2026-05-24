# Airflow Core Concepts for DES

## Mental Model

```text
Dag = workflow definition
task = unit of work
task instance = task execution for a Dag run
Dag run = execution of the Dag for a logical date
operator = task implementation pattern
schedule = when Dag runs are created
catchup = whether historical intervals are run
```

## DES Usage

Airflow should coordinate:

* ingestion;
* transformation;
* validation;
* publishing;
* monitoring;
* lineage;
* alerting.

## Not Airflow's Main Role

Airflow should not be used as:

* the main transformation engine;
* the data warehouse;
* the data quality rule catalog;
* the semantic layer;
* the business logic specification.