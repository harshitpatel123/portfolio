'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Calendar, ExternalLink } from 'lucide-react'

export default function Certificates() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-2023-001',
      description: 'Validates expertise in designing distributed systems on AWS',
      verifyUrl: '#'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MDB-DEV-2022-456',
      description: 'Demonstrates proficiency in MongoDB development and operations',
      verifyUrl: '#'
    },
    {
      title: 'React Professional Certificate',
      issuer: 'Meta',
      date: '2022',
      credentialId: 'META-REACT-789',
      description: 'Advanced React development skills and best practices',
      verifyUrl: '#'
    },
  ]

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Certifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-2xl card-hover border border-primary-500/20"
            >
              <div className="flex items-start space-x-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <Award size={24} className="text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-accent-400 font-medium">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
                <span className="text-xs text-gray-500">ID: {cert.credentialId}</span>
              </div>

              <motion.a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium hover:bg-primary-500/30 transition-all duration-300"
              >
                <span>Verify Certificate</span>
                <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}