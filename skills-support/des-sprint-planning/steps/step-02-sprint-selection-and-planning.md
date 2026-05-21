# Step 02 — Sprint Selection and Planning

## Goal

Select stories for the sprint, define sprint backlog, dependency order, readiness checks, risks, acceptance criteria, and execution guidance.

## Required Inputs

- Confirmed context from Step 01
- Epic Catalog
- Story Catalog
- Workflow status if available
- User answers from HALT decisions
- Existing Sprint Plan if updating

## Actions

1. Define sprint planning scope.
2. Define sprint goal.
3. Define sprint duration and capacity assumptions.
4. Build candidate story pool.
5. Rank candidate stories by:
   - priority;
   - release group;
   - dependency order;
   - readiness status;
   - blocker status;
   - business value;
   - technical unblock value;
   - risk reduction value;
   - capacity fit;
   - quality/contract/governance need;
   - CI/CD need.
6. Select committed sprint stories.
7. Select stretch stories if useful.
8. Identify deferred stories.
9. Identify blocked stories.
10. Define dependency order.
11. Define sprint backlog.
12. Define readiness check plan.
13. Define sprint acceptance criteria.
14. Define Definition of Ready.
15. Define Definition of Done.
16. Document risks and mitigations.
17. Prepare execution guidance.
18. Prepare draft Sprint Plan.

## Sprint Selection Principles

| Principle | Meaning |
| --- | --- |
| Goal-first | Select stories that support one sprint goal |
| Dependency-aware | Upstream/unblocking work comes first |
| P1-first | Prefer P1 and MVP release stories |
| Capacity-aware | Do not overload the sprint |
| Readiness-aware | Avoid committing unclear or blocked stories |
| Quality-aware | Include quality, test, CI/CD, and governance work where needed |
| Risk-visible | Blockers and assumptions must be explicit |

## Story Selection Strategy

Recommended strategy:

```text
1. Select prerequisite/foundation work first.
2. Select highest-priority P1 stories.
3. Filter out blocked stories unless sprint goal is to unblock them.
4. Respect dependency order.
5. Include test/quality/CI/CD story where implementation work requires it.
6. Avoid too many unrelated epics in one sprint.
7. Keep optional/stretch stories separate.
```

## HALT — Story Selection Strategy

Stop if story selection logic is unclear.

### Decision needed

How should sprint stories be selected?

### Options

A. Priority-first
B. Dependency-first
C. Foundation-first
D. Risk-reduction-first
E. Data-product-output-first
F. Release-readiness-first
G. User-selected stories only
H. Correct-course-first
I. Custom strategy

### Recommendation

Choose B + C for early sprints. Choose E for delivery-focused MVP sprint.

### Required response

Choose one or more options.

## HALT — Blocked Story Handling

Stop if blocked stories are candidates for the sprint.

### Decision needed

How should blocked stories be handled?

### Options

A. Exclude blocked stories from sprint commitment
B. Include only unblock action, not full story
C. Include as stretch only
D. Include if owner accepts risk
E. Route back to relevant DES phase or support skill
F. Keep sprint plan Draft

### Recommendation

Choose A or B.

### Required response

Choose A/B/C/D/E/F.

## HALT — Dependency Conflict

Stop if selected stories have dependency conflicts.

### Trigger examples

* Gold story selected before required Silver story;
* serving story selected before Gold/Semantic story;
* release story selected before code review/test evidence;
* quality gate story selected before quality rule definition;
* implementation story selected before source access exists.

### Decision needed

How should dependency conflict be resolved?

### Options

A. Replace dependent story with prerequisite story
B. Keep dependent story as stretch
C. Split story into design/mock and implementation parts
D. Route back to story creation/refinement
E. Accept dependency risk explicitly
F. Keep sprint plan Draft

### Recommendation

Choose A. Choose C only for demo/mock work.

### Required response

Choose A/B/C/D/E/F.

## HALT — Readiness Requirement

Stop if selected stories have not passed readiness check.

### Decision needed

Should stories be checked before sprint commitment?

### Options

A. Require `des-story-readiness-check` before commitment
B. Allow Draft sprint plan pending readiness check
C. Commit only stories already marked Ready for Sprint Planning
D. Include readiness check as first sprint activity
E. User accepts risk and proceeds

### Recommendation

Choose A or D.

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

* sprint goal is clear;
* selected sprint stories are listed;
* stretch stories are separated;
* deferred stories are listed;
* blocked stories are listed;
* dependency order is documented;
* sprint backlog is realistic;
* readiness check plan is defined;
* sprint acceptance criteria are defined;
* DoR and DoD are included;
* risks and mitigations are documented;
* draft Sprint Plan is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
