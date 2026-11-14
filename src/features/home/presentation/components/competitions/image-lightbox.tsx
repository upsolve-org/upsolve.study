import { X } from "lucide-react"
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
      className="fixed inset-0 z-[220] flex items-center justify-center bg-black/85 p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-4xl flex-col gap-3 border-2 border-[var(--hermes-stroke)] bg-[var(--hermes-primary)] text-[var(--hermes-white)] p-4 sm:p-5 shadow-[0_0_50px_rgba(0,0,0,0.65)]"
      >
        <div className="flex items-center justify-between gap-4 border-b border-dotted border-[var(--hermes-stroke)] pb-3">
          <div className="flex flex-col gap-0.5 min-w-0">
            <p className="hw-gothic truncate text-xl font-medium text-[var(--hermes-white)] m-0">
              {image.competition}
            </p>
            <p className="hw-mono truncate text-[11px] text-[var(--brand-green-bright)] m-0">
              // {image.label}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            data-variant="secondary"
            aria-label="Close image preview"
            className="hermes-button !min-h-8 !px-3 !py-1.5"
          >
            <X className="size-3.5" />
            <span>:Close:</span>
            <span aria-hidden="true" className="hermes-button-hover-border" />
          </button>
        </div>
        <div className="overflow-hidden border border-[var(--hermes-stroke)] bg-[var(--hermes-dark-well)]">
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
