import { useState } from "react"
import type { TrackFilter } from "../domain/competition"
import type { Track } from "../domain/track"
import { CompetitionsSection } from "./components/competitions/competitions-section"
import { InternshipsSection } from "./components/internships/internships-section"
import { TracksSection } from "./components/tracks/tracks-section"
import { HeroSection } from "./components/hero/hero-section"

export function HomePage() {
  const [selectedTrack, setSelectedTrack] = useState<TrackFilter>("All")

  function handleSelectTrack(track: Track) {
    setSelectedTrack(track)
    document
      .getElementById("wins")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main id="top" className="w-full">
      {/* Stage A: Brand Dark (#202020) Hero & Disciplines */}
      <div className="mx-auto w-full max-w-[calc(var(--hw-teams-col)+2*var(--hw-teams-pad-x))] px-[var(--hw-teams-pad-x)]">
        <HeroSection />
        <TracksSection onSelectTrack={handleSelectTrack} />
      </div>

      {/* Stage B: High-Craft Editorial Stage (Paper / Retunable to Dark) */}
      <div className="hw-stage-panel relative w-full border-t border-[var(--hermes-stroke)]">
        <div className="mx-auto w-full max-w-[calc(var(--hw-teams-col)+2*var(--hw-teams-pad-x))] px-[var(--hw-teams-pad-x)]">
          <CompetitionsSection
            selectedTrack={selectedTrack}
            onTrackChange={setSelectedTrack}
          />
          <InternshipsSection />
        </div>
      </div>
    </main>
  )
}
