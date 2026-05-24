# Climate-Smart Agriculture Provero Example

## Context

Project: climate-smart agriculture advisory and analytics.

Provero validates Bronze, Silver, Gold, and contract expectations.

## Example Validation Targets

```text
bronze_open_meteo__daily_weather
silver_weather_daily
silver_province_reference
gold_crop_weather_risk_daily
```

## Bronze Checks

```yaml
source:
  type: duckdb
  table: bronze_open_meteo__daily_weather

checks:
  - row_count:
      min: 1
  - not_null: [des_source_system, des_ingestion_timestamp]
  - freshness:
      column: des_ingestion_timestamp
      max_age: 24h
```

## Silver Checks

```yaml
source:
  type: duckdb
  table: silver_weather_daily

checks:
  - not_null: [province_code, date]
  - unique_combination: [province_code, date]
  - range:
      column: temperature_2m_max
      min: -20
      max: 60
  - range:
      column: precipitation_sum
      min: 0
```

## Gold Checks

```yaml
source:
  type: duckdb
  table: gold_crop_weather_risk_daily

checks:
  - not_null: [province_code, crop_code, date, risk_level]
  - unique_combination: [province_code, crop_code, date]
  - accepted_values:
      column: risk_level
      values: [LOW, MEDIUM, HIGH, EXTREME]
  - referential_integrity:
      column: province_code
      reference_table: silver_province_reference
      reference_column: province_code
```

## Contract Example

```yaml
contracts:
  - name: crop_weather_risk_daily_contract
    owner: csav-data-team
    version: "1.0"
    table: gold_crop_weather_risk_daily
    on_violation: block
    schema:
      columns:
        - name: province_code
          type: varchar
          checks: [not_null]
        - name: crop_code
          type: varchar
          checks: [not_null]
        - name: date
          type: date
          checks: [not_null]
        - name: risk_level
          type: varchar
          checks:
            - accepted_values: [LOW, MEDIUM, HIGH, EXTREME]
    sla:
      freshness: 24h
      completeness: "95%"
```

## Handoff

* Failed source checks route back to `des-dlt-ingestion` or `des-duckdb-local-engine`.
* Failed Silver/Gold checks route to `des-dbt-engineering`.
* Failed contract checks route to `des-data-contracts`.
* Scheduled checks route to `des-airflow-orchestration`.
* Fabric runtime checks route to `des-fabric-engineering`.
