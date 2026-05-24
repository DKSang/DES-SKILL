# Step 07 - Validate Load and Evidence

Use this step after running or planning a dlt pipeline.

## Validation Checks

Capture:

```text
pipeline name:
destination:
dataset:
resources loaded:
tables created:
rows extracted:
rows loaded:
schema changes:
load packages:
pipeline state:
errors:
warnings:
```

## Data Checks

Run or hand off checks for:

* row count;
* required fields;
* duplicate keys;
* cursor min/max;
* nested table counts;
* failed records;
* schema drift.

## Evidence

Create:

```text
_des-output/evidence/phase-08/dlt-ingestion-evidence.md
_des-output/evidence/phase-09/dlt-bronze-load-evidence.md
_des-output/evidence/phase-13/dlt-pipeline-run-evidence.md
```

## Done Rule

Do not mark Done if load evidence is missing and no waiver is documented.
