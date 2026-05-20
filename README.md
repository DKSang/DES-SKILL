# DES-SKILL

Reusable Agent Skills for end-to-end Data Engineering project delivery.

This repository is a vendor-neutral Agent Skills pack for professional data engineering projects across domains such as agriculture, finance, retail, healthcare, logistics, SaaS analytics, and IoT.

It supports local-first development with SQL, Python, DuckDB, and dbt, and cloud-first development with platforms such as Databricks, Snowflake, BigQuery, Microsoft Fabric, Azure Data Factory, Airflow, Dagster, Kafka, Great Expectations, Soda, Power BI, Superset, and GitHub Actions.

## Installation

### Option 1: npm installer

Install the full DES-SKILL pack:

```bash
npx @dksang/des-skill install
```

Install into a custom directory:

```bash
npx @dksang/des-skill install --dir .agents/skills
```

Overwrite existing installed skills:

```bash
npx @dksang/des-skill install --force
```

### Option 2: GitHub CLI

Use GitHub CLI when you want to install one skill at a time:

```bash
gh skill install DKSang/DES-SKILL de-business-discovery
```

If you run this without a skill name, GitHub CLI may prompt you to select one:

```bash
gh skill install DKSang/DES-SKILL
```

### Option 3: One-command manual install

Install globally for agents that read `~/.agents/skills`:

```bash
git clone https://github.com/DKSang/DES-SKILL.git
cd DES-SKILL
bash install.sh
```

Install into the current project:

```bash
bash install.sh .agents/skills
```

### Option 4: Manual copy

Project-local install:

```bash
mkdir -p .agents/skills
cp -r skills/* .agents/skills/
```

Personal/global install:

```bash
mkdir -p ~/.agents/skills
cp -r skills/* ~/.agents/skills/
```

After installation, restart your agent or run its skill refresh command if supported.

## Quick Start Prompt

```text
I want to use DES-SKILL for a new data engineering project.

Project idea:
[describe your project here]

Please follow the DES-SKILL workflow:
1. Start from DES-WORKFLOW.md.
2. Detect the current project phase.
3. Use the matching skill from the installed skills.
4. Do not jump to coding before business context, requirements, data sources, architecture, and quality expectations are clear.
5. Produce the required artifact using the templates/ directory.
6. Recommend the next skill when the current artifact is complete.
```

Short version:

```text
Install DES-SKILL, then start with DES-WORKFLOW.md.
Act as a Data Engineering delivery agent.
Detect the current phase, activate the matching skill, produce the required artifact from templates, and hand off to the next skill.
Do not jump to coding until business context, KPIs, data sources, architecture, and quality expectations are clear.
```

## Workflow Entrypoint

Use [DES-WORKFLOW.md](DES-WORKFLOW.md) as the main coordination entrypoint. It defines the recommended phase order and tells the agent when to activate each skill.

## Operating Principle

Do not jump directly into coding. A production-oriented data project starts with business context, measurable outcomes, source readiness, architecture choices, quality expectations, and clear serving needs. Code should implement agreed artifacts, not replace discovery.

## Skill Index

| Skill | Main Artifact |
| --- | --- |
| `de-business-discovery` | Business discovery brief |
| `de-business-questions` | Business question catalog |
| `de-requirements-and-kpis` | Requirements and KPI catalog |
| `de-data-product-definition` | Data product specification |
| `de-data-source-assessment` | Data source inventory |
| `de-domain-modeling` | Conceptual domain model |
| `de-architecture-design` | Architecture decision record |
| `de-ingestion-design` | Ingestion specification |
| `de-bronze-layer-design` | Bronze table specifications |
| `de-silver-layer-design` | Silver table specifications |
| `de-gold-layer-design` | Gold table specifications |
| `de-data-contracts` | Data contracts |
| `de-transformation-design` | Transformation design |
| `de-data-quality` | Data quality rule catalog |
| `de-orchestration-and-observability` | Pipeline and monitoring spec |
| `de-semantic-model-design` | Semantic model specification |
| `de-serving-layer-design` | Serving layer specification |
| `de-semantic-and-serving-layer` | Compatibility bridge for semantic and serving work |
| `de-lineage-and-metadata` | Lineage and metadata catalog |
| `de-governance-and-security` | Governance checklist |
| `de-cost-and-performance-optimization` | Cost and performance review |
| `de-cicd-and-testing` | CI/CD and test plan |
| `de-project-evaluation` | Release readiness review |

## Release Pinning

Create a git tag and npm release before recommending pinned installs:

```bash
git tag v0.1.0
git push origin v0.1.0
npm publish --access public
```

Then publish the matching GitHub Release from the `v0.1.0` tag. Users can pin npm installs with:

```bash
npx @dksang/des-skill@0.1.0 install
```

## Repository Metadata

Recommended GitHub description:

```text
Reusable Agent Skills for end-to-end Data Engineering project delivery.
```

Recommended topics:

```text
agent-skills
data-engineering
codex-skills
claude-skills
copilot-skills
gemini-cli
bmad-method
data-platform
lakehouse
dbt
duckdb
fabric
```
