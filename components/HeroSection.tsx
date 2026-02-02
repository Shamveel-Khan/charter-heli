"use client"

import { Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const BACKGROUND_IMAGES = [
  '/h6.jpeg',
  '/h4.jpg',
  '/h3.jpg',
  '/h5.jpg'
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Track scroll progress for parallax and fade effects
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Smooth spring animation for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Parallax effect: Background moves at 0.5x scroll speed
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"])
  
  // Fade out and scale down content on scroll
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const contentY = useTransform(scrollY, [0, 400], [0, -100])
  const contentScale = useTransform(scrollY, [0, 400], [1, 0.9])

  // Slideshow effect - change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % BACKGROUND_IMAGES.length
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const popUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 0.8
      }
    }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  }

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background Image Slideshow with Parallax */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${BACKGROUND_IMAGES[currentImageIndex]}')`,
            y: backgroundY,
            scale: 1.2
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav 
        className="relative z-10 flex items-center justify-between p-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full cursor-pointer hover:bg-black/60 transition-colors"
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Compass className="w-5 h-5" />
          <span className="font-medium text-balance">Karachi</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {["News", "Experience", "About Us", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors relative overflow-hidden group"
              variants={navItemVariants}
              custom={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{item}</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Book Now Button */}
        <motion.div 
          className="flex items-center gap-3"
          variants={popUpVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 shadow-lg hover:shadow-xl transition-shadow">
              Book Now
            </Button>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Hero Content with Scroll-based Fade */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center"
        style={{
          opacity: contentOpacity,
          y: contentY,
          scale: contentScale
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
            variants={popUpVariants}
          >
            Alpine Lift
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty"
            variants={popUpVariants}
          >
            Soar above towering mountains and dramatic landscapes on an unforgettable helicopter sightseeing tour. 
            Enjoy panoramic views, expert-guided flights, and the highest safety standards.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex gap-4"
            variants={popUpVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 shadow-2xl hover:shadow-white/25 transition-all"
              >
                Start Your Journey
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-white/30 hover:bg-white/10 backdrop-blur-sm"
              >
                Watch Video
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}