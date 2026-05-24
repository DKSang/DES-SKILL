# Provero Check Types for DES

## Common DES Mapping

| Check | DES usage |
|---|---|
| not_null | required fields |
| unique | primary key |
| unique_combination | composite grain |
| completeness | minimum non-null coverage |
| accepted_values | controlled categories |
| range | numeric/domain thresholds |
| regex | format validation |
| email_validation | email field validation |
| type | schema/type expectation |
| freshness | data recency SLA |
| latency | source-to-target delay |
| row_count | load presence/volume |
| row_count_change | unexpected volume shift |
| anomaly | metric/statistical monitoring |
| custom_sql | business-specific rule |
| referential_integrity | foreign key/reference validity |

## Severity Guidance

```text
info      = exploratory
warning   = review needed but phase can continue
critical  = likely phase failure unless waived
blocker   = cannot pass Done Gate
```

## Rule

Every check should map to a DES expectation, contract clause, quality rule, or evidence requirement.
