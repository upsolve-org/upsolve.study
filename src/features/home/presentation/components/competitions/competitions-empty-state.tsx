import { Trophy } from "lucide-react"
import { Button } from "@/core/components/ui/button"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/core/components/ui/empty"

interface CompetitionsEmptyStateProps {
  onReset: () => void
}

export function CompetitionsEmptyState({ onReset }: CompetitionsEmptyStateProps) {
  return (
    <Empty className="border bg-card py-12">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Trophy />
        </EmptyMedia>
        <EmptyTitle>No matching competition news</EmptyTitle>
        <EmptyDescription>
          No entries match the current track or search filter.
        </EmptyDescription>
      </EmptyHeader>
      <Button variant="outline" size="sm" onClick={onReset}>
        Reset filters
      </Button>
    </Empty>
  )
}
