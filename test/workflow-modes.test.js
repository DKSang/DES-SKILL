const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

const workflowModePhrases = [
  "Quick Fix",
  "Standard Feature",
  "Enterprise Data Product",
  "Correct Course"
];

const requiredFiles = [
  "docs/workflow-modes.md",
  "DES-WORKFLOW.md",
  "README.md",
  "templates/00-workflow-status-template.md",
  "skills/using-des-skill/SKILL.md",
  "skills/using-des-skill/steps/step-01-route.md"
];

test("workflow mode router documents all adaptive modes", () => {
  for (const relativePath of requiredFiles) {
    const filePath = path.join(repoRoot, relativePath);
    assert.ok(fs.existsSync(filePath), `${relativePath} is missing`);

    const content = fs.readFileSync(filePath, "utf8");
    for (const phrase of workflowModePhrases) {
      assert.match(content, new RegExp(phrase), `${relativePath} is missing workflow mode: ${phrase}`);
    }
  }
});

test("router step maps workflow modes to next skills and gates", () => {
  const routePath = path.join(repoRoot, "skills", "using-des-skill", "steps", "step-01-route.md");
  const route = fs.readFileSync(routePath, "utf8");

  for (const skill of [
    "des-brainstorm-change",
    "des-implementation-planning",
    "des-dev-story",
    "des-code-review",
    "des-verify-delivery"
  ]) {
    assert.match(route, new RegExp(skill), `router step should reference ${skill}`);
  }

  assert.match(route, /HALT/, "router step should include HALT gate language");
  assert.match(route, /explicit override/i, "router step should require explicit override for missing artifacts");
});
