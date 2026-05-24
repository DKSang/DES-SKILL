# DuckDB Session State and Safety

## Session State

The upstream DuckDB skills pattern uses a shared `state.sql` file so later skills can restore attached databases, loaded extensions, secrets, and macros.

For DES, session state can be useful, but it must be treated carefully.

## Recommended DES State Locations

Prefer one of:

```text
.duckdb-skills/state.sql
~/.duckdb-skills/<project>/state.sql
_des-output/evidence/duckdb-session-summary.md
```

## Safety Rules

* Never commit secrets.
* Gitignore local state if it contains paths, secrets, or environment-specific setup.
* Do not overwrite state files blindly.
* Prefer append-only, idempotent setup.
* Document attached database aliases.
* Keep evidence summaries separate from sensitive state files.

## Evidence vs State

```text
state.sql = local execution convenience
evidence pack = shareable DES artifact
```

Do not confuse the two.
