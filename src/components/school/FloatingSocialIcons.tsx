'use client'

import { useState } from 'react'
import { MessageCircle, Mail, X, Send, Phone, Clock, MapPin } from 'lucide-react'

export function FloatingSocialIcons() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false)
  const [isGmailOpen, setIsGmailOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Actual school contact details
  const whatsappNumber = '27825571671' // +27 82 557 1671 (School SoS mobile number)
  const schoolEmail = 'EdwardPhatudicompr@gmail.com' // Actual school email

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello, I would like to inquire about Edward Phatudi Maths, Science & ICT School of Specialisation.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleGmailClick = () => {
    const subject = encodeURIComponent('Inquiry from School Website')
    const body = encodeURIComponent(`Hello,\n\nI would like to inquire about Edward Phatudi Maths, Science & ICT School of Specialisation.\n\n[Your message here]\n\nBest regards`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${schoolEmail}&su=${subject}&body=${body}`, '_blank')
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Inquiry from School Website')
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${schoolEmail}&su=${subject}&body=${body}`, '_blank')
    setIsGmailOpen(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      {/* Floating Icons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Gmail Button */}
        <div className="relative">
          {isGmailOpen && (
            <div className="absolute bottom-16 right-0 w-80 bg-[#16161f] border border-teal-500/30 rounded-2xl shadow-2xl shadow-teal-500/20 p-5 animate-fade-in-up backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Send us an Email</h4>
                    <p className="text-gray-400 text-xs">Quick inquiry form</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsGmailOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 bg-[#0a0a0f] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2.5 bg-[#0a0a0f] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-2.5 bg-[#0a0a0f] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors text-sm"
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-[#0a0a0f] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors text-sm resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30"
                >
                  <Send className="w-4 h-4" />
                  Open in Gmail
                </button>
              </form>
            </div>
          )}
          
          <button
            onClick={() => {
              setIsGmailOpen(!isGmailOpen)
              setIsWhatsAppOpen(false)
            }}
            className="group relative w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-white" />
            <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#16161f] border border-teal-500/30 rounded-lg text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Email Us
            </span>
          </button>
        </div>

        {/* WhatsApp Button */}
        <div className="relative">
          {isWhatsAppOpen && (
            <div className="absolute bottom-16 right-0 w-72 bg-[#16161f] border border-teal-500/30 rounded-2xl shadow-2xl shadow-teal-500/20 p-5 animate-fade-in-up backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">WhatsApp Us</h4>
                    <p className="text-gray-400 text-xs">Typically replies within hours</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsWhatsAppOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>Mon-Fri: 7:30 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>+27 82 557 1671</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>Atteridgeville, Pretoria</span>
                </div>
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                Start Conversation
              </button>
            </div>
          )}
          
          <button
            onClick={() => {
              setIsWhatsAppOpen(!isWhatsAppOpen)
              setIsGmailOpen(false)
            }}
            className="group relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
            <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#16161f] border border-teal-500/30 rounded-lg text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Chat on WhatsApp
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
