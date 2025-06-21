"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const testimonials = [
  {
    id: 1,
    name: "Rostand",
    position: "CEO",
    company: "E-mopro",
    image: "/placeholder.svg?height=100&width=100",
    text: "Sanjeev delivered an exceptional platform that transformed our business operations!",
  },
  {
    id: 2,
    name: "Kayur",
    position: "CTO",
    company: "Invest With Tribe",
    image: "/placeholder.svg?height=100&width=100",
    text: "Sanjeev's technical expertise helped us scale from 0 to 100K users seamlessly.",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Founder",
    company: "Freshmade",
    image: "/placeholder.svg?height=100&width=100",
    text: "Sanjeev built our restaurant website with Storyblok CMS integration. The result was beyond our expectations – beautiful, functional, and easy to manage. A true professional!",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    position: "Owner",
    company: "Vinci Club",
    image: "/placeholder.svg?height=100&width=100",
    text: "Impressed with the professionalism and quality. The site exceeded expectations.",
  },
]


export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={`py-20 ${theme === "light" ? "section-bg-alt" : "bg-gray-900/50"}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === "light" ? "text-slate-600" : "text-gray-300"}`}>
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-none">
                <CardContent className="p-8 md:p-12">
                  <Quote
                    className={`h-12 w-12 mb-6 ${theme === "light" ? "text-emerald-400/30" : "text-yellow-400/30"}`}
                  />

                  <p
                    className={`text-xl md:text-2xl italic mb-8 ${
                      theme === "light" ? "text-slate-700" : "text-gray-300"
                    }`}
                  >
                    "{testimonials[activeIndex].text}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg bg-emerald-400/30 rounded-full p-2 h-full w-full flex items-center justify-center">
                        {
                          testimonials[activeIndex].name.split(" ")[0][0] 
                        }
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                      <p className={theme === "light" ? "text-slate-600" : "text-gray-400"}>
                        {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? (theme === "light" ? "bg-emerald-400" : "bg-yellow-400") : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
