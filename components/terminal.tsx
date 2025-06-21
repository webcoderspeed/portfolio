"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { TerminalIcon } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import type { JSX } from "react/jsx-runtime"

type Command = {
  input: string
  output: string | JSX.Element
}

const COMMANDS = {
  help: (theme: string) => (
    <div className="space-y-1">
      <p>Available commands:</p>
      <p>
        <span className={theme === "light" ? "text-emerald-500" : "text-yellow-400"}>help</span> - Show this help
        message
      </p>
      <p>
        <span className={theme === "light" ? "text-emerald-500" : "text-yellow-400"}>about</span> - Learn about Sanjeev
      </p>
      <p>
        <span className={theme === "light" ? "text-emerald-500" : "text-yellow-400"}>skills</span> - List technical
        skills
      </p>
      <p>
        <span className={theme === "light" ? "text-emerald-500" : "text-yellow-400"}>projects</span> - View featured
        projects
      </p>
      <p>
        <span className={theme === "light" ? "text-emerald-500" : "text-yellow-400"}>contact</span> - Get contact
        information
      </p>
      <p>
        <span className={theme === "light" ? "text-emerald-500" : "text-yellow-400"}>clear</span> - Clear the terminal
      </p>
    </div>
  ),
  about: (
    <div className="space-y-1">
      <p>Sanjeev Sharma - Full Stack Developer</p>
      <p>SDE II @ Acefone | Ex Tribe | 5⭐ on Fiverr</p>
      <p>4+ years of experience in designing and implementing product development.</p>
      <p>Currently working at Acefone as a Product Engineer.</p>
    </div>
  ),
  skills: (
    <div className="space-y-1">
      <p>Technical Skills:</p>
      <p>- Frontend: React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind</p>
      <p>- Backend: Node.js, NestJS, Express.js, REST APIs, GraphQL, Microservices</p>
      <p>- Database: MongoDB, MySQL, Redis, Firebase</p>
      <p>- DevOps: AWS, DigitalOcean, Docker, Nginx</p>
    </div>
  ),
  projects: (
    <div className="space-y-1">
      <p>Featured Projects:</p>
      <p>1. E-mopro Real Estate Platform - Next.js, Node.js, MongoDB, Socket.io</p>
      <p>2. TRIBE Stock Advisory Platform - React.js, Node.js, Express.js, MongoDB</p>
      <p>3. Car Rental Management System - Next.js, Firebase, TypeScript</p>
      <p>4. Freshmade Restaurant Platform - Next.js, Storyblok CMS, TypeScript</p>
    </div>
  ),
  contact: (
    <div className="space-y-1">
      <p>Contact Information:</p>
      <p>Email: contact@webcoderspeed.dev</p>
      <p>Location: Gurugram, India</p>
      <p>LinkedIn: linkedin.com/in/sanjeev-sharma</p>
      <p>GitHub: github.com/webcoderspeed</p>
    </div>
  ),
  clear: "CLEAR_TERMINAL",
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [commands, setCommands] = useState<Command[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (isOpen && terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      inputRef.current?.focus()
    }
  }, [isOpen, commands])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!currentInput.trim()) return

    const input = currentInput.trim().toLowerCase()
    let output: string | JSX.Element = "Command not found. Type 'help' for available commands."

    if (input in COMMANDS) {
      if (input === "help") {
        output = COMMANDS.help(theme)
      } else {
        output = COMMANDS[input as keyof typeof COMMANDS]
      }
    }

    if (output === "CLEAR_TERMINAL") {
      setCommands([])
    } else {
      setCommands([...commands, { input: currentInput, output }])
    }

    setCurrentInput("")
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`p-3 glass rounded-full transition-colors ${
          theme === "light" ? "hover:bg-blue-100/50" : "hover:bg-yellow-400/20"
        }`}
      >
        <TerminalIcon className={`h-6 w-6 ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className={`absolute bottom-16 right-0 w-80 md:w-96 h-96 glass rounded-lg overflow-hidden ${
            theme === "light" ? "terminal-bg" : ""
          }`}
        >
          <div
            className={`p-2 flex items-center justify-between ${
              theme === "light" ? "terminal-header" : "bg-gray-800/80"
            }`}
          >
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={() => setIsOpen(false)} />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className={`text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>webcoderspeed.dev</div>
          </div>

          <div ref={terminalRef} className="h-[calc(100%-32px)] overflow-y-auto p-4 font-mono text-sm">
            <div className={`mb-4 ${theme === "light" ? "terminal-success" : "text-green-400"}`}>
              Welcome to WebCoderSpeed Terminal! Type 'help' to see available commands.
            </div>

            {commands.map((cmd, index) => (
              <div key={index} className="mb-4">
                <div className="flex">
                  <span className={`mr-2 ${theme === "light" ? "terminal-prompt" : "text-yellow-400"}`}>$</span>
                  <span className={theme === "light" ? "terminal-text" : ""}>{cmd.input}</span>
                </div>
                <div className={`mt-1 ${theme === "light" ? "terminal-text" : "text-gray-300"}`}>{cmd.output}</div>
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center">
              <span className={`mr-2 ${theme === "light" ? "terminal-prompt" : "text-yellow-400"}`}>$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className={`flex-1 bg-transparent outline-none ${theme === "light" ? "terminal-text" : ""}`}
                autoFocus
              />
            </form>
          </div>
        </motion.div>
      )}
    </div>
  )
}
