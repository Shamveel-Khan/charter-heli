"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const luxuryEase = [0.25, 0.1, 0.25, 1.0]

const FAQS = [
  {
    id: "physicality",
    question: "Physicality",
    answer:
      "Excellent fitness is essential. Expect to carry 15 kilograms across 15 kilometers of jungle terrain, including vertical descents of 80 meters and river crossings.",
  },
  {
    id: "inclusions",
    question: "Inclusions",
    answer:
      "All permits, specialist equipment, camp provisions, and evacuation coverage. Personal kit remains your responsibility.",
  },
  {
    id: "safety",
    question: "Safety Protocol",
    answer:
      "Every guide holds cave rescue certification. We maintain satellite communication with base camp and monitor meteorological conditions continuously.",
  },
  {
    id: "reservation",
    question: "Reservation",
    answer:
      "Ten places per expedition. Dry season only. We recommend reserving 6 to 12 months in advance.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
}

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section className="relative z-10 py-32 md:py-48 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Editorial Header */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: luxuryEase }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-light block mb-8">
              Essentials
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-[0.95]">
              <span className="block">What You</span>
              <span className="block italic font-extralight text-white/60">Should Know</span>
            </h2>
            
            {/* Decorative Rule */}
            <div className="mt-12 h-px w-16 bg-white/20" />
          </motion.div>

          {/* Right Column - Editorial Accordion */}
          <motion.div 
            className="lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-0 divide-y divide-white/10">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.id
                
                return (
                  <motion.div
                    key={faq.id}
                    variants={itemVariants}
                    className="py-8 first:pt-0 last:pb-0"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left group"
                    >
                      <div className="flex items-baseline justify-between gap-8">
                        {/* Question - Editorial Typography */}
                        <h3 className={`
                          text-xl md:text-2xl font-light tracking-wide
                          transition-all duration-700 ease-out
                          ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/80'}
                        `}>
                          {faq.question}
                        </h3>
                        
                        {/* Minimal Indicator */}
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <motion.div 
                            className="absolute top-1/2 left-0 w-full h-px bg-current"
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.6, ease: luxuryEase }}
                          />
                          <motion.div 
                            className="absolute top-0 left-1/2 w-px h-full bg-current"
                            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                            transition={{ duration: 0.6, ease: luxuryEase }}
                          />
                        </div>
                      </div>
                      
                      {/* Answer - Sparse, Editorial */}
                      <AnimatePresence mode="wait">
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.8, ease: luxuryEase }}
                            className="overflow-hidden"
                          >
                            <p className="pt-6 text-white/50 font-light leading-relaxed tracking-wide max-w-2xl">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                )
              })}
            </div>
            
            {/* Final Note - Assumptive, Calm */}
            <motion.div 
              className="mt-16 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: luxuryEase, delay: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/30 font-light">
                Further inquiries may be directed to your concierge
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}