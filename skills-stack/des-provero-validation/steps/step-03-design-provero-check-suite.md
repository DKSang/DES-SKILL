# Step 03 - Design Provero Check Suite

Use this step when converting DES expectations into Provero checks.

## Check Categories

Use built-in checks where possible:

```text
not_null
unique
unique_combination
completeness
accepted_values
range
regex
email_validation
type
freshness
latency
row_count
row_count_change
anomaly
custom_sql
referential_integrity
```

## Severity Design

Use:

```text
info      = observation
warning   = non-blocking concern
critical  = serious issue requiring review
blocker   = phase Done Gate cannot pass
```

## Suite Design Questions

```text
What dataset is being checked?
Which DES expectation does each check prove?
What severity should each check have?
What is the expected failure action?
Is the check stable enough for CI/monitoring?
Should the check live in Provero, dbt, or both?
```

## Output

Create or update:

```text
_des-output/implementation-artifacts/provero-suite-plan.md
provero.yaml
```
