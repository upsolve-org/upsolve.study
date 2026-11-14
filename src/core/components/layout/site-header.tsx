import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import type { MarketingTheme } from "@/app/App"
import { CLUB_INFO } from "@/core/constants/site"

interface SiteHeaderProps {
  theme: MarketingTheme
  onToggleTheme: () => void
}

export function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    function onScroll() {
      setPinned(window.scrollY > 240)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Primary Hermes 3-Column Brand Header */}
      <header
        data-surface="brand"
        className="marketing-header relative z-[90] text-[var(--hermes-white)]"
      >
        <nav
          data-research-nav=""
          aria-label="UPsolve"
          className="mx-auto w-full max-w-[calc(var(--hw-teams-col)+2*var(--hw-teams-pad-x))] px-[var(--hw-teams-pad-x)] flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-6 pt-9 pb-5"
        >
          {/* Left column */}
          <div className="flex items-center gap-x-8 max-md:hidden">
            <a
              href="#tracks"
              className="hw-mono text-[length:var(--hw-teams-label)] nw-subnav-trigger opacity-80 hover:opacity-100"
            >
              <span className="nw-subnav-trigger-label">Tracks</span>
            </a>
            <a
              href="#wins"
              className="hw-mono text-[length:var(--hw-teams-label)] nw-subnav-trigger opacity-80 hover:opacity-100"
            >
              <span className="nw-subnav-trigger-label">Dispatches</span>
            </a>
            <a
              href="#internships"
              className="hw-mono text-[length:var(--hw-teams-label)] nw-subnav-trigger opacity-80 hover:opacity-100"
            >
              <span className="nw-subnav-trigger-label">Internships</span>
            </a>
          </div>

          {/* Center actual UPsolve logo */}
          <a
            href="#top"
            aria-label="UPsolve home"
            className="flex shrink-0 items-center justify-center focus-visible:outline-1 focus-visible:outline-[var(--brand-green-bright)]"
          >
            <img
              src={CLUB_INFO.logo}
              alt="UPsolve"
              className="size-12 sm:size-14 object-contain transition-transform duration-200 ease-out hover:scale-105"
            />
          </a>

          {/* Right column */}
          <div className="flex items-center justify-end gap-x-6 max-md:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="hw-mono text-[length:var(--hw-teams-label)] nw-subnav-trigger opacity-75 hover:opacity-100"
              title="Retune stage contrast"
            >
              <span className="nw-subnav-trigger-label">
                Stage:{theme === "hybrid" ? "Paper" : "Dark"}
              </span>
            </button>

            <a
              href={CLUB_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hw-mono text-[length:var(--hw-teams-label)] nw-subnav-trigger opacity-80 hover:opacity-100"
            >
              <span className="nw-subnav-trigger-label">GitHub</span>
              <ArrowUpRight className="size-3.5" />
            </a>

            <a
              href="#wins"
              data-variant="secondary"
              className="hermes-button"
            >
              <span>1st Sem Wins</span>
              <span aria-hidden="true" className="hermes-button-hover-border" />
            </a>
          </div>

          {/* Mobile compact controls */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="hw-mono text-[11px] px-2 py-1.5 border border-[var(--hermes-stroke)] text-[var(--hermes-white)]/80"
            >
              :{theme === "hybrid" ? "Paper" : "Dark"}:
            </button>
            <a
              href="#wins"
              data-variant="secondary"
              className="hermes-button"
            >
              <span>Dispatches</span>
              <span aria-hidden="true" className="hermes-button-hover-border" />
            </a>
          </div>
        </nav>
      </header>

      {/* Pinned Floating Sub-Nav on Scroll (Hermes marketing-paper-nav) */}
      <div
        aria-hidden={!pinned}
        className={`fixed top-[var(--hw-frame)] inset-x-[var(--hw-frame)] z-[95] border-b border-[var(--hermes-stroke)] bg-[var(--hermes-primary)]/95 backdrop-blur-md transition-[transform,opacity] duration-200 ${
          pinned
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav
          aria-label="UPsolve, pinned"
          className="mx-auto w-full max-w-[calc(var(--hw-teams-col)+2*var(--hw-teams-pad-x))] px-[var(--hw-teams-pad-x)] h-14 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-6"
        >
          <div className="flex items-center gap-x-6 max-md:hidden">
            <a
              href="#tracks"
              className="hw-mono text-[11px] nw-subnav-trigger opacity-70 hover:opacity-100"
            >
              <span className="nw-subnav-trigger-label">Tracks</span>
            </a>
            <a
              href="#wins"
              className="hw-mono text-[11px] nw-subnav-trigger opacity-70 hover:opacity-100"
            >
              <span className="nw-subnav-trigger-label">Dispatches</span>
            </a>
            <a
              href="#internships"
              className="hw-mono text-[11px] nw-subnav-trigger opacity-70 hover:opacity-100"
            >
              <span className="nw-subnav-trigger-label">Internships</span>
            </a>
          </div>

          <a
            href="#top"
            aria-label="UPsolve top"
            className="flex items-center gap-2"
          >
            <img
              src={CLUB_INFO.logo}
              alt=""
              className="size-8 object-contain transition-transform duration-200 hover:rotate-12"
            />
          </a>

          <div className="flex items-center justify-end gap-x-5">
            <button
              type="button"
              onClick={onToggleTheme}
              className="hw-mono text-[11px] nw-subnav-trigger opacity-70 hover:opacity-100 max-sm:hidden"
            >
              <span className="nw-subnav-trigger-label">
                Stage:{theme === "hybrid" ? "Paper" : "Dark"}
              </span>
            </button>
            <a
              href={CLUB_INFO.github}
              target="_blank"
              rel="noreferrer"
              data-variant="green"
              className="hermes-button !min-h-8 !py-1.5 !px-3 !text-[11px]"
            >
              <span>GitHub Org</span>
              <ArrowUpRight className="size-3.5" />
              <span aria-hidden="true" className="hermes-button-hover-border" />
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
