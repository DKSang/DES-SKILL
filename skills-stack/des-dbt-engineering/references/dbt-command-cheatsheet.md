# dbt Command Cheatsheet for DES

## Safe Defaults

Prefer scoped execution:

```text
parse project
compile selected nodes
show selected model with limit
build selected node graph
test selected node graph
```

## Common Selectors

Use selectors intentionally:

```text
model_name
+model_name
model_name+
+model_name+
tag:tag_name
path:models/marts
state:modified+
result:error
test_type:unit
```

## Evidence-Friendly Commands

Capture summaries from:

```text
dbt parse
dbt compile
dbt show
dbt build
dbt test
dbt docs generate
dbt ls
```

## Cost Control

* avoid full project runs unless necessary;
* use selectors;
* use row limits for exploration;
* use state/deferral when available;
* avoid large scans during discovery;
* document intentionally skipped checks.
