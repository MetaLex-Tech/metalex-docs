#!/usr/bin/env bash
set -euo pipefail

# Clear proxy-related npm config to avoid deprecation warnings
unset npm_config_http_proxy
unset npm_config_https_proxy

npm "$@"
