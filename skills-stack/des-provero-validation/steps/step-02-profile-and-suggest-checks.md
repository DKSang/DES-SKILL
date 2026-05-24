# Step 02 - Profile and Suggest Checks

Use this step when discovering a new dataset or source.

## Goal

Use Provero profiling to suggest candidate checks, then review them against DES expectations.

## Suggested Flow

1. Run or plan source profiling.
2. Capture schema, row count, nulls, distinct counts, ranges, categories.
3. Generate candidate checks.
4. Filter suggestions against DES requirements.
5. Mark each check as:
   - accepted
   - rejected
   - needs business review
   - exploratory only

## Rules

- Do not automatically promote profiling suggestions to blockers.
- Accepted values must be business-approved.
- Numeric ranges must be domain-approved.
- Freshness thresholds must come from requirements/SLA.
- Candidate keys must be validated before using unique checks as blockers.

## Output

Create:

```text
_des-output/evidence/phase-05/provero-source-profile.md
```

or append to the relevant phase evidence file.
