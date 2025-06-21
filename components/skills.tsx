"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cloud, Smartphone, Cog, Palette, Shield } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React.js", experience: "4+ years" },
      { name: "Next.js", experience: "3+ years" },
      { name: "TypeScript", experience: "3+ years" },
      { name: "JavaScript", experience: "4+ years" },
      { name: "HTML5", experience: "4+ years" },
      { name: "CSS3", experience: "4+ years" },
      { name: "Tailwind CSS", experience: "2+ years" },
      { name: "Redux", experience: "3+ years" },
      { name: "Context API", experience: "2+ years" },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", experience: "4+ years" },
      { name: "NestJS", experience: "2+ years" },
      { name: "Express.js", experience: "3+ years" },
      { name: "REST APIs", experience: "4+ years" },
      { name: "GraphQL", experience: "2+ years" },
      { name: "Microservices", experience: "1+ years" },
      { name: "Socket.io", experience: "2+ years" },
      { name: "WebSocket", experience: "2+ years" },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", experience: "3+ years" },
      { name: "MySQL", experience: "2+ years" },
      { name: "Redis", experience: "2+ years" },
      { name: "Firebase", experience: "2+ years" },
      { name: "Database Design", experience: "3+ years" },
      { name: "Query Optimization", experience: "2+ years" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", experience: "2+ years" },
      { name: "DigitalOcean", experience: "2+ years" },
      { name: "Docker", experience: "1+ years" },
      { name: "Nginx", experience: "2+ years" },
      { name: "CI/CD", experience: "1+ years" },
      { name: "Server Management", experience: "2+ years" },
    ],
  },
  {
    title: "Mobile & Cross-Platform",
    icon: Smartphone,
    skills: [
      { name: "React Native", experience: "1+ years" },
      { name: "Progressive Web Apps", experience: "2+ years" },
      { name: "Responsive Design", experience: "4+ years" },
      { name: "Mobile-First Development", experience: "3+ years" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Cog,
    skills: [
      { name: "Git", experience: "4+ years" },
      { name: "Webpack", experience: "2+ years" },
      { name: "Vite", experience: "1+ years" },
      { name: "Jest", experience: "2+ years" },
      { name: "Mocha", experience: "2+ years" },
      { name: "Chrome Extensions", experience: "1+ years" },
      { name: "Storyblok CMS", experience: "1+ years" },
    ],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skills: [
      { name: "Figma", experience: "2+ years" },
      { name: "Adobe XD", experience: "1+ years" },
      { name: "UI/UX Design", experience: "3+ years" },
      { name: "Prototyping", experience: "2+ years" },
      { name: "Design Systems", experience: "2+ years" },
    ],
  },
  {
    title: "Security & Auth",
    icon: Shield,
    skills: [
      { name: "JWT", experience: "3+ years" },
      { name: "OAuth", experience: "2+ years" },
      { name: "Role-based Access Control", experience: "2+ years" },
      { name: "API Security", experience: "3+ years" },
      { name: "Data Protection", experience: "2+ years" },
    ],
  },
]

export function Skills() {
  const { theme } = useTheme()
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className={`py-20 ${theme === "light" ? "section-bg-alt" : "bg-gray-900/50"}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === "light" ? "text-slate-600" : "text-gray-300"}`}>
            Comprehensive expertise across the full stack of modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card
                className={`glass transition-all duration-300 h-full ${
                  theme === "light" ? "hover:bg-white/60 hover:shadow-lg card-hover" : "hover:bg-white/10"
                }`}
              >
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                      theme === "light" ? "bg-emerald-100" : "bg-yellow-400/20"
                    }`}
                  >
                    <category.icon
                      className={`h-6 w-6 ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}
                    />
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-4 gradient-text">{category.title}</h3>

                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                        className={`relative flex items-center justify-between p-2 rounded-lg transition-colors cursor-pointer ${
                          theme === "light" ? "bg-blue-50/50 hover:bg-blue-100/50" : "bg-white/5 hover:bg-white/10"
                        }`}
                        onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <span className={`text-sm ${theme === "light" ? "text-slate-700" : "text-gray-300"}`}>
                          {skill.name}
                        </span>
                        <motion.div
                          className={`w-2 h-2 rounded-full ${theme === "light" ? "bg-emerald-400" : "bg-yellow-400"}`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: skillIndex * 0.1,
                          }}
                        />

                        {/* Tooltip */}
                        {hoveredSkill === `${category.title}-${skill.name}` && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            className={`absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap ${
                              theme === "light" ? "bg-slate-800 text-white" : "bg-white text-black"
                            }`}
                          >
                            Experience: {skill.experience}
                            <div
                              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 ${
                                theme === "light" ? "bg-slate-800" : "bg-white"
                              }`}
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
