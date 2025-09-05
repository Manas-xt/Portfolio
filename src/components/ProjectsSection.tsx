'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  category: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Travel Planner",
    description: "An intelligent travel planning application that uses AI to create personalized itineraries based on user preferences, budget, and travel dates. Features smart recommendations and real-time updates.",
    tech: ["Python", "OpenAI API", "React", "Node.js", "MongoDB", "Express"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "SplitEase",
    description: "A modern expense splitting web application that makes sharing bills with friends effortless. Features smart bill scanning, group management, and multiple payment integration options.",
    tech: ["React", "Firebase", "Node.js", "Express", "Stripe API", "JavaScript"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Containerized Web Deployment",
    description: "A complete Linux-based deployment solution featuring automated containerized deployment pipeline with Docker, system administration, and server configuration for scalable web applications.",
    tech: ["Docker", "Linux", "Bash", "Nginx", "System Administration", "Shell Scripting"],
    category: "Linux Projects",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  }
]

const categories = ["All", "Web Development", "Linux Projects"]

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
            Featured{' '}
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
              Projects
            </motion.span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 font-outfit">
            Showcasing expertise in web development and Linux system administration with scalable, production-ready solutions.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
            >
              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-lg text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors font-display">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-lg text-xs font-medium border border-gray-600/30 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex space-x-4 pt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 font-outfit">
            Interested in collaborating on innovative projects?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
