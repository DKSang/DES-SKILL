# Step 02 - Plan dbt Models

Use this step when creating or restructuring dbt models.

## Principle

Start from the desired output and work backward to inputs.

## Planning Flow

1. Define final output grain.
2. Mock the final output columns and sample rows.
3. Draft pseudocode SQL for the final output.
4. Identify upstream models or sources needed.
5. Check whether existing models already provide the needed grain or logic.
6. Prefer extending an existing model when it preserves clarity and grain.
7. Create a new model only when grain, purpose, or performance justifies it.
8. Add edge cases and test scenarios before implementation.

## Required Questions

- What business question or KPI does this model support?
- What is the grain?
- What is the primary key or surrogate key?
- Which fields are dimensions, measures, or metadata?
- What upstream sources/models are required?
- Is the model source-conformed, intermediate, or mart-facing?
- Which materialization is appropriate for volume, freshness, cost, and query pattern?

## Output

Produce a model plan before SQL:

```text
model name:
purpose:
grain:
primary key:
upstream dependencies:
transformation logic:
materialization:
tests:
documentation needed:
```
