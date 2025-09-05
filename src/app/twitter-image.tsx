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
            padding: '50px',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: '64px',
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
              fontSize: '32px',
              fontWeight: '600',
              color: '#e5e7eb',
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            Full Stack Developer & 3D Enthusiast
          </div>
          
          {/* Domain */}
          <div
            style={{
              fontSize: '24px',
              fontWeight: '500',
              color: '#10b981',
              textAlign: 'center',
            }}
          >
            manaskumar.tech
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
