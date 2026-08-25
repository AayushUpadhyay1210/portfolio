import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Download, Eye, ShieldCheck } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { CertificateModal } from '../components/CertificateModal'
import { certification } from '../data/certification'
import { profile } from '../data/profile'

const meta = [
  { label: 'Issued', value: certification.issuedDate },
  { label: 'Expires', value: certification.expirationDate },
  { label: 'Series ID', value: certification.seriesId },
  { label: 'Certificate ID', value: certification.certificateId },
]

export function Certification() {
  const [viewerOpen, setViewerOpen] = useState(false)

  return (
    <section id="trophy" className="relative bg-base py-24 md:py-32 border-t border-base-hair">
      <Container>
        <SectionHeader index="08" total="12" eyebrow="Certification" title="Certifications" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mt-14 border border-base-border bg-base-panel/60 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center border border-signal/50 text-signal">
                  <Award size={20} />
                </span>
                <div>
                  <p className="font-mono text-[10px] tracking-widest2 uppercase text-ink-dim">
                    {certification.issuer}
                  </p>
                  <p className="font-mono text-xs tracking-widest2 uppercase text-signal">
                    {certification.title}
                  </p>
                </div>
              </div>

              <h3 className="mt-6 font-display text-3xl md:text-4xl font-semibold text-ink">
                {certification.role}
              </h3>
              <p className="mt-2 text-ink-muted">Certified As: {certification.name}</p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {meta.map((row) => (
                  <div key={row.label}>
                    <p className="font-mono text-[10px] tracking-widest2 uppercase text-ink-dim">
                      {row.label}
                    </p>
                    <p className="mt-1.5 font-mono text-sm text-ink break-all">{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 bg-signal text-base font-mono text-xs tracking-widest2 uppercase px-5 py-3.5 hover:bg-signal-soft transition-colors"
                >
                  <ShieldCheck size={14} />
                  Verify Credential
                </a>
                <button
                  onClick={() => setViewerOpen(true)}
                  className="inline-flex items-center gap-2 border border-base-border text-ink font-mono text-xs tracking-widest2 uppercase px-5 py-3.5 hover:border-signal hover:text-signal transition-colors"
                >
                  <Eye size={14} />
                  View Certificate
                </button>
                <a
                  href={profile.certificateFile}
                  download
                  className="inline-flex items-center gap-2 border border-base-border text-ink font-mono text-xs tracking-widest2 uppercase px-5 py-3.5 hover:border-signal hover:text-signal transition-colors"
                >
                  <Download size={14} />
                  Download Certificate
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-base-border bg-telemetry-grid flex items-center justify-center p-10">
              <div className="h-28 w-28 rounded-full border-2 border-signal/60 flex items-center justify-center relative">
                <div className="absolute inset-2 rounded-full border border-telemetry/40" />
                <Award size={40} className="text-signal" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      <CertificateModal
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        fileUrl={profile.certificateFile}
      />
    </section>
  )
}
