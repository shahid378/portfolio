# Portfolio

Personal portfolio for Mo Shahid. Vite 8 · React 19 · Tailwind 4 · react-three-fiber.

Live at <https://shahid378.github.io/portfolio/>

## Requirements

Node `^20.19.0 || >=22.12.0` (see `.nvmrc` — run `nvm use`).

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/  — the /portfolio/ path matters
```

## Portfolios

The site ships **one** portfolio per deploy, chosen at build time. Only the
selected one is reachable from the entry point, so nothing else is bundled.

```bash
npm run build                      # defaults to v2
VITE_PORTFOLIO=1 npm run build     # ships the 2024 portfolio instead
```

`vite.config.js` resolves `@active-portfolio` to `src/portfolios/v<N>/index.jsx`
and throws if that folder is missing, so a typo fails the build rather than
shipping a blank page. Adding `v3` is a new folder and nothing else.

| Flag | Portfolio |
| --- | --- |
| `1` | 2024 original. Frozen — kept deployable, no longer maintained. |
| `2` | Current (default). |

## Personas

v2 carries two personas in one bundle, switched at runtime by the header toggle:

- **Tech** (default) — engineering services, case studies, experience.
- **Creative** — writing services and samples. `?mode=creative` links straight to it.

Persona drives the palette (via `data-persona` on `<html>`), the page title and
the meta description. Sections with no data hide themselves, so Creative mode
reads as deliberate until `src/data/creative/samples.js` has entries.

## Content

All copy lives in `src/data/` — components read from `getContent(persona)` and
never hardcode content.

```
src/data/
  profile.js      identity, contact, links, CV path  (shared by both personas)
  tech/           experience · caseStudies · services · skills
  creative/       services · samples
```

To publish a new CV, overwrite `public/Resume_Shahid.pdf`; the path is
referenced once, in `profile.js`.

## Deploy

```bash
npm run deploy   # builds, then pushes dist/ to the gh-pages branch
```

## Scripts

| Script | Does |
| --- | --- |
| `dev` | Dev server |
| `build` | Production build (honours `VITE_PORTFOLIO`) |
| `preview` | Serve the built output |
| `lint` | ESLint, zero warnings tolerated |
| `deploy` | Build and publish to GitHub Pages |
