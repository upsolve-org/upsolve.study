import { Search, X } from "lucide-react"
import { TRACK_FILTERS } from "./constants"
import type { TrackFilter } from "../../../domain/competition"

interface CompetitionFiltersProps {
  selectedTrack: TrackFilter
  onTrackChange: (track: TrackFilter) => void
  query: string
  onQueryChange: (query: string) => void
}

export function CompetitionFilters({
  selectedTrack,
  onTrackChange,
  query,
  onQueryChange,
}: CompetitionFiltersProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between pt-2">
      {/* Hermes colon-bracket tab strip */}
      <div
        role="tablist"
        aria-label="Filter competition dispatches by track"
        className="flex flex-wrap items-center gap-1.5"
      >
        {TRACK_FILTERS.map((filter) => {
          const active = selectedTrack === filter.value
          return (
            <button
              key={filter.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onTrackChange(filter.value)}
              className={`hw-mono text-xs px-3 py-2 cursor-pointer transition-colors duration-150 hover:duration-0 border ${
                active
                  ? "bg-[var(--surface-panel-ink)] text-[var(--surface-panel-bg)] border-[var(--surface-panel-ink)]"
                  : "bg-[var(--surface-panel-well)] text-[var(--surface-panel-ink)] border-transparent hover:border-[var(--surface-panel-line)]"
              }`}
            >
              <span className={active ? "opacity-90" : "opacity-40"}>:</span>
              {filter.label}
              <span className={active ? "opacity-90" : "opacity-40"}>:</span>
            </button>
          )
        })}
      </div>

      {/* Hermes canonical monospace search field */}
      <div className="relative w-full md:w-72">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[var(--surface-panel-muted)]" />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="SEARCH EVENT, TEAM, GRANT..."
          aria-label="Filter competition dispatches"
          className="w-full h-9 pl-9 pr-8 bg-[var(--surface-panel-card)] border border-[var(--surface-panel-solid-line)] text-[var(--surface-panel-ink)] placeholder:text-[var(--surface-panel-muted)]/60 font-mono text-xs tracking-[0.04em] focus-visible:outline-2 focus-visible:outline-[var(--brand-green)]"
        />
        {query ? (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-[var(--surface-panel-muted)] hover:text-[var(--surface-panel-ink)] cursor-pointer"
          >
            <X className="size-3.5" />
          </button>
        ) : null}
      </div>
    </div>
  )
}
