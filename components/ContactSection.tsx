"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const luxuryEase = [0.25, 0.1, 0.25, 1.0]

export function ContactSection() {
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: luxuryEase } }
  }

  return (
    <section className="relative z-10 py-32 md:py-48 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        
        {/* Editorial Header */}
        <motion.div 
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: luxuryEase }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-light block mb-8">
            Correspondence
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
            <span className="italic font-extralight text-white/70">Begin</span> the Conversation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left - Minimal Context */}
          <motion.div 
            className="lg:col-span-4 space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-white/50 font-light leading-relaxed tracking-wide">
                For inquiries regarding private expeditions, collaborations, or press access, please direct your message below.
              </p>
            </motion.div>

            {/* Curated Contact Card */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="h-px w-12 bg-white/20" />
              
              <figure className="space-y-4">
                <div className="aspect-[4/5] w-full max-w-[200px] overflow-hidden bg-white/5">
                  <motion.img
                    src="https://www.elledecoration.vn/wp-content/uploads/2025/03/edam-garden.jpg"
                    alt="Shamveel Khan"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 1.5, ease: luxuryEase }}
                  />
                </div>
                <figcaption>
                  <span className="block text-white font-light tracking-wide">Shamveel Khan</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-light">Expedition Director</span>
                </figcaption>
              </figure>
            </motion.div>
          </motion.div>

          {/* Right - Editorial Form */}
          <motion.div 
            className="lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form className="space-y-12">
              {/* Name Field */}
              <motion.div variants={itemVariants} className="relative">
                <label 
                  htmlFor="name" 
                  className={`block text-xs uppercase tracking-[0.2em] font-light mb-4 transition-colors duration-500 ${
                    focusedField === 'name' ? 'text-white/80' : 'text-white/40'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light text-lg focus:outline-none focus:border-white/50 transition-colors duration-700 placeholder:text-white/20"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants} className="relative">
                <label 
                  htmlFor="email" 
                  className={`block text-xs uppercase tracking-[0.2em] font-light mb-4 transition-colors duration-500 ${
                    focusedField === 'email' ? 'text-white/80' : 'text-white/40'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light text-lg focus:outline-none focus:border-white/50 transition-colors duration-700 placeholder:text-white/20"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants} className="relative">
                <label 
                  htmlFor="message" 
                  className={`block text-xs uppercase tracking-[0.2em] font-light mb-4 transition-colors duration-500 ${
                    focusedField === 'message' ? 'text-white/80' : 'text-white/40'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-light text-lg focus:outline-none focus:border-white/50 transition-colors duration-700 resize-none placeholder:text-white/20"
                  placeholder="Your inquiry"
                />
              </motion.div>

              {/* Submit - Editorial Button */}
              <motion.div variants={itemVariants} className="pt-8">
                <motion.button
                  type="submit"
                  className="group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.4, ease: luxuryEase }}
                >
                  <span className="block text-sm uppercase tracking-[0.25em] text-white font-light group-hover:tracking-[0.3em] transition-all duration-700">
                    Send Correspondence
                  </span>
                  <motion.div 
                    className="h-px w-full bg-white/40 mt-3"
                    initial={{ scaleX: 1, originX: 0 }}
                    whileHover={{ scaleX: 0.8, originX: 0 }}
                    transition={{ duration: 0.6, ease: luxuryEase }}
                  />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Ambient Footer */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: luxuryEase, delay: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-light">
            Response within 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}