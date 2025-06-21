"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverOn = () => setLinkHovered(true)
    const handleLinkHoverOff = () => setLinkHovered(false)

    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverOn)
      link.addEventListener("mouseleave", handleLinkHoverOff)
    })

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverOn)
        link.removeEventListener("mouseleave", handleLinkHoverOff)
      })
    }
  }, [])

  // Don't show custom cursor on mobile devices
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile) return null

  const borderColor = theme === "dark" ? "rgba(251, 191, 36, 0.5)" : "rgba(16, 185, 129, 0.5)"
  const fillColor = theme === "dark" ? "#fbbf24" : "#10b981"

  return (
    <>
      <motion.div
        className="custom-cursor-outer fixed pointer-events-none z-50"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: `2px solid ${borderColor}`,
        }}
      />
      <motion.div
        className="custom-cursor-inner fixed pointer-events-none z-50"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 0.5 : linkHovered ? 0 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          mass: 0.1,
        }}
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: fillColor,
        }}
      />
    </>
  )
}
