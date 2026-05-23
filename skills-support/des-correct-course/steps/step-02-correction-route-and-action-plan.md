# Step 02 — Correction Route and Action Plan

## Goal

Identify root cause, impacted artifacts, correction route, required updates, implementation/release impact, and action plan.

## Required Inputs

- Issue triage from Step 01
- Relevant support artifacts
- Relevant DES main artifacts
- User answers from HALT decisions

## Actions

1. Summarize issue.
2. Analyze root cause.
3. Identify impacted artifacts.
4. Identify impacted epics/stories/sprint items.
5. Select correction route.
6. Define required artifact updates.
7. Define support skill reruns.
8. Define implementation impact.
9. Define release impact.
10. Define risk of not correcting.
11. Create correction action plan.
12. Define workflow status update recommendation.

## Root Cause Categories

Use:

```text
Missing upstream artifact
Ambiguous upstream artifact
Conflicting artifact
Missing evidence
Wrong dependency order
Story too broad
Story too vague
Sprint overloaded
Implementation mismatch
Quality/contract gap
Governance/security gap
CI/CD/testing gap
External blocker
Accepted risk
Unknown
```

## Route Mapping Guide

Use this routing guide:

| Problem                             | Route                                 |
| ----------------------------------- | ------------------------------------- |
| business goal unclear               | DES Phase 01                          |
| question/use case unclear           | DES Phase 02                          |
| KPI/metric formula unclear          | DES Phase 03                          |
| data product boundary unclear       | DES Phase 04                          |
| source/access unclear               | DES Phase 05 or Phase 08              |
| domain concept/grain unclear        | DES Phase 06                          |
| platform/layer architecture unclear | DES Phase 07                          |
| ingestion behavior unclear          | DES Phase 08                          |
| Bronze issue                        | DES Phase 09 or story/task refinement |
| Silver issue                        | DES Phase 10 or Phase 13              |
| Gold issue                          | DES Phase 11 or Phase 13              |
| contract issue                      | DES Phase 12                          |
| transformation logic issue          | DES Phase 13                          |
| quality rule/gate issue             | DES Phase 14                          |
| orchestration/monitoring issue      | DES Phase 15                          |
| semantic issue                      | DES Phase 16                          |
| serving channel/access issue        | DES Phase 17 or Phase 19              |
| metadata/lineage issue              | DES Phase 18                          |
| governance/security issue           | DES Phase 19                          |
| cost/performance issue              | DES Phase 20                          |
| testing/release issue               | DES Phase 21                          |
| evaluation/closure issue            | DES Phase 22                          |
| epic too broad/wrong                | des-create-epic                       |
| story vague/wrong                   | des-create-story                      |
| sprint overloaded/wrong order       | des-sprint-planning                   |
| story not ready                     | des-story-readiness-check             |
| task breakdown wrong                | des-dev-task-breakdown                |
| implementation sequence wrong       | des-implementation-plan               |
| code mismatch                       | implementation/code review loop       |
| release blocked                     | des-release-readiness-review          |

## HALT — Root Cause

Stop if root cause cannot be determined.

### Decision needed

How should unknown root cause be handled?

### Options

A. Mark root cause Unknown and create investigation action
B. Use most likely root cause with caveat
C. Ask user for more evidence
D. Route to relevant review skill
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## HALT — Impacted Artifact

Stop if impacted artifact is unclear.

### Decision needed

Which artifact should be corrected?

### Options

A. DES main phase artifact
B. Epic Catalog
C. Story Catalog
D. Sprint Plan
E. Story Readiness Report
F. Dev Task Breakdown
G. Implementation Plan
H. Code/implementation
I. Release Readiness Report
J. Workflow Status
K. Unknown; investigate

### Required response

Choose one or more options.

## HALT — Correction Route

Stop if the correction route is unclear.

### Decision needed

What route should be taken?

### Options

A. Route back to DES main phase
B. Route back to support skill
C. Refine story
D. Replan sprint
E. Update implementation plan
F. Request more evidence
G. Block release
H. Downgrade release target
I. Accept risk
J. Stop workflow

### Required response

Choose one or more options.

## HALT — Release Impact

Stop if release impact is unclear and release is in scope.

### Decision needed

How does this issue affect release?

### Options

A. Blocks release
B. Allows demo/internal only
C. Allows release with accepted risk
D. Does not affect release
E. Requires more evidence
F. Remove affected item from release scope

### Required response

Choose A/B/C/D/E/F.

## HALT — Risk Acceptance

Stop if recommendation is to accept risk.

### Decision needed

Who accepts the risk and under what condition?

### Options

A. User accepts risk for demo/internal review only
B. Product/business owner must accept risk
C. Data owner/steward must accept risk
D. Security/governance owner must accept risk
E. Engineering owner must accept risk
F. Do not accept risk; require correction

### Recommendation

Choose F for P1 correctness/security/contract risks.

### Required response

Choose A/B/C/D/E/F.

## Completion Criteria

This step is complete when:

* root cause is documented;
* impacted artifacts are listed;
* impacted epics/stories/sprint/release items are listed;
* correction route is selected;
* required artifact updates are defined;
* required support skill reruns are defined;
* implementation/release impact is documented;
* correction action plan is drafted;
* workflow status update recommendation is drafted.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
