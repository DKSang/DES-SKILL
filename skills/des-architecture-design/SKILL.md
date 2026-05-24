---
name: des-architecture-design
description: Use when designing the global data architecture, including storage, compute, integration patterns, layer strategy, environment promotion, security posture, observability, governance, cost, operational burden, and decision reversibility.
---

# des-architecture-design

## Purpose

Use this skill to create and validate the Architecture Decision Record for any data engineering project.

This skill defines the target data architecture, architectural principles, lifecycle alignment, environment strategy, storage and compute strategy, integration pattern, serving direction, orchestration boundary, security posture, governance expectations, DataOps expectations, cost/performance considerations, operational burden, and major trade-off decisions.

The goal is to create a strategic architecture blueprint before detailed ingestion, storage layer, transformation, serving, orchestration, CI/CD, or implementation work begins.

In the Phase-Orchestrated Support Model, this phase is not Done when the Architecture Decision Record is first written.

Phase 07 is Done only when:

```text
Architecture Decision Record exists
+ Phase 06 artifact and handoff are reviewed
+ architecture validation work is identified
+ architecture evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 07 Done Gate passes
+ Phase 07 to Phase 08 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 06 Conceptual Domain Model exists;
* Phase 06 handoff exists or the user explicitly accepts the risk of continuing without it;
* the project needs an architecture blueprint before implementation;
* the user asks for lakehouse, warehouse, data lake, streaming, batch, event-driven, API, ML/AI, semantic layer, data platform, or cloud architecture;
* tool choices are being discussed before architecture trade-offs are clear;
* platform, environment, storage, compute, orchestration, serving, governance, security, observability, cost, or reversibility decisions need approval;
* the workflow router selects Phase 07.

Do not use this skill to design ingestion pipeline steps, physical table schemas, Bronze/Silver/Gold details, transformation SQL/Python, full data contracts, CI/CD workflow files, dashboards, APIs, semantic model internals, or implementation code.

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/05-data-source-inventory.md`;
* `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
* `_des-output/phase-handoffs/phase-06-to-07-handoff.md`;
* `_des-output/evidence/phase-06/phase-06-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-06-done-gate.md`, if available;
* workflow status file, if present;
* known platform constraints;
* known team capability constraints;
* known cost constraints;
* known security/governance constraints;
* known freshness, reliability, trust, and serving expectations;
* known source caveats from Phase 05;
* known domain constraints from Phase 06;
* known local/cloud/brownfield constraints.

If the Conceptual Domain Model or Phase 06 handoff is missing or too weak, stop and ask whether to route back to `des-domain-modeling`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/07-architecture-decision-record.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-07-support-plan.md
_des-output/evidence/phase-07/phase-07-evidence-pack.md
_des-output/implementation-artifacts/phase-07-artifact-revision.md
_des-output/implementation-artifacts/phase-07-done-gate.md
_des-output/phase-handoffs/phase-07-to-08-handoff.md
```

The main artifact must capture:

* architecture summary;
* decision context;
* architecture goals;
* architecture principles;
* target architecture overview;
* lifecycle alignment;
* environment strategy;
* storage strategy;
* compute strategy;
* batch/streaming/event strategy;
* integration pattern;
* layer strategy;
* serving strategy;
* orchestration boundary;
* observability direction;
* security/privacy posture;
* governance/metadata direction;
* DataOps/software engineering direction;
* build-versus-buy considerations;
* technology constraints and options;
* architecture options considered;
* architecture decisions;
* trade-offs;
* reversibility classification;
* architecture evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 07 evidence summary;
* Phase 07 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, and `status_file`.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every HALT point and wait for user input.
7. Do not invent platform choices, architecture constraints, environment strategy, security posture, cost limits, service levels, or team capability.
8. Do not select tools before architecture decisions are clear.
9. Do not design physical schemas, detailed pipelines, transformations, dashboards, APIs, CI/CD files, or code.
10. Before marking Phase 07 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream business, product, source, and domain context.
2. Confirm Phase 06 handoff readiness.
3. Identify architecture drivers and constraints.
4. Define architecture scope.
5. Define architecture goals and principles.
6. Evaluate candidate architecture options.
7. Make architecture decisions with trade-offs.
8. Classify decisions as reversible or hard to reverse.
9. Validate architecture fit against product outputs, source realities, domain constraints, trust expectations, freshness, security, cost, and team capability.
10. Identify risks, assumptions, dependencies, and unresolved questions.
11. Draft the Architecture Decision Record.
12. Create the Phase 07 Support Plan.
13. Collect or reference Phase 07 evidence.
14. Revise the Architecture Decision Record using evidence.
15. Run the Phase 07 Done Gate.
16. Create the Phase 07 to Phase 08 Handoff.
17. Update workflow status.
18. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 07 uses architecture validation support work.

The purpose is not implementation design. The purpose is to prevent downstream ingestion, Bronze, Silver, Gold, orchestration, and serving work from depending on undocumented or unjustified platform and architecture choices.

### Required Support Work

| Support Work                           | Purpose                                                                                           | Output                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------- |
| Phase 06 Handoff Review                | Check architecture derives from validated domain context and source caveats.                      | Evidence pack section       |
| Architecture Driver Traceability Check | Trace architecture choices to product, requirement, source, domain, trust, and freshness drivers. | Evidence pack section       |
| Architecture Option Comparison         | Ensure major decisions compare alternatives and trade-offs.                                       | Evidence pack section       |
| Platform Feasibility Check             | Validate target platform direction against constraints.                                           | Evidence pack section       |
| Environment Strategy Check             | Validate local/dev/test/prod strategy.                                                            | Evidence pack section       |
| Storage/Compute Fit Check              | Validate storage and compute choices against source, volume, team, cost, and serving needs.       | Evidence pack section       |
| Batch/Streaming/Event Fit Check        | Validate latency and event strategy against freshness/source patterns.                            | Evidence pack section       |
| Layer Strategy Check                   | Validate logical layer strategy for quality, governance, traceability, and consumer trust.        | Evidence pack section       |
| Serving Strategy Check                 | Validate serving approach against data product outputs.                                           | Evidence pack section       |
| Security/Privacy Architecture Check    | Validate security posture against source classifications and product trust.                       | Evidence pack section       |
| Governance/Metadata Architecture Check | Validate catalog, lineage, metadata, ownership, and change expectations.                          | Evidence pack section       |
| Cost and Operational Burden Check      | Validate architecture against team and budget realities.                                          | Evidence pack section       |
| Reversibility and Lock-In Check        | Classify hard-to-reverse decisions.                                                               | Evidence pack section       |
| Phase 07 Done Gate                     | Decide whether Phase 07 is Done, Done with risks, or Blocked.                                     | `phase-07-done-gate.md`     |
| Phase 07 Handoff                       | Tell Phase 08 what architecture constraints ingestion design must follow.                         | `phase-07-to-08-handoff.md` |

### Optional Support Work

Optional support work may include:

```text
fabric_feasibility_check
duckdb_local_first_feasibility_check
cloud_cost_probe
security_review
architecture_tradeoff_review
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 07 discovers that architecture cannot satisfy approved product, source, domain, security, cost, or team constraints.

---

## Evidence Required

Phase 07 evidence should justify architecture decisions.

Acceptable evidence includes:

* Phase 06 Conceptual Domain Model;
* Phase 06 to Phase 07 handoff;
* Phase 06 evidence pack;
* Phase 05 source caveats;
* approved data product outputs;
* freshness/SLA and trust expectations;
* security/privacy classifications;
* cost/team/platform constraints;
* architecture option comparison;
* platform feasibility notes;
* local/cloud feasibility notes;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_06_handoff_evidence
architecture_driver_traceability_evidence
option_comparison_evidence
platform_feasibility_evidence
environment_strategy_evidence
storage_compute_fit_evidence
batch_streaming_event_fit_evidence
layer_strategy_evidence
serving_strategy_evidence
security_privacy_evidence
governance_metadata_evidence
cost_operational_burden_evidence
reversibility_lock_in_evidence
```

If evidence is missing, mark the item as `Proposed`, `Draft`, `Open`, `Risk`, `Deferred`, `Blocked`, or `Waived with reason`.

---

## Guardrails

The agent must not:

* describe tools as the architecture by themselves;
* choose technology because it is trendy;
* ignore business value, consumers, domain, requirements, source realities, trust expectations, or source caveats;
* ignore security, governance, DataOps, observability, and cost;
* create tightly coupled architecture without justification;
* make hard-to-reverse decisions without explicit approval;
* assume batch, streaming, lakehouse, warehouse, data mesh, or event-driven architecture is required without evidence;
* treat local-first, Fabric, Databricks, dbt, DuckDB, Airflow, Power BI, or any tool as automatically correct;
* mark Phase 07 Done if target architecture, environment strategy, storage/compute direction, security posture, major trade-offs, or handoff are unresolved;
* design detailed ingestion pipeline steps, physical table schemas, Bronze/Silver/Gold details, transformation SQL/Python, full data contracts, dashboards, APIs, semantic model internals, CI/CD files, or code.

---

## Quality Checklist

* [ ] Phase 06 Conceptual Domain Model exists or Draft continuation is explicitly accepted.
* [ ] Phase 06 handoff exists or missing handoff risk is explicitly accepted.
* [ ] Architecture supports stated requirements, KPIs, source realities, domain constraints, and product expectations.
* [ ] Architecture drivers are traceable to upstream evidence.
* [ ] Architecture scope is defined.
* [ ] Target platform direction is documented.
* [ ] Environment strategy is documented.
* [ ] Storage format and platform choices are labeled by reversibility with documented rationale.
* [ ] At least two options are considered for major decisions or single-option constraint is justified.
* [ ] No tool is chosen purely because it is popular.
* [ ] Security, data management, DataOps, architecture, orchestration, and software engineering concerns are addressed.
* [ ] Rejected options are documented with reasons.
* [ ] Hard-to-reverse decisions are approved or deferred.
* [ ] Phase 07 support plan exists or is explicitly waived with reason.
* [ ] Phase 07 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 07 artifact revision notes exist.
* [ ] Phase 07 Done Gate result is recorded.
* [ ] Phase 07 to Phase 08 handoff exists.
* [ ] The artifact does not design physical schemas, detailed ingestion pipelines, transformations, dashboards, APIs, CI/CD files, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                                  | Why It Fails                                                                       |
| :------------------------------------------------------------ | :--------------------------------------------------------------------------------- |
| Choosing tools because they are popular                       | Popular does not mean appropriate for scale, team, budget, latency, or governance. |
| Designing streaming for daily reporting SLAs                  | Streaming adds operational burden when batch is sufficient.                        |
| Selecting vendor before understanding constraints             | Vendor lock-in may be discovered too late.                                         |
| Skipping local development path                               | Engineers cannot iterate safely or cheaply.                                        |
| Making irreversible decisions without alternatives documented | No rollback path if the decision fails at scale.                                   |
| Tightly coupling systems                                      | Future changes become expensive and slow.                                          |
| Treating architecture as a diagram only                       | Architecture needs decisions, trade-offs, reversibility, and evidence.             |

---

## Handoff To The Next Skill

Recommend `des-ingestion-design` only after:

```text
Architecture Decision Record exists
+ Phase 07 support plan exists or is waived with reason
+ Phase 07 evidence pack exists or evidence is waived with reason
+ Phase 07 Done Gate is Pass or Pass with risks
+ Phase 07 to Phase 08 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-architecture-design
return to Step 02 architecture options and decisions
resolve HALT question
route back to des-domain-modeling
route back to source/product/requirements phase that owns the missing context
des-wise
des-correct-course
```
