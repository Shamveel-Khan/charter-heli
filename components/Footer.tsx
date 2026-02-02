"use client"

import { motion } from "framer-motion"
import { Compass } from "lucide-react"

const luxuryEase = [0.25, 0.1, 0.25, 1.0]

const FOOTER_LINKS = [
  { label: "Itinerary", href: "#" },
  { label: "Journal", href: "#" },
  { label: "Contact", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative z-10 py-24 md:py-32 px-6 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Primary Footer - Minimal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-24">
          
          {/* Brand Anchor */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Compass className="w-5 h-5 text-white/60" strokeWidth={1} />
              <span className="text-sm uppercase tracking-[0.2em] font-light text-white">
                Alpine Lift
              </span>
            </div>
            
            <p className="text-white/40 font-light leading-relaxed max-w-md tracking-wide">
              Helicopter expeditions above the extraordinary.
              <br />
              <span className="text-white/30">Vietnam</span>
            </p>
          </motion.div>

          {/* Navigation - Sparse */}
          <motion.div 
            className="lg:col-span-3 lg:col-start-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase, delay: 0.1 }}
          >
            <nav className="space-y-4">
              {FOOTER_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-white/50 font-light tracking-wide hover:text-white/80 transition-colors duration-500"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.4, ease: luxuryEase }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="h-px w-full bg-white/10 mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: luxuryEase, delay: 0.3 }}
          style={{ originX: 0 }}
        />

        {/* Sub-footer - Absolute Minimal */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: luxuryEase, delay: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-light">
            © MMXXVI
          </p>
          
          <div className="flex items-center gap-8">
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-light">
              Est. 2024
            </span>
            <div className="h-3 w-px bg-white/20" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-light">
              Phong Nha
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}