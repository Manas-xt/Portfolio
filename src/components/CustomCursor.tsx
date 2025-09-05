'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Use translate for better performance than left/top
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    // Use high frequency event listener
    document.addEventListener('mousemove', mouseMove)

    return () => {
      document.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Simple arrow cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: 'translate(0px, 0px)',
          willChange: 'transform',
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none"
          className="drop-shadow-sm"
        >
          {/* Simple arrow cursor shape */}
          <path 
            d="M3 3L21 11L11 13L9 21L3 3Z" 
            fill="white" 
            stroke="black" 
            strokeWidth="1"
          />
        </svg>
      </div>
    </>
  )
}
