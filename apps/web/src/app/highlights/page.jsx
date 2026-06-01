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
  },
];

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

function TimelineCard({ fest, index }) {
  const [expanded, setExpanded] = useState(false);
  const isLeft = index % 2 === 0;
  const prev = index < fests.length - 1 ? fests[index + 1].participants : null;
  const growthPct = prev ? Math.round(((fest.participants - prev) / prev) * 100) : null;

  return (
    <div className="relative">
      {/* Desktop alternating */}
      <div className="hidden lg:flex items-start">
        <div className={`w-[calc(50%-28px)] ${isLeft ? "" : "ml-auto"}`}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <CardContent fest={fest} expanded={expanded} setExpanded={setExpanded} index={index} growthPct={growthPct} />
          </motion.div>
        </div>
        <div className="w-14 flex-shrink-0 flex flex-col items-center">
          {/* Connector line from card to dot */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.35, ease: "easeOut" }}
            className={`h-0.5 bg-[#2E3A2E]/30 mt-5 ${isLeft ? "origin-left w-full" : "origin-right w-full"}`}
            style={{ transformOrigin: isLeft ? "left center" : "right center" }}
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 18, delay: 0.25 }}
            className="w-10 h-10 rounded-full bg-white border-2 border-[#2E3A2E]/50 shadow-sm flex items-center justify-center z-10 relative -mt-2.5"
          >
            <div className="w-3 h-3 rounded-full bg-[#2E3A2E]" />
          </motion.div>
          {growthPct && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded mt-1.5 -ml-0.5"
            >
              +{growthPct}%
            </motion.div>
          )}
        </div>
        <div className="w-[calc(50%-28px)]" />
      </div>

      {/* Mobile stack */}
      <div className="lg:hidden">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-8 h-8 rounded-full ${isLeft ? "bg-[#2E3A2E]" : "bg-[#2E3A2E]/80"} text-white text-xs font-black flex items-center justify-center shadow-md shrink-0 order-first`}>
            {fest.year.slice(2)}
          </div>
          <div className="h-px flex-1 bg-gray-200" />
          {growthPct && (
            <span className="text-emerald-600 text-[10px] font-bold">+{growthPct}%</span>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <CardContent fest={fest} expanded={expanded} setExpanded={setExpanded} index={index} growthPct={growthPct} />
        </motion.div>
      </div>
    </div>
  );
}

function CardContent({ fest, expanded, setExpanded, index, growthPct }) {
  return (
    <div
      className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm cursor-pointer transition-all duration-300 hover:border-[#2E3A2E]/15 hover:shadow-md relative overflow-hidden group"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Year watermark */}
      <div className="absolute -top-4 -right-4 text-[100px] font-black text-[#2E3A2E]/[0.04] select-none leading-none pointer-events-none">
        {fest.year}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E3A2E]" />
            <span className="text-[#2E3A2E]/30 text-[10px] font-bold uppercase tracking-widest">
              Edition {fest.year}
            </span>
            {growthPct && (
              <span className="text-emerald-600 text-[10px] font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                +{growthPct}%
              </span>
            )}
          </div>
          <h3 className="text-lg font-black text-[#2E3A2E] leading-tight">{fest.theme}</h3>
          <p className="text-[#2E3A2E]/40 text-sm">{fest.tagline}</p>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#2E3A2E]/30 shrink-0 mt-1"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      {/* Stat boxes — like About section */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-[#F5F5F5] rounded-xl p-3 text-center">
          <Users size={14} className="text-[#2E3A2E]/30 mx-auto mb-1" />
          <div className="text-sm font-black text-[#2E3A2E]">
            <AnimatedCounter value={fest.participants} />
          </div>
          <div className="text-[#2E3A2E]/50 text-[10px] font-semibold uppercase tracking-wider">Attended</div>
        </div>
        <div className="bg-[#F5F5F5] rounded-xl p-3 text-center">
          <MapPin size={14} className="text-[#2E3A2E]/30 mx-auto mb-1" />
          <div className="text-sm font-black text-[#2E3A2E]">
            <AnimatedCounter value={fest.universities} />
          </div>
          <div className="text-[#2E3A2E]/50 text-[10px] font-semibold uppercase tracking-wider">Universities</div>
        </div>
        <div className="bg-[#F5F5F5] rounded-xl p-3 text-center">
          <Trophy size={14} className="text-[#2E3A2E]/30 mx-auto mb-1" />
          <div className="text-sm font-black text-[#2E3A2E]">{fest.prizePool}</div>
          <div className="text-[#2E3A2E]/50 text-[10px] font-semibold uppercase tracking-wider">Prize Pool</div>
        </div>
      </div>

      {/* Photo placeholders — like speaker avatars */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {fest.images.map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-lg bg-[#F5F5F5] border border-gray-100 flex items-center justify-center"
          >
            <ImageIcon size={16} className="text-[#2E3A2E]/15" />
          </div>
        ))}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 text-[#2E3A2E]/40 text-xs">
        <Calendar size={12} />
        <span className="font-medium">{fest.date}</span>
        <span className="text-gray-200 mx-1">·</span>
        <MapPin size={12} />
        <span className="font-medium">{fest.venue}</span>
      </div>

      {/* Expandable highlights */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-5 mt-4 border-t border-gray-100">
              <h4 className="text-[#2E3A2E]/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <Star size={12} />
                Highlights
              </h4>
              <ul className="space-y-2.5">
                {fest.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-2.5 text-sm text-[#2E3A2E]/60"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#2E3A2E]/30 mt-2 shrink-0" />
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
        <div className="mt-4 flex items-center gap-1 text-[#2E3A2E]/20 text-[11px] font-medium transition-colors hover:text-[#2E3A2E]/40">
          <span>Click to view highlights</span>
          <ChevronRight size={12} />
        </div>
      )}
    </div>
  );
}

export default function HighlightsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <CarnivalNavbar />

      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-28 overflow-hidden bg-white">
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
            className="mb-6"
          >
            <span className="text-[#2E3A2E]/30 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              — Journey So Far
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#2E3A2E] tracking-tight mb-4"
          >
            Past
            <br />
            <span className="text-[#2E3A2E]/30">Editions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#2E3A2E]/50 text-sm max-w-xl mx-auto"
          >
            Relive the moments that shaped the BAIUST CSE Carnival legacy
          </motion.p>
        </div>

        {/* Side fillup bars */}
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

      {/* ─── Growth Bar ─── */}
      <section className="relative -mt-8 z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={14} className="text-[#2E3A2E]/30" />
              <span className="text-[#2E3A2E]/30 text-xs font-bold uppercase tracking-[0.3em]">
                Growth Trajectory
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {[...fests].reverse().map((fest) => (
                <div key={fest.year} className="text-center">
                  <div className="text-lg font-black text-[#2E3A2E]">{fest.year}</div>
                  <div className="mt-3 h-24 flex items-end justify-center">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(fest.participants / 1200) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="w-6 rounded-t-lg bg-[#2E3A2E]/70"
                      style={{ minHeight: "20px" }}
                    />
                  </div>
                  <div className="text-xs font-black text-[#2E3A2E] mt-2">
                    <AnimatedCounter value={fest.participants} />
                  </div>
                  <div className="text-[#2E3A2E]/50 text-[10px] font-semibold uppercase tracking-wider">
                    Guests
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#2E3A2E]/30 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              — Edition Timeline
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2E3A2E] leading-none mb-4">
              Every Edition
              <br />
              <span className="text-[#2E3A2E]/30">A Leap Forward</span>
            </h2>
            <p className="text-[#2E3A2E]/40 text-sm max-w-md mx-auto">
              From our first gathering of 280 minds to 1,200+ — watch the journey unfold
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2E3A2E]/50 via-[#2E3A2E]/30 to-[#2E3A2E]/10 -translate-x-1/2" />

            <div className="space-y-14 lg:space-y-20">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2E3A2E] rounded-xl shadow-sm overflow-hidden relative"
          >
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 p-10 sm:p-14 text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                The story continues in 2026
              </h2>
              <p className="text-white/50 text-sm max-w-md mx-auto mb-8">
                From 280 to 1200 participants — the journey has just begun. Be part of the next chapter.
              </p>
              <a
                href="/register"
                className="inline-flex items-center gap-2 bg-white text-[#2E3A2E] px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-gray-100 hover:scale-105 transition-all shadow-md"
              >
                Register Now
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
