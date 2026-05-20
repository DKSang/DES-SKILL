const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

test("implementation story template defines executable dev packet sections", () => {
  const templatePath = path.join(repoRoot, "templates", "implementation-story-template.md");
  assert.ok(fs.existsSync(templatePath), "implementation-story-template.md is missing");

  const template = fs.readFileSync(templatePath, "utf8");
  for (const section of [
    "## Status",
    "## Source Artifact Map",
    "## Acceptance Criteria",
    "## Tasks / Subtasks",
    "## Dev Notes",
    "## Data Engineering Guardrails",
    "## Test Plan",
    "## Dev Agent Record",
    "## File List",
    "## Change Log"
  ]) {
    assert.match(template, new RegExp(section.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `template missing ${section}`);
  }
});

test("implementation planning and build skills reference implementation story packet", () => {
  const planning = fs.readFileSync(path.join(repoRoot, "skills", "de-implementation-planning", "SKILL.md"), "utf8");
  const build = fs.readFileSync(path.join(repoRoot, "skills", "de-build-from-artifacts", "SKILL.md"), "utf8");
  const artifacts = fs.readFileSync(path.join(repoRoot, "ARTIFACTS.md"), "utf8");

  for (const content of [planning, build, artifacts]) {
    assert.match(content, /implementation-story\.md/, "implementation-story.md should be documented");
  }

  assert.match(planning, /implementation-story-template\.md/, "planning skill should reference implementation-story-template.md");
  assert.match(build, /allowed sections/i, "build skill should define allowed sections");
  assert.match(build, /Tasks \/ Subtasks/, "build skill should allow task checkbox updates");
  assert.match(build, /Dev Agent Record/, "build skill should allow Dev Agent Record updates");
  assert.match(build, /File List/, "build skill should allow File List updates");
  assert.match(build, /Change Log/, "build skill should allow Change Log updates");
});
