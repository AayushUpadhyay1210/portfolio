import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { SocialIcon } from '../components/SocialIcon'
import { profile, socialLinks } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="relative bg-base py-24 md:py-32 border-t border-base-hair">
      <Container>
        <SectionHeader index="12" total="12" eyebrow="Contact" title="Join The Team" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-xl text-lg text-ink-muted leading-relaxed"
        >
          Interested in opportunities, collaboration, or building something together?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between gap-4 border border-base-border p-6 hover:border-signal/60 transition-colors"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center border border-base-border text-ink-muted group-hover:border-signal group-hover:text-signal transition-colors">
                <Mail size={18} />
              </span>
              <span>
                <span className="block font-mono text-[10px] tracking-widest2 uppercase text-ink-dim">
                  Email
                </span>
                <span className="block text-ink group-hover:text-signal transition-colors break-all">
                  {profile.email}
                </span>
              </span>
            </span>
            <ArrowUpRight size={16} className="text-ink-dim group-hover:text-signal transition-colors shrink-0" />
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="group flex items-center justify-between gap-4 border border-base-border p-6 hover:border-signal/60 transition-colors"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center border border-base-border text-ink-muted group-hover:border-signal group-hover:text-signal transition-colors">
                <Phone size={18} />
              </span>
              <span>
                <span className="block font-mono text-[10px] tracking-widest2 uppercase text-ink-dim">
                  Phone
                </span>
                <span className="block text-ink group-hover:text-signal transition-colors">
                  {profile.phone}
                </span>
              </span>
            </span>
            <ArrowUpRight size={16} className="text-ink-dim group-hover:text-signal transition-colors shrink-0" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-wrap gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex flex-1 min-w-[160px] items-center justify-between gap-3 border border-base-border px-6 py-5 text-ink hover:border-signal hover:text-signal transition-colors"
            >
              <span className="flex items-center gap-3 font-mono text-xs tracking-widest2 uppercase">
                <SocialIcon icon={link.icon} className="h-4 w-4" />
                {link.label}
              </span>
              <ArrowUpRight size={14} />
            </a>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
