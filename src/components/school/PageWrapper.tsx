'use client'

import { Navigation } from '@/components/school/Navigation'
import { Footer } from '@/components/school/Footer'

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      <Navigation />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  )
}
