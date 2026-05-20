const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repoRoot = path.resolve(__dirname, "..");

const outputSpecs = [
  ["de-business-discovery", "01-business-discovery.md", "business_discovery_template.md"],
  ["de-business-questions", "02-business-questions.md", "business_questions_template.md"],
  ["de-requirements-and-kpis", "03-requirements-and-kpis.md", "kpi_catalog_template.md"],
  ["de-data-product-definition", "04-data-product-definition.md", "data_product_spec_template.md"],
  ["de-data-source-assessment", "05-data-source-assessment.md", "data_source_inventory_template.md"],
  ["de-domain-modeling", "06-domain-modeling.md", "domain_model_template.md"],
  ["de-architecture-design", "07-architecture-design.md", "architecture_decision_record_template.md"],
  ["de-ingestion-design", "08-ingestion-design.md", "ingestion_spec_template.md"],
  ["de-bronze-layer-design", "09-bronze-layer-design.md", "bronze_table_spec_template.md"],
  ["de-silver-layer-design", "10-silver-layer-design.md", "silver_table_spec_template.md"],
  ["de-gold-layer-design", "11-gold-layer-design.md", "gold_table_spec_template.md"],
  ["de-data-contracts", "12-data-contracts.md", "data_contract_template.md"],
  ["de-transformation-design", "13-transformation-design.md", null],
  ["de-data-quality", "14-data-quality.md", "data_quality_rule_template.md"],
  ["de-orchestration-and-observability", "15-orchestration-and-observability.md", "pipeline_spec_template.md"],
  ["de-semantic-model-design", "16-semantic-model-design.md", "semantic_model_template.md"],
  ["de-serving-layer-design", "17-serving-layer-design.md", null],
  ["de-lineage-and-metadata", "18-lineage-and-metadata.md", "lineage_metadata_template.md"],
  ["de-governance-and-security", "19-governance-and-security.md", "governance_checklist_template.md"],
  ["de-cost-and-performance-optimization", "20-cost-and-performance-optimization.md", "cost_performance_review_template.md"],
  ["de-cicd-and-testing", "21-cicd-and-testing.md", null],
  ["de-project-evaluation", "22-project-evaluation.md", "release_readiness_template.md"],
  ["de-semantic-and-serving-layer", "16-17-semantic-and-serving-layer.md", null]
];

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
