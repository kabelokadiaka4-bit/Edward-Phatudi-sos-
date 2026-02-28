import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
  Award,
  Atom,
  Sparkles
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '@/components/school'

const facilities = [
  { 
    icon: FlaskConical, 
    title: 'Science Laboratories', 
    description: 'Brand new presidential-level laboratories handed over in August 2025. Fully equipped for chemistry, physics, and biology experiments that enable real scientific discovery.', 
    status: 'Newly Upgraded', 
    statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    image: '/images/science-lab.png'
  },
  { 
    icon: Computer, 
    title: 'ICT & Computer Laboratory', 
    description: 'State-of-the-art computer facilities being revitalized with University of Pretoria support. Programming, digital skills, and technology integration for the digital economy.', 
    status: 'In Development', 
    statusColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    image: '/images/computer-lab.png'
  },
  { 
    icon: Cpu, 
    title: 'Mechanical Technology Workshop', 
    description: 'Hands-on technical education facilities for engineering pathways. Real tools, real projects, real skills development for technical careers.', 
    status: 'Active', 
    statusColor: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    image: '/images/classroom.png'
  },
  { 
    icon: Microscope, 
    title: 'Nuclear Science Equipment', 
    description: 'Specialised equipment donated through NECSA partnership. Unique in Gauteng — enabling demonstrations and experiments in nuclear technology applications.', 
    status: 'Exclusive', 
    statusColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    image: '/images/nuclear-science.png'
  },
]

const labFeatures = [
  { icon: FlaskConical, title: 'Chemistry Lab', description: 'Fully Equipped' },
  { icon: Microscope, title: 'Physics Lab', description: 'Modern Equipment' },
  { icon: BookOpen, title: 'Research Space', description: 'Student Projects' },
  { icon: Users, title: 'Collaborative', description: 'Group Learning' },
]

export default function FacilitiesPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/science-lab.png"
            alt="School Facilities"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f]" />
        </div>
        
        {/* Nuclear decorations */}
        <div className="absolute top-20 right-20 opacity-10 animate-spin-slow hidden lg:block">
          <Atom className="w-36 h-36 text-cyan-400" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            World-Class Infrastructure
          </Badge>
          <h1 className="heading-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Our <span className="text-gradient">Facilities</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed font-body">
            When learners step into our laboratories, they step into the future. Our infrastructure 
            investments ensure every student has access to the tools they need to excel.
          </p>
        </div>
      </section>

      {/* Presidential Lab Handover Feature */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl overflow-hidden border-teal-500/10">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/images/science-lab.png"
                  alt="Presidential Science Laboratory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0f]/50 lg:to-[#0a0a0f]" />
              </div>
              <div className="p-10 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-sm">
                    August 2025 — Historic Milestone
                  </Badge>
                </div>
                <h2 className="heading-section text-3xl md:text-4xl text-white mb-6">
                  Presidential Science Laboratory Handover
                </h2>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed font-body">
                  In a landmark moment for our school and community, the Presidency of South Africa officiated 
                  the handover of brand-new science laboratory facilities. This multi-party initiative — 
                  involving the Presidency, NECSA, and corporate partners — represents a transformational 
                  investment in the futures of our learners.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Building2 className="w-5 h-5 text-teal-400" />
                    <span className="font-body">Presidency Supported</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Radiation className="w-5 h-5 text-cyan-400" />
                    <span className="font-body">NECSA Partnership</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-teal-400" />
                    <span className="font-body">Multi-Party Initiative</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span className="font-body">World-Class Standard</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {labFeatures.map((feature, index) => (
                    <div key={index} className="text-center p-4 glass rounded-xl hover:border-teal-500/30 transition-all">
                      <feature.icon className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                      <p className="text-white font-semibold font-display text-sm">{feature.title}</p>
                      <p className="text-xs text-gray-500">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-cyan-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 mb-6 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-1" />
              State-of-the-Art
            </Badge>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Explore Our <span className="text-gradient">Facilities</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg font-body">
              Each facility is designed to provide hands-on learning experiences that prepare learners for real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="glass border-0 border-teal-500/10 hover:border-teal-500/30 transition-all duration-500 overflow-hidden rounded-3xl group">
                <div className="relative h-48">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  <Badge className={`absolute top-4 right-4 ${facility.statusColor}`}>{facility.status}</Badge>
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-all">
                      <facility.icon className="w-7 h-7 text-teal-400" />
                    </div>
                    <CardTitle className="heading-card text-xl text-white">{facility.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400 font-body leading-relaxed">{facility.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-10 border-teal-500/10 text-center">
            <h2 className="heading-section text-3xl sm:text-4xl text-white mb-6">
              Experience Our <span className="text-gradient">Campus</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto font-body">
              Schedule a visit to see our world-class facilities firsthand. Our team is ready to 
              show you around and answer any questions about our specialised programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold px-10 py-7 text-lg shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all rounded-xl font-display tracking-wide">
                  Schedule a Campus Tour
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/admissions">
                <Button size="lg" variant="outline" className="border-teal-500/40 text-teal-300 hover:bg-teal-500/10 px-10 py-7 text-lg rounded-xl font-display tracking-wide">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
