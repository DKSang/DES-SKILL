# Step 02 — Epic Generation

## Goal

Generate a structured Epic Catalog from DES main lifecycle artifacts.

The epics must represent implementation-level delivery areas, not detailed stories or coding tasks.

## Required Inputs

- Confirmed context from Step 01
- Available DES main artifacts
- User answers from HALT decisions
- Existing epic catalog if updating

## Actions

1. Define epic creation scope.
2. Define epic design principles.
3. Extract implementation themes from DES artifacts.
4. Group implementation themes into epics.
5. Create epic inventory.
6. Define each epic:
   - epic ID;
   - epic name;
   - purpose;
   - business value;
   - source artifacts;
   - included scope;
   - excluded scope;
   - downstream stories to create later;
   - dependencies;
   - acceptance criteria;
   - risks/blockers;
   - priority;
   - status.
7. Map each epic back to DES main artifacts.
8. Define epic dependencies.
9. Define release grouping:
   - Foundation;
   - MVP/P1;
   - P2;
   - Later;
   - Optional.
10. Validate epic granularity.
11. Prepare draft Epic Catalog.

## Epic Design Principles

Use these principles:

| Principle | Meaning |
| --- | --- |
| Traceable | Every epic must map to upstream DES artifacts |
| Implementable | Every epic should be possible to break into stories |
| Outcome-oriented | Epic should deliver a capability, not just a task |
| Dependency-aware | Epic should show what must happen before/after |
| P1-first | Critical first-release work should be visible |
| Contract-aware | Contracted outputs should have explicit epics |
| Quality-aware | P1 quality gates should not be hidden |
| Release-aware | CI/CD and release gates must appear before production |

## Default Epic Categories

Use these categories unless project context requires changes:

```text
EPIC-01 — Project Foundation and Repository Setup
EPIC-02 — Source Access and Ingestion
EPIC-03 — Bronze Layer Implementation
EPIC-04 — Silver Layer Implementation
EPIC-05 — Gold Layer Implementation
EPIC-06 — Data Contracts and Quality Gates
EPIC-07 — Orchestration and Observability
EPIC-08 — Semantic Model and Serving Layer
EPIC-09 — Lineage Metadata Governance and Security
EPIC-10 — Cost Performance and Operational Optimization
EPIC-11 — CI/CD Testing and Release Readiness
```

The agent may add, remove, merge, or split epics based on project context.

## Epic Standard

Each epic must include:

| Field                    | Required? |
| ------------------------ | --------- |
| Epic ID                  | Required  |
| Epic name                | Required  |
| Epic goal                | Required  |
| Business/technical value | Required  |
| Source DES artifacts     | Required  |
| Included scope           | Required  |
| Excluded scope           | Required  |
| Candidate story areas    | Required  |
| Dependencies             | Required  |
| Acceptance criteria      | Required  |
| Risks/blockers           | Required  |
| Priority                 | Required  |
| Release group            | Required  |
| Status                   | Required  |

Allowed priorities:

```text
P1 | P2 | P3
```

Allowed release groups:

```text
Foundation | MVP | P2 | Later | Optional
```

Allowed statuses:

```text
Draft | Ready for Stories | Blocked | Deferred
```

## HALT — P1/P2 Priority

Stop if priority cannot be safely inferred.

### Decision needed

How should epics be prioritized?

### Options

A. Prioritize by P1 business questions and data products
B. Prioritize by architecture dependency order
C. Prioritize by source/ingestion feasibility
D. Prioritize by contracted outputs
E. Prioritize by delivery risk
F. User provides explicit priority
G. Keep priority Draft

### Recommendation

Choose A + B for most projects.

### Required response

Choose one or more options.

## HALT — Epic Granularity

Stop if epics appear too large or too small.

### Decision needed

How should epic granularity be handled?

### Options

A. Keep default 10–11 implementation epics
B. Split by data product
C. Split by data source
D. Split by layer
E. Split by serving channel
F. Merge small epics into broader delivery epics
G. Keep Draft and refine during story creation

### Recommendation

Choose A for generic framework. Choose B if project has multiple data products.

### Required response

Choose A/B/C/D/E/F/G.

## HALT — Missing Critical Context

Stop if an epic cannot be defined without risky assumptions.

### Trigger examples

* source is unknown;
* Gold output is unknown;
* quality gates are unknown;
* contract output is unknown;
* serving channel is unknown;
* governance constraints are unknown;
* CI/CD path is unknown.

### Decision needed

How should missing context be handled?

### Options

A. Create epic as Draft with blocker
B. Defer epic
C. Route back to relevant main DES phase
D. Ask user to provide missing context
E. Remove epic from current scope

### Required response

Choose A/B/C/D/E.

## Epic Dependency Pattern

Default dependency pattern:

```text
EPIC-01 Foundation
  → EPIC-02 Source Ingestion
  → EPIC-03 Bronze
  → EPIC-04 Silver
  → EPIC-05 Gold
  → EPIC-06 Contracts and Quality
  → EPIC-07 Orchestration and Observability
  → EPIC-08 Semantic and Serving
  → EPIC-09 Lineage Governance Security
  → EPIC-10 Cost Performance Optimization
  → EPIC-11 CI/CD Testing Release
```

But allow parallel work where safe:

```text
EPIC-06 Contracts and Quality can start while Silver/Gold design is stable.
EPIC-09 Governance can start once metadata and serving exposure are known.
EPIC-11 CI/CD can start early with foundation and expand as artifacts mature.
```

## Completion Criteria

This step is complete when:

* epic inventory is created;
* each epic maps to DES artifacts;
* each epic has purpose, scope, acceptance criteria, priority, dependency, and status;
* risks/blockers are explicit;
* story creation guidance is included;
* draft Epic Catalog is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
