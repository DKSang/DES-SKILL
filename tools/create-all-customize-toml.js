#!/usr/bin/env node
/**
 * create-all-customize-toml.js
 * Creates customize.toml for all DES phase skills that don't have one yet.
 * Maps skill names to their output artifact numbers and template names.
 */

const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, '..', 'skills');

const SKILL_MAP = [
  { name: 'de-business-discovery',           num: '01', tmpl: '01-business-discovery-template.md',           ckl: 'business_readiness_checklist.md' },
  { name: 'de-business-questions',            num: '02', tmpl: '02-business-questions-template.md',            ckl: 'business_readiness_checklist.md' },
  { name: 'de-requirements-and-kpis',         num: '03', tmpl: '03-requirements-and-kpis-template.md',         ckl: 'business_readiness_checklist.md' },
  { name: 'de-data-product-definition',       num: '04', tmpl: '04-data-product-definition-template.md',       ckl: 'data_product_checklist.md' },
  { name: 'de-data-source-assessment',        num: '05', tmpl: '05-data-source-assessment-template.md',        ckl: 'data_source_checklist.md' },
  { name: 'de-domain-modeling',               num: '06', tmpl: '06-domain-modeling-template.md',               ckl: 'domain_modeling_checklist.md' },
  { name: 'de-architecture-design',           num: '07', tmpl: '07-architecture-design-template.md',           ckl: 'storage_design_checklist.md' },
  { name: 'de-ingestion-design',              num: '08', tmpl: '08-ingestion-design-template.md',              ckl: 'ingestion_pattern_checklist.md' },
  { name: 'de-bronze-layer-design',           num: '09', tmpl: '09-bronze-layer-design-template.md',           ckl: 'storage_design_checklist.md' },
  { name: 'de-silver-layer-design',           num: '10', tmpl: '10-silver-layer-design-template.md',           ckl: 'transformation_design_checklist.md' },
  { name: 'de-gold-layer-design',             num: '11', tmpl: '11-gold-layer-design-template.md',             ckl: 'serving_checklist.md' },
  { name: 'de-data-contracts',               num: '12', tmpl: '12-data-contracts-template.md',               ckl: 'governance_checklist.md' },
  { name: 'de-transformation-design',        num: '13', tmpl: null,                                           ckl: 'transformation_design_checklist.md' },
  { name: 'de-data-quality',                 num: '14', tmpl: '14-data-quality-template.md',                 ckl: 'observability_checklist.md' },
  { name: 'de-orchestration-and-observability', num: '15', tmpl: '15-orchestration-and-observability-template.md', ckl: 'observability_checklist.md' },
  { name: 'de-semantic-model-design',        num: '16', tmpl: '16-semantic-model-design-template.md',        ckl: 'serving_checklist.md' },
  { name: 'de-serving-layer-design',         num: '17', tmpl: null,                                          ckl: 'serving_checklist.md' },
  { name: 'de-lineage-and-metadata',         num: '18', tmpl: '18-lineage-and-metadata-template.md',         ckl: 'governance_checklist.md' },
  { name: 'de-governance-and-security',      num: '19', tmpl: '19-governance-and-security-template.md',      ckl: 'governance_checklist.md' },
  { name: 'de-cost-and-performance-optimization', num: '20', tmpl: '20-cost-and-performance-optimization-template.md', ckl: 'storage_design_checklist.md' },
  { name: 'de-cicd-and-testing',             num: '21', tmpl: null,                                          ckl: 'observability_checklist.md' },
  { name: 'de-project-evaluation',           num: '22', tmpl: '22-project-evaluation-template.md',           ckl: 'business_readiness_checklist.md' },
  { name: 'de-semantic-and-serving-layer',   num: '16-17', tmpl: null,                                       ckl: 'serving_checklist.md' },
];

for (const skill of SKILL_MAP) {
  const tomlPath = path.join(skillsDir, skill.name, 'customize.toml');
  if (fs.existsSync(tomlPath)) {
    console.log(`SKIP (exists): ${skill.name}`);
    continue;
  }

  const skillDir = path.join(skillsDir, skill.name);
  if (!fs.existsSync(skillDir)) {
    console.log(`SKIP (no dir): ${skill.name}`);
    continue;
  }

  const outputBasename = skill.num === '16-17'
    ? `${skill.num}-semantic-and-serving-layer.md`
    : `${skill.num}-${skill.name.replace('de-', '')}.md`;

  const tmplLine = skill.tmpl
    ? `template_file = "{skill-root}/../../templates/${skill.tmpl}"`
    : `# template_file = ""  # This skill uses its example output format`;

  const toml = `# Workflow customization surface for ${skill.name}.

[workflow]
activation_steps_prepend = []
activation_steps_append = []

persistent_facts = [
  "file:{project-root}/**/project-context.md",
]

on_complete = ""

[config]
output_file = "{project-root}/_des-output/planning-artifacts/${outputBasename}"
${tmplLine}
checklist_file = "{skill-root}/../../checklists/${skill.ckl}"
status_file = "{project-root}/_des-output/implementation-artifacts/des-workflow-status.md"
`;

  fs.writeFileSync(tomlPath, toml);
  console.log(`CREATED: ${skill.name}`);
}
