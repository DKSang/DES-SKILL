---
name: des-serving-layer-design
description: Use when designing how data products are served to consumers via dashboards, APIs, ML datasets, reverse ETL, data sharing, or AI agents.
---

# des-serving-layer-design

## Purpose

Use this skill to create the Serving Layer Specification for any data engineering project.

This skill defines how trusted data products, Gold outputs, semantic models, metrics, APIs, ML datasets, exports, reverse ETL feeds, dashboards, or AI/data-agent interfaces will be served to consumers.

The goal is to design the consumption layer clearly before building dashboards, APIs, apps, ML features, exports, or operational activation workflows.

## When To Use

Use this skill when:

- Phase 16 Semantic Model Specification exists;
- Gold outputs need to be exposed to consumers;
- the project needs dashboards, reports, self-service BI, semantic models, APIs, ML/AI datasets, reverse ETL, exports, embedded analytics, data sharing, or AI-agent access;
- serving latency, access, performance, freshness display, feedback loop, usage monitoring, or consumer experience is unclear;
- the workflow router selects Phase 17.

Do not use this skill to implement dashboards, APIs, ML pipelines, reverse ETL jobs, UI screens, semantic model code, orchestration code, or CI/CD workflows.

## Required Inputs

The agent should look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/07-architecture-decision-record.md`;
- `_des-output/planning-artifacts/11-gold-layer-specification.md`;
- `_des-output/planning-artifacts/12-data-contract-specification.md`;
- `_des-output/planning-artifacts/14-data-quality-specification.md`;
- `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
- `_des-output/planning-artifacts/16-semantic-model-specification.md`;
- workflow status file, if present;
- serving direction from architecture;
- consumer personas;
- Gold outputs;
- semantic models;
- contracts;
- freshness/SLA expectations;
- security/access requirements;
- quality/trust status;
- usage and feedback expectations.

If the Semantic Model Specification is missing or too weak, stop and ask whether to route back to `des-semantic-model-design`.

## Output File

Create or update:

```text
_des-output/planning-artifacts/17-serving-layer-specification.md
```

The artifact must capture:

* serving layer summary;
* serving scope and non-scope;
* serving design principles;
* consumer and persona mapping;
* serving channel inventory;
* Gold/Semantic-to-serving mapping;
* serving pattern decision;
* dashboard/reporting expectations;
* self-service analytics expectations;
* API/application-serving expectations;
* ML/AI dataset serving expectations;
* reverse ETL/export expectations;
* data sharing/federation expectations;
* AI/data-agent access expectations;
* access control and security model;
* freshness and quality visibility;
* performance and latency expectations;
* caching and materialization expectations;
* feedback loop and issue reporting;
* usage monitoring and adoption signals;
* ownership and support model;
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
7. Do not invent consumers, serving channels, access rules, latency expectations, or support ownership.
8. Do not build dashboards, APIs, apps, ML jobs, reverse ETL jobs, semantic code, or deployment workflows.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream semantic, Gold, contract, quality, architecture, and consumer context.
2. Identify serving consumers and their jobs to be done.
3. Inventory serving channels and map Gold/Semantic objects to them.
4. Define channel-specific expectations (dashboards, APIs, ML, Reverse ETL, Sharing, Agents).
5. Define access control, freshness/quality indicators, and performance expectations.
6. Define feedback loops, usage monitoring, and support ownership.
7. Ask HALT questions for unresolved serving decisions.
8. Draft the Serving Layer Specification.
9. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* treat serving as dashboard-only;
* expose raw or unstable data directly to consumers without approval;
* expose Draft metrics as Certified;
* bypass semantic model or contracts where they are required;
* ignore access/security restrictions;
* ignore freshness and quality visibility;
* ignore feedback loop from users;
* design reverse ETL without guardrails and monitoring;
* design federated queries against production systems without source impact review;
* mark serving design Done if P1 outputs lack consumer, channel, access, freshness, quality, ownership, and support expectations.

## HALT Policy

This skill must stop when a serving decision cannot be safely inferred.

Stop especially when:

* semantic model or Gold output context is missing;
* serving channel is unclear;
* consumer/persona is unclear;
* access/security is unresolved;
* freshness/latency expectation is unclear;
* quality/trust status is unclear;
* reverse ETL feedback loop risk exists;
* API/application contract is unclear;
* ML/AI usage requires feature/label expectations;
* support owner or feedback process is missing.

Detailed HALT checkpoints are defined in `steps/`.

## Quality Checklist

- [ ] Serving scope and principles are defined.
- [ ] Consumer/persona mapping is documented.
- [ ] Serving channel inventory is created.
- [ ] Gold/Semantic-to-serving mapping is documented.
- [ ] Serving pattern decision is documented per output.
- [ ] Access control and security model is documented.
- [ ] Freshness and quality visibility is defined.
- [ ] Performance/latency expectations are documented.
- [ ] Feedback loop and issue reporting process is documented.
- [ ] Usage monitoring and adoption signals are defined.
- [ ] Ownership and support model is documented.
- [ ] Artifact does not implement dashboards, APIs, or pipelines.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Serving as dashboard-only | Ignores operational, ML, and API consumption needs |
| Exposing unvalidated data | Damages user trust and business reliability |
| Bypassing security/governance | Violates privacy and compliance requirements |
| Ignoring user feedback loops | Prevents product improvement and usage understanding |
| Designing reverse ETL without guardrails | Risks data corruption in operational systems |
| Designing visuals instead of serving layer | Prematurely locks design into visual detail |

## Handoff To The Next Skill

Recommend `des-lineage-metadata-design` only after the Serving Layer Specification is complete or explicitly marked Draft with open questions and accepted risk.
