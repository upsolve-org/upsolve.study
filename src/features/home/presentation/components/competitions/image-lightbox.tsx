import { X } from "lucide-react"
import { Button } from "@/core/components/ui/button"
import { useEscapeKey } from "@/core/hooks/use-escape-key"
import type { LightboxImage } from "../../../domain/competition"

interface ImageLightboxProps {
  image: LightboxImage
  onClose: () => void
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  useEscapeKey(onClose)

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.competition}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-3xl flex-col gap-3 rounded-lg border bg-card p-4"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5 min-w-0">
            <p className="truncate text-sm font-medium text-foreground">
              {image.competition}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {image.label}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            aria-label="Close image preview"
          >
            <X data-icon="inline-start" />
            Close
          </Button>
        </div>
        <div className="overflow-hidden rounded-md border bg-background">
          <img
            src={image.src}
            alt={`${image.competition} — ${image.label}`}
            className="max-h-[75vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}
