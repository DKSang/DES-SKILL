#!/usr/bin/env node

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

function usage() {
  return [
    "Usage:",
    "  des-skill install [--dir <path>] [--scope project|user] [--force]",
    "",
    "Defaults:",
    "  --scope project installs to .agents/skills",
    "  --scope user installs to ~/.agents/skills"
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
  const skillsRoot = path.join(root, "skills");

  return fs.readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => fs.existsSync(path.join(skillsRoot, name, "SKILL.md")))
    .sort();
}

function copySkill(root, skillName, targetDir, force) {
  const source = path.join(root, "skills", skillName);
  const target = path.join(targetDir, skillName);

  if (fs.existsSync(target)) {
    if (!force) {
      throw new Error(`${skillName} already exists at ${target}. Re-run with --force to overwrite.`);
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

function installSupportWorkspace(root, workspaceDir, force) {
  fs.mkdirSync(workspaceDir, { recursive: true });

  for (const directory of ["output", "planning", "sprint-status"]) {
    fs.mkdirSync(path.join(workspaceDir, directory), { recursive: true });
  }

  for (const directory of ["templates", "checklists", "workflows", "examples"]) {
    copyDirectoryIfExists(
      path.join(root, directory),
      path.join(workspaceDir, directory),
      force
    );
  }

  const workflowSource = path.join(root, "DES-WORKFLOW.md");
  const workflowTarget = path.join(workspaceDir, "DES-WORKFLOW.md");
  if (fs.existsSync(workflowSource) && (force || !fs.existsSync(workflowTarget))) {
    fs.copyFileSync(workflowSource, workflowTarget);
  }
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

  for (const skillName of skills) {
    copySkill(root, skillName, targetDir, args.force);
  }

  installSupportWorkspace(root, workspaceDir, args.force);

  return {
    targetDir,
    workspaceDir,
    skills
  };
}

function main(argv) {
  const args = parseArgs(argv);

  if (!args.command || args.command === "help") {
    console.log(usage());
    return 0;
  }

  if (args.command !== "install") {
    throw new Error(`Unknown command: ${args.command}`);
  }

  const result = install(args);
  console.log(`Installed ${result.skills.length} DES-SKILL skills to: ${result.targetDir}`);
  console.log(`Installed DES-SKILL support workspace to: ${result.workspaceDir}`);
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
  defaultInstallDir,
  defaultWorkspaceDir,
  discoverSkills,
  install,
  installSupportWorkspace,
  parseArgs,
  workspaceDirFor
};
