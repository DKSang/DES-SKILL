# Climate-Smart Agriculture DuckDB & DuckLake Example

## Context

Project: climate-smart agriculture advisory and analytics.

DuckDB is used for local-first inspection before dbt/Fabric implementation.
DuckLake is used to manage local tables as a transactional lakehouse.

## Example Sources

```text
data/raw/open_meteo/daily_weather.parquet
data/raw/gso/province_statistics.csv
data/raw/geo/vietnam_provinces.geojson
data/raw/crop/crop_calendar.csv
```

## Phase 05 Source Assessment

Use DuckDB to inspect:

* schema;
* row count;
* province code consistency;
* date coverage;
* null weather values;
* duplicate province-date rows;
* crop calendar coverage.

## DuckLake Local Lakehouse Prototype

Example layout:

```text
data/ducklake/
├── bronze_weather/
├── bronze_gso/
├── silver_weather_daily/
├── silver_province_reference/
└── gold_crop_weather_risk_daily/
```

Example catalog:

```text
metadata.ducklake
```

Layer mapping:

| DES Layer | DuckLake Table               | Grain                             |
| --------- | ---------------------------- | --------------------------------- |
| Bronze    | bronze_open_meteo_daily      | one row per source record         |
| Bronze    | bronze_gso_province_stats    | one row per source record         |
| Silver    | silver_weather_daily         | one row per province-date         |
| Silver    | silver_crop_calendar         | one row per crop-stage-date range |
| Gold      | gold_crop_weather_risk_daily | one row per province-crop-date    |

DuckLake evidence should capture:

* table schemas;
* row counts;
* snapshot IDs;
* schema evolution result;
* time travel check;
* partitioning choice;
* handoff to dbt/Fabric.

## Phase 10 Silver Prototype

Example local Silver outputs:

```text
silver_weather_daily
silver_province_reference
silver_crop_calendar
```

## Phase 11 Gold Prototype

Example Gold mart:

```text
mart_crop_weather_risk_daily
```

Expected grain:

```text
One row per province, crop, and date.
```

## Key Checks

* `province_code` not null
* `date` not null
* one row per province-date in weather
* one row per province-crop-date in risk mart
* risk level accepted values: LOW, MEDIUM, HIGH, EXTREME
* crop growth stage valid for date range

## Handoff

* hand off prototype SQL to `des-dbt-engineering`;
* hand off runtime implementation to `des-fabric-engineering`;
* hand off validation rules to Provero/data-quality skill.
