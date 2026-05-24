# dbt Engineering Checklist

## Context

- [ ] DES phase identified
- [ ] DES artifact read
- [ ] dbt project state checked
- [ ] runtime/adapter identified
- [ ] existing conventions inspected

## Modeling

- [ ] model purpose is clear
- [ ] model grain is explicit
- [ ] primary key or surrogate key is defined
- [ ] upstream dependencies are known
- [ ] layer responsibility is respected
- [ ] new model is justified

## SQL

- [ ] uses `ref()` and `source()`
- [ ] avoids hardcoded table names
- [ ] CTEs are readable
- [ ] business logic is not duplicated
- [ ] dialect/runtime assumptions are documented

## Tests

- [ ] required fields tested
- [ ] primary keys tested
- [ ] relationships tested
- [ ] accepted values tested where relevant
- [ ] custom business tests added where needed
- [ ] unit tests added for complex logic

## Docs and Contracts

- [ ] model description written
- [ ] important column descriptions written
- [ ] public models have owner/consumer context
- [ ] contract expectations are aligned with DES Data Contract
- [ ] downstream impact checked

## Evidence

- [ ] commands/checks summarized
- [ ] affected models listed
- [ ] failures documented
- [ ] limitations/waivers documented
- [ ] Done Gate recommendation included
