'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const projects = [
    {
      title: 'Jobskampus',
      description: 'A large-scale job portal platform built to handle real-world recruitment workflows. I worked across frontend, backend, and cloud infrastructure, focusing on performance, scalability, and secure system design.',
      image: '/api/placeholder/400/250',
      tech: [
        'React',
        'Node.js',
        'GraphQL',
        'PostgreSQL',
        'Docker',
        'AWS',
      ],
      github: null,
      live: 'https://jobskampus.ai',
      featured: true
    },
    {
      title: 'Math Arena',
      description:
        'A full-stack learning platform designed and deployed using modern cloud-native practices. The project was containerized with Docker and deployed on AWS using Kubernetes (EKS), load balancers, and scalable services.',
      image: '/api/placeholder/400/250',
      tech: [
        'Next.js',
        'Node.js',
        'MongoDB',
        'Docker',
        'AWS',
        'Kubernetes',
      ],
      github: 'https://github.com/harshitpatel123/math-arena-frontend',
      live: null,
      featured: true
    },
    {
      title: 'QE CRM Application',
      description:
        'A customer relationship management system developed as part of a professional team environment. Contributed to both frontend and backend development, focusing on clean architecture, data handling, and maintainable code.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'NestJS', 'MySQL', 'Material UI'],
      github: null,
      live: null,
      featured: true
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of real-world projects showcasing my experience across full-stack development and cloud infrastructure.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden card-hover border border-primary-500/20 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
                  >
                    <Eye size={48} className="text-primary-400" />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.github && (<motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                    >
                      <Github size={20} className="text-white" />
                    </motion.a>
                    )}
                    {project.live && (<motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-400 rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    {project.github && (<motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}