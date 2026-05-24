---
name: des-data-quality
description: Use when defining or designing data quality dimensions, rules, thresholds, severity, gates, failure handling, ownership, and validation expectations across Bronze, Silver, Gold, contracts, transformations, and serving outputs.
---

# des-data-quality

## Purpose

Use this skill to create and validate the Data Quality Specification for any data engineering project.

This skill defines data quality dimensions, rules, thresholds, severity, ownership, validation scope, quality gates, failure handling, evidence, and monitoring expectations across source, Bronze, Silver, Gold, contracts, transformations, and serving outputs.

The goal is to make quality expectations explicit before implementing tests, orchestration, monitoring, CI/CD gates, or release workflows.

Data Quality Design should answer:

```text
What must be checked?
On which dataset or output?
Which contract, transformation, or business rule does it protect?
What threshold means pass, warning, or fail?
How severe is failure?
What happens when it fails?
Who owns the response?
What evidence is recorded?
Which rules become pipeline gates, monitoring signals, or CI/CD checks later?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Data Quality Specification is first written.

Phase 14 is Done only when:

```text
Data Quality Specification exists
+ Phase 13 artifact and handoff are reviewed
+ quality validation work is identified
+ quality evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 14 Done Gate passes
+ Phase 14 to Phase 15 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 13 Transformation Specification exists;
* Phase 13 handoff exists or the user explicitly accepts the risk of continuing without it;
* data contracts contain quality expectations;
* Bronze, Silver, Gold, or serving outputs need validation rules;
* transformations need validation before publish;
* freshness, completeness, uniqueness, validity, consistency, accuracy, reconciliation, schema, or referential integrity checks are needed;
* the user asks to create tests, quality gates, validation checks, Great Expectations suites, dbt tests, SQL checks, or data quality monitoring;
* the workflow router selects Phase 14.

Do not use this skill to implement tests, write SQL/Python/dbt code, create orchestration workflows, build dashboards, implement monitoring tools, create CI/CD workflow files, or deploy checks.

Allowed in this phase:

```text
quality scope design
quality dimension selection
quality rule catalog design
dataset-to-rule mapping
layer-specific rule design
contract quality alignment
transformation validation alignment
freshness/completeness/uniqueness/validity/integrity/reconciliation/schema/null/anomaly rules
threshold and tolerance definition
severity classification
failure handling and quality gates
rule ownership and stewardship
evidence/reporting expectations
monitoring and observability expectations
CI/CD and release gate candidate identification
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
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/phase-handoffs/phase-13-to-14-handoff.md`;
* `_des-output/evidence/phase-13/phase-13-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-13-done-gate.md`, if available;
* workflow status file, if present;
* contracted outputs;
* transformation validation expectations;
* Bronze technical quality expectations;
* Silver conformance quality expectations;
* Gold boundary quality expectations;
* freshness/SLA expectations;
* metric reconciliation requirements;
* access/security constraints;
* consumer acceptance criteria.

If the Transformation Specification or Phase 13 handoff is missing or too weak, stop and ask whether to route back to `des-transformation-design`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/14-data-quality-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-14-support-plan.md
_des-output/evidence/phase-14/phase-14-evidence-pack.md
_des-output/implementation-artifacts/phase-14-artifact-revision.md
_des-output/implementation-artifacts/phase-14-done-gate.md
_des-output/phase-handoffs/phase-14-to-15-handoff.md
```

The main artifact must capture:

* data quality summary;
* quality scope;
* quality non-scope;
* quality design principles;
* quality dimensions;
* quality rule inventory;
* dataset-to-rule mapping;
* layer-specific quality rules;
* contract quality alignment;
* transformation validation alignment;
* freshness rules;
* completeness and volume rules;
* uniqueness and grain rules;
* validity and domain rules;
* referential integrity rules;
* consistency and reconciliation rules;
* accuracy and business reasonableness rules;
* schema and compatibility rules;
* null and missing value rules;
* anomaly and threshold rules;
* severity classification;
* failure handling and quality gates;
* ownership and stewardship;
* evidence and reporting expectations;
* monitoring and observability expectations;
* release and CI/CD gate candidates;
* data quality evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 14 evidence summary;
* Phase 14 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Identify Phase-Orchestrated Support files:

   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
5. Load only `steps/step-01-context-and-readiness.md`.
6. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
7. Stop at every HALT point and wait for user input.
8. Do not invent quality thresholds, blocking rules, reconciliation tolerances, owners, or acceptance criteria.
9. Do not write SQL, Python, dbt, Spark, Great Expectations, orchestration, monitoring, CI/CD, dashboard, API, or semantic model code.
10. Before marking Phase 14 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream transformation, contract, Gold, Silver, Bronze, and requirement context.
2. Confirm Phase 13 handoff readiness.
3. Identify datasets and outputs requiring quality rules.
4. Define data quality dimensions and rule categories.
5. Map rules to datasets, contracts, transformations, and layers.
6. Define thresholds, severity, failure handling, and quality gates.
7. Define evidence, reporting, ownership, and monitoring expectations.
8. Ask HALT questions for unresolved quality decisions.
9. Draft the Data Quality Specification.
10. Create the Phase 14 Support Plan.
11. Collect or reference Phase 14 evidence.
12. Revise the Data Quality Specification using evidence.
13. Run the Phase 14 Done Gate.
14. Create the Phase 14 to Phase 15 Handoff.
15. Update workflow status.
16. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 14 uses quality validation support work.

The purpose is not test implementation. The purpose is to make quality rules explicit, risk-based, owned, observable, and ready for Phase 15 orchestration/observability and Phase 21 CI/CD.

### Required Support Work

| Support Work                               | Purpose                                                              | Output                      |
| ------------------------------------------ | -------------------------------------------------------------------- | --------------------------- |
| Phase 13 Handoff Review                    | Check quality design follows transformation validation expectations. | Evidence pack section       |
| Quality Scope Check                        | Validate scope of datasets and outputs covered.                      | Evidence pack section       |
| Quality Dimension Check                    | Validate selected quality dimensions.                                | Evidence pack section       |
| Quality Rule Inventory Check               | Ensure rule catalog exists.                                          | Evidence pack section       |
| Dataset-to-Rule Mapping Check              | Ensure rules map to datasets/outputs.                                | Evidence pack section       |
| Layer-Specific Rule Check                  | Validate Bronze/Silver/Gold quality boundaries.                      | Evidence pack section       |
| Contract Quality Alignment Check           | Validate contract clauses map to rules.                              | Evidence pack section       |
| Transformation Validation Alignment Check  | Validate transformation expectations map to rules.                   | Evidence pack section       |
| Freshness Rule Check                       | Validate SLA/freshness checks.                                       | Evidence pack section       |
| Completeness/Volume Rule Check             | Validate volume and coverage checks.                                 | Evidence pack section       |
| Uniqueness/Grain Rule Check                | Validate uniqueness at declared grain.                               | Evidence pack section       |
| Validity/Domain Rule Check                 | Validate ranges, formats, values, and domains.                       | Evidence pack section       |
| Referential Integrity Rule Check           | Validate relationship checks.                                        | Evidence pack section       |
| Consistency/Reconciliation Rule Check      | Validate cross-dataset/source/metric reconciliation.                 | Evidence pack section       |
| Accuracy/Reasonableness Rule Check         | Validate plausibility and business reasonableness.                   | Evidence pack section       |
| Schema/Compatibility Rule Check            | Validate schema and compatibility rules.                             | Evidence pack section       |
| Null/Missing Rule Check                    | Validate null/missing semantics.                                     | Evidence pack section       |
| Anomaly/Threshold Rule Check               | Validate anomaly or threshold approach.                              | Evidence pack section       |
| Severity Classification Check              | Validate P1/P2/P3 severity.                                          | Evidence pack section       |
| Failure Handling/Gate Check                | Validate block/warn/info/manual behavior.                            | Evidence pack section       |
| Ownership/Stewardship Check                | Validate rule owner and response owner.                              | Evidence pack section       |
| Evidence/Reporting Check                   | Validate result evidence recorded.                                   | Evidence pack section       |
| Monitoring/Observability Expectation Check | Prepare Phase 15 observability inputs.                               | Evidence pack section       |
| CI/CD/Release Gate Candidate Check         | Prepare Phase 21 test/gate inputs.                                   | Evidence pack section       |
| Phase 14 Done Gate                         | Decide whether Phase 14 is Done, Done with risks, or Blocked.        | `phase-14-done-gate.md`     |
| Phase 14 Handoff                           | Tell Phase 15 what to observe/orchestrate.                           | `phase-14-to-15-handoff.md` |

---

## Guardrails

The agent must not:

* treat data quality as only null checks;
* create quality rules without business, contract, transformation, or layer relevance;
* mark a rule as blocking without approval;
* invent thresholds without evidence or owner approval;
* ignore freshness and completeness;
* ignore grain uniqueness;
* ignore metric reconciliation where metrics are contractual;
* ignore layer boundaries: Bronze technical quality, Silver conformance quality, Gold consumer quality;
* silently accept quality failures;
* implement tests in this phase;
* mark quality design Done if P1 contracted outputs lack quality rules, severity, failure handling, evidence, or ownership;
* write SQL, Python, dbt, Great Expectations, Spark, orchestration, monitoring, CI/CD, dashboard, API, semantic model, or code.

---

## Handoff To The Next Skill

Recommend `des-orchestration-observability` only after:

```text
Data Quality Specification exists
+ Phase 14 support plan exists or is waived with reason
+ Phase 14 evidence pack exists or evidence is waived with reason
+ Phase 14 Done Gate is Pass or Pass with risks
+ Phase 14 to Phase 15 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-data-quality
return to Step 02 quality rules and gates
resolve HALT question
route back to des-transformation-design
route back to des-data-contracts
route back to des-gold-layer-design
des-wise
des-correct-course
```
