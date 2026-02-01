"use client"

import Link from "next/link"
import Image from "next/image"

interface Tour {
  id: string
  name: string
  image: string
}

const TOURS: Tour[] = [
  {
    id: "morning",
    name: "Morning Flight",
    image: "/tours/morning-flight.jpg",
  },
  {
    id: "sunset",
    name: "Sunset Experience",
    image: "/tours/sunset-experience.jpg",
  },
  {
    id: "fullday",
    name: "Full Day Tour",
    image: "/tours/full-day-tour.jpg",
  },
  {
    id: "vip",
    name: "VIP Private Tour",
    image: "/tours/vip-private.jpg",
  },
]

export function TourSelectionSection() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Choose Your Adventure</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
            Select from our curated helicopter sightseeing tours and experience Son Doong like never before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOURS.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}`}>
              <div className="rounded-2xl overflow-hidden cursor-pointer group relative h-64 md:h-72">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-lg font-semibold">{tour.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Text */}
        <div className="mt-16 text-center text-white/70">
          <p className="text-sm">
            All tours include professional pilot, safety equipment, and insurance. Weather may affect flight times.
          </p>
        </div>
      </div>
    </section>
  )
}
