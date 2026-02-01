"use client"

import { Compass } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://www.elledecoration.vn/wp-content/uploads/2025/03/1-son-doong.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <Compass className="w-5 h-5" />
          <span className="font-medium text-balance">Karachi</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {["News", "Experience", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="flex items-center gap-3">
          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Book Now</Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Alpine Lift</h1>

        {/* {Subheading} */}
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
          Soar above towering mountains and dramatic landscapes on an unforgettable helicopter sightseeing tour. 
          Enjoy panoramic views, expert-guided flights, and the highest safety standards.
        </p>
      </div>
    </div>
  )
}
