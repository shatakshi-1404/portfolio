import { projects } from '../data/projects'
import { ProjectShowcase } from './ProjectShowcase'
import { SectionHeading } from './ui/SectionHeading'

export function EngineeringProjects() {
  return (
    <section id="engineering" aria-labelledby="engineering-title" className="relative overflow-x-clip pt-24 sm:pt-32">
      <div className="container-x">
        <SectionHeading
          id="engineering-title"
          eyebrow="Engineering"
          title={
            <>
              Engineering systems that work <span className="text-gradient">beyond the demo.</span>
            </>
          }
          description="Production-oriented applications designed around architecture, reliability, security and real-world workflows."
        />
        <div className="mt-6">
          {projects.map((p, i) => (
            <ProjectShowcase key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
