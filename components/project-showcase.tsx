"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-mopro Real Estate Platform",
    description:
      "Revolutionary real estate platform with role-based access control, real-time messaging, and comprehensive property management system.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Redis", "DigitalOcean"],
    features: ["Real-time messaging", "Role-based access", "Property management", "Event scheduling"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "TRIBE Stock Advisory Platform",
    description:
      "Comprehensive stock advisory platform built from scratch with automated testing and Chrome extension integration.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Socket.io"],
    features: ["Stock analysis", "Real-time data", "Chrome extension", "Automated testing"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Car Rental Management System",
    description:
      "Full-featured car rental platform with Firebase integration, real-time notifications, and third-party API integrations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS", "Third-party APIs"],
    features: ["Booking system", "Real-time notifications", "Payment integration", "User profiles"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Freshmade Restaurant Platform",
    description:
      "Modern restaurant website with Storyblok CMS integration, online ordering, and catering management system.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Storyblok CMS", "TypeScript", "Tailwind CSS", "SendGrid"],
    features: ["CMS integration", "Online ordering", "Catering system", "Menu management"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <motion.button
          onClick={prevProject}
          className="p-2 glass rounded-full hover:bg-yellow-400/20 transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="h-6 w-6 text-yellow-400" />
        </motion.button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <motion.button
          onClick={nextProject}
          className="p-2 glass rounded-full hover:bg-yellow-400/20 transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="h-6 w-6 text-yellow-400" />
        </motion.button>
      </div>

      <div className="overflow-hidden rounded-xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentProject.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div className="grid md:grid-cols-2 gap-8 glass p-8 rounded-xl">
              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 gradient-text">{currentProject.title}</h3>
                <p className="text-gray-300 mb-6">{currentProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-yellow-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-yellow-400" : "bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  )
}
