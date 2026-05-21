# Step 02 — Code Review Evaluation

## Goal

Review implementation evidence against story scope, acceptance criteria, task breakdown, DES artifacts, tests, quality, contract, security, docs, and CI/CD expectations.

## Required Inputs

- Review scope from Step 01
- Implementation evidence
- Story Catalog
- Dev Task Breakdown
- Implementation Plan
- Relevant DES artifacts
- User answers from HALT decisions

## Actions

1. Summarize reviewed implementation.
2. Review story and task mapping.
3. Review acceptance criteria satisfaction.
4. Review task completion.
5. Review architecture/design alignment.
6. Review transformation logic where relevant.
7. Review data contracts where relevant.
8. Review data quality implementation where relevant.
9. Review test coverage and test results.
10. Review orchestration/observability where relevant.
11. Review governance/security where relevant.
12. Review cost/performance implications where relevant.
13. Review documentation, metadata, and status updates.
14. Identify findings.
15. Classify findings by severity.
16. Define required changes.
17. Define optional improvements.
18. Decide merge readiness.

## Review Criteria

### Acceptance Criteria

Check:

- every story acceptance criterion is covered;
- implementation does not bypass the criterion;
- evidence exists for each criterion;
- missing evidence is marked clearly.

### Task Completion

Check:

- every planned task is implemented or explicitly deferred;
- skipped tasks have explanation;
- test/doc/status tasks are not silently skipped.

### Data Engineering Safety

Check:

- source/ingestion behavior matches spec;
- Bronze preserves source truth;
- Silver grain/key/conformance logic is correct;
- Gold metric logic matches approved definitions;
- contracts are not broken;
- quality rules are implemented or mapped;
- governance/security constraints are respected;
- lineage/metadata expectations are not ignored.

### Code Safety

Check:

- no hardcoded secrets;
- no broad unsafe access;
- no unapproved sensitive data exposure;
- no silent KPI/grain changes;
- no hidden full refresh where incremental is required;
- no destructive operation without approval;
- no test bypassing;
- no environment-specific hardcoding.

## HALT — Acceptance Criteria Availability

Stop if acceptance criteria are unavailable or ambiguous.

### Decision needed

How should review proceed?

### Options

A. Mark review `Needs more evidence`  
B. Review code structure only  
C. Route back to `des-create-stories`  
D. Route back to `des-story-readiness-check`  
E. User provides acceptance criteria now  
F. Block review  

### Required response

Choose A/B/C/D/E/F.

## HALT — Test Result Availability

Stop if test results are required but missing.

### Trigger

Use this HALT if:

- story requires tests;
- implementation changes data logic, contracts, quality, security, or CI/CD;
- no test result or test evidence is available.

### Decision needed

How should missing tests/results be handled?

### Options

A. Mark as Major finding  
B. Mark as Blocker  
C. Continue review but decision is `Needs more evidence`  
D. User provides test results now  
E. Route back to implementation  
F. Accept risk explicitly  

### Recommendation

Choose A for non-critical tests, B for P1/contract/security-critical tests.

### Required response

Choose A/B/C/D/E/F.

## HALT — Contract Quality Security Risk

Stop if implementation may break contract, quality, or security rules.

### Trigger examples

- schema changed without contract review;
- KPI formula changed;
- grain changed;
- quality checks skipped;
- sensitive field exposed;
- secrets hardcoded;
- external sharing added;
- access control bypassed.

### Decision needed

How should this risk be handled?

### Options

A. Mark Blocker finding  
B. Mark Major finding  
C. Route back to relevant DES phase  
D. Route back to implementation  
E. User provides approval/evidence now  
F. Stop review  

### Required response

Choose A/B/C/D/E/F.

## HALT — Breaking Change Detected

Stop if implementation appears to introduce breaking change.

### Decision needed

How should breaking change be handled?

### Options

A. Block merge  
B. Require contract version bump  
C. Require consumer approval  
D. Require migration/deprecation plan  
E. Treat as out-of-scope change  
F. User provides approval now  
G. Route back to Phase 12 / Phase 21  

### Required response

Choose one or more options.

## Completion Criteria

This step is complete when:

- reviewed evidence is summarized;
- acceptance criteria review is completed;
- task completion review is completed;
- relevant DES alignment checks are completed;
- findings are listed with severity;
- required changes are clear;
- merge readiness decision is drafted;
- draft Code Review Report is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
