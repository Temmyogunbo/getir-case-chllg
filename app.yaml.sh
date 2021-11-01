#!/bin/bash
echo """

runtime: nodejs14
env: standard

env_variables:
  REACT_APP_API_URL: \"$REACT_APP_API_URL\"
  REACT_APP_PAGE_SIZE: \"$REACT_APP_PAGE_SIZE\"
  GCLOUD_PROJECT: \"$GOOGLE_PROJECT_ID\"
"""