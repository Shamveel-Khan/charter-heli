"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Contact Our Team</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Form */}
            <div className="rounded-2xl bg-white/8 ring-1 ring-white/15 backdrop-blur p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send an Inquiry</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/10 border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none resize-none"
                    placeholder="Tell us about your tour interests..."
                  />
                </div>
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-lg py-3 font-medium text-base">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-xl text-white/90 leading-relaxed text-pretty">
                  For questions about private tours, partnerships, or media inquiries, please get in touch. We reply
                  within one business day.
                </p>
              </div>

              {/* Profile Card */}
              <div className="rounded-2xl bg-white/8 ring-1 ring-white/15 backdrop-blur p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://www.elledecoration.vn/wp-content/uploads/2025/03/edam-garden.jpg"
                    alt="David Luong"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Shamveel Khan</h4>
                    <p className="text-white/70">Tour Guide</p>
                  </div>
                </div>
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-lg flex items-center justify-center gap-2 font-medium">
                  <Mail className="w-4 h-4" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
