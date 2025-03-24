
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create a .nojekyll file to bypass GitHub Pages Jekyll processing
touch .nojekyll

# initialize git in the dist directory
git init
git add -A
git commit -m 'deploy'

# push to the gh-pages branch
git push -f git@github.com:yourusername/your-repo-name.git master:gh-pages

cd -
