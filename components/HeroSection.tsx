"use client"

import { Compass, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"

const BACKGROUND_IMAGES = [
  '/h6.webp',
  '/h7.jpg',
  '/h8.jpg',
  '/h9.jpg'
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Luxury easing: "The Luxury Curve" - slow entrance, practically stops, then settles
  const luxuryEase = [0.25, 0.1, 0.25, 1.0] as const

  const { scrollY } = useScroll()

  // Parallax effect: Background moves at very slow pace
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "30%"])
  
  // Fade out effect
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])

  // Slideshow - slower pace (8s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % BACKGROUND_IMAGES.length
      )
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  // Animation variants customized for "Luxury" feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Slow stagger
        delayChildren: 0.5
      }
    }
  }

  const revealVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.8,
        ease: luxuryEase
      }
    }
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: luxuryEase,
        delay: 0.2
      }
    }
  }

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
       // Fade only, no slide for ultra premium feel, or very subtle slide
      transition: { duration: 0.8, ease: luxuryEase }
    },
    open: { 
      opacity: 1,
      transition: { duration: 0.8, ease: luxuryEase }
    }
  }
  
  const mobileLinkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({ 
      y: 0, 
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 1.2,
        ease: luxuryEase
      }
    })
  }

  const NAV_ITEMS = [
    { label: "About Us", href: "#about" },
    { label: "Experience", href: "#tours" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <div ref={containerRef} className="relative min-h-[100svh] overflow-hidden bg-[#050505]">
      {/* Background Image Slideshow with Parallax */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
           key={currentImageIndex}
           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 2.5, ease: luxuryEase }} 
           style={{
             backgroundImage: `url('${BACKGROUND_IMAGES[currentImageIndex]}')`,
             y: backgroundY
           }}
        >
          {/* Heavy cinematic darkening for text legibility & mood */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation - Minimalist */}
      <motion.nav 
        className="relative z-50 flex items-center justify-between p-8 md:p-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo - Pure Text or Minimal Icon */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer group"
          variants={navVariants}
        >
          <Compass className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
          <span className="font-serif text-lg tracking-[0.2em] text-white uppercase opacity-100 group-hover:opacity-80 transition-opacity">Alpine Lift</span>
        </motion.div>

        {/* Desktop Navigation Links - Uppercase, Spaced */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.25em] text-white hover:text-white/80 transition-colors duration-500 relative group"
              variants={navVariants}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-700 ease-out group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Desktop Book Now Button - Ghost/Minimal */}
        <motion.div 
          className="hidden md:flex items-center"
          variants={navVariants}
        >
          <Button 
            variant="ghost" 
            className="text-xs uppercase tracking-[0.2em] text-white hover:text-white hover:bg-white/10 rounded-none border border-white/30 px-8 py-6 transition-all duration-700"
          >
            Reserve
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle - Minimal */}
        <motion.button
          className="md:hidden text-white z-50 mix-blend-difference"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span className="sr-only">Menu</span>
          {isMenuOpen ? <X className="w-6 h-6" strokeWidth={1} /> : <Menu className="w-6 h-6" strokeWidth={1} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay - Full Screen / Minimal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center"
          >
             <div className="flex flex-col items-center space-y-12">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={mobileLinkVariants}
                >
                  <Link 
                    href={item.href} 
                    className="font-serif text-4xl text-white hover:text-white/80 transition-colors tracking-wide italic"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content - Editorial Structure */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100svh-200px)] px-6 text-center"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center max-w-5xl"
        >
          {/* Small eyebrow text */}
          <motion.span 
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white mb-8 md:mb-12 font-medium"
            variants={revealVariants}
          >
            The Private Charter
          </motion.span>

          {/* Main Headline - Serif, Authority */}
          <motion.h1 
            className="font-serif text-6xl md:text-9xl font-light tracking-tight mb-8 text-white leading-[0.9]"
            variants={revealVariants}
          >
            Ascend <span className="italic opacity-80">Beyond</span>
          </motion.h1>

          {/* Subheading - Short, Poetic, Withheld */}
          <motion.p 
            className="text-sm md:text-base text-white max-w-lg mb-16 leading-relaxed tracking-wide font-light"
            variants={revealVariants}
          >
            Silence above the peaks. A view reserved for the few.
          </motion.p>

          {/* Single Primary CTA - "Assumes Confidence" */}
          <motion.div 
            variants={revealVariants}
          >
            <Button 
               size="lg" 
               className="bg-white text-black hover:bg-white/90 rounded-none px-12 py-7 text-xs uppercase tracking-[0.25em] transition-all duration-700 ease-out hover:tracking-[0.35em] "
            >
               Discover
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator - Minimal */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </div>
  )
}