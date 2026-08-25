import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { sections } from '../data/sections'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollProgress } from '../hooks/useScrollProgress'

const NAV_LINKS = ['profile', 'skills', 'projects', 'history', 'trophy', 'contact']

export function Navigation() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(sections.map((s) => s.id))
  const progress = useScrollProgress()
  const activeIndex = sections.findIndex((s) => s.id === activeId)
  const activeMeta = sections[activeIndex] ?? sections[0]

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-base/85 backdrop-blur-md border-b border-base-hair">
        <div className="mx-auto max-w-content px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 group"
            aria-label="Back to top"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-signal/50 text-signal font-mono text-xs font-semibold group-hover:bg-signal group-hover:text-base transition-colors">
              AU
            </span>
            <span className="hidden sm:block font-display text-sm tracking-wide text-ink">
              Aayush Upadhyay
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((id) => {
              const meta = sections.find((s) => s.id === id)!
              const isActive = activeId === id
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`font-mono text-xs tracking-widest2 uppercase transition-colors ${
                    isActive ? 'text-signal' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {meta.short}
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={profile.resumeFile}
              download
              className="hidden sm:inline-flex items-center gap-2 font-mono text-xs tracking-widest2 uppercase border border-base-border px-4 py-2.5 text-ink hover:border-signal hover:text-signal transition-colors"
            >
              Resume
            </a>
            <button
              className="md:hidden text-ink"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Telemetry readout strip — live section index + scroll progress */}
        <div className="h-px bg-base-hair relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-signal shadow-signal"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear', duration: 0.1 }}
          />
        </div>
        <div className="mx-auto max-w-content px-6 md:px-10 py-1.5 flex items-center justify-between font-mono text-[10px] tracking-widest2 uppercase text-ink-dim">
          <span>
            SECTION {String(activeIndex + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
            <span className="hidden sm:inline text-ink-muted"> — {activeMeta.label}</span>
          </span>
          <span className="tabular-nums">{Math.round(progress)}%</span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-base border-b border-base-hair px-6 py-6 flex flex-col gap-5"
          >
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left font-display text-lg ${
                  activeId === s.id ? 'text-signal' : 'text-ink'
                }`}
              >
                {s.label}
              </button>
            ))}
            <a
              href={profile.resumeFile}
              download
              className="mt-2 inline-flex w-fit items-center gap-2 font-mono text-xs tracking-widest2 uppercase border border-signal text-signal px-4 py-3"
            >
              Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
