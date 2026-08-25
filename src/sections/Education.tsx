import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { education } from '../data/education'

export function Education() {
  return (
    <section id="history" className="relative bg-base py-24 md:py-32 border-t border-base-hair">
      <Container>
        <SectionHeader index="07" total="12" eyebrow="Education" title="Season History" />

        <div className="mt-14 relative">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-base-border" />
          <div className="space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-8 md:pl-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-signal bg-base" />

                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-ink-dim">{item.period}</span>
                </div>

                <div className="md:col-span-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-ink-muted">
                    {item.institution}
                    {item.board ? ` · ${item.board}` : ''}
                  </p>
                  <p className="mt-1 font-mono text-xs tracking-widest2 uppercase text-ink-dim">
                    {item.detail}
                  </p>
                </div>

                <div className="md:col-span-4 md:text-right">
                  <div className="font-mono text-3xl font-semibold text-signal tabular-nums">
                    {item.metric}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest2 uppercase text-ink-dim">
                    {item.metricLabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
