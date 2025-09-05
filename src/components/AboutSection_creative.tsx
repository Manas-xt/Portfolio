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
    title: "Programming Languages",
    subtitle: "My coding arsenal 💪",
    icon: "⚡",
    skills: [
      { name: "Python", emoji: "🐍", level: 90, color: "from-green-400 to-blue-500" },
      { name: "Java", emoji: "☕", level: 85, color: "from-orange-400 to-red-500" },
      { name: "C/C++", emoji: "⚙️", level: 80, color: "from-blue-400 to-purple-500" },
      { name: "JavaScript", emoji: "🟨", level: 88, color: "from-yellow-400 to-orange-500" },
      { name: "TypeScript", emoji: "🔷", level: 75, color: "from-blue-500 to-indigo-500" },
      { name: "Bash", emoji: "💻", level: 85, color: "from-green-500 to-teal-600" }
    ]
  },
  {
    title: "Frontend & Frameworks",
    subtitle: "Making things beautiful ✨",
    icon: "🎨",
    skills: [
      { name: "React", emoji: "⚛️", level: 92, color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", emoji: "▲", level: 85, color: "from-gray-400 to-gray-600" },
      { name: "HTML/CSS", emoji: "🌐", level: 95, color: "from-pink-400 to-red-500" },
      { name: "Tailwind", emoji: "💨", level: 90, color: "from-teal-400 to-cyan-500" },
      { name: "Three.js", emoji: "🎮", level: 70, color: "from-green-400 to-emerald-500" },
      { name: "Framer Motion", emoji: "🎭", level: 80, color: "from-purple-400 to-pink-500" }
    ]
  },
  {
    title: "Backend & Database",
    subtitle: "Server-side magic 🔮",
    icon: "🗄️",
    skills: [
      { name: "Node.js", emoji: "🟢", level: 85, color: "from-green-500 to-emerald-600" },
      { name: "Express", emoji: "🚀", level: 80, color: "from-gray-500 to-gray-700" },
      { name: "MongoDB", emoji: "🍃", level: 75, color: "from-green-400 to-green-600" },
      { name: "MySQL", emoji: "🗃️", level: 82, color: "from-blue-500 to-cyan-600" },
      { name: "PostgreSQL", emoji: "🐘", level: 70, color: "from-blue-600 to-indigo-600" },
      { name: "REST APIs", emoji: "🔗", level: 88, color: "from-orange-400 to-red-500" }
    ]
  },
  {
    title: "DevOps & Cloud",
    subtitle: "Scaling to the clouds ☁️",
    icon: "☁️",
    skills: [
      { name: "Linux/RedHat", emoji: "🐧", level: 95, color: "from-red-500 to-orange-600" },
      { name: "Docker", emoji: "🐳", level: 80, color: "from-blue-400 to-cyan-500" },
      { name: "AWS", emoji: "🌐", level: 75, color: "from-orange-400 to-yellow-500" },
      { name: "Azure", emoji: "☁️", level: 70, color: "from-blue-500 to-indigo-600" },
      { name: "Git/GitHub", emoji: "📚", level: 95, color: "from-gray-700 to-gray-900" },
      { name: "CI/CD", emoji: "🔄", level: 78, color: "from-green-500 to-teal-600" }
    ]
  },
  {
    title: "Data Structures & Algorithms",
    subtitle: "Problem-solving ninja 🥷",
    icon: "🧮",
    skills: [
      { name: "Arrays & Lists", emoji: "📊", level: 90, color: "from-blue-400 to-purple-500" },
      { name: "Trees & Graphs", emoji: "🌳", level: 85, color: "from-green-400 to-emerald-600" },
      { name: "Dynamic Programming", emoji: "🧮", level: 80, color: "from-orange-400 to-red-500" },
      { name: "Sorting & Searching", emoji: "🔍", level: 88, color: "from-cyan-400 to-blue-500" },
      { name: "Problem Solving", emoji: "🧩", level: 90, color: "from-purple-400 to-indigo-500" },
      { name: "Algorithm Design", emoji: "⚡", level: 85, color: "from-yellow-400 to-orange-500" }
    ]
  },
  {
    title: "Tools & More",
    subtitle: "My daily companions 🛠️",
    icon: "🛠️",
    skills: [
      { name: "VS Code", emoji: "💙", level: 98, color: "from-blue-500 to-blue-700" },
      { name: "Postman", emoji: "📮", level: 85, color: "from-orange-500 to-red-600" },
      { name: "Figma", emoji: "🎨", level: 75, color: "from-purple-400 to-pink-500" },
      { name: "Firebase", emoji: "🔥", level: 80, color: "from-yellow-500 to-orange-600" },
      { name: "Vercel", emoji: "▲", level: 85, color: "from-gray-800 to-black" },
      { name: "Terminal", emoji: "⚡", level: 95, color: "from-green-400 to-teal-500" }
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
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                whileHover={{ y: -8 }}
              >
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 h-full relative overflow-hidden">
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    <motion.div
                      className="text-3xl mb-2 inline-block"
                      animate={{
                        scale: hoveredCategory === categoryIndex ? [1, 1.2, 1] : 1,
                        rotate: hoveredCategory === categoryIndex ? [0, 360] : 0,
                      }}
                      transition={{ duration: 0.8 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-1 font-display">
                      {category.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-outfit">
                      {category.subtitle}
                    </p>
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
                            className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300 rounded-xl`}
                          />
                          
                          <motion.div
                            className="text-xl mb-1"
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
                          
                          {/* Skill Level Bar */}
                          <div className="mt-2 w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                              viewport={{ once: true }}
                            />
                          </div>
                          
                          {/* Skill Level Text */}
                          <motion.div
                            className="absolute top-1 right-1 text-xs text-gray-500 opacity-0 group-hover/skill:opacity-100 transition-opacity"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {skill.level}%
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
