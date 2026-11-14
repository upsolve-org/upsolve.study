import { Maximize2 } from "lucide-react"
import type { CompetitionImage } from "../../../domain/competition"

interface CompetitionGalleryProps {
  competition: string
  images: CompetitionImage[]
  activeIndex: number
  onSelectImage: (index: number) => void
  onOpenImage: (image: CompetitionImage) => void
}

export function CompetitionGallery({
  competition,
  images,
  activeIndex,
  onSelectImage,
  onOpenImage,
}: CompetitionGalleryProps) {
  const currentImage = images[activeIndex] ?? images[0]
  if (!currentImage) return null

  return (
    <div className="flex w-full flex-col gap-2.5">
      <button
        type="button"
        onClick={() => onOpenImage(currentImage)}
        className="group relative aspect-4/3 w-full overflow-hidden border border-[var(--surface-panel-solid-line)] bg-[var(--hermes-dark-well)] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--brand-green)]"
        aria-label={`Inspect ${currentImage.label} full image`}
      >
        <img
          src={currentImage.src}
          alt={`${competition} — ${currentImage.label}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
        <span className="hw-mono absolute right-2.5 bottom-2.5 inline-flex items-center gap-1.5 bg-[var(--hermes-primary)]/90 text-[var(--hermes-white)] px-2.5 py-1 text-[11px] border border-[var(--hermes-stroke)]">
          <Maximize2 className="size-3" />
          :Inspect:
        </span>
      </button>

      <div className="flex items-center justify-between gap-2 px-0.5">
        <span className="hw-mono text-[11px] text-[var(--surface-panel-muted)] truncate">
          {currentImage.label}
        </span>
        {images.length > 1 ? (
          <span className="hw-mono text-[11px] text-[var(--surface-panel-muted)] shrink-0">
            [{activeIndex + 1}/{images.length}]
          </span>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {images.map((img, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={img.src}
                type="button"
                onClick={() => onSelectImage(idx)}
                className={`hw-mono text-[11px] px-2.5 py-1.5 border cursor-pointer transition-colors duration-150 hover:duration-0 ${
                  isActive
                    ? "bg-[var(--surface-panel-ink)] text-[var(--surface-panel-bg)] border-[var(--surface-panel-ink)]"
                    : "bg-[var(--surface-panel-well)] text-[var(--surface-panel-ink)] border-[var(--surface-panel-solid-line)] hover:border-[var(--surface-panel-ink)]"
                }`}
              >
                <span className="opacity-50">:</span>
                0{idx + 1} · {img.label.split("·")[0]?.trim()}
                <span className="opacity-50">:</span>
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
