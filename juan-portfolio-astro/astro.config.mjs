import { defineConfig } from "astro/config";

/**
 * IMPORTANT:
 * 1) If your repo is YOUR_GITHUB_USERNAME.github.io (user site):
 *    - base should be "/" (default) and URL is https://YOUR_GITHUB_USERNAME.github.io
 *
 * 2) If your repo is a project site (e.g. "portfolio"):
 *    - set base to "/portfolio"
 *    - URL is https://YOUR_GITHUB_USERNAME.github.io/portfolio
 */
export default defineConfig({
  site: "https://YOUR_GITHUB_USERNAME.github.io",
  // base: "/REPO_NAME",
});
