"use client"

import { Sparkles, ShieldCheck, Wallet, Leaf } from "lucide-react"

const FEATURES = [
  {
    icon: Sparkles,
    title: "Expert-Led Tours",
    description: "Guided by geologists, cavers, and local experts.",
  },
  {
    icon: ShieldCheck,
    title: "World-Class Safety",
    description: "Rigorous protocols and modern equipment.",
  },
  {
    icon: Wallet,
    title: "All-Inclusive Package",
    description: "Permits, gear, meals, and transport are covered.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Caving",
    description: "We are committed to preserving the cave's ecosystem.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
