"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { useToast } from "@/hooks/use-toast"
import { GITHUB_URL, LINKEDIN_URL } from "@/constants"

export function Contact() {
  const {toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { theme } = useTheme()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" })
        toast({
          title: "✅ Mail Sent Successfully",
          description: "Thanks for contacting us!",
        })
      } else {
        toast({
          variant: "destructive",
          title: "❌ Failed to send message",
          description: "Please try again later.",
        })
      }
    } catch (err) {
      console.error("Error:", err)
      toast({
        variant: "destructive",
        title: "⚠️ Something went wrong",
        description: "Could not send your message. Try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 ${
              theme === "light" ? "text-slate-600" : "text-gray-300"
            }`}
          >
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">Let's Connect</h3>
              <p
                className={`mb-6 sm:mb-8 text-sm sm:text-base ${theme === "light" ? "text-slate-600" : "text-gray-300"}`}
              >
                I'm always interested in new opportunities and exciting projects. Whether you need a full-stack
                developer for your team or want to discuss a freelance project, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-3 sm:p-4 glass rounded-lg">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    theme === "light" ? "bg-emerald-100" : "bg-yellow-400/20"
                  }`}
                >
                  <Mail
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                  <p
                    className={`text-xs sm:text-sm break-all ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}
                  >
                    contact@webcoderspeed.dev
                  </p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-3 sm:p-4 glass rounded-lg">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    theme === "light" ? "bg-emerald-100" : "bg-yellow-400/20"
                  }`}
                >
                  <Phone
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-sm sm:text-base">Phone</h4>
                  <p className={`text-xs sm:text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                    +91 83838 55474
                  </p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-3 sm:p-4 glass rounded-lg">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    theme === "light" ? "bg-emerald-100" : "bg-yellow-400/20"
                  }`}
                >
                  <MapPin
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-sm sm:text-base">Location</h4>
                  <p className={`text-xs sm:text-sm ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                    Gurugram, India
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 glass rounded-full transition-colors ${
                  theme === "light" ? "hover:bg-blue-100/50" : "hover:bg-yellow-400/20"
                }`}
              >
                <Linkedin
                  className={`h-5 w-5 sm:h-6 sm:w-6 ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}
                />
              </motion.a>
              <motion.a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 glass rounded-full transition-colors ${
                  theme === "light" ? "hover:bg-blue-100/50" : "hover:bg-yellow-400/20"
                }`}
              >
                <Github
                  className={`h-5 w-5 sm:h-6 sm:w-6 ${theme === "light" ? "text-emerald-600" : "text-yellow-400"}`}
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`${
                          theme === "light"
                            ? "bg-blue-50/50 border-blue-200 focus:border-emerald-400"
                            : "bg-white/5 border-white/20 focus:border-yellow-400"
                        }`}
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`${
                          theme === "light"
                            ? "bg-blue-50/50 border-blue-200 focus:border-emerald-400"
                            : "bg-white/5 border-white/20 focus:border-yellow-400"
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`${
                        theme === "light"
                          ? "bg-blue-50/50 border-blue-200 focus:border-emerald-400"
                          : "bg-white/5 border-white/20 focus:border-yellow-400"
                      }`}
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`resize-none ${
                        theme === "light"
                          ? "bg-blue-50/50 border-blue-200 focus:border-emerald-400"
                          : "bg-white/5 border-white/20 focus:border-yellow-400"
                      }`}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full pulse-glow ${
                      theme === "light"
                        ? "bg-emerald-500 text-white hover:bg-emerald-600"
                        : "bg-yellow-400 text-black hover:bg-yellow-500"
                    }`}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="mr-2"
                      >
                        <Send className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
