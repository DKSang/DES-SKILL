const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("implementation planning skills preserve test and validation gates", () => {
  const content = [
    read("skills-support/des-dev-task-breakdown/SKILL.md"),
    read("skills-support/des-implementation-plan/SKILL.md")
  ].join("\n");

  for (const phrase of [
    "test tasks",
    "validation",
    "quality",
    "security",
    "do not write implementation code",
    "claim implementation is complete"
  ]) {
    assert.match(content, new RegExp(phrase, "i"), `implementation workflow missing ${phrase}`);
  }
});

test("review skill defines hardened evidence-first review model", () => {
  const content = [
    read("skills-support/des-code-review/SKILL.md"),
    read("skills-support/des-code-review/steps/step-02-code-review-evaluation.md")
  ].join("\n");

  for (const phrase of [
    "implementation evidence",
    "findings",
    "severity",
    "governance",
    "security",
    "test coverage",
    "do not approve"
  ]) {
    assert.match(content, new RegExp(phrase, "i"), `review workflow missing ${phrase}`);
  }
});

test("release readiness skill rejects missing evidence before release claims", () => {
  const content = read("skills-support/des-release-readiness-review/SKILL.md");

  for (const phrase of [
    "evidence is missing",
    "test evidence",
    "release decision",
    "HALT",
    "do not approve release"
  ]) {
    assert.match(content, new RegExp(phrase, "i"), `release readiness workflow missing ${phrase}`);
  }
});
