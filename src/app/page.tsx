'use client'

import { useState } from 'react'
// import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import OurTeam from '@/components/ourTeam'
import LogoSection from '@/components/LogoSection'
// import DeveloperSection from '@/components/DeveloperSection'
// import PaletteSection from '@/components/PaletteSection'
// import CodeSection from '@/components/CodeSection'
import ProSection from '@/components/ProSection'
import AstroSection from '@/components/AstroSection'
import PagesSection from '@/components/PagesSection'
import PricingSection from '@/components/PricingSection'
import GitHubSection from '@/components/GitHubSection'
// import Footer from '@/components/Footer'

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <HeroSection />
      <AstroSection />
      <OurTeam />
      <FeaturesSection />
      <PricingSection />
      {/* <DeveloperSection /> */}
      {/* <PaletteSection /> */}
      {/* <CodeSection /> */}
      <ProSection />
      <LogoSection />
      {/* <PagesSection /> */}
      <GitHubSection />
      {/* <Footer /> */}
    </div>
  )
}