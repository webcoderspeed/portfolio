"use client"

import { useState } from "react"
import { motion } from "framer-motion"

type Skill = {
  name: string
  level: number
  category: string
  icon?: string
}

const skills: Skill[] = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Language" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "NestJS", level: 75, category: "Backend" },
  { name: "Redux", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "GraphQL", level: 70, category: "API" },
  { name: "AWS", level: 65, category: "DevOps" },
  { name: "Docker", level: 60, category: "DevOps" },
  { name: "Socket.io", level: 80, category: "Backend" },
  { name: "Redis", level: 75, category: "Database" },
  { name: "MySQL", level: 70, category: "Database" },
  { name: "Firebase", level: 85, category: "Backend" },
  { name: "Git", level: 90, category: "Tools" },
]

const categories = Array.from(new Set(skills.map((skill) => skill.category)))

export function SkillVisualization() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills = activeCategory ? skills.filter((skill) => skill.category === activeCategory) : skills

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <motion.button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm ${
            activeCategory === null ? "bg-yellow-400 text-black" : "bg-white/10 hover:bg-white/20"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </motion.button>

        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === category ? "bg-yellow-400 text-black" : "bg-white/10 hover:bg-white/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="glass rounded-lg p-4 h-full hover:bg-white/10 transition-colors">
              <div className="text-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <p className="text-xs text-gray-400">{skill.category}</p>
              </div>

              <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-yellow-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>

              <div className="mt-2 text-right text-xs font-medium">{skill.level}%</div>
            </div>

            {hoveredSkill === skill.name && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 glass rounded-lg p-3 z-10 w-40 text-center"
              >
                <div className="font-medium">{skill.name}</div>
                <div className="text-xs text-yellow-400">Experience: {Math.floor(skill.level / 20)} years</div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 glass" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
