"use client"

import { motion } from "framer-motion"
import { ProjectShowcase } from "@/components/project-showcase"
import { useTheme } from "@/lib/theme-context"

export function Projects() {
  const { theme } = useTheme()

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === "light" ? "text-slate-600" : "text-gray-300"}`}>
            Showcase of my recent work and contributions to various industries
          </p>
        </motion.div>

        <ProjectShowcase />
      </div>
    </section>
  )
}
