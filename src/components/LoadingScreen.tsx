'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingTexts = [
    "Initializing...",
    "Loading Components...", 
    "Preparing Interface...",
    "Almost Ready..."
  ];

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 1200);
          return 100;
        }
        const increment = prev < 30 ? Math.random() * 12 + 3 : 
                         prev < 70 ? Math.random() * 8 + 2 : 
                         Math.random() * 4 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Change loading text based on progress
  useEffect(() => {
    if (progress > 25 && currentText === 0) setCurrentText(1);
    if (progress > 50 && currentText === 1) setCurrentText(2);
    if (progress > 75 && currentText === 2) setCurrentText(3);
  }, [progress, currentText]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)',
              backgroundSize: '50px 50px'
            }} 
          />
        </div>

        {/* Floating geometric particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
                y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
                opacity: 0,
                rotate: 0
              }}
              animate={{
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
                y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
                opacity: [0, 0.3, 0],
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            >
              {i % 3 === 0 ? (
                <div className="w-4 h-4 border border-gray-500/30 rotate-45" />
              ) : i % 3 === 1 ? (
                <div className="w-3 h-3 bg-gray-400/20 rounded-full" />
              ) : (
                <div className="w-5 h-1 bg-gray-500/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center">
          
          {/* Simple geometric logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="mb-16"
          >
            <div className="relative mx-auto w-24 h-24 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="w-full h-full border-2 border-gray-500/50 rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-gray-400/70 rotate-45" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
              />
            </div>

            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm font-light tracking-[0.3em] text-gray-400 uppercase"
            >
              PORTFOLIO
            </motion.div>
          </motion.div>

          {/* Progress indicator */}
          <div className="mb-12 w-80 mx-auto">
            
            {/* Progress bar */}
            <div className="relative mb-6">
              <div className="w-full h-px bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-6 right-0 text-xs font-mono text-gray-500"
              >
                {Math.floor(progress)}%
              </motion.div>
            </div>

            {/* Loading dots */}
            <div className="flex justify-center space-x-2 mb-8">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Loading text */}
          <motion.div
            key={currentText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm font-light tracking-wide"
          >
            {loadingTexts[currentText]}
          </motion.div>

          {/* Completion state */}
          {isComplete && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-black/90 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-white text-lg font-light flex items-center space-x-3"
                >
                  <div className="w-5 h-5 border border-white rounded-full flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  </div>
                  <span>Ready</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8">
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-6 h-6 border-l border-t border-gray-700"
          />
        </div>
        
        <div className="absolute bottom-8 right-8">
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="w-6 h-6 border-r border-b border-gray-700"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
