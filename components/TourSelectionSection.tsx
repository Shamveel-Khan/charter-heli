"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const luxuryEase = [0.25, 0.1, 0.25, 1.0] as const

interface Tour {
  id: string
  name: string
  subtitle: string
  image: string
}

const TOURS: Tour[] = [
  {
    id: "titlis",
    name: "Titlis",
    subtitle: "Glacier Excursion",
    image: "/tours/t1.jfif",
  },
  {
    id: "matterhorn",
    name: "Matterhorn",
    subtitle: "Iconic Peak",
    image: "/tours/m1.jpg",
  },
  {
    id: "jungfraujoch",
    name: "Jungfraujoch",
    subtitle: "Top of Europe",
    image: "/tours/j1.jpg",
  },
  {
    id: "vierwaldstattersee",
    name: "Vierwaldstättersee",
    subtitle: "Lake Lucerne",
    image: "/tours/v1.avif",
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
    <section className="relative z-10 py-24 md:py-48 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header - Minimal */}
        <motion.div 
          className="mb-24 md:mb-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: luxuryEase }}
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/80 font-medium block mb-8">
            Curated Expeditions
          </span>
          <h2 className="font-serif text-5xl md:text-8xl font-thin text-white tracking-tight leading-[0.9]">
            <span className="block">Alpine</span>
            <span className="block italic text-white/60">Lift</span>
          </h2>
        </motion.div>

        {/* Grid - High Spacing */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {TOURS.map((tour, index) => (
            <motion.div
              key={tour.id}
              variants={itemVariants}
              className={`${index === 0 || index === 3 ? 'md:mt-0' : 'md:mt-32'}`} // Increasing staggered offset
            >
              <Link href={`/tours/${tour.id}`} className="block group">
                <figure className="relative aspect-[4/5] overflow-hidden bg-white/5 transition-all duration-1000 ease-out">
                  {/* Cinematic Image Container */}
                  <div className="absolute inset-0 transition-transform duration-[2s] ease-[0.25,0.1,0.25,1.0] group-hover:scale-105">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Corner Index - Discreet */}
                  <div className="absolute top-6 left-6 text-white/50 text-[10px] uppercase tracking-[0.2em] font-light z-10">
                    ( 0{index + 1} )
                  </div>

                  {/* Caption Block - Outside structure to reduce clutter on image? No, keep inside for magazine feel but clean */}
                  <figcaption className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: luxuryEase, delay: 0.2 }}
                    >
                      <span className="block text-[10px] uppercase tracking-[0.3em] text-white/90 mb-4 font-medium">
                        {tour.subtitle}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl font-light text-white italic">
                        {tour.name}
                      </h3>
                    </motion.div>
                  </figcaption>
                </figure>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Spacer */}
        <div className="h-24 md:h-64" />
      </div>
    </section>
  )
}