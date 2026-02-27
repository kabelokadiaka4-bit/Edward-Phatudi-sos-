import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Computer, 
  Target, 
  BookOpen, 
  GraduationCap, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  Users, 
  Clock, 
  FileText,
  Calendar,
  Sparkles,
  Award,
  Atom
} from 'lucide-react'
import Link from 'next/link'
import { PageWrapper } from '@/components/school'

const steps = [
  { number: '01', title: 'Online Application', description: 'Begin your journey by applying through the Gauteng Online Admissions system during the official application period.', icon: Computer },
  { number: '02', title: 'Placement Test', description: 'Complete the School of Specialisation placement test. This ensures the right fit for your child\'s academic pathway.', icon: Target },
  { number: '03', title: 'Document Submission', description: 'Submit certified copies of required documents including proof of address and previous school reports.', icon: BookOpen },
  { number: '04', title: 'Acceptance', description: 'Successful applicants receive placement offers and welcome information for the new academic year.', icon: GraduationCap },
]

const documents = [
  { name: 'Parent/Guardian ID Copy', note: 'Certified, not older than 3 months' },
  { name: 'Learner Birth Certificate', note: 'Certified copy' },
  { name: 'Latest School Report', note: 'Most recent academic results' },
  { name: 'Proof of Residence', note: 'Utility bill or official letter' },
  { name: 'Transfer Card', note: 'If applicable' },
  { name: 'Immunisation Card', note: 'For younger applicants' },
]

const requirements = [
  'Strong interest in Mathematics and Science',
  'Minimum academic performance as per GDE requirements',
  'Successful completion of placement assessment',
  'Commitment to specialised STEM curriculum',
  'Willingness to participate in extended learning programmes',
]

export default function AdmissionsPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-500/10" />
        
        {/* Nuclear decorations */}
        <div className="absolute top-20 right-20 opacity-10 animate-spin-slow hidden lg:block">
          <Atom className="w-40 h-40 text-cyan-400" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-6">
            <Users className="w-4 h-4 mr-2" />
            Join Our Family
          </Badge>
          <h1 className="heading-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            <span className="text-gradient">Admissions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed font-body">
            Every great achievement begins with a single step. Join the Edward Phatudi family and give 
            your child access to world-class STEM education that opens doors to exceptional careers.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-teal-500/30 text-teal-400 mb-6 px-4 py-2">
              <Calendar className="w-4 h-4 mr-1" />
              Application Process
            </Badge>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Your Journey to <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg font-body">
              Follow these simple steps to begin your child&apos;s educational journey with us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="glass rounded-2xl p-6 h-full border-teal-500/10 hover:border-teal-500/30 transition-all duration-300">
                  <div className="text-5xl font-bold text-teal-500/20 mb-4 font-display">{step.number}</div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-all group-hover:scale-110">
                    <step.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-display">{step.title}</h3>
                  <p className="text-gray-400 font-body leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Documents */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-cyan-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Documents Required */}
            <div className="glass rounded-3xl p-10 border-teal-500/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="heading-card text-2xl text-white font-display">Required Documents</h2>
                  <p className="text-sm text-gray-400">Prepare these for your application</p>
                </div>
              </div>
              <ul className="space-y-4">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-300 font-body group">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-teal-500/30 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <span className="font-medium text-white">{doc.name}</span>
                      <span className="text-sm text-gray-500 ml-2">({doc.note})</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-sm text-yellow-300 font-body">
                  <strong>Important:</strong> All documents must be certified copies not older than 3 months. 
                  Incomplete applications may delay processing.
                </p>
              </div>
            </div>

            {/* Admission Requirements */}
            <div className="glass rounded-3xl p-10 border-teal-500/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="heading-card text-2xl text-white font-display">Admission Requirements</h2>
                  <p className="text-sm text-gray-400">What we look for in applicants</p>
                </div>
              </div>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-300 font-body group">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-cyan-500/30 transition-colors">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="group-hover:text-white transition-colors">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                <p className="text-sm text-teal-300 font-body">
                  <strong>Note:</strong> As a School of Specialisation, we may have additional requirements 
                  beyond standard GDE admissions criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-10 border-teal-500/10">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-6">
                  <Phone className="w-4 h-4 mr-2" />
                  Admissions Office
                </Badge>
                <h2 className="heading-section text-3xl text-white mb-6">
                  Need <span className="text-gradient">Assistance?</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg font-body">
                  Our admissions team is here to help guide you through the application process. 
                  Don&apos;t hesitate to reach out with any questions.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/50 border border-teal-500/10 hover:border-teal-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Main Office</p>
                      <p className="text-xl text-white font-semibold font-display">012 375 8267</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/50 border border-teal-500/10 hover:border-teal-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">SoS Admissions Hotline</p>
                      <p className="text-xl text-white font-semibold font-display">082 557 1671</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/50 border border-teal-500/10 hover:border-teal-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Us</p>
                      <p className="text-white font-medium">EdwardPhatudicompr@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/50 border border-teal-500/10 hover:border-teal-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Office Hours</p>
                      <p className="text-white font-medium">Mon-Fri: 7:30 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="glass rounded-2xl p-8 text-center border-teal-500/10">
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">Ready to Apply?</h3>
                  <p className="text-gray-400 mb-6 font-body">
                    Start your application through the Gauteng Online Admissions portal or contact us directly.
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white py-7 text-lg rounded-xl font-display tracking-wide shadow-lg shadow-teal-500/20 group">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Apply via GDE Portal
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Link href="/contact" className="block">
                      <Button variant="outline" className="w-full border-teal-500/40 text-teal-300 hover:bg-teal-500/10 py-7 text-lg rounded-xl font-display tracking-wide">
                        Contact Admissions Office
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-6">
            Why Choose Edward Phatudi?
          </Badge>
          <h2 className="heading-section text-3xl sm:text-4xl text-white mb-6">
            Give Your Child the <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8 font-body">
            Schools of Specialisation offer what ordinary schools cannot: industry partnerships, 
            enhanced curriculum, expert mentorship, and direct pathways to high-demand careers. 
            Your child deserves every advantage.
          </p>
          <Link href="/programs">
            <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold px-10 py-7 text-lg shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all rounded-xl font-display tracking-wide">
              Explore Our Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
