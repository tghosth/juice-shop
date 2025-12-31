#!/usr/bin/env bash
set -euo pipefail

# Stop and remove all services
cd "$(dirname "$0")"
docker compose down
