import { HeroSection } from "@/components/HeroSection"
import { CTAHelicopterSection } from "@/components/CTAHelicopterSection"
import { TourSelectionSection } from "@/components/TourSelectionSection"
import { SocialMediaSection } from "@/components/SocialMediaSection"
import { FAQSection } from "@/components/FAQSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { title } from "node:process"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <title>
        AlpineLift Charters
      </title>
      <HeroSection />
      <CTAHelicopterSection />
      <TourSelectionSection />
      {/* <SocialMediaSection /> */}
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
