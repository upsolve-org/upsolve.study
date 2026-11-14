import { ArrowUpRight } from "lucide-react"
import { CLUB_INFO } from "@/core/constants/site"

const NAV_LINKS = [
  { href: "#tracks", label: "Tracks" },
  { href: "#wins", label: "Wins" },
  { href: "#internships", label: "Internships" },
]

const navLinkClass =
  "rounded-md px-2.5 py-1.5 transition-colors duration-150 hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur-xs">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <img
            src={CLUB_INFO.logo}
            alt="UPsolve logo"
            className="size-7 rounded-md object-cover"
          />
          <span className="text-sm font-semibold tracking-tight">
            {CLUB_INFO.name}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="flex items-center gap-1 sm:gap-2 text-sm text-muted-foreground"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
          <a
            href={CLUB_INFO.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 ${navLinkClass}`}
          >
            GitHub
            <ArrowUpRight className="size-3" />
          </a>
        </nav>
      </div>
    </header>
  )
}
