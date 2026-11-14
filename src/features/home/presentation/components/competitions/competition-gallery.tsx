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
    <div className="flex w-full shrink-0 flex-col gap-2.5 md:w-72">
      <button
        type="button"
        onClick={() => onOpenImage(currentImage)}
        className="group relative aspect-4/3 w-full overflow-hidden rounded-md border bg-muted text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        aria-label={`View ${currentImage.label} full image`}
      >
        <img
          src={currentImage.src}
          alt={`${competition} — ${currentImage.label}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-150 group-hover:scale-[1.02]"
        />
        <span className="absolute right-2 bottom-2 inline-flex items-center gap-1 rounded-md border bg-background/85 px-2 py-1 text-[11px] font-medium text-foreground backdrop-blur-xs">
          <Maximize2 className="size-3" />
          View
        </span>
      </button>

      {images.length > 1 ? (
        <div className="flex flex-wrap gap-1.5">
          {images.map((img, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={img.src}
                type="button"
                onClick={() => onSelectImage(idx)}
                className={`rounded-md border px-2 py-1 text-[11px] font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ring ${
                  isActive
                    ? "border-foreground bg-secondary text-foreground"
                    : "border-border bg-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {img.label}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
