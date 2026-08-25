import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { profile } from '../data/profile'

const infoRows = [
  { label: 'Current Status', value: profile.status },
  { label: 'Institution', value: profile.institution },
  { label: 'Specialization', value: profile.specialization },
  { label: 'CGPA', value: profile.cgpa },
  { label: 'Expected Graduation', value: profile.expectedGraduation },
]

export function PlayerProfile() {
  return (
    <section id="profile" className="relative bg-base py-24 md:py-32 border-t border-base-hair">
      <Container>
        <SectionHeader index="03" total="12" eyebrow="About" title="Player Profile" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-xl md:text-2xl font-display font-medium text-ink leading-snug text-balance">
              {profile.summary}
            </p>
            <p className="mt-6 text-ink-muted leading-relaxed max-w-xl">
              Balancing coursework with independent projects and competitive practice —
              treating each as a rep toward the same goal: building software that works, and
              understanding why it works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 border border-base-border bg-base-panel/60"
          >
            <div className="px-6 py-4 border-b border-base-border font-mono text-[10px] tracking-widest2 uppercase text-ink-dim">
              Profile Sheet
            </div>
            <dl>
              {infoRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-baseline justify-between gap-4 px-6 py-4 ${
                    i !== infoRows.length - 1 ? 'border-b border-base-hair' : ''
                  }`}
                >
                  <dt className="font-mono text-[11px] tracking-widest2 uppercase text-ink-dim">
                    {row.label}
                  </dt>
                  <dd className="text-right font-display text-ink font-medium">{row.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
