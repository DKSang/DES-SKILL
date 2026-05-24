# Step 02 - Design Airflow Dag

Use this step when creating the Dag-level design.

## Dag Design Questions

```text
What data product does this Dag support?
What source/layer does it operate on?
What is the schedule?
What is the freshness expectation?
What are the task groups?
What validates success?
What happens on failure?
What evidence is produced?
```

## Recommended Dag Boundaries

Prefer one Dag per coherent workflow, such as:

```text
source_to_bronze
bronze_to_silver
silver_to_gold
quality_gate
publish_data_product
```

Avoid one giant Dag for everything unless the workflow is truly small.

## Output

Create or update:

```text
_des-output/implementation-artifacts/airflow-dag-design.md
```

Use:

```text
Dag ID:
Purpose:
Owner:
Schedule:
Start date:
Catchup:
Freshness expectation:
Task groups:
Dependencies:
Validation gates:
Failure policy:
Evidence outputs:
```