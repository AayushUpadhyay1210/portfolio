import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="relative bg-base py-24 md:py-32 border-t border-base-hair">
      <Container>
        <SectionHeader
          index="04"
          total="12"
          eyebrow="Skills"
          title="Performance Profile"
          description="The technologies, tools, and concepts that power the work I build."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-base-border bg-base-panel/60 p-6 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-signal">{group.code}</span>
                <span className="font-mono text-[10px] tracking-widest2 uppercase text-ink-dim border border-base-border px-2.5 py-1">
                  {group.note}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-ink-muted border border-base-hair bg-base/60 px-3 py-1.5 hover:border-signal/60 hover:text-ink transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
