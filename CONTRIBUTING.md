# Contributing

## General

Contributions can be made by creating a pull request against the main branch on Github
with your changes.

To begin you will need to:
- Run `setup.sh`
- Have docker installed and running on your machine

## Docker

The docker image is used for deployment and running Github Actions.

You can build and run it locally using the commands below.

### Build container

```
docker build --no-cache -t stage6_se .
```

### Run container

By default, the container will build the html. Mounting `./src` will 
mean that your local changes are available to the container and that
you can capture build artifacts into `./src/_build`.

```
docker run -it -v ./src:/stage6_se/src stage6_se
```

## Spell Checking

Spell checking is performed by the extension `sphinxcontrib.spelling`.

To run the spell checker use:

```
make spelling
```

Words can be added to the dictionary by adding them to `src/pages/spelling_wordlist.txt`.

You can automatically sort this list by running:

```
sort spelling_wordlist.txt -o spelling_wordlist.txt
```

You can ignore words from spellchecking using a directive e.g.

```
:spelling:ignore:`Wi-Fi`
```

## Linting and Checking Formatting

To lint (auto-format) the restructured text files use:

```
make lint
```

To check the formatting (see also tests):

```
make checkfmt
```

## Tests

Before your PR is merged it needs to pass the following actions:
- `pr_tests_build`
- `pr_tests_spelling`
- `pr_tests_lint`

You can run these individually e.g.

```
act -j "pr_tests_build"
```

Or run both as they reside in the same workflow file

```
act -W '.github/workflows/pr_tests.yml
```