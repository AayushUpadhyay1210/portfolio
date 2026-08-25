import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { competitions } from '../data/competitions'

export function Competition() {
  return (
    <section id="competition" className="relative bg-base py-24 md:py-32 border-t border-base-hair">
      <Container>
        <SectionHeader
          index="06"
          total="12"
          eyebrow="Events"
          title="Competition Record"
          description="A log of the events entered — coding contests, hackathons, and workshops."
        />

        <div className="mt-14 border-t border-base-hair">
          {competitions.map((event, i) => (
            <motion.div
              key={event.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-7 border-b border-base-hair group"
            >
              <div className="md:col-span-2 flex items-center gap-3">
                <span className="font-mono text-xs text-ink-dim">{event.code}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-xl font-semibold text-ink group-hover:text-signal transition-colors">
                  {event.name}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-ink-muted leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
