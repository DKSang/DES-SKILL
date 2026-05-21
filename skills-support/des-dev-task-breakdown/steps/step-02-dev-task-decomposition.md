# Step 02 — Dev Task Decomposition

## Goal

Break selected ready story into ordered development tasks with validation, testing, quality, security, and documentation expectations.

## Required Inputs

- Selected ready story from Step 01
- Story Catalog
- Story Readiness Report
- Sprint Plan if available
- Relevant DES artifacts
- User answers from HALT decisions
- Repo/folder structure context if available

## Actions

1. Define task breakdown scope.
2. Summarize selected story.
3. Identify implementation context:
   - story type;
   - target layer/component;
   - input artifacts;
   - output expected;
   - dependencies;
   - test expectations.
4. Identify affected areas:
   - config;
   - source code;
   - pipeline/orchestration;
   - dataset/schema;
   - tests;
   - quality rules;
   - contracts;
   - metadata/docs;
   - CI/CD.
5. Create ordered task list.
6. For each task, define:
   - task ID;
   - task name;
   - purpose;
   - expected output;
   - input/reference artifacts;
   - validation/check;
   - dependency;
   - status.
7. Add test tasks.
8. Add quality/contract/governance/security tasks.
9. Add documentation/metadata tasks.
10. Add task acceptance checks.
11. Add implementation risks.
12. Create coding agent handoff prompt.
13. Prepare ready-for-implementation decision.

## Dev Task Types

Use these task types:

| Task Type | Examples |
| --- | --- |
| Setup | folders, config, env example, project structure |
| Source access | connection, credential pattern, source validation |
| Ingestion | extraction logic, load behavior, metadata capture |
| Dataset | schema, table/file creation, partitioning |
| Transformation | cleaning, joins, aggregation, business logic |
| Contract | schema/grain/freshness check |
| Quality | completeness, uniqueness, validity, reconciliation |
| Orchestration | workflow, trigger, dependency, retry |
| Observability | logs, run evidence, alerts, freshness |
| Semantic | model, measure, dimension, relationship |
| Serving | dashboard/API/export/agent output |
| Governance | access, masking, classification |
| Test | unit, integration, schema, smoke, regression |
| Docs | README, runbook, metadata, catalog |
| CI/CD | validation, pipeline gate, release evidence |

## Task ID Convention

Use:

```text
TASK-<STORY-PREFIX>-<NUMBER>
```

Example:

```text
TASK-ING-001
TASK-ING-002
TASK-BRZ-001
```

## Generic Task Standard

Each task must include:

| Field               | Required? |
| ------------------- | --------- |
| Task ID             | Required  |
| Task name           | Required  |
| Type                | Required  |
| Purpose             | Required  |
| Expected output     | Required  |
| Reference artifacts | Required  |
| Validation/check    | Required  |
| Dependencies        | Required  |
| Status              | Required  |

Allowed statuses:

```text
Ready
Blocked
Deferred
Needs Clarification
```

## HALT — Repository Structure Context

Stop if exact file/folder guidance is requested but repo structure is unknown.

### Decision needed

How should file/path guidance be handled?

### Options

A. Use logical affected areas only
B. Use repo structure from Phase 07/21 if available
C. User provides repo tree now
D. Mark file-level guidance as Draft
E. Stop until repo structure is available

### Required response

Choose A/B/C/D/E.

## HALT — Implementation Boundary

Stop if tasks may exceed story scope.

### Decision needed

What implementation boundary should tasks follow?

### Options

A. Strictly story scope only
B. Include minimal supporting test tasks
C. Include docs/metadata updates
D. Include CI/CD updates if story requires them
E. Include adjacent cleanup/refactor tasks
F. Custom boundary

### Recommendation

Choose A + B + C. Add D for quality/contract/release stories.

### Required response

Choose one or more options.

## HALT — Test Task Expectation

Stop if tests are unclear.

### Decision needed

What test tasks should be included?

### Options

A. Unit test task
B. Integration test task
C. Schema/contract test task
D. Data quality test task
E. Smoke test task
F. Regression/golden dataset test task
G. No test task; mark risk
H. Custom test task

### Required response

Choose one or more options.

## HALT — Quality Contract Security Task Expectation

Stop if story affects data outputs or sensitive data but related tasks are unclear.

### Decision needed

Which control tasks should be included?

### Options

A. Data quality rule task
B. Contract validation task
C. Metadata/lineage task
D. Access/security task
E. Masking/sensitive field task
F. Audit/logging task
G. Not applicable
H. Custom control task

### Required response

Choose one or more options.

## Completion Criteria

This step is complete when:

* selected story is summarized;
* affected areas are identified;
* ordered task list is created;
* each task has purpose, output, references, check, dependency, and status;
* test tasks are included;
* quality/contract/governance tasks are included where relevant;
* implementation risks are documented;
* coding agent handoff prompt is prepared;
* draft Dev Task Breakdown is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
