# Provero Validation Checklist

## Context

- [ ] DES phase identified
- [ ] DES artifact read
- [ ] dataset/table/file identified
- [ ] connector selected
- [ ] connector maturity documented
- [ ] validation type classified

## Check Design

- [ ] checks map to DES expectations
- [ ] severity assigned
- [ ] accepted values approved
- [ ] ranges approved
- [ ] key uniqueness justified
- [ ] freshness/latency threshold justified
- [ ] custom SQL documented
- [ ] anomaly baseline available if anomaly used

## Contract Validation

- [ ] DES contract mapped to Provero contract
- [ ] owner documented
- [ ] version documented
- [ ] schema columns defined
- [ ] SLA defined
- [ ] violation policy defined
- [ ] contract diff considered for changes

## Evidence

- [ ] config path recorded
- [ ] run command recorded
- [ ] pass/fail/warn counts recorded
- [ ] failed checks explained
- [ ] report path recorded
- [ ] history/baseline recorded where relevant
- [ ] limitations documented
- [ ] Done Gate recommendation included

## Integration

- [ ] dbt export decision documented
- [ ] Airflow integration decision documented
- [ ] alerting decision documented
- [ ] handoff target identified
