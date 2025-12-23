'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const experiences = [
    {
      title: 'Full Stack Software Engineer',
      company: 'Easpire Technolabs Pvt. Ltd.',
      location: 'Ahmedabad, India',
      period: 'June 2024 - Present',
      type: 'Full-time',
      description:
        'Working as a Full Stack Software Engineer building and maintaining scalable web applications. Contributing across frontend, backend, and deployment workflows with a focus on clean architecture, performance, and long-term maintainability.',
      achievements: [
        'Developed and maintained production-ready features across frontend and backend',
        'Worked on REST and GraphQL APIs for scalable data handling',
        'Collaborated closely with product and design teams to deliver user-focused solutions',
        'Improved code quality through refactoring and best practices',
      ],
      tech: [
        'React',
        'Next.js',
        'Node.js',
        'GraphQL',
        'PostgreSQL',
        'Docker',
        'AWS',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Ace Infoway Pvt. Ltd.',
      location: 'Ahmedabad, India',
      period: 'Jan 2024 - May 2024',
      type: 'Internship',
      description:
        'Completed a full-time internship focused on full-stack web development. Gained hands-on experience working on real client projects and contributing to both frontend and backend development.',
      achievements: [
        'Built and enhanced UI components using modern frontend frameworks',
        'Implemented backend APIs and database integrations',
        'Collaborated with senior developers in an agile team environment',
        'Strengthened fundamentals of production-level development practices',
      ],
      tech: [
        'React',
        'Node.js',
        'Express.js',
        'MySQL',
        'Tailwind CSS',
      ],
    },
  ]

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Harshit-Patel-Resume.pdf'
    link.download = 'Harshit-Patel-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Work Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-x-8`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-dark-200 z-10"
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 glass p-6 rounded-2xl card-hover border border-primary-500/20 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase size={18} className="text-primary-400" />
                      <span className="text-sm font-medium text-primary-400 px-2 py-1 bg-primary-500/20 rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-accent-400 font-medium mb-2">{exp.company}</h4>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + i * 0.1 }}
                          className="text-sm text-gray-300 flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + 0.7 + i * 0.05 }}
                          className="px-2 py-1 text-xs font-medium bg-accent-500/20 text-accent-400 rounded border border-accent-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={downloadResume}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
          >
            Download Full Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}