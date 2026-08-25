import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import type { ProjectData } from '../types'

const fields: { key: keyof ProjectData; label: string }[] = [
  { key: 'problem', label: 'The Problem' },
  { key: 'objective', label: 'Objective' },
  { key: 'approach', label: 'Approach' },
  { key: 'implementation', label: 'Implementation' },
]

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectData | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start md:items-center justify-center p-0 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-base/90 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full md:max-w-3xl max-h-[100svh] md:max-h-[85vh] overflow-y-auto bg-base-panel border border-base-border md:rounded-sm"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-base-border bg-base-panel/95 backdrop-blur px-6 md:px-10 py-5">
              <div>
                <span className="font-mono text-xs text-signal">{project.index}</span>
                <h3 id="project-modal-title" className="font-display text-2xl font-semibold text-ink">
                  {project.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="text-ink-muted hover:text-signal transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <div className="px-6 md:px-10 py-8 space-y-8">
              {fields.map(({ key, label }) => (
                <div key={key}>
                  <h4 className="font-mono text-[11px] tracking-widest2 uppercase text-signal">
                    {label}
                  </h4>
                  <p className="mt-2 text-ink-muted leading-relaxed">{project[key] as string}</p>
                </div>
              ))}

              {project.technologies.length > 0 && (
                <div>
                  <h4 className="font-mono text-[11px] tracking-widest2 uppercase text-signal">
                    Technology
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-ink-muted border border-base-hair px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-mono text-[11px] tracking-widest2 uppercase text-signal">
                  Key Features
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-ink-muted leading-relaxed">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-dim" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-[11px] tracking-widest2 uppercase text-signal">
                  Outcome
                </h4>
                <p className="mt-2 text-ink-muted leading-relaxed">{project.outcome}</p>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-base-hair pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 border border-base-border text-ink font-mono text-xs tracking-widest2 uppercase px-5 py-3 hover:border-signal hover:text-signal transition-colors"
                >
                  <Github size={14} />
                  View GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 bg-signal text-base font-mono text-xs tracking-widest2 uppercase px-5 py-3 hover:bg-signal-soft transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
