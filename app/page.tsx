import { HeroSection } from "@/components/HeroSection"
import { CTAHelicopterSection } from "@/components/CTAHelicopterSection"
import { TourSelectionSection } from "@/components/TourSelectionSection"
import { SocialMediaSection } from "@/components/SocialMediaSection"
import { FAQSection } from "@/components/FAQSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">

      <HeroSection />
      <div id="about">
        <CTAHelicopterSection />
      </div>
      <div id="tours">
        <TourSelectionSection />
      </div>
      {/* <SocialMediaSection /> */}
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
