'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AlternativeHero() {
  const [particles, setParticles] = useState<Array<{
    id: number
    left: number
    top: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = [...Array(40)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 3,
    }))
    setParticles(newParticles)
  }, [])
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      {/* Dark mesh background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Large floating orb */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
        
        {/* Sharp angular shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-32 h-32 opacity-10"
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 transform rotate-45 blur-sm" />
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, -360],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/3 w-24 h-24 opacity-15"
        >
          <div className="w-full h-full bg-gradient-to-tr from-cyan-500 to-blue-500 clip-path-polygon transform blur-sm" 
               style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        </motion.div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              boxShadow: '0 0 6px rgba(59, 130, 246, 0.8)'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hey, I&apos;m{' '}
              <motion.span
                className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Manas
              </motion.span>
              <br />
              <span className="text-2xl md:text-4xl font-light text-gray-300">
                and I build{' '}
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✨
                </motion.span>{' '}
                digital magic
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-lg md:text-xl text-gray-400 font-medium mb-6 font-outfit">
              <motion.span
                className="inline-block mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.span>
              Developer & Creative Problem Solver
              <motion.span
                className="inline-block ml-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                🚀
              </motion.span>
            </div>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-outfit mb-8">
              I don&apos;t just write code—I craft experiences that make people say &ldquo;wow!&rdquo; 
              From sleek frontends to robust backends, I turn coffee into innovative solutions. ☕ → 💻
            </p>
            
            {/* Fun Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-2xl font-bold text-emerald-400 font-display"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-400">Learning Mode</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-2xl font-bold text-cyan-400 font-display"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  3+
                </motion.div>
                <div className="text-sm text-gray-400">Years Coding</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-2xl font-bold text-blue-400 font-display"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  ∞
                </motion.div>
                <div className="text-sm text-gray-400">Ideas/Min</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('projects')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group relative bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center gap-2">
                🎨 See My Creations 
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="group border-2 border-gray-600 text-gray-300 hover:border-emerald-400 hover:text-emerald-400 px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                💬 Let&apos;s Chat 
                <motion.span
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  👋
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll to Explore indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-3">
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">
            Scroll to Explore
          </span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center relative"
          >
            <motion.div 
              animate={{ y: [4, 20, 4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="text-gray-500"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
