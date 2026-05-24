# Step 03 - Test and Validate dbt Work

Use this step before considering dbt work Done.

## Validation Approach

Prefer scoped dbt commands instead of running the entire project by default.

Recommended checks:

<<<<<<< HEAD
- parse the project;
- compile selected nodes;
- preview selected inputs and outputs with safe row limits;
- build only the affected node graph;
- run data tests and unit tests for the affected area.
=======
- parse the project
- compile the selected nodes
- preview selected inputs and outputs with safe row limits
- build only the affected node graph
- run data tests and unit tests for the affected area
>>>>>>> 903800048bdd5063eed38441a6e571febb34ded2

## Test Design

Add high-value tests first:

<<<<<<< HEAD
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
=======
- required-field tests
- primary-key uniqueness tests
- relationship tests
- accepted-value tests
- freshness tests for important sources
- custom tests for business rules
- unit tests for complex transformation logic

## Unit Test Triggers

Use dbt unit tests when logic includes complex joins, window functions, date math, regex, long conditional logic, critical contracted models, bug fixes, or refactors.

## Evidence

Capture command summaries, selectors, row counts, failures, limitations, and output artifact paths in the DES evidence folder.
>>>>>>> 903800048bdd5063eed38441a6e571febb34ded2

Do not mark Done if validation was skipped without a documented reason.
