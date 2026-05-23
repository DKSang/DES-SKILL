const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-ingestion-design");

function AlecRead(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-ingestion-design uses generic Phase 8 artifact paths and step names", () => {
  const skill = AlecRead("skills/des-ingestion-design/SKILL.md");
  const customize = AlecRead("skills/des-ingestion-design/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-ingestion-patterns-and-controls.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /08-ingestion-specification\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-ingestion-design"/);
  assert.match(customize, /phase = 8/);
  assert.match(customize, /output_file = "_des-output\/planning-artifacts\/08-ingestion-specification\.md"/);
  assert.match(customize, /template_file = "_des\/templates\/08-ingestion-specification-template\.md"/);
  assert.match(customize, /checklist_file = "_des\/checklists\/08-ingestion-design-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-bronze-layer-design"/);
  assert.match(customize, /_des-output\/planning-artifacts\/01-business-discovery-brief\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/02-business-question-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/03-requirements-and-kpi-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/04-data-product-specification\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/05-data-source-inventory\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/06-conceptual-domain-model\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/07-architecture-decision-record\.md/);
});

test("ingestion specification template and checklist cover generic required sections", () => {
  const template = AlecRead("templates/08-ingestion-specification-template.md");
  const checklist = AlecRead("checklists/08-ingestion-design-checklist.md");

  for (const section of [
    "Ingestion Summary",
    "Ingestion Scope",
    "Source-to-Ingestion Mapping",
    "Ingestion Pattern per Source",
    "Batch Streaming and Event Decision",
    "Frequency and Trigger",
    "Bounded and Unbounded Data Classification",
    "Access and Extraction Method",
    "Incremental and Checkpoint Strategy",
    "Idempotency Strategy",
    "Replay and Backfill Strategy",
    "Late Arriving Data Handling",
    "Ordering and Deduplication Expectations",
    "Payload and Serialization Expectations",
    "Schema Drift and Evolution Policy",
    "Error Handling and Quarantine",
    "Security and Credential Handling",
    "Source Impact Rate Limits and Throttling",
    "Landing Target Expectations",
    "Ingestion Metadata Expectations",
    "Monitoring Evidence and Audit Expectations",
    "Operational Dependencies",
    "Risks",
    "Assumptions",
    "Open Questions",
    "Next Skill Recommendation"
  ]) {
    assert.match(template, new RegExp(section), `template missing ${section}`);
  }

  for (const phrase of [
    "Phase 1 Business Discovery artifact exists",
    "Phase 2 Business Question Catalog exists",
    "Phase 3 Requirements and KPI Catalog exists",
    "Phase 4 Data Product Specification exists",
    "Phase 5 Data Source Inventory exists",
    "Phase 6 Conceptual Domain Model exists",
    "Phase 7 Architecture Decision Record exists",
    "P1 sources are identified",
    "The artifact does not design detailed Bronze table",
    "Missing upstream architecture context HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase), `checklist missing ${phrase}`);
  }
});

test("ingestion design step files enforce ingestion controls and strategic focus", () => {
  const step01 = AlecRead("skills/des-ingestion-design/steps/step-01-context-and-readiness.md");
  const step02 = AlecRead("skills/des-ingestion-design/steps/step-02-ingestion-patterns-and-controls.md");
  const step03 = AlecRead("skills/des-ingestion-design/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Readiness Check Failed/);
  assert.match(step01, /07-architecture-decision-record\.md/);
  assert.match(step02, /HALT - Ingestion Pattern Approval/);
  assert.match(step02, /HALT - Batch, Streaming, or Event Choice/);
  assert.match(step02, /HALT - Frequency and Trigger Approval/);
  assert.match(step02, /HALT - Incremental and Checkpoint Strategy/);
  assert.match(step02, /HALT - Idempotency Strategy/);
  assert.match(step02, /HALT - Replay and Backfill Strategy/);
  assert.match(step02, /HALT - Late-Arriving Data and Ordering/);
  assert.match(step02, /HALT - Payload and Serialization/);
  assert.match(step02, /HALT - Schema Drift and Evolution Policy/);
  assert.match(step02, /HALT - Error Handling and Recovery/);
  assert.match(step02, /HALT - Sensitive Data and Credential Handling/);
  assert.match(step02, /HALT - API Quota, Rate Limit, or Source Impact/);
  assert.match(step03, /HALT - Checklist Blocked/);
  assert.match(step03, /des-bronze-layer-design/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /design detailed Bronze/i);
  assert.match(combined, /pipeline implementation code/i);
});
