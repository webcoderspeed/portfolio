"use client";

import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { useRef } from "react";

const experiences = [
  {
    title: "Product Engineer (SDE II)",
    company: "Acefone",
    location: "Gurugram, India",
    period: "Dec 2023 - Present",
    duration: "1+ year",
    type: "Full-time",
    current: true,
    description:
      "Joined during a critical transition phase as the company migrated from a legacy PHP stack to a modern MERN-based microservices architecture. Took the opportunity to work from scratch on greenfield projects and define scalable service patterns.",
    achievements: [
      "Led development of Interaction Hub, a shared inbox platform enabling agents to respond to user queries via voice (VoIP + PSTN), messaging (WhatsApp), and WhatsApp Calls.",
      "Pioneered Asia’s first IVR integration on WhatsApp, handling both calls and messaging in a unified agent experience.",
      "Mentored a team of 3 junior developers, collaborating closely with product managers and QA teams to deliver production-grade features.",
    ],
    skills: [
      "Nest.js",
      "Microservices",
      "Next.js",
      "Typescript",
      "Redux",
      "Redis",
      "Socket.io",
    ],
    companyUrl: "https://acefone.com",
  },
  {
    title: "Full-stack Developer",
    company: "EMPRO Real Estate (Under Maintenance)",
    location: "Canada (Remote)",
    period: "Jun 2023 - Dec 2023",
    duration: "6 months",
    type: "Freelance",
    current: false,
    description:
      "Built a comprehensive real estate platform with role-based access control, real-time messaging, and scalable architecture for the Canadian market.",
    achievements: [
      "Developed complete real estate platform from scratch",
      "Implemented real-time messaging with Socket.io",
      "Built role-based access control system",
      "Achieved 99.9% uptime with DigitalOcean deployment",
    ],
    skills: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Redis",
      "DigitalOcean",
    ],
    companyUrl: "https://e-mopro.com",
  },
  {
    title: "Full Stack Engineer",
    company: "TRIBE",
    location: "Bangalore (Remote)",
    period: "Aug 2021 - Sep 2023",
    duration: "2+ years",
    type: "Full-time",
    current: false,
    description:
      "Founding team member at a stock advisory platform, responsible for building and scaling the product from the ground up. Led a team of 3 developers and worked across the full stack to deliver a robust, real-time investment tool. Continued working voluntarily even after funding challenges arose due to SEBI's strict regulations.",
    achievements: [
      "Scaled platform from 0 to 100K+ users",
      "Built and published Chrome extension with 10K+ downloads",
      "Led a team of 3 developers across frontend and backend",
      "Created real-time stock data processing system using Socket.io and Redis",
      "Implemented automated testing pipelines reducing bugs by 70%",
      "Worked for 2 additional months without pay during critical funding phase",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Socket.io",
      "Chrome Extension",
      "Redis BullMq",
      "AWS SQS",
    ],
    companyUrl: "http://investwithtribe.com",
  },
  {
    title: "Frontend Developer",
    company: "Freshmade",
    location: "Belgium (Remote)",
    period: "Jul 2023 - Sep 2023",
    duration: "3 months",
    type: "Freelance",
    current: false,
    description:
      "Contributed to building and maintaining modern web applications for a food and catering business. Delivered pixel-perfect, responsive interfaces using modern frontend technologies while collaborating closely with designers and backend teams.",
    achievements: [
      "Developed high-performance, SEO-friendly frontend using Next.js with SSR and SSG",
      "Implemented utility-first design with Tailwind CSS for rapid and consistent styling",
      "Improved code reliability and maintainability using TypeScript",
      "Integrated and configured Storyblok CMS for client-friendly content management",
      "Collaborated with cross-functional teams for on-time and brand-aligned deliveries",
      "Performed thorough code reviews ensuring scalability and adherence to best practices",
    ],
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "Storyblok CMS"],
    companyUrl: "https://freshmade.be",
  },
  {
    title: "Frontend Web Developer",
    company: "Casa Studios",
    location: "France (Remote)",
    period: "Jun 2023 - Jun 2023",
    duration: "1 month",
    type: "Freelance",
    current: false,
    description:
      "Worked as a freelance frontend developer to build and maintain modern, responsive web applications for a creative digital agency. Delivered high-quality user experiences using cutting-edge web technologies and CMS integration.",
    achievements: [
      "Built performant, responsive frontend using Next.js with SSR and SSG",
      "Styled applications using Tailwind CSS with a utility-first design approach",
      "Enhanced code quality and maintainability using TypeScript",
      "Integrated Storyblok CMS to enable easy client-side content updates",
      "Implemented SendGrid for transactional and marketing email support",
      "Collaborated with cross-functional teams to meet brand and project goals"
    ],
    skills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Storyblok CMS",
      "SendGrid"
    ],
    companyUrl: "#"
  },
  {
    title: "Frontend Developer (Next.js)",
    company: "Vinci Club",
    location: "Belgium (Remote)",
    period: "Dec 2022 - Jan 2023",
    duration: "2 months",
    type: "Freelance",
    current: false,
    description:
      "Designed and developed a modern, SEO-optimized website for a gym, highlighting services, trainers, schedules, and pricing. Delivered a responsive and accessible user experience across all devices.",
    achievements: [
      "Built SEO-friendly website using Next.js with server-side rendering",
      "Implemented type-safe and maintainable codebase using TypeScript",
      "Developed flexible and consistent UI with Tailwind CSS",
      "Used Headless UI for accessible, customizable components",
      "Created responsive layouts with interactive features like class schedules and trainer profiles",
      "Delivered project on time and within budget, exceeding client expectations"
    ],
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Headless UI",
      "TypeScript"
    ],
    companyUrl: "https://www.vinci-club.be" 
  },
  {
    title: "Frontend Developer (Next.js & Firebase)",
    company: "VBM Rental",
    location: "Belgium (Remote)",
    period: "Oct 2022 - Dec 2022",
    duration: "3 months",
    type: "Freelance",
    current: false,
    description:
      "Worked on a car rental platform to build a scalable, responsive, and user-friendly frontend. Utilized Next.js and Firebase to deliver real-time functionality, performance optimization, and seamless booking features.",
    achievements: [
      "Built core user interface with Next.js for responsive and accessible experience",
      "Implemented Firebase Auth and Firestore for secure authentication and data handling",
      "Developed features like car search, booking, user profiles, and real-time notifications",
      "Integrated with third-party car APIs for real-time vehicle listings",
      "Used advanced caching and performance optimization techniques to enhance UX",
      "Collaborated with cross-functional teams to ensure timely delivery and alignment on requirements"
    ],
    skills: [
      "Next.js",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Tailwind CSS",
      "Third-party API Integration"
    ],
    companyUrl: "https://vbmrental.be" // Update if a different or internal site
  }  
  
];

function ExperienceCard({
  exp,
  index,
  theme,
}: {
  exp: any;
  index: number;
  theme: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full"
    >
      <Card
        className={`transition-all duration-500 hover:shadow-xl group w-full ${
          theme === "light"
            ? "bg-white shadow-md border border-gray-200 hover:shadow-lg hover:border-emerald-200"
            : "bg-gray-800/90 border border-gray-700 hover:bg-gray-800 hover:border-yellow-400/20"
        }`}
      >
        <CardContent className="p-4 sm:p-5 lg:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3
                  className={`text-lg sm:text-xl lg:text-2xl font-bold pr-2 transition-colors break-words ${
                    theme === "light" ? "text-slate-800" : "text-white"
                  }`}
                >
                  {exp.title}
                </h3>
                {exp.current && (
                  <Badge
                    className={`text-xs animate-pulse flex-shrink-0 ml-2 ${
                      theme === "light"
                        ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                        : "bg-yellow-400/20 text-yellow-400 border-yellow-400/30"
                    }`}
                  >
                    Live
                  </Badge>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <div className="flex items-center gap-1 flex-wrap">
                  <Building
                    className={`h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 ${
                      theme === "light" ? "text-slate-600" : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`font-medium text-sm sm:text-base break-words ${
                      theme === "light" ? "text-slate-700" : "text-gray-200"
                    }`}
                  >
                    {exp.company}
                  </span>
                  {exp.companyUrl !== "#" && (
                    <a href={exp.companyUrl} target="_blank" rel="noreferrer">
                      <ExternalLink
                        className={`h-3 w-3 opacity-50 flex-shrink-0 ${
                          theme === "light" ? "text-slate-500" : "text-gray-500"
                        }`}
                      />
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                  <MapPin
                    className={`h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 ${
                      theme === "light" ? "text-slate-600" : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`text-xs sm:text-sm ${
                      theme === "light" ? "text-slate-600" : "text-gray-400"
                    }`}
                  >
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Period & Type */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
            <div className="flex items-center gap-1 flex-wrap">
              <Calendar
                className={`h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 ${
                  theme === "light" ? "text-emerald-600" : "text-yellow-400"
                }`}
              />
              <span
                className={`text-xs sm:text-sm font-medium ${
                  theme === "light" ? "text-emerald-600" : "text-yellow-400"
                }`}
              >
                {exp.period}
              </span>
              <span
                className={`text-xs sm:text-sm ${
                  theme === "light" ? "text-slate-500" : "text-gray-500"
                }`}
              >
                ({exp.duration})
              </span>
            </div>
            <Badge
              variant="outline"
              className={`w-fit text-xs flex-shrink-0 ${
                theme === "light"
                  ? "border-emerald-400 text-emerald-600"
                  : "border-yellow-400 text-yellow-400"
              }`}
            >
              {exp.type}
            </Badge>
          </div>

          {/* Description */}
          <p
            className={`mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base leading-relaxed ${
              theme === "light" ? "text-slate-600" : "text-gray-300"
            }`}
          >
            {exp.description}
          </p>

          {/* Key Achievements */}
          <div className="mb-3 sm:mb-4">
            <h4
              className={`font-semibold mb-2 text-xs sm:text-sm ${
                theme === "light" ? "text-slate-700" : "text-gray-200"
              }`}
            >
              Key Achievements:
            </h4>
            <ul className="space-y-1">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 text-xs sm:text-sm"
                >
                  <div
                    className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 ${
                      theme === "light" ? "bg-emerald-500" : "bg-yellow-400"
                    }`}
                  />
                  <span
                    className={`break-words ${
                      theme === "light" ? "text-slate-600" : "text-gray-300"
                    }`}
                  >
                    {achievement}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4
              className={`font-semibold mb-2 text-xs sm:text-sm ${
                theme === "light" ? "text-slate-700" : "text-gray-200"
              }`}
            >
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {exp.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: skillIndex * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className={`text-xs px-2 py-1 transition-colors cursor-default ${
                      theme === "light"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                        : "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 hover:bg-yellow-400/20"
                    }`}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function TimelineDot({
  exp,
  index,
  theme,
  isInView,
}: {
  exp: any;
  index: number;
  theme: string;
  isInView: boolean;
}) {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-6 z-20">
      <motion.div
        className={`relative w-6 h-6 rounded-full border-4 transition-all duration-500 ${
          isInView || exp.current
            ? theme === "light"
              ? "bg-emerald-500 border-emerald-200 shadow-lg shadow-emerald-200"
              : "bg-yellow-400 border-yellow-300 shadow-lg shadow-yellow-400/50"
            : theme === "light"
            ? "bg-white border-gray-300"
            : "bg-gray-700 border-gray-600"
        }`}
        animate={
          isInView || exp.current
            ? {
                scale: [1, 1.3, 1],
                boxShadow:
                  theme === "light"
                    ? [
                        "0 0 0 0 rgba(16, 185, 129, 0.6)",
                        "0 0 0 15px rgba(16, 185, 129, 0)",
                        "0 0 0 0 rgba(16, 185, 129, 0)",
                      ]
                    : [
                        "0 0 0 0 rgba(251, 191, 36, 0.6)",
                        "0 0 0 15px rgba(251, 191, 36, 0)",
                        "0 0 0 0 rgba(251, 191, 36, 0)",
                      ],
              }
            : { scale: 1 }
        }
        transition={{
          duration: 2,
          repeat: isInView || exp.current ? Number.POSITIVE_INFINITY : 0,
          ease: "easeInOut",
        }}
      >
        {/* Super bright inner dot for active state */}
        {(isInView || exp.current) && (
          <motion.div
            className={`absolute inset-1 rounded-full ${
              theme === "light" ? "bg-emerald-400" : "bg-yellow-300"
            }`}
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Extra glow for current job */}
        {exp.current && (
          <motion.div
            className={`absolute inset-0 rounded-full ${
              theme === "light" ? "bg-emerald-400/30" : "bg-yellow-400/30"
            }`}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>

      {/* Current job indicator with better visibility */}
      {exp.current && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg ${
            theme === "light"
              ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
              : "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
          }`}
        >
          🔥 CURRENT
        </motion.div>
      )}

      {/* Active indicator for in-view items */}
      {isInView && !exp.current && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
            theme === "light"
              ? "bg-blue-100 text-blue-700 border border-blue-200"
              : "bg-gray-700 text-gray-300 border border-gray-600"
          }`}
        >
          ✨ Active
        </motion.div>
      )}
    </div>
  );
}

export function Experience() {
  const { theme } = useTheme();
  const experienceRefs = Array(experiences.length)
    .fill(null)
    .map(() => useRef(null));
  const isInViews = experienceRefs.map((ref) =>
    useInView(ref, { threshold: 0.3, margin: "-100px 0px" })
  );

  return (
    <section id="experience" className="py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 ${
              theme === "light" ? "text-slate-600" : "text-gray-300"
            }`}
          >
            My professional journey spanning across different industries and
            technologies
          </p>
        </motion.div>

        {/* Desktop Timeline Layout */}
        <div className="hidden lg:block relative max-w-7xl mx-auto">
          {/* Enhanced Timeline Line */}
          <div
            className={`absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 ${
              theme === "light"
                ? "bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200"
                : "bg-gradient-to-b from-yellow-400/30 via-yellow-400/50 to-yellow-400/30"
            }`}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                ref={experienceRefs[index]}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Enhanced Timeline Dot */}
                <TimelineDot
                  exp={exp}
                  index={index}
                  theme={theme}
                  isInView={isInViews[index]}
                />

                {/* Content Card */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "mr-auto pr-6" : "ml-auto pl-6"
                  }`}
                >
                  <ExperienceCard exp={exp} index={index} theme={theme} />
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Simple Layout */}
        <div className="lg:hidden space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} theme={theme} />
          ))}
        </div>

        {/* Enhanced Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-12 sm:mt-16 lg:mt-20 p-4 sm:p-6 lg:p-8 rounded-2xl ${
            theme === "light"
              ? "bg-gradient-to-br from-emerald-50 via-blue-50 to-emerald-50 border-2 border-emerald-100"
              : "bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-800/50 border-2 border-yellow-400/20"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "20+", label: "Projects Completed" },
              { value: "100K+", label: "Users Impacted" },
              { value: "5⭐", label: "Client Rating" },
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
  );
}
