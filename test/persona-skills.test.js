const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

const personaSkills = [
  ["des-persona-workflow-coordinator", "Data Engineering Lifecycle"],
  ["des-persona-data-product-analyst", "Data Maturity Levels"],
  ["des-persona-source-domain-analyst", "Generation"],
  ["des-persona-data-architect", "Storage"],
  ["des-persona-data-quality-engineer", "DataOps"],
  ["des-persona-analytics-engineer", "Serving"],
  ["des-persona-governance-reviewer", "Security"],
  ["des-persona-dataops-engineer", "Orchestration"],
  ["des-persona-implementation-developer", "Software Engineering"],
  ["des-persona-delivery-reviewer", "Six Undercurrents"]
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
