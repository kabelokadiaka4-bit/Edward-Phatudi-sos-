import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
  BookOpen,
  Users,
  Clock
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '@/components/school'

const specializations = [
  {
    icon: Radiation,
    title: 'Nuclear Science & Technology',
    description: 'South Africa\'s only school programme with direct nuclear energy focus. Through our exclusive NECSA partnership, learners gain hands-on experience with nuclear technology applications in medicine, energy production, agriculture, and industrial processes.',
    color: 'from-teal-500 to-cyan-400',
    features: ['NECSA Industry Partnership', 'Nuclear Career Pathways', 'Medical & Energy Applications', 'Expert Mentorship', 'Laboratory Experience', 'Industry Visits'],
    stat: 'Only in Gauteng',
    careers: ['Nuclear Engineer', 'Radiation Safety Officer', 'Medical Physicist', 'Nuclear Medicine Technologist']
  },
  {
    icon: Calculator,
    title: 'Advanced Mathematics',
    description: 'Beyond standard curriculum — our mathematics programme builds exceptional analytical thinking and problem-solving skills that set learners apart in university applications and competitive careers.',
    color: 'from-cyan-500 to-teal-400',
    features: ['Advanced Calculus', 'Statistics & Probability', 'Competition Training', 'University Preparation', 'Mathematical Modelling', 'Problem Solving'],
    stat: 'Enhanced Curriculum',
    careers: ['Data Scientist', 'Actuary', 'Financial Analyst', 'Research Mathematician']
  },
  {
    icon: FlaskConical,
    title: 'Physical Sciences',
    description: 'Our newly upgraded science laboratories — handed over by the Presidency in 2025 — enable real scientific investigation. Learners conduct experiments, analyze data, and develop critical thinking skills.',
    color: 'from-teal-400 to-emerald-500',
    features: ['Presidential-Level Labs', 'Chemistry & Physics', 'Research Projects', 'Science Olympiads', 'Practical Experiments', 'Scientific Method'],
    stat: 'New Labs 2025',
    careers: ['Research Scientist', 'Chemical Engineer', 'Physicist', 'Laboratory Manager']
  },
  {
    icon: Computer,
    title: 'ICT & Digital Technology',
    description: 'In partnership with the University of Pretoria, we\'re building digital competence for the future economy. From programming fundamentals to emerging technologies.',
    color: 'from-emerald-500 to-cyan-400',
    features: ['Programming Fundamentals', 'Digital Literacy', 'Emerging Technologies', 'UP Partnership', 'Software Development', 'Cybersecurity Basics'],
    stat: 'Future-Ready Skills',
    careers: ['Software Developer', 'Systems Analyst', 'IT Manager', 'Cybersecurity Specialist']
  },
]

const gradeInfo = [
  { grade: '8-9', phase: 'Senior Phase', focus: 'Foundation building in core STEM subjects with introduction to specialised content' },
  { grade: '10-12', phase: 'FET Phase', focus: 'Advanced specialisation with industry exposure and university preparation' },
]

export default function ProgramsPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/science-lab.png"
            alt="Academic Programs"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f]" />
        </div>
        
        {/* Nuclear decorations */}
        <div className="absolute top-20 left-20 opacity-10 animate-spin-slow hidden lg:block">
          <Atom className="w-40 h-40 text-cyan-400" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10 animate-spin-reverse hidden lg:block">
          <Radiation className="w-32 h-32 text-teal-400" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Academic Excellence
          </Badge>
          <h1 className="heading-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Our <span className="text-gradient">Programs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed font-body">
            Discover our specialised STEM pathways that connect learners directly to industry 
            opportunities and high-demand careers in nuclear science, technology, and engineering.
          </p>
        </div>
      </section>

      {/* Specialization Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 mb-6 px-4 py-2">
              <Zap className="w-4 h-4 mr-1" />
              Specialised Pathways
            </Badge>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg font-body">
              Our CAPS-aligned curriculum is enhanced with specialised STEM pathways unavailable at ordinary schools.
            </p>
          </div>

          <div className="space-y-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="glass border-0 border-teal-500/10 hover:border-teal-500/30 transition-all duration-500 overflow-hidden rounded-3xl group">
                <CardHeader className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${spec.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <spec.icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="heading-card text-2xl md:text-3xl text-white">{spec.title}</CardTitle>
                          <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20 font-display">{spec.stat}</Badge>
                        </div>
                        <CardDescription className="text-gray-400 text-base leading-relaxed font-body max-w-2xl">{spec.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-semibold text-teal-400 mb-4 font-display uppercase tracking-wide">Program Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {spec.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-teal-500/10 text-teal-400 border-teal-500/20 px-4 py-1.5 font-medium hover:bg-teal-500/20 transition-colors">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-4 font-display uppercase tracking-wide">Career Pathways</h4>
                      <div className="space-y-2">
                        {spec.careers.map((career, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                            <span className="font-body">{career}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Structure */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-cyan-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-teal-500/30 text-teal-400 mb-6 px-4 py-2">
              <BookOpen className="w-4 h-4 mr-1" />
              Academic Structure
            </Badge>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Grade <span className="text-gradient">Structure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gradeInfo.map((info, index) => (
              <div key={index} className="glass rounded-3xl p-10 border-teal-500/10 hover:border-teal-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white font-display">{info.grade}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display">{info.phase}</h3>
                    <p className="text-teal-400 font-medium">Grades {info.grade}</p>
                  </div>
                </div>
                <p className="text-gray-300 font-body text-lg leading-relaxed">{info.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-10 border-teal-500/10">
            <div className="text-center mb-10">
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-4">
                <Users className="w-4 h-4 mr-2" />
                Languages Offered
              </Badge>
              <h2 className="heading-section text-3xl text-white">
                Language of Learning & <span className="text-gradient">Instruction</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['English (LOLT)', 'Sepedi (Home Language)', 'isiZulu (First Additional)', 'Setswana (First Additional)', 'Xitsonga (First Additional)'].map((lang, i) => (
                <Badge key={i} className="bg-teal-500/20 text-teal-300 px-6 py-3 text-base font-medium border-teal-500/30 hover:bg-teal-500/30 transition-colors cursor-default" style={{ animationDelay: `${i * 0.1}s` }}>
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-section text-3xl sm:text-4xl text-white mb-6">
            Ready to Shape Your <span className="text-gradient">Future?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 font-body">
            Begin your journey with Edward Phatudi and unlock opportunities in South Africa&apos;s most critical industries.
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
                <Clock className="mr-2 w-5 h-5" />
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
