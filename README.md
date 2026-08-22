# Coder's Hub

Coder's Hub is a static frontend project for exploring learning paths and browsing reusable code snippets.

## Project structure

```text
.
├── assets/
│   ├── css/pages/      # Page-specific stylesheets
│   ├── images/         # Image and icon assets
│   └── js/
│       ├── app.js      # Shared browser helpers
│       ├── data/       # Static data used by pages
│       └── pages/      # Page-specific browser behavior
├── index.html          # Landing page
├── menu.html           # Main navigation page
├── learningpath.html   # Learning paths explorer
├── snippets.html       # Snippet library
├── submit.html         # Snippet submission form
└── loginpage.html      # Login/register UI
```

## Running locally

Because the project is plain HTML, CSS, and JavaScript, it can be opened directly in a browser or served with any static file server:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
