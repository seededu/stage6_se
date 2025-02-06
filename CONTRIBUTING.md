## Testing Github Workflows and Actions

### Main branch

`act push`

### Pull requests

This will probably fail because `act` doesn't handle binding volumes correctly.

`act -s NETLIFY_SITE_ID={SECRET_SITE_ID} -s NETLIFY_AUTH_TOKEN=={SECRET_AUTH TOKEN} pull_request`


