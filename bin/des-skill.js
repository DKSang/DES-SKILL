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
    "  init scaffolds a full DES-method workspace (_des, _des-output, .agents/skills, docs)"
  ].join("\n");
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
    return path.join(os.homedir(), ".agents", "des-skill");
  }

  return path.join(process.cwd(), ".agents", "des-skill");
}

function workspaceDirFor(args, targetDir) {
  if (!args.dir) {
    return defaultWorkspaceDir(args.scope);
  }

  const skillsDir = path.resolve(targetDir);
  const parent = path.dirname(skillsDir);

  if (path.basename(skillsDir) === "skills" && path.basename(parent) === ".agents") {
    return path.join(parent, "des-skill");
  }

  return path.join(path.dirname(skillsDir), "des-skill-support");
}

function packageRoot() {
  return path.resolve(__dirname, "..");
}

function discoverSkills(root) {
  const allSkills = [];
  const dirs = ["skills", "skills-support"];

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
  const target = path.join(workspaceDir, "sprint-status", "des-workflow-status.md");
  return copyFileIfExists(source, target, force);
}

function installSupportWorkspace(root, workspaceDir, force) {
  fs.mkdirSync(workspaceDir, { recursive: true });

  for (const directory of ["output", "planning", "sprint-status"]) {
    fs.mkdirSync(path.join(workspaceDir, directory), { recursive: true });
  }

  for (const directory of ["templates", "checklists", "docs", "workflows", "examples"]) {
    copyDirectoryIfExists(
      path.join(root, directory),
      path.join(workspaceDir, directory),
      force
    );
  }

  copyFileIfExists(path.join(root, "DES-WORKFLOW.md"), path.join(workspaceDir, "DES-WORKFLOW.md"), force);
  copyFileIfExists(path.join(root, "ARTIFACTS.md"), path.join(workspaceDir, "ARTIFACTS.md"), force);

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
    statusPath: path.join(workspaceDir, "sprint-status", "des-workflow-status.md"),
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
  const root = packageRoot();
  const targetDir = path.resolve(args.dir || defaultInstallDir(args.scope));
  const projectRoot = projectRootFor(args, targetDir);

  // 1. Scaffold _des
  const desDir = path.join(projectRoot, "_des");
  fs.mkdirSync(desDir, { recursive: true });

  const configPath = path.join(desDir, "config.toml");
  if (!fs.existsSync(configPath) || args.force) {
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
      'implementation_artifacts = "_des-output/implementation-artifacts"'
    ].join("\n") + "\n";
    fs.writeFileSync(configPath, configContent);
  }

  // 2. Scaffold _des-output
  const planningDir = path.join(projectRoot, "_des-output", "planning-artifacts");
  const implementationDir = path.join(projectRoot, "_des-output", "implementation-artifacts");
  fs.mkdirSync(planningDir, { recursive: true });
  fs.mkdirSync(implementationDir, { recursive: true });

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
    const result = initializeWorkspace(args);
    console.log(`Scaffolded DES project at: ${result.projectRoot}`);
    console.log(`Created default config: ${result.configPath}`);
    console.log(`Created planning folder: ${result.planningDir}`);
    console.log(`Created implementation folder: ${result.implementationDir}`);
    console.log(`Created docs folder: ${result.docsDir}`);
    console.log(`Installed ${result.skills.length} DES-SKILL skills to: ${result.targetDir}`);
    console.log(`Installed DES-SKILL support workspace to: ${result.workspaceDir}`);
    console.log(`Workflow status file ready at: ${result.statusPath}`);
    return 0;
  }

  if (args.command !== "install") {
    throw new Error(`Unknown command: ${args.command}`);
  }

  const result = install(args);
  console.log(`Installed ${result.skills.length} DES-SKILL skills to: ${result.targetDir}`);
  console.log(`Installed DES-SKILL support workspace to: ${result.workspaceDir}`);
  console.log(`Workflow status file ready at: ${result.statusPath}`);
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
  workspaceDirFor,
  projectRootFor,
  initializeWorkspace
};
