# Airflow Security and Architecture Boundaries

## Architecture Boundary

Airflow architecture separates Dag authoring/parsing, scheduling, task execution, API server, and triggerer responsibilities.

DES agents should not assume that all Airflow components have the same permissions or runtime behavior.

## Security Rules

- Do not put secrets in Dag code.
- Do not give tasks broader permissions than needed.
- Do not treat deployment hardening issues as Airflow vulnerabilities.
- Do not bypass known architecture boundaries.
- Use connections/secret backends/environment config.
- Document production trigger permissions.

## DES Rule

Operational security is part of release readiness. If Airflow permissions, secrets, or production trigger behavior are unclear, do not mark orchestration Done.