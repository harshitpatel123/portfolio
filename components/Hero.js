'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, Code2 } from 'lucide-react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = "Full Stack Software Engineer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/harshitpatel123', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harshit-patel-b09491204', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:harshitpatel3703@gmail.com', label: 'Email' },
  ]

  const techStack = ['Web Applications', 'Frontend & Backend', 'Cloud & Deployment']

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Harshit-Patel-Resume.pdf'
    link.download = 'Harshit-Patel-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400"
            >
              <motion.span
                className="w-12 h-px bg-gradient-to-r from-primary-500 to-accent-500"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <span>Hello, I&apos;m</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold"
            >
              <motion.span
                className="gradient-text interactive"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Harshit
              </motion.span>
              <br />
              <motion.span
                className="text-white interactive"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Patel
              </motion.span>
            </motion.h1>

            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light"
            >
              <span>{text}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-primary-500"
              >
                |
              </motion.span>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400"
            >
              <MapPin size={18} className="text-accent-500" />
              <span>Ahmedabad, India</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              I build scalable and reliable web applications with a focus on clean architecture,
              performance, and long-term maintainability. Comfortable working across frontend,
              backend, and deployment workflows to deliver production-ready solutions.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 glass rounded-full text-xs sm:text-sm font-medium text-primary-400 border border-primary-500/30 interactive"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                <span>View Projects</span>
              </motion.button>

              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 glass rounded-full text-white font-medium flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300 border border-primary-500/30 text-sm sm:text-base"
              >
                <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 sm:p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 group border border-primary-500/20"
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hidden on mobile, visible on lg+ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex relative justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Simple geometric shapes */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 border-2 border-primary-500/30 rounded-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute bottom-20 left-10 w-16 h-16 bg-accent-500/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                className="absolute top-1/2 left-1/2 w-32 h-32 border border-primary-400/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Central element */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-48 h-48 glass rounded-2xl flex items-center justify-center border border-primary-500/30 interactive">
                  <div className="text-center">
                    <Code2 size={64} className="text-primary-400 mx-auto mb-4" />
                    <div className="text-lg font-semibold gradient-text">Full Stack</div>
                    <div className="text-sm text-gray-400">Software Engineer</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 interactive"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}