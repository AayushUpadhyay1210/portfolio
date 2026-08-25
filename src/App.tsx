import { Navigation } from './components/Navigation'
import { LapRail } from './components/LapRail'
import { Hero } from './sections/Hero'
import { Stats } from './sections/Stats'
import { PlayerProfile } from './sections/PlayerProfile'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Competition } from './sections/Competition'
import { Education } from './sections/Education'
import { Certification } from './sections/Certification'
import { Highlights } from './sections/Highlights'
import { TrainingCamp } from './sections/TrainingCamp'
import { NextSeason } from './sections/NextSeason'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="bg-base min-h-screen font-body antialiased">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-signal focus:text-base focus:px-4 focus:py-2 font-mono text-xs uppercase tracking-widest2"
      >
        Skip to content
      </a>

      <Navigation />
      <LapRail />

      <main>
        <Hero />
        <Stats />
        <PlayerProfile />
        <Skills />
        <Projects />
        <Competition />
        <Education />
        <Certification />
        <Highlights />
        <TrainingCamp />
        <NextSeason />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
