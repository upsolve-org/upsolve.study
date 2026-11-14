import type { ComponentType } from "react"
import { Code2, Mic, ShieldAlert, Terminal } from "lucide-react"
import type { Track } from "../../../domain/track"

export const TRACK_ICONS: Record<Track, ComponentType<{ className?: string }>> = {
  Hackathons: Code2,
  Pitching: Mic,
  "Competitive Programming": Terminal,
  CTF: ShieldAlert,
}
