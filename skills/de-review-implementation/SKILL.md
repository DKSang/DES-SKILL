---
name: de-review-implementation
description: Use when reviewing recently implemented code, configuration, pipeline changes, tests, or documentation against DES-SKILL planning artifacts, contracts, quality rules, and implementation logs.
---

# de-review-implementation

## When To Use

Use after implementation and before final verification, release, or merge. Use for behavioral review, artifact compliance review, and data engineering risk review.

## Purpose

Find bugs, contract breaks, missing tests, security/DQ/lineage gaps, and deviations from DES artifacts before delivery. The review is adversarial but constructive: findings lead, severity is explicit, and style-only comments stay out unless they affect maintainability or risk.

## Workflow Architecture

This skill adapts BMad code-review layering for DES work.

1. `step-01-gather-context.md` loads changed files, implementation log, plan, artifacts, and evidence.
2. `step-02-run-review-layers.md` performs Artifact Compliance Reviewer, Blind Bug Hunter, Edge-Case and Data Failure Reviewer, Governance/Security Reviewer, and Test/Evidence Auditor passes.
3. `step-03-triage-findings.md` orders findings by severity and removes weak noise.
4. `step-04-write-review-report.md` writes the review report and recommendation.

## Execution Rules

- Findings must lead the output. Summary comes after findings.
- Every material finding needs file/line or artifact reference when possible.
- Check artifact compliance separately from code correctness.
- Do not approve if acceptance criteria, data contracts, DQ rules, security requirements, or verification evidence are missing.
- No implementation changes in this skill unless the user explicitly asks to fix findings after review.
- Findings first means the report starts with ordered findings before summary or praise.
- For high-risk work, use subagent review when available: one subagent for artifact compliance and one for code/data behavior. If subagents are unavailable, run the same layers sequentially.

## Inputs Required

- Changed files from git or implementation log.
- `_des-output/implementation-artifacts/implementation-plan.md`.
- `_des-output/implementation-artifacts/implementation-log.md`.
- Relevant planning artifacts, contracts, DQ rules, lineage/security/CI artifacts.
- Test results or validation evidence if available.

## Output File

The output_file path is configured in `customize.toml`. Default:

`{project-root}/_des-output/implementation-artifacts/review-report.md`

## Required Output Sections

- Findings ordered by severity.
- Artifact compliance assessment.
- Acceptance criteria coverage.
- Missing tests/evidence.
- Residual risks and open questions.
- Recommendation: approve, revise, or block.

## Quality Checklist

- [ ] Findings lead the report.
- [ ] Each finding references a file, line, artifact, or missing evidence.
- [ ] Severity is justified by user/data/operational impact.
- [ ] Artifact compliance is checked, not assumed.
- [ ] Missing tests and unresolved risks are explicit.
- [ ] Review layers include Artifact Compliance Reviewer, Blind Bug Hunter, Edge-Case and Data Failure Reviewer, Governance/Security Reviewer, and Test/Evidence Auditor.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Reviewing only code style | Data failures are usually behavioral or contractual |
| Treating tests as proof of artifact compliance | Tests may not cover contracts, lineage, or governance |
| Burying blockers in summary | Critical risks get missed |
| Approving with missing evidence | Verification cannot support release |

## Handoff To The Next Skill

Use `de-build-from-artifacts` to fix findings. Use `de-verify-delivery` only when blockers are resolved or explicitly accepted.
