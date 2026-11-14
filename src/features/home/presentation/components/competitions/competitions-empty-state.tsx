import { Trophy } from "lucide-react"

interface CompetitionsEmptyStateProps {
  onReset: () => void
}

export function CompetitionsEmptyState({ onReset }: CompetitionsEmptyStateProps) {
  return (
    <div className="my-8 border hw-dotted-rule bg-[var(--surface-panel-well)] py-16 px-6 flex flex-col items-center justify-center text-center gap-4">
      <div className="size-11 flex items-center justify-center border border-[var(--surface-panel-solid-line)] text-[var(--surface-panel-ink)]/50">
        <Trophy className="size-5" />
      </div>
      <div className="flex flex-col gap-1 max-w-md">
        <h3 className="hw-gothic text-2xl font-medium text-[var(--surface-panel-ink)] m-0">
          No Matching Dispatches
        </h3>
        <p className="font-mono text-xs text-[var(--surface-panel-muted)] m-0">
          No competition records match the active track or search query.
        </p>
      </div>
      <button
        type="button"
        onClick={onReset}
        data-variant="primary"
        className="hermes-button mt-1"
      >
        <span>:Reset Filters:</span>
        <span aria-hidden="true" className="hermes-button-hover-border" />
      </button>
    </div>
  )
}
