'use client'

import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import OurTeam from '@/components/ourTeam'
import AstroSection from '@/components/AstroSection'
import PricingSection from '@/components/PricingSection'

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
      {/* <ProSection /> */}
      {/* <LogoSection /> */}
      {/* <PagesSection /> */}
      {/* <GitHubSection /> */}
      {/* <Footer /> */}
    </div>
  )
}