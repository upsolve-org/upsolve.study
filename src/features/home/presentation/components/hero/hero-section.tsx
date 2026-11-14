import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowDownRight, RotateCcw, Sparkles } from "lucide-react"
import { CLUB_INFO } from "@/core/constants/site"

const GRID_SIZE = 3
const TOTAL_TILES = GRID_SIZE * GRID_SIZE
const SOLVED_BOARD = [0, 1, 2, 3, 4, 5, 6, 7, 8] // 8 is the empty/anchor slot

function getNeighbors(index: number): number[] {
  const row = Math.floor(index / GRID_SIZE)
  const col = index % GRID_SIZE
  const neighbors: number[] = []
  if (row > 0) neighbors.push((row - 1) * GRID_SIZE + col)
  if (row < GRID_SIZE - 1) neighbors.push((row + 1) * GRID_SIZE + col)
  if (col > 0) neighbors.push(row * GRID_SIZE + (col - 1))
  if (col < GRID_SIZE - 1) neighbors.push(row * GRID_SIZE + (col + 1))
  return neighbors
}

function generateScrambleSequence(steps = 7): number[][] {
  // Walk backwards from SOLVED_BOARD so the reverse sequence is a guaranteed shortest-path solve
  const states: number[][] = []
  let current = [...SOLVED_BOARD]
  let emptyIdx = 8
  let prevEmptyIdx = -1

  for (let i = 0; i < steps; i++) {
    const candidates = getNeighbors(emptyIdx).filter((n) => n !== prevEmptyIdx)
    const nextEmpty =
      candidates[Math.floor(Math.random() * candidates.length)] ?? candidates[0]!
    const nextBoard = [...current]
    nextBoard[emptyIdx] = nextBoard[nextEmpty]!
    nextBoard[nextEmpty] = 8
    prevEmptyIdx = emptyIdx
    emptyIdx = nextEmpty
    current = nextBoard
    states.push(current)
  }

  // Reverse so states[0] is scrambled and the last state is SOLVED_BOARD
  return [...states.reverse(), [...SOLVED_BOARD]]
}

export function HeroSection() {
  const [board, setBoard] = useState<number[]>(() => [...SOLVED_BOARD])
  const [phase, setPhase] = useState<"solving" | "solved">("solved")
  const [stepCount, setStepCount] = useState(0)
  const sequenceRef = useRef<number[][]>([])
  const stepIndexRef = useRef(0)

  const startNewCycle = useCallback(() => {
    const seq = generateScrambleSequence(6)
    sequenceRef.current = seq
    stepIndexRef.current = 0
    setBoard(seq[0]!)
    setStepCount(seq.length - 1)
    setPhase("solving")
  }, [])

  // Start initial puzzle cycle shortly after mount
  useEffect(() => {
    const initTimer = window.setTimeout(() => {
      startNewCycle()
    }, 900)
    return () => window.clearTimeout(initTimer)
  }, [startNewCycle])

  // Drive the autonomous solver step-by-step, then pause on SOLVED before repeating
  useEffect(() => {
    if (phase === "solving") {
      const timer = window.setTimeout(() => {
        const seq = sequenceRef.current
        const nextIdx = stepIndexRef.current + 1
        if (nextIdx < seq.length) {
          stepIndexRef.current = nextIdx
          setBoard(seq[nextIdx]!)
          setStepCount(seq.length - 1 - nextIdx)
          if (nextIdx === seq.length - 1) {
            setPhase("solved")
          }
        } else {
          setPhase("solved")
        }
      }, 420)
      return () => window.clearTimeout(timer)
    }

    const pauseTimer = window.setTimeout(() => {
      startNewCycle()
    }, 2800)
    return () => window.clearTimeout(pauseTimer)
  }, [phase, board, startNewCycle])

  function handleTileClick(tileId: number) {
    const tilePos = board.indexOf(tileId)
    const emptyPos = board.indexOf(8)
    if (!getNeighbors(emptyPos).includes(tilePos)) return

    const next = [...board]
    next[emptyPos] = tileId
    next[tilePos] = 8
    setBoard(next)
    const isNowSolved = next.every((val, idx) => val === idx)
    setPhase(isNowSolved ? "solved" : "solving")
    if (isNowSolved) {
      setStepCount(0)
    }
  }

  return (
    <section
      aria-label="UPsolve Hero"
      className="py-12 md:py-20 overflow-clip"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center min-h-[480px]">
        {/* Left column: Hermes condensed Gothic display + CTAs (code block removed) */}
        <div className="flex flex-col items-start gap-7 z-10 min-w-0">
          <div className="inline-flex items-center gap-2 border border-[var(--hermes-stroke)] bg-[var(--hermes-dark-well)] px-2.5 py-1">
            <span className="size-2 bg-[var(--brand-green-bright)]" />
            <span className="hw-mono text-[11px] text-[var(--hermes-white)]/80">
              UNIVERSITY OF THE PHILIPPINES // STUDENT COLLECTIVE
            </span>
          </div>

          <h1 className="hw-gothic m-0 text-[length:var(--hw-teams-hero-display)] font-extralight leading-[0.94] tracking-[-0.025em] text-[var(--hermes-white)]">
            <span className="block">The Collective</span>
            <span className="block text-[var(--brand-green-bright)]">
              That Competes
            </span>
            <span className="block">&amp; Ships.</span>
          </h1>

          <p className="text-base sm:text-lg leading-[1.6] text-[var(--hermes-white)]/75 max-w-[54ch] m-0">
            {CLUB_INFO.description}
          </p>

          <div className="flex flex-wrap items-stretch gap-2.5 pt-1">
            <a
              href="#wins"
              data-variant="secondary"
              className="hermes-button"
            >
              <span>1st Sem Dispatches</span>
              <ArrowDownRight className="size-4" />
              <span aria-hidden="true" className="hermes-button-hover-border" />
            </a>

            <a
              href="#internships"
              data-variant="hero-ghost"
              className="hermes-button"
            >
              <span>Member Internships</span>
              <span aria-hidden="true" className="hermes-button-hover-border" />
            </a>
          </div>
        </div>

        {/* Right column: Interactive & Auto-Solving UPsolve Puzzle Stage */}
        <div
          className="relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[450px] select-none"
          style={{
            transform: "translate3d(0, var(--py-hero, 0px), 0)",
          }}
        >
          <div className="relative w-full max-w-[400px] border border-[var(--hermes-stroke)] bg-[var(--hermes-dark-well)] p-5 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
            {/* Top telemetry bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-dotted border-[var(--hermes-stroke)]">
              <div className="flex items-center gap-2">
                <span
                  className={`size-2 transition-colors duration-200 ${
                    phase === "solved"
                      ? "bg-[var(--brand-green-bright)]"
                      : "bg-[var(--brand-red-bright)] animate-pulse"
                  }`}
                />
                <span className="hw-mono text-[11px] text-[var(--hermes-white)]/80">
                  {phase === "solved"
                    ? "STATE // SOLVED"
                    : `SOLVING // h(n)=${stepCount}`}
                </span>
              </div>

              <button
                type="button"
                onClick={startNewCycle}
                className="hw-mono text-[11px] inline-flex items-center gap-1.5 px-2 py-1 border border-[var(--hermes-stroke)] bg-[var(--hermes-primary)] text-[var(--hermes-white)]/80 hover:text-[var(--hermes-white)] hover:border-[var(--hermes-white)]/40 cursor-pointer transition-colors duration-150"
                title="Scramble and solve puzzle"
              >
                <RotateCcw className="size-3" />
                <span>:Scramble:</span>
              </button>
            </div>

            {/* 3x3 Sliding Tile Puzzle Board */}
            <div
              className={`relative aspect-square w-full bg-[#121212] border transition-colors duration-300 overflow-hidden ${
                phase === "solved"
                  ? "border-[var(--brand-green-bright)]/70 shadow-[0_0_32px_rgba(70,201,76,0.16)]"
                  : "border-[var(--hermes-stroke)]"
              }`}
            >
              {/* Subtle background grid inside empty slot */}
              <div
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none"
              >
                {Array.from({ length: TOTAL_TILES }).map((_, idx) => (
                  <div
                    key={idx}
                    className="border border-dotted border-[var(--hermes-white)]/10 flex items-center justify-center"
                  >
                    <span className="hw-mono text-[9px] text-[var(--hermes-white)]/15">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* Sliding tiles positioned via GPU-accelerated translate3d */}
              {SOLVED_BOARD.map((tileId) => {
                const currentPos = board.indexOf(tileId)
                const curRow = Math.floor(currentPos / GRID_SIZE)
                const curCol = currentPos % GRID_SIZE
                const origRow = Math.floor(tileId / GRID_SIZE)
                const origCol = tileId % GRID_SIZE
                const isAnchorSlot = tileId === 8
                const isSolved = phase === "solved"

                return (
                  <button
                    key={tileId}
                    type="button"
                    onClick={() => handleTileClick(tileId)}
                    aria-label={`Puzzle tile ${tileId + 1}`}
                    style={{
                      width: "33.3333%",
                      height: "33.3333%",
                      transform: `translate3d(${curCol * 100}%, ${curRow * 100}%, 0)`,
                      transition:
                        "transform 340ms cubic-bezier(0.23, 1, 0.32, 1), opacity 260ms ease-out",
                    }}
                    className={`absolute top-0 left-0 p-0 border-0 bg-transparent overflow-hidden focus-visible:outline-1 focus-visible:outline-[var(--brand-green-bright)] ${
                      isAnchorSlot && !isSolved
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100 cursor-pointer"
                    }`}
                  >
                    <div
                      className={`relative size-full overflow-hidden transition-[padding,border-color] duration-300 ${
                        isSolved
                          ? "border-0"
                          : "border border-[var(--hermes-white)]/20 bg-[var(--hermes-primary)]"
                      }`}
                    >
                      {/* Full logo image shifted so this tile displays its exact 1/3 x 1/3 slice */}
                      <img
                        src={CLUB_INFO.logo}
                        alt=""
                        draggable={false}
                        style={{
                          width: "300%",
                          height: "300%",
                          maxWidth: "none",
                          transform: `translate3d(-${origCol * 33.3333}%, -${origRow * 33.3333}%, 0)`,
                        }}
                        className="block select-none pointer-events-none object-cover"
                      />

                      {/* Tile coordinate overlay (fades out cleanly when puzzle locks into SOLVED) */}
                      <span
                        className={`hw-mono absolute top-1.5 left-1.5 px-1 py-0.5 text-[9px] leading-none bg-black/65 text-[var(--hermes-white)]/80 border border-[var(--hermes-white)]/15 transition-opacity duration-250 ${
                          isSolved ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        0{tileId + 1}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Bottom puzzle status footer */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-dotted border-[var(--hermes-stroke)] hw-mono text-[10px] text-[var(--hermes-white)]/55">
              <span>3×3 SLIDING SOLVER // CLICK TILE OR SCRAMBLE</span>
              <span className="inline-flex items-center gap-1 text-[var(--brand-green-bright)]">
                <Sparkles className="size-3" />
                {phase === "solved" ? "LOCKED" : "ACTIVE"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
