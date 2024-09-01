# Software Engineering Stage 6

## Local Setup

Run `setup.sh`

### Generate html

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

act -s NETLIFY_SITE_ID={SECRET_SITE_ID} -s NETLIFY_AUTH_TOKEN=={SECRET_AUTH TOKEN} pull_request
