# Checklist — Lineage and Metadata Design

## Required Context

- [ ] Upstream dataset inventory exists or Draft continuation is accepted.
- [ ] Source inventory is considered.
- [ ] Bronze/Silver/Gold datasets are considered.
- [ ] Contracts are considered.
- [ ] Transformations are considered.
- [ ] Quality rules are considered.
- [ ] Workflows and operational evidence are considered.
- [ ] Semantic models are considered.
- [ ] Serving outputs are considered.
- [ ] Ownership/stewardship context is considered.

## Metadata Coverage

- [ ] Metadata scope is defined.
- [ ] Business metadata is covered.
- [ ] Technical metadata is covered.
- [ ] Operational metadata is covered.
- [ ] Reference metadata is covered.
- [ ] Metadata inventory is created.
- [ ] Dataset catalog requirements are documented.
- [ ] Field/schema metadata is documented.
- [ ] Metric/KPI metadata is documented.
- [ ] Contract metadata is documented.
- [ ] Transformation lineage is documented.
- [ ] Dataset lineage is documented.
- [ ] Column-level lineage expectations are documented.
- [ ] Semantic/serving lineage is documented.
- [ ] Quality/trust metadata is documented.
- [ ] Ownership/stewardship metadata is documented.
- [ ] Usage/consumer metadata is documented.
- [ ] Change/version metadata is documented.
- [ ] Audit/compliance metadata is documented.
- [ ] Metadata maintenance policy is documented.

## Lineage and Trust

- [ ] P1 serving outputs can trace to Gold.
- [ ] Gold outputs can trace to Silver.
- [ ] Silver outputs can trace to Bronze/source.
- [ ] Transformation lineage exists for P1 outputs.
- [ ] Contract and quality status can be linked to serving outputs.
- [ ] Owners and stewards are visible.
- [ ] Known limitations and trust status are visible.
- [ ] Metadata freshness/review expectations are documented.

## Guardrails

- [ ] The artifact does not implement catalog tooling.
- [ ] The artifact does not implement lineage extraction code.
- [ ] The artifact does not claim full column lineage without defined scope.
- [ ] Business definitions are not invented without owner.
- [ ] Ownership is not assumed silently.
- [ ] Metadata is not treated as one-time documentation only.
- [ ] Operational metadata is not ignored.
- [ ] Reference metadata is not ignored.

## HALT Validation

- [ ] Missing serving context HALT resolved or artifact remains Draft.
- [ ] Metadata scope HALT resolved or artifact remains Draft.
- [ ] Metadata category coverage HALT resolved or artifact remains Draft.
- [ ] Dataset catalog fields HALT resolved or catalog remains Draft.
- [ ] Business definition owner HALT resolved or definitions remain Draft/Risk.
- [ ] Lineage depth HALT resolved or lineage remains Draft.
- [ ] Column-level lineage HALT resolved or expectation remains Draft/Risk.
- [ ] Operational metadata HALT resolved or artifact remains Draft/Risk.
- [ ] Quality/trust metadata HALT resolved or artifact remains Draft.
- [ ] Usage/consumer metadata HALT resolved or marked not applicable.
- [ ] Audit/compliance metadata HALT resolved or marked not applicable.
- [ ] Metadata maintenance owner HALT resolved or artifact remains Risk.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
