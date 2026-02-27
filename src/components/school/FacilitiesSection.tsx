'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  FlaskConical, 
  Computer, 
  Cpu, 
  Microscope, 
  Building2, 
  Radiation, 
  Clock, 
  BookOpen, 
  Users, 
  Zap,
  ArrowRight,
  Award
} from 'lucide-react'
import Image from 'next/image'

const facilities = [
  { 
    icon: FlaskConical, 
    title: 'Science Laboratories', 
    description: 'Brand new presidential-level laboratories handed over in August 2025. Fully equipped for chemistry, physics, and biology experiments that enable real scientific discovery.', 
    status: 'Newly Upgraded', 
    statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
  },
  { 
    icon: Computer, 
    title: 'ICT & Computer Laboratory', 
    description: 'State-of-the-art computer facilities being revitalized with University of Pretoria support. Programming, digital skills, and technology integration for the digital economy.', 
    status: 'In Development', 
    statusColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' 
  },
  { 
    icon: Cpu, 
    title: 'Mechanical Technology Workshop', 
    description: 'Hands-on technical education facilities for engineering pathways. Real tools, real projects, real skills development for technical careers.', 
    status: 'Active', 
    statusColor: 'bg-teal-500/20 text-teal-400 border-teal-500/30' 
  },
  { 
    icon: Microscope, 
    title: 'Nuclear Science Equipment', 
    description: 'Specialised equipment donated through NECSA partnership. Unique in Gauteng — enabling demonstrations and experiments in nuclear technology applications.', 
    status: 'Exclusive', 
    statusColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' 
  },
]

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="border-teal-500/30 text-teal-400 mb-6 px-4 py-2">
            <Building2 className="w-4 h-4 mr-1" />
            World-Class Infrastructure
          </Badge>
          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Facilities That
            <span className="block text-gradient heading-glow mt-2">Inspire Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-body">
            When learners step into our laboratories, they step into the future. Our recent infrastructure 
            investments — including the presidential science lab handover — ensure every student has access 
            to the tools they need to excel.
          </p>
        </div>

        {/* Featured Facility Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-3xl overflow-hidden group shadow-2xl shadow-teal-500/20">
            <Image 
              src="/images/science-lab.png" 
              alt="Science Laboratory" 
              width={800} 
              height={500} 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
            <div className="absolute top-6 left-6">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                <Award className="w-3 h-3 mr-1" />
                Presidential Handover
              </Badge>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="heading-card text-2xl text-white mb-2">Science Laboratory</h3>
              <p className="text-gray-300 font-body">Handed over August 2025 — Presidential initiative</p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden group shadow-2xl shadow-cyan-500/20">
            <Image 
              src="/images/computer-lab.png" 
              alt="Computer Laboratory" 
              width={800} 
              height={500} 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
            <div className="absolute top-6 left-6">
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                <Building2 className="w-3 h-3 mr-1" />
                University Partnership
              </Badge>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="heading-card text-2xl text-white mb-2">ICT Laboratory</h3>
              <p className="text-gray-300 font-body">University of Pretoria collaboration</p>
            </div>
          </div>
        </div>

        {/* Lab Handover Feature */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden border-teal-500/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-sm">
                  August 2025 — Historic Milestone
                </Badge>
              </div>
              <h3 className="heading-section text-2xl sm:text-3xl md:text-4xl text-white mb-6">
                Presidential Science Laboratory Handover
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed font-body">
                In a landmark moment for our school and community, the Presidency of South Africa officiated 
                the handover of brand-new science laboratory facilities to Edward Phatudi. This multi-party 
                initiative — involving the Presidency, NECSA, and corporate partners — represents a 
                transformational investment in the futures of our learners.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300 font-body">Presidency Supported</span>
                </div>
                <div className="flex items-center gap-3">
                  <Radiation className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300 font-body">NECSA Partnership</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300 font-body">Multi-Party Initiative</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold px-8 py-6 rounded-xl font-display tracking-wide shadow-lg shadow-teal-500/20">
                View Lab Gallery
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="glass rounded-2xl p-6 text-center hover:border-teal-500/30 transition-all group border-teal-500/10">
                <FlaskConical className="w-12 h-12 text-teal-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold font-display">Chemistry Lab</p>
                <p className="text-xs text-gray-500 mt-1">Fully Equipped</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all group border-teal-500/10">
                <Microscope className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold font-display">Physics Lab</p>
                <p className="text-xs text-gray-500 mt-1">Modern Equipment</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:border-teal-500/30 transition-all group border-teal-500/10">
                <BookOpen className="w-12 h-12 text-teal-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold font-display">Research Space</p>
                <p className="text-xs text-gray-500 mt-1">Student Projects</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all group border-teal-500/10">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold font-display">Collaborative</p>
                <p className="text-xs text-gray-500 mt-1">Group Learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="glass border-0 hover:border-teal-500/30 transition-all duration-300 rounded-2xl">
              <CardHeader className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                    <facility.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <Badge className={facility.statusColor}>{facility.status}</Badge>
                </div>
                <CardTitle className="heading-card text-xl text-white">{facility.title}</CardTitle>
                <CardDescription className="text-gray-400 mt-2 font-body leading-relaxed">{facility.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
