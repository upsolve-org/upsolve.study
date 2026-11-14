import { useCallback, useMemo, useState } from "react"
import { CURRENT_TERM } from "./constants"
import { COMPETITION_WINS } from "../../../data/competitions"
import { filterWins } from "../../../domain/filter-wins"
import type { LightboxImage, TrackFilter } from "../../../domain/competition"
import { CompetitionCard } from "./competition-card"
import { CompetitionFilters } from "./competition-filters"
import { CompetitionsEmptyState } from "./competitions-empty-state"
import { ImageLightbox } from "./image-lightbox"

interface CompetitionsSectionProps {
  selectedTrack: TrackFilter
  onTrackChange: (track: TrackFilter) => void
}

export function CompetitionsSection({
  selectedTrack,
  onTrackChange,
}: CompetitionsSectionProps) {
  const [query, setQuery] = useState("")
  const [activeImageByWin, setActiveImageByWin] = useState<
    Record<string, number>
  >({})
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(
    null,
  )
  const closeLightbox = useCallback(() => setLightboxImage(null), [])

  const filteredWins = useMemo(
    () => filterWins(COMPETITION_WINS, selectedTrack, query),
    [selectedTrack, query],
  )

  function resetFilters() {
    onTrackChange("All")
    setQuery("")
  }

  return (
    <section id="wins" className="scroll-mt-20 pb-16 sm:pb-20">
      <div className="flex flex-col gap-5 pb-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-xl font-semibold tracking-[-0.02em]">
            Competition news
          </h2>
          <span className="text-xs tabular-nums text-muted-foreground">
            {CURRENT_TERM} · Showing {filteredWins.length} of{" "}
            {COMPETITION_WINS.length}
          </span>
        </div>

        <CompetitionFilters
          selectedTrack={selectedTrack}
          onTrackChange={onTrackChange}
          query={query}
          onQueryChange={setQuery}
        />
      </div>

      {filteredWins.length === 0 ? (
        <CompetitionsEmptyState onReset={resetFilters} />
      ) : (
        <div className="flex flex-col gap-5">
          {filteredWins.map((win) => (
            <CompetitionCard
              key={win.id}
              win={win}
              activeImageIndex={activeImageByWin[win.id] ?? 0}
              onSelectImage={(idx) =>
                setActiveImageByWin((prev) => ({ ...prev, [win.id]: idx }))
              }
              onOpenImage={(image) =>
                setLightboxImage({
                  src: image.src,
                  label: image.label,
                  competition: win.competition,
                })
              }
            />
          ))}
        </div>
      )}

      {lightboxImage ? (
        <ImageLightbox image={lightboxImage} onClose={closeLightbox} />
      ) : null}
    </section>
  )
}
