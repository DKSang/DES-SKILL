# Step 01 - Context and Readiness

## Goal

Confirm that Requirements and KPIs is the correct next step and that approved business questions are available.

## Required Inputs

Look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- workflow status file;
- approved or draft P1/P2 business questions;
- known consumers;
- target decisions or use cases;
- project scope and non-scope;
- initial success criteria;
- existing metric/KPI notes, if any.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize the Business Discovery Brief.
4. Read or summarize the Business Question Catalog.
5. Extract:
   - P1/P2 business questions;
   - consumers;
   - decision/use-case mapping;
   - candidate metrics;
   - freshness hints;
   - grain hints;
   - constraints;
   - open questions.
6. Check whether an existing `03-requirements-and-kpi-catalog.md` exists.
7. Decide whether to create a new catalog, update an existing one, continue as Draft, or route back to Phase 2.

## Hints

- Requirements should trace back to business questions.
- A metric is not ready if its formula, grain, owner, or business meaning is unclear.
- "Real-time", "daily", "accurate", "trusted", and "fast" are not sufficient requirements unless made measurable.
- Do not turn every candidate metric from Phase 2 into a KPI.
- If Phase 2 questions are not prioritized, stop before deriving requirements.
- If a KPI already exists in stakeholder language, preserve the name but clarify the definition.

## Requirements Readiness Lens

Use this lens before defining requirements:

| Area | Readiness Question |
| --- | --- |
| Business question | Which approved question does this requirement support? |
| Consumer | Who needs this requirement? |
| Behavior | What must the data system do? |
| Measurement | How will success be measured? |
| Grain | At what level is the metric or requirement evaluated? |
| Freshness | How current must the data be? |
| Quality | What quality failure would make the output unusable? |
| Acceptance | What evidence proves this requirement is satisfied? |
| Owner | Who can approve or reject this requirement? |

## HALT - Missing or Weak Business Questions

Stop if Phase 2 context is missing or too weak to derive requirements safely.

### Trigger

Use this HALT if:

- `02-business-question-catalog.md` is missing;
- P1 questions are not approved or prioritized;
- questions do not map to consumers;
- questions do not map to target decisions or use cases;
- scope conflicts from Phase 2 are unresolved.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-business-questions`  
B. Continue Phase 3 as Draft using current context  
C. User provides missing question priorities now  
D. Stop workflow

### Recommendation

Choose A if no P1 questions are approved.  
Choose B only if the user accepts that requirements and KPIs remain Draft.

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- P1/P2 questions are identified;
- candidate metrics and freshness/grain hints are extracted;
- unresolved upstream gaps are documented;
- the agent knows whether to create, update, or defer the catalog.

## Next Step

After completion, load only:

```text
steps/step-02-requirements-and-kpi-definition.md
```
