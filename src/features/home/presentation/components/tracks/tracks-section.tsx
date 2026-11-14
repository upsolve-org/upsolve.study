import { TRACK_ICONS } from "./track-icons"
import { TRACKS } from "../../../data/tracks"
import type { Track } from "../../../domain/track"

interface TracksSectionProps {
  onSelectTrack: (track: Track) => void
}

export function TracksSection({ onSelectTrack }: TracksSectionProps) {
  return (
    <section id="tracks" className="scroll-mt-20 pb-16 sm:pb-20">
      <div className="flex items-baseline justify-between gap-4 pb-5">
        <h2 className="text-xl font-semibold tracking-[-0.02em]">
          What we do
        </h2>
        <span className="text-xs text-muted-foreground">
          Select a track to filter wins
        </span>
      </div>

      <div className="grid grid-cols-1 divide-y border-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {TRACKS.map((track, idx) => {
          const Icon = TRACK_ICONS[track.id]
          const dotClass =
            track.accent === "green" ? "bg-brand-green" : "bg-brand-red"
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => onSelectTrack(track.id)}
              className={`group flex flex-col justify-between gap-4 p-5 text-left transition-colors duration-150 hover:bg-card focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-ring ${
                idx < 2 ? "sm:border-b lg:border-b-0" : ""
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Icon className="size-4 text-foreground" />
                  <span
                    aria-hidden="true"
                    className={`size-2 rounded-full ${dotClass}`}
                  />
                </div>
                <h3 className="text-sm font-semibold tracking-tight">
                  {track.id}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {track.summary}
                </p>
              </div>
              <p className="text-xs text-muted-foreground/85">
                {track.focus}
              </p>
            </button>
          )
        })}
      </div>
    </section>
  )
}
