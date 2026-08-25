import { Github, Linkedin, Mail } from 'lucide-react'
import { Container } from '../components/Container'
import { profile } from '../data/profile'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative bg-base border-t border-base-hair py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-display text-xl font-semibold text-ink">{profile.name}</p>
            <p className="font-mono text-xs tracking-widest2 uppercase text-signal mt-1">
              Tech Athlete
            </p>
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-ink-dim mt-3">
              Build. Train. Compete. Improve.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/AayushUpadhyay1210"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="text-ink-dim hover:text-signal transition-colors"
            >
              <Github size={18} strokeWidth={1.75} />
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-upadhyay-ba4994320/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-ink-dim hover:text-signal transition-colors"
            >
              <Linkedin size={18} strokeWidth={1.75} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-ink-dim hover:text-signal transition-colors"
            >
              <Mail size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-base-hair flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-ink-dim">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-ink-dim">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  )
}
