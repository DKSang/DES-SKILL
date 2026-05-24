#!/usr/bin/env node

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

function usage() {
  return [
    "Usage:",
    "  des-skill [--dir <path>] [--scope project|user] [--force]",
    "  des-skill install [--dir <path>] [--scope project|user] [--force]",
    "  des-skill init [--dir <path>] [--force]",
    "",
    "Defaults:",
    "  no command runs init for npx-friendly project scaffolding",
    "  --scope project installs to .agents/skills",
    "  --scope user installs to ~/.agents/skills",
    "  init scaffolds a DES-style workspace (_des, _des-output, .agents/skills, docs)"
  ].join("\n");
}

function printHeader() {
  console.log([
    "╭────────────────────────────────────────────────────────╮",
    "│                       DES-SKILL                        │",
    "│              Data Engineering Superpowers              │",
    "│              Design. Engineer. Ship. Learn.            │",
    "╰────────────────────────────────────────────────────────╯",
    "",
    "Data Engineering workflow system for AI agents.",
    ""
  ].join("\n"));
}

function printInstallSummary(result) {
  console.log([
    "",
    "╭─DES is ready to use!───────────────────────────────────╮",
    "│ ✓ DES Method                                           │",
    "│ ✓ Support Skills                                       │",
    "│ ✓ Learning Skills                                      │",
    "│ ✓ Stack Skills                                         │",
    "│ ✓ Configurations                                       │",
    `│ ✓ codex (${result.skills.length} skills -> .agents/skills)`.padEnd(57, " ") + "│",
    "│                                                        │",
    `│ Installed to: ${result.workspaceDir}`.slice(0, 57).padEnd(57, " ") + "│",
    "│                                                        │",
    "│ Get started:                                           │",
    "│  1. Launch your AI agent from your project folder      │",
    "│  2. Invoke using-des-skill or des-wise                 │",
    "╰────────────────────────────────────────────────────────╯"
  ].join("\n"));
}

function parseArgs(argv) {
  const args = {
    command: argv[0],
    dir: null,
    scope: "project",
    force: false
  };

  if (args.command === "--help" || args.command === "-h") {
    args.command = "help";
  }

  for (let index = 1; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === "--help" || value === "-h") {
      args.command = "help";
    } else if (value === "--force" || value === "-f") {
      args.force = true;
    } else if (value === "--dir") {
      index += 1;
      if (!argv[index]) throw new Error("--dir requires a path");
      args.dir = argv[index];
    } else if (value === "--scope") {
      index += 1;
      if (!["project", "user"].includes(argv[index])) {
        throw new Error("--scope must be project or user");
      }
      args.scope = argv[index];
    } else {
      throw new Error(`Unknown argument: ${value}`);
    }
  }

  return args;
}

function defaultInstallDir(scope) {
  if (scope === "user") {
    return path.join(os.homedir(), ".agents", "skills");
  }

  return path.join(process.cwd(), ".agents", "skills");
}

function defaultWorkspaceDir(scope) {
  if (scope === "user") {
    return path.join(os.homedir(), "_des");
  }

  return path.join(process.cwd(), "_des");
}

function workspaceDirFor(args, targetDir) {
  if (!args.dir) {
    return defaultWorkspaceDir(args.scope);
  }

  const skillsDir = path.resolve(targetDir);
  const parent = path.dirname(skillsDir);

  if (path.basename(skillsDir) === "skills" && path.basename(parent) === ".agents") {
    return path.join(path.dirname(parent), "_des");
  }

  return path.join(path.dirname(skillsDir), "_des");
}

function packageRoot() {
  return path.resolve(__dirname, "..");
}

function discoverSkills(root) {
  const allSkills = [];
  const dirs = ["skills", "skills-support", "skills-learning", "skills-stack"];

  for (const dir of dirs) {
    const skillsRoot = path.join(root, dir);
    if (!fs.existsSync(skillsRoot)) continue;

    const entries = fs.readdirSync(skillsRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => ({ name: entry.name, dir }))
      .filter((s) => fs.existsSync(path.join(root, s.dir, s.name, "SKILL.md")));
    
    allSkills.push(...entries);
  }

  return allSkills.sort((a, b) => a.name.localeCompare(b.name));
}

function copySkill(root, skill, targetDir, force) {
  const source = path.join(root, skill.dir, skill.name);
  const target = path.join(targetDir, skill.name);

  if (fs.existsSync(target)) {
    if (!force) {
      throw new Error(`${skill.name} already exists at ${target}. Re-run with --force to overwrite.`);
    }

    fs.rmSync(target, { recursive: true, force: true });
  }

  fs.cpSync(source, target, { recursive: true });
}

function copyDirectoryIfExists(source, target, force) {
  if (!fs.existsSync(source)) return;

  if (fs.existsSync(target)) {
    if (!force) return;
    fs.rmSync(target, { recursive: true, force: true });
  }

  fs.cpSync(source, target, { recursive: true });
}

function copyFileIfExists(source, target, force) {
  if (!fs.existsSync(source)) return false;
  if (fs.existsSync(target) && !force) return false;

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
  return true;
}

function createWorkflowStatus(root, workspaceDir, force) {
  const source = path.join(root, "templates", "00-workflow-status-template.md");
  const target = path.join(path.dirname(workspaceDir), "_des-output", "implementation-artifacts", "des-workflow-status.md");
  return copyFileIfExists(source, target, force);
}

function writeDefaultConfigs(workspaceDir, force) {
  fs.mkdirSync(workspaceDir, { recursive: true });

  const configPath = path.join(workspaceDir, "config.toml");
  if (!fs.existsSync(configPath) || force) {
    const configContent = [
      "# DES-method project configuration",
      "",
      "[project]",
      'name = "DES-Project"',
      'communication_language = "Vietnamese"',
      'document_output_language = "Vietnamese"',
      "",
      "[paths]",
      'planning_artifacts = "_des-output/planning-artifacts"',
      'implementation_artifacts = "_des-output/implementation-artifacts"',
      'learning_artifacts = "_des-output/learning-artifacts"',
      'test_artifacts = "_des-output/test-artifacts"'
    ].join("\n") + "\n";
    fs.writeFileSync(configPath, configContent);
  }

  const userConfigPath = path.join(workspaceDir, "config.user.toml");
  if (!fs.existsSync(userConfigPath)) {
    const userConfigContent = [
      "# Local DES user overrides",
      "# This file is safe to customize per project.",
      ""
    ].join("\n");
    fs.writeFileSync(userConfigPath, userConfigContent);
  }

  return { configPath, userConfigPath };
}

function createOutputDirs(projectRoot) {
  const outputRoot = path.join(projectRoot, "_des-output");
  const dirs = {
    planningDir: path.join(outputRoot, "planning-artifacts"),
    implementationDir: path.join(outputRoot, "implementation-artifacts"),
    learningDir: path.join(outputRoot, "learning-artifacts"),
    testDir: path.join(outputRoot, "test-artifacts")
  };

  for (const dir of Object.values(dirs)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return dirs;
}

function installSupportWorkspace(root, workspaceDir, force) {
  fs.mkdirSync(workspaceDir, { recursive: true });
  fs.mkdirSync(path.join(workspaceDir, "_config"), { recursive: true });

  writeDefaultConfigs(workspaceDir, force);
  createOutputDirs(path.dirname(workspaceDir));

  const runtimeDirectories = [
    ["skills", "method"],
    ["skills-support", "support"],
    ["skills-learning", "learning"],
    ["skills-stack", "stack"],
    ["templates", "templates"],
    ["checklists", "checklists"],
    ["docs", "docs"],
    ["workflows", "workflows"],
    ["examples", "examples"],
    ["knowledge", "knowledge"],
    ["tools", "scripts"]
  ];

  for (const [sourceDirectory, targetDirectory] of runtimeDirectories) {
    copyDirectoryIfExists(
      path.join(root, sourceDirectory),
      path.join(workspaceDir, targetDirectory),
      force
    );
  }

  copyFileIfExists(path.join(root, "DES-WORKFLOW.md"), path.join(workspaceDir, "DES-WORKFLOW.md"), force);
  copyFileIfExists(path.join(root, "ARTIFACTS.md"), path.join(workspaceDir, "ARTIFACTS.md"), force);
  copyFileIfExists(path.join(root, "SOUL.md"), path.join(workspaceDir, "SOUL.md"), force);
  copyFileIfExists(path.join(root, "README.md"), path.join(workspaceDir, "README.md"), force);

  createWorkflowStatus(root, workspaceDir, force);
}

function install(args) {
  const root = packageRoot();
  const targetDir = path.resolve(args.dir || defaultInstallDir(args.scope));
  const workspaceDir = path.resolve(workspaceDirFor(args, targetDir));
  const skills = discoverSkills(root);

  if (skills.length === 0) {
    throw new Error("No skills found.");
  }

  fs.mkdirSync(targetDir, { recursive: true });

  for (const skill of skills) {
    copySkill(root, skill, targetDir, args.force);
  }

  installSupportWorkspace(root, workspaceDir, args.force);

  return {
    targetDir,
    workspaceDir,
    statusPath: path.join(path.dirname(workspaceDir), "_des-output", "implementation-artifacts", "des-workflow-status.md"),
    skills
  };
}

function projectRootFor(args, targetDir) {
  if (!args.dir) {
    return process.cwd();
  }

  const skillsDir = path.resolve(targetDir);
  const parent = path.dirname(skillsDir);

  if (path.basename(skillsDir) === "skills" && path.basename(parent) === ".agents") {
    return path.dirname(parent);
  }

  return path.dirname(skillsDir);
}

function initializeWorkspace(args) {
  const targetDir = path.resolve(args.dir || defaultInstallDir(args.scope));
  const projectRoot = projectRootFor(args, targetDir);

  // 1. Scaffold _des
  const desDir = path.join(projectRoot, "_des");
  const { configPath } = writeDefaultConfigs(desDir, args.force);

  // 2. Scaffold _des-output
  const { planningDir, implementationDir, learningDir, testDir } = createOutputDirs(projectRoot);

  // 3. Scaffold docs
  const docsDir = path.join(projectRoot, "docs");
  fs.mkdirSync(docsDir, { recursive: true });

  // 4. Install skills
  const installResult = install(args);

  return {
    ...installResult,
    projectRoot,
    configPath,
    planningDir,
    implementationDir,
    learningDir,
    testDir,
    docsDir
  };
}

function main(argv) {
  const args = parseArgs(argv);

  if (args.command === "help") {
    console.log(usage());
    return 0;
  }

  if (!args.command) {
    args.command = "init";
  }

  if (args.command === "init") {
    printHeader();
    const result = initializeWorkspace(args);
    console.log(`◇ Installation directory: ${result.projectRoot}`);
    console.log(`◇ Created directories:`);
    console.log(`  planning artifacts: ${path.relative(result.projectRoot, result.planningDir)}`);
    console.log(`  implementation artifacts: ${path.relative(result.projectRoot, result.implementationDir)}`);
    console.log(`  learning artifacts: ${path.relative(result.projectRoot, result.learningDir)}`);
    console.log(`  test artifacts: ${path.relative(result.projectRoot, result.testDir)}`);
    console.log(`  project knowledge: ${path.relative(result.projectRoot, result.docsDir)}`);
    console.log(`◇ Configurations generated: ${path.relative(result.projectRoot, result.configPath)}`);
    console.log(`◆ codex configured: ${result.skills.length} skills -> ${path.relative(result.projectRoot, result.targetDir)}`);
    printInstallSummary(result);
    return 0;
  }

  if (args.command !== "install") {
    throw new Error(`Unknown command: ${args.command}`);
  }

  printHeader();
  const result = install(args);
  const projectRoot = path.dirname(result.workspaceDir);
  console.log(`◇ Installation directory: ${projectRoot}`);
  console.log(`◆ codex configured: ${result.skills.length} skills -> ${path.relative(projectRoot, result.targetDir)}`);
  console.log(`◇ Workflow status file: ${path.relative(projectRoot, result.statusPath)}`);
  printInstallSummary(result);
  return 0;
}

if (require.main === module) {
  try {
    process.exitCode = main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    console.error("");
    console.error(usage());
    process.exitCode = 1;
  }
}

module.exports = {
  createWorkflowStatus,
  defaultInstallDir,
  defaultWorkspaceDir,
  discoverSkills,
  install,
  installSupportWorkspace,
  parseArgs,
  printHeader,
  printInstallSummary,
  workspaceDirFor,
  projectRootFor,
  initializeWorkspace
};
