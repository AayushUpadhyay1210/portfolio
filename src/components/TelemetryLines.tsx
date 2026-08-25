import { motion, useReducedMotion } from 'framer-motion'

export function TelemetryLines() {
  const reduce = useReducedMotion()

  const paths = [
    'M0,180 C120,140 200,220 320,160 C440,100 520,200 640,150 C760,100 880,180 1000,140',
    'M0,260 C140,300 240,220 360,260 C480,300 600,210 720,250 C840,290 920,220 1000,260',
    'M0,90 C100,60 220,110 340,80 C460,50 560,100 680,70 C800,40 900,90 1000,60',
  ]

  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.35]"
      viewBox="0 0 1000 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke={i === 1 ? '#22E0C4' : '#FF5A1F'}
          strokeWidth={1}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: i === 1 ? 0.35 : 0.55 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 2.2, delay: i * 0.25, ease: [0.22, 1, 0.36, 1] }
          }
        />
      ))}
    </svg>
  )
}
