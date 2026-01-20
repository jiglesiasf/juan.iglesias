# Juan Iglesias — Personal Site (Astro + GitHub Pages)

## Local dev
1) Install Node.js 20+
2) In the repo:
   - `npm install`
   - `npm run dev`

## Edit content
Edit: `src/data/cv.json`

## Deploy (free)
This repo deploys automatically to GitHub Pages on every push to `main`.

### Important configuration
Open `astro.config.mjs` and set:
- `site: "https://YOUR_GITHUB_USERNAME.github.io"`
- If this is a project repo (not `username.github.io`), uncomment and set:
  - `base: "/REPO_NAME"`
