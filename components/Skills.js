'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Material UI', level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'NestJS', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 80 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 80 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 70 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD (GitHub Actions)', level: 80 },
        { name: 'Netlify', level: 75 },
        { name: 'Firebase', level: 75 },
      ],
    },
  ];

  const getSkillLabel = (level) => {
    if (level >= 90) return 'Advanced'
    if (level >= 80) return 'Proficient'
    return 'Working Knowledge'
  }


  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Skills & Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass p-8 rounded-2xl card-hover border border-primary-500/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm font-semibold">
                        {getSkillLabel(skill.level)}
                      </span>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-5xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-8">
            Core Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              'React', 'Next.js', 'Node.js', 'PostgreSQL', 'JavaScript',
              'TypeScript', 'Git', 'Docker', 'AWS', 'GraphQL'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(14, 165, 233, 0.3)"
                }}
                className="px-6 py-3 glass rounded-full text-sm font-medium text-primary-400 border border-primary-500/30 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}