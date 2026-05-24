# Climate-Smart Agriculture Airflow Example

## Context

Project: climate-smart agriculture advisory and analytics.

Airflow coordinates ingestion, transformation, validation, and publishing.

## Example Dag

```text
csav_daily_weather_risk_pipeline
```

## Task Groups

```text
extract
load_bronze
validate_bronze
build_silver
validate_silver
build_gold
validate_gold
publish
notify
```

## Example Task Matrix

| Task ID                 | Stack   | Purpose                             |
| ----------------------- | ------- | ----------------------------------- |
| run_dlt_open_meteo      | dlt     | ingest Open-Meteo API               |
| validate_bronze_weather | Provero | validate Bronze row count/freshness |
| profile_weather_sample  | DuckDB  | inspect loaded weather data         |
| run_dbt_silver_weather  | dbt     | build Silver weather model          |
| validate_silver_weather | Provero | validate Silver grain and ranges    |
| run_dbt_gold_risk       | dbt     | build Gold crop-weather risk mart   |
| validate_gold_risk      | Provero | validate risk mart contract         |
| publish_to_fabric       | Fabric  | publish/promote output              |
| notify_status           | Airflow | notify owner                        |

## Schedule

```text
daily
after source availability window
catchup disabled for MVP unless backfill is explicitly planned
```

## Validation Gates

* Bronze validation must pass before Silver build.
* Silver validation must pass before Gold build.
* Gold contract validation must pass before publish.
* Blocker Provero checks stop downstream tasks.

## Lineage

Inputs:

```text
Open-Meteo API
GSO PX-Web
Province reference data
Crop calendar data
```

Outputs:

```text
gold_crop_weather_risk_daily
dashboard/API/web app data product
```

## Handoff

* dlt handles ingestion internals.
* dbt handles transformations.
* Provero handles validation gates.
* Fabric handles production runtime/publishing.
* Airflow coordinates dependencies and evidence.