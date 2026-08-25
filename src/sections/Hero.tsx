import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { profile, socialLinks } from '../data/profile'
import { Container } from '../components/Container'
import { TelemetryLines } from '../components/TelemetryLines'
import { SocialIcon } from '../components/SocialIcon'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const scrollToPerformance = () => {
    document.getElementById('performance')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-base pt-28 sm:pt-32 md:pt-36 pb-16"
    >
      <div className="absolute inset-0 bg-telemetry-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="absolute inset-x-0 top-1/3 h-[420px]">
        <TelemetryLines />
      </div>
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 font-mono text-xs tracking-widest2 uppercase text-ink-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-signal" />
          Status: Active — Building
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-6 font-display font-semibold leading-[0.95] tracking-tight text-ink text-balance text-[13vw] sm:text-[10vw] md:text-[7.2vw] lg:text-[6.4rem]"
        >
          Aayush
          <br />
          Upadhyay
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span className="font-mono text-sm md:text-base tracking-widest2 uppercase text-signal">
            Tech Athlete
          </span>
          <span className="hidden sm:block h-4 w-px bg-base-border" />
          <span className="font-mono text-xs md:text-sm tracking-widest2 uppercase text-ink-dim">
            {profile.descriptor}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="mt-8 max-w-xl font-display text-2xl md:text-3xl font-medium text-ink text-balance"
        >
          Build. Train. Compete. Improve.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease }}
          className="mt-4 max-w-lg text-ink-muted leading-relaxed"
        >
          {profile.supportingLine}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={scrollToPerformance}
            className="inline-flex items-center gap-2 bg-signal text-base font-mono text-xs tracking-widest2 uppercase px-6 py-3.5 shadow-signal hover:bg-signal-soft hover:-translate-y-0.5 transition-all duration-200"
          >
            View Performance
            <ArrowDown size={14} />
          </button>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 border border-base-border text-ink font-mono text-xs tracking-widest2 uppercase px-6 py-3.5 hover:border-signal hover:text-signal transition-colors duration-200"
          >
            Download Resume
            <Download size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-14 flex items-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.label}
              className="text-ink-dim hover:text-signal transition-colors"
            >
              <SocialIcon icon={link.icon} className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
