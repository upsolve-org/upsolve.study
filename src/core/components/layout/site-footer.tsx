import { ArrowUpRight } from "lucide-react"
import { CLUB_INFO } from "@/core/constants/site"

export function SiteFooter() {
  return (
    <>
      {/* Stage 1: Editorial Directory Footer with Hermes instant-invert [data-chip] links */}
      <footer className="hw-stage-panel relative z-10 border-t hw-dotted-rule">
        <div className="mx-auto w-full max-w-[calc(var(--hw-teams-col)+2*var(--hw-teams-pad-x))] px-[var(--hw-teams-pad-x)] py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <img
                  src={CLUB_INFO.logo}
                  alt="UPsolve"
                  className="size-7 object-contain"
                />
                <span className="hw-mono text-xs font-semibold">
                  {CLUB_INFO.name}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[var(--surface-panel-muted)] max-w-[30ch]">
                {CLUB_INFO.tagline} University of the Philippines student
                competition &amp; engineering collective.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="hw-mono text-[11px] text-[var(--surface-panel-muted)] pb-1">
                // Disciplines
              </p>
              <ul className="flex flex-col gap-1">
                <li>
                  <a href="#tracks" className="hw-chip-link">
                    Hackathons
                  </a>
                </li>
                <li>
                  <a href="#tracks" className="hw-chip-link">
                    Pitching Competitions
                  </a>
                </li>
                <li>
                  <a href="#tracks" className="hw-chip-link">
                    Competitive Programming
                  </a>
                </li>
                <li>
                  <a href="#tracks" className="hw-chip-link">
                    Capture The Flag
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="hw-mono text-[11px] text-[var(--surface-panel-muted)] pb-1">
                // 1st Sem 2026–2027
              </p>
              <ul className="flex flex-col gap-1">
                <li>
                  <a href="#wins" className="hw-chip-link">
                    Enactus Philippines · Top 4
                  </a>
                </li>
                <li>
                  <a href="#wins" className="hw-chip-link">
                    DOST Cordi Inspire · 3 Teams
                  </a>
                </li>
                <li>
                  <a href="#wins" className="hw-chip-link">
                    PLDT AI in 30 Hours · Top 10
                  </a>
                </li>
                <li>
                  <a href="#wins" className="hw-chip-link">
                    ASEAN AI Hackathon · Top 40
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="hw-mono text-[11px] text-[var(--surface-panel-muted)] pb-1">
                // Index &amp; Channels
              </p>
              <ul className="flex flex-col gap-1">
                <li>
                  <a href="#internships" className="hw-chip-link">
                    Member Internships
                  </a>
                </li>
                <li>
                  <a
                    href={CLUB_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hw-chip-link"
                  >
                    GitHub Organization
                    <ArrowUpRight className="size-3" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CLUB_INFO.email}`}
                    className="hw-chip-link"
                  >
                    {CLUB_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t hw-dotted-rule flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hw-mono text-[11px] text-[var(--surface-panel-muted)]">
            <span>UPSOLVE COLLECTIVE // UNIVERSITY OF THE PHILIPPINES</span>
            <span>AY 2026–2027 · 1ST SEMESTER ARCHIVE</span>
          </div>
        </div>
      </footer>

      {/* Stage 2: Hermes Sticky Monument Reveal Footer */}
      <footer
        aria-label="UPsolve monument"
        className="relative z-0 bg-[var(--hermes-primary)] text-[var(--hermes-white)] overflow-hidden py-16 md:py-24 border-t border-[var(--hermes-stroke)]"
        style={{
          opacity: "calc(0.45 + 0.55 * var(--hw-footer-opacity, 1))",
        }}
      >
        <div className="mx-auto w-full max-w-[calc(var(--hw-teams-col)+2*var(--hw-teams-pad-x))] px-[var(--hw-teams-pad-x)] flex flex-col items-center justify-center text-center relative">
          <p className="hw-mono text-[11px] text-[var(--hermes-white)]/50 mb-4">
            [ BUILD · COMPETE · PITCH · SOLVE ]
          </p>
          <div className="relative flex items-center justify-center w-full select-none">
            <span className="hw-gothic uppercase font-light leading-[0.82] tracking-[-0.03em] text-[clamp(4.5rem,18vw,220px)] text-[var(--hermes-white)]/12">
              UPSOLVE
            </span>
            <img
              src={CLUB_INFO.logo}
              alt="UPsolve emblem"
              className="absolute size-20 sm:size-28 md:size-32 object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.65)]"
            />
          </div>
        </div>
      </footer>
    </>
  )
}
