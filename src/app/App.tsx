import { useCallback, useEffect, useRef, useState } from "react"
import { SiteFooter } from "@/core/components/layout/site-footer"
import { SiteHeader } from "@/core/components/layout/site-header"
import { HomePage } from "@/features/home"

export type MarketingTheme = "hybrid" | "dark"

export function App() {
  const [theme, setTheme] = useState<MarketingTheme>("hybrid")
  const [retuneKey, setRetuneKey] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isClickCue, setIsClickCue] = useState(false)
  const scrollTimerRef = useRef<number | null>(null)
  const clickTimerRef = useRef<number | null>(null)

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "hybrid" ? "dark" : "hybrid"
      document.documentElement.setAttribute("data-marketing-theme", next)
      return next
    })
    setRetuneKey((k) => k + 1)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-marketing-theme", theme)
  }, [theme])

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      )
      const ratio = Math.min(1, Math.max(0, scrollY / maxScroll))
      const root = document.documentElement

      root.style.setProperty("--scroll-y", `${(ratio * 85 + 7).toFixed(1)}%`)
      root.style.setProperty("--py-hero", `${Math.min(140, scrollY * 0.22).toFixed(1)}px`)

      // Footer reveal opacity ramps over the final 28% of page scroll
      const footerProgress = Math.min(1, Math.max(0, (ratio - 0.72) / 0.28))
      root.style.setProperty("--hw-footer-opacity", footerProgress.toFixed(3))

      setIsScrolling(true)
      if (scrollTimerRef.current) {
        window.clearTimeout(scrollTimerRef.current)
      }
      scrollTimerRef.current = window.setTimeout(() => {
        setIsScrolling(false)
      }, 240)
    }

    function handlePointerDown(e: PointerEvent) {
      const xPct = ((e.clientX / window.innerWidth) * 100).toFixed(1)
      const yPct = ((e.clientY / window.innerHeight) * 100).toFixed(1)
      document.documentElement.style.setProperty("--cue-x", `${xPct}%`)
      document.documentElement.style.setProperty("--cue-y", `${yPct}%`)
      setIsClickCue(true)
      if (clickTimerRef.current) {
        window.clearTimeout(clickTimerRef.current)
      }
      clickTimerRef.current = window.setTimeout(() => {
        setIsClickCue(false)
      }, 360)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("pointerdown", handlePointerDown, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [])

  return (
    <div className="hermes-web min-h-dvh w-full bg-[var(--hermes-primary)] text-[var(--hermes-white)] relative">
      {/* Hermes 5px Fixed Viewport Frame + Ambient Arcs + Scroll/Click Cues */}
      <div aria-hidden="true" className="hw-frame">
        <div className="hw-frame-ambient top" />
        <div className="hw-frame-ambient bottom" />
        <div className="hw-frame-ambient left" />
        <div className="hw-frame-ambient right" />
        <div className={`hw-frame-scroll ${isScrolling ? "is-scrolling" : ""}`} />
        <div className={`hw-frame-click ${isClickCue ? "is-active" : ""}`} />
      </div>

      {/* Scanline Retune Signal */}
      {retuneKey > 0 ? (
        <div
          key={retuneKey}
          aria-hidden="true"
          className="marketing-theme-signal"
        />
      ) : null}

      <div className="relative z-10 bg-[var(--hermes-primary)]">
        <SiteHeader theme={theme} onToggleTheme={handleToggleTheme} />
        <HomePage />
      </div>

      <SiteFooter />
    </div>
  )
}

export default App
