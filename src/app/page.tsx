'use client'

import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import OurTeam from '@/components/ourTeam'
import AstroSection from '@/components/AstroSection'
import PricingSection from '@/components/PricingSection'
import Solutions from '@/components/Solutions'
import Build from '@/components/Build'
import Ready from '@/components/Ready'

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <HeroSection />
      <div className="px-4 sm:px-0">
        <AstroSection />
        <OurTeam />
        <FeaturesSection />
        <Solutions />
        <PricingSection />
      </div>
      <Build />
      <div className="px-4 sm:px-0">
        <Ready />
      </div>
      {/* <AstroSection />
      <OurTeam />
      <FeaturesSection />
      <Solutions />
      <PricingSection />
      <Build />
      <Ready /> */}
      {/* <DeveloperSection /> */}
      {/* <PaletteSection /> */}
      {/* <CodeSection /> */}
      {/* <ProSection /> */}
      {/* <LogoSection /> */}
      {/* <PagesSection /> */}
      {/* <GitHubSection /> */}
      {/* <Footer /> */}
    </div>
  )
}