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
      "skills/de-implementation-planning/SKILL.md",
      ["implementation-readiness-checklist.md", "readiness gate"]
    ],
    [
      "skills/de-build-from-artifacts/SKILL.md",
      ["definition-of-done-checklist.md", "Definition of Done"]
    ],
    [
      "skills/de-verify-delivery/SKILL.md",
      ["definition-of-done-checklist.md", "completion claim"]
    ],
    [
      "templates/00-workflow-status-template.md",
      ["Implementation Readiness", "Definition of Done"]
    ]
  ];

  for (const [relativePath, phrases] of requiredReferences) {
    const content = fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
    for (const phrase of phrases) {
      assert.match(content, new RegExp(phrase), `${relativePath} missing ${phrase}`);
    }
  }
});
