'use client'

import { useEffect, useState, useRef } from 'react'
import { Newspaper, AlertCircle, Calendar, Star, Bell, ChevronRight, ChevronLeft, Pause, Play } from 'lucide-react'

interface NewsItem {
  id: number
  text: string
  type: 'news' | 'alert' | 'event' | 'achievement'
  date?: string
  link?: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    text: "🎓 2026 Applications Now Open! Apply before 31 March 2026 for Grade 8-12 admissions",
    type: 'alert',
    date: 'Now Open',
    link: '/admissions'
  },
  {
    id: 2,
    text: "🏆 Edward Phatudi achieves 98% Matric Pass Rate for 2025 - Celebrating Excellence!",
    type: 'achievement',
    date: 'Jan 2026'
  },
  {
    id: 3,
    text: "⚛️ NECSA Partnership Program: Students visit Pelindaba Nuclear Research Centre",
    type: 'news',
    date: 'Feb 2026'
  },
  {
    id: 4,
    text: "📢 Registration for Mathematics Olympiad 2026 now open - Register at school office",
    type: 'event',
    date: 'Feb 2026'
  },
  {
    id: 5,
    text: "🔬 New State-of-the-Art Nuclear Science Laboratory Opening Ceremony - 15 March 2026",
    type: 'news',
    date: 'Mar 2026'
  },
  {
    id: 6,
    text: "🌟 Learners selected for International Science Fair in Singapore - Congratulations!",
    type: 'achievement',
    date: 'Jan 2026'
  },
  {
    id: 7,
    text: "📚 Parent-Teacher Meeting Scheduled for 28 February 2026 at 14:00",
    type: 'event',
    date: 'Feb 2026'
  },
  {
    id: 8,
    text: "💻 ICT Club wins Regional Coding Competition - Advancing to Nationals!",
    type: 'achievement',
    date: 'Jan 2026'
  }
]

const getIcon = (type: NewsItem['type']) => {
  switch (type) {
    case 'alert':
      return <AlertCircle className="w-4 h-4 text-yellow-400" />
    case 'event':
      return <Calendar className="w-4 h-4 text-cyan-400" />
    case 'achievement':
      return <Star className="w-4 h-4 text-amber-400" />
    default:
      return <Newspaper className="w-4 h-4 text-teal-400" />
  }
}

const getBgColor = (type: NewsItem['type']) => {
  switch (type) {
    case 'alert':
      return 'bg-yellow-500/20 border-yellow-500/40'
    case 'event':
      return 'bg-cyan-500/20 border-cyan-500/40'
    case 'achievement':
      return 'bg-amber-500/20 border-amber-500/40'
    default:
      return 'bg-teal-500/20 border-teal-500/40'
  }
}

export function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPaused) return

    intervalRef.current = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length)
        setIsVisible(true)
      }, 300)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  const goToNext = () => {
    setIsVisible(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
      setIsVisible(true)
    }, 200)
  }

  const goToPrev = () => {
    setIsVisible(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
      setIsVisible(true)
    }, 200)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
    setTouchStart(null)
  }

  const currentNews = newsItems[currentIndex]

  return (
    <section className="relative w-full bg-gradient-to-r from-[#0a0a0f] via-[#111118] to-[#0a0a0f] border-y border-teal-500/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-teal-500/5 animate-gradient" />
      
      {/* Nuclear Particles Decoration */}
      <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Desktop Marquee View */}
        <div className="hidden lg:block py-4 overflow-hidden">
          <div 
            className="flex gap-16 animate-marquee"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...newsItems, ...newsItems].map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="flex items-center gap-3 flex-shrink-0 group cursor-pointer"
              >
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${getBgColor(item.type)} transition-all duration-300 group-hover:scale-105`}>
                  {getIcon(item.type)}
                  {item.date && (
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                  )}
                </div>
                <p className="text-gray-200 text-base whitespace-nowrap font-medium group-hover:text-white transition-colors">
                  {item.text}
                </p>
                {item.link && (
                  <a 
                    href={item.link}
                    className="flex items-center gap-1 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </a>
                )}
                <span className="text-teal-500/30 text-2xl">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View */}
        <div 
          className="lg:hidden py-3 px-4 sm:px-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center gap-3">
            {/* Live Badge */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="relative">
                <Bell className="w-5 h-5 text-teal-400" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-500/20 border border-red-500/40 rounded-full">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Live</span>
              </span>
            </div>

            {/* News Content */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <div 
                className={`flex items-center gap-2 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
              >
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${getBgColor(currentNews.type)} flex-shrink-0`}>
                  {getIcon(currentNews.type)}
                </div>
                <p className="text-white text-sm sm:text-base font-medium truncate">
                  {currentNews.text}
                </p>
                {currentNews.link && (
                  <a 
                    href={currentNews.link}
                    className="flex-shrink-0 flex items-center gap-1 text-teal-400 hover:text-teal-300 text-xs font-medium transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={goToPrev}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Previous news"
              >
                <ChevronLeft className="w-4 h-4 text-gray-400" />
              </button>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <Play className="w-4 h-4 text-teal-400" />
                ) : (
                  <Pause className="w-4 h-4 text-gray-400" />
                )}
              </button>
              <button
                onClick={goToNext}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Next news"
              >
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsVisible(false)
                  setTimeout(() => {
                    setCurrentIndex(index)
                    setIsVisible(true)
                  }, 200)
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal-400 w-6' 
                    : 'bg-gray-600 hover:bg-gray-500 w-1.5'
                }`}
                aria-label={`Go to news ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
