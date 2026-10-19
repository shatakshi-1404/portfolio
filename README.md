# Shatakshi Prasad — Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide.

## Setup

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview
```

Requires Node.js 18 or newer.

## Editing content

All content lives in `src/data/content.ts`: projects, skills, experience,
open source, certifications, achievements and contact details.

- Add the MPOnline certificate URL to `experience.certificateUrl` (the button stays hidden until it is set).
- Add `og:image` and a canonical URL in `index.html` after deploying.

## Deploy

Push to GitHub and import the repo in Vercel (framework preset: Vite).
