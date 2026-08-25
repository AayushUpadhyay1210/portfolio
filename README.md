# Aayush Upadhyay — Tech Athlete Portfolio

A dark, data-driven personal portfolio built around the concept **BUILD. TRAIN. COMPETE. IMPROVE.** —
a premium sports-performance-analytics visual language applied to a software engineering portfolio.

All personal content (education, projects, skills, certifications, events, links) is sourced directly
from the uploaded resume and Google Cloud certificate. Nothing has been invented or exaggerated.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

No backend, no database — a static frontend suitable for Vercel.

## Project Structure

```
src/
  components/   Reusable UI primitives (nav, cards, modals, buttons, icons)
  sections/     One file per page section (Hero, Stats, Projects, Contact, ...)
  data/         All personal content — edit these files to update the site
  hooks/        Scroll progress + active-section tracking (powers the nav's telemetry readout)
  types/        Shared TypeScript interfaces
public/assets/  Resume PDF, certificate PDF, favicon
```

To update content later — new project, new certification, changed skills — edit the relevant
file in `src/data/`. No component code needs to change for routine content updates.

## Run Locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The site will be available at the local URL Vite prints (typically `http://localhost:5173`).

To type-check and build a production bundle:

```bash
npm run build
npm run preview
```

> Note: dependencies were not installed or build-verified in the environment this project was
> generated in (no network access there). Run `npm install` locally before your first `npm run dev`
> or `npm run build` — if anything surfaces a type or lint error, it will be a small, easily fixable
> issue rather than a structural one, since the code follows standard Vite + React + TS conventions
> throughout.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel auto-detects Vite; framework preset "Vite", build command `npm run build`,
output directory `dist`.

**Option B — Git + Vercel dashboard**
1. Push this project to a GitHub repository.
2. In the Vercel dashboard, "Add New Project" → import the repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

No environment variables are required.

## Content Notes / Placeholders

- **"What I Learned"** in each project case study (Game Film → Case Study) is left as a short
  placeholder, since the resume doesn't include personal reflections on each project. Fill these in
  directly in `src/data/projects.ts` (`learned` field) whenever you're ready.
- **MineGuard AI** has no explicit tech stack listed on the resume, so no technology tags are shown
  for it (the `technologies` array in `src/data/projects.ts` is intentionally empty). Add the actual
  stack there if you'd like it displayed.
- All other content — stats, skills, education, competitions, certification fields, and every link —
  is taken verbatim from the uploaded resume and Google Cloud certificate PDFs.

## Assumptions Made

- The resume's percentile academic figures (90%, 96.8%) and CGPA (9.55/10) are presented as-is,
  without converting to a different scale.
- "Featured Projects: 02" and "Cloud Certification: 01" in the stats section are counts of the
  projects/certifications actually listed on the resume — not independently sourced metrics.
- The Google Cloud certificate's "Issued Date" (Aug 23, 2026) is used as printed on the uploaded
  certificate PDF.
