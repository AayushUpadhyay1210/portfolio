import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { trainingFocus } from '../data/training'

export function TrainingCamp() {
  return (
    <section id="training" className="relative bg-base py-24 md:py-32 border-t border-base-hair">
      <Container>
        <SectionHeader
          index="10"
          total="12"
          eyebrow="In Progress"
          title="Training Camp"
          description="Where the current reps are going."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {trainingFocus.map((item, i) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-base-border p-7 md:p-8"
            >
              <span className="font-mono text-xs text-signal border border-signal/40 h-7 w-7 flex items-center justify-center">
                {item.code}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-ink-muted leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
