# Donghyuk Lee — Personal Website

A static, dependency-free personal academic website built to match a clean,
typographic reference design.

## Pages

- `index.html` — About (hero, bio, contact links)
- `publications.html` — Publications (coming soon)
- `cv.html` — Curriculum Vitae (education, experience, contact)

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
