# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the CI/CD and Testing Specification, validate it, update workflow status, and recommend the next skill.

## Required Inputs

- CI/CD and testing design draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the CI/CD and Testing Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved CI/CD decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, or `Unknown`.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. If blocked, stop and ask the user how to resolve blockers.
7. If passed or passed with risks, update workflow status.
8. Recommend the next skill: `des-project-evaluation`.

## Hints

- This artifact should define gates and test expectations, not implement CI/CD.
- Do not claim release readiness without rollback and evidence.
- If production promotion exists, approval and audit trail must be clear.
- If secrets handling is unclear, mark as Blocked or Risk.
- Breaking changes should never be hidden inside normal releases.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- P1 artifacts are not identified.
- No branch/review strategy exists.
- No environment/promotion strategy exists.
- Contracted output has no contract test gate.
- P1 output has no quality gate.
- Sensitive data has no security/governance gate.
- Secrets/config strategy is missing.
- Rollback path is missing.
- Release approval owner is missing.
- Artifact contains CI/CD implementation code prematurely.

### Options

A. Fix the CI/CD and Testing specification now  
B. Mark specification as Draft with blockers  
C. Return to Step 02 CI/CD decisions  
D. Route back to the upstream skill that owns the missing context  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_21_cicd_testing:
  skill: des-cicd-and-testing
  artifact: _des-output/planning-artifacts/21-cicd-testing-specification.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  release_gates:
    - gate_id: ...
      type: static | unit | integration | contract | quality | security | performance | approval
      behavior: block | warn | info | manual approval
  environments:
    - local
    - dev
    - test
    - staging
    - prod
  rollback_strategy:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-project-evaluation
```

## Completion Criteria

This step is complete when:

* artifact is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next skill is recommended;
* the agent has not proceeded into Phase 22 without user approval.
