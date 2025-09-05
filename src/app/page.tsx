'use client';

import { useState, useEffect } from 'react';
import AlternativeHero from '@/components/AlternativeHero'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import FloatingNavbar from '@/components/FloatingNavbar'
import GitHubSection from '@/components/GitHubSection'
import CustomCursor from '@/components/CustomCursor'
import LoadingScreen from '@/components/LoadingScreen'
import { useLoading } from '@/hooks/useLoading'

export default function Home() {
  const { isLoading, completeLoading } = useLoading(2000); // Reduced to 2 seconds

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={completeLoading} />;
  }

  return (
    <main className="min-h-screen bg-black overflow-x-hidden animate-fadeIn">
      <CustomCursor />
      <FloatingNavbar />
      
      <section id="home">
        <AlternativeHero />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="github">
        <GitHubSection />
      </section>
      
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent font-display">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-outfit">
            Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects and explore new technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&to=portfolio925@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Manas,%0D%0A%0D%0AI%20would%20like%20to%20discuss..."
              target="_blank"
              rel="noopener noreferrer"
              className="sharp-card px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sharp-card px-8 py-4 border border-gray-700/50 text-gray-300 font-bold rounded-xl hover:border-emerald-500/50 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-3 group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
          
          <div className="mt-12 flex justify-center space-x-8">
            <a 
              href="https://github.com/Manas-xt" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/manas-xt" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&to=portfolio925@gmail.com&su=Portfolio%20Contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Minimal Footer with Personal Details */}
      <footer className="py-8 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="font-medium text-white">Manas Kumar</span>
              <div className="flex items-center gap-4 text-xs">
                <span>📧 manas2005k@gmail.com</span>
                <span>📱 +91 9257793866</span>
                <span>📍 India</span>
              </div>
            </div>
            <div className="text-xs">
              © 2025 Manas Kumar. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
