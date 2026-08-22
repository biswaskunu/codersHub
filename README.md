# Coder's Hub

Coder's Hub is a static frontend project for learning paths, reusable code snippets, and community-focused developer resources.

## Project structure

```text
.
├── index.html                  # Landing page
├── menu.html                   # Main journey/features page
├── learningpath.html           # Learning path catalogue
├── snippets.html               # Code snippet library
├── submit.html                 # Snippet submission form
├── loginpage.html              # Login/register screen
└── assets/
    ├── css/                    # Page-level stylesheets
    ├── images/                 # Static image assets
    └── js/
        ├── data/               # Static page data
        ├── main.js             # Shared browser helpers
        ├── learning-paths.js   # Learning path UI behavior
        └── snippets.js         # Snippet library UI behavior
```

## Development

This project currently has no build step. Open any HTML file directly in the browser, or serve the folder with a static file server.

Example:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
