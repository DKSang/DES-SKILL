#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:-$HOME/.agents/skills}"
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${TARGET}" == */.agents/skills || "${TARGET}" == */.agents/skills/ ]]; then
  AGENTS_DIR="$(cd "${TARGET}/.." 2>/dev/null && pwd || true)"
  if [[ -z "${AGENTS_DIR}" ]]; then
    mkdir -p "$(dirname "${TARGET}")"
    AGENTS_DIR="$(cd "$(dirname "${TARGET}")" && pwd)"
  fi
  WORKSPACE_DIR="${AGENTS_DIR}/des-skill"
else
  WORKSPACE_DIR="$(dirname "${TARGET}")/des-skill-support"
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

STATUS_TEMPLATE="${SOURCE_DIR}/templates/workflow_status_template.md"
STATUS_TARGET="${WORKSPACE_DIR}/sprint-status/des-workflow-status.md"
if [[ -f "${STATUS_TEMPLATE}" && ! -f "${STATUS_TARGET}" ]]; then
  cp "${STATUS_TEMPLATE}" "${STATUS_TARGET}"
fi

echo "DES-SKILL skills installed to: ${TARGET}"
echo "DES-SKILL support workspace installed to: ${WORKSPACE_DIR}"
echo "Workflow status file ready at: ${STATUS_TARGET}"
echo "Restart your agent or run its skill refresh command if supported."
