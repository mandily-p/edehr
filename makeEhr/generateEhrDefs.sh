#!/bin/bash
## chmod u+x deploy.sh
# set to exit on error and pipe error to container script
set -e
set -o pipefail

# run the generator
node generate-ehr-defs

# place the generated content into the client
cp generated/ehrDefs/*.js ../client/src/inside/defs/

# clean up generated files
rm generated/ehrDefs/*.js
