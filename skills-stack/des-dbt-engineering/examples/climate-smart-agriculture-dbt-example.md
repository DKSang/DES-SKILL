# Climate-Smart Agriculture dbt Example

## Context

DES project: climate-smart agriculture advisory and analytics.

## Example Layers

```text
sources:
  open_meteo
  gso_pxweb
  vietnam_provinces
  crop_calendar

staging:
  stg_open_meteo__daily_weather
  stg_gso__province_statistics
  stg_geo__province
  stg_crop__calendar

intermediate:
  int_weather__province_daily_features
  int_crop__growth_stage_by_date
  int_risk__weather_crop_joined

marts:
  dim_province
  dim_crop
  fact_daily_agro_weather
  mart_crop_weather_risk_daily
```

## Example Mart Grain

```text
One row per province, crop, and date.
```

## Example Tests

* `province_code` not null
* `crop_code` not null
* composite key unique
* relationship to `dim_province`
* accepted values for risk level
* custom rule for drought threshold
* unit test for exposure classification logic

## DES Evidence

Use dbt evidence to support:

* Phase 10 Silver validation
* Phase 11 Gold validation
* Phase 12 contract validation
* Phase 16 quality Done Gate
