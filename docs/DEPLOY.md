# Deploy to GitHub Pages

This repo uses `gh-pages` to publish the `dist` folder to GitHub Pages.

Local deploy (manual):

1. Install dependencies:
   `npm install`
2. Build and deploy:
   `npm run predeploy && npm run deploy`

Notes:
- `vite.config.ts` sets `base` to `process.env.GH_PAGES ? '/ASD/' : './'`. For the published site to use correct paths, set the environment variable `GH_PAGES=1` during the deploy build.
- In CI workflows, you can set the environment variable `GH_PAGES` in the job or use Secrets/Actions to set it before running `npm run deploy`.
- Alternatively you can use the `/docs` strategy by moving `dist` to `docs/` and committing it to `main`, but this repository uses `gh-pages` by default.
