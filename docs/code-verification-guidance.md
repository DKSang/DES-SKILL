# Code Verification Guidance

## Purpose

This document defines when DES-SKILL phases may use lightweight code execution to validate assumptions, collect evidence, test feasibility, inspect data, or produce measurable proof.

Code verification is not production implementation.

It is used to answer:

```text
Can this source be accessed?
Does the schema look like expected?
Can a sample be read?
Does a rule work on sample data?
Can a transformation mapping be validated?
Can a query answer the expected metric?
Can a workflow, contract, DQ rule, or serving endpoint be smoke-tested?
Is a performance/cost baseline measurable?
```

---

## Core Rule

Use code verification only when the phase decision depends on technical evidence.

Do not use code verification to silently implement the solution.

```text
Allowed:
- probe
- spike
- sample read
- dry run
- smoke test
- schema inspection
- profiling
- query validation
- contract validation
- DQ rule validation
- performance baseline
- cost baseline
- release gate validation

Not allowed:
- production pipeline implementation
- full ingestion framework
- full transformation implementation
- production orchestration deployment
- production CI/CD workflow implementation
- infrastructure provisioning
- long-running extraction
- destructive writes
- uncontrolled source load
```

---

## Evidence First

Whenever code verification is used, the result must be recorded in the phase evidence pack.

Minimum evidence fields:

| Field            | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| Verification ID  | Unique ID, for example `CV-05-001`                          |
| Phase            | Phase number and name                                       |
| Purpose          | What assumption is being verified                           |
| Source / Asset   | API, file, table, dataset, rule, query, model, endpoint     |
| Tool             | Python, DuckDB, SQL, dbt, pytest, curl, CLI, notebook, etc. |
| Input Scope      | Sample size, endpoint, query limit, file path, test fixture |
| Result           | Pass / Pass with risks / Fail / Blocked                     |
| Evidence Summary | What was learned                                            |
| Output Location  | Evidence pack, log, notebook, sample path                   |
| Limitations      | What the probe does not prove                               |
| Follow-up        | Decision, risk, or next phase impact                        |

---

## Safe Execution Rules

Code verification must follow these rules:

* Use smallest practical sample.
* Prefer read-only operations.
* Do not mutate production systems.
* Do not store credentials in artifacts.
* Do not print secrets in logs.
* Do not run full extraction unless explicitly approved.
* Do not stress APIs or source systems.
* Respect rate limits and license terms.
* Use timeout and error handling.
* Mark missing evidence as `Unknown`, `Risk`, `Blocked`, or `Waived with reason`.
* Keep production implementation for later implementation phases, not planning phases.

---

## Recommended Tools By Verification Type

| Verification Type        | Tools                                                       |
| ------------------------ | ----------------------------------------------------------- |
| API probe                | Python `requests`, curl                                     |
| File sample inspection   | Python `pandas`, DuckDB                                     |
| Parquet/Delta inspection | DuckDB, Spark sample read                                   |
| Database sample query    | SQL client, Python connector, read-only `LIMIT`             |
| Schema inspection        | SQL information schema, pandas dtypes, JSON keys            |
| DQ sampling              | pandas, DuckDB SQL, Great Expectations spike                |
| Transformation spike     | DuckDB SQL, pandas, dbt compile/run on fixture              |
| Contract validation      | JSON Schema, pandera, dbt tests, custom Python              |
| Metric validation        | SQL query, DuckDB, BI semantic query if available           |
| Orchestration dry run    | DAG parser, config validation, local dry-run                |
| Serving smoke test       | curl, Python requests, dashboard/API health check           |
| Security scan            | secret scan, config lint, permission review script          |
| Performance baseline     | query timing, runtime logs, bytes scanned, simple benchmark |
| CI/CD verification       | local test command, dry-run, test result summary            |

---

## Generic Python Probe Pattern

```python
from __future__ import annotations

import json
import time
from pathlib import Path
from typing import Any

import pandas as pd
import requests


def write_json(path: str, payload: Any) -> None:
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    Path(path).write_text(
        json.dumps(payload, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


def probe_api(url: str, params: dict[str, Any], output_path: str) -> dict[str, Any]:
    started = time.time()

    response = requests.get(url, params=params, timeout=30)

    result = {
        "url": url,
        "params": params,
        "status_code": response.status_code,
        "elapsed_seconds": round(time.time() - started, 3),
        "headers_subset": {
            "content-type": response.headers.get("content-type"),
            "rate-limit": response.headers.get("x-ratelimit-limit"),
            "rate-limit-remaining": response.headers.get("x-ratelimit-remaining"),
        },
    }

    response.raise_for_status()

    payload = response.json()
    result["top_level_keys"] = list(payload.keys())
    result["sample_payload"] = payload

    write_json(output_path, result)
    return result
```

---

## Generic File Profiling Pattern

```python
from pathlib import Path

import pandas as pd


def profile_csv(path: str, sample_rows: int = 1000) -> dict:
    df = pd.read_csv(path, nrows=sample_rows)

    return {
        "path": path,
        "sample_rows": len(df),
        "columns": list(df.columns),
        "dtypes": {col: str(dtype) for col, dtype in df.dtypes.items()},
        "null_counts": df.isna().sum().to_dict(),
        "duplicate_rows": int(df.duplicated().sum()),
    }
```

---

## Generic DuckDB Profiling Pattern

```python
import duckdb


def profile_file_with_duckdb(path: str) -> dict:
    con = duckdb.connect()

    sample = con.execute(
        "SELECT * FROM read_csv_auto(?) LIMIT 100",
        [path],
    ).df()

    columns = con.execute(
        "DESCRIBE SELECT * FROM read_csv_auto(?)",
        [path],
    ).df()

    return {
        "path": path,
        "sample_rows": len(sample),
        "columns": columns.to_dict(orient="records"),
        "null_counts": sample.isna().sum().to_dict(),
    }
```

---

## Generic SQL Sample Query Pattern

```sql
-- Read-only sample query.
-- Replace table name and columns according to source policy.

SELECT *
FROM source_schema.source_table
LIMIT 100;
```

---

## Evidence Output Convention

When a phase uses code verification, store or reference outputs under:

```text
_des-output/evidence/phase-XX/code-verification/
```

Recommended files:

```text
_des-output/evidence/phase-XX/code-verification/CV-XX-001-summary.md
_des-output/evidence/phase-XX/code-verification/CV-XX-001-result.json
_des-output/evidence/phase-XX/code-verification/CV-XX-001-sample.csv
_des-output/evidence/phase-XX/code-verification/CV-XX-001-profile.json
```

Do not store secrets, tokens, credentials, or sensitive raw data in evidence files.

---

## Required Language For Phase Artifacts

When code verification is used, the phase artifact should include:

```text
Code verification was used only to validate assumptions and collect evidence.
It does not represent production implementation.
```

If code verification is not possible:

```text
Code verification was not performed.
Reason:
Risk:
Accepted by:
Impact on downstream phases:
```
