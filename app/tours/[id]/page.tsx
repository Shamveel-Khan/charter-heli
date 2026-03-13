"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, Clock, Phone, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const luxuryEase = [0.25, 0.1, 0.25, 1.0] as const;

interface TourDetail {
    id: string;
    name: string;
    subtitle: string;
    image: string;
    description: string;
    longDescription: string;
    flightTime: string;
    price: string;
    priceNote: string;
    highlights: string[];
    departure: string;
}

const TOUR_DATA: Record<string, TourDetail> = {
    titlis: {
        id: "titlis",
        name: "Titlis",
        subtitle: "Helicopter Sightseeing Flight",
        image: "/tours/t1.jpg",
        description:
            "A scenic flight from Buochs over Nidwalden to the majestic Titlis area.",
        longDescription:
            "Fulfill the dream of a unique sightseeing flight and immerse yourself in the breathtaking Swiss Alpine landscape. This route offers sweeping views above enchanting mountain terrain before returning to Buochs with memories that stay with you long after landing.",
        flightTime: "20 min. flight-time",
        price: "CHF 900.--",
        priceNote: "all-inclusive price for max. 5 persons",
        highlights: [
            "Departure from Buochs airfield",
            "Nidwalden alpine panorama",
            "Titlis area overflight",
            "Compact high-impact scenic route",
        ],
        departure: "Buochs Airfield",
    },
    matterhorn: {
        id: "matterhorn",
        name: "Matterhorn",
        subtitle: "Helicopter Sightseeing Flight",
        image: "/tours/m1.jpg",
        description:
            "A grand alpine journey from Buochs to the legendary Matterhorn.",
        longDescription:
            "From Buochs, glide over Obwalden toward Brünig and witness the dramatic alpine theater of Eiger, Mönch, and Jungfrau. Continue above the Aletsch Glacier toward Aletschhorn, the Matter Valley, and Zermatt before the breathtaking Matterhorn reveal. Optional mountain landing at Unterrothorn can be arranged on request.",
        flightTime: "90 min. flight-time · stay on request",
        price: "CHF 4'050.--",
        priceNote: "all-inclusive price for max. 5 persons",
        highlights: [
            "Eiger North Face flyby",
            "Eiger, Monch, and Jungfrau panorama",
            "Aletsch Glacier and Matter Valley",
            "Optional Unterrothorn mountain landing",
        ],
        departure: "Buochs Airfield",
    },
    jungfraujoch: {
        id: "jungfraujoch",
        name: "Jungfraujoch",
        subtitle: "Helicopter Sightseeing Flight",
        image: "/tours/j1.jpg",
        description:
            "An unforgettable excursion from Buochs to Jungfraujoch with glacier landing and stay.",
        longDescription:
            "Lift off from Buochs and fly over Grindelwald, along the world-famous Eiger North Face, and between Monch and Jungfrau to the glacier mountain landing site at Jungfraujoch. With pilot guidance, walk to Jungfraujoch Station and take in the immense Aletsch Glacier before returning with extraordinary alpine memories.",
        flightTime: "50 min. flight-time · 90 min. stay",
        price: "CHF 2'250.--",
        priceNote: "all-inclusive price for max. 5 persons",
        highlights: [
            "Grindelwald and Eiger North Face",
            "Route between Monch and Jungfrau",
            "Jungfraujoch glacier mountain landing",
            "Guided station visit with Aletsch views",
        ],
        departure: "Buochs Airfield",
    },
    vierwaldstattersee: {
        id: "vierwaldstattersee",
        name: "Vierwaldstättersee",
        subtitle: "Helicopter Sightseeing Flight",
        image: "/tours/v1.jpg",
        description:
            "Discover Lake Lucerne from above on a route full of iconic Swiss landmarks.",
        longDescription:
            "Take off from Buochs and soar over the picturesque canton of Uri where Lake Lucerne meets dramatic mountain scenery. Pass the Mythen peaks, continue toward Goldau and Kussnacht, then admire Lucerne and the famous Chapel Bridge from a unique aerial perspective before returning over a final alpine panorama.",
        flightTime: "30 min. flight-time",
        price: "CHF 1'350.--",
        priceNote: "all-inclusive price for max. 5 persons",
        highlights: [
            "Canton of Uri lake approach",
            "Mythen, Goldau, and Kussnacht",
            "Aerial view of Chapel Bridge",
            "Lake Lucerne alpine return leg",
        ],
        departure: "Buochs Airfield",
    },
};

export default function TourPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const tour = TOUR_DATA[id];

    if (!tour) notFound();

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: luxuryEase }}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-500 group"
                    >
                        <ArrowLeft
                            className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1"
                            strokeWidth={1}
                        />
                        <span className="text-xs uppercase tracking-[0.25em] font-light">
                            Back
                        </span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: luxuryEase, delay: 0.2 }}
                    className="flex items-center gap-3"
                >
                    <Compass
                        className="w-4 h-4 text-white/50"
                        strokeWidth={1}
                    />
                    <span className="text-xs uppercase tracking-[0.2em] font-light text-white/70">
                        Alpine Lift
                    </span>
                </motion.div>
            </nav>

            {/* Hero */}
            <div className="relative h-[70vh] md:h-[85vh] overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: luxuryEase }}
                >
                    <Image
                        src={tour.image}
                        alt={tour.name}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#050505]" />
                </motion.div>

                {/* Hero Text */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-20 md:pb-28">
                    <div className="max-w-7xl mx-auto">
                        <motion.span
                            className="block text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60 font-light mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                ease: luxuryEase,
                                delay: 0.6,
                            }}
                        >
                            {tour.subtitle}
                        </motion.span>
                        <motion.h1
                            className="font-serif text-6xl md:text-9xl font-thin text-white tracking-tight leading-[0.88]"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.4,
                                ease: luxuryEase,
                                delay: 0.4,
                            }}
                        >
                            <span className="block">{tour.name}</span>
                            <span className="block italic text-white/50">
                                {tour.id === "vierwaldstattersee"
                                    ? "Excursion"
                                    : "Flight"}
                            </span>
                        </motion.h1>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left — Description */}
                    <motion.div
                        className="lg:col-span-7 space-y-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: luxuryEase }}
                    >
                        {/* Lead */}
                        <div>
                            <p className="font-serif text-xl md:text-2xl font-light text-white/80 leading-relaxed tracking-wide italic mb-10">
                                {tour.description}
                            </p>
                            <p className="text-white/50 font-light leading-[1.9] tracking-wide text-sm md:text-base">
                                {tour.longDescription}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/10" />

                        {/* Highlights */}
                        <div>
                            <span className="block text-[10px] uppercase tracking-[0.4em] text-white/40 font-light mb-8">
                                Route Highlights
                            </span>
                            <ul className="space-y-4">
                                {tour.highlights.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-4 text-white/60 font-light tracking-wide"
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.7,
                                            ease: luxuryEase,
                                            delay: i * 0.1,
                                        }}
                                    >
                                        <span className="text-white/20 text-xs mt-1 font-light">
                                            ( {String(i + 1).padStart(2, "0")} )
                                        </span>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right — Details Card */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 1.2,
                            ease: luxuryEase,
                            delay: 0.15,
                        }}
                    >
                        <div className="sticky top-32 space-y-0 border border-white/10 bg-white/[0.02]">
                            {/* Price */}
                            <div className="px-8 py-10 border-b border-white/10">
                                <span className="block text-[10px] uppercase tracking-[0.4em] text-white/40 font-light mb-5">
                                    From
                                </span>
                                <p className="font-serif text-4xl md:text-5xl font-thin text-white tracking-tight">
                                    {tour.price}
                                </p>
                                <p className="text-xs text-white/40 font-light tracking-wide mt-3">
                                    {tour.priceNote}
                                </p>
                            </div>

                            {/* Flight Time */}
                            <div className="px-8 py-8 border-b border-white/10 flex items-center gap-5">
                                <Clock
                                    className="w-4 h-4 text-white/30 flex-shrink-0"
                                    strokeWidth={1}
                                />
                                <div>
                                    <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-light mb-1">
                                        Flight Duration
                                    </span>
                                    <span className="text-white/80 font-light tracking-wide">
                                        {tour.flightTime}
                                    </span>
                                </div>
                            </div>

                            {/* Departure */}
                            <div className="px-8 py-8 border-b border-white/10">
                                <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-light mb-1">
                                    Departure
                                </span>
                                <span className="text-white/80 font-light tracking-wide">
                                    {tour.departure}
                                </span>
                            </div>

                            {/* Contact */}
                            <div className="px-8 py-8 space-y-4">
                                <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-light mb-5">
                                    Reserve & Enquire
                                </span>
                                <a
                                    href="tel:+41416204949"
                                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-500 group"
                                >
                                    <Phone
                                        className="w-4 h-4 flex-shrink-0"
                                        strokeWidth={1}
                                    />
                                    <span className="font-light tracking-wide text-sm">
                                        +41 41 620 49 49
                                    </span>
                                </a>
                                <a
                                    href="mailto:info@alpinlift.ch"
                                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-500"
                                >
                                    <Mail
                                        className="w-4 h-4 flex-shrink-0"
                                        strokeWidth={1}
                                    />
                                    <span className="font-light tracking-wide text-sm">
                                        info@alpinlift.ch
                                    </span>
                                </a>
                            </div>

                            {/* CTA */}
                            <div className="px-8 pb-10">
                                <a
                                    href={`mailto:info@alpinlift.ch?subject=${encodeURIComponent(`Booking Enquiry - ${tour.name}`)}`}
                                    className="block w-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all duration-700 text-center py-4 text-xs uppercase tracking-[0.3em] font-light"
                                >
                                    Request Booking
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
