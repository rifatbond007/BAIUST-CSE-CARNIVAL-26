import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  ChevronRight,
  Sparkles,
  Star,
  Image as ImageIcon,
  ArrowLeft,
} from "lucide-react";
import CarnivalNavbar from "@/components/CarnivalNavbar";

const fests = [
  {
    year: "2025",
    theme: "Code the Future",
    tagline: "Where algorithms met ambition",
    date: "July 12–13, 2025",
    venue: "BAIUST Campus",
    participants: 1200,
    universities: 18,
    highlights: [
      "First-ever AI Workshop track",
      "Record 58 teams in IUPC",
      "Live streaming of Code Battle finals",
    ],
    images: [null, null, null],
    color: "from-emerald-500/20 to-teal-600/20",
    accent: "bg-emerald-500",
  },
  {
    year: "2024",
    theme: "Innovation Unleashed",
    tagline: "Bigger, bolder, brighter",
    date: "July 13–14, 2024",
    venue: "BAIUST Campus",
    participants: 950,
    universities: 14,
    highlights: [
      "Gaming Fest introduced to huge response",
      "24-hour Hackathon with 45 teams",
      "Celebrity guest speaker session",
    ],
    images: [null, null, null],
    color: "from-blue-500/20 to-indigo-600/20",
    accent: "bg-blue-500",
  },
  {
    year: "2023",
    theme: "Break the Code",
    tagline: "Lines of logic, leaps of imagination",
    date: "July 15–16, 2023",
    venue: "BAIUST Campus",
    participants: 720,
    universities: 11,
    highlights: [
      "IUPC expanded to national level",
      "First Project Showcase event",
      "৳1.2L prize pool",
    ],
    images: [null, null, null],
    color: "from-violet-500/20 to-purple-600/20",
    accent: "bg-violet-500",
  },
  {
    year: "2022",
    theme: "Code to Conquer",
    tagline: "The comeback carnival",
    date: "July 16–17, 2022",
    venue: "BAIUST Campus",
    participants: 480,
    universities: 8,
    highlights: [
      "Post-pandemic comeback edition",
      "Intra-BAIUST programming contest",
      "Robotics showcase",
    ],
    images: [null, null, null],
    color: "from-amber-500/20 to-orange-600/20",
    accent: "bg-amber-500",
  },
  {
    year: "2021",
    theme: "Genesis",
    tagline: "Where it all began",
    date: "July 17–18, 2021",
    venue: "BAIUST Campus",
    participants: 280,
    universities: 5,
    highlights: [
      "Inaugural CSE Carnival",
      "Intra-university programming contest",
      "Seminar on AI & Machine Learning",
    ],
    images: [null, null, null],
    color: "from-rose-500/20 to-pink-600/20",
    accent: "bg-rose-500",
  },
];

const highlights = [
  { icon: Users, label: "Participants" },
  { icon: MapPin, label: "Universities" },
  { icon: Trophy, label: "Prize Pool" },
];

function FestCard({ fest, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="group relative"
    >
      <div
        className={`relative rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-lg`}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Gradient header strip */}
        <div className={`h-2 bg-gradient-to-r ${fest.color}`} />

        <div className="p-6 sm:p-8">
          {/* Year badge + theme */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-white text-sm font-bold ${fest.accent}`}>
                  {fest.year.slice(2)}
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#2E3A2E] tracking-tight">
                  {fest.year}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#2E3A2E] mt-1">{fest.theme}</h3>
              <p className="text-gray-500 text-sm mt-0.5">{fest.tagline}</p>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.div>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {fest.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> {fest.participants}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> {fest.universities} univ.
            </span>
          </div>

          {/* Photo placeholders */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {fest.images.map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200"
              >
                <ImageIcon className="w-5 h-5 text-gray-300" />
              </div>
            ))}
          </div>

          {/* Expandable highlights */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {fest.highlights.map((h, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <Star className="w-3.5 h-3.5 text-[#2E3A2E] mt-0.5 shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function HighlightsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <CarnivalNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#2E3A2E 1px, transparent 1px), linear-gradient(90deg, #2E3A2E 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.03,
          }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <div className="flex items-center space-x-2 bg-white border border-gray-200 shadow-sm px-5 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-[#2E3A2E]" />
              <span className="text-[#2E3A2E]/60 text-xs font-bold uppercase tracking-[0.25em]">
                Journey So Far
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2E3A2E] tracking-tight mb-4"
          >
            Past Editions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            Relive the moments that shaped the BAIUST CSE Carnival legacy
          </motion.p>
        </div>

        {/* Decorative side bars like homepage */}
        <div className="absolute inset-y-0 left-8 z-[15] flex flex-col justify-center space-y-[3px]">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4, ease: "easeOut" }}
              className="w-[3px] bg-[#2E3A2E]/20 origin-bottom"
              style={{ height: `${8 + (i % 4) * 6}px` }}
            />
          ))}
        </div>
        <div className="absolute inset-y-0 right-8 z-[15] flex flex-col justify-center space-y-[3px]">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1 + i * 0.08, duration: 0.4, ease: "easeOut" }}
              className="w-[3px] bg-[#2E3A2E]/20 origin-bottom"
              style={{ height: `${10 + (i % 5) * 5}px` }}
            />
          ))}
        </div>
      </section>

      {/* Fest cards */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fests.map((fest, i) => (
              <FestCard key={fest.year} fest={fest} index={i} />
            ))}
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-full">
              <Sparkles className="w-4 h-4 text-[#2E3A2E]" />
              <span className="text-[#2E3A2E]/60 text-sm">
                <span className="font-bold text-[#2E3A2E]">2026</span> — The next chapter awaits
              </span>
              <ChevronRight className="w-4 h-4 text-[#2E3A2E]" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
