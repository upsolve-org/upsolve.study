import { Search, X } from "lucide-react"
import { Input } from "@/core/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/core/components/ui/tabs"
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
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Tabs
        value={selectedTrack}
        onValueChange={(value) => onTrackChange(value as TrackFilter)}
      >
        <TabsList className="flex-wrap h-auto">
          {TRACK_FILTERS.map((filter) => (
            <TabsTrigger key={filter.value} value={filter.value}>
              {filter.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="relative w-full sm:w-64">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Filter by event, team, award"
          aria-label="Filter competition news"
          className="pl-8 pr-8 h-8 text-sm bg-card"
        />
        {query ? (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:text-foreground"
          >
            <X className="size-3.5" />
          </button>
        ) : null}
      </div>
    </div>
  )
}
