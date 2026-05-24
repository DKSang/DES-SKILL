---
name: des-data-source-assessment
description: Use when identifying, probing, profiling, comparing, or approving source systems before domain modeling, ingestion, architecture, modeling, or transformation design.
---

# des-data-source-assessment

## Purpose

Use this skill to create and validate the Data Source Inventory and Assessment for any data engineering project.

This skill identifies, evaluates, probes, and classifies candidate source systems needed to support the approved data product, business questions, requirements, KPIs, and source needs.

The goal is to understand source ownership, access method, data creation pattern, sample/schema evidence, expected volume, freshness, reliability, quality, schema stability, security, privacy, compliance, cost, licensing, usage limits, and operational risks before downstream design begins.

In the Phase-Orchestrated Support Model, this phase is not Done when the Data Source Inventory is first written.

Phase 05 is Done only when:

```text
Data Source Inventory exists
+ Phase 04 artifact and handoff are reviewed
+ required source validation work is identified
+ source evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 05 Done Gate passes
+ Phase 05 to Phase 06 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 04 Data Product Specification exists;
* Phase 04 handoff exists or the user explicitly accepts the risk of continuing without it;
* a data product requires one or more source systems;
* the user asks to ingest data, connect to APIs, copy databases, read files, process events, use SaaS data, or collect logs;
* source of truth is unclear;
* source access, ownership, quality, freshness, reliability, schema, licensing, or terms are uncertain;
* upstream contracts, SLAs, or communication expectations are missing;
* the workflow router selects Phase 05.

Do not use this skill to design production ingestion pipelines, storage layout, Bronze tables, Silver transformations, Gold schemas, full data contracts, orchestration, or implementation code.

Allowed in this phase:

```text
source probing
sample response capture
schema inspection
data profiling or sampling
license and terms review
freshness/update pattern check
access feasibility check
ingestion feasibility spike
```

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/phase-handoffs/phase-04-to-05-handoff.md`;
* `_des-output/evidence/phase-04/phase-04-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-04-done-gate.md`, if available;
* workflow status file, if present;
* known candidate sources;
* known source owners;
* known access constraints;
* known source documentation, API docs, database schemas, file samples, data dictionaries, contracts, terms, or license notes;
* known source freshness, quality, schema, privacy, and cost constraints.

If the Data Product Specification or Phase 04 handoff is missing or too weak, stop and ask whether to route back to `des-data-product-definition`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/05-data-source-inventory.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-05-support-plan.md
_des-output/evidence/phase-05/phase-05-evidence-pack.md
_des-output/implementation-artifacts/phase-05-artifact-revision.md
_des-output/implementation-artifacts/phase-05-done-gate.md
_des-output/phase-handoffs/phase-05-to-06-handoff.md
```

The main artifact must capture:

* source inventory summary;
* source-to-product mapping;
* source-to-requirement/KPI mapping;
* source-to-source-need mapping;
* source system inventory;
* source type and generation pattern;
* ownership and contacts;
* access method and permissions;
* source of truth decisions;
* data format and schema;
* sample and probe evidence;
* update frequency and freshness;
* expected volume and growth;
* history and retention;
* quality profile and known issues;
* reliability and availability;
* schema change behavior;
* security and privacy classification;
* compliance and regulatory concerns;
* cost, licensing, and usage limits;
* operational dependencies;
* upstream contract/SLA expectations;
* ingestion feasibility rating;
* risks;
* assumptions;
* open questions;
* Phase 05 evidence summary;
* Phase 05 handoff notes;
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
8. Do not invent source ownership, source of truth, access permission, freshness, schema stability, privacy classification, licensing, terms, or reliability guarantees.
9. Do not design production ingestion pipelines, Bronze tables, transformations, contracts, orchestration, or code.
10. Before marking Phase 05 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream product, requirement, and question context.
2. Confirm Phase 04 handoff readiness.
3. Identify candidate source systems needed for the data product.
4. Map source candidates to product outputs, requirements, KPIs, and source needs.
5. Classify each source by type, access pattern, owner, and data generation pattern.
6. Probe or inspect sources where possible.
7. Capture sample response, schema snapshot, sample data, or documentation evidence.
8. Assess source quality, freshness, schema stability, reliability, security, privacy, licensing, cost, and operational risk.
9. Decide source-of-truth candidates and unresolved conflicts.
10. Identify upstream contract, SLA, and communication expectations.
11. Rate ingestion feasibility.
12. Ask HALT questions for missing ownership, access, source of truth, security, reliability, quality, schema change, cost, license, and missing probe evidence.
13. Draft the Data Source Inventory.
14. Create the Phase 05 Support Plan.
15. Collect or reference Phase 05 evidence.
16. Revise the Data Source Inventory using evidence.
17. Run the Phase 05 Done Gate.
18. Create the Phase 05 to Phase 06 Handoff.
19. Update workflow status.
20. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 05 uses real source validation support work.

The purpose is not production ingestion design. The purpose is to prevent downstream phases from using imaginary, unsuitable, inaccessible, unlicensed, unstable, low-quality, or unowned sources.

### Required Support Work

| Support Work                              | Purpose                                                                               | Output                      |
| ----------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------- |
| Phase 04 Handoff Review                   | Check source assessment follows approved product outputs/source needs.                | Evidence pack section       |
| Source Need Mapping Check                 | Map every P1 product output/source need to candidate sources.                         | Evidence pack section       |
| Candidate Source Inventory Check          | Ensure candidate sources are identified and classified.                               | Evidence pack section       |
| Source Access Probe                       | Check whether source can be accessed legally/technically, if possible.                | Evidence pack section       |
| Schema Inspection                         | Capture schema/docs/sample schema where possible.                                     | Evidence pack section       |
| Sample Data or Response Capture           | Capture API response, file sample, query sample, or documented sample.                | Evidence pack section       |
| Data Quality Profile or Sampling          | Capture nulls, duplicates, missing fields, freshness, or known issues where possible. | Evidence pack section       |
| Freshness and Update Pattern Check        | Verify update frequency and source creation pattern.                                  | Evidence pack section       |
| License, Terms, and Usage Limit Review    | Check legal, license, quota, rate limit, or cost blockers.                            | Evidence pack section       |
| Security and Privacy Classification Check | Identify sensitivity and governance needs.                                            | Evidence pack section       |
| Source of Truth Check                     | Identify authoritative source per key concept.                                        | Evidence pack section       |
| Ingestion Feasibility Check               | Rate source readiness for later ingestion design.                                     | Evidence pack section       |
| Phase 05 Done Gate                        | Decide whether Phase 05 is Done, Done with risks, or Blocked.                         | `phase-05-done-gate.md`     |
| Phase 05 Handoff                          | Tell Phase 06 what sources and concepts can safely be used.                           | `phase-05-to-06-handoff.md` |

### Optional Support Work

Optional support work may include:

```text
api_probe
file_sample_inspection
database_sample_query
schema_snapshot
duckdb_profile_spike
python_profile_spike
license_research
security_review
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 05 discovers that Phase 04 product outputs cannot be supported by plausible or accessible sources.

---

## Evidence Required

Phase 05 should use stronger evidence than Phase 01-04.

Acceptable evidence includes:

* source documentation;
* API documentation;
* API sample response;
* file sample;
* schema snapshot;
* database table sample query;
* data dictionary;
* profiling report;
* license/terms note;
* quota/rate-limit note;
* access test result;
* source owner statement;
* security/privacy classification note;
* accepted risk statement when evidence cannot be collected.

Minimum evidence categories:

```text
phase_04_handoff_evidence
source_need_mapping_evidence
candidate_source_evidence
access_probe_evidence
schema_inspection_evidence
sample_data_evidence
data_quality_profile_evidence
freshness_update_pattern_evidence
license_terms_evidence
security_privacy_evidence
source_of_truth_evidence
ingestion_feasibility_evidence
```

If evidence is missing, mark the item as `Unknown`, `Risk`, `Blocked`, `Deferred`, or `Waived with reason`.

---

## Guardrails

The agent must not:

* treat available data as automatically suitable data;
* assume a source is authoritative without evidence;
* assume API/database/file access exists;
* assume license or terms are acceptable without checking;
* ignore source ownership or contact path;
* ignore schema change and quality risk;
* ignore security, privacy, compliance, or credential handling;
* design production ingestion implementation in this phase;
* design Bronze/Silver/Gold tables in this phase;
* mark a source as Ready if ownership, access, quality, and reliability are unknown;
* mark Phase 05 Done if P1 data product outputs have no plausible source mapping;
* start Phase 06 without source-to-concept risks and source-of-truth decisions.

---

## Quality Checklist

* [ ] Phase 04 Data Product Specification exists or Draft continuation is explicitly accepted.
* [ ] Phase 04 handoff exists or missing handoff risk is explicitly accepted.
* [ ] Each candidate source has a source ID and description.
* [ ] Each P1 product output maps to at least one candidate source or is marked blocked.
* [ ] Each source maps to product output, requirement, KPI, or source need.
* [ ] Source type, generation pattern, owner, access method, and permission status are documented.
* [ ] Sample, schema, documentation, or probe evidence exists for P1 sources or is waived with reason.
* [ ] Freshness, schema stability, volume, quality, reliability, security, and privacy are documented.
* [ ] License, cost, quota, and usage limits are documented.
* [ ] Source of truth decisions are resolved or documented.
* [ ] Ingestion feasibility is rated.
* [ ] Phase 05 support plan exists or is explicitly waived with reason.
* [ ] Phase 05 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 05 artifact revision notes exist.
* [ ] Phase 05 Done Gate result is recorded.
* [ ] Phase 05 to Phase 06 handoff exists.
* [ ] The artifact does not design production ingestion pipelines, Bronze tables, Silver transformations, Gold schemas, orchestration, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                            | Why It Fails                                                                 |
| :------------------------------------------------------ | :--------------------------------------------------------------------------- |
| Treating available data as automatically suitable data  | Downstream quality and reliability expectations are ignored.                 |
| Assuming API/database/file access exists                | Pipeline design proceeds without legal or technical connectivity.            |
| Querying production databases directly without approval | Read load can impact source system operations.                               |
| Marking Done with unknown source ownership              | Schema changes break pipelines with no upstream accountability.              |
| Treating source hints as approved sources | Phase 05 must validate source suitability.                                   |
| Skipping sample/schema evidence                         | Domain modeling and ingestion design will depend on unsupported assumptions. |
| Designing Bronze/Silver/Gold here                       | Storage and transformation design belongs downstream.                        |

---

## HALT Policy

This skill must stop when a source assessment decision cannot be safely inferred.

Stop especially when:

* Phase 04 Data Product Specification or handoff is missing;
* data product outputs cannot be mapped to candidate sources;
* source owner is unknown for a P1 source;
* source of truth is unclear;
* access method or permission is unknown;
* source contains sensitive or regulated data;
* upstream freshness or reliability is unclear;
* source quality is unknown for a P1 output;
* schema change behavior is unknown;
* source cost, quota, terms, or licensing may block usage;
* no sample, schema, documentation, or probe evidence exists for a P1 source and the risk is not accepted.

---

## Handoff To The Next Skill

Recommend `des-domain-modeling` only after:

```text
Data Source Inventory exists
+ Phase 05 support plan exists or is waived with reason
+ Phase 05 evidence pack exists or evidence is waived with reason
+ Phase 05 Done Gate is Pass or Pass with risks
+ Phase 05 to Phase 06 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-data-source-assessment
return to Step 02 source inventory and risk assessment
resolve HALT question
route back to des-data-product-definition
des-wise
des-correct-course
```
