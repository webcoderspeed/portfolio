"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cloud, Zap } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const highlights = [
  {
    icon: Code,
    title: "Frontend Excellence",
    description: "Expert in React, Next.js, TypeScript with modern UI/UX practices",
  },
  {
    icon: Database,
    title: "Backend Mastery",
    description: "Proficient in Node.js, NestJS, MongoDB, Redis, and API development",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Experience with AWS, DigitalOcean, and scalable architecture",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Optimization expert with real-time systems and microservices",
  },
]

export function About() {
  const { theme } = useTheme()

  return (
    <section id="about" className={`py-20 ${theme === "light" ? "section-bg-alt" : "bg-gray-900/50"}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === "light" ? "text-slate-600" : "text-gray-300"}`}>
            Passionate Full Stack Developer with a proven track record of delivering high-quality web applications. I
            specialize in modern JavaScript frameworks and have extensive experience in both frontend and backend
            development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
            <div className={`space-y-4 ${theme === "light" ? "text-slate-600" : "text-gray-300"}`}>
              <p>
                With over 4 years of professional experience, I've worked with startups and established companies across
                different domains including fintech, real estate, and e-commerce.
              </p>
              <p>
                Currently serving as SDE II at Acefone, I lead product development initiatives and architect scalable
                solutions using cutting-edge technologies.
              </p>
              <p>
                I'm passionate about clean code, performance optimization, and creating exceptional user experiences. My
                expertise spans the entire development lifecycle from conception to deployment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`glass rounded-2xl p-8 float ${theme === "light" ? "card-hover" : ""}`}>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">4+</div>
                <div className={`mb-4 ${theme === "light" ? "text-slate-600" : "text-gray-300"}`}>Years Experience</div>
                <div className="text-2xl font-bold gradient-text mb-2">20+</div>
                <div className={`mb-4 ${theme === "light" ? "text-slate-600" : "text-gray-300"}`}>
                  Projects Completed
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">5⭐</div>
                <div className={`${theme === "light" ? "text-slate-600" : "text-gray-300"}`}>Fiverr Rating</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
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
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                      theme === "light" ? "bg-emerald-100" : "bg-yellow-400/20"
                    }`}
                  >
                    <item.icon className={`h-6 w-6 ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className={`text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
