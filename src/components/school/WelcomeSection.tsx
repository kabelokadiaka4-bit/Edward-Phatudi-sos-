'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Heart, 
  Target, 
  Shield, 
  Sparkles, 
  Quote,
  ArrowRight,
  Award,
  Users,
  Atom,
  Radiation,
  Zap
} from 'lucide-react'
import Image from 'next/image'

export function WelcomeSection() {
  return (
    <section id="welcome" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-cyan-500/5" />
      
      {/* Nuclear Science Decorative Elements */}
      <div className="absolute top-20 right-20 opacity-10 animate-spin-slow hidden lg:block">
        <Atom className="w-40 h-40 text-cyan-400" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-10 animate-spin-reverse hidden lg:block">
        <Radiation className="w-32 h-32 text-teal-400" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-particle opacity-40" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-teal-400 rounded-full animate-particle opacity-30" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-particle opacity-35" style={{ animationDelay: '2s' }} />
      
      {/* Electron orbit decoration */}
      <div className="absolute top-1/3 left-0 w-48 h-48 border border-cyan-500/5 rounded-full animate-spin-slowest hidden xl:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Principal Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0 group">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-teal-500/30 shadow-2xl shadow-teal-500/20 group-hover:border-teal-400/50 transition-colors duration-500">
                <Image
                  src="/images/principal.png"
                  alt="Principal Willie Mkhwanazi"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white font-display">Mr. Willie Mkhwanazi</h3>
                  <p className="text-teal-400 font-medium">Principal & Educational Leader</p>
                </div>
              </div>
              
              {/* Achievement Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-xl border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 group/badge hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center group-hover/badge:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white font-display">NECSA Partner</p>
                    <p className="text-xs text-gray-400">Since 2018</p>
                  </div>
                </div>
              </div>
              
              {/* Nuclear badge decoration */}
              <div className="absolute -top-4 -left-4 glass rounded-xl p-3 shadow-lg border-cyan-500/20 hidden sm:block">
                <Atom className="w-8 h-8 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
            </div>
            
            {/* Student Activities Image */}
            <div className="relative mt-8 rounded-2xl overflow-hidden border border-teal-500/20 shadow-xl shadow-cyan-500/10 max-w-md mx-auto lg:mx-0 group hover:border-teal-400/40 transition-all duration-500 hover:scale-[1.02]">
              <Image
                src="/images/students-activities.jpg"
                alt="Students engaged in learning activities"
                width={600}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-teal-500/30 transition-colors duration-300">
                  <Users className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-white font-semibold font-display">Student Life</p>
                  <p className="text-xs text-gray-400">Engaged. Inspired. Empowered.</p>
                </div>
              </div>
              {/* Animated glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:via-cyan-500/5 group-hover:to-teal-500/5 transition-all duration-500" />
            </div>
          </div>

          {/* Welcome Message */}
          <div className="order-1 lg:order-2">
            <Badge variant="outline" className="border-teal-500/30 text-teal-400 mb-6 px-4 py-2 hover:border-teal-400/50 transition-colors duration-300 group">
              <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              A Personal Welcome
            </Badge>
            
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Shaping
              <span className="block text-gradient heading-glow mt-2">Tomorrow&apos;s Innovators</span>
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl mt-4 font-normal">Today</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed font-body">
                It is my profound privilege to welcome you to <span className="text-teal-400 font-semibold">Edward Phatudi Maths, Science & ICT School of Specialisation</span> — 
                where we don&apos;t just teach subjects, we ignite passions and build futures.
              </p>
              
              <div className="glass rounded-2xl p-8 relative border-teal-500/20 hover:border-teal-500/30 transition-colors duration-300 group">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-teal-500/20 group-hover:text-teal-500/30 transition-colors duration-300" />
                <p className="text-gray-200 leading-relaxed pl-10 text-lg italic font-body">
                  &ldquo;Our partnership with NECSA represents a transformative opportunity for every learner who walks through our doors. 
                  We are not just preparing students for exams — we are preparing them for careers in South Africa&apos;s 
                  most critical industries: <span className="text-teal-300 not-italic font-medium">nuclear energy</span>, technology, and scientific research. Every child here has the potential 
                  to change the world.&rdquo;
                </p>
                {/* Animated glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:via-cyan-500/5 group-hover:to-teal-500/5 rounded-2.5xl blur transition-all duration-500 -z-10" />
              </div>

              <p className="text-gray-400 leading-relaxed font-body text-lg">
                As a School of Specialisation in Gauteng&apos;s Northern Corridor, we offer what ordinary schools cannot: 
                <span className="text-teal-300 font-medium"> direct industry exposure</span>, 
                <span className="text-cyan-300 font-medium"> cutting-edge facilities</span>, and 
                <span className="text-teal-300 font-medium"> pathways to high-demand careers</span>. 
                Our learners don&apos;t just study science — they conduct real experiments, build innovative projects, 
                and connect with industry professionals who mentor them toward success.
              </p>

              {/* Key Values */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-4 p-4 glass rounded-xl hover:border-teal-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-teal-500/5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-all duration-300 group-hover:scale-110">
                    <Target className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <span className="text-white font-semibold font-display">Excellence</span>
                    <p className="text-xs text-gray-400">In everything we do</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass rounded-xl hover:border-teal-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-all duration-300 group-hover:scale-110">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-white font-semibold font-display">Safety</span>
                    <p className="text-xs text-gray-400">Secure learning environment</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass rounded-xl hover:border-teal-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-teal-500/5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center group-hover:from-teal-500/30 group-hover:to-emerald-500/30 transition-all duration-300 group-hover:scale-110">
                    <Sparkles className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <span className="text-white font-semibold font-display">Innovation</span>
                    <p className="text-xs text-gray-400">Future-focused learning</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass rounded-xl hover:border-teal-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all duration-300 group-hover:scale-110">
                    <Heart className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-semibold font-display">Care</span>
                    <p className="text-xs text-gray-400">Every learner matters</p>
                  </div>
                </div>
              </div>

              <Button className="mt-6 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold px-8 py-6 rounded-xl font-display tracking-wide shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105 group">
                <Zap className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                Discover Our Story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
