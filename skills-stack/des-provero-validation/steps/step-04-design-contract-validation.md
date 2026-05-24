# Step 04 - Design Contract Validation

Use this step when Provero checks support Phase 12 Data Contracts.

## Goal

Create executable contract validation from DES Data Contract expectations.

## Provero Contract Covers

Provero contracts can cover:

- schema columns;
- expected types;
- per-column checks;
- SLA freshness;
- SLA completeness;
- availability;
- violation policy.

Provero detects schema drift such as removed columns, added columns, and type changes.

## DES Distinction

```text
Provero data contract = executable schema/SLA/quality validation.
DES Data Contract = producer-consumer agreement covering meaning, grain, ownership, access, lineage, freshness, quality, versioning, and change behavior.
```

## Required Mapping

Document:

```text
DES contract:
Provero contract:
owner:
version:
table:
grain:
columns:
checks:
SLA:
on_violation:
breaking change rules:
```

## Output

Create or update:

```text
_des-output/evidence/phase-12/provero-contract-validation.md
```
