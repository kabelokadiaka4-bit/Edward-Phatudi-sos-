'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Building2, ExternalLink, Clock, Users, Award } from 'lucide-react'
import Image from 'next/image'

export function ContactSection() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="border-teal-500/30 text-teal-400 mb-6 px-4 py-2">
            <MapPin className="w-4 h-4 mr-1" />
            Find Us
          </Badge>
          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Get in
            <span className="block text-gradient heading-glow mt-2">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-body">
            We&apos;d love to hear from you. Whether you have questions about admissions, programs, 
            or partnerships, our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Location Image */}
            <div className="relative rounded-3xl overflow-hidden mb-6 shadow-2xl shadow-teal-500/20">
              <Image 
                src="/images/location.png" 
                alt="Saulsville Atteridgeville" 
                width={800} 
                height={400} 
                className="w-full h-56 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                  <Users className="w-3 h-3 mr-1" />
                  Serving Saulsville & Atteridgeville
                </Badge>
              </div>
            </div>

            {/* Address Card */}
            <div className="glass rounded-3xl p-8 border-teal-500/10 hover:border-teal-500/20 transition-all">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/30">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-display">Physical Address</h3>
                  <p className="text-gray-300 text-lg font-body leading-relaxed">
                    7909 Makaza Street<br />
                    Saulsville, Atteridgeville<br />
                    Pretoria, Gauteng, South Africa
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20">
                      GPS: -25.777809, 28.049543
                    </Badge>
                    <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                      Tshwane South District
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5 hover:border-teal-500/30 transition-all border-teal-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Main Office</p>
                    <p className="text-white font-semibold font-display">012 375 8267</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-5 hover:border-teal-500/30 transition-all border-teal-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">SoS Admissions</p>
                    <p className="text-white font-semibold font-display">082 557 1671</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-5 hover:border-teal-500/30 transition-all border-teal-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-white font-medium text-sm">EdwardPhatudicompr@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-5 hover:border-teal-500/30 transition-all border-teal-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Hours</p>
                    <p className="text-white font-medium">Mon-Fri: 7:30-16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* School Info */}
            <div className="glass rounded-2xl p-6 border-teal-500/10">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-xs text-gray-500 mb-1">EMIS Number</p>
                  <p className="text-lg font-bold text-white font-display">700231639</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Centre Number</p>
                  <p className="text-lg font-bold text-white font-display">8231639</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">District Code</p>
                  <p className="text-lg font-bold text-white font-display">TS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="glass rounded-3xl p-4 h-full min-h-[500px] relative overflow-hidden border-teal-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5" />
            <div className="absolute inset-4 rounded-2xl bg-[#0a0a0f]/50 flex items-center justify-center">
              <div className="text-center max-w-sm">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-teal-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 font-display">Visit Our Campus</h4>
                <p className="text-gray-400 mb-6 font-body">
                  7909 Makaza Street<br />
                  Saulsville, Atteridgeville<br />
                  Pretoria, Gauteng
                </p>
                <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold px-6 py-5 rounded-xl font-display tracking-wide shadow-lg shadow-teal-500/20">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="glass rounded-xl px-6 py-3 flex items-center gap-3 border-teal-500/10">
            <Award className="w-5 h-5 text-teal-400" />
            <span className="text-gray-300 font-body">GDE School of Specialisation</span>
          </div>
          <div className="glass rounded-xl px-6 py-3 flex items-center gap-3 border-teal-500/10">
            <Building2 className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300 font-body">NECSA Partner School</span>
          </div>
          <div className="glass rounded-xl px-6 py-3 flex items-center gap-3 border-teal-500/10">
            <Users className="w-5 h-5 text-teal-400" />
            <span className="text-gray-300 font-body">Tshwane South District</span>
          </div>
        </div>
      </div>
    </section>
  )
}
