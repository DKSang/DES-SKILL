# Step 01 — Context and Release Scope

## Goal

Confirm that `des-release-readiness-review` is the correct support skill, identify release scope, release target, and evidence availability.

## Required Inputs

Required:

```text
_des-output/implementation-artifacts/story-catalog.md
_des-output/implementation-artifacts/sprint-plan.md
_des-output/implementation-artifacts/code-review-report.md
```

Recommended:

```text
_des-output/implementation-artifacts/implementation-plan.md
_des-output/implementation-artifacts/dev-task-breakdown.md
_des-output/implementation-artifacts/story-readiness-report.md
_des-output/implementation-artifacts/epic-catalog.md
```

Useful DES artifacts:

```text
_des-output/planning-artifacts/12-data-contract-specification.md
_des-output/planning-artifacts/14-data-quality-specification.md
_des-output/planning-artifacts/15-orchestration-observability-specification.md
_des-output/planning-artifacts/19-governance-security-specification.md
_des-output/planning-artifacts/21-cicd-testing-specification.md
```

Existing output to check:

```text
_des-output/implementation-artifacts/release-readiness-report.md
```

## Actions

1. Read `customize.toml`.
2. Check whether required upstream support artifacts exist.
3. Identify release target:

   * demo;
   * internal review;
   * dev environment;
   * test environment;
   * staging;
   * production;
   * handoff package.
4. Identify release candidate:

   * story/stories;
   * epic;
   * sprint increment;
   * data product output;
   * pipeline/workflow;
   * semantic/serving output.
5. Extract:

   * selected stories;
   * story acceptance criteria;
   * story status;
   * code review decision;
   * findings and required changes;
   * available test evidence;
   * quality evidence;
   * contract evidence;
   * security/governance evidence;
   * CI/CD gate evidence;
   * rollback/recovery plan;
   * docs/metadata/status updates.
6. Check existing `release-readiness-report.md` if updating.
7. Decide whether to continue, dry-run, route back, or stop.

## Release Readiness Lens

Use this lens:

| Area          | Readiness Question                                 |
| ------------- | -------------------------------------------------- |
| Scope         | What exactly is being released?                    |
| Target        | Demo, internal, dev/test/staging/prod, or handoff? |
| Stories       | Are included stories Done?                         |
| Acceptance    | Are acceptance criteria satisfied?                 |
| Review        | Did code review approve or request changes?        |
| Tests         | What tests passed?                                 |
| Quality       | Did required DQ gates pass?                        |
| Contract      | Are contracts satisfied?                           |
| Security      | Are secrets/access/sensitive fields safe?          |
| CI/CD         | Did required gates pass?                           |
| Observability | Can it be monitored and recovered?                 |
| Rollback      | What is the fallback if release fails?             |
| Decision      | Ready, risky, blocked, or needs evidence?          |

## HALT — Release Scope

Stop if release scope is unclear.

### Decision needed

What is being reviewed for release?

### Options

A. One story implementation
B. Selected sprint stories
C. Full sprint increment
D. One epic increment
E. One data product output
F. One pipeline/workflow
G. One semantic/serving output
H. Full MVP release candidate
I. Custom scope

### Recommendation

Choose C for sprint review. Choose E/G for data product release readiness.

### Required response

Choose A/B/C/D/E/F/G/H/I.

## HALT — Release Target

Stop if release target is unclear.

### Decision needed

What is the target release level?

### Options

A. Demo only
B. Internal review
C. Dev environment
D. Test environment
E. Staging
F. Production
G. Handoff package
H. Custom target

### Recommendation

Choose A or B if evidence is incomplete. Choose F only with full evidence.

### Required response

Choose A/B/C/D/E/F/G/H.

## HALT — Release Evidence Availability

Stop if evidence is missing.

### Trigger

Use this HALT if release readiness is requested but one or more of the following are unavailable:

* implementation summary;
* code review result;
* test result;
* quality result;
* contract result;
* CI/CD result;
* security scan;
* rollback path.

### Decision needed

How should missing release evidence be handled?

### Options

A. Continue as dry-run readiness review
B. Mark decision `Needs More Evidence`
C. Route back to `des-code-review`
D. Route back to implementation/testing
E. User provides evidence now
F. Stop workflow

### Recommendation

Choose B unless this is explicitly a dry-run.

### Required response

Choose A/B/C/D/E/F.

## HALT — Deploy Request Detected

Stop if the user asks to deploy/release directly.

### Trigger

Use this HALT if user asks:

* deploy now;
* promote to prod;
* publish;
* release;
* merge and deploy.

### Decision needed

Continue readiness review or perform release workflow elsewhere?

### Options

A. Continue release readiness review only
B. Produce release handoff checklist
C. Stop and wait for explicit deployment tool/workflow
D. Route to CI/CD implementation/release process

### Recommendation

Choose A or B.

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

* release scope is selected;
* release target is selected;
* release candidate is identified;
* evidence availability is documented;
* blockers and missing evidence are known;
* existing readiness report is checked;
* the agent is ready to evaluate release readiness.

## Next Step

After completion, load only:

```text
steps/step-02-release-readiness-evaluation.md
```
