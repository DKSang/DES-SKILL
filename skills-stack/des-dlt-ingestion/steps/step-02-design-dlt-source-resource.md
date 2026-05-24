# Step 02 - Design dlt Source and Resource

Use this step when turning a source system into dlt code structure.

## Concepts

A dlt pipeline loads data from Python code to a destination. It accepts sources, resources, generators, lists, and other iterables.

A dlt resource is a function that yields data. A resource can yield Python dicts/lists, Pydantic models, Arrow tables, Pandas DataFrames, or Polars DataFrames/LazyFrames.

## Design Rules

- Use one resource for one endpoint, table, file pattern, or logical entity.
- Group related resources into one source.
- Give resources stable names because they map to destination tables.
- Use explicit table names when default names would be unclear.
- Add primary keys, merge keys, and column hints where needed.
- Avoid heavy business logic in resources.
- Keep extract logic readable and testable.

## Source/Resource Spec

Document:

```text
source name:
resource name:
source object:
destination table:
grain:
primary key:
merge key:
cursor field:
write disposition:
expected schema:
nested tables:
pagination:
rate limit:
auth:
```

## Output

Create or update:

```text
_des-output/implementation-artifacts/dlt-source-resource-spec.md
```
