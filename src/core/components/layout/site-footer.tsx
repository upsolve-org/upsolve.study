import { ArrowUpRight } from "lucide-react"
import { CLUB_INFO } from "@/core/constants/site"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src={CLUB_INFO.logo}
            alt="UPsolve"
            className="size-5 rounded-sm object-cover"
          />
          <span className="font-medium text-foreground">{CLUB_INFO.name}</span>
          <span>— {CLUB_INFO.tagline}</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={CLUB_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors duration-150 hover:text-foreground"
          >
            GitHub
            <ArrowUpRight className="size-3" />
          </a>
          <a
            href={`mailto:${CLUB_INFO.email}`}
            className="transition-colors duration-150 hover:text-foreground"
          >
            {CLUB_INFO.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
