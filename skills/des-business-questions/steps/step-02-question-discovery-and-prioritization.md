# Step 02 - Question Discovery and Prioritization

## Goal

Create a prioritized set of clear, answerable business questions mapped to consumers, decisions, value, and scope.

## Required Inputs

- Confirmed context from Step 01
- Business Discovery Brief
- User answers from HALT points
- Existing question list, if any

## Actions

1. Generate candidate questions from:
   - consumers;
   - target decisions;
   - expected value;
   - scope;
   - constraints;
   - initial success criteria.
2. Rewrite vague asks into answerable questions.
3. Classify each question.
4. Map each question to consumer and decision/use case.
5. Assign priority.
6. Identify candidate answer format.
7. Capture candidate metrics without final KPI formulas.
8. Capture freshness expectations and grain hints.
9. Mark source hints only when known; do not choose sources yet.
10. Identify out-of-scope, duplicate, unsupported, or ambiguous questions.
11. Use HALT checkpoints before finalizing priority and scope.

## Hints

- A good business question is answerable, useful, scoped, and tied to a decision or use case.
- Do not confuse a dashboard page with a business question.
- Do not confuse a metric with a business question.
- Do not confuse a table name with a business question.
- Ask "what action would this answer change?"
- If no action changes, the question may be low priority or informational only.
- Keep candidate metrics lightweight; Phase 3 will define KPIs properly.
- Use business language, not implementation language.
- Do not define final KPI formulas.
- Do not design tables, sources, pipelines, dashboards, semantic models, APIs, ML models, contracts, or code.

## Question Quality Rules

A question is strong if it has:

| Quality | Description |
| --- | --- |
| Consumer | The person/system using the answer is known. |
| Decision | The decision or workflow supported is clear. |
| Scope | It fits the approved project boundary. |
| Answerability | It is plausible to answer with data. |
| Granularity | The needed level of detail is clear enough. |
| Freshness | The time sensitivity is understood. |
| Value | The answer has business, operational, compliance, product, or learning value. |

## Question Types

Classify each question as one or more:

| Type | Description |
| --- | --- |
| Descriptive | What happened? |
| Diagnostic | Why did it happen? |
| Monitoring | Is something healthy, fresh, late, risky, or broken? |
| Comparative | Which segment, product, region, customer, source, or period differs? |
| Predictive | What is likely to happen? |
| Prescriptive | What should we do? |
| Operational | What action should be triggered? |
| Compliance / Audit | Can we prove policy, lineage, access, retention, or correctness? |
| ML / AI Foundation | What dataset, feature, label, or training signal is needed? |

## HALT - Question Priority Approval

Stop after drafting candidate questions.

### Why this matters

Question priority drives KPI design, source assessment, Gold tables, semantic model, serving layer, and release evaluation.

### Decision needed

Approve the top-priority business questions.

### Options

A. Approve top 3 questions
B. Approve top 5 questions
C. Reorder priorities
D. Split questions by consumer
E. Mark all as Draft and continue

### Required response

Choose A/B/C/D/E and provide any priority changes.

## HALT - Scope Conflict

Stop if a candidate question conflicts with Phase 1 scope or non-scope.

### Trigger examples

- Question requires a source not planned for MVP.
- Question implies real-time behavior not approved.
- Question implies ML/recommendation behavior not approved.
- Question belongs to a consumer not in first release.
- Question requires regulated or sensitive data not approved.

### Decision needed

How should the conflicting question be handled?

### Options

A. Keep in scope and update Phase 1 scope later
B. Mark as future phase
C. Remove from catalog
D. Keep as open question requiring approval

### Required response

Choose A/B/C/D for each conflicting question.

## HALT - Answerability Risk

Stop if a high-priority question may not be answerable with plausible data.

### Decision needed

What should happen to this question?

### Options

A. Keep as high priority and flag source validation in Phase 5
B. Lower priority until source assessment confirms feasibility
C. Rewrite question to be answerable with known data
D. Remove/defer question

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

- candidate questions are rewritten into clear business questions;
- each question has consumer, decision/use case, value, type, priority, and status;
- top questions are approved or marked Draft;
- scope conflicts are resolved or marked open;
- answerability risks are documented;
- draft catalog content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
