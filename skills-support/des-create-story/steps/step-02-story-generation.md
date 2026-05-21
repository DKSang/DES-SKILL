# Step 02 — Story Generation

## Goal

Generate implementation-ready stories from selected epics and DES artifacts.

Stories must be traceable, testable, sized appropriately, and ready for readiness checking or sprint planning.

## Required Inputs

- Confirmed context from Step 01
- Epic Catalog
- Selected DES artifacts
- User answers from HALT decisions
- Existing Story Catalog if updating

## Actions

1. Define story creation scope.
2. Define story design principles.
3. Generate story inventory.
4. For each selected epic, create stories.
5. For each story, define:
   - story ID;
   - story title;
   - epic ID;
   - story type;
   - user/actor;
   - goal;
   - benefit;
   - source DES artifacts;
   - included scope;
   - excluded scope;
   - acceptance criteria;
   - test expectations;
   - quality expectations;
   - governance/security expectations;
   - dependencies;
   - risks/blockers;
   - priority;
   - status.
6. Map stories to epics.
7. Map stories to DES artifacts.
8. Define story dependencies.
9. Create Definition of Ready.
10. Create Definition of Done.
11. Prepare sprint planning guidance.

## Story Design Principles

| Principle | Meaning |
| --- | --- |
| Traceable | Every story maps to an epic and DES artifacts |
| Testable | Every story has test expectations |
| Acceptance-driven | Every story has acceptance criteria |
| Small enough | Story can be implemented in a sprint |
| Not too small | Story is not a single micro-task |
| Quality-aware | DQ and contract expectations are visible |
| Security-aware | Sensitive/access concerns are visible |
| Dependency-aware | Order and blockers are explicit |

## Story Types

Use these story types:

| Story Type | Description |
| --- | --- |
| Foundation | repo, config, environment, standards |
| Ingestion | source access, extraction, landing |
| Bronze | raw preservation, metadata, schema drift |
| Silver | cleaning, conformance, identity, dedup |
| Gold | marts, metrics, aggregates |
| Contract | schema/consumer guarantee |
| Quality | DQ rule/gate/evidence |
| Orchestration | workflow, trigger, dependency, retry |
| Observability | logs, metrics, alerts, run evidence |
| Semantic | semantic model, measure, dimension |
| Serving | dashboard/API/export/agent output |
| Metadata | catalog, lineage, ownership |
| Governance | access, masking, security, audit |
| Optimization | cost/performance/scalability |
| CI/CD | tests, release gates, rollback |

## Story ID Convention

Use this pattern:

```text
STORY-<PREFIX>-<NUMBER>
```

Recommended prefixes:

```text
FOUND = Foundation
ING   = Ingestion
BRZ   = Bronze
SLV   = Silver
GLD   = Gold
CNT   = Contract
DQ    = Data Quality
ORCH  = Orchestration
OBS   = Observability
SEM   = Semantic
SRV   = Serving
META  = Metadata / Lineage
GOV   = Governance / Security
OPT   = Optimization
CICD  = CI/CD
```

Example:

```text
STORY-ING-001
STORY-BRZ-001
STORY-SLV-001
STORY-GLD-001
```

## Story Standard

Each story must include:

| Field                            | Required?               |
| -------------------------------- | ----------------------- |
| Story ID                         | Required                |
| Story title                      | Required                |
| Epic ID                          | Required                |
| Story type                       | Required                |
| Actor/persona                    | Required                |
| Goal                             | Required                |
| Benefit                          | Required                |
| Source DES artifacts             | Required                |
| Included scope                   | Required                |
| Excluded scope                   | Required                |
| Acceptance criteria              | Required                |
| Test expectations                | Required                |
| Quality expectations             | Required where relevant |
| Governance/security expectations | Required where relevant |
| Dependencies                     | Required                |
| Risks/blockers                   | Required                |
| Priority                         | Required                |
| Status                           | Required                |

Allowed statuses:

```text
Draft
Ready for Readiness Check
Ready for Sprint Planning
Blocked
Deferred
```

## Generic Story Format

Use this pattern where useful:

```text
As a <actor>,
I want <implementation capability>,
so that <business/technical benefit>.
```

For technical stories, this format is also acceptable:

```text
Implement <capability>
so that <data product / pipeline / quality / serving outcome> is supported.
```

## Default Story Candidates by Epic

### EPIC-01 — Project Foundation

Candidate stories:

```text
STORY-FOUND-001 — Initialize repository structure
STORY-FOUND-002 — Configure local development environment
STORY-FOUND-003 — Create environment configuration pattern
STORY-FOUND-004 — Add project documentation skeleton
STORY-FOUND-005 — Add baseline validation checks
```

### EPIC-02 — Source Access and Ingestion

Candidate stories:

```text
STORY-ING-001 — Configure source access for P1 source
STORY-ING-002 — Implement source extraction
STORY-ING-003 — Implement incremental or full-load strategy
STORY-ING-004 — Capture ingestion metadata
STORY-ING-005 — Add source readiness check
STORY-ING-006 — Add ingestion smoke test
```

### EPIC-03 — Bronze Layer

Candidate stories:

```text
STORY-BRZ-001 — Create Bronze dataset for P1 source
STORY-BRZ-002 — Add Bronze metadata columns
STORY-BRZ-003 — Implement Bronze schema drift handling
STORY-BRZ-004 — Preserve raw source payload
STORY-BRZ-005 — Add Bronze validation checks
STORY-BRZ-006 — Register Bronze asset metadata
```

### EPIC-04 — Silver Layer

Candidate stories:

```text
STORY-SLV-001 — Create Silver entity/event dataset
STORY-SLV-002 — Implement cleaning and standardization
STORY-SLV-003 — Implement deduplication and survivorship
STORY-SLV-004 — Implement identity/key strategy
STORY-SLV-005 — Implement reference/code mapping
STORY-SLV-006 — Add Silver quality checks
STORY-SLV-007 — Add Silver lineage metadata
```

### EPIC-05 — Gold Layer

Candidate stories:

```text
STORY-GLD-001 — Create Gold dataset for P1 business question
STORY-GLD-002 — Implement approved KPI calculation
STORY-GLD-003 — Implement Gold aggregation logic
STORY-GLD-004 — Add metric reconciliation check
STORY-GLD-005 — Add Gold freshness check
STORY-GLD-006 — Prepare Gold output for semantic model
```

### EPIC-06 — Contracts and Quality Gates

Candidate stories:

```text
STORY-CNT-001 — Implement schema contract check
STORY-CNT-002 — Implement contract freshness check
STORY-CNT-003 — Implement contract breaking-change check
STORY-DQ-001 — Implement P1 uniqueness/grain rule
STORY-DQ-002 — Implement P1 completeness rule
STORY-DQ-003 — Implement P1 validity/domain rule
STORY-DQ-004 — Implement quality gate evidence logging
```

### EPIC-07 — Orchestration and Observability

Candidate stories:

```text
STORY-ORCH-001 — Create end-to-end workflow dependency graph
STORY-ORCH-002 — Implement workflow schedule or trigger
STORY-ORCH-003 — Integrate quality gates into workflow
STORY-ORCH-004 — Implement retry and timeout policy
STORY-ORCH-005 — Implement publish gate behavior
STORY-OBS-001 — Capture workflow run evidence
STORY-OBS-002 — Add freshness and SLA monitoring
STORY-OBS-003 — Add failure alerting
```

### EPIC-08 — Semantic and Serving

Candidate stories:

```text
STORY-SEM-001 — Create semantic model shell
STORY-SEM-002 — Add approved measures and KPIs
STORY-SEM-003 — Add approved dimensions and hierarchies
STORY-SEM-004 — Validate relationship and aggregation behavior
STORY-SRV-001 — Create serving output for P1 consumer
STORY-SRV-002 — Add freshness and quality visibility
STORY-SRV-003 — Add serving access control
STORY-SRV-004 — Add serving smoke test
```

### EPIC-09 — Lineage Metadata Governance Security

Candidate stories:

```text
STORY-META-001 — Register P1 datasets in catalog
STORY-META-002 — Add dataset ownership metadata
STORY-META-003 — Capture source-to-serving lineage
STORY-META-004 — Add quality and trust metadata
STORY-GOV-001 — Classify sensitive fields
STORY-GOV-002 — Implement access control policy
STORY-GOV-003 — Implement masking or restricted exposure
STORY-GOV-004 — Add audit logging expectation
```

### EPIC-10 — Cost Performance Optimization

Candidate stories:

```text
STORY-OPT-001 — Capture runtime baseline
STORY-OPT-002 — Capture cost baseline
STORY-OPT-003 — Optimize high-cost workflow
STORY-OPT-004 — Optimize slow query or serving path
STORY-OPT-005 — Add cost monitoring signal
```

### EPIC-11 — CI/CD Testing Release

Candidate stories:

```text
STORY-CICD-001 — Add repository branch and PR validation
STORY-CICD-002 — Add static validation checks
STORY-CICD-003 — Add unit test framework
STORY-CICD-004 — Add contract test gate
STORY-CICD-005 — Add data quality test gate
STORY-CICD-006 — Add secret scan
STORY-CICD-007 — Add release evidence capture
STORY-CICD-008 — Define rollback path
```

## HALT — Story Granularity

Stop if generated stories appear too large or too small.

### Decision needed

How should story granularity be handled?

### Options

A. Keep one story per major capability
B. Split by dataset/source
C. Split by layer output
D. Split by quality rule group
E. Split by serving output
F. Merge micro-stories into broader story
G. Keep Draft and refine during `des-story-readiness-check`

### Recommendation

Choose B/C/E for data projects with multiple sources/outputs.

### Required response

Choose one or more options.

## HALT — Acceptance Criteria Source

Stop if acceptance criteria cannot be safely derived.

### Decision needed

Where should acceptance criteria come from?

### Options

A. Use DES main artifacts only
B. Use Epic Catalog acceptance criteria
C. Use Phase 21 CI/CD and testing expectations
D. User provides additional acceptance criteria
E. Keep story Draft until criteria are defined
F. Route back to relevant DES phase

### Required response

Choose one or more options.

## HALT — Test Expectation Source

Stop if test expectations are missing.

### Decision needed

Where should test expectations come from?

### Options

A. Use Phase 21 CI/CD testing spec
B. Use Phase 14 data quality spec
C. Use Phase 12 contract spec
D. Use Phase 13 transformation spec
E. Use user-provided test expectations
F. Keep story Draft
G. Route back to Phase 21

### Required response

Choose one or more options.

## HALT — Missing Critical Context

Stop if a story would require unsupported assumptions.

### Trigger examples

* source not defined;
* dataset name unknown;
* transformation rule missing;
* KPI formula missing;
* quality rule missing;
* contract unclear;
* access/security unclear;
* acceptance criteria unclear.

### Decision needed

How should missing context be handled?

### Options

A. Create story as Draft with blocker
B. Defer story
C. Route back to relevant DES main phase
D. Ask user to provide missing context
E. Remove story from current scope

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

* story inventory is created;
* stories map to epics;
* stories map to DES artifacts;
* stories have acceptance criteria;
* stories have test expectations;
* dependencies and blockers are explicit;
* Definition of Ready and Definition of Done are included;
* draft Story Catalog is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
