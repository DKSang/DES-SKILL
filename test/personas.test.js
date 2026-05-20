const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const personasPath = path.join(repoRoot, "docs", "personas.md");

const requiredPersonas = [
  "Workflow Coordinator",
  "Data Product Analyst",
  "Source & Domain Analyst",
  "Data Architect",
  "Data Quality Engineer",
  "Analytics Engineer",
  "Governance Reviewer",
  "DataOps Engineer",
  "Implementation Developer",
  "Delivery Reviewer"
];

function skillNames() {
  return fs.readdirSync(path.join(repoRoot, "skills"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

test("persona map covers every installed skill", () => {
  assert.ok(fs.existsSync(personasPath), "docs/personas.md is missing");
  const content = fs.readFileSync(personasPath, "utf8");

  for (const persona of requiredPersonas) {
    assert.match(content, new RegExp(persona), `missing persona: ${persona}`);
  }

  for (const skill of skillNames()) {
    assert.match(content, new RegExp(`\\\`${skill}\\\``), `docs/personas.md does not map ${skill}`);
  }
});

test("router and workflow docs reference the persona layer", () => {
  for (const relativePath of [
    "skills/using-des-skill/SKILL.md",
    "skills/using-des-skill/steps/step-01-route.md",
    "DES-WORKFLOW.md",
    "README.md"
  ]) {
    const content = fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
    assert.match(content, /persona/i, `${relativePath} should reference persona guidance`);
    assert.match(content, /docs\/personas\.md/, `${relativePath} should link docs/personas.md`);
  }
});
