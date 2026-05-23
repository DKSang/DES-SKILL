# des-create-story

## Purpose

Use this support skill to create an implementation-ready Story Catalog from the Epic Catalog and DES main lifecycle artifacts.

This skill breaks approved epics into smaller user stories or engineering stories that can later be selected for sprint planning, readiness checks, task breakdown, and implementation.

The goal is to convert high-level implementation epics into traceable, testable, acceptance-driven stories.

## When To Use

Use this skill when:

- `des-create-epic` has produced an Epic Catalog;
- the user wants to create stories from epics;
- the project needs a story backlog before sprint planning;
- the user asks for user stories, engineering stories, implementation stories, backlog items, or story catalog;
- the workflow router selects `des-create-story`.

Do not use this skill to create sprint plans, detailed coding tasks, implementation code, tests, deployment workflows, or review reports.

## Required Inputs

The agent should look for:

```text
_des-output/implementation-artifacts/epic-catalog.md
```

The agent should also use DES main artifacts as needed:

```text
_des-output/planning-artifacts/01-business-discovery-brief.md
_des-output/planning-artifacts/02-business-question-catalog.md
_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md
_des-output/planning-artifacts/04-data-product-specification.md
_des-output/planning-artifacts/05-data-source-inventory.md
_des-output/planning-artifacts/06-conceptual-domain-model.md
_des-output/planning-artifacts/07-architecture-decision-record.md
_des-output/planning-artifacts/08-ingestion-specification.md
_des-output/planning-artifacts/09-bronze-layer-specification.md
_des-output/planning-artifacts/10-silver-layer-specification.md
_des-output/planning-artifacts/11-gold-layer-specification.md
_des-output/planning-artifacts/12-data-contract-specification.md
_des-output/planning-artifacts/13-transformation-specification.md
_des-output/planning-artifacts/14-data-quality-specification.md
_des-output/planning-artifacts/15-orchestration-observability-specification.md
_des-output/planning-artifacts/16-semantic-model-specification.md
_des-output/planning-artifacts/17-serving-layer-specification.md
_des-output/planning-artifacts/18-lineage-metadata-specification.md
_des-output/planning-artifacts/19-governance-security-specification.md
_des-output/planning-artifacts/20-cost-performance-optimization-specification.md
_des-output/planning-artifacts/21-cicd-testing-specification.md
_des-output/planning-artifacts/22-project-evaluation-report.md
```

Important input by story type:

### Foundation stories

Use:

```text
07-architecture-decision-record.md
20-cost-performance-optimization-specification.md
21-cicd-testing-specification.md
```

### Ingestion stories

Use:

```text
05-data-source-inventory.md
08-ingestion-specification.md
09-bronze-layer-specification.md
14-data-quality-specification.md
15-orchestration-observability-specification.md
21-cicd-testing-specification.md
```

### Bronze stories

Use:

```text
08-ingestion-specification.md
09-bronze-layer-specification.md
14-data-quality-specification.md
18-lineage-metadata-specification.md
21-cicd-testing-specification.md
```

### Silver stories

Use:

```text
06-conceptual-domain-model.md
10-silver-layer-specification.md
12-data-contract-specification.md
13-transformation-specification.md
14-data-quality-specification.md
18-lineage-metadata-specification.md
21-cicd-testing-specification.md
```

### Gold stories

Use:

```text
02-business-question-catalog.md
03-requirements-and-kpi-catalog.md
11-gold-layer-specification.md
12-data-contract-specification.md
13-transformation-specification.md
14-data-quality-specification.md
16-semantic-model-specification.md
21-cicd-testing-specification.md
```

### Contract and quality stories

Use:

```text
12-data-contract-specification.md
14-data-quality-specification.md
21-cicd-testing-specification.md
```

### Orchestration stories

Use:

```text
15-orchestration-observability-specification.md
20-cost-performance-optimization-specification.md
21-cicd-testing-specification.md
```

### Semantic and serving stories

Use:

```text
16-semantic-model-specification.md
17-serving-layer-specification.md
18-lineage-metadata-specification.md
19-governance-security-specification.md
21-cicd-testing-specification.md
```

### Governance/security stories

Use:

```text
18-lineage-metadata-specification.md
19-governance-security-specification.md
21-cicd-testing-specification.md
```

### CI/CD stories

Use:

```text
14-data-quality-specification.md
15-orchestration-observability-specification.md
19-governance-security-specification.md
20-cost-performance-optimization-specification.md
21-cicd-testing-specification.md
```

## Output

Create or update:

```text
_des-output/implementation-artifacts/story-catalog.md
```

The Story Catalog must include:

* story catalog summary;
* story creation scope;
* input artifact coverage;
* story generation rules;
* story inventory;
* story detail;
* story-to-epic mapping;
* story-to-DES-artifact mapping;
* story dependency map;
* acceptance criteria;
* test expectations;
* data quality expectations;
* governance/security expectations;
* definition of ready;
* definition of done;
* risk and blocker register;
* sprint planning guidance;
* assumptions;
* open questions;
* next support skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point.
7. Do not create detailed task breakdowns.
8. Do not create sprint plans.
9. Do not write implementation code.
10. Do not invent acceptance criteria that conflict with DES artifacts.
11. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

This skill will:

1. Check Epic Catalog and DES artifact availability.
2. Select epic/story generation scope.
3. Generate implementation-ready stories.
4. Map stories to epics and DES artifacts.
5. Define acceptance criteria.
6. Define test expectations.
7. Define dependencies and risks.
8. Create the Story Catalog.
9. Recommend `des-sprint-planning`.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* create stories without epic mapping;
* create stories without DES artifact traceability;
* create stories without acceptance criteria;
* create stories without test expectations;
* create stories too large to implement;
* create stories too small as single-line tasks;
* skip quality, contract, governance, or CI/CD expectations;
* turn story creation into task breakdown;
* mark stories Ready if critical context is missing;
* mark story catalog Done if P1 epics have no stories.

## Story Sizing Guidance

A good story should:

* deliver one meaningful implementation outcome;
* be small enough to implement and test in a sprint;
* be traceable to one epic;
* be traceable to one or more DES artifacts;
* have clear acceptance criteria;
* have test expectations;
* have dependencies and blockers;
* avoid hidden assumptions.

## HALT Policy

This skill must stop when a story planning decision cannot be safely inferred.

Stop especially when:

* Epic Catalog is missing;
* selected epic is missing required context;
* story scope is unclear;
* acceptance criteria cannot be derived;
* quality or contract expectations are unclear;
* test expectations are unclear;
* dependency is unclear;
* story is too broad;
* story is actually a task;
* user wants sprint planning instead of story creation.
