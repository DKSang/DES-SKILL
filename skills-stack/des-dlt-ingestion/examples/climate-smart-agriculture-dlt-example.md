# Climate-Smart Agriculture dlt Example

## Context

Project: climate-smart agriculture advisory and analytics.

dlt is used to ingest source data into Bronze.

## Example Sources

```text
Open-Meteo API
GSO PX-Web API
Vietnam Provinces GitHub files
HDX/OCHA boundary files
RiceAtlas / FAO crop calendar files
PPD pages or downloadable files
```

## Example Pipeline Names

```text
csav_open_meteo_pipeline
csav_gso_pipeline
csav_reference_data_pipeline
csav_boundaries_pipeline
csav_crop_calendar_pipeline
```

## Example Resources

| Source          | Resource            | Write Disposition | Incremental               |
| --------------- | ------------------- | ----------------- | ------------------------- |
| Open-Meteo      | weather_daily       | append or merge   | date/province/crop window |
| GSO PX-Web      | province_statistics | replace or merge  | period/version            |
| Province GitHub | province_reference  | replace           | commit/version            |
| HDX/OCHA        | boundary_files      | replace           | file version              |
| Crop Calendar   | crop_calendar       | replace           | source version            |

## Bronze Naming

```text
bronze_open_meteo__daily_weather
bronze_gso__province_statistics
bronze_geo__province_boundaries
bronze_crop__calendar
```

## Metadata To Preserve

```text
des_source_system
des_source_url
des_source_file_path
des_ingestion_timestamp
des_dlt_pipeline_name
des_dlt_resource_name
des_dlt_load_id
des_dlt_run_id
```

## Handoff

* DuckDB profiles loaded Bronze data.
* dbt builds Silver and Gold models.
* Fabric runs production notebooks/pipelines.
* Provero validates formal quality rules.
* Airflow schedules dlt pipelines if needed.
