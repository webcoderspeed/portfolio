"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/hero-background"
import { useTheme } from "@/lib/theme-context"

export function Hero() {
  const { theme } = useTheme()

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        theme === "light" ? "hero-bg" : ""
      }`}
    >
      {/* 3D Particle Background */}
      <HeroBackground />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Sanjeev Sharma</span>
          </motion.h1>

          <motion.p
            className={`text-xl md:text-2xl mb-4 ${theme === "light" ? "text-slate-700" : "text-gray-300"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer & Software Engineer
          </motion.p>

          <motion.p
            className={`text-lg mb-8 max-w-2xl mx-auto ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            4+ years of experience building scalable web applications with modern technologies. Currently SDE II at
            Acefone, specializing in Next.js, React, Node.js, and cloud architecture.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="lg"
              className={`${
                theme === "light"
                  ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
                  : "bg-yellow-400 text-black hover:bg-yellow-500"
              } pulse-glow`}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`${
                theme === "light"
                  ? "border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                  : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 glass rounded-full transition-colors ${
                theme === "light" ? "hover:bg-blue-100/50" : "hover:bg-yellow-400/20"
              }`}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 glass rounded-full transition-colors ${
                theme === "light" ? "hover:bg-blue-100/50" : "hover:bg-yellow-400/20"
              }`}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:contact@webcoderspeed.dev"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 glass rounded-full transition-colors ${
                theme === "light" ? "hover:bg-blue-100/50" : "hover:bg-yellow-400/20"
              }`}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 ${
            theme === "light" ? "text-emerald-500" : "text-yellow-400"
          }`}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  )
}
