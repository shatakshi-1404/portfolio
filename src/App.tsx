import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import type { Project } from './data/content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import OpenSource from './components/OpenSource';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects onOpen={setSelected} />
        <OpenSource />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <FloatingControls />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </MotionConfig>
  );
}
