'use client'

import { Phone, Mail, MapPin, Award, Building2, Heart, Code2, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-16 border-t border-teal-500/10 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/10 p-1 border border-teal-500/30 shadow-lg shadow-teal-500/20 group hover:border-teal-400/50 transition-all duration-300">
                <Image
                  src="/images/logo-new.png"
                  alt="Edward Phatudi Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient font-display">Edward Phatudi</h3>
                <p className="text-sm text-teal-400 font-semibold tracking-wide">Maths, Science & ICT School of Specialisation</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed font-body">
              Gauteng&apos;s pioneering nuclear science school, preparing learners for careers in 
              nuclear energy, technology, engineering, and scientific research through world-class 
              STEM education and industry partnerships.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400 font-body">
                <Award className="w-4 h-4 text-teal-400" />
                <span>GDE School of Specialisation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-body">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>NECSA Partner</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Programs', href: '/programs' },
                { name: 'Facilities', href: '/facilities' },
                { name: 'Admissions', href: '/admissions' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors duration-300 font-body flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-teal-500/50 rounded-full group-hover:w-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-display">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-gray-400 font-body group hover:text-teal-400 transition-colors duration-300">
                <Phone className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span>012 375 8267</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-body group hover:text-cyan-400 transition-colors duration-300">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span>082 557 1671 (SoS)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-body group hover:text-teal-400 transition-colors duration-300">
                <Mail className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs">EdwardPhatudicompr@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 font-body">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>7909 Makaza Street<br />Saulsville, Atteridgeville</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-teal-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 font-body">
            © {new Date().getFullYear()} Edward Phatudi Maths, Science & ICT School of Specialisation. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500 font-body">
            <Link href="#" className="hover:text-teal-400 transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-teal-400 transition-colors duration-300">POPIA</Link>
            <Link href="#" className="hover:text-teal-400 transition-colors duration-300">Accessibility</Link>
          </div>
        </div>

        {/* District Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600 font-body">
            Gauteng Department of Education • Tshwane South District • EMIS: 700231639
          </p>
        </div>

        {/* Builder Credit - Kabelo Kadiaka */}
        <div className="mt-8 pt-6 border-t border-teal-500/5">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-body">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for education excellence</span>
            </div>
            
            {/* Developer Credit with Glow */}
            <div className="relative group">
              {/* Animated Glow Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Credit Text */}
              <div className="relative flex items-center gap-2 px-4 py-2 bg-[#111118]/50 rounded-lg border border-teal-500/10 group-hover:border-teal-500/30 transition-all duration-500">
                <Code2 className="w-4 h-4 text-teal-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <span className="text-sm text-gray-400 font-body">Built by</span>
                <span className="relative font-semibold font-display">
                  {/* Glow Text Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent blur-sm opacity-70 animate-pulse">
                    Kabelo Kadiaka
                  </span>
                  <span className="relative bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Kabelo Kadiaka
                  </span>
                </span>
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
