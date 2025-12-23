'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function GlobalCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mouseTrail, setMouseTrail] = useState([])
  const [lastMouseTime, setLastMouseTime] = useState(Date.now())
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY, time: Date.now() }
      setMousePosition(newPosition)
      setLastMouseTime(Date.now())
      
      setMouseTrail(prev => {
        const newTrail = [newPosition, ...prev.slice(0, 15)]
        return newTrail
      })
    }
    
    // Fade trail when mouse stops
    const fadeTrail = setInterval(() => {
      const now = Date.now()
      if (now - lastMouseTime > 100) {
        setMouseTrail(prev => prev.slice(1))
      }
    }, 50)

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)
    
    const interactiveElements = document.querySelectorAll('button, a, .interactive, input, textarea, select, [role="button"], [tabindex="0"]')
    interactiveElements.forEach(el => {
      el.classList.add('interactive')
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(fadeTrail)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Cursor Trail */}
      {mouseTrail.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: pos.x - 6,
            top: pos.y - 6,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: 0.9 - (index * 0.06),
            scale: 1 - (index * 0.05),
          }}
          transition={{ duration: 0.1 }}
        >
          <div
            className="w-3 h-3 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full"
            style={{
              filter: `blur(${index * 0.5}px)`,
            }}
          />
        </motion.div>
      ))}
      
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      >
        <motion.div
          className="w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full relative"
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-1 bg-white/30 rounded-full"
            animate={{
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -inset-4 border-2 border-primary-400/50 rounded-full"
          />
        )}
      </motion.div>
    </>
  )
}