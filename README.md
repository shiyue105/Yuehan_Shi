# Yuehan Shi — Academic Personal Website

Static personal academic website for **Yuehan Shi** (Wenzhou-Kean University), built with plain HTML, CSS, and vanilla JavaScript. English-first with a complete Chinese translation.

Once GitHub Pages is enabled, the site will live at:
**https://shiyue105.github.io/Yuehan_Shi/**

## Site structure

```
.
├── index.html                  # Homepage
├── publications.html           # Publications page with status filters
├── assets/
│   ├── css/style.css           # Single stylesheet (design tokens + layout)
│   └── js/
│       ├── data.js             # Bilingual (EN/ZH) site content  ← edit content here
│       ├── publications-data.js# Publication metadata            ← edit papers here
│       ├── app.js              # Homepage rendering + language toggle
│       └── publications.js     # Publications page + filters
├── docs/
│   ├── content-provenance.md   # Where each piece of content comes from
│   ├── pages-deployment.md     # GitHub Pages setup (owner-only settings)
│   └── screenshots/            # Test evidence captured during development
└── .nojekyll                   # Serves files as-is (no Jekyll processing)
```

## Local preview

Any static file server works. To exactly simulate the GitHub Pages project path
(`/Yuehan_Shi/`), serve the **parent** directory of this repository:

```bash
# from the parent folder that CONTAINS the Yuehan_Shi repo folder
python -m http.server 8000 --bind 127.0.0.1
```

Then open:

- Homepage: `http://127.0.0.1:8000/Yuehan_Shi/`
- Publications: `http://127.0.0.1:8000/Yuehan_Shi/publications.html`

(Serving the repo root directly also works for quick checks — all site links are
relative — but only the parent-directory trick reproduces the `/Yuehan_Shi/` base path.)

## Editing content

All text lives in two data files — no HTML editing is needed for routine updates:

- `assets/js/data.js` — profile, updates, research interests, projects, education,
  experience, skills, and all Chinese translations. The file is a plain object
  (`I18N.en` / `I18N.zh`); keep the two languages in sync when editing.
- `assets/js/publications-data.js` — one entry per publication (`id`, `year`,
  `title`, `authors`, `venue`, `rank`, `status`, `links`, `topics`).
  Allowed `status` values: `accepted`, `under-review`, `in-preparation`.

House rules (see `docs/content-provenance.md`):

1. Never add a DOI / arXiv / paper URL until it is publicly verifiable.
2. Never add the personal phone number — it is intentionally excluded.
3. Keep publication statuses exactly as confirmed by the owner.

## Accessibility & behavior notes

- Semantic landmarks, skip link, visible focus rings, `aria-pressed` on toggles.
- `prefers-reduced-motion: reduce` disables scroll-reveal animations and smooth scrolling.
- Language preference persists in `localStorage` (`site-lang`) and falls back to browser language.
- Layout tested at 375 px, 768 px, and 1440 px viewports.

## Deployment

See `docs/pages-deployment.md` for the exact owner-only steps
(Settings → Pages → Deploy from a branch → `main` → `/(root)`).
