import React, { useState } from "react";
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
  TrendingUp,
  ArrowUpRight,
  Quote,
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
    prizePool: "৳2.7L",
    highlights: [
      "First-ever AI Workshop track",
      "Record 58 teams in IUPC",
      "Live streaming of Code Battle finals",
    ],
    images: [null, null, null],
    color: "emerald",
  },
  {
    year: "2024",
    theme: "Innovation Unleashed",
    tagline: "Bigger, bolder, brighter",
    date: "July 13–14, 2024",
    venue: "BAIUST Campus",
    participants: 950,
    universities: 14,
    prizePool: "৳2.1L",
    highlights: [
      "Gaming Fest introduced to huge response",
      "24-hour Hackathon with 45 teams",
      "Celebrity guest speaker session",
    ],
    images: [null, null, null],
    color: "blue",
  },
  {
    year: "2023",
    theme: "Break the Code",
    tagline: "Lines of logic, leaps of imagination",
    date: "July 15–16, 2023",
    venue: "BAIUST Campus",
    participants: 720,
    universities: 11,
    prizePool: "৳1.2L",
    highlights: [
      "IUPC expanded to national level",
      "First Project Showcase event",
      "Inter-university robotics competition",
    ],
    images: [null, null, null],
    color: "violet",
  },
  {
    year: "2022",
    theme: "Code to Conquer",
    tagline: "The comeback carnival",
    date: "July 16–17, 2022",
    venue: "BAIUST Campus",
    participants: 480,
    universities: 8,
    prizePool: "৳0.8L",
    highlights: [
      "Post-pandemic comeback edition",
      "Intra-BAIUST programming contest",
      "Robotics showcase & workshop",
    ],
    images: [null, null, null],
    color: "amber",
  },
  {
    year: "2021",
    theme: "Genesis",
    tagline: "Where it all began",
    date: "July 17–18, 2021",
    venue: "BAIUST Campus",
    participants: 280,
    universities: 5,
    prizePool: "৳0.5L",
    highlights: [
      "Inaugural CSE Carnival",
      "Intra-university programming contest",
      "Seminar on AI & Machine Learning",
    ],
    images: [null, null, null],
    color: "rose",
  },
];

const colorMap = {
  emerald: { bg: "bg-emerald-500", light: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", ring: "ring-emerald-500/20", from: "from-emerald-500", to: "to-emerald-700" },
  blue: { bg: "bg-blue-500", light: "bg-blue-50", border: "border-blue-200", text: "text-blue-600", ring: "ring-blue-500/20", from: "from-blue-500", to: "to-blue-700" },
  violet: { bg: "bg-violet-500", light: "bg-violet-50", border: "border-violet-200", text: "text-violet-600", ring: "ring-violet-500/20", from: "from-violet-500", to: "to-violet-700" },
  amber: { bg: "bg-amber-500", light: "bg-amber-50", border: "border-amber-200", text: "text-amber-600", ring: "ring-amber-500/20", from: "from-amber-500", to: "to-amber-700" },
  rose: { bg: "bg-rose-500", light: "bg-rose-50", border: "border-rose-200", text: "text-rose-600", ring: "ring-rose-500/20", from: "from-rose-500", to: "to-rose-700" },
};

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 1500;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function PhotoPlaceholder({ index, color }) {
  const c = colorMap[color];
  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 group cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
          <ImageIcon className={`w-5 h-5 ${c.text}`} />
        </div>
      </div>
      {/* Subtle grid on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/5" />
        <div className="absolute bottom-2 left-2 right-2 text-[10px] text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          IMG_{2025 - index}_{String(index + 1).padStart(2, "0")}.jpg
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ fest, index }) {
  const [expanded, setExpanded] = useState(false);
  const c = colorMap[fest.color];
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">
      {/* Desktop: alternating left/right */}
      <div className="hidden lg:flex items-start">
        {/* Left content */}
        <div className={`w-[calc(50%-28px)] ${isLeft ? "" : "ml-auto"}`}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CardContent fest={fest} c={c} expanded={expanded} setExpanded={setExpanded} index={index} />
          </motion.div>
        </div>

        {/* Center dot + year */}
        <div className="w-14 flex-shrink-0 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className={`w-10 h-10 rounded-full ${c.bg} text-white text-sm font-black flex items-center justify-center shadow-lg z-10 relative ring-4 ring-white`}
          >
            {fest.year.slice(2)}
          </motion.div>
        </div>

        {/* Right spacer */}
        <div className="w-[calc(50%-28px)]" />
      </div>

      {/* Mobile/tablet: simple stack */}
      <div className="lg:hidden">
        <div className="flex items-center gap-4 mb-3">
          <div className={`w-8 h-8 rounded-full ${c.bg} text-white text-xs font-black flex items-center justify-center shadow-md shrink-0`}>
            {fest.year.slice(2)}
          </div>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <CardContent fest={fest} c={c} expanded={expanded} setExpanded={setExpanded} index={index} />
        </motion.div>
      </div>
    </div>
  );
}

function CardContent({ fest, c, expanded, setExpanded, index }) {
  return (
    <div
      className={`relative rounded-2xl border ${c.border} bg-white shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Year watermark */}
      <div className="absolute -top-6 -right-6 text-[120px] font-black text-[#2E3A2E]/[0.03] select-none leading-none pointer-events-none">
        {fest.year}
      </div>

      {/* Top gradient bar */}
      <div className={`h-1.5 bg-gradient-to-r ${c.from} ${c.to}`} />

      <div className="p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-[#2E3A2E]">{fest.theme}</h3>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${c.light} ${c.text}`}>
                <Sparkles className="w-3 h-3" />
                Edition
              </span>
            </div>
            <p className="text-gray-400 text-sm">{fest.tagline}</p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 90 : 0, x: expanded ? 4 : 0 }}
            transition={{ duration: 0.2 }}
            className={`w-7 h-7 rounded-full ${c.light} flex items-center justify-center shrink-0 mt-1`}
          >
            <ChevronRight className={`w-4 h-4 ${c.text}`} />
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className={`rounded-xl ${c.light} p-3 text-center`}>
            <Users className={`w-4 h-4 ${c.text} mx-auto mb-1`} />
            <div className="text-sm font-bold text-[#2E3A2E]">
              <AnimatedCounter value={fest.participants} />
            </div>
            <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Attended</div>
          </div>
          <div className={`rounded-xl ${c.light} p-3 text-center`}>
            <MapPin className={`w-4 h-4 ${c.text} mx-auto mb-1`} />
            <div className="text-sm font-bold text-[#2E3A2E]">
              <AnimatedCounter value={fest.universities} />
            </div>
            <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Universities</div>
          </div>
          <div className={`rounded-xl ${c.light} p-3 text-center`}>
            <Trophy className={`w-4 h-4 ${c.text} mx-auto mb-1`} />
            <div className="text-sm font-bold text-[#2E3A2E]">{fest.prizePool}</div>
            <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Prize Pool</div>
          </div>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {fest.images.map((_, i) => (
            <PhotoPlaceholder key={i} index={index} color={fest.color} />
          ))}
        </div>

        {/* Date chip */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Calendar className="w-3.5 h-3.5" />
          <span className="font-medium">{fest.date}</span>
          <span className="text-gray-300 mx-1">·</span>
          <MapPin className="w-3.5 h-3.5" />
          <span className="font-medium">{fest.venue}</span>
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
              <div className="pt-5 mt-4 border-t border-gray-100">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 flex items-center gap-2">
                  <Star className={`w-3.5 h-3.5 ${c.text}`} />
                  Highlights
                </h4>
                <ul className="space-y-2.5">
                  {fest.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${c.bg} mt-2 shrink-0`} />
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom hint */}
        {!expanded && (
          <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-gray-300 group-hover:text-gray-400 transition-colors">
            <span>Click to view highlights</span>
            <ChevronRight className="w-3 h-3" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function HighlightsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <CarnivalNavbar />

      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-b from-white to-[#F5F5F5]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#2E3A2E 1px, transparent 1px), linear-gradient(90deg, #2E3A2E 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.03,
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E3A2E]/[0.02] rounded-full blur-3xl pointer-events-none" />

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
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#2E3A2E] tracking-tight mb-4"
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

        {/* Side bars */}
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

      {/* ─── Growth Stats Bar ─── */}
      <section className="relative -mt-8 z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-4 h-4 text-[#2E3A2E]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Growth Trajectory</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {[...fests].reverse().map((fest) => (
                <div key={fest.year} className="text-center">
                  <div className="text-2xl font-black text-[#2E3A2E]">{fest.year}</div>
                  <div className="mt-2 h-24 flex items-end justify-center">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(fest.participants / 1200) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`w-6 rounded-t-lg ${colorMap[fest.color].bg} opacity-80`}
                      style={{ minHeight: "20px" }}
                    />
                  </div>
                  <div className="text-xs font-bold text-[#2E3A2E] mt-2">
                    <AnimatedCounter value={fest.participants} />
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Guests</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Desktop: central line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="relative max-w-4xl mx-auto">
            {/* Central connecting line (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-blue-200 via-violet-200 via-amber-200 to-rose-200 -translate-x-1/2" />

            <div className="space-y-16 lg:space-y-20">
              {fests.map((fest, i) => (
                <TimelineCard key={fest.year} fest={fest} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-[#2E3A2E] overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 p-10 sm:p-14 text-center">
              <Quote className="w-8 h-8 text-white/20 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                The story continues in 2026
              </h2>
              <p className="text-white/60 text-sm max-w-md mx-auto mb-8">
                From 280 to 1200 participants — the journey has just begun. Be part of the next chapter.
              </p>
              <a
                href="/register"
                className="inline-flex items-center gap-2 bg-white text-[#2E3A2E] px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
              >
                Register Now
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
