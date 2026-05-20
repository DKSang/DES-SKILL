const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

const personaSkills = [
  ["de-persona-workflow-coordinator", "Data Engineering Lifecycle"],
  ["de-persona-data-product-analyst", "Data Maturity Levels"],
  ["de-persona-source-domain-analyst", "Generation"],
  ["de-persona-data-architect", "Storage"],
  ["de-persona-data-quality-engineer", "DataOps"],
  ["de-persona-analytics-engineer", "Serving"],
  ["de-persona-governance-reviewer", "Security"],
  ["de-persona-dataops-engineer", "Orchestration"],
  ["de-persona-implementation-developer", "Software Engineering"],
  ["de-persona-delivery-reviewer", "Six Undercurrents"]
];

test("persona skills exist with FDE responsibility guardrails", () => {
  for (const [skill, fdePhrase] of personaSkills) {
    const skillPath = path.join(repoRoot, "skills", skill, "SKILL.md");
    assert.ok(fs.existsSync(skillPath), `${skill} is missing SKILL.md`);

    const content = fs.readFileSync(skillPath, "utf8");
    assert.match(content, new RegExp(`name: ${skill}`), `${skill} has wrong frontmatter name`);
    assert.match(content, /description: Use when/, `${skill} description should start with Use when`);
    assert.match(content, /## FDE Knowledge Lens/, `${skill} is missing FDE Knowledge Lens`);
    assert.match(content, new RegExp(fdePhrase), `${skill} missing expected FDE phrase: ${fdePhrase}`);
    assert.match(content, /## Decision Boundaries/, `${skill} is missing Decision Boundaries`);
    assert.match(content, /## Handoff Rules/, `${skill} is missing Handoff Rules`);
  }
});

test("persona map and router reference concrete persona skills", () => {
  const personas = fs.readFileSync(path.join(repoRoot, "docs", "personas.md"), "utf8");
  const router = fs.readFileSync(path.join(repoRoot, "skills", "using-des-skill", "steps", "step-01-route.md"), "utf8");

  for (const [skill] of personaSkills) {
    assert.match(personas, new RegExp(`\\\`${skill}\\\``), `docs/personas.md does not map ${skill}`);
    assert.match(router, new RegExp(skill), `router does not reference ${skill}`);
  }
});
