"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const FAQS = [
  {
    question: "How physically demanding is the tour?",
    answer:
      "The Son Doong expedition requires excellent physical fitness. You'll trek 15+ kilometers through jungle terrain, rappel down 80-meter drops, and navigate underground rivers. Participants must be able to carry a 15kg backpack and have prior caving or trekking experience.",
  },
  {
    question: "What is included in the tour price?",
    answer:
      "Your expedition includes all permits, professional guides, safety equipment, camping gear, meals during the expedition, transportation from Phong Nha, and emergency evacuation insurance. Personal items like clothing and toiletries are not included.",
  },
  {
    question: "Is it safe to explore Son Doong Cave?",
    answer:
      "Safety is our absolute priority. All guides are certified cave rescue specialists, we use professional-grade equipment, maintain constant communication with base camp, and have comprehensive emergency protocols. Weather conditions are monitored continuously.",
  },
  {
    question: "How do I book a spot?",
    answer:
      "Expeditions are limited to 10 people per group and run only during dry season (February-August). Book 6-12 months in advance through our website. A 50% deposit secures your spot, with final payment due 30 days before departure.",
  },
]

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title and Description */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/80 leading-relaxed text-pretty">
                Everything you need to know about the expedition, from physical requirements to booking your spot on
                this exclusive adventure.
              </p>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
