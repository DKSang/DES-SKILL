# dlt Ingestion Checklist

## DES Context

- [ ] DES phase identified
- [ ] source inventory read
- [ ] ingestion specification read
- [ ] Bronze expectations known
- [ ] downstream consumer known

## Source

- [ ] source type identified
- [ ] source owner documented
- [ ] auth method documented
- [ ] rate limits documented
- [ ] pagination documented
- [ ] sample response/file/table inspected
- [ ] source caveats documented

## dlt Design

- [ ] pipeline name defined
- [ ] destination defined
- [ ] dataset name defined
- [ ] source defined
- [ ] resources defined
- [ ] resource-to-table mapping defined
- [ ] primary keys or merge keys documented
- [ ] write disposition selected and justified

## Incremental / State

- [ ] incremental need assessed
- [ ] cursor field defined or waived
- [ ] state location understood
- [ ] full refresh behavior documented
- [ ] backfill strategy documented
- [ ] dev/test/prod state separation documented

## Schema / Contracts

- [ ] schema inference risks documented
- [ ] column hints added where needed
- [ ] nested data strategy documented
- [ ] schema evolution behavior defined
- [ ] schema contract behavior defined if needed
- [ ] DES Data Contract impact documented

## Evidence

- [ ] load result captured
- [ ] row counts captured
- [ ] schema changes captured
- [ ] errors/warnings captured
- [ ] evidence file written
- [ ] handoff target identified
