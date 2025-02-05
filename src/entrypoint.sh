#!/bin/sh

set -e  # Exit immediately on error

# Set default SPHINXOPTS if not provided
SPHINXOPTS="${SPHINXOPTS:-"-v"}"

COMMAND="$1"
shift  # Remove first argument and keep the rest

case "$COMMAND" in
    build)
        echo "Building Sphinx documentation with options: $SPHINXOPTS"
        echo "Cleaning build directory..."
        find /src/_build/html -mindepth 1 -delete || true  # Deletes contents but keeps the folder
        echo "Building html..."
        uv run make html SPHINXOPTS="$SPHINXOPTS"
        ;;
    lint)
        echo "Linting..."
        uv run doc8
        ;;
    *)
        echo "Unknown command: $COMMAND"
        echo "Usage: docker run <container> [build|lint] [args]"
        exit 1
        ;;
esac
