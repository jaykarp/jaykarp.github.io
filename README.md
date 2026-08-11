# jay-karp.com

Static site. `index.html` and `style.css` at the repo root, served by GitHub Pages
from `main` / `(root)`. There is no build step, so publishing is just:

```
git push origin main
```

## Restoring the old React site

The previous site was a Create React App build deployed to the `gh-pages` branch
with the `gh-pages` package. It still exists in git history at commit `2e48024`
(the commit before the static rewrite).

To bring it back:

```
git checkout 2e48024 -- src public package.json yarn.lock tsconfig.json
rm index.html style.css
yarn install
yarn build && yarn deploy
```

Then switch the Pages source back to the `gh-pages` branch in
Settings → Pages.

Two things to know before trying:

- **It needs an old Node.** `react-scripts` 4 does not build on current Node
  versions; the `--openssl-legacy-provider` flag in the build script is a
  workaround for this. Use Node 16 via nvm.
- **The `CNAME` was added to `gh-pages` by hand**, not built from `public/`, so
  the custom domain breaks on the next `yarn deploy` unless you copy `CNAME`
  into `public/` first.

If the `gh-pages` branch still exists, the last built version of the old site is
sitting on it at commit `2bcfd42` and can be served directly by pointing Pages
back at that branch — no rebuild needed.
