import { Badge } from "@/core/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/core/components/ui/table"
import { INTERNSHIPS } from "../../../data/internships"

export function InternshipsSection() {
  return (
    <section id="internships" className="scroll-mt-20 py-16 sm:py-20">
      <div className="flex flex-col gap-1 pb-6 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="text-xl font-semibold tracking-[-0.02em]">
          Member internships
        </h2>
        <span className="text-xs text-muted-foreground">
          Where UPsolve members have worked
        </span>
      </div>

      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Member</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="hidden md:table-cell">Track</TableHead>
              <TableHead className="hidden sm:table-cell">Location</TableHead>
              <TableHead className="text-right">Term</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {INTERNSHIPS.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.member}</TableCell>
                <TableCell className="font-medium">{item.company}</TableCell>
                <TableCell className="text-muted-foreground">
                  {item.role}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge variant="secondary">{item.track}</Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell text-muted-foreground">
                  {item.location}
                </TableCell>
                <TableCell className="text-right tabular-nums text-muted-foreground">
                  {item.term}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
