# Provero and dbt Interop

## Purpose

Use this reference when Provero checks should connect with dbt.

## When To Export to dbt

Export checks to dbt when:

- the check validates dbt model structure;
- the check belongs near model YAML;
- it should run in dbt CI/build;
- it is model-level and stable.

## Keep in Provero When

Keep checks in Provero when:

- they validate raw source files;
- they validate cross-system SLAs;
- they depend on result history;
- they are anomaly checks;
- they are operational monitoring checks;
- they are contract validation checks outside dbt model tests.

## DES Rule

Do not duplicate checks blindly. Decide the system of record for each rule.
