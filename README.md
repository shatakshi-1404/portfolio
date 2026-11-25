# Shatakshi Prasad — Portfolio

Premium 3D portfolio for SDE + Applied AI roles.
React · TypeScript · Vite · Tailwind CSS · Three.js (React Three Fiber + Drei) · Framer Motion · Lucide.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview
```

Node 18+ is required.

## Before you deploy

1. **Resume** — `public/Shatakshi_Prasad_Resume.pdf` is currently a **placeholder page**. Overwrite it with your real PDF (same filename). The nav button downloads it and the hero button opens it. (Change the filename in `src/data/profile.ts` if you prefer another.)
2. **Open Graph image** — `public/og.png` is included and referenced from `index.html`. After you know your live URL, change `og:image` / `twitter:image` to the absolute URL (e.g. `https://your-site.vercel.app/og.png`) so link previews work on LinkedIn/Slack/X.
3. **Verify facts** — every fact (CGPA, links, project bullets, achievements) lives in `src/data/`. Edit there; no component changes needed.

## Deploy to Vercel

Push to GitHub, then "Import Project" in Vercel. The framework is auto-detected (Vite); `vercel.json` is included.

## Structure

```
src/
  components/      Navbar, Hero, EngineeringCore (3D), Stats, About, EngineeringProjects,
                   ProjectShowcase, AppliedAI, AINetwork, OpenSource, Skills, Achievements, Contact, Footer
  components/ui/   Reveal, SectionHeading, CountUp, CoreFallback, ErrorBoundary, CursorGlow, mockups/
  data/            profile.ts, projects.ts, skills.ts, achievements.ts, ai.ts
  hooks/           useActiveSection, useMediaQuery, useInViewport
  styles/          index.css
```

## Notes on design decisions

- **3D hero** uses procedural lighting (no HDR download), pauses rendering when off-screen, uses a lighter scene on phones/touch devices, and falls back to a CSS orb for `prefers-reduced-motion` or when WebGL is unavailable.
- **Project visuals** are original UI illustrations, labelled as such — not screenshots. Replace them with real screenshots by swapping the mockup component in `ProjectShowcase.tsx`.
- **Contact** uses `mailto:` + copy-to-clipboard. There is deliberately no form, since there is no backend to receive it.
- The Applied AI section is code-split (lazy loaded).
