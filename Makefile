# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
# Sphinx options documented here
# https://www.sphinx-doc.org/en/master/man/sphinx-build.html
SPHINXOPTS    ?=
SPHINXBUILD   ?= sphinx-build
SOURCEDIR     = src/pages
BUILDDIR      = src/_build

html:
	sphinx-build "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

livehtml:
	sphinx-autobuild "$(SOURCEDIR)" "$(BUILDDIR)"/livehtml $(SPHINXOPTS) $(O)

build:
	sphinx-build "$(SOURCEDIR)" "$(BUILDDIR)" -W -n --keep-going

spelling:
	sphinx-build -b spelling "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

lint:
	docstrfmt "$(SOURCEDIR)"

checkfmt:
	doc8 "$(SOURCEDIR)"

