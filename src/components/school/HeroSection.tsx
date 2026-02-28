'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  FlaskConical, 
  Users, 
  Calendar, 
  BookOpen, 
  Building2, 
  ArrowRight, 
  Radiation,
  Sparkles,
  Award,
  TrendingUp,
  Atom,
  Zap,
  Circle
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AtomicStructure3D } from './AtomicStructure3D'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/campus-building.jpg"
          alt="Edward Phatudi School Campus"
          fill
          className="object-cover opacity-50 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/90 via-[#0a0a0f]/60 to-[#0a0a0f]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/30" />
      </div>
      
      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-15" />
      
      {/* Floating Elements - Colorful */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-cyan-500/5 rounded-full blur-3xl" />

      {/* Nuclear Science Decorative Elements */}
      {/* 3D Interactive Atomic Structure - Top Left */}
      <div className="absolute top-20 left-10 opacity-80 hidden lg:block">
        <AtomicStructure3D />
      </div>

      {/* Radiation Symbol - Top Right */}
      <div className="absolute top-40 right-16 opacity-15 animate-spin-reverse hidden lg:block">
        <Radiation className="w-24 h-24 text-yellow-400/60" />
      </div>

      {/* Floating Atom Icons */}
      <div className="absolute top-1/4 left-1/4 animate-float hidden md:block" style={{ animationDelay: '0.5s' }}>
        <Atom className="w-12 h-12 text-cyan-400/30" />
      </div>
      <div className="absolute top-2/3 right-1/3 animate-float hidden md:block" style={{ animationDelay: '1.5s' }}>
        <Atom className="w-16 h-16 text-teal-400/20" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float hidden md:block" style={{ animationDelay: '2.5s' }}>
        <Atom className="w-10 h-10 text-purple-400/25" />
      </div>

      {/* Energy Particles */}
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-particle hidden lg:block" />
      <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-particle hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-particle hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-pink-400 rounded-full animate-particle hidden lg:block" style={{ animationDelay: '1.5s' }} />

      {/* Nuclear Reactor Glow - Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-cyan-500/10 to-transparent" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <div className="flex items-center gap-4">
          <Circle className="w-4 h-4 text-cyan-400 animate-pulse" />
          <Circle className="w-6 h-6 text-teal-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <Circle className="w-8 h-8 text-cyan-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
          <Circle className="w-6 h-6 text-teal-400 animate-pulse" style={{ animationDelay: '0.9s' }} />
          <Circle className="w-4 h-4 text-cyan-400 animate-pulse" style={{ animationDelay: '1.2s' }} />
        </div>
      </div>

      {/* Electron Orbit Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/10 rounded-full animate-spin-slowest hidden xl:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] border border-teal-500/10 rounded-full rotate-45 animate-spin-slowest hidden xl:block" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* School Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-white/10 p-2 border-2 border-teal-500/40 shadow-2xl shadow-teal-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-500 hover:border-cyan-400/60">
            <Image
              src="/images/logo-new.png"
              alt="Edward Phatudi School Logo"
              fill
              sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 160px"
              className="object-contain transition-transform duration-500 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Logo Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-teal-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-teal-500/20 group-hover:to-cyan-500/20 rounded-3xl blur-xl transition-all duration-500" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 mb-8 backdrop-blur-sm hover:border-cyan-400/50 transition-colors duration-300 group">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <Radiation className="w-4 h-4 text-teal-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <span className="text-teal-300 text-sm font-semibold tracking-wide uppercase">South Africa&apos;s Premier Nuclear Science School</span>
        </div>

        {/* School Name - Premium Typography with Colorful Gradients */}
        <div className="mb-8 animate-fade-in-up">
          {/* Main School Name - Extra Large with Premium Effects */}
          <h1 className="school-name-premium">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span className="text-gradient-premium-gold shadow-premium inline-block hover:scale-105 transition-transform duration-300">
                Edward
              </span>
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-1 sm:mt-2">
              <span className="text-gradient-premium-pink shadow-premium-pink inline-block hover:scale-105 transition-transform duration-300">
                Phatudi
              </span>
            </span>
          </h1>
          
          {/* Subtitle - Maths, Science & ICT */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 sm:mt-6 tracking-tight">
            <span className="text-gradient-premium-cyan shadow-premium-cyan inline-block">
              Maths, Science & ICT
            </span>
          </h2>
          
          {/* School Type */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-3 sm:mt-4 tracking-[0.2em] uppercase">
            <span className="text-gradient-premium-purple shadow-premium-purple inline-block">
              School of Specialisation
            </span>
          </h3>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            <Radiation className="w-6 h-6 text-yellow-500/60 animate-pulse" />
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white heading-shadow">
            Where Young Minds <span className="text-gradient-orange">Transform</span> Into
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white heading-shadow mt-2">
            Tomorrow&apos;s <span className="text-gradient-cyan">Scientists</span>
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed font-body animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Join <span className="text-teal-400 font-semibold">Edward Phatudi Maths, Science & ICT School of Specialisation</span> — 
          Gauteng&apos;s pioneering institution shaping the next generation of nuclear scientists, engineers, and technology innovators 
          through world-class education and industry partnerships.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { number: '1,300+', label: 'Future Leaders', icon: Users, color: 'from-teal-500 to-cyan-400' },
            { number: 'Since 2017', label: 'Excellence Legacy', icon: Calendar, color: 'from-cyan-500 to-teal-400' },
            { number: 'Grades 8-12', label: 'Complete Pathway', icon: BookOpen, color: 'from-teal-400 to-emerald-500' },
            { number: 'NECSA', label: 'Industry Partner', icon: Building2, color: 'from-emerald-500 to-cyan-400' },
          ].map((stat, index) => (
            <div key={index} className="flex items-center gap-3 px-5 py-4 glass rounded-2xl hover:border-teal-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-white font-display">{stat.number}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-300 group">
            <Award className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-body">Gauteng Dept. of Education</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group">
            <TrendingUp className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-body">Northern Corridor SoS</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-300 group">
            <Radiation className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
            <span className="text-sm font-body">Nuclear Energy Focus</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link href="/admissions">
            <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold px-10 py-7 text-lg group shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 rounded-xl font-display tracking-wide hover:scale-105">
              <Zap className="mr-2 w-5 h-5 group-hover:animate-pulse" />
              Secure Your Child&apos;s Future
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          <Link href="/programs">
            <Button size="lg" variant="outline" className="border-teal-500/40 text-teal-300 hover:bg-teal-500/10 hover:border-teal-400/50 px-10 py-7 text-lg backdrop-blur-sm rounded-xl font-display tracking-wide hover:scale-105 transition-all duration-300 group">
              <FlaskConical className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Explore Our Programs
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-teal-500/50 flex items-start justify-center p-2 hover:border-cyan-400/70 transition-colors duration-300">
            <div className="w-1.5 h-3 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
