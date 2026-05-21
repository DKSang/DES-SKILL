# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Project Evaluation Report, validate it, update workflow status, and close or restart the workflow.

## Required Inputs

- Evaluation draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update the Project Evaluation Report using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark missing evidence as `Unknown`, not as success.
4. Run the configured checklist.
5. Record checklist result:
   - Passed
   - Passed with risks
   - Blocked
6. Update workflow status.
7. Recommend one of:
   - workflow complete;
   - start next iteration from a selected phase;
   - route back to a specific phase;
   - prepare implementation/release handoff;
   - close as learning/portfolio project.

## Hints

- This is the final phase; be honest and evidence-based.
- Unknown is better than false confidence.
- Separate design readiness from production readiness.
- Separate business success from technical completion.
- Capture lessons learned while they are still fresh.
- Recommend focused next steps, not a vague “improve everything”.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

- Evaluation scope is missing.
- Original goals are not referenced.
- Success criteria are missing.
- Readiness decision is unsupported.
- Missing evidence is treated as success.
- Serious risks are hidden.
- Next iteration recommendation is missing.
- Artifact claims production readiness without release/test/security evidence.

### Options

A. Fix the evaluation report now  
B. Mark evaluation as Draft with blockers  
C. Return to Step 02 evaluation decisions  
D. Route back to upstream phase  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update the status file with:

```yaml
phase_22_project_evaluation:
  skill: des-project-evaluation
  artifact: .agents/des-skill/output/22-project-evaluation-report.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  final_decision: Ready for production release | Ready for MVP/demo release | Ready for internal review only | Not ready | Design complete implementation pending | Learning/portfolio complete | Custom
  readiness_summary:
    business_value: Green | Yellow | Red | Unknown | Not Applicable
    data_quality: Green | Yellow | Red | Unknown | Not Applicable
    governance_security: Green | Yellow | Red | Unknown | Not Applicable
    operational_readiness: Green | Yellow | Red | Unknown | Not Applicable
    cicd_testing: Green | Yellow | Red | Unknown | Not Applicable
  next_iteration:
    - ...
  workflow_closeout: Complete | Iterate | Blocked | Handoff
```

## Completion Criteria

This step is complete when:

* evaluation report is created or updated;
* checklist result is recorded;
* workflow status is updated;
* final decision is documented;
* next iteration or closeout path is clear.
