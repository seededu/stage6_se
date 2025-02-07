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

`docker build --no-cache -t stage6_se .`

### Run container

By default the container will build the html. Mounting `/src` will 
mean that your local changes are available to the container and that
you can capture `/src/_build` once the build is completed.

`docker run -v ./src:/src -it stage6_se`

## Tests

### Main branch

`act push`

### Pull requests

This will probably fail because `act` doesn't handle binding volumes correctly.

`act -s NETLIFY_SITE_ID={SECRET_SITE_ID} -s NETLIFY_AUTH_TOKEN=={SECRET_AUTH TOKEN} pull_request`


