import { Button } from "@/core/components/ui/button"
import { CLUB_INFO } from "@/core/constants/site"

export function HeroSection() {
  return (
    <section className="hero-enter py-16 sm:py-24">
      <div className="flex flex-col gap-6 max-w-2xl">
        <img src={CLUB_INFO.logo} alt="UPsolve" className="size-14 rounded-xl" />
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.08] text-balance">
          {CLUB_INFO.tagline}
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[62ch]">
          {CLUB_INFO.description}
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button size="sm" render={<a href="#wins" />}>
            View competition wins
          </Button>
          <Button variant="outline" size="sm" render={<a href="#internships" />}>
            Member internships
          </Button>
        </div>
      </div>
    </section>
  )
}
