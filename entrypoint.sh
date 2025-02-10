#!/bin/sh

set -e  # Exit immediately on error

eval "uv run --no-project $@"
