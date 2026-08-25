import { useState } from 'react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { projects } from '../data/projects'
import type { ProjectData } from '../types'

export function Projects() {
  const [active, setActive] = useState<ProjectData | null>(null)

  return (
    <section id="projects" className="relative bg-base py-24 md:py-32 border-t border-base-hair">
      <Container>
        <SectionHeader
          index="05"
          total="12"
          eyebrow="Projects"
          title="Featured Builds"
          description="Selected work — what was built, how it works, and what it solves."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setActive(project)} />
          ))}
        </div>
      </Container>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
