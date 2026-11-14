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
    <section
      id="wins"
      aria-label="Competition Dispatches"
      className="scroll-mt-20 py-16 md:py-24"
    >
      {/* Hermes Editorial Stage Heading */}
      <div className="flex flex-col gap-6 pb-8 border-b hw-dotted-rule">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="hw-mono text-xs text-[var(--brand-green)] m-0">
              // DISPATCHES · {CURRENT_TERM}
            </p>
            <h2 className="hw-gothic text-[length:var(--hw-teams-display)] font-normal leading-[0.95] text-[var(--surface-panel-ink)] m-0">
              Competition Wins &amp; Finalists
            </h2>
          </div>

          <span className="hw-mono text-xs tabular-nums text-[var(--surface-panel-muted)]">
            [SHOWING {filteredWins.length} OF {COMPETITION_WINS.length} DISPATCHES]
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
        <div className="flex flex-col divide-y hw-dotted-rule border-b hw-dotted-rule">
          {filteredWins.map((win, index) => (
            <CompetitionCard
              key={win.id}
              index={index + 1}
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
