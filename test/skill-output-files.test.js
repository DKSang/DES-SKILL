const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

const outputSpecs = [
  ["des-business-discovery", "01-business-discovery-brief.md", "01-business-discovery-brief-template.md"],
  ["des-business-questions", "02-business-question-catalog.md", "02-business-question-catalog-template.md"],
  ["des-requirements-and-kpis", "03-requirements-and-kpi-catalog.md", "03-requirements-and-kpi-catalog-template.md"],
  ["des-data-product-definition", "04-data-product-specification.md", "04-data-product-specification-template.md"],
  ["des-data-source-assessment", "05-data-source-inventory.md", "05-data-source-inventory-template.md"],
  ["des-domain-modeling", "06-conceptual-domain-model.md", "06-conceptual-domain-model-template.md"],
  ["des-architecture-design", "07-architecture-decision-record.md", "07-architecture-decision-record-template.md"],
  ["des-ingestion-design", "08-ingestion-specification.md", "08-ingestion-specification-template.md"],
  ["des-bronze-layer-design", "09-bronze-layer-specification.md", "09-bronze-layer-specification-template.md"],
  ["des-silver-layer-design", "10-silver-layer-design.md", "10-silver-layer-design-template.md"],
  ["des-gold-layer-design", "11-gold-layer-design.md", "11-gold-layer-design-template.md"],
  ["des-data-contracts", "12-data-contract-specification.md", "12-data-contract-specification-template.md"],
  ["des-transformation-design", "13-transformation-specification.md", "13-transformation-specification-template.md"],
  ["des-data-quality", "14-data-quality-specification.md", "14-data-quality-specification-template.md"],
  ["des-orchestration-observability", "15-orchestration-observability-specification.md", "15-orchestration-observability-specification-template.md"],
  ["des-semantic-model-design", "16-semantic-model-specification.md", "16-semantic-model-specification-template.md"],
  ["des-serving-layer-design", "17-serving-layer-specification.md", "17-serving-layer-specification-template.md"],
  ["des-lineage-metadata-design", "18-lineage-metadata-specification.md", "18-lineage-metadata-specification-template.md"],
  ["des-governance-and-security", "19-governance-and-security.md", "19-governance-and-security-template.md"],
  ["des-cost-and-performance-optimization", "20-cost-and-performance-optimization.md", "20-cost-and-performance-optimization-template.md"],
  ["des-cicd-and-testing", "21-cicd-and-testing.md", null],
  ["des-project-evaluation", "22-project-evaluation.md", "22-project-evaluation-template.md"],
  ["des-semantic-and-serving-layer", "16-17-semantic-and-serving-layer.md", null]
];

const supportOutputSpecs = [
  ["des-brainstorm-change", "change-brief.md"],
  ["des-implementation-planning", "implementation-plan.md"],
  ["des-dev-story", "implementation-log.md"],
  ["des-code-review", "review-report.md"],
  ["des-verify-delivery", "verification-report.md"],
  ["des-retrospective", "implementation-retrospective.md"]
];

const supportWorkflowRequirements = {
  "des-brainstorm-change": ["HALT", "affected artifacts", "decision log"],
  "des-implementation-planning": ["readiness", "acceptance criteria", "artifact traceability"],
  "des-dev-story": ["status", "implementation log", "HALT"],
  "des-code-review": ["findings", "severity", "artifact compliance"],
  "des-verify-delivery": ["fresh", "evidence", "completion claim"],
  "des-retrospective": ["artifact drift", "follow-up", "next workflow"]
};


test("phase skills declare concrete output files", () => {
  for (const [skill, outputFile, template] of outputSpecs) {
    const skillDir = path.join(repoRoot, "skills", skill);
    const skillPath = path.join(skillDir, "SKILL.md");
    const content = fs.readFileSync(skillPath, "utf8");

    const customizePath = path.join(skillDir, "customize.toml");
    const isRefactored = fs.existsSync(customizePath);

    if (isRefactored) {
      assert.match(content, /## Output File/, `${skill} is missing Output File section`);
      assert.match(content, /output_file/, `${skill} should reference output_file in Output File section`);
    } else {
      assert.match(content, /## Output File/, `${skill} is missing Output File section`);
      assert.match(content, new RegExp(`\\.agents/des-skill/output/${outputFile}`), `${skill} has wrong output file`);

      if (template) {
        assert.match(content, new RegExp(`\\.agents/des-skill/templates/${template}`), `${skill} has wrong template`);
      } else {
        assert.match(content, /Use the example output format below/, `${skill} should point to its example format`);
      }
    }
  }
});

test("support skills declare implementation artifact outputs", () => {
  for (const [skill, outputFile] of supportOutputSpecs) {
    const skillDir = path.join(repoRoot, "skills", skill);
    const skillPath = path.join(skillDir, "SKILL.md");
    const customizePath = path.join(skillDir, "customize.toml");

    assert.ok(fs.existsSync(skillPath), `${skill} is missing SKILL.md`);
    assert.ok(fs.existsSync(customizePath), `${skill} is missing customize.toml`);

    const skillContent = fs.readFileSync(skillPath, "utf8");
    const customizeContent = fs.readFileSync(customizePath, "utf8");

    assert.match(skillContent, /## Output File/, `${skill} is missing Output File section`);
    assert.match(skillContent, /implementation-artifacts/, `${skill} should describe implementation artifact output`);
    assert.match(customizeContent, new RegExp(`_des-output/implementation-artifacts/${outputFile}`), `${skill} has wrong support output file`);
  }
});

test("support skills use BMad-style multi-step guardrails", () => {
  for (const [skill] of supportOutputSpecs) {
    const skillDir = path.join(repoRoot, "skills", skill);
    const skillPath = path.join(skillDir, "SKILL.md");
    const stepsDir = path.join(skillDir, "steps");
    const skillContent = fs.readFileSync(skillPath, "utf8");
    const stepFiles = fs.readdirSync(stepsDir).filter((name) => /^step-\d{2}-.+\.md$/.test(name));
    const combinedStepContent = stepFiles
      .map((name) => fs.readFileSync(path.join(stepsDir, name), "utf8"))
      .join("\n");
    const searchable = `${skillContent}\n${combinedStepContent}`.toLowerCase();

    assert.ok(stepFiles.length >= 3, `${skill} should have at least 3 workflow steps`);
    assert.match(skillContent, /## Workflow Architecture/, `${skill} should describe workflow architecture`);
    assert.match(skillContent, /## Execution Rules/, `${skill} should define execution rules`);

    for (const phrase of supportWorkflowRequirements[skill]) {
      assert.ok(searchable.includes(phrase.toLowerCase()), `${skill} is missing guardrail phrase: ${phrase}`);
    }
  }
});
