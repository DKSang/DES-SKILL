#!/usr/bin/env bash
set -euo pipefail

COMMAND="install"
TARGET=""

if [[ "${1:-}" == "init" ]]; then
  COMMAND="init"
  TARGET="${2:-}"
else
  TARGET="${1:-}"
fi

# Fallback TARGET if empty
if [[ -z "${TARGET}" ]]; then
  TARGET="$HOME/.agents/skills"
fi

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${TARGET}" == */.agents/skills || "${TARGET}" == */.agents/skills/ ]]; then
  AGENTS_DIR="$(cd "${TARGET}/.." 2>/dev/null && pwd || true)"
  if [[ -z "${AGENTS_DIR}" ]]; then
    mkdir -p "$(dirname "${TARGET}")"
    AGENTS_DIR="$(cd "$(dirname "${TARGET}")" && pwd)"
  fi
  WORKSPACE_DIR="${AGENTS_DIR}/des-skill"
  PROJECT_ROOT="$(dirname "${AGENTS_DIR}")"
else
  WORKSPACE_DIR="$(dirname "${TARGET}")/des-skill-support"
  PROJECT_ROOT="$(dirname "${TARGET}")"
fi

# If COMMAND is init, scaffold DES workspace
if [[ "${COMMAND}" == "init" ]]; then
  echo "Scaffolding DES workspace in: ${PROJECT_ROOT}"
  
  mkdir -p "${PROJECT_ROOT}/_des"
  CONFIG_PATH="${PROJECT_ROOT}/_des/config.toml"
  if [[ ! -f "${CONFIG_PATH}" ]]; then
    cat << 'EOF' > "${CONFIG_PATH}"
# DES-method project configuration

[project]
name = "DES-Project"
communication_language = "Vietnamese"
document_output_language = "Vietnamese"

[paths]
planning_artifacts = "_des-output/planning-artifacts"
implementation_artifacts = "_des-output/implementation-artifacts"
EOF
  fi

  mkdir -p "${PROJECT_ROOT}/_des-output/planning-artifacts"
  mkdir -p "${PROJECT_ROOT}/_des-output/implementation-artifacts"
  mkdir -p "${PROJECT_ROOT}/docs"
fi

mkdir -p "${TARGET}"
cp -R "${SOURCE_DIR}"/skills/* "${TARGET}"/

mkdir -p \
  "${WORKSPACE_DIR}/output" \
  "${WORKSPACE_DIR}/planning" \
  "${WORKSPACE_DIR}/sprint-status"

for dir in templates checklists workflows examples; do
  if [[ -d "${SOURCE_DIR}/${dir}" ]]; then
    rm -rf "${WORKSPACE_DIR}/${dir}"
    cp -R "${SOURCE_DIR}/${dir}" "${WORKSPACE_DIR}/${dir}"
  fi
done

if [[ -f "${SOURCE_DIR}/DES-WORKFLOW.md" ]]; then
  cp "${SOURCE_DIR}/DES-WORKFLOW.md" "${WORKSPACE_DIR}/DES-WORKFLOW.md"
fi

if [[ -f "${SOURCE_DIR}/ARTIFACTS.md" ]]; then
  cp "${SOURCE_DIR}/ARTIFACTS.md" "${WORKSPACE_DIR}/ARTIFACTS.md"
fi

STATUS_TEMPLATE="${SOURCE_DIR}/templates/00-workflow-status-template.md"
STATUS_TARGET="${WORKSPACE_DIR}/sprint-status/des-workflow-status.md"
if [[ -f "${STATUS_TEMPLATE}" && ! -f "${STATUS_TARGET}" ]]; then
  cp "${STATUS_TEMPLATE}" "${STATUS_TARGET}"
fi

if [[ "${COMMAND}" == "init" ]]; then
  echo "Scaffolded DES project at: ${PROJECT_ROOT}"
  echo "Created default config: ${CONFIG_PATH}"
fi
echo "DES-SKILL skills installed to: ${TARGET}"
echo "DES-SKILL support workspace installed to: ${WORKSPACE_DIR}"
echo "Workflow status file ready at: ${STATUS_TARGET}"
echo "Restart your agent or run its skill refresh command if supported."
