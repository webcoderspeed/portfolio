"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Code2, Download, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/theme-context"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      if (!isScrolling) {
        const sections = navItems.map((item) => item.href.substring(1))
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })

        if (currentSection) {
          setActiveSection(currentSection)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isScrolling])

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume-sanjeev-sharma.pdf"
    link.download = "Sanjeev_Sharma_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setIsOpen(false) // Close mobile menu after action
  }

  const scrollToSection = (href: string) => {
    setIsScrolling(true)
    setIsOpen(false) // Close mobile menu immediately

    // Small delay to ensure menu closes first
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

        // Update active section immediately for better UX
        setActiveSection(href.substring(1))

        // Reset scrolling flag after animation
        setTimeout(() => {
          setIsScrolling(false)
        }, 1000)
      }
    }, 100)
  }

  const handleHireMe = () => {
    setIsOpen(false)
    scrollToSection("#contact")
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isOpen && !target.closest(".mobile-menu-container")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme === "light"
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer z-50"
            onClick={() => scrollToSection("#home")}
          >
            <div className={`p-2 rounded-lg ${theme === "light" ? "bg-emerald-100" : "bg-yellow-400/20"}`}>
              <Code2
                className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ${
                  theme === "light" ? "text-emerald-600" : "text-yellow-400"
                }`}
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-base sm:text-lg md:text-xl font-bold gradient-text">WebCoderSpeed</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-500">Live</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? theme === "light"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-yellow-400/20 text-yellow-400"
                    : theme === "light"
                      ? "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Button
              onClick={downloadResume}
              variant="outline"
              size="sm"
              className={`text-xs lg:text-sm px-3 lg:px-4 ${
                theme === "light"
                  ? "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                  : "border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10"
              }`}
            >
              <Download className="mr-1 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4" />
              <span className="hidden lg:inline">Resume</span>
              <span className="lg:hidden">CV</span>
            </Button>

            <Button
              onClick={handleHireMe}
              size="sm"
              className={`text-xs lg:text-sm px-3 lg:px-4 ${
                theme === "light"
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-yellow-400 hover:bg-yellow-500 text-black"
              } shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
            >
              <Zap className="mr-1 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4" />
              <span className="hidden lg:inline">Hire Me</span>
              <span className="lg:hidden">Hire</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2 z-50 relative">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Enhanced Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
                onClick={() => setIsOpen(false)}
              />

              {/* Mobile Menu with Solid Background */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mobile-menu-container fixed top-16 left-4 right-4 z-50 md:hidden"
              >
                <div
                  className={`p-6 rounded-2xl shadow-2xl border-2 ${
                    theme === "light"
                      ? "bg-white shadow-xl border-gray-200 backdrop-blur-xl"
                      : "bg-gray-900 shadow-2xl border-gray-700 backdrop-blur-xl"
                  }`}
                  style={{
                    backgroundColor: theme === "light" ? "rgba(255, 255, 255, 0.98)" : "rgba(17, 24, 39, 0.98)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  }}
                >
                  {/* Navigation Items */}
                  <div className="space-y-1 mb-6">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-left py-4 px-4 rounded-xl text-base font-medium transition-all duration-200 flex items-center justify-between group ${
                          activeSection === item.href.substring(1)
                            ? theme === "light"
                              ? "bg-emerald-100 text-emerald-700 shadow-sm"
                              : "bg-yellow-400/20 text-yellow-400 shadow-sm"
                            : theme === "light"
                              ? "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100"
                              : "text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 active:bg-yellow-400/20"
                        }`}
                      >
                        <span>{item.name}</span>
                        <motion.div
                          className={`w-2 h-2 rounded-full transition-all ${
                            activeSection === item.href.substring(1)
                              ? theme === "light"
                                ? "bg-emerald-500"
                                : "bg-yellow-400"
                              : "bg-transparent group-hover:bg-current opacity-30"
                          }`}
                          whileHover={{ scale: 1.2 }}
                        />
                      </motion.button>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3 pt-4 border-t border-gray-200/50"
                  >
                    <Button
                      onClick={downloadResume}
                      variant="outline"
                      size="lg"
                      className={`w-full justify-center ${
                        theme === "light"
                          ? "border-emerald-200 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100"
                          : "border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 active:bg-yellow-400/20"
                      }`}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>

                    <Button
                      onClick={handleHireMe}
                      size="lg"
                      className={`w-full justify-center ${
                        theme === "light"
                          ? "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white"
                          : "bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black"
                      } shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200`}
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      Hire Me Now
                    </Button>
                  </motion.div>

                  {/* Close instruction */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className={`text-center text-xs mt-4 ${theme === "light" ? "text-slate-500" : "text-gray-500"}`}
                  >
                    Tap outside to close
                  </motion.p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
