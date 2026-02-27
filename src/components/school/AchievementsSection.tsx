'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy, Lightbulb, Atom, Radiation, ArrowRight, Award, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'

const achievements = [
  { 
    title: 'Water-Powered Generator', 
    event: 'Schools of Specialisation Festival 2024', 
    description: 'Our students showcased an innovative generator that operates on water — demonstrating practical engineering skills and sustainable energy thinking. This project exemplifies how we transform theoretical knowledge into real-world solutions.', 
    icon: Lightbulb,
    highlight: true
  },
  { 
    title: '3D Atomic Model Animation', 
    event: 'NECSA Launch Day — April 2018', 
    description: 'Learners designed and animated 3D atomic models during the official launch of the NECSA Schools of Specialisation programme, demonstrating mastery of nuclear science concepts through creative visualization.', 
    icon: Atom,
    highlight: false
  },
  { 
    title: 'Nuclear Science Exposure Programme', 
    event: 'Ongoing NECSA Partnership', 
    description: 'Regular industry visits, expert sessions, and mentorship programmes exposing learners to nuclear technology applications in medicine, agriculture, and energy production. Building direct pathways to careers.', 
    icon: Radiation,
    highlight: false
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 mb-6 px-4 py-2">
            <Award className="w-4 h-4 mr-1" />
            Recognition & Success
          </Badge>
          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Student
            <span className="block text-gradient heading-glow mt-2">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-body">
            Our learners don&apos;t just pass exams — they innovate, compete, and excel. From regional festivals 
            to national recognition, Edward Phatudi students consistently demonstrate that specialized education 
            produces exceptional results.
          </p>
        </div>

        {/* Featured Achievement */}
        <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/20">
          <Image 
            src="/images/student-innovation.png" 
            alt="Student Innovation" 
            width={1344} 
            height={500} 
            className="w-full h-72 md:h-96 object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-2xl">
              <Badge className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border-teal-500/30 mb-4">
                <Trophy className="w-3 h-3 mr-1" />
                Featured Innovation
              </Badge>
              <h3 className="heading-card text-2xl md:text-3xl text-white mb-4">
                Water-Powered Generator
              </h3>
              <p className="text-gray-300 text-lg font-body leading-relaxed">
                At the Gauteng Schools of Specialisation Festival 2024, our students showcased an innovative 
                generator that operates on water — demonstrating practical engineering skills, sustainable 
                energy thinking, and the real-world application of STEM knowledge. This is what happens when 
                education meets innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Other Achievements */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {achievements.filter(a => !a.highlight).map((achievement, index) => (
            <Card key={index} className="glass border-0 hover:border-teal-500/30 transition-all rounded-2xl group">
              <CardHeader className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-all">
                    <achievement.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white font-display">{achievement.title}</CardTitle>
                    <p className="text-sm text-teal-400">{achievement.event}</p>
                  </div>
                </div>
                <CardDescription className="text-gray-400 font-body leading-relaxed">{achievement.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* NSC Performance */}
        <div className="glass rounded-3xl p-8 border-teal-500/10 mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="heading-card text-2xl text-white mb-2">NSC Performance Trend</h3>
              <p className="text-gray-400 font-body">National Senior Certificate Results 2023-2025</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <TrendingUp className="w-5 h-5 text-teal-400" />
              <span className="font-body">Continuous Improvement Focus</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            {[
              { year: '2023', achieved: '82.5%', wrote: 143, trend: 'Strong Foundation' },
              { year: '2024', achieved: '72.0%', wrote: 246, trend: 'Expanded Access' },
              { year: '2025', achieved: '58.8%', wrote: 211, trend: 'Building Stronger' },
            ].map((data, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-[#0a0a0f]/50 border border-teal-500/10 hover:border-teal-500/30 transition-all">
                <p className="text-sm text-gray-500 mb-2">{data.year}</p>
                <p className="text-4xl font-bold text-gradient font-display mb-2">{data.achieved}</p>
                <p className="text-sm text-gray-400 mb-1">{data.wrote} candidates</p>
                <p className="text-xs text-teal-400">{data.trend}</p>
              </div>
            ))}
          </div>
          <div className="glass rounded-xl p-4 border-teal-500/10">
            <p className="text-sm text-gray-400 font-body text-center">
              <span className="text-teal-400 font-semibold">Our Commitment:</span> With new lab infrastructure and enhanced support programmes 
              now in place, we are implementing comprehensive interventions to strengthen academic outcomes and support every learner&apos;s success.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 font-body text-lg">
            Ready to see what your child can achieve?
          </p>
          <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold px-10 py-6 text-lg rounded-xl font-display tracking-wide shadow-xl shadow-teal-500/30">
            Start Your Application
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
