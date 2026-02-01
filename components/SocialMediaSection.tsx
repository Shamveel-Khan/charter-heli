"use client"

import Link from "next/link"
import Image from "next/image"

interface SocialPlatform {
  id: string
  name: string
  image: string
  url: string
}

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "instagram",
    name: "Instagram",
    image: "/social/instagram.jpg",
    url: "https://instagram.com",
  },
  {
    id: "youtube",
    name: "YouTube",
    image: "/social/youtube.jpg",
    url: "https://youtube.com",
  },
  {
    id: "facebook",
    name: "Facebook",
    image: "/social/facebook.jpg",
    url: "https://facebook.com",
  },
  {
    id: "tiktok",
    name: "TikTok",
    image: "/social/tiktok.jpg",
    url: "https://tiktok.com",
  },
]

export function SocialMediaSection() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Follow Our Journey</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
            Connect with us on social media for stunning aerial photography, tour updates, and exclusive content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {SOCIAL_PLATFORMS.map((platform) => (
            <Link
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="rounded-2xl overflow-hidden cursor-pointer relative h-56 md:h-64">
                <Image
                  src={platform.image || "/placeholder.svg"}
                  alt={platform.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-xl font-semibold">{platform.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
