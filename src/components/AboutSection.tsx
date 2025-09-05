'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const personalityTraits = [
  {
    emoji: "🎓",
    title: "CS Student",
    description: "Computer Science student from Jaipur, diving deep into algorithms, systems, and everything tech!",
    color: "from-blue-400 to-cyan-500"
  },
  {
    emoji: "🐧",
    title: "Linux Expert",
    description: "RedHat Certified System Administrator who thinks GUI is for beginners. Terminal is life!",
    color: "from-red-400 to-orange-500"
  },
  {
    emoji: "☁️",
    title: "Cloud Explorer",
    description: "From local servers to cloud infrastructure - I love building scalable solutions in the sky!",
    color: "from-emerald-400 to-green-500"
  },
  {
    emoji: "🚀",
    title: "Multi-Domain Dev",
    description: "Development, DevOps, Cloud, DSA - I explore every corner of the tech universe!",
    color: "from-purple-400 to-pink-500"
  }
]

const certifications = [
  {
    name: "RHCSA",
    fullName: "Red Hat Certified System Administrator",
    icon: "🎖️",
    badge: "🔴",
    description: "Enterprise Linux Administration Excellence",
    skills: ["System Administration", "Security", "Networking", "Storage Management"],
    gradient: "from-red-500 via-red-600 to-red-700",
    year: "2025"
  }
]

const skillCategories = [
  {
    title: "Languages",
    icon: "⚡",
    skills: [
      { name: "Python", emoji: "🐍" },
      { name: "Java", emoji: "☕" },
      { name: "C/C++", emoji: "⚙️" },
      { name: "JavaScript", emoji: "🟨" },
      { name: "TypeScript", emoji: "🔷" },
      { name: "Bash", emoji: "💻" }
    ]
  },
  {
    title: "Development",
    icon: "🚀",
    skills: [
      { name: "React", emoji: "⚛️" },
      { name: "Node.js", emoji: "🟢" },
      { name: "Next.js", emoji: "▲" },
      { name: "Express", emoji: "�" },
      { name: "REST APIs", emoji: "🔗" },
      { name: "MongoDB", emoji: "�" }
    ]
  },
  {
    title: "Linux & DevOps",
    icon: "�",
    skills: [
      { name: "RedHat Linux", emoji: "�" },
      { name: "System Admin", emoji: "⚙️" },
      { name: "Docker", emoji: "🐳" },
      { name: "AWS", emoji: "🌐" },
      { name: "CI/CD", emoji: "🔄" },
      { name: "Terminal", emoji: "�" }
    ]
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", emoji: "�" },
      { name: "VS Code", emoji: "💙" },
      { name: "Postman", emoji: "📮" },
      { name: "Firebase", emoji: "🔥" },
      { name: "Figma", emoji: "🎨" },
      { name: "Vercel", emoji: "▲" }
    ]
  }
]

const achievements = [
  {
    emoji: "🏆",
    title: "RedHat Certified",
    description: "System Administrator",
    color: "from-red-500 to-orange-500"
  },
  {
    emoji: "🎯",
    title: "Multi-Domain",
    description: "Development to Cloud",
    color: "from-blue-500 to-cyan-500"
  },
  {
    emoji: "🏛️",
    title: "From Jaipur",
    description: "Pink City Coder",
    color: "from-pink-500 to-purple-500"
  },
  {
    emoji: "📈",
    title: "Always Growing",
    description: "CS Student Journey",
    color: "from-emerald-500 to-green-500"
  }
]

export default function AboutSection() {
  const [hoveredTrait, setHoveredTrait] = useState<number | null>(null)
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-2xl">👋</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Meet{' '}
            <motion.span
              className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
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
            {' '}✨
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-outfit">
            CS student from Jaipur 🏛️ | RedHat Certified System Admin | Multi-domain explorer in the tech universe! 🚀
          </p>
        </motion.div>

        {/* Personality Traits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {personalityTraits.map((trait, index) => (
            <motion.div
              key={trait.title}
              className="group relative"
              onMouseEnter={() => setHoveredTrait(index)}
              onMouseLeave={() => setHoveredTrait(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 h-full relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${trait.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                />
                
                {/* Floating emoji */}
                <motion.div
                  className="text-4xl mb-4 inline-block"
                  animate={{
                    rotate: hoveredTrait === index ? [0, 10, -10, 0] : 0,
                    scale: hoveredTrait === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {trait.emoji}
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  {trait.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-outfit">
                  {trait.description}
                </p>
                
                {/* Corner decoration */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: hoveredTrait === index ? [1, 1.5, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center font-display">
            Key Highlights 🎯
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="group relative"
                onMouseEnter={() => setHoveredAchievement(index)}
                onMouseLeave={() => setHoveredAchievement(null)}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 text-center relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}
                  />
                  
                  <motion.div
                    className="text-3xl mb-3 inline-block"
                    animate={{
                      scale: hoveredAchievement === index ? [1, 1.2, 1] : 1,
                      rotate: hoveredAchievement === index ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {achievement.emoji}
                  </motion.div>
                  
                  <h4 className="font-bold text-white mb-2 font-display">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-400 font-outfit">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Skills & Technologies Section */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-2xl">💻</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>
          
          <h3 className="text-4xl font-bold text-white mb-4 font-display">
            Skills &{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Technologies
            </motion.span>
          </h3>
          <p className="text-lg text-gray-400 mb-16 font-outfit">
            My complete tech stack - from languages to tools, databases to deployment! 🚀
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="group relative"
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 h-full relative overflow-hidden">
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    <motion.div
                      className="text-3xl mb-3 inline-block"
                      animate={{
                        scale: hoveredCategory === categoryIndex ? [1, 1.2, 1] : 1,
                        rotate: hoveredCategory === categoryIndex ? [0, 360] : 0,
                      }}
                      transition={{ duration: 0.8 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h4 className="text-lg font-bold text-white mb-2 font-display">
                      {category.title}
                    </h4>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group/skill relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-3 text-center relative overflow-hidden">
                          <motion.div
                            className="text-lg mb-2"
                            animate={{
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: skillIndex * 0.3
                            }}
                          >
                            {skill.emoji}
                          </motion.div>
                          
                          <p className="text-xs text-gray-300 font-outfit group-hover/skill:text-white transition-colors font-medium">
                            {skill.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <span className="text-2xl">🏆</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-orange-500" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Professional{' '}
              <motion.span
                className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"
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
                Certifications
              </motion.span>
            </h3>
            <p className="text-gray-400 font-outfit max-w-2xl mx-auto">
              Industry-recognized credentials that validate my expertise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="group relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  />
                  
                  {/* Floating Badge */}
                  <motion.div
                    className="absolute top-6 right-6"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {cert.badge}
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Main Info */}
                    <div className="md:col-span-2">
                      <motion.div
                        className="flex items-center gap-4 mb-4"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.span
                          className="text-4xl"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        >
                          {cert.icon}
                        </motion.span>
                        <div>
                          <h4 className="text-2xl font-bold text-white font-display">
                            {cert.name}
                          </h4>
                          <p className="text-lg text-gray-300 font-outfit">
                            {cert.fullName}
                          </p>
                        </div>
                      </motion.div>
                      
                      <p className="text-gray-400 font-outfit mb-4">
                        {cert.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span>Certified {cert.year}</span>
                      </div>
                    </div>

                    {/* Skills Showcase */}
                    <div className="space-y-3">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="flex items-center gap-3 group/item"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-red-500"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.3
                            }}
                          />
                          <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors font-outfit">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Terminal-style animation */}
                  <motion.div
                    className="absolute bottom-4 left-6 text-xs text-green-400 font-mono opacity-30"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    $ sudo certification --verify rhcsa
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
