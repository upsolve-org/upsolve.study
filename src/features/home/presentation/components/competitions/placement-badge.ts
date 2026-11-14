import type { CompetitionWin } from "../../../domain/competition"

export function placementBadgeClass(tier: CompetitionWin["tier"]) {
  if (tier === "gold") {
    return "border-brand-green-border bg-brand-green-soft text-brand-green"
  }
  if (tier === "podium") {
    return "border-brand-red-border bg-brand-red-soft text-brand-red"
  }
  return "border-border bg-secondary text-secondary-foreground"
}
