'use client'

import {
  Navigation,
  HeroSection,
  WelcomeSection,
  AboutSection,
  SpecializationSection,
  FacilitiesSection,
  AchievementsSection,
  AdmissionsSection,
  ContactSection,
  Footer,
  NewsTicker,
  FloatingSocialIcons
} from '@/components/school'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      <Navigation />
      <HeroSection />
      <NewsTicker />
      <WelcomeSection />
      <AboutSection />
      <SpecializationSection />
      <FacilitiesSection />
      <AchievementsSection />
      <AdmissionsSection />
      <ContactSection />
      <Footer />
      <FloatingSocialIcons />
    </main>
  )
}
