"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-40 p-3 glass rounded-full hover:bg-yellow-400/20 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === "dark" ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-yellow-400" />}
      </motion.div>
    </motion.button>
  )
}
