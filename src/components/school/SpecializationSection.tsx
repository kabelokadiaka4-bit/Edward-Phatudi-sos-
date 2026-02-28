'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Radiation, 
  Calculator, 
  FlaskConical, 
  Computer, 
  CheckCircle2,
  ArrowRight,
  Atom,
  Sparkles,
  Zap,
  Circle
} from 'lucide-react'
import Image from 'next/image'

const specializations = [
  {
    icon: Radiation,
    title: 'Nuclear Science & Technology',
    description: 'South Africa\'s only school programme with direct nuclear energy focus. Through our exclusive NECSA partnership, learners gain hands-on experience with nuclear technology applications in medicine, energy production, agriculture, and industrial processes — opening doors to careers in one of the world\'s most critical industries.',
    color: 'from-teal-500 to-cyan-400',
    features: ['NECSA Industry Partnership', 'Nuclear Career Pathways', 'Medical & Energy Applications', 'Expert Mentorship'],
    stat: 'Only in Gauteng'
  },
  {
    icon: Calculator,
    title: 'Advanced Mathematics',
    description: 'Beyond standard curriculum — our mathematics programme builds exceptional analytical thinking and problem-solving skills that set learners apart in university applications and competitive careers. From calculus to statistics, we prepare students for the quantitative demands of engineering, finance, and scientific research.',
    color: 'from-cyan-500 to-teal-400',
    features: ['Advanced Calculus', 'Statistics & Probability', 'Competition Training', 'University Preparation'],
    stat: 'Enhanced Curriculum'
  },
  {
    icon: FlaskConical,
    title: 'Physical Sciences',
    description: 'Our newly upgraded science laboratories — handed over by the Presidency in 2025 — enable real scientific investigation. Learners don\'t just memorize formulas; they conduct experiments, analyze data, and develop the critical thinking skills that universities and employers demand.',
    color: 'from-teal-400 to-emerald-500',
    features: ['Presidential-Level Labs', 'Chemistry & Physics', 'Research Projects', 'Science Olympiads'],
    stat: 'New Labs 2025'
  },
  {
    icon: Computer,
    title: 'ICT & Digital Technology',
    description: 'In partnership with the University of Pretoria, we\'re building digital competence for the future economy. From programming fundamentals to emerging technologies, our ICT programme ensures every learner is prepared for the digital workplace.',
    color: 'from-emerald-500 to-cyan-400',
    features: ['Programming Fundamentals', 'Digital Literacy', 'Emerging Technologies', 'UP Partnership'],
    stat: 'Future-Ready Skills'
  },
]

export function SpecializationSection() {
  return (
    <section id="specialization" className="py-28 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      {/* Nuclear Science Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10 animate-spin-slow hidden lg:block">
        <Atom className="w-32 h-32 text-cyan-400" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 animate-spin-reverse hidden lg:block">
        <Radiation className="w-28 h-28 text-teal-400" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-particle opacity-50" />
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-teal-400 rounded-full animate-particle opacity-50" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-particle opacity-40" style={{ animationDelay: '2s' }} />
      
      {/* Electron orbit decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 border border-cyan-500/5 rounded-full animate-spin-slowest hidden xl:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 mb-6 px-4 py-2 hover:border-cyan-400/50 transition-colors duration-300">
            <Sparkles className="w-4 h-4 mr-1 animate-pulse" />
            Academic Excellence
          </Badge>
          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Specialised Programs
            <span className="block text-gradient heading-glow mt-2">That Set Us Apart</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-body">
            What makes Edward Phatudi different? Our CAPS-aligned curriculum is enhanced with specialised STEM pathways 
            that connect learners directly to industry opportunities and high-demand careers.
          </p>
        </div>

        {/* Interactive Nuclear Model Section */}
        <div className="mb-20 glass rounded-3xl p-8 border-teal-500/10 hover:border-teal-500/20 transition-all duration-500 relative overflow-hidden group">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-4 hover:bg-teal-500/30 transition-colors duration-300">
                <Atom className="w-3 h-3 mr-1 animate-spin" style={{ animationDuration: '10s' }} />
                Interactive Learning
              </Badge>
              <h3 className="heading-section text-2xl sm:text-3xl text-white mb-6">
                Visualize Atomic Structure
              </h3>
              <p className="text-gray-300 leading-relaxed font-body mb-6">
                Our innovative approach to science education includes interactive 3D models that help learners 
                visualize complex atomic structures. This hands-on methodology transforms abstract concepts 
                into tangible understanding — exactly what future scientists need.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors duration-300 group/item">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50 group-hover/item:animate-pulse" />
                  <span className="text-sm">Protons</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300 group/item">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50 group-hover/item:animate-pulse" />
                  <span className="text-sm">Neutrons</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group/item">
                  <div className="w-3 h-3 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50 group-hover/item:animate-pulse" />
                  <span className="text-sm">Electrons</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold px-6 py-5 rounded-xl font-display tracking-wide hover:scale-105 transition-all duration-300 group/btn">
                <Zap className="mr-2 w-5 h-5 group-hover/btn:animate-pulse" />
                Explore Interactive Model
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            <div className="relative aspect-square max-w-md mx-auto w-full h-full">
              {/* Animated orbits around the image */}
              <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-spin-slowest" />
              <div className="absolute inset-4 border border-teal-500/15 rounded-full animate-spin-slowest" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
              <div className="absolute inset-8 border border-cyan-500/10 rounded-full animate-spin-slowest" style={{ animationDuration: '45s' }} />
              
              {/* Orbiting electrons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-ping" style={{ animationDuration: '2s' }} />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
              
              <Image
                src="/images/nuclear-science.png"
                alt="Nuclear Atom Model"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Specialization Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {specializations.map((spec, index) => (
            <Card key={index} className="glass border-0 hover:border-teal-500/30 transition-all duration-500 group overflow-hidden rounded-3xl hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10">
              <CardHeader className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${spec.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`} style={{ width: '72px', height: '72px' }}>
                    <spec.icon className="w-9 h-9 text-white group-hover:animate-pulse" />
                  </div>
                  <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20 font-display hover:bg-teal-500/20 transition-colors duration-300">{spec.stat}</Badge>
                </div>
                <CardTitle className="heading-card text-2xl text-white mb-4 group-hover:text-gradient transition-all duration-300">{spec.title}</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed font-body">{spec.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="flex flex-wrap gap-2">
                  {spec.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-teal-500/10 text-teal-400 border-teal-500/20 px-4 py-1.5 font-medium hover:bg-teal-500/20 transition-colors duration-300">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Grade Levels */}
        <div className="glass rounded-3xl p-8 md:p-12 border-teal-500/10 hover:border-teal-500/20 transition-all duration-500 relative overflow-hidden">
          {/* Decorative nuclear elements */}
          <div className="absolute top-8 right-8 opacity-5 animate-spin-slow hidden lg:block">
            <Atom className="w-24 h-24 text-cyan-400" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="heading-section text-3xl md:text-4xl text-white mb-6">
                Complete Educational
                <span className="block text-gradient mt-2">Journey: Grades 8-12</span>
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed font-body">
                From the first day of Grade 8 to matriculation, we provide a seamless, comprehensive pathway 
                that builds knowledge year after year. Our extended learning model and enrichment programmes 
                ensure learners are not just prepared for exams — they&apos;re prepared for life.
              </p>
              <div className="space-y-4">
                {[
                  { text: 'CAPS-aligned curriculum with enhanced STEM focus', highlight: 'Foundation' },
                  { text: 'Extended learning programmes and afternoon support', highlight: 'Support' },
                  { text: 'Industry exposure through NECSA partnership', highlight: 'Experience' },
                  { text: 'University preparation and career guidance', highlight: 'Future' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-300 font-body group-hover:text-white transition-colors duration-300">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 font-display">Languages & Grades</h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {['English (LOLT)', 'Sepedi', 'isiZulu', 'Setswana', 'Xitsonga'].map((lang, i) => (
                  <Badge key={lang} className="bg-teal-500/20 text-teal-300 px-4 py-2 text-sm font-medium border-teal-500/30 hover:bg-teal-500/30 hover:scale-105 transition-all duration-300 cursor-default" style={{ animationDelay: `${i * 0.1}s` }}>
                    {lang}
                  </Badge>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-3">
                {[8, 9, 10, 11, 12].map((grade, i) => (
                  <div key={grade} className="glass rounded-2xl p-5 text-center hover:border-teal-500/50 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="text-3xl font-bold text-gradient group-hover:scale-110 inline-block transition-transform duration-300 font-display">{grade}</span>
                    <p className="text-xs text-gray-500 mt-1">Grade</p>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-teal-500/10 group-hover:via-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-300" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Senior Phase (8-9) • FET Phase (10-12)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
