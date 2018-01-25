#!/bin/bash

# Publish ng-extra docs assets to the ng-extra-docs-content repo
# ng-extra.gnucoop.io will pull from this assets repo to get the latest docs

# The script should immediately exit if any command in the script fails.
set -e

cd "$(dirname $0)/../../"

if [ -z ${NG_EXTRA_DOCS_CONTENT_TOKEN} ]; then
  echo "Error: No access token for GitHub could be found." \
       "Please set the environment variable 'NG_EXTRA_DOCS_CONTENT_TOKEN'."
  exit 1
fi

if [[ ! ${*} == *--no-build* ]]; then
  $(npm bin)/gulp mat-extra-examples:build-release:clean
  $(npm bin)/gulp ion-extra-examples:build-release
  $(npm bin)/gulp docs
fi

# Path to the directory that contains the generated docs output.
docsDistPath="./dist/docs"

# Path to the release output of the @gnucoop/mat-extra-examples package.
matExamplesPackagePath="./dist/releases/mat-extra-examples"
ionExamplesPackagePath="./dist/releases/ion-extra-examples"

# Path to the cloned docs-content repository.
docsContentPath=./tmp/ng-extra-docs-content

# Git clone URL for the ng-extra-docs-content repository.
docsContentRepoUrl="https://github.com/gnucoop/ng-extra-docs-content"

# Current version of Ng-Extra from the package.json file
buildVersion=$(node -pe "require('./package.json').version")

# Additional information about the last commit for docs-content commits.
commitSha=$(git rev-parse --short HEAD)
commitAuthorName=$(git --no-pager show -s --format='%an' HEAD)
commitAuthorEmail=$(git --no-pager show -s --format='%ae' HEAD)
commitMessage=$(git log --oneline -n 1)
commitTag="${buildVersion}-${commitSha}"

# Remove the docs-content repository if the directory exists
rm -Rf ${docsContentPath}

# Clone the docs-content repository.
git clone ${docsContentRepoUrl} ${docsContentPath} --depth 1

# Remove everything inside of the docs-content repository.
rm -Rf ${docsContentPath}/*

# Create all folders that need to exist in the docs-content repository.
mkdir ${docsContentPath}/{overview,guides,api,examples,stackblitz,mat-extra-examples-package,ion-extra-examples-package}

# Copy API and example files to the docs-content repository.
cp -R ${docsDistPath}/api/* ${docsContentPath}/api
cp -r ${docsDistPath}/examples/* ${docsContentPath}/examples
cp -r ${docsDistPath}/stackblitz/* ${docsContentPath}/stackblitz

# Copy the @gnucoop/mat-extra-examples and @gnucoop/ion-extra-examples
# packages to the docs-content repository.
cp -r ${matExamplesPackagePath}/* ${docsContentPath}/mat-extra-examples-package
cp -r ${ionExamplesPackagePath}/* ${docsContentPath}/ion-extra-examples-package

# Copy the license file to the docs-content repository.
cp ./LICENSE ${docsContentPath}

# Copy all immediate children of the markdown output the guides/ directory.
for guidePath in $(find ${docsDistPath}/markdown/ -maxdepth 1 -type f); do
  cp ${guidePath} ${docsContentPath}/guides
done

# All files that aren't immediate children of the markdown output are overview documents.
for overviewPath in $(find ${docsDistPath}/markdown/ -mindepth 2 -type f); do
  cp ${overviewPath} ${docsContentPath}/overview
done

# Go into the repository directory.
cd ${docsContentPath}

# Setup the Git configuration
git config user.name "$commitAuthorName"
git config user.email "$commitAuthorEmail"
git config credential.helper "store --file=.git/credentials"

echo "https://${NG_EXTRA_DOCS_CONTENT_TOKEN}:@github.com" > .git/credentials

git add -A
git commit --allow-empty -m "${commitMessage}"
git tag "${commitTag}"
git push origin master --tags
