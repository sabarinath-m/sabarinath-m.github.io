# Portfolio

Sabarinath M's personal portfolio site — a single-page React app covering experience,
company case studies, personal projects (React, React Native, Golang, Flutter), skills,
and education.

## Stack

React 19 + TypeScript, Vite, Tailwind CSS v4, Framer Motion for animation, lucide-react
for icons.

## Updating content

Everything on the page is driven by one file: [`src/data/profile.ts`](src/data/profile.ts).
Components under `src/components/` render this data — they don't hardcode copy. To update
anything (a bullet point, a project link, a new case study, a stat), edit `profile.ts`;
no component changes needed unless you're adding a new *kind* of content.

- `profile` — name, rotating hero titles, tagline, contact links, hero stats
- `experience` — the current role and its highlight bullets
- `caseStudies` — company product case studies shown under Experience
- `projectTracks` — personal projects, grouped by stack (React / React Native / Golang / Flutter)
- `skillGroups` — skill chips grouped by category
- `education` — degree + the college placement-cell project achievement

## Running it

```bash
npm install
npm run dev       # dev server
npm run build     # typecheck + production build
npm run lint      # oxlint
```

## Notes

- lucide-react in this project's installed version doesn't ship brand/logo icons
  (GitHub, LinkedIn) — those are small inline SVGs in
  [`src/components/BrandIcons.tsx`](src/components/BrandIcons.tsx) instead.
- Section reveal-on-scroll animations use Framer Motion's `whileInView`; the rotating
  hero role text and nav underline use `layoutId`/`AnimatePresence`. All respect normal
  browser tab visibility — animations resume as expected once a backgrounded tab regains
  focus.
