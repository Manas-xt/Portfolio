'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
  created_at: string
  bio: string
  location: string
  name: string
  login: string
}

interface Repository {
  id: number
  name: string
  description: string
  language: string
  stargazers_count: number
  forks_count: number
  html_url: string
  updated_at: string
}

export default function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  // Replace with your actual GitHub username
  const username = 'Manas-xt'

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)

        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${username}`)
        if (!userResponse.ok) throw new Error('Failed to fetch user data')
        const userData = await userResponse.json()
        setStats(userData)

        // Fetch top repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories')
        const reposData = await reposResponse.json()
        setRepos(reposData)

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [username])

  if (loading) {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
          />
          <p className="text-gray-400 mt-4">Loading GitHub data...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-400 mb-4 text-4xl">⚠️</div>
          <h3 className="text-xl font-bold text-white mb-2">Error loading GitHub data</h3>
          <p className="text-gray-400 mb-2">{error}</p>
          <p className="text-sm text-gray-500">Please update the GitHub username in the component</p>
        </div>
      </section>
    )
  }

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
            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gray-500 to-gray-400" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
            GitHub{' '}
            <motion.span
              className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
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
              Profile
            </motion.span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 font-outfit">
            Explore my open-source contributions and development journey
          </p>
        </motion.div>

        {/* GitHub Statistics Charts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 text-center">GitHub Statistics</h4>
            <div className="flex justify-center">
              <Image 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=dark&hide_border=true&include_all_commits=false&count_private=false`}
                alt="GitHub Stats"
                className="rounded-lg max-w-full h-auto"
                width={400}
                height={200}
                unoptimized
              />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 text-center">Contribution Streak</h4>
            <div className="flex justify-center">
              <Image 
                src={`https://nirzak-streak-stats.vercel.app/?user=${username}&theme=dark&hide_border=true`}
                alt="GitHub Streak"
                className="rounded-lg max-w-full h-auto"
                width={400}
                height={200}
                unoptimized
              />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 text-center">Most Used Languages</h4>
            <div className="flex justify-center">
              <Image 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=dark&hide_border=true&include_all_commits=false&count_private=false&layout=compact`}
                alt="Top Languages"
                className="rounded-lg max-w-full h-auto"
                width={400}
                height={300}
                unoptimized
              />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 text-center">Top Contributed Repositories</h4>
            <div className="flex justify-center">
              <Image 
                src={`https://github-contributor-stats.vercel.app/api?username=${username}&limit=5&theme=dark&combine_all_yearly_contributions=true`}
                alt="Top Contributed Repositories"
                className="rounded-lg max-w-full h-auto"
                width={400}
                height={300}
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        {/* View Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 mb-4 text-lg">
            Want to see more? Check out my complete GitHub profile
          </p>
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 text-gray-200 px-8 py-4 text-lg font-medium rounded-2xl hover:bg-gray-800/90 hover:border-gray-600 hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View Full Profile
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
