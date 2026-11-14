import { INTERNSHIPS } from "../../../data/internships"

export function InternshipsSection() {
  return (
    <section
      id="internships"
      aria-label="Member Internships"
      className="scroll-mt-20 pb-20 md:pb-28"
    >
      {/* Hermes Editorial Section Heading */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b hw-dotted-rule">
        <div className="flex flex-col gap-2">
          <p className="hw-mono text-xs text-[var(--brand-red)] m-0">
            // INDUSTRY PLACEMENTS
          </p>
          <h2 className="hw-gothic text-[length:var(--hw-teams-display)] font-normal leading-[0.95] text-[var(--surface-panel-ink)] m-0">
            Member Internships
          </h2>
        </div>
        <span className="hw-mono text-xs text-[var(--surface-panel-muted)]">
          [WHERE UPSOLVE BUILDERS SHIP IN PRODUCTION]
        </span>
      </div>

      {/* Hermes Canonical Dotted Data Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left font-mono text-xs">
          <thead>
            <tr className="border-b hw-dotted-rule text-[11px] uppercase tracking-[0.1em] text-[var(--surface-panel-muted)]">
              <th className="py-4 pr-4 font-medium">Member</th>
              <th className="py-4 px-4 font-medium">Company</th>
              <th className="py-4 px-4 font-medium">Role</th>
              <th className="py-4 px-4 font-medium hidden md:table-cell">
                Track
              </th>
              <th className="py-4 px-4 font-medium hidden sm:table-cell">
                Location
              </th>
              <th className="py-4 pl-4 font-medium text-right">Term</th>
            </tr>
          </thead>
          <tbody className="divide-y hw-dotted-rule border-b hw-dotted-rule">
            {INTERNSHIPS.map((item) => (
              <tr
                key={item.id}
                className="group transition-colors duration-150 hover:duration-0 hover:bg-[var(--surface-panel-well)]"
              >
                <td className="py-4 pr-4 font-medium text-[var(--surface-panel-ink)] whitespace-nowrap">
                  {item.member}
                </td>
                <td className="py-4 px-4 font-semibold text-[var(--surface-panel-ink)] whitespace-nowrap">
                  <span className="inline-flex items-center px-1.5 py-0.5 -ml-1.5 transition-colors duration-150 group-hover:duration-0 group-hover:bg-[var(--surface-panel-ink)] group-hover:text-[var(--surface-panel-bg)]">
                    {item.company}
                  </span>
                </td>
                <td className="py-4 px-4 text-[var(--surface-panel-muted)]">
                  {item.role}
                </td>
                <td className="py-4 px-4 hidden md:table-cell">
                  <span className="hw-mono text-[11px] px-2 py-0.5 border border-[var(--surface-panel-solid-line)] bg-[var(--surface-panel-card)] text-[var(--surface-panel-ink)]">
                    :{item.track === "Competitive Programming" ? "CP" : item.track}:
                  </span>
                </td>
                <td className="py-4 px-4 hidden sm:table-cell text-[var(--surface-panel-muted)] whitespace-nowrap">
                  {item.location}
                </td>
                <td className="py-4 pl-4 text-right tabular-nums text-[var(--surface-panel-muted)] whitespace-nowrap">
                  {item.term}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
