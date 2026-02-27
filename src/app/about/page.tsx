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
  Computer,
  Heart,
  Users,
  Award,
  Building2,
  Sparkles
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '@/components/school'

const milestones = [
  { year: '2017', event: 'Launched as Gauteng\'s first Nuclear Energy-focused School of Specialisation', icon: Radiation },
  { year: '2018', event: 'NECSA partnership formalized — learners design and animate 3D Atomic Models', icon: Atom },
  { year: '2022', event: 'ICT lab revival with University of Pretoria — bridging the digital divide', icon: Computer },
  { year: '2024', event: 'SoS Festival recognition — water-powered generator innovation wins acclaim', icon: Lightbulb },
  { year: '2025', event: 'Presidential science laboratory handover — world-class facilities for our learners', icon: FlaskConical },
]

const values = [
  { icon: Target, title: 'Excellence', description: 'Striving for the highest standards in everything we do, from academics to character development.' },
  { icon: Heart, title: 'Integrity', description: 'Building honest, ethical leaders who uphold the values of our community and nation.' },
  { icon: Sparkles, title: 'Innovation', description: 'Encouraging creative thinking and problem-solving to address real-world challenges.' },
  { icon: Users, title: 'Collaboration', description: 'Working together with industry partners, universities, and the community for learner success.' },
]

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/nuclear-science.png"
            alt="About Edward Phatudi"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f]" />
        </div>
        
        {/* Nuclear decorations */}
        <div className="absolute top-20 right-20 opacity-10 animate-spin-slow hidden lg:block">
          <Atom className="w-40 h-40 text-cyan-400" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Our Story Since 2017
          </Badge>
          <h1 className="heading-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            About <span className="text-gradient">Edward Phatudi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed font-body">
            Pioneering nuclear science education in South Africa, preparing the next generation 
            of scientists, engineers, and innovators for careers that will shape our nation&apos;s future.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass rounded-3xl p-10 border-teal-500/10 hover:border-teal-500/20 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="heading-card text-3xl text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg font-body">
                To equip every learner with the knowledge, skills, and confidence to excel in STEM fields. 
                Through strategic partnerships with <span className="text-teal-400 font-semibold">NECSA</span> and the{' '}
                <span className="text-teal-400 font-semibold">University of Pretoria</span>, 
                we bridge the gap between classroom theory and real-world application — 
                preparing South Africa&apos;s next generation of innovators, scientists, and leaders.
              </p>
            </div>

            <div className="glass rounded-3xl p-10 border-teal-500/10 hover:border-teal-500/20 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="heading-card text-3xl text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg font-body">
                To be the <span className="text-cyan-400 font-semibold">leading School of Specialisation</span> in South Africa — 
                a beacon of excellence where every graduate is prepared for university success and meaningful careers 
                in the nuclear energy sector, technology industries, and engineering professions. 
                We envision a future where our alumni lead South Africa&apos;s scientific advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-cyan-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-teal-500/30 text-teal-400 mb-6 px-4 py-2">
              <Heart className="w-4 h-4 mr-1" />
              What We Stand For
            </Badge>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass rounded-2xl p-8 text-center border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 group hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-all group-hover:scale-110">
                  <value.icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{value.title}</h3>
                <p className="text-gray-400 font-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 mb-6 px-4 py-2">
              <Calendar className="w-4 h-4 mr-1" />
              Our Journey
            </Badge>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Milestones of <span className="text-gradient">Excellence</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-500" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-20 md:pl-0`}>
                    <div className="glass rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 group">
                      <span className="text-teal-400 font-bold text-2xl font-display group-hover:scale-110 inline-block transition-transform">{milestone.year}</span>
                      <p className="text-gray-300 mt-2 font-body leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/30 z-10 group-hover:scale-125 transition-transform">
                    <milestone.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-10 border-teal-500/10">
            <div className="text-center mb-12">
              <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                Strategic Partnerships
              </Badge>
              <h2 className="heading-section text-3xl sm:text-4xl text-white mb-4">
                Industry & Academic <span className="text-gradient">Partners</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8 hover:border-teal-500/30 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Radiation className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">NECSA</h3>
                    <p className="text-sm text-teal-400">Nuclear Energy Corporation</p>
                  </div>
                </div>
                <p className="text-gray-400 font-body">
                  Our flagship partnership with the Nuclear Energy Corporation of South Africa provides learners 
                  with unprecedented access to nuclear science facilities, mentorship, and career pathways.
                </p>
              </div>
              
              <div className="glass rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Computer className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">University of Pretoria</h3>
                    <p className="text-sm text-cyan-400">Academic Collaboration</p>
                  </div>
                </div>
                <p className="text-gray-400 font-body">
                  Our collaboration with the University of Pretoria enhances our ICT curriculum and provides 
                  learners with university-level resources and academic preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-section text-3xl sm:text-4xl text-white mb-6">
            Ready to Join Our <span className="text-gradient">Family?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 font-body">
            Discover how Edward Phatudi can transform your child&apos;s future through specialised STEM education.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold px-10 py-7 text-lg shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all rounded-xl font-display tracking-wide">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-teal-500/40 text-teal-300 hover:bg-teal-500/10 px-10 py-7 text-lg rounded-xl font-display tracking-wide">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
