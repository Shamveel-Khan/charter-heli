"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

// Luxury easing: slow, controlled, confident
const luxuryEase = [0.25, 0.1, 0.25, 1.0] as const
const durationSlow = 1.2
const durationMedium = 0.8

// ... imports remain the same

// ... ease constants remain the same

export function CTAHelicopterSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Subtle parallax on background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const opacityContent = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 1, 1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Cinematic Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 grayscale"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ 
            backgroundColor: "#050505"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </motion.div>

      {/* Content Container - Centered, Minimal */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center"
        style={{ opacity: opacityContent }}
      >
          {/* Editorial Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-light">
              The Summit
            </span>
          </motion.div>

          {/* Headline - Serif, Big */}
          <motion.h2 
            className="font-serif text-5xl md:text-8xl font-thin tracking-normal text-white leading-[1.1] mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: luxuryEase, delay: 0.2 }}
          >
            Above the <span className="italic text-white/60">Ordinary</span>
          </motion.h2>

          {/* CTA - Minimal Line, No backgrounds */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: luxuryEase, delay: 0.5 }}
            className="flex justify-center"
          >
             <button className="group relative px-12 py-6 text-xs uppercase tracking-[0.3em] text-white transition-colors duration-700">
               <span className="absolute inset-0 border-y border-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-[0.25,0.1,0.25,1.0]" />
               Inquire
             </button>
          </motion.div>

          {/* Minimal Footer Stamp */}
          <motion.div 
             className="mt-32 text-[10px] uppercase tracking-[0.3em] text-white/20"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 2, delay: 1 }}
          >
            No. 01 — 2024
          </motion.div>
      </motion.div>
    </section>
  )
}