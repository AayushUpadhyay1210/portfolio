import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import type { StatItem } from '../types'

function formatFromTemplate(template: string, current: number): string {
  const match = template.match(/^(\d+(?:\.\d+)?)/)
  if (!match) return template
  const digits = match[1]
  const decimals = digits.includes('.') ? digits.split('.')[1].length : 0
  const padLength = !digits.includes('.') ? digits.length : 0
  let out = current.toFixed(decimals)
  if (padLength > 1) out = out.padStart(padLength, '0')
  return out + template.slice(digits.length)
}

export function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? stat.value : formatFromTemplate(stat.value, 0))

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setDisplay(stat.value)
      return
    }
    const match = stat.value.match(/^(\d+(?:\.\d+)?)/)
    const target = match ? parseFloat(match[1]) : 0
    const controls = animate(0, target, {
      duration: 1.4,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(formatFromTemplate(stat.value, v)),
    })
    return () => controls.stop()
  }, [inView, reduce, stat.value, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border border-base-border bg-base-panel/60 p-6 md:p-8"
    >
      <div className="font-mono text-4xl md:text-5xl font-semibold text-ink tabular-nums">
        {display}
        {stat.suffix && <span className="text-ink-dim text-2xl md:text-3xl">{stat.suffix}</span>}
      </div>
      <div className="mt-3 font-mono text-xs tracking-widest2 uppercase text-ink-muted">
        {stat.label}
      </div>
      <div className="mt-5 h-px w-full bg-base-border relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-signal"
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}
