# Step 04 - Review dbt Project

Use this step when reviewing an existing dbt project or PR.

## Review Areas

Check:

- project structure;
- model naming;
- layer separation;
- source definitions;
- model grain;
- use of `ref()` and `source()`;
- tests;
- docs;
- contracts;
- materializations;
- selectors;
- packages;
- CI readiness;
- downstream impact.

## Red Flags

- hardcoded table names;
- models without clear grain;
- marts containing source-cleaning logic;
- staging models containing heavy business logic;
- undocumented public models;
- missing relationship tests;
- duplicate transformation logic;
- excessive full-refresh behavior;
- broad project runs without selectors;
- changes to public models without impact analysis.

## Output

Create a dbt review report:

```text
summary:
project structure findings:
modeling findings:
testing findings:
documentation findings:
contract/governance findings:
runtime/cost findings:
required fixes:
recommended improvements:
DES phase impact:
```
