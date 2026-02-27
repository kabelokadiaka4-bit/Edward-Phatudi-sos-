'use client'

import { useState } from 'react'

// Static particles with fixed values to avoid hydration mismatch
const PARTICLES = [
  { id: 0, x: 15, y: 25, size: 3, duration: 3, delay: 0.5 },
  { id: 1, x: 80, y: 10, size: 2, duration: 4, delay: 1 },
  { id: 2, x: 45, y: 85, size: 4, duration: 3.5, delay: 0.2 },
  { id: 3, x: 70, y: 60, size: 2.5, duration: 2.8, delay: 1.5 },
  { id: 4, x: 25, y: 75, size: 3.5, duration: 4.2, delay: 0.8 },
  { id: 5, x: 55, y: 35, size: 2, duration: 3.2, delay: 1.2 },
  { id: 6, x: 90, y: 45, size: 3, duration: 2.5, delay: 0.3 },
  { id: 7, x: 10, y: 55, size: 2.5, duration: 3.8, delay: 1.8 },
  { id: 8, x: 65, y: 20, size: 4, duration: 4.5, delay: 0.6 },
  { id: 9, x: 35, y: 40, size: 2, duration: 2.2, delay: 1.4 },
  { id: 10, x: 85, y: 80, size: 3.5, duration: 3.6, delay: 0.9 },
  { id: 11, x: 20, y: 90, size: 2.5, duration: 4.1, delay: 1.1 },
  { id: 12, x: 50, y: 15, size: 3, duration: 2.9, delay: 0.4 },
  { id: 13, x: 75, y: 35, size: 2, duration: 3.3, delay: 1.6 },
  { id: 14, x: 40, y: 65, size: 4, duration: 4.3, delay: 0.7 },
]

export function AtomicStructure3D() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-radial from-cyan-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl transition-all duration-700 ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-60'}`} />
      
      {/* Main Atom Container - 3D Transform */}
      <div 
        className={`relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 transition-transform duration-700`}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'rotateX(15deg) rotateY(15deg) scale(1.1)' : 'rotateX(0deg) rotateY(0deg) scale(1)',
        }}
      >
        {/* Orbit Paths - Multiple 3D Orbits */}
        {/* Orbit 1 - Horizontal */}
        <div 
          className="absolute inset-0"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'rotateX(70deg)',
          }}
        >
          <div className={`absolute inset-4 sm:inset-6 lg:inset-8 border-2 border-cyan-400/40 rounded-full transition-all duration-500 ${isHovered ? 'border-cyan-400/70 shadow-[0_0_30px_rgba(34,211,238,0.5)]' : ''}`} />
          
          {/* Electron 1 */}
          <div 
            className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-br from-cyan-300 via-cyan-500 to-cyan-700 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            style={{ 
              top: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'orbit1 4s linear infinite',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50" />
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white to-cyan-300" />
          </div>
          
          {/* Electron 2 - Opposite */}
          <div 
            className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-br from-cyan-300 via-cyan-500 to-cyan-700 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            style={{ 
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'orbit1 4s linear infinite reverse',
              animationDelay: '2s',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50" />
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white to-cyan-300" />
          </div>
        </div>

        {/* Orbit 2 - Angled */}
        <div 
          className="absolute inset-0"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'rotateY(60deg) rotateX(30deg)',
          }}
        >
          <div className={`absolute inset-8 sm:inset-10 lg:inset-12 border-2 border-teal-400/40 rounded-full transition-all duration-500 ${isHovered ? 'border-teal-400/70 shadow-[0_0_30px_rgba(20,184,166,0.5)]' : ''}`} />
          
          {/* Electron 3 */}
          <div 
            className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-br from-teal-300 via-teal-500 to-teal-700 shadow-[0_0_20px_rgba(20,184,166,0.8)]"
            style={{ 
              top: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'orbit2 5s linear infinite',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white to-teal-300" />
          </div>
          
          {/* Electron 4 */}
          <div 
            className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-br from-teal-300 via-teal-500 to-teal-700 shadow-[0_0_20px_rgba(20,184,166,0.8)]"
            style={{ 
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'orbit2 5s linear infinite reverse',
              animationDelay: '2.5s',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-50" style={{ animationDelay: '0.7s' }} />
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white to-teal-300" />
          </div>
        </div>

        {/* Orbit 3 - Another Angle */}
        <div 
          className="absolute inset-0"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-60deg) rotateY(-30deg)',
          }}
        >
          <div className={`absolute inset-12 sm:inset-14 lg:inset-16 border-2 border-emerald-400/40 rounded-full transition-all duration-500 ${isHovered ? 'border-emerald-400/70 shadow-[0_0_30px_rgba(16,185,129,0.5)]' : ''}`} />
          
          {/* Electron 5 */}
          <div 
            className="absolute w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
            style={{ 
              top: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'orbit3 6s linear infinite',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-50" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white to-emerald-300" />
          </div>
          
          {/* Electron 6 */}
          <div 
            className="absolute w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
            style={{ 
              bottom: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'orbit3 6s linear infinite reverse',
              animationDelay: '3s',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-50" style={{ animationDelay: '1.2s' }} />
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white to-emerald-300" />
          </div>
        </div>

        {/* Orbit 4 - Fourth Orbit */}
        <div 
          className="absolute inset-0"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'rotateZ(45deg) rotateX(75deg)',
          }}
        >
          <div className={`absolute inset-2 sm:inset-4 border border-sky-400/30 rounded-full transition-all duration-500 ${isHovered ? 'border-sky-400/60 shadow-[0_0_20px_rgba(56,189,248,0.4)]' : ''}`} />
          
          {/* Fast Electron */}
          <div 
            className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-br from-sky-300 to-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.8)]"
            style={{ 
              top: '-4px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'orbit4 3s linear infinite',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-sky-300 animate-ping opacity-40" />
          </div>
        </div>

        {/* Nucleus - 3D Core */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ 
            transformStyle: 'preserve-3d',
            animation: 'nucleus-rotate 10s linear infinite',
          }}
        >
          {/* Outer Glow */}
          <div className={`absolute -inset-6 sm:-inset-8 rounded-full bg-gradient-to-br from-orange-500/30 via-red-500/20 to-pink-500/30 blur-xl transition-all duration-500 ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-70'}`} />
          
          {/* Nucleus Container */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
            {/* Protons (Red) */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-700 shadow-[0_0_15px_rgba(239,68,68,0.6)] border border-red-300/50">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">+</span>
            </div>
            
            <div className="absolute top-6 left-0 sm:top-8 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-700 shadow-[0_0_15px_rgba(239,68,68,0.6)] border border-red-300/50">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">+</span>
            </div>
            
            <div className="absolute top-6 right-0 sm:top-8 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-700 shadow-[0_0_15px_rgba(239,68,68,0.6)] border border-red-300/50">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">+</span>
            </div>
            
            {/* Neutrons (Blue) */}
            <div className="absolute top-4 left-3 sm:top-5 sm:left-4 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.6)] border border-blue-200/50">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
            </div>
            
            <div className="absolute top-4 right-3 sm:top-5 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.6)] border border-blue-200/50">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
            </div>
            
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.6)] border border-blue-200/50">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Floating Particles - Static positions */}
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/50 to-teal-400/50"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float-particle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              opacity: 0.6,
            }}
          />
        ))}

        {/* Energy Rings */}
        <div 
          className="absolute inset-0 rounded-full border border-cyan-500/20"
          style={{ 
            animation: 'pulse-ring 3s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute inset-[-10px] sm:inset-[-15px] rounded-full border border-teal-500/10"
          style={{ 
            animation: 'pulse-ring 3s ease-in-out infinite',
            animationDelay: '0.5s',
          }}
        />
        <div 
          className="absolute inset-[-20px] sm:inset-[-30px] rounded-full border border-cyan-500/5"
          style={{ 
            animation: 'pulse-ring 3s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Labels */}
      <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <div className="flex items-center gap-2 px-4 py-2 bg-[#16161f]/90 border border-teal-500/30 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm text-teal-300 font-medium">Interactive 3D Atom</span>
        </div>
      </div>
    </div>
  )
}
