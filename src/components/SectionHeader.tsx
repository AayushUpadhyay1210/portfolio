import { motion } from 'framer-motion'

export function SectionHeader({
  index,
  total,
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  index: string
  total: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}
    >
      <div
        className={`flex items-center gap-3 font-mono text-xs tracking-widest2 text-ink-dim ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="text-signal">
          {index} / {total}
        </span>
        <span className="h-px w-8 bg-base-border" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-muted text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  )
}
