import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SocialIcon } from '../components/SocialIcon'
import { socialLinks } from '../data/profile'

export function NextSeason() {
  return (
    <section id="next" className="relative bg-base py-24 md:py-32 border-t border-base-hair overflow-hidden">
      <div className="absolute inset-0 bg-telemetry-grid [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)] opacity-60" />
      <Container className="relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-widest2 uppercase text-signal"
        >
          11 / 12 — Next Season
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 font-display text-3xl md:text-5xl font-semibold text-ink text-balance max-w-3xl mx-auto"
        >
          Continuing to build, solve, learn, and improve.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest2 uppercase text-ink-muted hover:text-signal transition-colors"
            >
              <SocialIcon icon={link.icon} className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
