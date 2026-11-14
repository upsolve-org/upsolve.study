import { useEffect } from "react"

/** Calls `onEscape` when the Escape key is pressed, while `enabled` is true. */
export function useEscapeKey(onEscape: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onEscape()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onEscape, enabled])
}
