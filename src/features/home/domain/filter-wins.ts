import type { CompetitionWin, TrackFilter } from "./competition"

/** Filters wins by track and a free-text query over the searchable fields. */
export function filterWins(
  wins: CompetitionWin[],
  track: TrackFilter,
  query: string,
): CompetitionWin[] {
  const q = query.trim().toLowerCase()
  return wins.filter((win) => {
    const matchesTrack = track === "All" || win.track === track
    if (!matchesTrack) return false
    if (!q) return true
    return (
      win.competition.toLowerCase().includes(q) ||
      win.description.toLowerCase().includes(q) ||
      win.placement.toLowerCase().includes(q) ||
      win.teams.toLowerCase().includes(q) ||
      (win.winnings?.toLowerCase().includes(q) ?? false)
    )
  })
}
