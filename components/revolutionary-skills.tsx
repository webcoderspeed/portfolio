"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Smartphone } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React.js", level: 95, experience: "4+ years", projects: 25 },
      { name: "Next.js", level: 90, experience: "3+ years", projects: 20 },
      { name: "TypeScript", level: 88, experience: "3+ years", projects: 30 },
      { name: "JavaScript", level: 92, experience: "4+ years", projects: 35 },
      { name: "Tailwind CSS", level: 90, experience: "2+ years", projects: 28 },
      { name: "HTML5/CSS3", level: 95, experience: "4+ years", projects: 40 },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 92, experience: "4+ years", projects: 28 },
      { name: "NestJS", level: 85, experience: "2+ years", projects: 12 },
      { name: "Express.js", level: 88, experience: "3+ years", projects: 22 },
      { name: "MongoDB", level: 85, experience: "3+ years", projects: 25 },
      { name: "PostgreSQL", level: 80, experience: "2+ years", projects: 15 },
      { name: "Redis", level: 82, experience: "2+ years", projects: 18 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 78, experience: "2+ years", projects: 15 },
      { name: "DigitalOcean", level: 85, experience: "2+ years", projects: 20 },
      { name: "Docker", level: 75, experience: "2+ years", projects: 18 },
      { name: "Nginx", level: 80, experience: "2+ years", projects: 22 },
      { name: "CI/CD", level: 75, experience: "1+ years", projects: 12 },
      { name: "Linux", level: 82, experience: "3+ years", projects: 25 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile & Tools",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 70, experience: "1+ years", projects: 8 },
      { name: "PWA", level: 85, experience: "2+ years", projects: 15 },
      { name: "Git/GitHub", level: 95, experience: "4+ years", projects: 50 },
      { name: "Jest Testing", level: 80, experience: "2+ years", projects: 20 },
      { name: "Webpack/Vite", level: 75, experience: "2+ years", projects: 18 },
      { name: "Chrome Extensions", level: 85, experience: "1+ years", projects: 5 },
    ],
  },
]

function SkillCard({ category, index, theme, isActive, onClick }: any) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { threshold: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        className={`cursor-pointer transition-all duration-300 h-full ${
          isActive
            ? theme === "light"
              ? "bg-emerald-50 border-2 border-emerald-200 shadow-lg shadow-emerald-100"
              : "bg-yellow-400/10 border-2 border-yellow-400/50 shadow-lg shadow-yellow-400/20"
            : theme === "light"
              ? "bg-white border border-gray-200 hover:border-emerald-200 hover:shadow-md"
              : "bg-gray-800/50 border border-gray-700 hover:border-yellow-400/30 hover:bg-gray-800/80"
        }`}
        onClick={() => onClick(category.id)}
      >
        <CardContent className="p-4 sm:p-6 text-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center ${
              isActive
                ? theme === "light"
                  ? "bg-emerald-500 text-white"
                  : "bg-yellow-400 text-black"
                : theme === "light"
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-yellow-400/20 text-yellow-400"
            } transition-all duration-300`}
          >
            <category.icon className="h-6 w-6 sm:h-8 sm:w-8" />
          </motion.div>

          <h3
            className={`text-sm sm:text-lg font-semibold mb-2 ${
              isActive ? (theme === "light" ? "text-emerald-700" : "text-yellow-400") : ""
            }`}
          >
            {category.title}
          </h3>

          <p className={`text-xs sm:text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
            {category.skills.length} Technologies
          </p>

          {/* Skill Preview */}
          <div className="mt-3 flex flex-wrap justify-center gap-1">
            {category.skills.slice(0, 3).map((skill, i) => (
              <Badge
                key={i}
                variant="secondary"
                className={`text-xs px-2 py-1 ${
                  theme === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-gray-700 text-gray-300 border-gray-600"
                }`}
              >
                {skill.name}
              </Badge>
            ))}
            {category.skills.length > 3 && (
              <Badge
                variant="secondary"
                className={`text-xs px-2 py-1 ${
                  theme === "light" ? "bg-gray-100 text-gray-500" : "bg-gray-700 text-gray-400"
                }`}
              >
                +{category.skills.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SkillDetails({ category, theme }: any) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 sm:space-y-6"
    >
      {/* Category Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
            theme === "light" ? "bg-emerald-500 text-white" : "bg-yellow-400 text-black"
          }`}
        >
          <category.icon className="h-8 w-8 sm:h-10 sm:w-10" />
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-2">{category.title}</h3>
        <p className={`text-sm sm:text-base ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
          {category.skills.length} technologies with hands-on experience
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-3 sm:gap-4">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div
              className={`p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                theme === "light"
                  ? "bg-white border border-gray-200 hover:border-emerald-200 hover:shadow-md"
                  : "bg-gray-800/50 border border-gray-700 hover:border-yellow-400/30 hover:bg-gray-800/80"
              }`}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{skill.name}</h4>
                  <p className={`text-xs sm:text-sm ${theme === "light" ? "text-slate-500" : "text-gray-500"}`}>
                    {skill.experience} • {skill.projects} projects
                  </p>
                </div>
                <div
                  className={`text-lg sm:text-xl font-bold ${
                    theme === "light" ? "text-emerald-600" : "text-yellow-400"
                  }`}
                >
                  {skill.level}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className={`w-full h-2 sm:h-3 rounded-full ${theme === "light" ? "bg-gray-200" : "bg-gray-700"}`}>
                <motion.div
                  className={`h-full rounded-full ${theme === "light" ? "bg-emerald-500" : "bg-yellow-400"}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>

              {/* Skill Level Indicator */}
              <div className="flex justify-between mt-2 text-xs">
                <span className={theme === "light" ? "text-slate-400" : "text-gray-500"}>Beginner</span>
                <span className={theme === "light" ? "text-slate-400" : "text-gray-500"}>Expert</span>
              </div>
            </div>

            {/* Enhanced Tooltip */}
            {hoveredSkill === skill.name && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`absolute -top-20 left-1/2 transform -translate-x-1/2 z-20 p-3 rounded-lg shadow-xl min-w-[200px] ${
                  theme === "light" ? "bg-slate-800 text-white" : "bg-white text-black"
                }`}
              >
                <div className="text-center">
                  <div className="font-bold mb-1">{skill.name}</div>
                  <div className="text-sm opacity-90 mb-2">Proficiency: {skill.level}%</div>
                  <div className="text-xs space-y-1">
                    <div>Experience: {skill.experience}</div>
                    <div>Projects: {skill.projects}</div>
                    <div>
                      Level:{" "}
                      {skill.level >= 90
                        ? "Expert"
                        : skill.level >= 75
                          ? "Advanced"
                          : skill.level >= 60
                            ? "Intermediate"
                            : "Beginner"}
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 ${
                    theme === "light" ? "bg-slate-800" : "bg-white"
                  }`}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Category Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl text-center ${
          theme === "light" ? "bg-emerald-50 border border-emerald-200" : "bg-yellow-400/10 border border-yellow-400/30"
        }`}
      >
        <div
          className={`text-2xl sm:text-3xl font-bold mb-2 ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}
        >
          {Math.round(
            category.skills.reduce((acc: number, skill: any) => acc + skill.level, 0) / category.skills.length,
          )}
          %
        </div>
        <div className={`text-sm sm:text-base ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
          Average Proficiency in {category.title}
        </div>
        <div className={`text-xs sm:text-sm mt-1 ${theme === "light" ? "text-slate-500" : "text-gray-500"}`}>
          Total Projects: {category.skills.reduce((acc: number, skill: any) => acc + skill.projects, 0)}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function RevolutionarySkills() {
  const { theme } = useTheme()
  const [activeCategory, setActiveCategory] = useState("frontend")

  const activeSkillCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeCategory)!

  return (
    <section
      id="skills"
      className={`py-10 sm:py-16 lg:py-20 ${theme === "light" ? "bg-slate-50/50" : "bg-gray-900/30"}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 ${
              theme === "light" ? "text-slate-600" : "text-gray-300"
            }`}
          >
            Comprehensive skills across the full stack of modern web development
          </p>
        </motion.div>

        {/* Category Selection Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
              theme={theme}
              isActive={activeCategory === category.id}
              onClick={setActiveCategory}
            />
          ))}
        </div>

        {/* Skills Details */}
        <div className="max-w-4xl mx-auto">
          <Card
            className={`${
              theme === "light"
                ? "bg-white border border-gray-200 shadow-lg"
                : "bg-gray-800/50 border border-gray-700 shadow-xl"
            }`}
          >
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <SkillDetails category={activeSkillCategory} theme={theme} />
            </CardContent>
          </Card>
        </div>

        {/* Overall Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-10 sm:mt-16 p-4 sm:p-6 lg:p-8 rounded-2xl text-center ${
            theme === "light"
              ? "bg-gradient-to-br from-emerald-50 via-blue-50 to-emerald-50 border-2 border-emerald-100"
              : "bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-800/50 border-2 border-yellow-400/20"
          }`}
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">Overall Technical Proficiency</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "24", label: "Technologies" },
              { value: "4+", label: "Years Experience" },
              { value: "85%", label: "Average Skill Level" },
              { value: "20+", label: "Total Projects" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <div
                  className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-1 ${
                    theme === "light" ? "text-emerald-600" : "text-yellow-400"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-xs sm:text-sm lg:text-base ${
                    theme === "light" ? "text-slate-600" : "text-gray-400"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RevolutionarySkills
