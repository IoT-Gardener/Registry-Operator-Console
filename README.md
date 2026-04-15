# Registry Operator Console

> *"If it's bolted down, we've got a torch. If it's encrypted, we've got a console. If it's Machiavelli's, it's already ours — they just don't know it yet."*
> — Gravel Gault, unsourced

Rust & Ruin Registry field toolkit. Operator-side utility for lancers running contracts against Machiavelli Corp assets on Gotia VII.

---

## Out of character

Companion web app for the **Machiavelli Heist** — a cyberpunk escape-room event set in the Gotia VII Lancer TTRPG setting. 

## Stack

- **Astro** — static-first, MDX-native, React islands for interactive bits.
- **Tailwind CSS** — custom cyberpunk theme (neon palette, monospace, CRT utilities).
- **MDX** — bulletins and lore written as Markdown with embeddable components.
- **GitHub Pages** — deployed via GitHub Actions.

## Status

Phase 1 scaffolded. Countdown, intel feed, briefing, dossier, and locked toolkit stub all live.

## Setup

Requires Node 22+. If using `nvm`: `nvm use 22`.

```bash
npm install
npm run dev       # local dev server at http://localhost:4321/Registry-Operator-Console/
npm run build     # static build → ./dist
npm run preview   # serve the production build locally
```

## Project Layout

```
src/
  components/   React islands (e.g. Countdown)
  content/
    bulletins/  MDX intel drops (one file per bulletin)
  layouts/      Shared Astro layout (header, footer, CRT overlay)
  pages/        Routed pages
    bulletins/  Feed index + dynamic [slug]
  styles/       Tailwind entry + cyberpunk theme
  content.config.ts  Bulletin collection schema
astro.config.mjs    Site + base path + integrations
.github/workflows/deploy.yml  Pages deploy on push to main
```

## Writing a Bulletin

Create `src/content/bulletins/<slug>.mdx` with frontmatter:

```mdx
---
title: "Bulletin Title"
date: 2026-05-01
summary: "One-line hook for the feed list."
classification: "public"  # public | restricted | eyes-only
---

Body in Markdown. Interactive components can be imported and dropped inline.
```

Commit + push. GitHub Actions builds and deploys.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the static site and publishes to GitHub Pages. Enable Pages in repo settings → Pages → Source: **GitHub Actions**.

Live URL: `https://iot-gardener.github.io/Registry-Operator-Console/`

---

*Unauthorised access to Machiavelli Corp systems is a Class-3 offence under the Ash Accords. Prosecution extends to affiliates, operators, and anyone caught reading this disclaimer. The Registry suggests you read faster.*
