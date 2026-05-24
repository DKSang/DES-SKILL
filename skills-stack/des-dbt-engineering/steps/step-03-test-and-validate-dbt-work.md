# Step 03 - Test and Validate dbt Work

Use this step before considering dbt work Done.

## Validation Approach

Prefer scoped dbt commands instead of running the entire project by default.

Recommended checks:

- parse the project;
- compile selected nodes;
- preview selected inputs and outputs with safe row limits;
- build only the affected node graph;
- run data tests and unit tests for the affected area.

## Test Design

Add high-value tests first:

- required-field tests;
- primary-key uniqueness tests;
- relationship tests;
- accepted-value tests;
- freshness tests for important sources;
- custom tests for business rules;
- unit tests for complex transformation logic.

## Unit Test Triggers

Use dbt unit tests when logic includes:

- complex joins;
- window functions;
- date math;
- regex;
- long conditional logic;
- edge cases not visible in current data;
- critical contracted models;
- bug fixes;
- refactors.

## Evidence

Capture the following in the DES evidence folder:

```text
command summary:
selector:
affected models:
row counts:
test results:
failures:
limitations:
evidence file paths:
```

Do not mark Done if validation was skipped without a documented reason.
