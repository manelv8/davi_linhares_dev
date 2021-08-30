#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
touch CNAME
echo 'www.tidavi.com.br' > CNAME
git init
git add -A
git commit -m 'deploy'
git branch -m master main

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:manelv8/manelv8.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:manelv8/davi_linhares_dev.git main:gh-pages

cd -