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

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", emoji: "⚛️" },
      { name: "Tailwind CSS", emoji: "🎨" },
      { name: "JavaScript", emoji: "🟨" },
      { name: "HTML/CSS", emoji: "🌐" },
      { name: "Bootstrap", emoji: "🅱️" },
      { name: "jQuery", emoji: "💙" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", emoji: "🟢" },
      { name: "Express", emoji: "🚀" },
      { name: "PHP", emoji: "🐘" },
      { name: "MongoDB", emoji: "🍃" },
      { name: "MySQL", emoji: "🗄️" },
      { name: "REST APIs", emoji: "🔗" }
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", emoji: "⚙️" },
      { name: "C++", emoji: "🔧" },
      { name: "Java", emoji: "☕" },
      { name: "Python", emoji: "🐍" },
      { name: "JavaScript", emoji: "🟡" },
      { name: "TypeScript", emoji: "🔷" }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", emoji: "📝" },
      { name: "Azure", emoji: "☁️" },
      { name: "AWS", emoji: "🌐" },
      { name: "Linux", emoji: "🐧" },
      { name: "Docker", emoji: "🐳" },
      { name: "Bash", emoji: "⚡" }
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

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 opacity-10"
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 text-6xl opacity-20"
        >
          🌟
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* Skills & Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-display">
            Skills & Technologies
          </h3>
          <p className="text-lg text-gray-400 mb-12 font-outfit">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-bold text-white mb-6 font-display text-left">
                  {category.title}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/10 group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <motion.div
                        className="text-2xl mb-2"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: skillIndex * 0.2
                        }}
                      >
                        {skill.emoji}
                      </motion.div>
                      <span className="text-sm text-gray-300 text-center font-outfit group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
