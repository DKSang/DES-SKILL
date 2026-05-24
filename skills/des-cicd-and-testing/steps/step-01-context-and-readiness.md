# Step 01 — Context and Readiness

## Goal

Confirm that CI/CD and Testing is the correct next step, that upstream architecture, contracts, transformations, quality, orchestration, serving, governance, optimization, and release context is available, and that Phase 20 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 21 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ repository / test / gate / environment / rollback / release validation
→ artifact revision
→ done gate
→ handoff
```

---

## Required Inputs

Look for:

* `_des-output/planning-artifacts/07-architecture-decision-record.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
* `_des-output/planning-artifacts/16-semantic-model-specification.md`;
* `_des-output/planning-artifacts/17-serving-layer-specification.md`;
* `_des-output/planning-artifacts/18-lineage-metadata-specification.md`;
* `_des-output/planning-artifacts/19-governance-security-specification.md`;
* `_des-output/planning-artifacts/20-cost-performance-optimization-specification.md`;
* `_des-output/phase-handoffs/phase-20-to-21-handoff.md`;
* `_des-output/evidence/phase-20/phase-20-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-20-done-gate.md`, if available;
* workflow status file;
* repository layout;
* environments;
* deployment targets;
* release process;
* testing tools or preferences;
* secret/config strategy;
* rollback expectations;
* existing `21-cicd-testing-specification.md`, if present;
* existing `phase-21-support-plan.md`, if present;
* existing `phase-21-evidence-pack.md`, if present;
* existing `phase-21-to-22-handoff.md`, if present.

---

## Actions

1. Read `customize.toml`.
2. Identify these configured paths:

   * `output_file`;
   * `template_file`;
   * `checklist_file`;
   * `status_file`;
   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
3. Check whether required upstream artifacts exist.
4. Check whether Phase 20 handoff exists.
5. Check whether Phase 20 Done Gate exists.
6. Read or summarize:

   * Architecture Decision Record;
   * Data Contract Specification;
   * Transformation Specification;
   * Data Quality Specification;
   * Orchestration and Observability Specification;
   * Semantic Model Specification;
   * Serving Layer Specification;
   * Lineage and Metadata Specification;
   * Governance and Security Specification;
   * Cost and Performance Optimization Specification.
7. Read or summarize Phase 20 to Phase 21 Handoff if available.
8. Extract:

   * deployable artifacts;
   * testable components;
   * P1 contracts;
   * P1 quality gates;
   * P1 transformations;
   * orchestration workflows;
   * semantic/serving outputs;
   * security/governance controls;
   * cost/performance guardrails;
   * required release gates from Phase 20;
   * environments and promotion path;
   * rollback and recovery needs;
   * release evidence requirements;
   * do-not-assume items from Phase 20.
9. Check whether existing `21-cicd-testing-specification.md` exists.
10. Check whether Phase 21 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new CI/CD and Testing specification;
* update an existing CI/CD and Testing specification;
* continue Phase 21 evidence/handoff work;
* route back to Phase 20;
* route back to Phase 12/14/19 if contract, quality, or security gates are missing;
* stop at HALT.

---

## Hints

* CI/CD for data projects must test more than code syntax.
* Test gates should protect contracts, grain, quality, security, lineage, cost, performance, and serving behavior.
* Use environment promotion to reduce risk.
* Test data strategy matters because production data may be sensitive or expensive.
* Breaking changes require explicit handling.
* Rollback may mean code rollback, data rollback, output rollback, or previous-published-output fallback.
* Release evidence should prove what changed, what passed, who approved, and what was deployed.
* Phase 22 will evaluate whether the whole workflow and data product are ready, valuable, and trustworthy.

---

## Phase 20 Handoff Readiness

Before generating Phase 21 CI/CD and Testing design, classify Phase 20 readiness:

| Item                                            | Status                                                   | Action                              |
| ----------------------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Cost and Performance Optimization Specification | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 20 Done Gate                              | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 20 Handoff                                | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Test/release gate candidates                    | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Cost/performance guardrails                     | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 20 Do-Not-Assume list                     | Found / Missing                                          | Carry forward / Ask user            |
| Phase 20 open questions                         | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT — Missing or Weak Release Context

Stop if upstream release context is missing or too weak.

### Trigger

Use this HALT if:

* Phase 20 optimization spec is missing;
* Phase 20 handoff is missing;
* orchestration and quality gates are missing;
* contracts are missing for P1 outputs;
* governance/security rules are missing;
* environment strategy is unclear;
* deployable artifacts are unclear.

### Options

A. Route back to `des-orchestration-observability`
B. Route back to `des-data-quality-design`
C. Route back to `des-data-contracts`
D. Route back to `des-governance-security-design`
E. Continue Phase 21 as Draft using current context
F. User provides missing CI/CD context now
G. Stop workflow

### Recommendation

Choose A if deployment/run gates are missing.
Choose B if quality gates are missing.
Choose E only if the user accepts that CI/CD design remains Draft.

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Missing Phase 20 Handoff

Stop if the Cost and Performance Optimization Specification exists but Phase 20 Done Gate or Phase 20 handoff is missing.

### Options

A. Route back to `des-cost-and-performance-optimization` to create Done Gate and handoff
B. Continue Phase 21 as Draft with accepted risk
C. Treat current Phase 20 artifact as accepted risk and create a temporary Phase 21 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT — CI/CD Scope Required

Stop if CI/CD scope is unclear.

### Options

A. P1 transformation testing only
B. P1 contract and quality gates only
C. P1 end-to-end CI/CD from code review to deployment
D. P1 + P2 release framework
E. Full project DataOps framework
F. Local-first + cloud promotion workflow
G. Custom scope

### Recommendation

Choose C for first-release readiness.
Choose F if local-first development is part of the project architecture.

### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 20 handoff is found or missing-handoff risk is accepted;
* CI/CD scope is selected or marked unresolved;
* deployable/testable artifacts are identified;
* contract, quality, security, performance, deployment, rollback, and evidence needs are extracted;
* existing Phase 21 files are detected if present;
* the agent knows whether to create, update, or defer the CI/CD and Testing specification.

## Next Step

After completion, load only:

```text
steps/step-02-testing-release-and-deployment-gates.md
```
