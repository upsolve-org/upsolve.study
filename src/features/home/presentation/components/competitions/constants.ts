import type { TrackFilter } from "../../../domain/competition"

export const TRACK_FILTERS: { value: TrackFilter; label: string }[] = [
  { value: "All", label: "All" },
  { value: "Hackathons", label: "Hackathons" },
  { value: "Pitching", label: "Pitching" },
  { value: "Competitive Programming", label: "CP" },
  { value: "CTF", label: "CTF" },
]

export const CURRENT_TERM = "1st Sem · AY 2026–2027"
