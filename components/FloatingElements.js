'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-primary-500/30 rounded-full"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-accent-500/40 rotate-45"
        animate={{
          y: [0, -50, 0],
          rotate: [45, 225, 405],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}