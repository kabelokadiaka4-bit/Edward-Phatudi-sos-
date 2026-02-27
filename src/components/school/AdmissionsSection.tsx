'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Computer, Target, BookOpen, GraduationCap, Phone, Mail, CheckCircle2, ExternalLink, ArrowRight, Users, Clock, FileText } from 'lucide-react'
import Image from 'next/image'

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

export function AdmissionsSection() {
  return (
    <section id="admissions" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="border-teal-500/30 text-teal-400 mb-6 px-4 py-2">
            <Users className="w-4 h-4 mr-1" />
            Join Our Family
          </Badge>
          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Begin Your
            <span className="block text-gradient heading-glow mt-2">Admissions Journey</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-body">
            Every great achievement begins with a single step. Join the Edward Phatudi family and give 
            your child access to world-class STEM education that opens doors to exceptional careers.
          </p>
        </div>

        {/* Application Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="glass rounded-2xl p-6 h-full hover:border-teal-500/30 transition-all border-teal-500/10">
                <div className="text-5xl font-bold text-teal-500/20 mb-4 font-display">{step.number}</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-all">
                  <step.icon className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-display">{step.title}</h3>
                <p className="text-gray-400 font-body leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Documents Required */}
          <div className="glass rounded-3xl p-8 border-teal-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/30">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">Required Documents</h3>
                <p className="text-sm text-gray-400">Prepare these for your application</p>
              </div>
            </div>
            <ul className="space-y-4">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-300 font-body">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <span className="font-medium">{doc.name}</span>
                    <span className="text-sm text-gray-500 ml-2">({doc.note})</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-sm text-yellow-300 font-body">
                <strong>Important:</strong> All documents must be certified copies not older than 3 months. 
                Incomplete applications may delay processing.
              </p>
            </div>
          </div>

          {/* Contact for Admissions */}
          <div className="glass rounded-3xl p-8 border-teal-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">Admissions Office</h3>
                <p className="text-sm text-gray-400">We&apos;re here to help</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/30 border border-teal-500/10">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Main Office</p>
                  <p className="text-xl text-white font-semibold font-display">012 375 8267</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/30 border border-teal-500/10">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">SoS Admissions Hotline</p>
                  <p className="text-xl text-white font-semibold font-display">082 557 1671</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/30 border border-teal-500/10">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="text-white font-medium">EdwardPhatudicompr@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f]/30 border border-teal-500/10">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Office Hours</p>
                  <p className="text-white font-medium">Mon-Fri: 7:30 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white py-7 text-lg rounded-xl font-display tracking-wide shadow-lg shadow-teal-500/20">
              Start Your Application
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Why Apply CTA */}
        <div className="glass rounded-3xl p-8 md:p-12 text-center border-teal-500/10">
          <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-6">
            Why Choose Edward Phatudi?
          </Badge>
          <h3 className="heading-section text-2xl sm:text-3xl md:text-4xl text-white mb-6">
            Give Your Child the Advantage of Specialised Education
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-body mb-8">
            Schools of Specialisation offer what ordinary schools cannot: industry partnerships, 
            enhanced curriculum, expert mentorship, and direct pathways to high-demand careers. 
            Your child deserves every advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold px-8 py-6 rounded-xl font-display tracking-wide shadow-lg shadow-teal-500/20">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-teal-500/40 text-teal-300 hover:bg-teal-500/10 px-8 py-6 rounded-xl font-display tracking-wide">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
