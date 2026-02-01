"use client"

import { LucideComputer as Helicopter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTAHelicopterSection() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12 md:p-20">
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 ring-1 ring-white/20">
              <Helicopter className="w-8 h-8" />
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Soar Above the Extraordinary
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-12 leading-relaxed text-pretty">
              Take to the skies and witness the majesty of Son Doong Cave from above. Our helicopter sightseeing tours
              offer unparalleled views of Vietnam's most iconic landscapes, combining adventure with comfort and safety.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
            >
              Book Your Helicopter Tour
            </Button>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "500+", label: "Tours Completed" },
                { number: "4.9★", label: "Average Rating" },
                { number: "5-Star", label: "Safety Record" },
                { number: "Expert", label: "Pilots" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
