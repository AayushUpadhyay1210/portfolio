import { sections } from '../data/sections'
import { useActiveSection } from '../hooks/useActiveSection'

export function LapRail() {
  const activeId = useActiveSection(sections.map((s) => s.id))

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3">
      {sections.map((s, i) => {
        const isActive = s.id === activeId
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center gap-3"
            aria-label={`Go to ${s.label}`}
            aria-current={isActive}
          >
            <span
              className={`font-mono text-[10px] tracking-widest2 uppercase transition-all duration-200 ${
                isActive
                  ? 'text-signal opacity-100 translate-x-0'
                  : 'text-ink-dim opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {String(i + 1).padStart(2, '0')} {s.short}
            </span>
            <span
              className={`h-px transition-all duration-300 ${
                isActive ? 'w-8 bg-signal shadow-signal' : 'w-4 bg-base-border group-hover:bg-ink-muted'
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}
