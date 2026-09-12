# CODER'S HUB

**A place for coders, by coders. Find resources, share code, and grow.**

CODER'S HUB helps you stop feeling stuck and start making progress — whether you're
picking your first language, following a structured roadmap, or grabbing a reusable
code snippet for a common problem.

> // When I wrote this, only God and I knew what I was doing.
> // Now, Only God knows.
>
> If that feels familiar, you're in the right place. Hit **Start Journey**.

## Why use it?

- **Don't know what to learn next?** Follow a step-by-step Learning Path instead of jumping between random tutorials.
- **Need code reference that works?** Copy tested snippets for Java, Python, JavaScript, C/C++, Go, Rust, HTML/CSS, TypeScript, MySQL, and more.
- **Want to share own stuff?** Submit your own snippet to help the community.
- **Free, frontend-only, no setup needed to browse** — just open the site and start.

## Quick start guide

1. Open the landing page and click **Start Journey**.
2. On the main menu (**Your Journey Starts Here**), choose:
   - **Explore Learning Paths** → to learn a skill from beginner to expert
   - **Browse Code Snippets** → to find copy-paste solutions
3. Use **Sign In** (top-right) if you want to save your place / join the community.(login/register feature not active now)

That's it. No install needed to use the site.

## How to use: Learning Paths

**Go to:** Menu → Explore Learning Paths (`/learning-paths`)

What you get:
- 30+ paths including Web Development, Java & Spring Boot, Data Science with Python, Cloud & DevOps, Mobile, Cyber Security, Machine Learning, Game Dev, Blockchain, System Design, Go, Rust, TypeScript, AI App Integration, and more.
- Each card shows what the path is about and who it's for.

How to use it:
1. Use the **Search bar** at the top — try "python", "web", "security", "go".
2. Click a path to open its **roadmap modal** — a 6-step ordered list.
3. Follow the steps top-to-bottom. Finish one before moving to the next.
4. Use **Back** to return to the menu.

Tip: If you're brand new, start with Web Development, Python Backend Mastery, or Open Source & Version Control.

## How to use: Code Snippet Library

**Go to:** Menu → Browse Code Snippets (`/snippets`)

What you get:
- Beginner-friendly + practical snippets: Hello World, FizzBuzz, Factorial, Palindrome Check, Fibonacci, Binary Search, Quick Sort, Fetch API Wrapper, Debounce, LocalStorage Helper, Centering a Div, Grid Layout, Dark Mode, Contact Form, MySQL joins, and more.

How to use it:
1. **Search** by name, language, or keyword — e.g. `navbar`, `python`, `sort`.
2. **Filter by language** with the chips: All, Java, C++, C, Python, JavaScript, TypeScript, Go, Rust, HTML, CSS, MySQL.
3. Click **Copy** on any snippet and paste it into your project.
4. If nothing shows up, try a shorter keyword — you'll see "No snippets match your search."

## How to submit your own snippet

There is no backend form — submissions go via email:

1. On the Snippet Library page, click **Submit a Snippet**.
2. A pre-filled Gmail compose window opens to `kunubiswas2@gmail.com`.
3. Fill in:
   - Title:
   - Language:
   - Description:
   - Code: (paste inside the ``` block)
4. Send. Your snippet will be reviewed and added to the library.

Keep it short, working, and reusable — that's what gets used most.

## Sign In / Register

**Go to:** Sign In (top-right, `/login`)

- Use the **LogIn / Register tabs** to switch modes.
- You can also continue with Google / Facebook / LinkedIn buttons.
- `Remember Password` keeps you signed in on LogIn. Register requires accepting Terms and Conditions.

Note: Auth is currently UI-only for demo — no real account is created yet.

## Tips for getting the most out of it

- **Stuck on "what to learn"?** Pick ONE path and finish its 6 steps before starting another.
- **Stuck on code?** Search snippets first — copy, run, then modify to understand.
- **On mobile?** The whole site is responsive — search, cards, and modals work on phone, tablet, and desktop.

---

## For developers (run it locally)

Want to contribute or run the project yourself? You only need Node.js.

```bash
npm install
npm run dev      # start dev server
npm run build    # production build -> dist/
npm run preview  # preview production build
```

**Stack:** React 18 + React Router 6 + Vite 5 + plain CSS per page + Font Awesome CDN. No backend.

**Routes:**

| Path | Page |
| --- | --- |
| `/` | Landing with Start Journey |
| `/menu` | Hero + features + about |
| `/learning-paths` | Searchable paths + roadmap modal |
| `/snippets` | Searchable/filterable snippets + copy + Gmail submit |
| `/login` | Login / Register UI |

**Project layout:**

```text
index.html              # Vite entry (mounts #root)
public/                 # static assets (ch.png, confusion.png)
src/
  main.jsx / App.jsx    # entry + router
  data/                 # roadmaps.js, snippets.js (edit content here)
  pages/                # one component per route
  components/           # SiteHeader, Footer, PathCard, SnippetCard
  styles/               # landing.css, menu.css, learning-paths.css, snippets.css, auth.css
legacy/                 # original vanilla HTML/CSS/JS (reference only)
```

To add a new learning path, edit `src/data/roadmaps.js`. To add a new snippet, edit `src/data/snippets.js`.