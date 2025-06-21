"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, ExternalLink, Github, Users, Clock, Star, Zap, Eye, Code, Building } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const PROJECTS = [

  {
    id: 4,
    title: "Acefone Communication Suite",
    subtitle: "Enterprise Communication Platform",
    description:
      "Leading product development at Acefone, building microservices architecture that handles millions of communications with enterprise-grade reliability.",
    image: "/interaction-hub.png",
    liveDemo: "https://acefone.com",
    github: null,
    isCompanyProject: true,
    impact: {
      users: "1M+",
      latency: "< 50ms",
      uptime: "99.99%",
      scale: "10x",
    },
    technologies: [
      "NestJS", "Next.js", "TypeScript", "MongoDB", "Kafka", "Socket.io",
      "Redis", "Docker", "AWS", "Kubernetes"
    ],
    features: [
      "Microservices architecture",
      "WhatsApp IVR integration (Asia-first)",
      "Real-time messaging & VoIP calling",
      "Shared agent inbox (Interaction Hub)",
      "CI/CD automation",
      "Multi-tenant platform",
    ],
    metrics: {
      performance: 99,
      scalability: 99,
      security: 99,
      userExperience: 96,
    },
    testimonial: {
      text: "Sanjeev's architectural decisions improved our system performance dramatically.",
      author: "Tech Lead, Acefone",
    },
  },
  {
    id: 5,
    title: "Freshmade Food Web App",
    subtitle: "Catering & Ordering Platform",
    description:
      "Frontend web app for a Belgian food brand offering online orders, catering, and dynamic content management using Storyblok CMS.",
    image: "/freshmade.png",
    liveDemo: "https://freshmade.be",
    github: null,
    isCompanyProject: true,
    impact: {
      reach: "National (Belgium)",
      cmsAdoption: "100%",
      deliverySpeed: "Fast",
      uptime: "99.5%",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Storyblok CMS"],
    features: [
      "Storyblok CMS integration",
      "Responsive and accessible UI",
      "Optimized performance (SSR + SSG)",
      "Theming and branding support",
      "Modular code architecture",
    ],
    metrics: {
      performance: 95,
      scalability: 90,
      security: 95,
      userExperience: 94,
    },
    testimonial: {
      text: "Clean, scalable frontend delivered exactly as expected. Great collaboration!",
      author: "Freshmade Project Manager",
    },
  },
  {
    id: 6,
    title: "Vinci Club Website",
    subtitle: "Gym & Fitness Web Presence",
    description:
      "Developed a modern and responsive website for a fitness brand to showcase services, trainers, and class schedules using modern frontend tools.",
    image: "/vinci-club.png",
    liveDemo: "https://vinciclub.be",
    github: null,
    isCompanyProject: true,
    impact: {
      audience: "Local Community",
      engagement: "High",
      devicesSupported: "All (Responsive)",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Headless UI"],
    features: [
      "Responsive navigation",
      "Trainer bios & class schedules",
      "Contact form integration",
      "Accessible UI components",
      "Flexible design system",
    ],
    metrics: {
      performance: 92,
      scalability: 85,
      security: 93,
      userExperience: 90,
    },
    testimonial: {
      text: "Impressed with the professionalism and quality. The site exceeded expectations.",
      author: "Vinci Club Owner",
    },
  },
  {
    id: 1,
    title: "E-mopro Real Estate Platform",
    subtitle: "Full-Stack Real Estate Solution",
    description:
      "Comprehensive real estate platform built for the Canadian market. Features advanced property search, real-time messaging, and seamless user experience.",
    image: "/e-mopro.png",
    liveDemo: "https://emopro.com",
    github: null,
    isCompanyProject: true,
    impact: {
      users: "50K+",
      uptime: "99.9%",
      performance: "A+",
      satisfaction: "5⭐",
    },
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Redis", "DigitalOcean"],
    features: [
      "Developed complete real estate platform from scratch",
      "Implemented real-time messaging with Socket.io",
      "Built role-based access control system",
      "Achieved 99.9% uptime with DigitalOcean deployment",
      "Multi-language support",
      "Analytics dashboard",
    ],
    metrics: {
      performance: 95,
      scalability: 98,
      security: 99,
      userExperience: 97,
    },
    testimonial: {
      text: "Sanjeev delivered an exceptional platform that transformed our business operations!",
      author: "Alex Johnson, CEO E-mopro",
    },
  },
  {
    id: 2,
    title: "TRIBE Stock Advisory Platform",
    subtitle: "Fintech Trading Platform",
    description:
      "Built a comprehensive real estate platform with role-based access control, real-time messaging, and scalable architecture for the Canadian market.",
    image: "/invest-with-tribe.png",
    liveDemo: "https://tribe-demo.com",
    github: null,
    isCompanyProject: true,
    impact: {
      users: "100K+",
      accuracy: "94%",
      trades: "1M+",
      growth: "500%",
    },
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Socket.io", "Chart.js"],
    features: [
      "Scaled platform from 0 to 100K+ users",
      "Built and published Chrome extension with 10K+ downloads",
      "Led a team of 3 developers across frontend and backend",
      "Created real-time stock data processing system using Socket.io and Redis",
      "Implemented automated testing pipelines reducing bugs by 70%",
      "Social trading features",
      "Advanced charting",
    ],
    metrics: {
      performance: 96,
      scalability: 94,
      security: 98,
      userExperience: 95,
    },
    testimonial: {
      text: "Sanjeev's technical expertise helped us scale from 0 to 100K users seamlessly.",
      author: "Sarah Williams, CTO TRIBE",
    },
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    subtitle: "Modern Developer Portfolio",
    description:
      "A cutting-edge portfolio website built with Next.js, featuring 3D animations, theme switching, and interactive components to showcase development skills.",
    image: "/webcoderspeed-portfolio.png",
    liveDemo: "https://webcoderspeed.dev",
    github: "https://github.com/webcoderspeed/portfolio",
    isCompanyProject: false,
    impact: {
      visitors: "10K+",
      performance: "100%",
      lighthouse: "A+",
      responsive: "100%",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Dark/Light theme toggle",
      "Interactive terminal",
      "Responsive design",
      "SEO optimized",
      "Performance focused",
    ],
    metrics: {
      performance: 100,
      scalability: 95,
      security: 98,
      userExperience: 99,
    },
    testimonial: {
      text: "An impressive showcase of modern web development skills and creativity!",
      author: "Tech Community Feedback",
    },
  },
];


export function InteractiveProjectShowcase() {
  const { theme } = useTheme()
  const [activeProject, setActiveProject] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const currentProject = PROJECTS[activeProject]

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setActiveProject((prev) => (prev + 1) % PROJECTS.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const getImpactIcon = (key: string) => {
    const icons = {
      users: Users,
      uptime: Zap,
      performance: Star,
      satisfaction: Star,
      accuracy: Star,
      trades: Clock,
      growth: Zap,
      latency: Clock,
      scale: Zap,
      visitors: Eye,
      lighthouse: Star,
      responsive: Star,
    }
    return icons[key as keyof typeof icons] || Star
  }

  const handleLiveDemo = () => {
    if (currentProject.liveDemo) {
      window.open(currentProject.liveDemo, "_blank", "noopener,noreferrer")
    }
  }

  const handleGithub = () => {
    if (currentProject.github) {
      window.open(currentProject.github, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className={`text-base sm:text-lg lg:text-xl max-w-4xl mx-auto px-4 ${
              theme === "light" ? "text-slate-600" : "text-gray-300"
            }`}
          >
            A showcase of my recent work across different industries. Each project represents a unique challenge and
            demonstrates my ability to deliver scalable, user-focused solutions.
          </p>
        </motion.div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div
            className={`flex items-center gap-3 sm:gap-4 p-3 rounded-full ${
              theme === "light"
                ? "bg-white/80 backdrop-blur-sm shadow-lg border border-white/20"
                : "bg-gray-800/80 backdrop-blur-sm border border-gray-700/50"
            }`}
          >
            <Button onClick={togglePlayback} size="sm" variant="ghost" className="rounded-full p-2">
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === activeProject
                    ? theme === "light"
                      ? "bg-emerald-500"
                      : "bg-yellow-400"
                    : theme === "light"
                      ? "bg-gray-300"
                      : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Project Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {/* Mobile-First Layout */}
            <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
              {/* Project Visual */}
              <div className="relative order-1 lg:order-1">
                <div
                  className={`rounded-2xl overflow-hidden ${
                    theme === "light"
                      ? "bg-white shadow-2xl border border-gray-200"
                      : "bg-gray-800 border border-gray-700"
                  }`}
                >
                  <div className="relative aspect-video">
                    <img
                      src={currentProject.image || "/placeholder.svg"}
                      alt={currentProject.title}
                      className="w-full h-full object-fit"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Action Buttons - Always Visible */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                          <Button
                            onClick={handleLiveDemo}
                            size="sm"
                            className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            <span className="hidden sm:inline">View Live</span>
                            <span className="sm:hidden">Live</span>
                          </Button>
                          {!currentProject.isCompanyProject && currentProject.github && (
                            <Button
                              onClick={handleGithub}
                              size="sm"
                              variant="outline"
                              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:border-white/50 transition-all"
                            >
                              <Github className="h-4 w-4" />
                              <span className="hidden sm:inline ml-1">Code</span>
                            </Button>
                          )}
                        </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Impact Metrics */}
                <div className="lg:hidden mt-6 grid grid-cols-2 gap-3">
                  {Object.entries(currentProject.impact).map(([key, value], index) => {
                    const IconComponent = getImpactIcon(key)
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-3 rounded-xl text-center ${
                          theme === "light"
                            ? "bg-white shadow-md border border-gray-200"
                            : "bg-gray-800 border border-gray-700"
                        }`}
                      >
                        <IconComponent
                          className={`h-4 w-4 mx-auto mb-2 ${
                            theme === "light" ? "text-emerald-500" : "text-yellow-400"
                          }`}
                        />
                        <div
                          className={`text-lg font-bold ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}
                        >
                          {value}
                        </div>
                        <div className={`text-xs capitalize ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                          {key}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Desktop Impact Metrics - Floating Cards */}
                <div className="hidden lg:block absolute -top-4 -right-4 space-y-3">
                  {Object.entries(currentProject.impact).map(([key, value], index) => {
                    const IconComponent = getImpactIcon(key)
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 rounded-xl min-w-[100px] text-center ${
                          theme === "light"
                            ? "bg-white shadow-lg border border-gray-200"
                            : "bg-gray-800 border border-gray-700"
                        }`}
                      >
                        <IconComponent
                          className={`h-5 w-5 mx-auto mb-2 ${
                            theme === "light" ? "text-emerald-500" : "text-yellow-400"
                          }`}
                        />
                        <div
                          className={`text-lg font-bold ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}
                        >
                          {value}
                        </div>
                        <div className={`text-xs capitalize ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                          {key}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
                <div>
                  <motion.h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                    layoutId={`title-${activeProject}`}
                  >
                    {currentProject.title}
                  </motion.h3>
                  <motion.p
                    className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                      theme === "light" ? "text-emerald-600" : "text-yellow-400"
                    }`}
                    layoutId={`subtitle-${activeProject}`}
                  >
                    {currentProject.subtitle}
                  </motion.p>
                  <p
                    className={`text-sm sm:text-base lg:text-lg ${theme === "light" ? "text-slate-600" : "text-gray-300"}`}
                  >
                    {currentProject.description}
                  </p>
                </div>

                {/* Project Type Badge */}
                <div className="flex items-center gap-2">
                  <Badge
                    className={`${
                      currentProject.isCompanyProject
                        ? theme === "light"
                          ? "bg-blue-100 text-blue-700 border-blue-200"
                          : "bg-blue-900/30 text-blue-400 border-blue-700/50"
                        : theme === "light"
                          ? "bg-green-100 text-green-700 border-green-200"
                          : "bg-green-900/30 text-green-400 border-green-700/50"
                    }`}
                  >
                    {currentProject.isCompanyProject ? (
                      <>
                        <Building className="h-3 w-3 mr-1" />
                        Company Project
                      </>
                    ) : (
                      <>
                        <Code className="h-3 w-3 mr-1" />
                        Open Source
                      </>
                    )}
                  </Badge>
                </div>

                {/* Action Buttons - Mobile */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    onClick={handleLiveDemo}
                    className={`flex-1 ${
                      theme === "light"
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                        : "bg-yellow-400 hover:bg-yellow-500 text-black"
                    } shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Demo
                  </Button>
                  {!currentProject.isCompanyProject && currentProject.github && (
                    <Button
                      onClick={handleGithub}
                      variant="outline"
                      className={`flex-1 ${
                        theme === "light"
                          ? "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                          : "border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10"
                      }`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                  )}
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(currentProject.metrics).map(([metric, value]) => (
                    <motion.div
                      key={metric}
                      className={`p-3 sm:p-4 rounded-xl ${
                        theme === "light"
                          ? "bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-100"
                          : "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm font-medium capitalize">
                          {metric.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span
                          className={`text-xs sm:text-sm font-bold ${
                            theme === "light" ? "text-emerald-600" : "text-yellow-400"
                          }`}
                        >
                          {value}%
                        </span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${theme === "light" ? "bg-gray-200" : "bg-gray-700"}`}>
                        <motion.div
                          className={`h-2 rounded-full ${theme === "light" ? "bg-emerald-500" : "bg-yellow-400"}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-bold mb-3 text-base sm:text-lg">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {currentProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${theme === "light" ? "bg-emerald-500" : "bg-yellow-400"}`}
                        />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-bold mb-3 text-base sm:text-lg">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${
                          theme === "light"
                            ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                            : "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                <div
                  className={`p-4 sm:p-6 rounded-xl ${
                    theme === "light"
                      ? "bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-100"
                      : "bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600/30"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        theme === "light" ? "bg-emerald-100" : "bg-yellow-400/20"
                      }`}
                    >
                      <span className="text-lg sm:text-xl">💬</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`italic mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg ${
                          theme === "light" ? "text-slate-700" : "text-gray-300"
                        }`}
                      >
                        "{currentProject.testimonial.text}"
                      </p>
                      <p
                        className={`font-medium text-xs sm:text-sm ${
                          theme === "light" ? "text-slate-600" : "text-gray-400"
                        }`}
                      >
                        — {currentProject.testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-12 sm:mt-16 p-4 sm:p-6 lg:p-8 rounded-2xl ${
            theme === "light"
              ? "bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-100"
              : "bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  theme === "light" ? "text-emerald-600" : "text-yellow-400"
                }`}
              >
                1.15M+
              </div>
              <div className={`text-xs sm:text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                Users Impacted
              </div>
            </div>
            <div>
              <div
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  theme === "light" ? "text-emerald-600" : "text-yellow-400"
                }`}
              >
                50+
              </div>
              <div className={`text-xs sm:text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                Projects Completed
              </div>
            </div>
            <div>
              <div
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  theme === "light" ? "text-emerald-600" : "text-yellow-400"
                }`}
              >
                99.9%
              </div>
              <div className={`text-xs sm:text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                Average Uptime
              </div>
            </div>
            <div>
              <div
                className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                  theme === "light" ? "text-emerald-600" : "text-yellow-400"
                }`}
              >
                100%
              </div>
              <div className={`text-xs sm:text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                Client Satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveProjectShowcase
