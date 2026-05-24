# Step 02 - Question Discovery and Prioritization

## Goal

Create a prioritized set of clear, answerable business questions mapped to consumers, decisions, value, scope, and evidence.

This step prepares the question content for the Business Question Catalog and identifies which question decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Business Discovery Brief
- Phase 01 to Phase 02 handoff, if available
- Phase 01 do-not-assume list
- User answers from HALT points
- Existing question list, if any
- Existing dashboard/report/API/ML/analytics requests, if any

---

## Actions

1. Generate candidate questions from:
   - consumers;
   - target decisions;
   - expected value;
   - scope;
   - constraints;
   - initial success criteria;
   - existing requests or backlog items.
2. Rewrite vague asks into answerable questions.
3. Classify each question.
4. Map each question to consumer and decision/use case.
5. Assign priority.
6. Identify candidate answer format.
7. Capture candidate metrics without final KPI formulas.
8. Capture freshness expectations and grain hints.
9. Mark source hints only when known; do not choose sources yet.
10. Identify out-of-scope, duplicate, unsupported, or ambiguous questions.
11. Map each P1 question to evidence.
12. Mark unsupported priorities as `Draft`, `Open`, `Assumption`, or `Risk`.
13. Identify required Phase 02 support work.
14. Use HALT checkpoints before finalizing priority and scope.
15. Prepare draft content for the Business Question Catalog.
16. Prepare content for the Phase 02 Support Plan.

---

## Hints

- A good business question is answerable, useful, scoped, and tied to a decision or use case.
- Do not confuse a dashboard page with a business question.
- Do not confuse a metric with a business question.
- Do not confuse a table name with a business question.
- Ask: "what action would this answer change?"
- If no action changes, the question may be low priority or informational only.
- Keep candidate metrics lightweight; Phase 03 will define KPIs properly.
- Use business language, not implementation language.
- Do not define final KPI formulas.
- Do not design tables, sources, pipelines, dashboards, semantic models, APIs, ML models, contracts, or code.
- Do not expand beyond Phase 01 MVP scope unless the question is marked future/out-of-scope/open.

---

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
| Evidence | Its source, priority, or approval is recorded. |

---

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

---

## Question Evidence Mapping

For each P1 question, capture the evidence status.

| Question Field | Evidence Status | Allowed Output |
|---|---|---|
| Consumer mapping | Confirmed / Assumed / Missing / Waived | Fact / Assumption / Open Question / Accepted Risk |
| Decision mapping | Confirmed / Assumed / Missing / Waived | Fact / Assumption / Open Question / Accepted Risk |
| Priority | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk |
| Scope alignment | Confirmed / Conflict / Missing / Waived | In Scope / Future / Out of Scope / Open / Risk |
| Answerability | Plausible / Uncertain / Unlikely / Unknown | Keep / Flag Phase 05 / Rewrite / Defer |

---

## Phase 02 Required Support Work

Based on the questions above, prepare a support plan using these categories:

| Support Work | Required When | Output |
|---|---|---|
| Phase 01 Handoff Review | Always | Evidence pack |
| Question Quality Review | Always | Evidence pack |
| Consumer Mapping Check | P1 questions exist | Evidence pack |
| Decision Mapping Check | P1 questions exist | Evidence pack |
| Scope Alignment Check | Always | Evidence pack |
| Priority Validation | P1/P2 priorities assigned | Evidence pack |
| Answerability Risk Check | Questions imply source/data feasibility | Evidence pack |
| Done Gate | Always before marking Done | Done Gate result |
| Handoff to Phase 03 | Always before Phase 03 | Handoff file |

---

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

---

## HALT - Scope Conflict

Stop if a candidate question conflicts with Phase 01 scope or non-scope.

### Trigger examples

- Question requires a source not planned for MVP.
- Question implies real-time behavior not approved.
- Question implies ML/recommendation behavior not approved.
- Question belongs to a consumer not in first release.
- Question requires regulated or sensitive data not approved.

### Decision needed

How should the conflicting question be handled?

### Options

A. Keep in scope and route back to Phase 01 scope update later  
B. Mark as future phase  
C. Remove from catalog  
D. Keep as open question requiring approval  

### Required response

Choose A/B/C/D for each conflicting question.

---

## HALT - Answerability Risk

Stop if a high-priority question may not be answerable with plausible data.

### Decision needed

What should happen to this question?

### Options

A. Keep as high priority and flag source validation in Phase 05  
B. Lower priority until source assessment confirms feasibility  
C. Rewrite question to be answerable with known data  
D. Remove/defer question  

### Required response

Choose A/B/C/D.

---

## HALT - Phase 01 Scope Drift

Stop if Phase 02 questions reveal that Phase 01 scope, consumer, or target use case is probably wrong.

### Options

A. Continue and mark the affected questions as future/open  
B. Route back to `des-business-discovery` to revise Phase 01  
C. Run `des-correct-course`  
D. Stop workflow  

### Required response

Choose A/B/C/D.

---

## Completion Criteria

This step is complete when:

- candidate questions are rewritten into clear business questions;
- each P1 question has consumer, decision/use case, value, type, priority, and status;
- each P1 question has evidence mapping;
- top questions are approved or marked Draft;
- scope conflicts are resolved or marked open;
- answerability risks are documented;
- required support work is identified;
- draft catalog content is ready.

---

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
