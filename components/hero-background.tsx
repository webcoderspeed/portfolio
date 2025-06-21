"use client"

import { useEffect, useRef } from "react"
import { createParticleSystem } from "@/lib/three-utils"
import { useTheme } from "@/lib/theme-context"

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cleanupRef = useRef<(() => void) | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    // Clean up previous instance
    if (cleanupRef.current) {
      cleanupRef.current()
    }

    // Create new particle system with theme-appropriate colors
    cleanupRef.current = createParticleSystem(containerRef.current, theme)

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
      }
    }
  }, [theme])

  return <div ref={containerRef} className="absolute inset-0 -z-10" style={{ pointerEvents: "none" }} />
}
