# Step 01 — Context and Story Selection

## Goal

Confirm that `des-story-readiness-check` is the correct support skill and select which stories should be evaluated for implementation readiness.

## Required Inputs

Required:

```text
.agents/des-skill/output/support/story-catalog.md
```

Recommended:

```text
.agents/des-skill/output/support/epic-catalog.md
.agents/des-skill/output/support/sprint-plan.md
```

Useful DES artifacts depend on story type:

```text
.agents/des-skill/output/05-data-source-inventory.md
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
.agents/des-skill/output/21-cicd-testing-specification.md
```

Existing output to check:

```text
.agents/des-skill/output/support/story-readiness-report.md
```

## Actions

1. Read `customize.toml`.
2. Check whether `story-catalog.md` exists.
3. Check whether `sprint-plan.md` exists.
4. Extract stories from:

   * selected sprint stories, if sprint plan exists;
   * user-selected story IDs, if provided;
   * all P1 stories, if no sprint selection exists.
5. For each selected story, extract:

   * story ID;
   * story title;
   * epic ID;
   * story type;
   * priority;
   * status;
   * source DES artifacts;
   * acceptance criteria;
   * test expectations;
   * quality expectations;
   * governance/security expectations;
   * dependencies;
   * risks/blockers.
6. Determine required readiness scope.
7. Check existing readiness report if updating.
8. Decide whether to continue, draft with gaps, route back, or stop.

## Story Readiness Lens

Use this lens for each story:

| Area             | Readiness Question                           |
| ---------------- | -------------------------------------------- |
| Epic mapping     | Does this story belong to a valid epic?      |
| Artifact mapping | Which DES artifacts justify this story?      |
| Scope            | Is included/excluded scope clear?            |
| Acceptance       | What proves the story is complete?           |
| Test             | What tests/checks prove it works?            |
| Data             | Are inputs, outputs, grain, and rules known? |
| Quality          | Are DQ/contract expectations defined?        |
| Security         | Are access/sensitive data constraints clear? |
| Dependency       | What must be completed first?                |
| Size             | Is it implementable in a sprint?             |
| Handoff          | Can it move to task breakdown?               |

## HALT — Story Catalog Availability

Stop if Story Catalog is missing.

### Trigger

Use this HALT if:

```text
.agents/des-skill/output/support/story-catalog.md
```

does not exist, is empty, or does not contain usable stories.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-create-stories`
B. User provides story details now
C. Continue with Draft readiness report using available context
D. Stop workflow

### Recommendation

Choose A for clean workflow.

### Required response

Choose A/B/C/D.

## HALT — Story Selection

Stop if it is unclear which stories should be checked.

### Decision needed

Which stories should be evaluated?

### Options

A. Stories selected in sprint plan
B. All P1 stories
C. One user-specified story
D. Stories from one epic
E. Blocked stories only
F. Stories marked Ready for Sprint Planning
G. Custom selection

### Recommendation

Choose A if sprint plan exists. Choose C if user is focused on one story.

### Required response

Choose A/B/C/D/E/F/G.

## HALT — Readiness Scope

Stop if readiness check depth is unclear.

### Decision needed

What level of readiness check should be performed?

### Options

A. Basic readiness: story clarity, acceptance, dependency
B. Standard readiness: basic + tests + DES artifact traceability
C. Full readiness: standard + contract + quality + governance + CI/CD
D. Production readiness: full + release/security/performance implications
E. Custom readiness scope

### Recommendation

Choose C for DES implementation stories.

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

* Story Catalog is available or Draft continuation is approved;
* stories to evaluate are selected;
* readiness scope is selected;
* required DES artifacts are identified per story;
* existing readiness report is checked;
* the agent is ready to evaluate readiness.

## Next Step

After completion, load only:

```text
steps/step-02-readiness-evaluation.md
```
