"use client"
import { useState, useEffect, useRef } from "react"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import {
  ArrowUpRight,
  Mail,
  ExternalLink,
  Users,
  Target,
  Eye,
  Figma,
  Palette,
  Code,
  Coffee,
  Menu,
  X,
} from "lucide-react"

const MinimalPortfolio = () => {
  const [currentSection, setCurrentSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      id: "calmnest",
      title: "CalmNest",
      category: "Mental Health App",
      year: "2024",
      description: "Research-driven mental health platform with 92% user satisfaction",
      image: "/images/calmnest-app.png",
      link: "https://www.figma.com/proto/ZVpEvxcY9xrxIGaACtSAUr/CalmNest?node-id=1-127&t=pkmQTE3YUgtNsjOD-1",
      color: "#667eea",
      tags: ["UX Research", "Mobile Design", "Accessibility"],
    },
    {
      id: "impact",
      title: "Impact Studio",
      category: "University Research Website",
      year: "2025",
      description: "Complete digital transformation with 150% engagement boost",
      image: "/images/impact-studio.png",
      link: "https://www.behance.net/gallery/229764377/UIUX-CASE-STUDY-IMPACT-STUDIO",
      color: "#11998e",
      tags: ["Web Design", "Strategy", "Conversion"],
    },
    {
      id: "library",
      title: "OSU Library",
      category: "Academic UX",
      year: "2025",
      description: "University library redesign improving efficiency by 40%",
      image: "/images/osu-library.png",
      link: "https://www.behance.net/gallery/229421389/UIUX-Case-study-%28Oregon-State-University-Library%29",
      color: "#ff9a9e",
      tags: ["Research", "Information Architecture", "Testing"],
    },
    {
      id: "floretta",
      title: "Floretta",
      category: "Flower Catalogue App",
      year: "2025",
      description: "Self-taught flower catalogue app with intuitive organized design.",
      image: "/images/floretta-app.png",
      link: "https://www.behance.net/gallery/220103375/UIUX-Case-Study-Flower-Catalogue-App",
      color: "#f5f1e8",
      tags: ["UI Design", "Self-taught", "Mobile App"],
    },
  ]

  const skills = [
    { name: "UX Research", level: 95, icon: Users },
    { name: "Design Systems", level: 90, icon: Palette },
    { name: "Prototyping", level: 88, icon: Figma },
    { name: "Accessibility", level: 92, icon: Eye },
    { name: "Strategy", level: 85, icon: Target },
    { name: "Frontend", level: 78, icon: Code },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.1 : 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  // Animated Text Component with Staggered Letters
  const AnimatedText = ({
    text,
    className = "",
    gradient = false,
    onClick,
  }: {
    text: string
    className?: string
    gradient?: boolean
    onClick?: () => void
  }) => {
    const letters = text.split("")
    const ref = useRef<HTMLDivElement>(null)

    return (
      <motion.div ref={ref} className={`inline-flex cursor-pointer ${className}`} onClick={onClick}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`inline-block ${gradient ? "gradient-text" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: shouldReduceMotion ? 0.1 : 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={
              !shouldReduceMotion
                ? {
                    y: -3,
                    scale: 1.1,
                    color: gradient ? undefined : "#667eea",
                    transition: { duration: 0.2 },
                  }
                : {}
            }
            style={{
              transformOrigin: "center bottom",
              display: letter === " " ? "inline" : "inline-block",
              width: letter === " " ? "0.5em" : "auto",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  // Dynamic Underline Component
  const DynamicUnderline = ({ isActive }: { isActive: boolean }) => (
    <motion.div
      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"
      initial={{ width: 0, opacity: 0 }}
      animate={{
        width: isActive ? "100%" : 0,
        opacity: isActive ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  )

  // Loading Screen with Morphing Animation
  if (isLoading) {
    return (
      <motion.div
        className="h-screen bg-[#F5F1E8] flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Morphing Logo */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 relative"
            animate={{
              rotate: shouldReduceMotion ? 0 : [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-black rounded-full"
              animate={{
                borderRadius: ["50%", "25%", "50%", "15%", "50%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-2 bg-[#F5F1E8] rounded-full"
              animate={{
                borderRadius: ["50%", "15%", "50%", "25%", "50%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>

          <AnimatedText text="RUTUJA" className="text-4xl font-light tracking-wider text-black" />
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-black relative overflow-hidden">
      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-black/10 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8]/80 backdrop-blur-xl border-b border-black/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <AnimatedText
              text="RUTUJA"
              className="text-2xl font-light tracking-wider"
              onClick={() => setCurrentSection("home")}
            />

            {!isMobile ? (
              <div className="flex items-center gap-12">
                {["ABOUT", "WORK","RESUME","CONTACT"].map((item, index) => {
                  const section = ["about", "work","resume", "contact"][index]
                  return (
                    <motion.div key={item} className="relative">
                      <AnimatedText
                        text={item}
                        className={`text-lg font-light tracking-wider transition-all duration-300 ${
                          currentSection === section ? "text-black" : "text-black/60 hover:text-black"
                        }`}
                        onClick={() => setCurrentSection(section)}
                      />
                      <DynamicUnderline isActive={currentSection === section} />
                    </motion.div>
                  )
                })}
              </div>
            ) : (
              <button onClick={() => setShowMobileMenu(true)} className="p-2">
                <Menu className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#F5F1E8]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-12">
                <AnimatedText text="RUTUJA" className="text-2xl font-light tracking-wider" />
                <button onClick={() => setShowMobileMenu(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8">
                {["ABOUT", "WORK","RESUME" , "CONTACT"].map((item, index) => {
                  const section = ["about", "work", "resume","contact"][index]
                  return (
                    <motion.div key={item}>
                      <AnimatedText
                        text={item}
                        className="text-4xl font-light tracking-wider"
                        onClick={() => {
                          setCurrentSection(section)
                          setShowMobileMenu(false)
                        }}
                      />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20 relative z-10">
        <AnimatePresence mode="wait">
          {currentSection === "home" && (
            <motion.section
              key="home"
              className="min-h-screen flex items-center justify-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center max-w-4xl">
                <motion.div className="mb-8" variants={stagger} initial="initial" animate="animate">
                  <motion.div variants={fadeIn} className="mb-6">
                    <AnimatedText
                      text="UX DESIGNER"
                      className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none gradient-text"
                      gradient={true}
                    />
                  </motion.div>

                  <motion.p
                    className="text-xl md:text-2xl font-light text-black/70 mb-8 max-w-2xl mx-auto leading-relaxed"
                    variants={fadeIn}
                  >
                    From logic to layout, I design with both sides of the brain. Blending my developer roots with design
                    thinking to craft experiences that just click.
                  </motion.p>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                >
                  <motion.button
                    onClick={() => setCurrentSection("work")}
                    className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-black text-[#F5F1E8] rounded-full font-light tracking-wider"
                    whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
                  >
                    VIEW WORK
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </motion.button>

                  <motion.button
                    onClick={() => window.open("mailto:shingaterutuja21@gmail.com")}
                    className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 border border-black/20 rounded-full font-light tracking-wider hover:border-black/40"
                    whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
                  >
                    GET IN TOUCH
                    <Mail className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </motion.button>
                </motion.div>

                {/* Enhanced Stats with Morphing Elements */}
                <motion.div
                  className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    { number: "1+", label: "Years Experience" },
                    { number: "10+", label: "Projects Completed" },
                    { number: "92%", label: "Client Satisfaction" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center relative group"
                      variants={fadeIn}
                      whileHover={!shouldReduceMotion ? { y: -5 } : {}}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={`stat-bg-${index}`}
                      />
                      <div className="relative p-4">
                        <div className="text-3xl md:text-4xl font-light mb-2">{stat.number}</div>
                        <div className="text-sm text-black/60 font-light tracking-wider">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>
          )}

          {currentSection === "about" && (
            <motion.section
              key="about"
              className="min-h-screen flex items-center justify-center px-6 py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-6xl mx-auto">
                <motion.div
                  className="grid md:grid-cols-2 gap-16 items-start"
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div variants={fadeIn}>
                    <AnimatedText
                      text="ABOUT"
                      className="text-5xl md:text-6xl font-light mb-8 tracking-tight gradient-text"
                      gradient={true}
                    />
                    <div className="space-y-6 text-lg font-light leading-relaxed text-black/80">
                      <p>
                        Hi, I'm Rutuja, a curious crossover between a computer science grad and a full-on design nerd. I
                        didn't walk into design with mood boards and Figma tabs open. I stumbled in asking "Why does
                        this feel off?" and "Can we make it better?"
                      </p>
                      <p>
                        Somewhere between debugging code and obsessing over button micro-interactions, I found my zone:
                        crafting experiences that feel right. Over the past year, I've been learning by doing, designing
                        for real people, not just perfect mockups.
                      </p>
                      <p>
                        I ask a lot of questions (sometimes too many), sketch messy ideas, and keep tweaking things
                        until they feel right. I'm not trying to be perfect. I'm just trying to get better, stay
                        curious, and build things that feel honest and thoughtful.
                      </p>
                    </div>

                    <div className="mt-12">
                      <h3 className="text-2xl font-light mb-6">Education</h3>
                      <motion.div
                        className="border-l-2 border-black/20 pl-6 relative"
                        whileHover={!shouldReduceMotion ? { x: 4 } : {}}
                      >
                        <div className="text-lg font-medium">MEng Computer Science</div>
                        <div className="text-black/60">Oregon State University</div>
                        <div className="text-sm text-black/50 mt-1">Human-Computer Interaction</div>
                      </motion.div>
                    </div>

                    <div className="mt-12">
                      <h3 className="text-2xl font-light mb-6">Certifications</h3>
                      <div className="space-y-4">
                        <motion.div
                          className="border-l-2 border-black/20 pl-6 relative"
                          whileHover={!shouldReduceMotion ? { x: 4 } : {}}
                        >
                          <div className="text-lg font-medium">Google UX Design Professional Certificate</div>
                          <div className="text-black/60">Google</div>
                        </motion.div>
                        <motion.div
                          className="border-l-2 border-black/20 pl-6 relative"
                          whileHover={!shouldReduceMotion ? { x: 4 } : {}}
                        >
                          <div className="text-lg font-medium">User Experience for Web Design</div>
                          <div className="text-black/60">Certification Program</div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <div className="relative group mb-8">
                      <motion.img
                        src="/images/rutuja-about.jpeg"
                        alt="Rutuja at Figma conference"
                        className="w-full rounded-2xl"
                        whileHover={!shouldReduceMotion ? { scale: 1.02, rotate: 1 } : {}}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="mt-8 space-y-4">
                      <h3 className="text-xl font-light mb-4">Core Skills</h3>
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="flex items-center justify-between group cursor-pointer"
                          whileHover={!shouldReduceMotion ? { x: 4 } : {}}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-3">
                            <skill.icon className="w-5 h-5 group-hover:text-[#667eea] transition-colors" />
                            <span className="font-light">{skill.name}</span>
                          </div>
                          <span className="text-sm text-black/60">{skill.level}%</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Outside the screen section */}
                <motion.div
                  className="grid md:grid-cols-2 gap-16 items-center mt-20"
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div variants={fadeIn}>
                    <h3 className="text-3xl font-light mb-6 tracking-tight">Outside the screen...</h3>
                    <div className="text-lg font-light leading-relaxed text-black/70">
                      <p>
                        When I'm not deep into Figma frames, you'll find me exploring new places or curled up at home
                        doing absolutely nothing. I love slow days filled with cooking experiments, spontaneous reading
                        sprees, or wandering around with my camera, capturing little moments that feel special.
                      </p>
                      <p className="mt-4">
                        I'm always chasing experiences, whether that's through a weekend adventure or a cozy afternoon
                        doing nothing at all. Wherever the journey leads, I'm here for it, one quiet, curious step at a
                        time.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <div className="relative group">
                      <motion.img
                        src="/images/outside-screen.png"
                        alt="Outside the screen illustration"
                        className="w-full max-w-md mx-auto"
                        whileHover={!shouldReduceMotion ? { scale: 1.05, rotate: -2 } : {}}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>
          )}


{currentSection === "resume" && (
            <motion.section
            key="resume"
            className="min-h-screen flex items-center justify-center px-6 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src="/resume.pdf"
              className="w-full h-[90vh] border rounded"
              title="Resume PDF"
            />
          </motion.section>
          )}

          {currentSection === "work" && (
            <motion.section
              key="work"
              className="min-h-screen px-6 py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-6xl mx-auto">
                <motion.div className="text-center mb-16" variants={fadeIn} initial="initial" animate="animate">
                  <AnimatedText
                    text="WORK"
                    className="text-5xl md:text-6xl font-light mb-6 tracking-tight gradient-text"
                    gradient={true}
                  />
                  <p className="text-xl font-light text-black/70 max-w-2xl mx-auto">
                    Selected projects showcasing research-driven design solutions with measurable impact
                  </p>
                </motion.div>

                <motion.div
                  className="grid md:grid-cols-2 gap-8"
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="group cursor-pointer"
                      variants={fadeIn}
                      whileHover={!shouldReduceMotion ? { y: -8 } : {}}
                      transition={{ duration: 0.3 }}
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <div
                        className={`relative overflow-hidden rounded-2xl mb-6`}
                      >
                        <motion.img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className={`w-full h-64 object-contain`}
                          whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.div
                          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={!shouldReduceMotion ? { scale: 1.1, rotate: 45 } : {}}
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-light">{project.title}</h3>
                          <span className="text-sm text-black/50">{project.year}</span>
                        </div>
                        <p className="text-black/60 font-light">{project.category}</p>
                        <p className="text-black/80 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              className="px-3 py-1 text-xs bg-black/5 rounded-full font-light tracking-wider"
                              whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div className="text-center mt-16" variants={fadeIn} initial="initial" animate="animate">
                  <p className="text-lg font-light text-black/70 mb-8">
                    Want to see more work? I have additional projects and case studies available upon request.
                  </p>
                  <motion.button
                    onClick={() => window.open("mailto:shingaterutuja21@gmail.com")}
                    className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-black text-[#F5F1E8] rounded-full font-light tracking-wider mx-auto"
                    whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
                  >
                    REQUEST PORTFOLIO
                    <Mail className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </motion.section>
          )}

          {currentSection === "contact" && (
            <motion.section
              key="contact"
              className="min-h-screen flex items-center justify-center px-6 py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.div variants={stagger} initial="initial" animate="animate">
                  <motion.div variants={fadeIn}>
                    <AnimatedText
                      text="CONTACT"
                      className="text-5xl md:text-6xl font-light mb-8 tracking-tight gradient-text"
                      gradient={true}
                    />
                  </motion.div>

                  <motion.p
                    className="text-xl font-light text-black/70 mb-12 max-w-2xl mx-auto leading-relaxed"
                    variants={fadeIn}
                  >
                    Ready to create something amazing together? I'm always excited to work on meaningful projects that
                    make a difference.
                  </motion.p>

                  <motion.div className="grid md:grid-cols-2 gap-8 mb-12" variants={stagger}>
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "shingaterutuja21@gmail.com",
                        link: "mailto:shingaterutuja21@gmail.com",
                      },
                      {
                        icon: ExternalLink,
                        label: "LinkedIn",
                        value: "rutujashingate",
                        link: "https://www.linkedin.com/in/rutujashingate/",
                      },
                      {
                        icon: ExternalLink,
                        label: "Medium",
                        value: "@tinyydetails",
                        link: "https://medium.com/@tinyydetails",
                      },
                      {
                        icon: ExternalLink,
                        label: "Behance",
                        value: "rutunashingate",
                        link: "https://www.behance.net/rutunashingate",
                      },
                    ].map((contact, index) => (
                      <motion.a
                        key={contact.label}
                        href={contact.link}
                        target={contact.label !== "Email" ? "_blank" : "_self"}
                        rel={contact.label !== "Email" ? "noopener noreferrer" : ""}
                        className="group p-8 border border-black/10 rounded-2xl hover:border-black/20 transition-all duration-300 block relative overflow-hidden"
                        variants={fadeIn}
                        whileHover={!shouldReduceMotion ? { y: -4 } : {}}
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                          <contact.icon className="w-8 h-8 mb-4 mx-auto group-hover:text-[#667eea] transition-colors" />
                          <h3 className="text-lg font-medium mb-2">{contact.label}</h3>
                          <p className="text-black/60 font-light">{contact.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>

                  <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={fadeIn}>
                    <motion.button
                      onClick={() =>
                        window.open(
                          "mailto:shingaterutuja21@gmail.com?subject=Project Inquiry&body=Hi Rutuja, I'd like to discuss a project with you.",
                        )
                      }
                      className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-black text-[#F5F1E8] rounded-full font-light tracking-wider"
                      whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
                    >
                      START A PROJECT
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => window.open("https://calendly.com/rutuja-shingate", "_blank")}
                      className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 border border-black/20 rounded-full font-light tracking-wider hover:border-black/40"
                      whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
                    >
                      SCHEDULE CALL
                      <Coffee className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </motion.button>
                  </motion.div>

                  <motion.div className="mt-12 flex items-center justify-center gap-3" variants={fadeIn}>
                    <motion.div
                      className="w-3 h-3 bg-green-500 rounded-full"
                      animate={!shouldReduceMotion ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <span className="text-sm font-light tracking-wider text-black/60">AVAILABLE FOR NEW PROJECTS</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer
        className="border-t border-black/10 py-8 px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm font-light text-black/50">© 2024 Rutuja Shingate</div>
          <div className="text-sm font-light text-black/50">Designed & Developed with ♥</div>
        </div>
      </motion.footer>
    </div>
  )
}

export default MinimalPortfolio
