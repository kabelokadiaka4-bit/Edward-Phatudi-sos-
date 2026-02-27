'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Atom, Menu, X, Radiation, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-2 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-teal-500/20 shadow-2xl shadow-teal-500/10' 
            : 'py-4 bg-transparent'
        }`}
      >
        {/* Animated Top Border Line */}
        <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Nuclear Particles Decoration - Only when scrolled */}
        <div className={`absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse" />
          <div className="absolute top-1/4 right-20 w-1.5 h-1.5 bg-teal-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cyan-400/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group">
              {/* Logo Container with Glow */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 rounded-2xl blur-lg transition-all duration-500 group-hover:from-teal-500/30 group-hover:via-cyan-500/20 group-hover:to-teal-500/30" />
                
                {/* Logo */}
                <div className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl overflow-hidden transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-white/10 border border-teal-500/40' 
                    : 'bg-white/5 border border-white/10'
                } group-hover:border-teal-400/60 group-hover:scale-105 shadow-lg group-hover:shadow-teal-500/30`}>
                  <Image
                    src="/images/logo-new.png"
                    alt="Edward Phatudi Logo"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Nuclear Spin Effect on Hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-teal-400/0 group-hover:border-teal-400/30 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: 'scale(1.2)' }} />
              </div>
              
              {/* School Name */}
              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <h1 className={`text-lg lg:text-xl font-bold font-display transition-colors duration-300 ${
                    isScrolled ? 'text-gradient' : 'text-white'
                  }`}>
                    Edward Phatudi
                  </h1>
                  <Sparkles className={`w-4 h-4 text-cyan-400 transition-all duration-300 ${
                    isScrolled ? 'opacity-100' : 'opacity-0'
                  } group-hover:animate-pulse`} />
                </div>
                <div className="flex items-center gap-2">
                  <Radiation className={`w-3 h-3 text-teal-400 transition-all duration-300 ${isScrolled ? 'opacity-70' : 'opacity-50'}`} />
                  <p className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                    isScrolled ? 'text-teal-400' : 'text-gray-400'
                  }`}>
                    School of Specialisation
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    pathname === link.href 
                      ? 'text-teal-400' 
                      : isScrolled 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-300 hover:text-white'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Background Hover Effect */}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    pathname === link.href 
                      ? 'bg-teal-500/10 border border-teal-500/20' 
                      : hoveredLink === link.href 
                        ? 'bg-white/5 border border-white/10' 
                        : 'opacity-0'
                  }`} />
                  
                  {/* Text */}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                    {/* Active Indicator */}
                    {pathname === link.href && (
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                    )}
                  </span>
                  
                  {/* Bottom Line Animation */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-300 ${
                    pathname === link.href ? 'w-8' : hoveredLink === link.href ? 'w-6' : 'w-0'
                  }`} />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4 ml-4">
              <Link href="/admissions">
                <Button className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold px-6 py-2.5 font-display tracking-wide shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105 group rounded-xl">
                  {/* Shine Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center gap-2">
                    <Zap className="w-4 h-4 group-hover:animate-pulse" />
                    Apply Now
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/30 hover:bg-teal-500/10 transition-all duration-300 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 w-5 h-5 text-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`absolute inset-0 w-5 h-5 text-teal-400 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute top-20 left-4 right-4 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="bg-[#16161f]/95 backdrop-blur-xl border border-teal-500/20 rounded-2xl p-6 shadow-2xl shadow-teal-500/20">
            {/* Nuclear Decoration */}
            <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
              <Atom className="w-full h-full text-teal-400 animate-spin-slow" />
            </div>
            
            {/* Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    pathname === link.href 
                      ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.3s ease ${index * 50}ms`
                  }}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="ml-auto w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
            
            {/* CTA Button */}
            <Link href="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold py-6 font-display tracking-wide shadow-lg shadow-teal-500/20 rounded-xl transition-all duration-300 hover:scale-[1.02]">
                <Zap className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
