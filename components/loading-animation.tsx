"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Code2 className="h-16 w-16 text-yellow-400" />
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 2 }}
        className="h-1 bg-yellow-400 mt-8 rounded-full"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400"
      >
        Loading amazing experience...
      </motion.p>
    </motion.div>
  )
}
