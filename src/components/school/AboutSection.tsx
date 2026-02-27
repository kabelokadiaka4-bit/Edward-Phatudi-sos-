'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  Rocket, 
  Radiation,
  ArrowRight,
  Calendar,
  Atom,
  Lightbulb,
  FlaskConical,
  Computer
} from 'lucide-react'
import Image from 'next/image'

const milestones = [
  { year: '2017', event: 'Launched as Gauteng\'s first Nuclear Energy-focused School of Specialisation', icon: Radiation },
  { year: '2018', event: 'NECSA partnership formalized — learners design and animate 3D Atomic Models', icon: Atom },
  { year: '2022', event: 'ICT lab revival with University of Pretoria — bridging the digital divide', icon: Computer },
  { year: '2024', event: 'SoS Festival recognition — water-powered generator innovation wins acclaim', icon: Lightbulb },
  { year: '2025', event: 'Presidential science laboratory handover — world-class facilities for our learners', icon: FlaskConical },
]

export function AboutSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
      
      {/* Nuclear Science Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-10 animate-spin-slow hidden lg:block">
        <Atom className="w-36 h-36 text-cyan-400" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-8 animate-spin-reverse hidden lg:block">
        <Radiation className="w-28 h-28 text-teal-400" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-particle opacity-40" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-teal-400 rounded-full animate-particle opacity-30" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="border-teal-500/30 text-teal-400 mb-6 px-4 py-2 hover:border-teal-400/50 transition-colors duration-300">
            <Calendar className="w-4 h-4 mr-1 animate-pulse" />
            Our Journey Since 2017
          </Badge>
          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Pioneering the Future
            <span className="block text-gradient heading-glow mt-2">of STEM Education</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-body">
            From a bold vision in 2017 to becoming Gauteng&apos;s leading Nuclear Science school, 
            we&apos;ve built an institution where dreams transform into careers and potential becomes achievement.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/20 group">
          <Image
            src="/images/nuclear-science.png"
            alt="Nuclear Science Education"
            width={1344}
            height={500}
            className="w-full h-64 md:h-[32rem] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
          
          {/* Animated nuclear elements on image */}
          <div className="absolute top-8 right-8 opacity-30 animate-spin-slow hidden md:block">
            <Atom className="w-20 h-20 text-cyan-400" />
          </div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-4 hover:bg-teal-500/30 transition-colors duration-300">
              <Radiation className="w-3 h-3 mr-1 animate-pulse" />
              South Africa&apos;s Nuclear Future
            </Badge>
            <h3 className="heading-card text-2xl md:text-4xl text-white mb-3 heading-shadow">
              Nuclear Science & Technology Focus
            </h3>
            <p className="text-gray-300 max-w-2xl text-lg font-body">
              The only Gauteng school with a direct nuclear energy focus — preparing learners for careers 
              in nuclear medicine, energy production, agricultural technology, and advanced research.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="relative rounded-2xl overflow-hidden group shadow-xl shadow-teal-500/10">
            <Image
              src="/images/students-lab.png"
              alt="Students in Laboratory"
              width={600}
              height={400}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold font-display">Hands-On Learning</p>
              <p className="text-xs text-gray-400">Real experiments, real science</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group shadow-xl shadow-cyan-500/10">
            <Image
              src="/images/campus-view.jpg"
              alt="Campus View"
              width={600}
              height={400}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold font-display">Our Campus</p>
              <p className="text-xs text-gray-400">Modern learning environment</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group shadow-xl shadow-teal-500/10">
            <Image
              src="/images/student-innovation.png"
              alt="Student Innovation"
              width={600}
              height={400}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold font-display">Student Innovation</p>
              <p className="text-xs text-gray-400">Creating tomorrow&apos;s solutions</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Mission & Vision */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8 border-teal-500/10 hover:border-teal-500/20 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-card text-2xl text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg font-body">
                To equip every learner with the knowledge, skills, and confidence to excel in STEM fields. 
                Through strategic partnerships with <span className="text-teal-400 font-semibold">NECSA</span> and the <span className="text-teal-400 font-semibold">University of Pretoria</span>, 
                we bridge the gap between classroom theory and real-world application — 
                preparing South Africa&apos;s next generation of innovators, scientists, and leaders.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 border-teal-500/10 hover:border-teal-500/20 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-card text-2xl text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg font-body">
                To be the <span className="text-cyan-400 font-semibold">leading School of Specialisation</span> in South Africa — 
                a beacon of excellence where every graduate is prepared for university success and meaningful careers 
                in the nuclear energy sector, technology industries, and engineering professions. 
                We envision a future where our alumni lead South Africa&apos;s scientific advancement.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 text-center border-teal-500/10 hover:border-teal-500/30 transition-all group">
                <p className="text-4xl font-bold text-gradient font-display mb-2 group-hover:scale-105 transition-transform">700231639</p>
                <p className="text-sm text-gray-400">EMIS Number</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center border-teal-500/10 hover:border-teal-500/30 transition-all group">
                <p className="text-4xl font-bold text-gradient font-display mb-2 group-hover:scale-105 transition-transform">Tshwane South</p>
                <p className="text-sm text-gray-400">District (TS)</p>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold py-6 rounded-xl font-display tracking-wide shadow-lg shadow-teal-500/20">
              Learn About Our Partnerships
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            <h3 className="heading-card text-xl text-white mb-10 font-display">Our Journey of Excellence</h3>
            <div className="space-y-5">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-0 w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <milestone.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="glass rounded-2xl p-5 group-hover:border-teal-500/30 transition-all">
                    <span className="text-teal-400 font-bold text-xl font-display">{milestone.year}</span>
                    <p className="text-gray-300 mt-2 font-body leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
