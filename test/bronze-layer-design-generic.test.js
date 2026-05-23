const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");
const skillDir = path.join(repoRoot, "skills", "des-bronze-layer-design");

function AlecRead(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

test("des-bronze-layer-design uses generic Phase 9 artifact paths and step names", () => {
  const skill = AlecRead("skills/des-bronze-layer-design/SKILL.md");
  const customize = AlecRead("skills/des-bronze-layer-design/customize.toml");
  const steps = fs.readdirSync(path.join(skillDir, "steps")).sort();

  assert.deepEqual(steps, [
    "step-01-context-and-readiness.md",
    "step-02-bronze-dataset-and-storage-decisions.md",
    "step-03-artifact-checklist-and-handoff.md"
  ]);

  assert.match(skill, /09-bronze-layer-specification\.md/);
  assert.match(skill, /step-01-context-and-readiness\.md/);
  assert.match(customize, /skill_id = "des-bronze-layer-design"/);
  assert.match(customize, /phase = 9/);
  assert.match(customize, /output_file = "_des-output\/planning-artifacts\/09-bronze-layer-specification\.md"/);
  assert.match(customize, /template_file = "_des\/templates\/09-bronze-layer-specification-template\.md"/);
  assert.match(customize, /checklist_file = "_des\/checklists\/09-bronze-layer-design-checklist\.md"/);
  assert.match(customize, /next_recommended_skill = "des-silver-layer-design"/);
  assert.match(customize, /_des-output\/planning-artifacts\/01-business-discovery-brief\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/02-business-question-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/03-requirements-and-kpi-catalog\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/04-data-product-specification\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/05-data-source-inventory\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/06-conceptual-domain-model\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/07-architecture-decision-record\.md/);
  assert.match(customize, /_des-output\/planning-artifacts\/08-ingestion-specification\.md/);
});

test("bronze layer specification template and checklist cover generic required sections", () => {
  const template = AlecRead("templates/09-bronze-layer-specification-template.md");
  const checklist = AlecRead("checklists/09-bronze-layer-design-checklist.md");

  for (const section of [
    "Bronze Layer Summary",
    "Bronze Scope",
    "Bronze Design Principles",
    "Source to Bronze Mapping",
    "Bronze Dataset Inventory",
    "Raw Preservation Strategy",
    "Storage Format Decision",
    "File and Table Organization",
    "Partitioning Strategy",
    "Mandatory Metadata Columns",
    "Ingestion Audit Metadata",
    "Schema Drift and Evolution Handling",
    "Replay and Backfill Support",
    "Idempotency and Deduplication Boundary",
    "Quarantine and Rejected Data Handling",
    "Retention and Lifecycle Policy",
    "Access Control and Sensitivity Classification",
    "Bronze Boundary Data Quality Expectations",
    "Lineage and Traceability Expectations",
    "Operational Evidence Requirements",
    "Risks",
    "Assumptions",
    "Open Questions",
    "Next Skill Recommendation"
  ]) {
    assert.match(template, new RegExp(section), `template missing ${section}`);
  }

  for (const phrase of [
    "Phase 1 Business Discovery brief exists",
    "Phase 2 Business Question Catalog exists",
    "Phase 3 Requirements and KPI Catalog exists",
    "Phase 4 Data Product Specification exists",
    "Phase 5 Data Source Inventory exists",
    "Phase 6 Conceptual Domain Model exists",
    "Phase 7 Architecture Decision Record exists",
    "Phase 8 Ingestion Specification exists",
    "P1 sources and ingestion patterns are identified",
    "The artifact does not design detailed Silver/Gold tables",
    "Missing upstream ingestion context HALT resolved or artifact remains Draft"
  ]) {
    assert.match(checklist, new RegExp(phrase.replace("/", "\\/")), `checklist missing ${phrase}`);
  }
});

test("bronze layer design step files enforce storage decisions and strategic focus", () => {
  const step01 = AlecRead("skills/des-bronze-layer-design/steps/step-01-context-and-readiness.md");
  const step02 = AlecRead("skills/des-bronze-layer-design/steps/step-02-bronze-dataset-and-storage-decisions.md");
  const step03 = AlecRead("skills/des-bronze-layer-design/steps/step-03-artifact-checklist-and-handoff.md");

  assert.match(step01, /HALT - Readiness Check Failed/);
  assert.match(step01, /08-ingestion-specification\.md/);
  assert.match(step02, /HALT - Raw Preservation Strategy/);
  assert.match(step02, /HALT - Storage Format Decision/);
  assert.match(step02, /HALT - Partitioning Strategy/);
  assert.match(step02, /HALT - Mandatory Metadata Approval/);
  assert.match(step02, /HALT - Schema Drift and Evolution Policy/);
  assert.match(step02, /HALT - Replay and Backfill Support/);
  assert.match(step02, /HALT - Idempotency and Deduplication Boundary/);
  assert.match(step02, /HALT - Quarantine and Rejected Data Policy/);
  assert.match(step02, /HALT - Retention and Lifecycle Policy/);
  assert.match(step02, /HALT - Sensitive Raw Access Policy/);
  assert.match(step02, /HALT - Bronze Boundary Quality Expectations/);
  assert.match(step03, /HALT - Checklist Blocked/);
  assert.match(step03, /des-silver-layer-design/);

  const combined = `${step01}\n${step02}\n${step03}`;
  assert.match(combined, /design detailed Silver/i);
  assert.match(combined, /pipeline implementation code/i);
});
