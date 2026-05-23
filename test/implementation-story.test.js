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

test("implementation support skills reference current story and task packets", () => {
  const story = fs.readFileSync(path.join(repoRoot, "skills-support", "des-create-story", "SKILL.md"), "utf8");
  const breakdown = fs.readFileSync(path.join(repoRoot, "skills-support", "des-dev-task-breakdown", "SKILL.md"), "utf8");
  const planning = fs.readFileSync(path.join(repoRoot, "skills-support", "des-implementation-plan", "SKILL.md"), "utf8");
  const artifacts = fs.readFileSync(path.join(repoRoot, "ARTIFACTS.md"), "utf8");

  for (const content of [story, breakdown, planning, artifacts]) {
    assert.match(content, /story-catalog\.md|dev-task-breakdown\.md|implementation-plan\.md/, "current implementation artifacts should be documented");
  }

  assert.match(story, /story-catalog\.md/, "story skill should write story-catalog.md");
  assert.match(breakdown, /task-level acceptance checks/i, "task breakdown should define task-level checks");
  assert.match(breakdown, /test task list/i, "task breakdown should include test tasks");
  assert.match(planning, /coding-agent handoff/i, "implementation plan should include coding-agent handoff");
});
