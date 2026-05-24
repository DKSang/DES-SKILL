# Step 05 - Handoff to DES Evidence

Use this step when dbt work supports a DES phase Done Gate.

## Goal

Convert dbt implementation and validation work into DES-compatible evidence.

## Evidence Sources

Collect or reference:

- dbt command summaries;
- selected model graph;
- compiled SQL;
- test results;
- unit test results;
- row counts;
- freshness checks;
- documentation coverage;
- contract checks;
- manifest and run results artifacts;
- known limitations or waivers.

## Evidence Pack Format

Write to:

```text
_des-output/evidence/phase-XX/dbt-evidence-pack.md
```

Use this structure:

```text
# dbt Evidence Pack

## DES Phase

## dbt Scope

## Models Changed or Reviewed

## Commands or Checks Run

## Test Results

## Data Quality Findings

## Contract Findings

## Downstream Impact

## Limitations and Waivers

## Done Gate Recommendation
```

## Done Gate Recommendation

Use one of:

```text
PASS
PASS_WITH_LIMITATIONS
FAIL
BLOCKED
```
