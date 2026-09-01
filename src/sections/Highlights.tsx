import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { socialLinks } from '../data/profile'

const leetcode = socialLinks.find((l) => l.icon === 'leetcode')!

export function Highlights() {
  return (
    <section id="highlights" className="relative bg-base py-24 md:py-32 border-t border-base-hair">
      <Container>
        <SectionHeader index="09" total="12" eyebrow="Highlights" title="Career Highlights" />

        <motion.a
          href={leetcode.href}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mt-14 group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border border-base-border bg-base-panel/60 p-8 md:p-12 hover:border-signal/60 transition-colors"
        >
          <div>
            <p className="font-mono text-xs tracking-widest2 uppercase text-ink-dim">
              Problem Solving
            </p>
            <p className="mt-3 font-mono text-5xl md:text-6xl font-semibold text-ink tabular-nums group-hover:text-signal transition-colors">
              200+
            </p>
            <p className="mt-2 text-ink-muted">Problems solved on LeetCode</p>
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest2 uppercase text-ink group-hover:text-signal transition-colors">
            View Profile
            <ArrowUpRight size={16} />
          </span>
        </motion.a>
      </Container>
    </section>
  )
}
