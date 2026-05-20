const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("build skill requires red-green-refactor for behavior changes", () => {
  const content = [
    read("skills/de-build-from-artifacts/SKILL.md"),
    read("skills/de-build-from-artifacts/steps/step-02-implement-task.md"),
    read("skills/de-build-from-artifacts/steps/step-03-run-validation.md")
  ].join("\n");

  for (const phrase of [
    "RED",
    "GREEN",
    "REFACTOR",
    "failing test",
    "minimal implementation",
    "do not mark complete"
  ]) {
    assert.match(content, new RegExp(phrase, "i"), `build workflow missing ${phrase}`);
  }
});

test("review skill defines hardened layered review model", () => {
  const content = [
    read("skills/de-review-implementation/SKILL.md"),
    read("skills/de-review-implementation/steps/step-02-run-review-layers.md")
  ].join("\n");

  for (const phrase of [
    "Artifact Compliance Reviewer",
    "Blind Bug Hunter",
    "Edge-Case and Data Failure Reviewer",
    "Governance/Security Reviewer",
    "Test/Evidence Auditor",
    "subagent",
    "findings first"
  ]) {
    assert.match(content, new RegExp(phrase, "i"), `review workflow missing ${phrase}`);
  }
});

test("verification skill rejects stale or failing evidence before completion claims", () => {
  const content = read("skills/de-verify-delivery/SKILL.md");

  for (const phrase of [
    "stale evidence",
    "failing evidence",
    "completion claim",
    "HALT",
    "current workspace"
  ]) {
    assert.match(content, new RegExp(phrase, "i"), `verification workflow missing ${phrase}`);
  }
});
