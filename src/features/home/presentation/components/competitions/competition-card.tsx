import { placementBadgeClass } from "./placement-badge"
import type { CompetitionImage, CompetitionWin } from "../../../domain/competition"
import { CompetitionGallery } from "./competition-gallery"

interface CompetitionCardProps {
  index: number
  win: CompetitionWin
  activeImageIndex: number
  onSelectImage: (index: number) => void
  onOpenImage: (image: CompetitionImage) => void
}

export function CompetitionCard({
  index,
  win,
  activeImageIndex,
  onSelectImage,
  onOpenImage,
}: CompetitionCardProps) {
  return (
    <article className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">
      <div className="flex flex-col gap-5 min-w-0">
        {/* Hermes telemetry header row */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="hw-mono text-xs font-medium text-[var(--surface-panel-muted)]">
            #{String(index).padStart(2, "0")} // {win.semester}
          </span>

          <span className="hw-mono text-[11px] px-2 py-0.5 border border-[var(--surface-panel-solid-line)] bg-[var(--surface-panel-well)] text-[var(--surface-panel-ink)]">
            {win.track}
          </span>

          <span
            className={`hw-mono text-[11px] px-2.5 py-0.5 border ${placementBadgeClass(
              win.tier,
            )}`}
          >
            {win.placement}
          </span>

          {win.winnings ? (
            <span className="hw-mono text-[11px] px-2.5 py-0.5 border border-brand-green-border bg-brand-green-soft text-brand-green font-semibold tabular-nums">
              GRANT // {win.winnings}
            </span>
          ) : null}
        </div>

        {/* Condensed Gothic Headline */}
        <h3 className="hw-gothic text-[length:var(--hw-teams-feature-title)] font-medium leading-[1.03] text-[var(--surface-panel-ink)] m-0">
          {win.competition}
        </h3>

        {/* Editorial dispatch summary */}
        <p className="text-base leading-[1.62] text-[var(--surface-panel-muted)] max-w-[64ch] m-0">
          {win.description}
        </p>

        {/* Roster / Teams well (Hermes .eQ4BDG_well) */}
        <div className="border hw-dotted-rule bg-[var(--surface-panel-well)] p-4 flex flex-col gap-1">
          <span className="hw-mono text-[10px] text-[var(--surface-panel-muted)]">
            ROSTER &amp; TEAM PLACEMENTS
          </span>
          <p className="font-mono text-xs leading-relaxed text-[var(--surface-panel-ink)] m-0">
            {win.teams}
          </p>
        </div>
      </div>

      <CompetitionGallery
        competition={win.competition}
        images={win.images}
        activeIndex={activeImageIndex}
        onSelectImage={onSelectImage}
        onOpenImage={onOpenImage}
      />
    </article>
  )
}
