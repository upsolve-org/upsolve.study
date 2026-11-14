import { Badge } from "@/core/components/ui/badge"
import { placementBadgeClass } from "./placement-badge"
import type { CompetitionImage, CompetitionWin } from "../../../domain/competition"
import { CompetitionGallery } from "./competition-gallery"

interface CompetitionCardProps {
  win: CompetitionWin
  activeImageIndex: number
  onSelectImage: (index: number) => void
  onOpenImage: (image: CompetitionImage) => void
}

export function CompetitionCard({
  win,
  activeImageIndex,
  onSelectImage,
  onOpenImage,
}: CompetitionCardProps) {
  return (
    <article className="rounded-lg border bg-card p-5 sm:p-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs tabular-nums text-muted-foreground">
              {win.semester}
            </span>
            <Badge variant="secondary">{win.track}</Badge>
            <Badge variant="outline" className={placementBadgeClass(win.tier)}>
              {win.placement}
            </Badge>
            {win.winnings ? (
              <Badge
                variant="outline"
                className="border-brand-green-border bg-brand-green-soft text-brand-green tabular-nums"
              >
                {win.winnings}
              </Badge>
            ) : null}
          </div>

          <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.02em] leading-snug text-foreground">
            {win.competition}
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground max-w-[65ch]">
            {win.description}
          </p>

          <p className="text-xs leading-relaxed text-muted-foreground pt-1">
            <span className="font-medium text-foreground">
              Teams & Members:
            </span>{" "}
            {win.teams}
          </p>
        </div>

        <CompetitionGallery
          competition={win.competition}
          images={win.images}
          activeIndex={activeImageIndex}
          onSelectImage={onSelectImage}
          onOpenImage={onOpenImage}
        />
      </div>
    </article>
  )
}
