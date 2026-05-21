#!/usr/bin/env node
/**
 * inject-step-architecture.js
 * Injects step-file architecture block into a DES phase SKILL.md
 * Usage: node inject-step-architecture.js <skill-name> <step1-name> [<step2-name>] [<step3-name>]
 */

const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, '..', 'skills');

function buildArchBlock(skillName, steps) {
  const stepPaths = steps.map(s => `./steps/${s}.md`);
  const nextStep = stepPaths[0];

  return `
## Conventions

- Bare paths (e.g. \`${stepPaths[0]}\`) resolve from the skill root.
- \`{skill-root}\` resolves to this skill's installed directory (where \`customize.toml\` lives).
- \`{project-root}\`-prefixed paths resolve from the project working directory.
- \`{skill-name}\` resolves to the skill directory's basename.

## WORKFLOW ARCHITECTURE

This uses **step-file architecture** for disciplined execution:

- **Micro-file Design**: Each step is self-contained and followed exactly.
- **Just-In-Time Loading**: Only load the current step file.
- **Sequential Enforcement**: Complete steps in order, no skipping.
- **State Tracking**: Persist progress via workflow status file.
- **Human-in-the-Loop**: HALT at decision points and wait for confirmation.

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously.
- 📖 **ALWAYS** read entire step file before execution.
- 🚫 **NEVER** skip steps or optimize the sequence.
- ⏸️ **ALWAYS** halt at menus and wait for user input.

## On Activation

### Step 1: Resolve the Workflow Block

Run: \`python3 {project-root}/_des/scripts/resolve_customization.py --skill {skill-root} --key workflow\`

**If the script fails**, resolve the \`workflow\` block by reading in order:
1. \`{skill-root}/customize.toml\` — defaults
2. \`{project-root}/_des/custom/{skill-name}.toml\` — team overrides
3. \`{project-root}/_des/custom/{skill-name}.user.toml\` — personal overrides

### Step 2: Load Persistent Facts

Treat every entry in \`{workflow.persistent_facts}\` as foundational context. Entries prefixed \`file:\` — load the referenced contents.

### Step 3: Load Config

Load config from \`{project-root}/_des/des/config.yaml\` and resolve:
- \`project_name\`, \`user_name\`, \`communication_language\`, \`document_output_language\`
- Fall back to Vietnamese if config is missing.

### Step 4: Greet and Begin

Greet \`user_name\`. Activation complete.

## Next Step

Read fully and follow: \`${nextStep}\`
`;
}

function buildCustomizeToml(skillName, outputNum, templateName, checklistName) {
  return `# Workflow customization surface for ${skillName}.

[workflow]
activation_steps_prepend = []
activation_steps_append = []

persistent_facts = [
  "file:{project-root}/**/project-context.md",
]

on_complete = ""

[config]
output_file = "{project-root}/_des-output/planning-artifacts/${outputNum}-${skillName.replace('de-', '')}.md"
template_file = "{skill-root}/../../templates/${templateName}"
checklist_file = "{skill-root}/../../checklists/${checklistName}"
status_file = "{project-root}/_des-output/implementation-artifacts/des-workflow-status.md"
`;
}

function injectIntoSkillMd(skillName, steps) {
  const skillMdPath = path.join(skillsDir, skillName, 'SKILL.md');
  if (!fs.existsSync(skillMdPath)) {
    console.error(`SKILL.md not found: ${skillMdPath}`);
    return false;
  }
  let content = fs.readFileSync(skillMdPath, 'utf8');
  
  // Already has workflow architecture — skip
  if (content.includes('## WORKFLOW ARCHITECTURE')) {
    console.log(`SKIP (already has arch): ${skillName}`);
    return true;
  }

  // Find insertion point: after ## Purpose block
  const purposeMatch = content.match(/^## Purpose\s*\n([\s\S]*?)(?=\n## )/m);
  if (!purposeMatch) {
    console.error(`Cannot find ## Purpose block in ${skillName}/SKILL.md`);
    return false;
  }

  const insertAfter = purposeMatch[0];
  const archBlock = buildArchBlock(skillName, steps);
  
  // Replace "## Step-By-Step Process" section with step references
  const stepList = steps.map((s, i) => `${i+1}. \`steps/${s}.md\``).join('\n');
  const newStepSection = `## Step-By-Step Process\n\nRefer to the individual step files in the \`steps/\` folder:\n${stepList}`;
  
  content = content.replace(insertAfter, insertAfter + archBlock);
  content = content.replace(/^## Step-By-Step Process\n[\s\S]*?(?=\n## )/m, newStepSection + '\n\n');
  
  fs.writeFileSync(skillMdPath, content, 'utf8');
  console.log(`DONE: ${skillName}`);
  return true;
}

// Skills config: name -> { steps, outputNum, templateFile, checklistFile }
const SKILLS_CONFIG = {
  'des-requirements-and-kpis': {
    steps: ['step-01-collect-requirements', 'step-02-resolve-conflicts', 'step-03-draft-and-handoff'],
    outputNum: '03', templateFile: '03-requirements-and-kpi-catalog-template.md', checklistFile: 'business_readiness_checklist.md'
  },
  'des-data-product-definition': {
    steps: ['step-01-classify-products', 'step-02-define-products', 'step-03-draft-and-handoff'],
    outputNum: '04', templateFile: '04-data-product-specification-template.md', checklistFile: '04-data-product-definition-checklist.md'
  },
  'des-domain-modeling': {
    steps: ['step-01-context-and-readiness', 'step-02-domain-concepts-and-relationships', 'step-03-artifact-checklist-and-handoff'],
    outputNum: '06', templateFile: '06-conceptual-domain-model-template.md', checklistFile: '06-domain-modeling-checklist.md'
  },
};

const target = process.argv[2];
if (target && SKILLS_CONFIG[target]) {
  const cfg = SKILLS_CONFIG[target];
  // Write customize.toml if missing
  const tomlPath = path.join(skillsDir, target, 'customize.toml');
  if (!fs.existsSync(tomlPath)) {
    fs.writeFileSync(tomlPath, buildCustomizeToml(target, cfg.outputNum, cfg.templateFile, cfg.checklistFile));
    console.log(`Created customize.toml for ${target}`);
  }
  injectIntoSkillMd(target, cfg.steps);
} else {
  // Process all
  for (const [skill, cfg] of Object.entries(SKILLS_CONFIG)) {
    const tomlPath = path.join(skillsDir, skill, 'customize.toml');
    if (!fs.existsSync(tomlPath)) {
      fs.writeFileSync(tomlPath, buildCustomizeToml(skill, cfg.outputNum, cfg.templateFile, cfg.checklistFile));
    }
    injectIntoSkillMd(skill, cfg.steps);
  }
}
