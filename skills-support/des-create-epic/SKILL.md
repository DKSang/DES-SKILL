# des-create-epic

## Purpose

Use this support skill to create an Epic Catalog from the completed DES main lifecycle artifacts.

This skill converts the outputs of the 22 DES main skills into a structured implementation-level epic backlog.

The goal is to bridge the gap between design artifacts and executable implementation work.

## When To Use

Use this skill when:

- the project has completed enough DES main lifecycle artifacts;
- the user wants to move from design to implementation planning;
- the project needs epics before creating detailed stories;
- the user asks to create epics, implementation backlog, roadmap, work packages, or delivery chunks;
- the workflow router selects `des-create-epic`.

Use this skill after one of these states:

- Phase 22 is complete;
- Phase 21 is complete and the user wants implementation backlog;
- Phase 17 or later is complete and the user wants early implementation epics;
- a minimum viable set of design artifacts exists.

Do not use this skill to create detailed user stories, sprint plans, task breakdowns, code, tests, or implementation files.

## Required Inputs

The agent should look for DES main artifacts:

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

The most important inputs are:

* business goals;
* business questions;
* approved KPIs;
* data product boundaries;
* source inventory;
* architecture decision;
* ingestion design;
* Bronze/Silver/Gold layer specs;
* data contracts;
* transformation specs;
* quality specs;
* orchestration and observability specs;
* semantic and serving specs;
* governance/security specs;
* CI/CD and testing specs;
* project evaluation or readiness decision.

## Output

Create or update:

```text
_des-output/implementation-artifacts/epic-catalog.md
```

The Epic Catalog must include:

* epic summary;
* epic scope;
* epic generation method;
* epic inventory;
* epic-to-main-artifact mapping;
* epic dependency map;
* epic priority;
* implementation phase grouping;
* acceptance criteria per epic;
* story creation guidance;
* risks and blockers;
* open questions;
* next recommended support skill.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point.
7. Do not invent implementation epics that are not grounded in DES artifacts.
8. Do not create detailed stories in this skill.
9. Do not create sprint plan in this skill.
10. Do not create task breakdown in this skill.
11. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

This skill will:

1. Check which DES main artifacts are available.
2. Determine whether epic creation is safe.
3. Extract implementation themes from DES artifacts.
4. Group work into epics.
5. Map each epic to relevant upstream artifacts.
6. Define epic acceptance criteria.
7. Define epic dependencies and priority.
8. Identify risks and blockers.
9. Create the Epic Catalog.
10. Recommend `des-create-story`.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* treat epics as detailed stories;
* create epics that are too small;
* create epics that are too broad to implement;
* ignore dependencies between ingestion, Bronze, Silver, Gold, quality, orchestration, serving, and CI/CD;
* create implementation epics without traceability to main DES artifacts;
* create coding tasks in this skill;
* create sprint plan in this skill;
* mark epic catalog Done if P1 data product, sources, architecture, transformations, quality, and CI/CD context are missing.

## Epic Sizing Guidance

A good epic should:

* represent a meaningful delivery capability;
* contain multiple stories;
* have a clear business or technical outcome;
* map to one or more DES main artifacts;
* have clear acceptance criteria;
* have dependency and priority information;
* be small enough to complete in a few implementation cycles;
* be large enough that it should not be a single coding task.

## HALT Policy

This skill must stop when an epic planning decision cannot be safely inferred.

Stop especially when:

* too many upstream artifacts are missing;
* data product boundary is unclear;
* architecture decision is missing;
* implementation scope is unclear;
* P1 vs P2 priority is unclear;
* epics cannot be mapped to source/layer/serving outputs;
* CI/CD or quality gates are missing for implementation planning;
* user wants stories instead of epics.
