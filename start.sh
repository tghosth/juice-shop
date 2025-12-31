#!/usr/bin/env bash
set -euo pipefail

# Start all services in detached mode
cd "$(dirname "$0")"
docker compose up -d
