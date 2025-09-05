'use client'

import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        wireframe={false}
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  )
}

function FloatingElements() {
  const group1 = useRef<THREE.Group>(null!)
  const group2 = useRef<THREE.Group>(null!)
  const group3 = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (group1.current) {
      group1.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
      group1.current.rotation.z = state.clock.elapsedTime * 0.1
    }
    if (group2.current) {
      group2.current.position.y = Math.cos(state.clock.elapsedTime * 1.2) * 0.2
      group2.current.rotation.x = state.clock.elapsedTime * 0.15
    }
    if (group3.current) {
      group3.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.25
      group3.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <>
      <group ref={group1} position={[-3, 0, -2]}>
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#9333ea" metalness={0.8} roughness={0.1} />
        </mesh>
      </group>
      <group ref={group2} position={[3, 0, -1]}>
        <mesh>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#06b6d4" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>
      <group ref={group3} position={[0, -2, -3]}>
        <mesh>
          <torusGeometry args={[0.6, 0.2, 16, 100]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="h-screen relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#9333ea" />
          <pointLight position={[0, 10, -10]} intensity={0.4} color="#06b6d4" />
          
          <AnimatedSphere />
          <FloatingElements />
        </Canvas>
      </div>
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-4xl px-6">
          <div className="animate-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Manas Kumar
            </h1>
          </div>
          
          <div className="animate-fade-in">
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Full Stack Developer & Creative Technologist
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting immersive digital experiences with cutting-edge technology, 
              3D graphics, and innovative solutions that bridge creativity and code.
            </p>
          </div>
          
          <div className="space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 animate-glow font-semibold">
              Explore My Work
            </button>
            <button className="border border-gray-400 hover:border-white text-white px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/10 font-semibold">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 font-light">Scroll to discover</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
