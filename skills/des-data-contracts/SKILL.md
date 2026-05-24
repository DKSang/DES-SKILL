---
name: des-data-contracts
description: Use when creating the Data Contract Specification for source feeds, Silver datasets, Gold datasets, serving outputs, dashboards, semantic models, APIs, ML/AI datasets, external exports, or downstream systems that need stable structure, meaning, freshness, quality, access, ownership, lineage, and change behavior.
---

# des-data-contracts

## Purpose

Use this skill to create and validate the Data Contract Specification for any data engineering project.

This skill defines data contracts for source feeds, Silver datasets, Gold datasets, and serving outputs where consumers depend on stable structure, meaning, freshness, quality, access, ownership, lineage, and change behavior.

A data contract is not only a schema.

A data contract should answer:

```text
Who produces this data?
Who consumes it?
What does it mean?
What is its grain?
What schema and fields are promised?
How fresh must it be?
What quality rules must pass?
Who can access it?
How is it versioned?
What happens when it breaks or changes?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Data Contract Specification is first written.

Phase 12 is Done only when:

```text
Data Contract Specification exists
+ Phase 11 artifact and handoff are reviewed
+ contract validation work is identified
+ contract evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 12 Done Gate passes
+ Phase 12 to Phase 13 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 11 Gold Layer Specification exists;
* Phase 11 handoff exists or the user explicitly accepts the risk of continuing without it;
* one or more datasets or outputs will be consumed by dashboards, semantic models, APIs, ML/AI datasets, analysts, downstream systems, external partners, or production workflows;
* schema, grain, freshness, quality, access, versioning, or change expectations need to be explicit;
* upstream sources require agreed expectations before ingestion or transformation;
* dataset changes could break downstream consumers;
* the workflow router selects Phase 12.

Do not use this skill to write transformation code, implement data quality tests, deploy pipelines, build dashboards, implement APIs, create semantic model internals, implement orchestration, or create CI/CD workflow files.

Allowed in this phase:

```text
contract boundary design
contract inventory design
producer-consumer-owner mapping
contract level decision
schema and field expectation definition
grain and business meaning definition
metric/KPI contract expectation
freshness/SLA expectation
quality expectation
security/access expectation
lineage/metadata expectation
compatibility/versioning policy
change/deprecation/incident policy
acceptance and validation criteria
ownership and approval expectation
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
* `_des-output/phase-handoffs/phase-11-to-12-handoff.md`;
* `_des-output/evidence/phase-11/phase-11-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-11-done-gate.md`, if available;
* workflow status file, if present;
* datasets or outputs requiring contract expectations;
* owners, producers, and consumers;
* grain and schema expectations;
* KPI/metric definitions;
* freshness/SLA expectations;
* data quality rules;
* access/security classification;
* lineage expectations;
* change/versioning expectations.

If the Gold Layer Specification or Phase 11 handoff is missing or too weak, stop and ask whether to route back to `des-gold-layer-design`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/12-data-contract-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-12-support-plan.md
_des-output/evidence/phase-12/phase-12-evidence-pack.md
_des-output/implementation-artifacts/phase-12-artifact-revision.md
_des-output/implementation-artifacts/phase-12-done-gate.md
_des-output/phase-handoffs/phase-12-to-13-handoff.md
```

The main artifact must capture:

* data contract summary;
* contract scope;
* contract non-scope;
* contract design principles;
* contract inventory;
* producer and consumer mapping;
* contract level;
* dataset and output identity;
* business meaning and grain;
* schema expectations;
* field-level expectations;
* metric and KPI expectations;
* freshness and SLA expectations;
* quality expectations;
* volume and completeness expectations;
* security and access expectations;
* lineage and metadata expectations;
* compatibility and versioning policy;
* change management policy;
* deprecation policy;
* incident and escalation policy;
* acceptance and validation criteria;
* contract ownership and approval;
* contract evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 12 evidence summary;
* Phase 12 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, and `status_file`.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every HALT point and wait for user input.
7. Do not invent contract owners, consumers, SLA, quality thresholds, schema fields, versioning rules, or incident policies.
8. Do not write test implementation, transformation code, orchestration code, dashboard code, API code, semantic model internals, or CI/CD workflow files.
9. Before marking Phase 12 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream Gold, Silver, source, product, requirement, and governance context.
2. Confirm Phase 11 handoff readiness.
3. Identify which datasets or outputs require contracts.
4. Define contract boundaries and contract levels.
5. Define producer, consumer, owner, and approver expectations.
6. Define schema, grain, field, metric, freshness, quality, volume, access, lineage, and change obligations.
7. Define compatibility, versioning, deprecation, incident, and escalation policies.
8. Define acceptance and validation criteria.
9. Ask HALT questions for unresolved contract decisions.
10. Draft the Data Contract Specification.
11. Create the Phase 12 Support Plan.
12. Collect or reference Phase 12 evidence.
13. Revise the Data Contract Specification using evidence.
14. Run the Phase 12 Done Gate.
15. Create the Phase 12 to Phase 13 Handoff.
16. Update workflow status.
17. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 12 uses contract validation support work.

The purpose is not implementation. The purpose is to make producer-consumer obligations explicit enough that Phase 13 Transformation Design, Phase 14 Data Quality, Phase 15 Observability, and Phase 21 CI/CD Testing can implement and verify them.

### Required Support Work

| Support Work                   | Purpose                                                                 | Output                      |
| ------------------------------ | ----------------------------------------------------------------------- | --------------------------- |
| Phase 11 Handoff Review        | Check contracts follow approved Gold outputs and contract expectations. | Evidence pack section       |
| Contract Scope Check           | Validate which outputs require contracts.                               | Evidence pack section       |
| Contract Inventory Check       | Validate every required contract is listed.                             | Evidence pack section       |
| Producer/Consumer/Owner Check  | Validate accountability.                                                | Evidence pack section       |
| Contract Level Check           | Validate strictness level fits consumer risk.                           | Evidence pack section       |
| Dataset/Output Identity Check  | Validate contract target identity.                                      | Evidence pack section       |
| Business Meaning/Grain Check   | Validate semantic meaning and one-record meaning.                       | Evidence pack section       |
| Schema Expectation Check       | Validate schema strictness and structure.                               | Evidence pack section       |
| Field-Level Expectation Check  | Validate field meanings, types, requiredness, constraints, examples.    | Evidence pack section       |
| Metric/KPI Expectation Check   | Validate metric fields align with Phase 03.                             | Evidence pack section       |
| Freshness/SLA Check            | Validate delivery/freshness promise.                                    | Evidence pack section       |
| Quality Expectation Check      | Validate testable quality obligations.                                  | Evidence pack section       |
| Volume/Completeness Check      | Validate completeness and volume expectations.                          | Evidence pack section       |
| Security/Access Check          | Validate access constraints.                                            | Evidence pack section       |
| Lineage/Metadata Check         | Validate audit/debug traceability.                                      | Evidence pack section       |
| Compatibility/Versioning Check | Validate breaking vs compatible change rules.                           | Evidence pack section       |
| Change Management Check        | Validate notification/approval process.                                 | Evidence pack section       |
| Deprecation Policy Check       | Validate retirement/migration behavior.                                 | Evidence pack section       |
| Incident/Escalation Check      | Validate contract violation response.                                   | Evidence pack section       |
| Acceptance/Validation Check    | Validate how contract compliance will be checked.                       | Evidence pack section       |
| Ownership/Approval Check       | Validate final accountability and approval.                             | Evidence pack section       |
| Phase 12 Done Gate             | Decide whether Phase 12 is Done, Done with risks, or Blocked.           | `phase-12-done-gate.md`     |
| Phase 12 Handoff               | Tell Phase 13 what transformation design must satisfy.                  | `phase-12-to-13-handoff.md` |

### Optional Support Work

Optional support work may include:

```text
contract_field_check
schema_contract_review
owner_sla_review
breaking_change_review
consumer_expectation_review
security_access_review
metric_contract_review
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 12 discovers that Gold outputs, ownership, consumer expectations, metric definitions, access policy, or SLA expectations are too weak to contract safely.

---

## Evidence Required

Phase 12 evidence should prove that contracts are accountable, testable, versioned, and consumer-aligned.

Acceptable evidence includes:

* Phase 11 Gold Layer Specification;
* Phase 11 to Phase 12 handoff;
* Phase 11 evidence pack;
* Phase 03 KPI definitions;
* Phase 04 product output and consumer expectations;
* Gold grain and output type;
* consumer/owner notes;
* existing data dictionary or schema;
* access/security classification;
* quality rule list;
* SLA/freshness expectation;
* versioning or change policy;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_11_handoff_evidence
contract_scope_evidence
contract_inventory_evidence
producer_consumer_owner_evidence
contract_level_evidence
dataset_output_identity_evidence
business_meaning_grain_evidence
schema_expectation_evidence
field_level_expectation_evidence
metric_kpi_expectation_evidence
freshness_sla_evidence
quality_expectation_evidence
volume_completeness_evidence
security_access_evidence
lineage_metadata_evidence
compatibility_versioning_evidence
change_management_evidence
deprecation_policy_evidence
incident_escalation_evidence
acceptance_validation_evidence
ownership_approval_evidence
```

If evidence is missing, mark the item as `Draft`, `Proposed`, `Risk`, `Blocked`, `Unknown`, or `Waived with reason`.

---

## HALT Policy

This skill must stop when a required decision cannot be safely inferred.

Stop especially when:

* upstream gold layers are unknown;
* consumer expectations are unresolved.

Detailed HALT checkpoints are defined in steps/.

---

## Guardrails

The agent must not:

* create contracts for every dataset without need;
* skip contracts for production or downstream system-facing outputs;
* define schema without grain and meaning;
* define freshness/SLA without owner and evidence;
* define quality expectations without validation criteria;
* define breaking change policy without consumer notification path;
* treat a contract as only a schema;
* ignore access/security expectations;
* ignore ownership and approval;
* mark a contract Approved if producer, consumer, owner, schema, grain, freshness, quality, access, or change policy is unresolved;
* implement tests, transformations, orchestration, dashboards, APIs, semantic internals, CI/CD, or code in this phase.

---

## Quality Checklist

* [ ] Phase 11 Gold Layer Specification exists or Draft continuation is explicitly accepted.
* [ ] Phase 11 handoff exists or missing handoff risk is explicitly accepted.
* [ ] Every P1 contracted output has a contract or is explicitly deferred/blocked.
* [ ] Every contract has a named producer, consumer, owner, and approver where needed.
* [ ] Contract level is documented.
* [ ] Dataset/output identity is documented.
* [ ] Business meaning and grain are explicit.
* [ ] Schema and field expectations are explicit.
* [ ] Freshness and SLA expectations are testable.
* [ ] Quality expectations are testable.
* [ ] Security/access classification is specified.
* [ ] Lineage and metadata expectations are specified.
* [ ] Compatibility/versioning policy is specified.
* [ ] Change management and deprecation policy are specified.
* [ ] Incident/escalation policy is specified for Standard+ contracts.
* [ ] Acceptance and validation criteria are specified.
* [ ] Contract ownership and approval are documented.
* [ ] Phase 12 support plan exists or is explicitly waived with reason.
* [ ] Phase 12 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 12 artifact revision notes exist.
* [ ] Phase 12 Done Gate result is recorded.
* [ ] Phase 12 to Phase 13 handoff exists.
* [ ] The artifact does not implement tests, transformations, dashboards, APIs, orchestration, CI/CD files, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                       | Why It Fails                                                                           |
| :------------------------------------------------- | :------------------------------------------------------------------------------------- |
| Writing contracts only after consumers break       | Reactive contracts capture the current broken state, not the agreed-upon design.       |
| Treating schema as the whole contract              | Freshness, semantics, quality, access, lineage, and change rules are equally critical. |
| Forgetting semantic changes to metrics             | Formula changes are breaking changes even if schema is unchanged.                      |
| Defining guarantees without validation criteria    | Unverified contracts are just documentation and provide false confidence.              |
| No versioning on the contract                      | Consumers cannot detect when a breaking change occurred.                               |
| Contracting draft Gold outputs as production-ready | Overpromises stability and creates downstream trust issues.                            |
| No owner or escalation path                        | Contract violations become nobody’s responsibility.                                    |

---

## Handoff To The Next Skill

Recommend `des-transformation-design` only after:

```text
Data Contract Specification exists
+ Phase 12 support plan exists or is waived with reason
+ Phase 12 evidence pack exists or evidence is waived with reason
+ Phase 12 Done Gate is Pass or Pass with risks
+ Phase 12 to Phase 13 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-data-contracts
return to Step 02 contract boundary and obligations
resolve HALT question
route back to des-gold-layer-design
route back to des-requirements-and-kpis
route back to des-data-product-definition
des-wise
des-correct-course
```
