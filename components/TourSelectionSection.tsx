"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const luxuryEase = [0.25, 0.1, 0.25, 1.0]

interface Tour {
  id: string
  name: string
  subtitle: string
  image: string
}

const TOURS: Tour[] = [
  {
    id: "morning",
    name: "The Dawn Ascent",
    subtitle: "First Light",
    image: "/tours/morning-flight.webp",
  },
  {
    id: "sunset",
    name: "Golden Hour",
    subtitle: "The Long Shadow",
    image: "/tours/sunset-experience.webp",
  },
  {
    id: "fullday",
    name: "Total Immersion",
    subtitle: "Complete Journey",
    image: "/tours/full-day-tour.webp",
  },
  {
    id: "vip",
    name: "Private Charter",
    subtitle: "Your Horizon",
    image: "/tours/vip-private.webp",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
}

export function TourSelectionSection() {
  return (
    <section className="relative z-10 py-32 md:py-48 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header - No explanation, just declaration */}
        <motion.div 
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: luxuryEase }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-light block mb-6">
            The Collection
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight leading-none">
            <span className="block">Four</span>
            <span className="block italic font-extralight text-white/70">Itineraries</span>
          </h2>
        </motion.div>

        {/* Asymmetric Editorial Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TOURS.map((tour, index) => (
            <motion.div
              key={tour.id}
              variants={itemVariants}
              className={`${index === 0 || index === 3 ? 'md:mt-0' : 'md:mt-24'}`}
            >
              <Link href={`/tours/${tour.id}`} className="block group">
                <figure className="relative aspect-[3/4] overflow-hidden bg-white/5">
                  {/* Cinematic Image Container */}
                  <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Gradient Overlay - Subtle, editorial */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000" />
                  
                  {/* Corner Index - Discreet */}
                  <div className="absolute top-6 left-6 text-white/30 text-xs uppercase tracking-[0.2em] font-light">
                    0{index + 1}
                  </div>

                  {/* Caption Block - Bottom aligned with breathing room */}
                  <figcaption className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: luxuryEase, delay: 0.4 + index * 0.1 }}
                    >
                      <span className="block text-xs uppercase tracking-[0.25em] text-white/50 mb-3 font-light group-hover:text-white/70 transition-colors duration-700">
                        {tour.subtitle}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide group-hover:tracking-wider transition-all duration-700">
                        {tour.name}
                      </h3>
                    </motion.div>
                    
                    {/* Cinematic Line Reveal on Hover */}
                    <div className="mt-6 h-px w-0 bg-white/40 group-hover:w-16 transition-all duration-1000 ease-out" />
                  </figcaption>
                </figure>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Spacer - No explanation text, just space */}
        <div className="h-32 md:h-48" />
      </div>
    </section>
  )
}