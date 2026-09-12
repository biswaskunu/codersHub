# codersHub (React + Vite)

CODER'S HUB is a frontend-only coding resource project, now built with **React 18 + React Router + Vite**.

## Stack

- React 18 + React Router 6 (SPA routing)
- Vite 5 (dev server + build)
- Plain CSS per page (migrated from the legacy vanilla stylesheets)
- Font Awesome (CDN, loaded in `index.html`)

No backend has been introduced. Snippet submissions are persisted to `localStorage`.

## Scripts

```bash
npm install
npm run dev      # start dev server
npm run build    # production build -> dist/
npm run preview  # preview production build
```

## Routes

| Path | Page | Source |
| --- | --- | --- |
| `/` | Landing | `src/pages/LandingPage.jsx` |
| `/menu` | Main menu + features | `src/pages/MenuPage.jsx` |
| `/learning-paths` | Searchable learning paths + roadmap modal | `src/pages/LearningPathsPage.jsx` |
| `/snippets` | Searchable/filterable snippet library | `src/pages/SnippetsPage.jsx` |
| `/submit` | Snippet submission form | `src/pages/SubmitPage.jsx` |
| `/login` | Login / Register UI | `src/pages/AuthPage.jsx` |

## Structured folders

```text
index.html              # Vite entry (mounts #root, loads /src/main.jsx)
public/                 # static assets served as-is (ch.png, confusion.png)
src/
  main.jsx              # React entry
  App.jsx               # router
  index.css             # global reset + design tokens
  assets/               # bundled images (ch.png, confusion.png mirrors)
  components/
    layout/             # SiteHeader.jsx, Footer.jsx
    learning/           # PathCard.jsx (+ RoadmapModal)
    snippets/           # SnippetCard.jsx (+ FilterChips)
  data/                 # roadmaps.js, snippets.js
  pages/                # one component per route
  styles/               # landing.css, menu.css, learning-paths.css,
                        # snippets.css, submit.css, auth.css
legacy/                 # original vanilla HTML/CSS/JS (reference only)
```

Page styles are **scoped** (e.g. `.menu-page .site-header`) so the per-page
stylesheets can coexist in the SPA bundle without clashing.

## Responsive

Layouts adapt to phone, tablet, desktop, and large screens using fluid sizing,
CSS Grid/Flexbox, responsive breakpoints, and safer overflow handling (carried
over from the legacy stylesheets).
