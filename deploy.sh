#!/bin/bash -e
set -o pipefail

echo "$TRAVIS_BRANCH"

if [ "$TRAVIS_BRANCH" = "master" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]
then
  echo "Deploying!"
  npm run prod
  cd public
  git config --global user.email "travis@brunch.io"
  git config --global user.name "TRAVIS-CI"
  git init
  git add .
  git commit -m "deploy"
  git push --force --quiet "https://${GH_TOKEN}@github.com/denar90/brunch.github.io.git" master:gh-pages > /dev/null 2>&1
else
  npm run prod
fi