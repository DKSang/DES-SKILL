# Checklist — CI/CD and Testing

## Required Context

- [ ] Architecture Decision Record exists or Draft continuation is accepted.
- [ ] Data Contract Specification exists or Draft continuation is accepted.
- [ ] Transformation Specification exists or Draft continuation is accepted.
- [ ] Data Quality Specification exists or Draft continuation is accepted.
- [ ] Orchestration and Observability Specification exists or Draft continuation is accepted.
- [ ] Semantic Model Specification is considered.
- [ ] Serving Layer Specification is considered.
- [ ] Lineage and Metadata Specification is considered.
- [ ] Governance and Security Specification is considered.
- [ ] Cost and Performance Optimization Specification exists or Draft continuation is accepted.
- [ ] P1 deployable artifacts are identified.
- [ ] P1 testable components are identified.
- [ ] P1 release gates are identified.

## CI/CD Coverage

- [ ] CI/CD scope is defined.
- [ ] CI/CD design principles are defined.
- [ ] Repository and artifact inventory is documented.
- [ ] Branch/review strategy is documented.
- [ ] Environment/promotion strategy is documented.
- [ ] Test inventory is documented.
- [ ] Unit test expectations are documented.
- [ ] Integration test expectations are documented.
- [ ] Contract test expectations are documented.
- [ ] Data quality test expectations are documented.
- [ ] Transformation test expectations are documented.
- [ ] Orchestration test expectations are documented.
- [ ] Semantic/serving test expectations are documented.
- [ ] Security/governance test expectations are documented.
- [ ] Cost/performance test expectations are documented.
- [ ] Deployment gates are documented.
- [ ] Release approval workflow is documented.
- [ ] Rollback/recovery strategy is documented.
- [ ] Release evidence/audit trail is documented.
- [ ] Test data/fixture strategy is documented.
- [ ] Secrets/config policy is documented.

## Release Safety

- [ ] Contracted outputs have contract test gates.
- [ ] P1 quality rules are release gates.
- [ ] Sensitive data has security/governance checks.
- [ ] Secret scanning is required.
- [ ] Breaking change policy is documented.
- [ ] Production release requires approval.
- [ ] Rollback path is documented.
- [ ] Release evidence is retained.
- [ ] Risks are documented.
- [ ] Assumptions are explicitly marked.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not implement GitHub Actions/Azure DevOps/Fabric pipeline YAML.
- [ ] The artifact does not write test code.
- [ ] The artifact does not deploy infrastructure.
- [ ] The artifact does not execute release.
- [ ] Secrets are not stored in repo.
- [ ] Production promotion is not direct/unreviewed.
- [ ] Quality/contract/security gates are not skipped silently.
- [ ] Breaking changes are not hidden.

## HALT Validation

- [ ] Missing release context HALT resolved or artifact remains Draft.
- [ ] CI/CD scope HALT resolved or artifact remains Draft.
- [ ] Repository/artifact boundary HALT resolved or artifact remains Draft.
- [ ] Branch/review strategy HALT resolved or artifact remains Draft.
- [ ] Environment/promotion strategy HALT resolved or artifact remains Draft.
- [ ] Test coverage HALT resolved or artifact remains Draft.
- [ ] Contract test gate HALT resolved or gate remains Draft/Risk.
- [ ] Quality test gate HALT resolved or gate remains Draft/Risk.
- [ ] Security/governance gate HALT resolved or gate remains Draft/Risk.
- [ ] Performance/cost gate HALT resolved or gate remains Draft.
- [ ] Deployment gate HALT resolved or gate remains Draft.
- [ ] Release approval HALT resolved or release remains Draft/Risk.
- [ ] Rollback/recovery HALT resolved or release remains Draft/Risk.
- [ ] Test data strategy HALT resolved or artifact remains Draft.
- [ ] Secrets/config policy HALT resolved or artifact remains Risk/Blocked.
- [ ] Breaking change policy HALT resolved or artifact remains Draft/Risk.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
