#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:-$HOME/.agents/skills}"
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

mkdir -p "$TARGET"
cp -R "$SOURCE_DIR"/skills/* "$TARGET"/

echo "DES-SKILL installed to: $TARGET"
echo "Restart your agent or run its skill refresh command if supported."
