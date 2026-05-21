# Step 02 — Retrospective Analysis

## Goal

Analyze sprint/release/workflow outcomes, identify lessons learned, root causes, improvements, and next iteration actions.

## Required Inputs

- Retrospective scope from Step 01
- Sprint Plan
- Story Catalog
- Workflow status if available
- Code Review Report if available
- Release Readiness Report if available
- User evidence/feedback
- User answers from HALT decisions

## Actions

1. Summarize retrospective scope.
2. Compare planned vs completed work.
3. Review story outcomes.
4. Review release/readiness outcome.
5. Identify what went well.
6. Identify what did not go well.
7. Identify blockers.
8. Analyze root causes.
9. Review artifact quality:
   - Were DES artifacts sufficient?
   - Which phase artifact was missing/unclear?
   - Did story/task planning rely on assumptions?
10. Review support skill workflow:
   - Did epic/story/sprint/readiness/task/review flow work?
   - Where was friction?
11. Extract technical lessons.
12. Extract quality/contract/governance lessons.
13. Extract CI/CD/release lessons.
14. Capture stakeholder/user feedback.
15. Define action items.
16. Recommend next sprint direction.
17. Recommend correct-course route if needed.
18. Recommend workflow status updates.

## Root Cause Categories

Use these categories:

| Category | Examples |
| --- | --- |
| Missing artifact | upstream DES artifact incomplete |
| Ambiguous story | acceptance/test/dependency unclear |
| Dependency issue | prerequisite not completed |
| Technical complexity | implementation harder than expected |
| Data issue | source/schema/quality problem |
| Governance issue | access/security approval missing |
| CI/CD issue | tests/gates/env not ready |
| Scope issue | sprint overloaded or story too large |
| Evidence issue | results/status not recorded |
| External blocker | source/system/person unavailable |

## HALT — Release Outcome Evidence

Stop if release outcome is important but unavailable.

### Decision needed

How should missing release outcome be handled?

### Options

A. Mark release outcome Unknown  
B. Use release readiness report if available  
C. Use user-provided summary  
D. Continue as sprint retro only  
E. Route back to `des-release-readiness-review`  

### Required response

Choose A/B/C/D/E.

## HALT — Blocker Root Cause Handling

Stop if blockers exist but root cause is unclear.

### Decision needed

How should blocker root cause be handled?

### Options

A. Mark root cause Unknown  
B. Assign likely category with caveat  
C. Ask user to provide blocker details  
D. Create investigation action item  
E. Route to `des-correct-course`  

### Required response

Choose A/B/C/D/E.

## HALT — Stakeholder Feedback Availability

Stop if stakeholder/user feedback is expected but unavailable.

### Decision needed

How should missing feedback be handled?

### Options

A. Mark stakeholder feedback Unknown  
B. Continue without stakeholder feedback  
C. Create action item to collect feedback  
D. Use internal/team feedback only  
E. Stop until feedback is provided  

### Required response

Choose A/B/C/D/E.

## HALT — Next Iteration Direction

Stop if next iteration direction is unclear.

### Decision needed

What should happen next?

### Options

A. Continue to next sprint with current backlog  
B. Run `des-correct-course`  
C. Update workflow status only  
D. Route back to a main DES phase  
E. Create/refresh stories  
F. Improve CI/CD/testing  
G. Improve quality/contracts  
H. Improve governance/security  
I. Close iteration  
J. Custom direction  

### Recommendation

Choose B if blockers show upstream design/story mismatch. Choose A if sprint succeeded with minor improvements.

### Required response

Choose one or more options.

## Completion Criteria

This step is complete when:

- planned vs completed review is done;
- story outcomes are summarized;
- release outcome is summarized or marked Unknown;
- what went well / did not go well are documented;
- blockers and root causes are documented;
- artifact/support-skill feedback is documented;
- lessons learned are documented;
- action items are created;
- next iteration recommendation is drafted;
- draft Retrospective Report is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
