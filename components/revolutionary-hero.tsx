"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/theme-context"
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/constants"

const ROLES = ["Full Stack Developer", "Product Engineer", "Problem Solver", "Tech Innovator"]

export function RevolutionaryHero() {
  const { theme } = useTheme()
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = RESUME_URL
    link.download = "Sanjeev_Sharma_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  const scrollToSection = (href: string) => {

    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        // Get header height for offset
        const headerHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Sanjeev Sharma</span>
          </h1>

          <motion.p
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`text-xl sm:text-2xl md:text-3xl font-medium ${
              theme === "light" ? "text-slate-600" : "text-gray-300"
            }`}
          >
            {ROLES[currentRole]}
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
            theme === "light" ? "text-slate-600" : "text-gray-300"
          }`}
        >
          I build amazing web applications with modern technologies. Currently SDE II at Acefone with 4+ years of
          experience creating scalable solutions.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mb-10"
        >
          <div className="text-center">
            <div className={`text-2xl font-bold ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}>4+</div>
            <div className={`text-sm ${theme === "light" ? "text-slate-500" : "text-gray-400"}`}>Years Experience</div>
          </div>

          <div className="text-center">
            <div className={`text-2xl font-bold ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}>
              20+
            </div>
            <div className={`text-sm ${theme === "light" ? "text-slate-500" : "text-gray-400"}`}>Projects Done</div>
          </div>

          <div className="text-center">
            <div className={`text-2xl font-bold ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}>
              5⭐
            </div>
            <div className={`text-sm ${theme === "light" ? "text-slate-500" : "text-gray-400"}`}>Client Rating</div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <MapPin className={`h-4 w-4 ${theme === "light" ? "text-emerald-500" : "text-yellow-400"}`} />
          <span className={`text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>Gurugram, India</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-4" />
          <span className={`text-sm font-medium ${theme === "light" ? "text-emerald-600" : "text-green-400"}`}>
            Available for hire
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className={`${
              theme === "light"
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : "bg-yellow-400 hover:bg-yellow-500 text-black"
            } px-8 py-3 text-lg font-medium`}
            onClick={() => scrollToSection("#contact")}
          >
            Let's Work Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={downloadResume}
            className={`${
              theme === "light"
                ? "border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
            } px-8 py-3 text-lg font-medium`}
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: GITHUB_URL, label: "GitHub" },
            { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
            { icon: Mail, href: EMAIL_URL, label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full transition-colors ${
                theme === "light"
                  ? "bg-gray-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-600"
                  : "bg-gray-800 hover:bg-yellow-400/20 text-gray-300 hover:text-yellow-400"
              }`}
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
