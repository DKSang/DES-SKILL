# Epic Catalog

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-create-epic |
| Skill Type | Support |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Source Workflow | DES main skills |
| Next Support Skill | des-create-story |

## 1. Epic Catalog Summary

```text
<short summary of epic scope, number of epics, release grouping, major dependencies, and blockers>
```

## 2. Epic Creation Scope

In scope:

*
*
*

Out of scope:

* detailed user stories
* sprint planning
* task breakdown
* code implementation
* test implementation
* deployment execution

## 3. Epic Design Principles

| Principle                  | Decision / Notes |
| -------------------------- | ---------------- |
| Traceable to DES artifacts |                  |
| Implementation-oriented    |                  |
| Outcome-based              |                  |
| P1-first                   |                  |
| Dependency-aware           |                  |
| Contract-aware             |                  |
| Quality-aware              |                  |
| Release-aware              |                  |

## 4. Input Artifact Coverage

| DES Artifact                                      | Available?       | Used For Epic Planning    |
| ------------------------------------------------- | ---------------- | ------------------------- |
| 01-business-discovery-brief.md                    | Yes / No / Draft | business context          |
| 02-business-question-catalog.md                   | Yes / No / Draft | priority and value        |
| 03-requirements-and-kpi-catalog.md                | Yes / No / Draft | KPI and acceptance        |
| 04-data-product-specification.md                  | Yes / No / Draft | data product boundary     |
| 05-data-source-inventory.md                       | Yes / No / Draft | source epics              |
| 06-conceptual-domain-model.md                     | Yes / No / Draft | Silver/domain epics       |
| 07-architecture-decision-record.md                | Yes / No / Draft | foundation/platform epics |
| 08-ingestion-specification.md                     | Yes / No / Draft | ingestion epics           |
| 09-bronze-layer-specification.md                  | Yes / No / Draft | Bronze epics              |
| 10-silver-layer-specification.md                  | Yes / No / Draft | Silver epics              |
| 11-gold-layer-specification.md                    | Yes / No / Draft | Gold epics                |
| 12-data-contract-specification.md                 | Yes / No / Draft | contract epics            |
| 13-transformation-specification.md                | Yes / No / Draft | transformation epics      |
| 14-data-quality-specification.md                  | Yes / No / Draft | quality epics             |
| 15-orchestration-observability-specification.md   | Yes / No / Draft | workflow/monitoring epics |
| 16-semantic-model-specification.md                | Yes / No / Draft | semantic epics            |
| 17-serving-layer-specification.md                 | Yes / No / Draft | serving epics             |
| 18-lineage-metadata-specification.md              | Yes / No / Draft | lineage/catalog epics     |
| 19-governance-security-specification.md           | Yes / No / Draft | governance/security epics |
| 20-cost-performance-optimization-specification.md | Yes / No / Draft | optimization epics        |
| 21-cicd-testing-specification.md                  | Yes / No / Draft | CI/CD/release epics       |
| 22-project-evaluation-report.md                   | Yes / No / Draft | readiness/next iteration  |

## 5. Implementation Theme Extraction

| Theme                           | Source Artifact(s)           | Notes |
| ------------------------------- | ---------------------------- | ----- |
| Foundation                      | Phase 07, Phase 21           |       |
| Ingestion                       | Phase 05, Phase 08           |       |
| Bronze                          | Phase 09                     |       |
| Silver                          | Phase 06, Phase 10, Phase 13 |       |
| Gold                            | Phase 03, Phase 11, Phase 13 |       |
| Contracts and quality           | Phase 12, Phase 14, Phase 21 |       |
| Orchestration and observability | Phase 15                     |       |
| Semantic and serving            | Phase 16, Phase 17           |       |
| Lineage governance security     | Phase 18, Phase 19           |       |
| Optimization                    | Phase 20                     |       |
| Release                         | Phase 21                     |       |

## 6. Epic Inventory

| Epic ID | Epic Name                                     | Priority | Release Group    | Status |
| ------- | --------------------------------------------- | -------- | ---------------- | ------ |
| EPIC-01 | Project Foundation and Repository Setup       | P1       | Foundation       | Draft  |
| EPIC-02 | Source Access and Ingestion                   | P1       | MVP              | Draft  |
| EPIC-03 | Bronze Layer Implementation                   | P1       | MVP              | Draft  |
| EPIC-04 | Silver Layer Implementation                   | P1       | MVP              | Draft  |
| EPIC-05 | Gold Layer Implementation                     | P1       | MVP              | Draft  |
| EPIC-06 | Data Contracts and Quality Gates              | P1       | MVP              | Draft  |
| EPIC-07 | Orchestration and Observability               | P1       | MVP              | Draft  |
| EPIC-08 | Semantic Model and Serving Layer              | P1       | MVP              | Draft  |
| EPIC-09 | Lineage Metadata Governance and Security      | P1       | MVP              | Draft  |
| EPIC-10 | Cost Performance and Operational Optimization | P2       | Later            | Draft  |
| EPIC-11 | CI/CD Testing and Release Readiness           | P1       | Foundation / MVP | Draft  |

## 7. Epic Detail

### EPIC-01 — Project Foundation and Repository Setup

| Field                | Value                                                                                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Priority             | P1                                                                                                                                                       |
| Release Group        | Foundation                                                                                                                                               |
| Status               | Draft                                                                                                                                                    |
| Source DES Artifacts | Phase 07, Phase 20, Phase 21                                                                                                                             |
| Goal                 | Establish the repository, local development structure, environment configuration, project conventions, and baseline CI checks needed for implementation. |

Business / technical value:

```text
<why this epic matters>
```

Included scope:

* repository structure;
* project configuration;
* environment configuration pattern;
* local-first development setup;
* coding conventions;
* baseline validation;
* initial CI checks.

Excluded scope:

* full production deployment;
* full pipeline implementation;
* business dashboard implementation.

Candidate story areas:

* initialize repository structure;
* configure development environment;
* create project configuration files;
* create environment config template;
* add baseline CI validation;
* add documentation skeleton.

Dependencies:

```text
None or architecture decision required.
```

Acceptance criteria:

* repository structure follows architecture decision;
* environment config pattern exists;
* no secrets are committed;
* baseline validation/checks are defined;
* implementation team can start feature work.

Risks / blockers:

*
*

---

### EPIC-02 — Source Access and Ingestion

| Field                | Value                                                                         |
| -------------------- | ----------------------------------------------------------------------------- |
| Priority             | P1                                                                            |
| Release Group        | MVP                                                                           |
| Status               | Draft                                                                         |
| Source DES Artifacts | Phase 05, Phase 08, Phase 14, Phase 15, Phase 21                              |
| Goal                 | Implement source access and ingestion workflows for approved P1 data sources. |

Business / technical value:

```text
<why this epic matters>
```

Included scope:

* source connection setup;
* ingestion logic;
* source readiness checks;
* incremental/full load behavior;
* raw landing behavior;
* ingestion metadata;
* initial ingestion validation.

Excluded scope:

* Silver/Gold transformation;
* serving dashboards;
* advanced optimization unless required.

Candidate story areas:

* implement ingestion for each P1 source;
* handle source credentials through approved config;
* capture ingestion metadata;
* implement source readiness checks;
* create ingestion smoke tests.

Dependencies:

```text
EPIC-01
```

Acceptance criteria:

* P1 sources can be ingested according to ingestion spec;
* ingestion metadata is captured;
* failure behavior follows orchestration design;
* no credentials are hardcoded;
* source-level quality checks are mapped.

Risks / blockers:

*
*

---

### EPIC-03 — Bronze Layer Implementation

| Field                | Value                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Priority             | P1                                                                                                                 |
| Release Group        | MVP                                                                                                                |
| Status               | Draft                                                                                                              |
| Source DES Artifacts | Phase 08, Phase 09, Phase 14, Phase 18, Phase 21                                                                   |
| Goal                 | Implement Bronze layer storage structures that preserve source truth, metadata, replayability, and audit evidence. |

Included scope:

* Bronze datasets/tables/files;
* raw schema handling;
* ingestion metadata columns;
* source lineage fields;
* schema drift handling;
* Bronze validation checks.

Excluded scope:

* business conformance;
* Silver standardization;
* Gold aggregation.

Candidate story areas:

* create Bronze dataset for each source;
* add ingestion metadata;
* implement schema drift handling;
* add Bronze quality checks;
* document Bronze lineage.

Dependencies:

```text
EPIC-01, EPIC-02
```

Acceptance criteria:

* Bronze data preserves source-level truth;
* required metadata is present;
* replay/backfill support is possible;
* Bronze quality checks are defined or implemented;
* Bronze assets are catalog-ready.

Risks / blockers:

*
*

---

### EPIC-04 — Silver Layer Implementation

| Field                | Value                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Priority             | P1                                                                                                                  |
| Release Group        | MVP                                                                                                                 |
| Status               | Draft                                                                                                               |
| Source DES Artifacts | Phase 06, Phase 10, Phase 12, Phase 13, Phase 14, Phase 18, Phase 21                                                |
| Goal                 | Implement trusted Silver datasets with conformed entities/events, identity, grain, standardization, and validation. |

Included scope:

* Silver entity/event datasets;
* cleaning and conformance;
* deduplication;
* identity/key strategy;
* reference mappings;
* validity checks;
* Silver quality gates.

Excluded scope:

* final business aggregates;
* dashboard serving.

Candidate story areas:

* implement Silver transformations;
* implement dedup/survivorship logic;
* standardize timestamps, codes, units;
* implement Silver validation;
* add Silver tests.

Dependencies:

```text
EPIC-03
```

Acceptance criteria:

* Silver outputs match conceptual domain model;
* grain and keys are correct;
* transformations follow Phase 13;
* P1 Silver quality gates pass;
* lineage to Bronze is captured.

Risks / blockers:

*
*

---

### EPIC-05 — Gold Layer Implementation

| Field                | Value                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Priority             | P1                                                                                                                                     |
| Release Group        | MVP                                                                                                                                    |
| Status               | Draft                                                                                                                                  |
| Source DES Artifacts | Phase 02, Phase 03, Phase 11, Phase 12, Phase 13, Phase 14, Phase 16, Phase 21                                                         |
| Goal                 | Implement consumer-ready Gold datasets that answer business questions and support approved KPIs, semantic models, and serving outputs. |

Included scope:

* Gold marts/aggregates;
* KPI/metric calculations;
* dimension/fact/aggregate outputs;
* Gold quality rules;
* contract alignment;
* semantic readiness.

Excluded scope:

* dashboard visual design;
* API implementation unless included in serving epic.

Candidate story areas:

* implement Gold dataset per output;
* implement approved KPI calculations;
* implement aggregation logic;
* add metric reconciliation tests;
* validate Gold grain and freshness.

Dependencies:

```text
EPIC-04, EPIC-06
```

Acceptance criteria:

* Gold outputs answer approved business questions;
* KPI definitions match Phase 03 and Phase 11;
* Gold grain is correct;
* contract and quality gates are satisfied;
* Gold outputs are ready for semantic/serving work.

Risks / blockers:

*
*

---

### EPIC-06 — Data Contracts and Quality Gates

| Field                | Value                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------- |
| Priority             | P1                                                                                        |
| Release Group        | MVP                                                                                       |
| Status               | Draft                                                                                     |
| Source DES Artifacts | Phase 12, Phase 14, Phase 21                                                              |
| Goal                 | Implement contract and data quality validation gates for P1 datasets and serving outputs. |

Included scope:

* contract validation;
* schema checks;
* freshness checks;
* completeness checks;
* uniqueness/grain checks;
* metric reconciliation;
* quality gate behavior;
* evidence capture.

Excluded scope:

* full monitoring dashboard unless included in EPIC-07;
* optional P3 checks unless approved.

Candidate story areas:

* implement contract checks;
* implement P1 quality rules;
* implement quality evidence logging;
* implement release-blocking quality gates;
* add quality test cases.

Dependencies:

```text
EPIC-03, EPIC-04, EPIC-05
```

Acceptance criteria:

* P1 contract checks are represented;
* P1 quality rules are implemented or ready for implementation;
* blocking/warning behavior follows Phase 14 and Phase 21;
* quality evidence is captured;
* quality failures are actionable.

Risks / blockers:

*
*

---

### EPIC-07 — Orchestration and Observability

| Field                | Value                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Priority             | P1                                                                                                                        |
| Release Group        | MVP                                                                                                                       |
| Status               | Draft                                                                                                                     |
| Source DES Artifacts | Phase 15, Phase 20, Phase 21                                                                                              |
| Goal                 | Implement workflow orchestration, dependency handling, monitoring signals, alerting, recovery behavior, and run evidence. |

Included scope:

* workflow dependency graph;
* schedules/triggers;
* retries/timeouts;
* publish gates;
* alerting;
* run evidence;
* backfill/replay operations;
* operational monitoring signals.

Excluded scope:

* full incident management platform;
* advanced FinOps unless needed.

Candidate story areas:

* create orchestration workflow;
* integrate quality gates;
* implement publish behavior;
* capture run evidence;
* configure alert rules;
* create backfill operation path.

Dependencies:

```text
EPIC-02, EPIC-03, EPIC-04, EPIC-05, EPIC-06
```

Acceptance criteria:

* workflows follow dependency design;
* quality gates control publish behavior;
* failures produce actionable alerts;
* run evidence is captured;
* backfill/replay process is documented or implemented.

Risks / blockers:

*
*

---

### EPIC-08 — Semantic Model and Serving Layer

| Field                | Value                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------- |
| Priority             | P1                                                                                            |
| Release Group        | MVP                                                                                           |
| Status               | Draft                                                                                         |
| Source DES Artifacts | Phase 16, Phase 17, Phase 19, Phase 21                                                        |
| Goal                 | Expose trusted Gold data through semantic models and serving channels for approved consumers. |

Included scope:

* semantic model objects;
* approved metrics/measures;
* dimensions and hierarchies;
* serving outputs;
* dashboard/API/export/AI-agent access design implementation as applicable;
* freshness and quality visibility.

Excluded scope:

* unsupported serving channels;
* Draft metrics as Certified outputs.

Candidate story areas:

* implement semantic model;
* expose certified metrics/measures;
* create dashboard/report serving output;
* implement API/read model if applicable;
* add freshness and quality status display;
* validate access/security behavior.

Dependencies:

```text
EPIC-05, EPIC-06, EPIC-09
```

Acceptance criteria:

* semantic model uses approved definitions;
* serving outputs map to approved consumers;
* access/security rules are respected;
* freshness/quality status is visible where required;
* serving output passes smoke/acceptance checks.

Risks / blockers:

*
*

---

### EPIC-09 — Lineage Metadata Governance and Security

| Field                | Value                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| Priority             | P1                                                                                                             |
| Release Group        | MVP                                                                                                            |
| Status               | Draft                                                                                                          |
| Source DES Artifacts | Phase 18, Phase 19, Phase 21                                                                                   |
| Goal                 | Implement required metadata, lineage, access, classification, security, and governance controls for P1 assets. |

Included scope:

* catalog metadata;
* ownership metadata;
* dataset lineage;
* quality/trust metadata;
* sensitivity classification;
* access control rules;
* masking/restriction expectations;
* audit requirements.

Excluded scope:

* full enterprise governance platform unless required;
* full column-level lineage for all fields unless approved.

Candidate story areas:

* add dataset metadata;
* add owner/steward metadata;
* capture lineage references;
* implement access policies;
* validate sensitive field handling;
* add audit evidence.

Dependencies:

```text
EPIC-03, EPIC-04, EPIC-05, EPIC-08
```

Acceptance criteria:

* P1 assets have required metadata;
* lineage from source to serving is traceable at approved level;
* sensitive assets are classified;
* access policies are implemented or ready for implementation;
* governance checks are included in release gates.

Risks / blockers:

*
*

---

### EPIC-10 — Cost Performance and Operational Optimization

| Field                | Value                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Priority             | P2                                                                                                                   |
| Release Group        | Later                                                                                                                |
| Status               | Draft                                                                                                                |
| Source DES Artifacts | Phase 20                                                                                                             |
| Goal                 | Optimize cost, performance, storage, compute, query, and serving behavior after baseline measurements are available. |

Included scope:

* baseline metrics;
* cost driver tracking;
* performance driver tracking;
* storage optimization;
* compute optimization;
* query optimization;
* caching/materialization decisions;
* capacity planning.

Excluded scope:

* premature tuning without baseline;
* weakening quality/security for cost reduction.

Candidate story areas:

* collect runtime baseline;
* collect cost baseline;
* optimize high-cost workflow;
* optimize slow query/serving path;
* add cost alerts;
* review storage retention/tiering.

Dependencies:

```text
EPIC-07, EPIC-08
```

Acceptance criteria:

* baseline metrics are available;
* optimization decisions are evidence-based;
* cost/performance monitoring exists;
* no optimization violates security, quality, contract, or SLA.

Risks / blockers:

*
*

---

### EPIC-11 — CI/CD Testing and Release Readiness

| Field                | Value                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------- |
| Priority             | P1                                                                                                            |
| Release Group        | Foundation / MVP                                                                                              |
| Status               | Draft                                                                                                         |
| Source DES Artifacts | Phase 21                                                                                                      |
| Goal                 | Implement testing, validation, promotion, rollback, release evidence, and deployment gates for safe delivery. |

Included scope:

* branch/review process;
* static checks;
* unit/integration tests;
* contract tests;
* quality gates;
* security checks;
* release gates;
* rollback strategy;
* release evidence.

Excluded scope:

* production deployment execution unless explicitly in scope;
* unsupported environment automation.

Candidate story areas:

* create CI workflow;
* add unit test framework;
* add contract gate;
* add quality gate;
* add secret scan;
* define release evidence;
* implement rollback path.

Dependencies:

```text
EPIC-01 and expands alongside EPIC-02 to EPIC-10
```

Acceptance criteria:

* P1 artifacts have test/release gates;
* secrets are not committed;
* contract and quality checks block release where required;
* rollback/recovery path is documented;
* release evidence is captured.

Risks / blockers:

*
*

## 8. Epic to DES Artifact Mapping

| Epic ID | Main DES Artifact Dependencies |
| ------- | ------------------------------ |
| EPIC-01 | 07, 20, 21                     |
| EPIC-02 | 05, 08, 14, 15, 21             |
| EPIC-03 | 08, 09, 14, 18, 21             |
| EPIC-04 | 06, 10, 12, 13, 14, 18, 21     |
| EPIC-05 | 02, 03, 11, 12, 13, 14, 16, 21 |
| EPIC-06 | 12, 14, 21                     |
| EPIC-07 | 15, 20, 21                     |
| EPIC-08 | 16, 17, 19, 21                 |
| EPIC-09 | 18, 19, 21                     |
| EPIC-10 | 20                             |
| EPIC-11 | 21                             |

## 9. Epic Dependency Map

```text
EPIC-01 Project Foundation
  ├─ EPIC-11 CI/CD baseline starts early
  └─ EPIC-02 Source Access and Ingestion
        └─ EPIC-03 Bronze Layer
              └─ EPIC-04 Silver Layer
                    └─ EPIC-05 Gold Layer
                          ├─ EPIC-06 Contracts and Quality
                          ├─ EPIC-08 Semantic and Serving
                          └─ EPIC-07 Orchestration and Observability

EPIC-09 Lineage Metadata Governance and Security runs across EPIC-03 to EPIC-08.

EPIC-10 Cost Performance and Operational Optimization starts after baseline evidence from EPIC-07 and EPIC-08.
```

## 10. Epic Priority and Release Grouping

| Release Group | Epics                                                                  |
| ------------- | ---------------------------------------------------------------------- |
| Foundation    | EPIC-01, EPIC-11 baseline                                              |
| MVP           | EPIC-02, EPIC-03, EPIC-04, EPIC-05, EPIC-06, EPIC-07, EPIC-08, EPIC-09 |
| P2            | EPIC-10                                                                |
| Later         | project-specific enhancements                                          |
| Optional      | experimental/AI/advanced optimization                                  |

## 11. Epic Acceptance Criteria

| Epic ID | Acceptance Criteria Summary                                 |
| ------- | ----------------------------------------------------------- |
| EPIC-01 | Repo, config, environment, baseline CI ready                |
| EPIC-02 | P1 sources ingested with metadata and validation            |
| EPIC-03 | Bronze preserves raw source truth and replay evidence       |
| EPIC-04 | Silver trusted/conformed datasets implemented               |
| EPIC-05 | Gold outputs answer approved business questions             |
| EPIC-06 | Contracts and P1 quality gates protect outputs              |
| EPIC-07 | Workflows run with dependencies, alerts, recovery, evidence |
| EPIC-08 | Semantic/serving outputs available to consumers safely      |
| EPIC-09 | Metadata, lineage, governance, security controls exist      |
| EPIC-10 | Cost/performance baseline and optimization controls exist   |
| EPIC-11 | CI/CD, tests, release gates, rollback, evidence exist       |

## 12. Epic Risk and Blocker Register

| Epic ID | Risk / Blocker | Severity     | Owner | Action |
| ------- | -------------- | ------------ | ----- | ------ |
|         |                | P1 / P2 / P3 |       |        |

## 13. Story Creation Guidance

Use `des-create-story` next.

Story generation should follow these rules:

* create stories per epic;
* each story must map to at least one DES artifact;
* each story must have acceptance criteria;
* each story must include test expectations;
* each story must include dependency and status;
* stories should be small enough for implementation;
* do not create stories from undocumented assumptions;
* route back to DES main phase if important context is missing.

Recommended story order:

```text
1. EPIC-01 foundation stories
2. EPIC-11 baseline CI/CD stories
3. EPIC-02 ingestion stories
4. EPIC-03 Bronze stories
5. EPIC-04 Silver stories
6. EPIC-05 Gold stories
7. EPIC-06 contract/quality stories
8. EPIC-07 orchestration/observability stories
9. EPIC-08 semantic/serving stories
10. EPIC-09 governance/metadata/security stories
11. EPIC-10 optimization stories
```

## 14. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 15. Open Questions

| Open Question | Why It Matters | Owner | Needed By                                             |
| ------------- | -------------- | ----- | ----------------------------------------------------- |
|               |                |       | des-create-story / sprint planning / implementation |

## 16. Next Support Skill Recommendation

Recommended next support skill:

```text
des-create-story
```

Reason:

```text
The Epic Catalog defines implementation-level delivery areas. The next step is to break each approved epic into implementation-ready stories with acceptance criteria, dependencies, and test expectations.
```
