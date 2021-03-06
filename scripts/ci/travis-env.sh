#!/bin/bash

if [[ -z "${TRAVIS}" ]]; then
  echo "This script can only setup the environment inside of Travis builds"
  exit 0
fi

# If FIREBASE_ACCESS_TOKEN not set yet, export the FIREBASE_ACCESS_TOKEN using the JWT token that Travis generated and exported for SAUCE_ACCESS_KEY.
# This is a workaround for travis-ci/travis-ci#7223
# WARNING: FIREBASE_ACCESS_TOKEN should NOT be printed
export FIREBASE_ACCESS_TOKEN=${FIREBASE_ACCESS_TOKEN:-$SAUCE_ACCESS_KEY}

# - we overwrite the value set by Travis JWT addon here to work around travis-ci/travis-ci#7223 for FIREBASE_ACCESS_TOKEN
export SAUCE_ACCESS_KEY=5da814acbe69-b04a-eb84-608b-e8960db1
