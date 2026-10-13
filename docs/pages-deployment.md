# GitHub Pages Deployment Guide

This site is designed for **GitHub Pages, project site mode**, served from the
`main` branch root.

- Expected URL: **https://shiyue105.github.io/Yuehan_Shi/**
- Base path: `/Yuehan_Shi/` — all site links are relative, so no configuration is needed.
- `.nojekyll` is committed, so Pages serves files as-is (no Jekyll build step).

These steps require **repository owner (admin) permissions** and therefore must be
performed by the owner — the site builder cannot access Settings.

## One-time setup (owner)

1. Open https://github.com/shiyue105/Yuehan_Shi/settings/pages
2. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` — **Folder**: `/(root)`
3. Click **Save**.
4. Wait 1–3 minutes for the first build. The Settings page shows the live URL once
   the deployment succeeds.

> Note: Pages deploys from `main`. Merge the feature PR first — before the PR is
> merged, `main` contains only the LICENSE file and Pages would show a 404.

## Verify the deployment

After merging and enabling Pages:

```bash
curl -I https://shiyue105.github.io/Yuehan_Shi/
```

Check:

1. HTTP status is `200 OK`
2. `https://shiyue105.github.io/Yuehan_Shi/publications.html` also returns `200`
3. `https://shiyue105.github.io/Yuehan_Shi/assets/css/style.css` returns `200`
4. Open the site in a browser and confirm styles load and the language toggle works

If the site returns `404`:

- Confirm Pages shows a successful deployment in Settings → Pages (and in the
  **Actions** tab — a `pages build and deployment` workflow run should appear).
- Confirm `.nojekyll` exists at the repository root on `main`.
- Wait a few minutes; the first build can lag behind the Save action.

## Updating content later

1. Edit `assets/js/data.js` and/or `assets/js/publications-data.js` on `main`.
2. Commit and push — Pages rebuilds automatically (usually under a minute).
3. Hard-refresh the browser (Ctrl+Shift+R) if a change is not visible.

## Custom domain (optional, not configured)

Not configured for this site. If desired later, add a `CNAME` file at the repo root
and a DNS record, then set it under Settings → Pages → Custom domain.
