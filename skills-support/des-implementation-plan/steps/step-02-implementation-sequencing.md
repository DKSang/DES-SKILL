# Step 02 — Implementation Sequencing

## Goal

Create a dependency-aware implementation sequence with checkpoints, validation order, quality/security gates, documentation updates, status updates, and coding-agent handoff.

## Required Inputs

- Selected implementation scope from Step 01
- Dev Task Breakdown
- Sprint Plan if available
- Story Readiness Report if available
- Relevant DES artifacts
- User answers from HALT decisions
- Repo/folder context if available

## Actions

1. Define implementation scope.
2. List selected stories and tasks.
3. Define execution strategy.
4. Sequence tasks based on dependencies.
5. Identify parallelizable tasks.
6. Group tasks into implementation phases.
7. Define checkpoint plan.
8. Define validation and test execution order.
9. Define quality, contract, and security gate timing.
10. Define documentation, metadata, and status update plan.
11. Define rollback, abort, and escalation conditions.
12. Create coding-agent handoff prompt.
13. Assign implementation readiness decision.

## Execution Strategy Options

Use one or more:

| Strategy | When To Use |
| --- | --- |
| Sequential | tasks have hard dependencies |
| Checkpoint-driven | high-risk data output or quality/security work |
| Test-first | transformation/quality logic is complex |
| Foundation-first | repo/config/CI/CD setup needed |
| Thin vertical slice | deliver source → Bronze → Silver → Gold for one P1 path |
| Layer-first | implement all Bronze, then Silver, then Gold |
| Story-by-story | independent stories |
| Risk-first | unblock risky dependency early |

## HALT — Task Dependency Sequence

Stop if task dependency order is unclear.

### Decision needed

How should tasks be sequenced?

### Options

A. Use task order from Dev Task Breakdown  
B. Sequence by dependency-first  
C. Sequence by test-first approach  
D. Sequence by thin vertical slice  
E. Sequence by foundation-first  
F. User provides order  
G. Keep sequence Draft  

### Recommendation

Choose A + B unless user requests a different execution strategy.

### Required response

Choose one or more options.

## HALT — Parallelization Decision

Stop if tasks may be parallelized but dependency risk is unclear.

### Decision needed

How should parallel work be handled?

### Options

A. No parallelization; execute sequentially  
B. Parallelize independent documentation/test tasks  
C. Parallelize independent stories only  
D. Parallelize by layer/source where dependencies allow  
E. Mark parallelization opportunities only, do not schedule them  
F. User approves specific parallel work  

### Recommendation

Choose E for safe planning.

### Required response

Choose A/B/C/D/E/F.

## HALT — Validation and Test Order

Stop if validation timing is unclear.

### Decision needed

When should validation/tests run?

### Options

A. After each task where validation exists  
B. After each story completion  
C. Before integration/publish step  
D. At sprint end only  
E. Test-first before implementation where possible  
F. According to CI/CD spec  
G. User defines test timing  

### Recommendation

Choose A + B + F. Avoid D unless early tests are impossible.

### Required response

Choose one or more options.

## HALT — Quality Security Gate Timing

Stop if quality/contract/security checkpoints are unclear.

### Decision needed

When should gates run?

### Options

A. Contract checks before publishing output  
B. Quality checks before publishing output  
C. Security/governance checks before serving/export/API access  
D. Secret scan before merge/release  
E. Metadata/lineage check before story Done  
F. Release gate according to Phase 21  
G. User-defined gate timing  

### Required response

Choose one or more options.

## HALT — Repo Context Requirement

Stop if implementation plan needs exact file paths but repo context is missing.

### Decision needed

How should repo path guidance be handled?

### Options

A. Use logical areas only  
B. Use repo structure from architecture/CI/CD artifacts  
C. User provides repo tree now  
D. Keep file path guidance Draft  
E. Stop until repo context exists  

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

- selected stories/tasks are listed;
- execution strategy is defined;
- dependency sequence is documented;
- parallelization opportunities are documented;
- implementation phases are defined;
- checkpoint plan is defined;
- test/validation order is defined;
- quality/contract/security gate timing is defined;
- docs/metadata/status updates are planned;
- abort/escalation conditions are defined;
- coding-agent handoff prompt is ready;
- draft Implementation Plan is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
