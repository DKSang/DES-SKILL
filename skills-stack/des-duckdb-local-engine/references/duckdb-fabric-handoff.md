# DuckDB to Microsoft Fabric Handoff

## Purpose

Use DuckDB for local-first inspection before Fabric implementation.

## Pattern

```text
local file/API sample
→ DuckDB profile
→ DuckDB prototype
→ evidence
→ Fabric Lakehouse / Notebook / Data Pipeline implementation
→ Fabric validation
```

## Handoff Package

Provide:

```text
source profile:
schema:
row count:
sample SQL:
quality rules:
file conversion outputs:
partition suggestions:
known runtime differences:
```

## Important

DuckDB evidence is not the final Fabric runtime evidence. It reduces risk before Fabric execution.

Final Done Gate should include Fabric-side evidence if Fabric is the selected production runtime.
