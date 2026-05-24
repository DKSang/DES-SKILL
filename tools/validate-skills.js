#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const workflowPath = path.join(root, "DES-WORKFLOW.md");

const skillsDirs = [
  path.join(root, "skills"),
  path.join(root, "skills-support"),
  path.join(root, "skills-learning"),
  path.join(root, "skills-stack")
];

let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL ${message}`);
}

function pass(message) {
  console.log(`PASS ${message}`);
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function listSkillPaths() {
  const paths = [];
  for (const dir of skillsDirs) {
    if (fs.existsSync(dir)) {
      const entries = fs.readdirSync(dir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => path.join(dir, entry.name));
      paths.push(...entries);
    }
  }
  return paths.sort();
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const item = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (item) fields[item[1]] = item[2].trim();
  }

  return fields;
}

function validateSkill(skillPath) {
  const skillName = path.basename(skillPath);
  const skillMdPath = path.join(skillPath, "SKILL.md");
  if (!fs.existsSync(skillMdPath)) {
    fail(`${skillName} is missing SKILL.md`);
    return;
  }

  const content = read(skillMdPath);
  
  const conflictMarkers = ["<<<<<<<", "=======", ">>>>>>>"];
  for (const marker of conflictMarkers) {
    if (content.includes(marker)) {
      fail(`${skillName} contains unresolved merge conflict marker: ${marker}`);
    }
  }

  const frontmatter = parseFrontmatter(content);
  const parentDir = path.dirname(skillPath);
  const isMainSkill = parentDir.endsWith("skills");
  const isStackSkill = parentDir.endsWith("skills-stack");

  if (isMainSkill || isStackSkill) {
    if (!frontmatter) {
      fail(`${skillName} is missing YAML frontmatter`);
      return;
    }

    if (frontmatter.name !== skillName) {
      fail(`${skillName} frontmatter name must match directory name`);
    }

    if (!frontmatter.description) {
      fail(`${skillName} is missing description`);
    } else if (!frontmatter.description.startsWith("Use when")) {
      fail(`${skillName} description should start with "Use when"`);
    }
  }

  const scaffoldedSkills = [
    "des-cicd-and-testing",
    "des-cost-and-performance-optimization",
    "des-data-quality",
    "des-governance-security-design",
    "des-lineage-metadata-design",
    "des-orchestration-observability",
    "des-project-evaluation",
    "des-semantic-model-design",
    "des-serving-layer-design",
    "des-transformation-design",
    "des-governance-and-security"
  ];

  const requiredHeadings = ["## When To Use", "## Purpose"];
  const enforceStrict = (isMainSkill && !scaffoldedSkills.includes(skillName)) || isStackSkill;

  if (enforceStrict) {
    requiredHeadings.push("## Quality Checklist");
  }

  for (const heading of requiredHeadings) {
    if (!content.includes(heading)) {
      fail(`${skillName} is missing heading: ${heading}`);
    }
  }

  if (enforceStrict) {
    // Accept either old or new heading name for mistakes/anti-patterns section
    if (!content.includes("## Common Mistakes To Avoid") && !content.includes("## Anti-Patterns to Avoid")) {
      fail(`${skillName} is missing heading: ## Common Mistakes To Avoid (or ## Anti-Patterns to Avoid)`);
    }

    if (!content.includes("## Handoff To The Next Skill") && skillName !== "using-des-skill") {
      fail(`${skillName} is missing handoff guidance`);
    }
  }

  // Refactored skill checks
  const customizePath = path.join(skillPath, "customize.toml");
  const stepsDir = path.join(skillPath, "steps");

  const hasCustomize = fs.existsSync(customizePath);
  const hasSteps = fs.existsSync(stepsDir);

  if (hasCustomize || hasSteps) {
    if (!hasCustomize) {
      fail(`${skillName} is a refactored skill but is missing customize.toml`);
    } else {
      try {
        const tomlContent = read(customizePath);
        for (const marker of conflictMarkers) {
          if (tomlContent.includes(marker)) {
            fail(`${skillName} customize.toml contains unresolved merge conflict marker: ${marker}`);
          }
        }
        if (!tomlContent.includes("[workflow]")) {
          fail(`${skillName} customize.toml is missing [workflow] section`);
        }
      } catch (err) {
        fail(`Failed to read customize.toml for ${skillName}: ${err.message}`);
      }
    }

    if (!hasSteps) {
      fail(`${skillName} is a refactored skill but is missing steps/ directory`);
    } else {
      const stepFiles = fs.readdirSync(stepsDir)
        .filter((file) => file.startsWith("step-") && file.endsWith(".md"));
      if (stepFiles.length === 0) {
        fail(`${skillName} steps/ directory must contain at least one step-*.md file`);
      }
    }
  }
}

function validateWorkflow(skillNames) {
  if (!fs.existsSync(workflowPath)) {
    fail("DES-WORKFLOW.md is missing");
    return;
  }

  const workflow = read(workflowPath);
  const referenced = Array.from(workflow.matchAll(/`(des-[a-z0-9-]+|using-des-skill)`/g)).map((match) => match[1]);
  const uniqueReferenced = [...new Set(referenced)];

  for (const name of uniqueReferenced) {
    if (!skillNames.includes(name)) {
      fail(`DES-WORKFLOW.md references missing skill: ${name}`);
    }
  }

  if (!workflow.includes("using-des-skill")) {
    fail("DES-WORKFLOW.md should reference using-des-skill as the entrypoint");
  }
}

function validatePackage() {
  const packagePath = path.join(root, "package.json");
  if (!fs.existsSync(packagePath)) {
    fail("package.json is missing");
    return;
  }

  const packageJson = JSON.parse(read(packagePath));
  if (!packageJson.bin || !packageJson.bin["des-skill"]) {
    fail("package.json must expose des-skill binary");
  }

  for (const required of ["skills/", "skills-stack/", "templates/", "DES-WORKFLOW.md", "README.md", "LICENSE"]) {
    if (!packageJson.files || !packageJson.files.includes(required)) {
      fail(`package.json files should include ${required}`);
    }
  }
}

function validateLearningFoundation() {
  const requiredFiles = [
    "SOUL.md",
    "knowledge/FUNDAMENTALS-MAP.md",
    "templates/learning/artifact-explanation-template.md",
    "templates/learning/artifact-quiz-template.md",
    "templates/learning/learning-path-template.md",
    "templates/learning/learning-gap-report-template.md",
    "templates/learning/socratic-coaching-session-template.md",
    "templates/learning/learning-status-template.md",
    "templates/learning/learning-review-template.md"
  ];

  for (const file of requiredFiles) {
    const filePath = path.join(root, file);
    if (!fs.existsSync(filePath)) {
      fail(`${file} is missing`);
    }
  }
}

function validateRequiredLearningSkills() {
  const requiredLearningSkills = [
    "des-explain-artifact",
    "des-artifact-quiz",
    "des-learning-path",
    "des-gap-teacher",
    "des-socratic-coach",
    "des-learning-status-update",
    "des-learning-review"
  ];

  for (const skill of requiredLearningSkills) {
    const skillPath = path.join(root, "skills-learning", skill);
    if (!fs.existsSync(skillPath)) {
      fail(`Required learning skill is missing: ${skill}`);
      continue;
    }

    const requiredPaths = [
      "SKILL.md",
      "customize.toml",
      "checklist.md",
      "steps"
    ];

    for (const requiredPath of requiredPaths) {
      const fullPath = path.join(skillPath, requiredPath);
      if (!fs.existsSync(fullPath)) {
        fail(`${skill} is missing ${requiredPath}`);
      }
    }
  }
}

function validateRequiredSupportSkills() {
  const requiredSupportSkills = [
    "des-create-epic",
    "des-create-story",
    "des-sprint-planning",
    "des-story-readiness-check",
    "des-dev-task-breakdown",
    "des-implementation-plan",
    "des-code-review",
    "des-release-readiness-review",
    "des-retrospective",
    "des-correct-course",
    "des-workflow-status-update",
    "des-wise"
  ];

  for (const skill of requiredSupportSkills) {
    const skillPath = path.join(root, "skills-support", skill);
    if (!fs.existsSync(skillPath)) {
      fail(`Required support skill is missing: ${skill}`);
      continue;
    }

    const requiredPaths = [
      "SKILL.md",
      "customize.toml",
      "steps"
    ];

    for (const requiredPath of requiredPaths) {
      const fullPath = path.join(skillPath, requiredPath);
      if (!fs.existsSync(fullPath)) {
        fail(`${skill} is missing ${requiredPath}`);
      }
    }
  }
}

function validateRequiredStackSkills() {
  const requiredStackSkills = [
    "des-duckdb-local-engine",
    "des-dbt-engineering",
    "des-dlt-ingestion",
    "des-provero-validation",
    "des-airflow-orchestration"
  ];

  for (const skill of requiredStackSkills) {
    const skillPath = path.join(root, "skills-stack", skill);
    if (!fs.existsSync(skillPath)) {
      fail(`Required stack skill is missing: ${skill}`);
      continue;
    }

    const requiredPaths = [
      "SKILL.md",
      "customize.toml",
      "steps",
      "references",
      "checklists",
      "templates",
      "examples"
    ];

    for (const requiredPath of requiredPaths) {
      const fullPath = path.join(skillPath, requiredPath);
      if (!fs.existsSync(fullPath)) {
        fail(`${skill} is missing ${requiredPath}`);
      }
    }
  }
}

function validateSupportTemplates() {
  const requiredFiles = [
    "templates/support/des-wise-response-template.md"
  ];

  for (const file of requiredFiles) {
    const filePath = path.join(root, file);
    if (!fs.existsSync(filePath)) {
      fail(`${file} is missing`);
    }
  }
}

function main() {
  const skillPaths = listSkillPaths();
  const skillNames = skillPaths.map(p => path.basename(p));

  for (const skillPath of skillPaths) {
    validateSkill(skillPath);
  }

  validateWorkflow(skillNames);
  validatePackage();
  validateLearningFoundation();
  validateRequiredLearningSkills();
  validateRequiredSupportSkills();
  validateRequiredStackSkills();
  validateSupportTemplates();

  if (failures > 0) {
    console.error(`\n${failures} validation issue(s) found.`);
    process.exitCode = 1;
    return;
  }

  pass(`Validated ${skillNames.length} skills and workflow references.`);
}

main();
