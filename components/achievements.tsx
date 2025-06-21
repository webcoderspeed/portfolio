"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Star, Trophy, BadgeIcon as Certificate } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const achievements = [
  {
    icon: Star,
    title: "5-Star Rating on Fiverr",
    description: "Maintained perfect client satisfaction across multiple projects",
  },
  {
    icon: Certificate,
    title: "Solana Blockchain Certification",
    description: "Completed advanced blockchain development certification",
    date: "July 2023",
  },
  {
    icon: Trophy,
    title: "Early Team Member at TRIBE",
    description: "Helped scale the platform from concept to thousands of users",
  },
  {
    icon: Award,
    title: "Python for Data Analysis",
    description: "Microsoft certification for data analysis expertise",
    date: "February 2021",
  },
]

export function Achievements() {
  const { theme } = useTheme()

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements</span> & Certifications
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === "light" ? "text-slate-600" : "text-gray-300"}`}>
            Recognition and milestones from my professional journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card
                className={`glass transition-all duration-300 h-full overflow-hidden ${
                  theme === "light"
                    ? "border-t-2 border-t-emerald-400 hover:bg-white/60 hover:shadow-lg card-hover"
                    : "border-t-2 border-t-yellow-400 hover:bg-white/10"
                }`}
              >
                <CardContent className="p-6 text-center relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 + index * 0.1,
                    }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      theme === "light" ? "bg-emerald-100" : "bg-yellow-400/20"
                    }`}
                  >
                    <item.icon className={`h-8 w-8 ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`} />
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className={`text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                    {item.description}
                  </p>

                  {item.date && (
                    <div
                      className={`absolute top-4 right-4 text-xs font-medium ${
                        theme === "light" ? "text-emerald-600" : "text-yellow-400"
                      }`}
                    >
                      {item.date}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
