# Step 02 — Readiness Evaluation

## Goal

Evaluate selected stories against readiness criteria and assign a recommended readiness status.

## Required Inputs

- Selected stories from Step 01
- Story Catalog
- Sprint Plan if available
- Relevant DES artifacts per story type
- User answers from HALT decisions
- Existing readiness report if updating

## Actions

1. Define readiness check scope.
2. Define readiness criteria.
3. For each selected story, evaluate:
   - epic mapping;
   - DES artifact mapping;
   - story purpose;
   - included/excluded scope;
   - input/output clarity;
   - acceptance criteria;
   - test expectations;
   - data quality expectations;
   - data contract expectations;
   - governance/security expectations;
   - dependency readiness;
   - story size;
   - risks/blockers.
4. Identify missing context.
5. Identify dependency blockers.
6. Identify story size problems.
7. Assign readiness status.
8. Recommend required refinement.
9. Prepare handoff for ready stories.

## Readiness Criteria

A story is ready only if:

| Criterion | Required? |
| --- | --- |
| Valid story ID | Yes |
| Mapped to epic | Yes |
| Mapped to DES artifact(s) | Yes |
| Clear goal and benefit | Yes |
| Included scope clear | Yes |
| Excluded scope clear | Yes |
| Acceptance criteria clear | Yes |
| Test expectations clear | Yes |
| Dependencies known | Yes |
| Quality expectations known or N/A | Yes |
| Contract expectations known or N/A | Yes |
| Governance/security expectations known or N/A | Yes |
| Story size reasonable | Yes |
| Blockers resolved or explicitly accepted | Yes |

## Readiness Status Rules

Use these status rules:

```text
Ready for Task Breakdown:
  All required readiness criteria pass.

Needs Refinement:
  Story is useful but missing details that can be fixed in story text.

Blocked:
  Story cannot proceed because dependency, source access, contract, quality, security, or architecture is unresolved.

Deferred:
  Story is valid but not needed in current sprint/release.

Route Back to DES Phase:
  Missing context belongs to a main DES phase.

Route Back to Support Skill:
  Epic/story/sprint structure itself needs correction.
```

## HALT — Missing Acceptance Criteria

Stop if a selected story has no usable acceptance criteria.

### Decision needed

How should missing acceptance criteria be handled?

### Options

A. Mark story Needs Refinement
B. Infer criteria only from DES artifacts
C. Route back to `des-create-stories`
D. Route back to relevant DES main phase
E. User provides criteria now
F. Block story

### Recommendation

Choose A if minor. Choose D if acceptance criteria depend on missing requirements/KPI/design.

### Required response

Choose A/B/C/D/E/F.

## HALT — Missing Test Expectations

Stop if a selected story has no usable test expectations.

### Decision needed

How should missing test expectations be handled?

### Options

A. Mark story Needs Refinement
B. Infer from Phase 21 CI/CD spec
C. Infer from Phase 14 quality spec
D. Route back to Phase 21
E. User provides test expectations now
F. Block story

### Required response

Choose A/B/C/D/E/F.

## HALT — Missing Quality or Contract Context

Stop if story affects data product output but quality/contract expectations are missing.

### Trigger examples

* Silver/Gold story with no grain/quality expectation;
* Gold story with KPI but no reconciliation expectation;
* serving output with contract expectation missing;
* API/export story without contract behavior.

### Decision needed

How should missing quality/contract context be handled?

### Options

A. Mark story Needs Refinement
B. Mark story Blocked
C. Route back to Phase 12 Data Contracts
D. Route back to Phase 14 Data Quality
E. User provides missing context now
F. Defer story

### Required response

Choose A/B/C/D/E/F.

## HALT — Missing Governance or Security Context

Stop if story touches access, sensitive data, serving, API, AI-agent, export, or reverse ETL but security context is missing.

### Decision needed

How should missing governance/security context be handled?

### Options

A. Mark story Needs Refinement
B. Mark story Blocked
C. Route back to Phase 19 Governance and Security
D. Limit story scope to non-sensitive/non-serving work
E. User provides governance/security context now
F. Defer story

### Required response

Choose A/B/C/D/E/F.

## HALT — Dependency Blocker

Stop if story dependency is unresolved.

### Decision needed

How should dependency blocker be handled?

### Options

A. Block story
B. Replace with prerequisite story
C. Keep as stretch only
D. Split story into prerequisite and implementation story
E. Accept dependency risk explicitly
F. Defer story

### Required response

Choose A/B/C/D/E/F.

## HALT — Story Size Problem

Stop if story is too broad or too task-level.

### Decision needed

How should story sizing problem be handled?

### Options

A. Split story in `des-create-stories`
B. Merge micro-story with related story
C. Keep story but mark Needs Refinement
D. Convert to dev task in `des-dev-task-breakdown`
E. Defer story
F. User approves current size

### Required response

Choose A/B/C/D/E/F.

## HALT — Route Back Decision

Stop if readiness failure belongs to another phase or support skill.

### Decision needed

Where should the workflow route?

### Options

A. `des-create-epics`
B. `des-create-stories`
C. `des-sprint-planning`
D. DES Phase 12 — Data Contracts
E. DES Phase 14 — Data Quality
F. DES Phase 19 — Governance and Security
G. DES Phase 21 — CI/CD and Testing
H. Other DES phase
I. Continue as Draft with risks

### Required response

Choose A/B/C/D/E/F/G/H/I.

## Completion Criteria

This step is complete when:

* each selected story has a readiness evaluation;
* missing context is documented;
* blockers are documented;
* readiness status is assigned;
* required refinements are listed;
* ready stories are identified for task breakdown;
* draft Story Readiness Report is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
