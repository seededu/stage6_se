#!/bin/sh

set -e  # Exit immediately on error

# Set default SPHINXOPTS if not provided
# Sphinx options documented here
# https://www.sphinx-doc.org/en/master/man/sphinx-build.html
SPHINXOPTS="${SPHINXOPTS:-"-v"}"

COMMAND="$1"
shift  # Remove first argument and keep the rest

case "$COMMAND" in
    build)
        echo "Building Sphinx documentation with options: $SPHINXOPTS"
#        echo "Cleaning build directory..."
#        echo "$(pwd)"
#        find src/_build/html -mindepth 1 -delete || true  # Deletes contents but keeps the folder
#        echo "Building html..."
        uv run --no-project make html SPHINXOPTS="$SPHINXOPTS"
        ;;
    checkfmt)
        echo "Checking RST formatting..."
        uv run --no-project doc8 pages
        ;;
    *)
        echo "Unknown command: $COMMAND"
        echo "Usage: docker run <container> [build|lint] [args]"
        exit 1
        ;;
esac
