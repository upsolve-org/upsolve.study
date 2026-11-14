import { ArrowUpRight } from "lucide-react"
import { TRACK_ICONS } from "./track-icons"
import { TRACKS } from "../../../data/tracks"
import type { Track } from "../../../domain/track"

interface TracksSectionProps {
  onSelectTrack: (track: Track) => void
}

export function TracksSection({ onSelectTrack }: TracksSectionProps) {
  return (
    <section
      id="tracks"
      aria-label="Disciplines and Tracks"
      className="scroll-mt-20 py-14 md:py-20 border-t border-dotted border-[var(--hermes-stroke)]"
    >
      {/* Hermes section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10">
        <div className="flex flex-col gap-2">
          <p className="hw-mono text-xs text-[var(--brand-green-bright)] m-0">
            // CORE DISCIPLINES
          </p>
          <h2 className="hw-gothic text-[length:var(--hw-teams-display)] font-normal leading-[0.95] text-[var(--hermes-white)] m-0">
            Four Arenas. One Standard.
          </h2>
        </div>
        <p className="hw-mono text-[11px] text-[var(--hermes-white)]/60 m-0">
          [SELECT ANY TRACK TO FILTER 1ST SEM DISPATCHES]
        </p>
      </div>

      {/* Hermes 4-card architectural platform grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TRACKS.map((track, idx) => {
          const Icon = TRACK_ICONS[track.id]
          const isGreen = track.accent === "green"
          const accentColor = isGreen
            ? "var(--brand-green-bright)"
            : "var(--brand-red-bright)"

          return (
            <article
              key={track.id}
              className="group relative isolation-auto bg-[var(--hermes-dark-well)] border border-[var(--hermes-stroke)] p-6 flex flex-col justify-between gap-8 overflow-clip transition-colors duration-150 hover:border-[var(--hermes-white)]/45"
            >
              {/* Subtle corner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -right-16 size-44 rounded-full opacity-20 transition-opacity duration-200 group-hover:opacity-45"
                style={{
                  background: `radial-gradient(circle, ${accentColor}, transparent 70%)`,
                }}
              />

              <div className="flex flex-col gap-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span
                    className="hw-mono text-xs"
                    style={{ color: accentColor }}
                  >
                    #{idx + 1} // {track.accent === "green" ? "BUILD & CODE" : "PITCH & BREAK"}
                  </span>
                  <Icon className="size-4 text-[var(--hermes-white)]/80" />
                </div>

                <h3 className="hw-gothic text-[length:var(--hw-teams-feature-title)] font-normal leading-[1.02] text-[var(--hermes-white)] m-0">
                  {track.id}
                </h3>

                <p className="text-sm leading-relaxed text-[var(--hermes-white)]/75 m-0">
                  {track.summary}
                </p>
              </div>

              <div className="flex flex-col gap-4 relative z-10 pt-4 border-t border-dotted border-[var(--hermes-stroke)]">
                <p className="hw-mono text-[11px] leading-relaxed text-[var(--hermes-white)]/55 m-0">
                  {track.focus}
                </p>

                <button
                  type="button"
                  onClick={() => onSelectTrack(track.id)}
                  data-variant="secondary"
                  className="hermes-button w-full justify-between"
                >
                  <span>Filter :{track.id === "Competitive Programming" ? "CP" : track.id}:</span>
                  <ArrowUpRight className="size-3.5" />
                  <span
                    aria-hidden="true"
                    className="hermes-button-hover-border"
                  />
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
