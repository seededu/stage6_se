# Build Instructions

## Local Setup

Run `setup.sh`

### Generate html

Don't forget to activate your virtual environment!

#### Option 1: Generate static docs

`make html`

#### Option 2: Live preview of changes

`make livehtml`

## Docker

### Build container

`docker build -t stage6_se .`

### Run container

`docker run -it stage6_se`

## Testing Github Workflows and Actions

### Main branch

`act push`

### Pull requests

This will probably fail because `act` doesn't handle binding volumes correctly.

`act -s NETLIFY_SITE_ID={SECRET_SITE_ID} -s NETLIFY_AUTH_TOKEN=={SECRET_AUTH TOKEN} pull_request`
