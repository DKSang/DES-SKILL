# Airflow Dag Authoring Best Practices

## Principles

- Keep Dags readable.
- Keep tasks small and focused.
- Avoid heavy work at parse time.
- Avoid network/database calls during module import.
- Use clear task IDs.
- Use task groups for logical sections.
- Keep secrets outside Dag code.
- Keep environment-specific config outside Dag code.

## DES Pattern

Recommended task group layout:

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

## Review Questions

```text
Can this Dag be understood from the task graph?
Can each task be rerun safely?
Does validation happen before publish?
Are external dependencies explicit?
Are schedules aligned with freshness?
```