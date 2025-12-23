/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Rocket, Cloud, Users } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const stats = [
    { icon: Calendar, label: '2+ Years Experience', value: '' },
    { icon: Rocket, label: 'Production-Ready Applications', value: '' },
    { icon: Cloud, label: 'Cloud & Deployment Experience', value: '' },
    { icon: Users, label: 'Team Collaboration & Mentorship', value: '' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-5xl mx-auto">
            Full Stack Software Engineer focused on building production-ready web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I’m a Full Stack Software Engineer with hands-on experience building scalable and
              reliable web applications. I focus on writing clean, maintainable code and designing
              systems that perform well and scale effectively over time.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Comfortable working across frontend, backend, and cloud environments, I enjoy
              owning features end-to-end — from shaping user experiences to implementing
              robust backend logic and deployment workflows. I’m driven by solving real-world
              problems and building software that delivers long-term value.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I value clear communication, thoughtful problem-solving, and continuous learning,
              and I enjoy collaborating with teams to turn ideas into well-executed solutions.
              Whether working independently or as part of a team, I take ownership of my work
              and strive to build software that is both technically sound and user-focused.
            </p>

            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl text-center card-hover border border-primary-500/20"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <stat.icon size={24} className="text-white" />
                </motion.div>
                {stat.value && (
                  <motion.h4
                    className="text-2xl font-bold gradient-text mb-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.h4>
                )}
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

