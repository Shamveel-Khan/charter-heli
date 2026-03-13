"use client"

import { Button } from "@/components/ui/button"

const JOURNEY_PHASES = [
  {
    phase: "01",
    title: "Briefing & Prep",
    description:
      "Your adventure begins in Phong Nha with a full safety briefing and equipment check to ensure you're ready for the trek.",
  },
  {
    phase: "02",
    title: "The Trek",
    description:
      "Hike through pristine jungle, cross rivers, and camp in remote locations on your way to the entrance of Son Doong.",
  },
  {
    phase: "03",
    title: "Caving",
    description:
      "Descend into the cave to witness colossal stalagmites, explore vast chambers, and see the unique underground jungle.",
  },
  {
    phase: "04",
    title: "Base Camp",
    description:
      "Spend nights at breathtaking campsites inside the cave, sharing stories with your group before trekking back.",
  },
]

export function JourneySection() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Your Epic Journey</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              From jungle treks to underground camps, here's what to expect.
            </p>
          </div>

          {/* Journey Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {JOURNEY_PHASES.map((phase) => (
              <div key={phase.phase} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">{phase.phase}</div>
                  <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Check Availability Button */}
          <div className="text-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold">
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
