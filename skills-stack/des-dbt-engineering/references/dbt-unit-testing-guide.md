# dbt Unit Testing Guide for DES

## When to Use Unit Tests

Use unit tests when logic includes:

- complex joins;
- window functions;
- date math;
- regex;
- long conditional logic;
- edge cases not visible in current data;
- critical contracted models;
- refactors;
- bug fixes.

## Unit Test Shape

A unit test should define:

```text
model under test
given inputs
expected output
```

## DES Usage

Use unit tests to prove transformation logic before promoting a phase to Done.

Good DES candidates:

* Silver deduplication rules;
* Silver normalization rules;
* Gold KPI calculations;
* risk classification rules;
* advisory rule logic;
* exposure threshold logic;
* SCD logic;
* bridge table logic.

## Anti-Patterns

Avoid unit tests for:

* warehouse built-in functions without project-specific logic;
* trivial selects;
* logic better covered by data quality tests;
* production-only volume checks.

## Evidence

Document:

```text
unit test name:
logic being protected:
edge case:
expected output:
result:
```
