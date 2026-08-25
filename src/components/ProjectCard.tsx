import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import type { ProjectData } from '../types'

export function ProjectCard({
  project,
  onOpen,
}: {
  project: ProjectData
  onOpen: () => void
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="group border border-base-border bg-base-panel/60 flex flex-col"
    >
      <div className="flex items-center justify-between px-6 md:px-8 pt-6 md:pt-8">
        <span className="font-mono text-xs text-signal">{project.index}</span>
        <span
          className={`font-mono text-[10px] tracking-widest2 uppercase px-2.5 py-1 border ${
            project.status === 'Deployed'
              ? 'border-telemetry/50 text-telemetry'
              : 'border-base-border text-ink-dim'
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="px-6 md:px-8 pt-4">
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
          {project.name}
        </h3>
        <p className="mt-1.5 font-mono text-xs tracking-widest2 uppercase text-ink-dim">
          {project.tagline}
        </p>
        <p className="mt-5 text-ink-muted leading-relaxed">{project.objective}</p>

        {project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-ink-muted border border-base-hair px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 px-6 md:px-8 pb-6 md:pb-8">
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest2 uppercase text-ink hover:text-signal transition-colors"
        >
          Case Study
          <ArrowUpRight size={14} />
        </button>
        <span className="h-4 w-px bg-base-border" />
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest2 uppercase text-ink-muted hover:text-ink transition-colors"
        >
          <Github size={14} />
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest2 uppercase text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowUpRight size={14} />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  )
}
