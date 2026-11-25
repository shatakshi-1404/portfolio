import { MotionConfig } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { EngineeringProjects } from './components/EngineeringProjects'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { OpenSource } from './components/OpenSource'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'
import { CursorGlow } from './components/ui/CursorGlow'

// Code-split the heavier interactive section.
const AppliedAI = lazy(() => import('./components/AppliedAI'))

function SectionLoader() {
  return (
    <div className="grid min-h-[480px] place-items-center" role="status" aria-label="Loading Applied AI section">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-cyan" />
    </div>
  )
}

export default function App() {
  return (
    // "user" honours prefers-reduced-motion for every transform animation.
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <CursorGlow />
      <Navbar />
      <main className="relative z-[2] overflow-x-clip">
        <Hero />
        <Stats />
        <About />
        <EngineeringProjects />
        {/* Stable #ai wrapper so scroll-spy keeps working after the lazy chunk swaps in. */}
        <div id="ai">
          <Suspense fallback={<SectionLoader />}>
            <AppliedAI />
          </Suspense>
        </div>
        <OpenSource />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
