"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

// Luxury easing: slow, controlled, confident
const luxuryEase = [0.25, 0.1, 0.25, 1.0]
const durationSlow = 1.2
const durationMedium = 0.8

export function CTAHelicopterSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Subtle parallax on background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacityContent = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.8])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ 
            backgroundImage: "url('/images/helicopter-cinematic.jpg')",
            // Fallback gradient if image not available
            backgroundColor: "#0a0a0a"
          }}
        />
        {/* Editorial grade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12"
        style={{ opacity: opacityContent }}
      >
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Editorial Label - Minimal, uppercase, tracked */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: durationMedium, ease: luxuryEase }}
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 font-light">
              The Aerial Experience
            </span>
          </motion.div>

          {/* Headline - Large, authoritative, spacious */}
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[0.9] max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: durationSlow, ease: luxuryEase, delay: 0.2 }}
          >
            <span className="block">Above the</span>
            <span className="block italic font-extralight text-white/90">Ordinary</span>
          </motion.h2>

          {/* Poetic Copy - Single line, maximum impact */}
          <motion.p 
            className="text-lg md:text-xl text-white/70 font-light max-w-2xl leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: durationMedium, ease: luxuryEase, delay: 0.4 }}
          >
            Witness the majesty of Son Doong from the silence above.
          </motion.p>

          {/* CTA - Assumptive, calm, confident */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: durationMedium, ease: luxuryEase, delay: 0.6 }}
            className="pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-none px-12 py-6 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 ease-out hover:tracking-[0.25em]"
              >
                Reserve
              </Button>
            </motion.div>
          </motion.div>

          {/* Ambient Detail - replaces stats with something atmospheric */}
          <motion.div 
            className="absolute bottom-12 left-6 md:left-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: luxuryEase, delay: 1 }}
          >
            <div className="flex items-center gap-4 text-white/40 text-xs uppercase tracking-[0.2em]">
              <div className="h-px w-12 bg-white/20" />
              <span>Est. 2024</span>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-12 right-6 md:right-12 text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: luxuryEase, delay: 1.2 }}
          >
            <div className="text-white/40 text-xs uppercase tracking-[0.2em]">
              <span>Vietnam</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Frame - signals editorial care */}
      <motion.div 
        className="absolute inset-6 md:inset-12 pointer-events-none border border-white/10 rounded-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: luxuryEase }}
      />
    </section>
  )
}