---
name: des-gold-layer-design
description: Use when creating the Gold Layer Specification for curated, consumer-ready marts, metric-ready datasets, reporting outputs, feature datasets, API/read-model outputs, or product-aligned datasets derived from trusted Silver data.
---

# des-gold-layer-design

## Purpose

Use this skill to create and validate the Gold Layer Specification for any data engineering project.

This skill defines curated, consumer-ready Gold datasets, marts, aggregates, metric outputs, feature outputs, reporting outputs, API/application-serving read models, export-ready outputs, or product-aligned datasets derived from trusted Silver data.

The Gold layer should be designed around approved business questions, KPIs, consumers, requirements, and data product outputs.

Gold should answer:

```text
Which product-ready datasets are needed,
for which consumers,
at what grain,
using which approved metrics,
with what freshness, quality, contract, and lineage expectations?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Gold Layer Specification is first written.

Phase 11 is Done only when:

```text
Gold Layer Specification exists
+ Phase 10 artifact and handoff are reviewed
+ Gold validation work is identified
+ Gold evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 11 Done Gate passes
+ Phase 11 to Phase 12 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 10 Silver Layer Specification exists;
* Phase 10 handoff exists or the user explicitly accepts the risk of continuing without it;
* trusted Silver entities/events need to be packaged for consumer-facing analytics, reports, semantic models, ML/AI datasets, APIs, exports, or product outputs;
* business questions need curated outputs;
* KPIs need metric-ready datasets;
* star schema, wide table, aggregate table, data mart, feature table, or serving dataset design is being discussed;
* the workflow router selects Phase 11.

Do not use this skill to write SQL/Python transformation code, build dashboards, implement APIs, create semantic model internals, define full data contracts, design orchestration implementation, create CI/CD workflow files, or deploy pipelines.

Allowed in this phase:

```text
Gold dataset boundary design
business-question-to-Gold mapping
KPI/metric-to-Gold mapping
Silver-to-Gold mapping
Gold grain and aggregation rules
Gold output type/modeling pattern decision
dimension/fact/aggregate/output model decision
filtering and slicing expectations
history/SCD behavior
freshness/SLA expectation
Gold boundary DQ rules
access/security handling
contract expectation identification
lineage and traceability expectation
performance/cost consideration
```

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/05-data-source-inventory.md`;
* `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
* `_des-output/planning-artifacts/07-architecture-decision-record.md`;
* `_des-output/planning-artifacts/08-ingestion-specification.md`;
* `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/phase-handoffs/phase-10-to-11-handoff.md`;
* `_des-output/evidence/phase-10/phase-10-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-10-done-gate.md`, if available;
* workflow status file, if present;
* P1/P2 business questions;
* approved KPIs and metric definitions;
* P1/P2 functional and non-functional requirements;
* data product outputs;
* serving direction from architecture;
* Silver dataset inventory;
* Silver grain and identity rules;
* Silver quality risks;
* Silver source-of-truth and reconciliation decisions;
* freshness/SLA expectations;
* security/privacy constraints;
* consumer access expectations.

If the Silver Layer Specification or Phase 10 handoff is missing or too weak, stop and ask whether to route back to `des-silver-layer-design`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/11-gold-layer-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-11-support-plan.md
_des-output/evidence/phase-11/phase-11-evidence-pack.md
_des-output/implementation-artifacts/phase-11-artifact-revision.md
_des-output/implementation-artifacts/phase-11-done-gate.md
_des-output/phase-handoffs/phase-11-to-12-handoff.md
```

The main artifact must capture:

* Gold layer summary;
* Gold scope;
* Gold non-scope;
* Gold design principles;
* business question to Gold mapping;
* requirement and KPI to Gold mapping;
* data product output to Gold mapping;
* Silver to Gold mapping;
* Gold dataset inventory;
* Gold output type;
* consumer and serving alignment;
* grain and aggregation rules;
* metric and KPI definitions used;
* dimension/fact/aggregate/output model decisions;
* filtering and slicing expectations;
* history and slowly changing behavior;
* freshness and SLA expectations;
* Gold boundary data quality rules;
* access control and security handling;
* contract expectations;
* lineage and traceability;
* performance and cost considerations;
* Gold evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 11 evidence summary;
* Phase 11 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, and `status_file`.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every HALT point and wait for user input.
7. Do not invent Gold datasets, metric definitions, aggregation rules, grain, consumers, serving paths, or product outputs.
8. Do not write SQL/Python transformation code, build dashboards, implement APIs, create semantic model internals, define full data contracts, design orchestration implementation, create CI/CD workflow files, or deploy pipelines.
9. Before marking Phase 11 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream Silver, KPI, product, question, architecture, and serving context.
2. Confirm Phase 10 handoff readiness.
3. Identify P1/P2 business questions and product outputs requiring Gold datasets.
4. Define Gold dataset boundaries and output types.
5. Map business questions, KPIs, product outputs, and Silver datasets to Gold outputs.
6. Define consumer, serving direction, grain, aggregation, metric, history, slicing, and model pattern.
7. Define quality, freshness, access, contract, lineage, performance, and cost expectations.
8. Ask HALT questions for unresolved Gold output, metric, grain, aggregation, serving, contract, or lineage decisions.
9. Draft the Gold Layer Specification.
10. Create the Phase 11 Support Plan.
11. Collect or reference Phase 11 evidence.
12. Revise the Gold Layer Specification using evidence.
13. Run the Phase 11 Done Gate.
14. Create the Phase 11 to Phase 12 Handoff.
15. Update workflow status.
16. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 11 uses Gold validation support work.

The purpose is not dashboard/API implementation. The purpose is to make product-ready data outputs that are traceable, metric-consistent, contract-aware, and consumer-aligned.

### Required Support Work

| Support Work                              | Purpose                                                            | Output                      |
| ----------------------------------------- | ------------------------------------------------------------------ | --------------------------- |
| Phase 10 Handoff Review                   | Check Gold design follows approved Silver constraints and caveats. | Evidence pack section       |
| Business Question to Gold Mapping Check   | Ensure Gold exists because it answers approved questions.          | Evidence pack section       |
| KPI/Requirement to Gold Mapping Check     | Ensure metrics and requirements trace to Phase 03.                 | Evidence pack section       |
| Data Product Output to Gold Mapping Check | Ensure Gold supports approved data product outputs.                | Evidence pack section       |
| Silver-to-Gold Mapping Check              | Ensure Gold uses approved Silver datasets.                         | Evidence pack section       |
| Gold Dataset Boundary Check               | Validate Gold outputs are not vague or monolithic.                 | Evidence pack section       |
| Consumer/Serving Alignment Check          | Validate consumers and serving direction.                          | Evidence pack section       |
| Grain/Aggregation Check                   | Validate one-record meaning and aggregation logic.                 | Evidence pack section       |
| Metric Definition Alignment Check         | Validate metrics align with approved KPI definitions.              | Evidence pack section       |
| Modeling Pattern Check                    | Validate star/aggregate/wide/metric/API/ML/export pattern.         | Evidence pack section       |
| Filtering/Slicing Check                   | Validate dimensions and filters needed by users.                   | Evidence pack section       |
| History/SCD Behavior Check                | Validate current vs historical/as-of behavior.                     | Evidence pack section       |
| Freshness/SLA Check                       | Validate Gold refresh expectations.                                | Evidence pack section       |
| Gold Boundary Quality Check               | Validate trust rules for Gold outputs.                             | Evidence pack section       |
| Access/Security Check                     | Validate consumer access and sensitive output handling.            | Evidence pack section       |
| Contract Expectation Check                | Validate whether Phase 12 needs a contract and at what level.      | Evidence pack section       |
| Lineage/Traceability Check                | Validate trace back to Silver/Bronze/source.                       | Evidence pack section       |
| Performance/Cost Check                    | Validate model is feasible for serving pattern.                    | Evidence pack section       |
| Phase 11 Done Gate                        | Decide whether Phase 11 is Done, Done with risks, or Blocked.      | `phase-11-done-gate.md`     |
| Phase 11 Handoff                          | Tell Phase 12 what contracts must cover.                           | `phase-11-to-12-handoff.md` |

### Optional Support Work

Optional support work may include:

```text
gold_grain_check
kpi_reproducibility_check
aggregation_spike
dashboard_query_spike
serving_query_spike
metric_reconciliation_review
privacy_security_review
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 11 discovers that KPI definitions, product outputs, Silver grain, source-of-truth, or serving direction are too weak to support safe Gold design.

---

## Evidence Required

Phase 11 evidence should prove that Gold is question-aligned, metric-consistent, consumer-ready, traceable, and contract-aware.

Acceptable evidence includes:

* Phase 10 Silver Layer Specification;
* Phase 10 to Phase 11 handoff;
* Phase 10 evidence pack;
* Phase 02 Business Question Catalog;
* Phase 03 Requirements and KPI Catalog;
* Phase 04 Data Product Specification;
* approved metric definitions;
* Silver grain and DQ decisions;
* serving direction from architecture;
* consumer access/security notes;
* query/aggregation spike, if available;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_10_handoff_evidence
business_question_to_gold_mapping_evidence
kpi_requirement_to_gold_mapping_evidence
data_product_output_to_gold_mapping_evidence
silver_to_gold_mapping_evidence
gold_dataset_boundary_evidence
consumer_serving_alignment_evidence
grain_aggregation_evidence
metric_definition_alignment_evidence
modeling_pattern_evidence
filtering_slicing_evidence
history_scd_behavior_evidence
freshness_sla_evidence
gold_boundary_quality_evidence
access_security_evidence
contract_expectation_evidence
lineage_traceability_evidence
performance_cost_evidence
```

If evidence is missing, mark the item as `Draft`, `Open`, `Risk`, `Deferred`, `Blocked`, `Unknown`, or `Waived with reason`.

---

## Guardrails

The agent must not:

* create Gold tables because they are convenient rather than because they serve a question/use case;
* define final metric formulas that conflict with Phase 03;
* invent KPI definitions;
* aggregate data without approved grain and aggregation rules;
* mix unrelated consumers into one unclear Gold output;
* design semantic model internals in this phase;
* design dashboard layout or API implementation;
* define full data contracts in this phase;
* hide dependency on unresolved Silver identity/source-of-truth issues;
* mark Gold datasets Ready if business question mapping, grain, KPI mapping, quality rules, lineage, consumer, or serving expectation is unresolved.

---

## Quality Checklist

* [ ] Phase 10 Silver Layer Specification exists or Draft continuation is explicitly accepted.
* [ ] Phase 10 handoff exists or missing handoff risk is explicitly accepted.
* [ ] Each P1 business question maps to a Gold output or is explicitly deferred.
* [ ] Each P1 product output maps to a Gold dataset or is explicitly deferred.
* [ ] Each P1 Gold dataset has declared consumer and serving direction.
* [ ] Each P1 Gold dataset has declared Silver inputs.
* [ ] Each P1 Gold dataset has declared grain.
* [ ] Aggregation rules are documented where metrics or summaries exist.
* [ ] Metric and KPI usage aligns with Phase 03 definitions.
* [ ] Star schema, fact/dimension, aggregate table, wide table, metric-ready dataset, API/read model, ML/AI dataset, or export pattern is chosen.
* [ ] Filtering and slicing expectations are documented.
* [ ] History/SCD behavior is explicitly documented.
* [ ] Freshness/SLA expectations are defined.
* [ ] Gold boundary quality rules are established.
* [ ] Access control and security classification are specified.
* [ ] Contract expectation is documented.
* [ ] Lineage and traceability fields back to Silver/Bronze/source are defined.
* [ ] Performance and cost considerations are documented.
* [ ] Phase 11 support plan exists or is explicitly waived with reason.
* [ ] Phase 11 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 11 artifact revision notes exist.
* [ ] Phase 11 Done Gate result is recorded.
* [ ] Phase 11 to Phase 12 handoff exists.
* [ ] The artifact does not design semantic model internals, dashboard visuals, API implementation, full data contracts, orchestration implementation, CI/CD files, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                           | Why It Fails                                                                            |
| :----------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| Creating Gold tables without a clear consumer/question | Unused datasets create technical debt, waste compute/storage, and confuse users.        |
| Redefining metrics inconsistently with Phase 03        | Creates conflicting numbers in downstream reports, destroying trust in the platform.    |
| Designing a single monolithic table for all consumers  | Creates a rigid, slow-performing model that is hard to maintain and security-gate.      |
| Writing SQL/Python transformation logic here           | Premature implementation; this phase should define product-ready data design.           |
| Ignoring slowly changing dimension history             | Causes report metrics to shift or overwrite history incorrectly when dimensions change. |
| Treating Gold as semantic model                        | Semantic model internals are Phase 16; Gold provides stable inputs.                     |
| Skipping contract expectation                          | Phase 12 cannot define ownership, SLA, schema, DQ, and change policy safely.            |

---

## Handoff To The Next Skill

Recommend `des-data-contracts` only after:

```text
Gold Layer Specification exists
+ Phase 11 support plan exists or is waived with reason
+ Phase 11 evidence pack exists or evidence is waived with reason
+ Phase 11 Done Gate is Pass or Pass with risks
+ Phase 11 to Phase 12 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-gold-layer-design
return to Step 02 Gold output and metric design
resolve HALT question
route back to des-silver-layer-design
route back to des-requirements-and-kpis
route back to des-business-questions
route back to des-data-product-definition
des-wise
des-correct-course
```
