# Step 01 — Context and Readiness

## Goal

Confirm that `des-create-epic` is the correct support skill and that enough DES main lifecycle artifacts exist to create a useful implementation epic catalog.

## Required Inputs

Look for these artifacts:

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

Minimum useful input:

```text
04-data-product-specification.md
05-data-source-inventory.md
07-architecture-decision-record.md
08-ingestion-specification.md
11-gold-layer-specification.md
13-transformation-specification.md
14-data-quality-specification.md
21-cicd-testing-specification.md
```

## Actions

1. Read `customize.toml`.
2. Check available upstream artifacts.
3. Classify artifacts as:

   * Available
   * Missing
   * Draft
   * Blocked
   * Not applicable
4. Extract from available artifacts:

   * target data products;
   * P1/P2 scope;
   * business questions;
   * KPIs;
   * sources;
   * architecture pattern;
   * ingestion paths;
   * Bronze/Silver/Gold datasets;
   * contracts;
   * transformations;
   * quality gates;
   * orchestration workflows;
   * semantic and serving outputs;
   * governance/security constraints;
   * CI/CD and release gates.
5. Check whether existing output exists:

```text
_des-output/implementation-artifacts/epic-catalog.md
```

6. Decide whether to:

   * create new epic catalog;
   * update existing epic catalog;
   * continue as Draft;
   * route back to main DES phases;
   * stop.

## Epic Readiness Lens

Use this lens before generating epics:

| Area          | Question                                                     |
| ------------- | ------------------------------------------------------------ |
| Product       | What data product is being implemented?                      |
| Scope         | Is P1/P2 scope clear?                                        |
| Source        | Which sources must be ingested?                              |
| Architecture  | What platform/layer pattern is approved?                     |
| Layers        | Which Bronze/Silver/Gold outputs are needed?                 |
| Contracts     | Which outputs are contract-bound?                            |
| Quality       | Which quality gates must exist?                              |
| Orchestration | Which workflows must run?                                    |
| Serving       | Which consumers/channels need outputs?                       |
| Governance    | Which security/governance constraints affect implementation? |
| CI/CD         | Which tests and release gates must protect delivery?         |

## HALT — Upstream Artifact Completeness

Stop if too many DES main artifacts are missing.

### Trigger

Use this HALT if:

* minimum useful input is missing;
* data product boundary is unclear;
* source inventory is missing;
* architecture decision is missing;
* ingestion and Gold specs are missing;
* transformation or quality specs are missing;
* CI/CD expectations are missing.

### Decision needed

How should the agent proceed?

### Options

A. Continue using available artifacts and mark gaps
B. Continue as Draft epic catalog
C. Route back to missing main DES phases
D. User provides missing context now
E. Stop workflow

### Recommendation

Choose A or B for early planning. Choose C for production-grade implementation planning.

### Required response

Choose A/B/C/D/E.

## HALT — Epic Creation Scope

Stop if the desired epic scope is unclear.

### Decision needed

What epic scope should be created?

### Options

A. MVP/P1 implementation epics only
B. P1 + P2 implementation epics
C. Full project implementation epics
D. Platform foundation epics only
E. Data product delivery epics only
F. CI/CD and release epics only
G. Custom scope

### Recommendation

Choose A for first implementation cycle. Choose C if this is a full roadmap.

### Required response

Choose A/B/C/D/E/F/G.

## HALT — Implementation Boundary

Stop if implementation boundary is unclear.

### Decision needed

What should count as implementation work?

### Options

A. Code and pipeline implementation only
B. Code + tests + CI/CD
C. Code + tests + CI/CD + monitoring
D. Full delivery including semantic, serving, governance, docs, release
E. Custom boundary

### Recommendation

Choose D if epics are used for full delivery planning.

### Required response

Choose A/B/C/D/E.

## HALT — Story-Level Request Detected

Stop if the user actually requested detailed stories instead of epics.

### Trigger

Use this HALT if the user asks for:

* user stories;
* task breakdown;
* sprint backlog;
* acceptance criteria per story;
* implementation subtasks.

### Decision needed

Should the agent continue creating epics or route to story skill?

### Options

A. Continue creating epics only
B. Create epics now, then recommend `des-create-story`
C. Stop and route directly to `des-create-story`
D. Create a lightweight epic catalog and story placeholders

### Recommendation

Choose B unless the user explicitly says stories only.

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

* artifact availability is checked;
* epic creation scope is selected or marked Draft;
* implementation boundary is selected or marked Draft;
* P1/P2 delivery scope is understood;
* missing context is documented;
* the agent is ready to generate epics.

## Next Step

After completion, load only:

```text
steps/step-02-epic-generation.md
```
