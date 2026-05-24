# dlt Source and Resource Patterns

## REST API Pattern

Use one resource per endpoint or entity.

Examples:

```text
weather_daily
province_statistics
crop_calendar
administrative_boundaries
```

Document:

```text
endpoint:
params:
pagination:
cursor:
rate limit:
auth:
response shape:
nested fields:
```

## SQL Database Pattern

Use one resource per source table or query.

Document:

```text
schema:
table:
primary key:
incremental column:
merge strategy:
source filters:
```

## Filesystem Pattern

Use one resource per file pattern or logical dataset.

Document:

```text
path:
glob:
format:
partitioning:
file metadata:
schema drift:
```

## Resource Naming

Use stable, explicit names:

```text
src_<system>__<entity>
```

or table-facing names:

```text
bronze_<system>__<entity>
```
