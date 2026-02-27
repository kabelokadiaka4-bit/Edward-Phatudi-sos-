import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Building2, ExternalLink, Clock, Users, Award, Atom, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '@/components/school'

const contactInfo = [
  {
    icon: Phone,
    label: 'Main Office',
    value: '012 375 8267',
    color: 'teal'
  },
  {
    icon: Phone,
    label: 'SoS Admissions',
    value: '082 557 1671',
    color: 'cyan'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'EdwardPhatudicompr@gmail.com',
    color: 'teal'
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon-Fri: 7:30 AM - 4:00 PM',
    color: 'cyan'
  },
]

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Admissions', href: '/admissions' },
]

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/location.png"
            alt="Contact Us"
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
            <MapPin className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="heading-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            <span className="text-gradient">Contact</span> Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed font-body">
            We&apos;d love to hear from you. Whether you have questions about admissions, programs, 
            or partnerships, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              {/* Location Image */}
              <div className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-teal-500/20 group">
                <Image 
                  src="/images/location.png" 
                  alt="Saulsville Atteridgeville" 
                  width={800} 
                  height={400} 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" 
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
              <div className="glass rounded-3xl p-8 border-teal-500/10 hover:border-teal-500/20 transition-all mb-8">
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
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass rounded-2xl p-5 hover:border-teal-500/30 transition-all border-teal-500/10 group hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${info.color === 'teal' ? 'bg-teal-500/10' : 'bg-cyan-500/10'} flex items-center justify-center`}>
                        <info.icon className={`w-5 h-5 ${info.color === 'teal' ? 'text-teal-400' : 'text-cyan-400'}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{info.label}</p>
                        <p className="text-white font-semibold font-display">{info.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* School Info */}
              <div className="glass rounded-2xl p-6 border-teal-500/10 mt-6">
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

            {/* Map & Quick Links */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="glass rounded-3xl p-4 h-80 relative overflow-hidden border-teal-500/10">
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

              {/* Quick Links */}
              <div className="glass rounded-3xl p-8 border-teal-500/10">
                <h3 className="text-xl font-semibold text-white mb-6 font-display">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="glass rounded-xl p-4 hover:border-teal-500/30 transition-all text-center group border-teal-500/10 hover:scale-105">
                      <span className="text-teal-400 group-hover:text-white transition-colors font-display">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Schedule a Visit */}
              <div className="glass rounded-3xl p-8 border-teal-500/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white font-display">Schedule a Visit</h3>
                    <p className="text-sm text-gray-400">Tour our facilities</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 font-body">
                  Experience our world-class facilities firsthand. Schedule a campus tour to see our 
                  laboratories, meet our staff, and learn more about our programs.
                </p>
                <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold py-6 rounded-xl font-display tracking-wide shadow-lg shadow-teal-500/20">
                  Schedule Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Badges */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="glass rounded-xl px-6 py-3 flex items-center gap-3 border-teal-500/10 hover:border-teal-500/30 transition-colors">
              <Award className="w-5 h-5 text-teal-400" />
              <span className="text-gray-300 font-body">GDE School of Specialisation</span>
            </div>
            <div className="glass rounded-xl px-6 py-3 flex items-center gap-3 border-teal-500/10 hover:border-teal-500/30 transition-colors">
              <Building2 className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300 font-body">NECSA Partner School</span>
            </div>
            <div className="glass rounded-xl px-6 py-3 flex items-center gap-3 border-teal-500/10 hover:border-teal-500/30 transition-colors">
              <Users className="w-5 h-5 text-teal-400" />
              <span className="text-gray-300 font-body">Tshwane South District</span>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
