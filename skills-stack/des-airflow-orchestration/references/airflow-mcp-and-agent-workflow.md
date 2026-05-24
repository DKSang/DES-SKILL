# Airflow MCP and Agent Workflow

## Purpose

Use this reference when an agent can interact with Airflow through MCP.

Astronomer's agents repo provides an Airflow MCP server for Airflow REST API integration, including Dag management, triggering, task logs, and system health.

## Good MCP Use Cases

- inspect Dag status;
- trigger Dag run;
- inspect task logs;
- check system health;
- debug failed tasks;
- support local development.

## DES Governance

MCP access should follow:

- least privilege;
- read-only by default when possible;
- explicit approval for triggering production Dags;
- no secrets in prompts;
- evidence captured for actions taken.

## Output

Document:

```text
MCP server:
Airflow URL:
tools used:
actions taken:
evidence captured:
risk:
```