const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

const checklistSpecs = [
  [
    "checklists/implementation-readiness-checklist.md",
    [
      "Scope Approval",
      "Source Artifact Traceability",
      "Acceptance Criteria",
      "Data Contract Impact",
      "Validation Commands",
      "Rollback / Backfill / Replay"
    ]
  ],
  [
    "checklists/definition-of-done-checklist.md",
    [
      "Tasks Complete",
      "Acceptance Criteria Satisfied",
      "Fresh Evidence",
      "Changed File List",
      "Review Blockers",
      "Artifact Drift"
    ]
  ]
];

test("implementation readiness and definition-of-done checklists exist", () => {
  for (const [relativePath, phrases] of checklistSpecs) {
    const filePath = path.join(repoRoot, relativePath);
    assert.ok(fs.existsSync(filePath), `${relativePath} is missing`);

    const content = fs.readFileSync(filePath, "utf8");
    for (const phrase of phrases) {
      assert.match(content, new RegExp(phrase), `${relativePath} missing ${phrase}`);
    }
  }
});

test("planning build and verification skills reference readiness and DoD gates", () => {
  const requiredReferences = [
    [
      "skills-support/des-story-readiness-check/SKILL.md",
      ["readiness", "acceptance criteria"]
    ],
    [
      "skills-support/des-create-story/SKILL.md",
      ["definition of done", "acceptance criteria"]
    ],
    [
      "skills-support/des-release-readiness-review/SKILL.md",
      ["test evidence", "release decision"]
    ],
    [
      "templates/00-workflow-status-template.md",
      ["Implementation Readiness", "Definition of Done"]
    ]
  ];

  for (const [relativePath, phrases] of requiredReferences) {
    const content = fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
    for (const phrase of phrases) {
      assert.match(content, new RegExp(phrase, "i"), `${relativePath} missing ${phrase}`);
    }
  }
});
