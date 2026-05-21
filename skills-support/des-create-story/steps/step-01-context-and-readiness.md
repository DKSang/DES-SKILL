# Step 01 — Context and Readiness

## Goal

Confirm that `des-create-story` is the correct support skill and that the Epic Catalog plus enough DES artifacts exist to create implementation-ready stories.

## Required Inputs

Required:

```text
.agents/des-skill/output/support/epic-catalog.md
```

Useful supporting artifacts:

```text
.agents/des-skill/output/01-business-discovery-brief.md
.agents/des-skill/output/02-business-question-catalog.md
.agents/des-skill/output/03-requirements-and-kpi-catalog.md
.agents/des-skill/output/04-data-product-specification.md
.agents/des-skill/output/05-data-source-inventory.md
.agents/des-skill/output/06-conceptual-domain-model.md
.agents/des-skill/output/07-architecture-decision-record.md
.agents/des-skill/output/08-ingestion-specification.md
.agents/des-skill/output/09-bronze-layer-specification.md
.agents/des-skill/output/10-silver-layer-specification.md
.agents/des-skill/output/11-gold-layer-specification.md
.agents/des-skill/output/12-data-contract-specification.md
.agents/des-skill/output/13-transformation-specification.md
.agents/des-skill/output/14-data-quality-specification.md
.agents/des-skill/output/15-orchestration-observability-specification.md
.agents/des-skill/output/16-semantic-model-specification.md
.agents/des-skill/output/17-serving-layer-specification.md
.agents/des-skill/output/18-lineage-metadata-specification.md
.agents/des-skill/output/19-governance-security-specification.md
.agents/des-skill/output/20-cost-performance-optimization-specification.md
.agents/des-skill/output/21-cicd-testing-specification.md
.agents/des-skill/output/22-project-evaluation-report.md
```

Existing output to check:

```text
.agents/des-skill/output/support/story-catalog.md
```

## Actions

1. Read `customize.toml`.
2. Check whether `epic-catalog.md` exists.
3. Check which DES main artifacts are available.
4. Extract from Epic Catalog:

   * epic IDs;
   * epic names;
   * priorities;
   * release groups;
   * candidate story areas;
   * dependencies;
   * risks/blockers.
5. Extract from DES artifacts:

   * business questions;
   * requirements/KPIs;
   * data products;
   * sources;
   * layer outputs;
   * contracts;
   * transformations;
   * quality rules;
   * orchestration workflows;
   * semantic/serving outputs;
   * governance/security constraints;
   * CI/CD/test expectations.
6. Determine story creation scope.
7. Check whether existing `story-catalog.md` should be created or updated.
8. Decide whether to continue, draft with gaps, route back, or stop.

## Story Readiness Lens

Before creating stories, check:

| Area       | Question                                             |
| ---------- | ---------------------------------------------------- |
| Epic       | Which epic does this story belong to?                |
| Outcome    | What implementation outcome does this story deliver? |
| Artifact   | Which DES artifact supports this story?              |
| Acceptance | What proves this story is done?                      |
| Test       | What test/check proves it works?                     |
| Quality    | Does it involve DQ or contract expectations?         |
| Security   | Does it touch sensitive data or access control?      |
| Dependency | What must be done before this story?                 |
| Size       | Is it too big, too small, or implementation-ready?   |

## HALT — Epic Catalog Availability

Stop if the Epic Catalog is missing.

### Trigger

Use this HALT if:

```text
.agents/des-skill/output/support/epic-catalog.md
```

does not exist, is empty, or does not contain usable epics.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-create-epic`
B. User provides epic list now
C. Continue with Draft stories using inferred epics
D. Stop workflow

### Recommendation

Choose A for clean workflow. Choose C only for rough early planning.

### Required response

Choose A/B/C/D.

## HALT — Story Creation Scope

Stop if story creation scope is unclear.

### Decision needed

Which stories should be created?

### Options

A. All P1 epics
B. Selected epic only
C. Foundation + ingestion + Bronze first
D. MVP delivery stories only
E. Full story backlog for all epics
F. Stories for blocked/risky epics only
G. Custom scope

### Recommendation

Choose A for first backlog. Choose B if user is focused on one epic.

### Required response

Choose A/B/C/D/E/F/G.

## HALT — Epic Selection

Stop if there are multiple epics and the selected target is unclear.

### Decision needed

Which epic(s) should be converted into stories?

### Options

A. EPIC-01 Foundation
B. EPIC-02 Source Access and Ingestion
C. EPIC-03 Bronze Layer
D. EPIC-04 Silver Layer
E. EPIC-05 Gold Layer
F. EPIC-06 Contracts and Quality
G. EPIC-07 Orchestration and Observability
H. EPIC-08 Semantic and Serving
I. EPIC-09 Lineage Metadata Governance and Security
J. EPIC-10 Cost Performance Optimization
K. EPIC-11 CI/CD Testing and Release
L. All P1 epics
M. Custom epic selection

### Required response

Choose one or more options.

## HALT — Sprint-Level Request Detected

Stop if the user wants sprint planning rather than story catalog creation.

### Trigger

Use this HALT if the user asks:

* chọn story cho sprint;
* lập sprint plan;
* ước lượng sprint;
* phân bổ story theo tuần;
* velocity/capacity.

### Decision needed

Continue story creation or route to sprint planning?

### Options

A. Continue story catalog creation
B. Finish story catalog first, then recommend `des-sprint-planning`
C. Stop and route to `des-sprint-planning`
D. Create lightweight story catalog and sprint candidate list

### Recommendation

Choose B unless the story catalog already exists.

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

* Epic Catalog is available or Draft continuation is approved;
* DES artifact coverage is checked;
* story scope is selected;
* selected epics are identified;
* existing story catalog is checked;
* the agent is ready to generate stories.

## Next Step

After completion, load only:

```text
steps/step-02-story-generation.md
```
