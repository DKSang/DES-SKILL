# Step 01 — Context and Readiness

## Goal

Confirm that CI/CD and Testing is the correct next step and that upstream architecture, contracts, transformations, quality, orchestration, serving, governance, and optimization context is available.

## Required Inputs

Look for:

- `.agents/des-skill/output/07-architecture-decision-record.md`;
- `.agents/des-skill/output/12-data-contract-specification.md`;
- `.agents/des-skill/output/13-transformation-specification.md`;
- `.agents/des-skill/output/14-data-quality-specification.md`;
- `.agents/des-skill/output/15-orchestration-observability-specification.md`;
- `.agents/des-skill/output/16-semantic-model-specification.md`;
- `.agents/des-skill/output/17-serving-layer-specification.md`;
- `.agents/des-skill/output/18-lineage-metadata-specification.md`;
- `.agents/des-skill/output/19-governance-security-specification.md`;
- `.agents/des-skill/output/20-cost-performance-optimization-specification.md`;
- workflow status file;
- repository layout;
- environments;
- deployment targets;
- release process;
- testing tools or preferences;
- secret/config strategy;
- rollback expectations.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize:
   - Architecture Decision Record;
   - Data Contract Specification;
   - Transformation Specification;
   - Data Quality Specification;
   - Orchestration and Observability Specification;
   - Semantic Model Specification;
   - Serving Layer Specification;
   - Lineage and Metadata Specification;
   - Governance and Security Specification;
   - Cost and Performance Optimization Specification.
4. Extract:
   - deployable artifacts;
   - testable components;
   - P1 contracts;
   - P1 quality gates;
   - P1 transformations;
   - semantic/serving outputs;
   - security/governance controls;
   - cost/performance guardrails;
   - environments and promotion path;
   - rollback and recovery needs;
   - release evidence requirements.
5. Check whether existing `21-cicd-testing-specification.md` exists.
6. Decide whether to create a new CI/CD and Testing specification, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- CI/CD for data projects must test more than code syntax.
- Test gates should protect contracts, grain, quality, security, lineage, and serving behavior.
- Use environment promotion to reduce risk.
- Test data strategy matters because production data may be sensitive or expensive.
- Breaking changes require explicit handling.
- Rollback may mean code rollback, data rollback, output rollback, or previous-published-output fallback.
- Release evidence should prove what changed, what passed, who approved, and what was deployed.

## CI/CD Readiness Lens

Use this lens before designing:

| Area | Readiness Question |
| --- | --- |
| Artifact | What is being versioned, tested, and deployed? |
| Environment | Where does it run: local, dev, test, staging, prod? |
| Test | What proves the artifact works? |
| Contract | What proves it does not break consumers? |
| Quality | What quality gates must pass? |
| Security | What governance/security gates must pass? |
| Performance | What cost/performance checks are needed? |
| Approval | Who approves release? |
| Rollback | How do we recover if release fails? |
| Evidence | What evidence is stored for audit/debug? |

## HALT — Missing or Weak Release Context

Stop if upstream release context is missing or too weak.

### Trigger

Use this HALT if:

- Phase 20 optimization spec is missing;
- orchestration and quality gates are missing;
- contracts are missing for P1 outputs;
- governance/security rules are missing;
- environment strategy is unclear;
- deployable artifacts are unclear.

### Decision needed

How should the agent proceed?

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

## HALT — CI/CD Scope Required

Stop if CI/CD scope is unclear.

### Decision needed

What should Phase 21 cover?

### Options

A. P1 transformation testing only  
B. P1 contract and quality gates only  
C. P1 end-to-end CI/CD from code review to deployment  
D. P1 + P2 release framework  
E. Full project DataOps framework  
F. Local-first + cloud promotion workflow  
G. Custom scope  

### Recommendation

Choose C for first-release readiness. Choose F if local-first development is part of the project architecture.

### Required response

Choose A/B/C/D/E/F/G.

## Completion Criteria

This step is complete when:

- upstream artifacts are available or Draft continuation is approved;
- CI/CD scope is selected or marked unresolved;
- deployable/testable artifacts are identified;
- contract, quality, security, performance, deployment, rollback, and evidence needs are extracted;
- the agent knows whether to create, update, or defer the CI/CD and Testing specification.

## Next Step

After completion, load only:

```text
steps/step-02-testing-release-and-deployment-gates.md
```
