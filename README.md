# J. Alexander Bae — Personal Website

A static, dependency-free recreation of an academic personal website, built to
match the structure, typography, and layout of the reference design.

## Pages

- `index.html` — About (hero, bio, contact links, selected publications)
- `publications.html` — Full list of publications grouped by year
- `cv.html` — Curriculum Vitae (education, experience, honors & awards, contact)

## Design

- **Fonts:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body) and
  [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (headings)
- **Colors:** shadcn/ui "neutral" palette via HSL CSS custom properties, with an
  automatic dark mode (`prefers-color-scheme`)
- **No build step** — plain HTML/CSS/JS, hostable anywhere (e.g. GitHub Pages)

## Local preview

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy with GitHub Pages

Settings → Pages → Build from branch → `main` / root.
