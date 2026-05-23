---
name: des-orchestration-observability
description: Use when designing schedules, triggers, dependencies, quality gates, retries, failure handling, recovery, backfills, and operational monitoring for data pipelines.
---

# des-orchestration-observability

## Purpose

Use this skill to create the Orchestration and Observability Specification for any data engineering project.

This skill defines workflow scheduling, triggers, dependencies, retry policy, failure handling, quality gate integration, publish gates, alerting, incident handling, monitoring signals, run evidence, operational metadata, SLA tracking, backfill operations, and recovery expectations.

The goal is to make data pipelines operable, observable, recoverable, and auditable before implementation begins.

## When To Use

Use this skill when:

- Phase 14 Data Quality Specification exists;
- ingestion, Bronze, Silver, Gold, transformation, and quality rules need to be orchestrated;
- the project needs scheduling, dependency management, retries, alerts, SLAs, observability, backfill, or recovery design;
- quality gates need to block or warn before publishing outputs;
- pipeline health, freshness, runtime, row counts, quality results, cost, or incidents need monitoring;
- the user asks to create Airflow DAGs, Fabric pipelines, Databricks workflows, Prefect flows, Dagster assets, GitHub Actions, or orchestration logic;
- the workflow router selects Phase 15.

Do not use this skill to implement orchestration code, write DAGs, create Fabric pipeline JSON, create monitoring dashboards, write CI/CD workflows, or deploy infrastructure.

## Required Inputs

The agent should look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/05-data-source-inventory.md`;
- `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
- `_des-output/planning-artifacts/07-architecture-decision-record.md`;
- `_des-output/planning-artifacts/08-ingestion-specification.md`;
- `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
- `_des-output/planning-artifacts/10-silver-layer-specification.md`;
- `_des-output/planning-artifacts/11-gold-layer-specification.md`;
- `_des-output/planning-artifacts/12-data-contract-specification.md`;
- `_des-output/planning-artifacts/13-transformation-specification.md`;
- `_des-output/planning-artifacts/14-data-quality-specification.md`;
- workflow status file, if present;
- approved architecture orchestration boundary;
- ingestion frequency and trigger;
- transformation dependency graph;
- data quality gates;
- freshness/SLA expectations;
- contract validation expectations;
- failure handling expectations;
- alerting and owner expectations.

If the Data Quality Specification is missing or too weak, stop and ask whether to route back to `des-data-quality`.

## Output File

Create or update:

```text
_des-output/planning-artifacts/15-orchestration-observability-specification.md
```

The artifact must capture:

* orchestration and observability summary;
* orchestration scope and non-scope;
* orchestration design principles;
* workflow inventory;
* dependency graph;
* schedule and trigger strategy;
* source readiness checks;
* ingestion orchestration;
* Bronze/Silver/Gold transformation orchestration;
* quality gate integration;
* publish and release gates;
* retry and timeout policy;
* failure handling and recovery policy;
* backfill and replay operations;
* late data and correction operations;
* alerting and notification policy;
* incident and escalation policy;
* observability signal inventory;
* freshness and SLA monitoring;
* volume and completeness monitoring;
* quality result monitoring;
* runtime and performance monitoring;
* cost and usage monitoring;
* run evidence and audit metadata;
* operational ownership;
* risks;
* assumptions;
* open questions;
* next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent schedules, retries, alerts, owners, SLAs, incident paths, or publish gates.
8. Do not write Airflow, Fabric, Databricks, Dagster, Prefect, GitHub Actions, SQL, Python, or monitoring dashboard code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream quality, transformation, contract, and architecture context.
2. Identify workflows and dependency groups.
3. Define schedule, trigger, and dependency strategy.
4. Define quality gate and publish gate integration.
5. Define retry, timeout, failure handling, recovery, backfill, and replay behavior.
6. Define alerting, incident handling, and operational ownership.
7. Define observability signals and run evidence.
8. Ask HALT questions for unresolved operational decisions.
9. Draft the Orchestration and Observability Specification.
10. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* treat orchestration as only scheduling;
* ignore dependencies between ingestion, transformation, quality, and publish;
* ignore data quality gates;
* retry unsafe or non-idempotent steps without approval;
* continue publishing when P1 quality gates fail unless explicitly approved;
* alert nobody;
* create noisy alerts without severity;
* omit evidence needed for audit and debugging;
* ignore backfill/replay operations;
* ignore SLA/freshness monitoring;
* implement DAGs or pipeline code in this phase;
* mark the artifact Done if P1 workflows lack schedule/trigger, dependency, retry/failure handling, quality gate, alerting, and ownership.

## HALT Policy

This skill must stop when an orchestration or observability decision cannot be safely inferred.

Stop especially when:

* upstream quality or transformation context is missing;
* workflow scope is unclear;
* schedule or trigger is unclear;
* dependency order is unclear;
* quality gate behavior is unclear;
* publish gate is unclear;
* retry or timeout policy is unclear;
* failure handling is unclear;
* backfill/replay operation is unclear;
* alert owner or escalation path is missing;
* SLA/freshness monitoring is unclear;
* run evidence expectation is missing.

Detailed HALT checkpoints are defined in `steps/`.

## Quality Checklist

- [ ] Orchestration scope and principles are defined.
- [ ] Workflow inventory is created with triggers and schedules.
- [ ] Dependency graph is documented.
- [ ] Quality gate and publish gate behavior is defined for P1 outputs.
- [ ] Retry/timeout and failure recovery policies are documented.
- [ ] Backfill/replay and late/correction operations are defined.
- [ ] Alerting owners and incident escalation paths are documented.
- [ ] Observability signals, freshness/SLA, and run evidence are captured.
- [ ] Artifact does not include orchestration or monitoring implementation code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating orchestration as only scheduling | Ignores dependencies and quality gates |
| Ignoring data quality gates | Allows bad data to reach consumers |
| Retrying non-idempotent steps | Causes data duplication or corruption |
| Alerting nobody or "everyone" | Causes alert fatigue or ownership gaps |
| Omitting run evidence | Makes debugging and audit impossible |
| Implementing DAG code in design phase | Premature technical locking before operations are agreed |

## Handoff To The Next Skill

Recommend `des-semantic-model-design` only after the Orchestration and Observability Specification is complete or explicitly marked Draft with open questions and accepted risk.
