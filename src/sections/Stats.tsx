import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { StatCard } from '../components/StatCard'
import { stats } from '../data/stats'

export function Stats() {
  return (
    <section id="performance" className="relative bg-base py-24 md:py-32 border-t border-base-hair">
      <Container>
        <SectionHeader index="02" total="12" eyebrow="Performance" title="Career Stats" />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
