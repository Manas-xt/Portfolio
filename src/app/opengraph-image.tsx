import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Manas Kumar - Full Stack Developer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111827',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1f2937 2%, transparent 0%), radial-gradient(circle at 75px 75px, #374151 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        {/* Main content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '60px',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            MANAS KUMAR
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#e5e7eb',
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            Full Stack Developer & 3D Enthusiast
          </div>
          
          {/* Tech stack */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '32px',
            }}
          >
            {['React', 'Node.js', 'Three.js', 'TypeScript'].map((tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  fontSize: '24px',
                  fontWeight: '500',
                  color: '#60a5fa',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          
          {/* Domain */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: '500',
              color: '#10b981',
              textAlign: 'center',
            }}
          >
            manaskumar.tech
          </div>
        </div>
        
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '50px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50px',
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #06b6d4, #10b981)',
            opacity: 0.3,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
