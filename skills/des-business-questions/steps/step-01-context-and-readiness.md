# Step 01 - Context and Readiness

## Goal

Confirm that Business Questions is the correct next step and that Phase 1 discovery context is available.

## Required Inputs

Look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- current workflow status file;
- current user request;
- any existing business question list, dashboard request, report request, ML use case, API request, or analytics backlog;
- scope and non-scope from Phase 1.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize the Business Discovery Brief.
4. Extract:
   - project intent;
   - primary consumers;
   - stakeholders;
   - target decisions or use cases;
   - expected value;
   - scope and non-scope;
   - constraints;
   - open questions.
5. Check whether an existing `02-business-question-catalog.md` exists.
6. Decide whether to create a new catalog, update an existing one, or route back to Phase 1.

## Hints

- Do not generate business questions from technology choices alone.
- If the user asks for a dashboard, ask what decisions or questions the dashboard should answer.
- If the user asks for an ML dataset, ask what prediction, ranking, classification, or recommendation task it supports.
- If the user asks for a data pipeline, ask what downstream use case depends on it.
- If the Phase 1 artifact is incomplete, you may proceed only as Draft if the user explicitly agrees.
- Treat unanswered Phase 1 open questions as risks for Phase 2.

## Question Readiness Lens

Use this lens before generating questions:

| Area | Readiness Question |
| --- | --- |
| Consumer | Who will use the answer? |
| Decision | What decision or workflow will the answer improve? |
| Value | Why does answering this matter? |
| Scope | Is this question in the approved project boundary? |
| Answerability | Is there likely data to answer it? |
| Freshness | How current does the answer need to be? |
| Granularity | At what level does the answer need to be expressed? |
| Action | What will someone do differently after seeing the answer? |

## HALT - Missing or Weak Phase 1 Context

Stop if Phase 1 context is missing or too weak to derive questions safely.

### Trigger

Use this HALT if:

- `01-business-discovery-brief.md` is missing;
- primary consumer is unknown;
- target decision or use case is unknown;
- project scope is unclear;
- expected value is unclear.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-business-discovery`
B. Continue Phase 2 as Draft using current context
C. User provides missing discovery context now
D. Stop workflow

### Recommendation

Choose A if primary consumer or target decision is missing.
Choose B only if the user accepts that questions may remain draft/unapproved.

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

- Phase 1 context is confirmed;
- consumers and target decisions are available or marked unresolved;
- scope and non-scope are available;
- the agent knows whether to create, update, or defer the question catalog.

## Next Step

After completion, load only:

```text
steps/step-02-question-discovery-and-prioritization.md
```
