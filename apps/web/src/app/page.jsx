import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Twitter,
  Facebook,
  Instagram,
  Users,
  Trophy,
  MapPin,
  Calendar,
  ChevronDown,
  Zap,
  Code,
  Gamepad2,
  Cpu,
  CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";
import CarnivalNavbar from "@/components/CarnivalNavbar";

const CountdownBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <div className="absolute inset-0 bg-[#2E3A2E]/8 blur-lg rounded-xl" />
      <div className="relative bg-white shadow-md border border-gray-100 text-[#2E3A2E] px-4 py-3 md:px-5 md:py-4 rounded-xl w-16 md:w-24 text-center">
        <span className="text-2xl md:text-4xl font-bold font-mono tabular-nums leading-none">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
    <span className="text-[9px] md:text-xs uppercase tracking-[0.15em] mt-2 text-[#2E3A2E]/35 font-semibold">
      {label}
    </span>
  </div>
);

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 40,
    hours: 14,
    mins: 22,
    secs: 0,
  });

  useEffect(() => {
    const target = new Date("2026-07-11T09:00:00");
    const tick = () => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#F5F5F5] to-white">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2E3A2E 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5]/60 via-transparent to-white pointer-events-none z-10" />

      <div className="relative z-20 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center space-x-2 mb-8"
        >
          <div className="flex items-center space-x-2 bg-white border border-gray-200 shadow-sm px-5 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E3A2E]" />
            <span className="text-[#2E3A2E]/60 text-xs font-bold uppercase tracking-[0.25em]">
              BAIUST Presents · 2026
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-black leading-none tracking-tight mb-2">
            <span className="text-[#2E3A2E]">CSE</span>
            <span className="text-[#2E3A2E]/20 mx-3 font-light">|</span>
            <span className="text-[#2E3A2E]">CARNIVAL</span>
          </h1>
          <p className="text-[#2E3A2E]/40 text-sm md:text-base uppercase tracking-[0.4em] font-semibold mb-4 mt-4">
            Bangladesh Army International University of Science & Technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex justify-center items-end gap-2 md:gap-4 mb-10"
        >
          <CountdownBox value={timeLeft.days} label="Days" />
          <span className="text-[#2E3A2E]/15 text-2xl font-light mb-6">:</span>
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <span className="text-[#2E3A2E]/15 text-2xl font-light mb-6">:</span>
          <CountdownBox value={timeLeft.mins} label="Mins" />
          <span className="text-[#2E3A2E]/15 text-2xl font-light mb-6">:</span>
          <CountdownBox value={timeLeft.secs} label="Secs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <div className="flex items-center space-x-1.5 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-xl">
            <Calendar size={14} className="text-[#2E3A2E]" />
            <span className="text-[#2E3A2E]/70 text-xs font-semibold">
              July 11–12, 2026
            </span>
          </div>
          <div className="flex items-center space-x-1.5 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-xl">
            <MapPin size={14} className="text-[#2E3A2E]" />
            <span className="text-[#2E3A2E]/70 text-xs font-semibold">
              BAIUST Campus, Cumilla
            </span>
          </div>
          <div className="flex items-center space-x-1.5 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-xl">
            <Users size={14} className="text-[#2E3A2E]" />
            <span className="text-[#2E3A2E]/70 text-xs font-semibold">
              1500+ Participants Expected
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3 mb-12"
        >
          <a
            href="/register"
            className="group relative overflow-hidden bg-[#2E3A2E] text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md hover:bg-[#1B261B] transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Register Now</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </a>
          <a
            href="#segments"
            className="group bg-white border border-gray-200 shadow-sm text-[#2E3A2E]/70 hover:text-[#2E3A2E] hover:border-[#2E3A2E]/30 px-8 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-widest transition-all"
          >
            Explore Events
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {[
            { icon: <Cpu size={14} />, label: "IUPC", href: "/events/iupc" },
            {
              icon: <Code size={14} />,
              label: "Code Battle",
              href: "/events/code-battle",
            },
            {
              icon: <Zap size={14} />,
              label: "Hackathon",
              href: "/events/hackathon",
            },
            {
              icon: <Gamepad2 size={14} />,
              label: "Gaming Fest",
              href: "/events/gaming-fest",
            },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center space-x-1.5 bg-white border border-gray-200 hover:border-[#2E3A2E]/30 text-[#2E3A2E]/45 hover:text-[#2E3A2E]/70 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm"
            >
              <span className="text-[#2E3A2E]/40">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Sponsor strip in hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="w-full mt-16 border-t border-gray-100 pt-6"
      >
        <p className="text-[#2E3A2E]/40 text-[10px] uppercase tracking-[0.35em] font-bold mb-4 text-center">
          Powered By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-3">
          {["bKash", "Nagad", "AuthLab", "Poridhi"].map((s) => (
            <span
              key={s}
              className="text-[#2E3A2E]/70 hover:text-[#2E3A2E] text-base md:text-lg font-black tracking-tight transition-colors cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-[#2E3A2E]/15"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">
          Scroll
        </span>
        <ChevronDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "1500+", label: "Participants", icon: <Users size={18} /> },
    { value: "৳3L+", label: "Prize Pool", icon: <Trophy size={18} /> },
    { value: "02", label: "Days of Glory", icon: <Calendar size={18} /> },
    { value: "25+", label: "Universities", icon: <MapPin size={18} /> },
  ];

  return (
    <section className="relative bg-[#2E3A2E] py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[#1B261B] opacity-50" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center py-4"
            >
              <span className="text-white/40 mb-2">{s.icon}</span>
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                {s.value}
              </div>
              <div className="text-white/50 font-semibold text-xs uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const events = [
  {
    num: "01",
    title: "IUPC",
    tag: "Programming Contest",
    href: "/events/iupc",
    icon: <Cpu size={20} />,
    prize: "৳85,000",
    desc: "Inter-University Programming Contest. Teams of 2–3 battle through algorithmic challenges in a 5-hour ICPC-style format.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
  },
  {
    num: "02",
    title: "Code Battle",
    tag: "Solo Challenge",
    href: "/events/code-battle",
    icon: <Code size={20} />,
    prize: "৳35,000",
    desc: "Lightning-fast solo coding rounds. Speed, precision, and efficiency — only the sharpest coders survive.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    num: "03",
    title: "Hackathon",
    tag: "36-Hour Build",
    href: "/events/hackathon",
    icon: <Zap size={20} />,
    prize: "৳1,05,000",
    desc: "36 hours. Real-world problems. Build something that matters. Collaborate, innovate, and ship fast.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    num: "04",
    title: "Gaming Fest",
    tag: "E-Sports Tournament",
    href: "/events/gaming-fest",
    icon: <Gamepad2 size={20} />,
    prize: "৳53,000",
    desc: "Compete across multiple titles — FIFA, Free Fire, Tekken & more. Represent your university on the gaming stage.",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
  },
];

const HierarchyRow = ({ event, index }) => (
  <div className="relative">
    {index < 3 && (
      <div className="absolute left-[22px] top-[60px] bottom-0 w-px bg-[#2E3A2E]/10" />
    )}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative flex items-start gap-5 md:gap-8 py-6 md:py-8"
    >
      <div className="flex flex-col items-center shrink-0">
        <div className="relative w-11 h-11 rounded-full bg-[#2E3A2E] flex items-center justify-center text-white font-black text-sm leading-none shadow-sm">
          {event.num}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#2E3A2E]/30">{event.icon}</span>
              <span className="text-[#2E3A2E]/35 text-xs font-semibold uppercase tracking-wider">
                {event.tag}
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-[#2E3A2E] leading-none">
              {event.title}
            </h3>
            <p className="text-[#2E3A2E]/45 text-sm leading-relaxed max-w-lg mt-1.5">
              {event.desc}
            </p>
          </div>
          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0">
            <div className="bg-[#2E3A2E]/10 px-3 py-1 rounded-lg">
              <span className="text-[#2E3A2E] text-sm font-black">{event.prize}</span>
            </div>
            <a
              href={`/register?event=${event.title}`}
              className="bg-[#2E3A2E] hover:bg-[#1B261B] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all whitespace-nowrap"
            >
              Register →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const TreeAnimation = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="w-16 h-24 md:w-20 md:h-28 shrink-0"
  >
    <svg viewBox="0 0 80 100" fill="none" className="w-full h-full">
      <motion.path
        d="M40 95 L40 55"
        stroke="#2E3A2E"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.path
        d="M40 68 Q22 56 16 48"
        stroke="#2E3A2E"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
      />
      <motion.path
        d="M40 63 Q58 52 64 44"
        stroke="#2E3A2E"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      />
      <motion.path
        d="M40 58 Q18 44 12 34"
        stroke="#2E3A2E"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
      />
      <motion.path
        d="M40 53 Q62 40 68 30"
        stroke="#2E3A2E"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
      />
      {[
        [16, 48], [10, 46], [20, 43],
        [64, 44], [70, 41], [58, 39],
        [12, 34], [6, 31], [16, 29],
        [68, 30], [74, 27], [64, 25],
        [40, 45], [40, 35],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="#2E3A2E"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + i * 0.06, duration: 0.25 }}
        />
      ))}
    </svg>
  </motion.div>
);

const Segments = () => (
  <section className="py-24 bg-white" id="segments">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="flex items-start gap-4 md:gap-6">
          <TreeAnimation />
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#2E3A2E]/30 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">
                — Core Events
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#2E3A2E] leading-none">
                Four <span className="text-[#2E3A2E]/20">Pillars</span>
                <br />
                <span className="text-[#2E3A2E]">of Glory</span>
              </h2>
            </motion.div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#2E3A2E]/40 text-sm max-w-xs leading-relaxed md:text-right"
        >
          Compete in one or more of our flagship events. Each segment brings its
          own challenge.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        {events.map((event, i) => (
          <HierarchyRow key={event.num} event={event} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 relative overflow-hidden rounded-2xl bg-[#2E3A2E] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
            Ready to make history?
          </h3>
          <p className="text-white/50 text-sm">
            July 11–12, 2026 · BAIUST Campus, Cumilla
          </p>
        </div>
        <a
          href="/register"
          className="relative flex-shrink-0 bg-white text-[#2E3A2E] px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all whitespace-nowrap"
        >
          Register Now →
        </a>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#2E3A2E] text-white pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-black">
              B
            </div>
            <div>
              <div className="text-white font-black tracking-wider">
                BAIUST CSE CARNIVAL
              </div>
              <div className="text-white/40 text-xs tracking-widest">
                2026 EDITION
              </div>
            </div>
          </div>
          <p className="text-white/50 max-w-sm leading-relaxed text-sm">
            The biggest technical extravaganza of Cumilla, organized by the
            Department of Computer Science and Engineering, BAIUST.
          </p>
        </div>
        <div>
          <h4 className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              ["Register", "/register"],
              ["IUPC", "/events/iupc"],
              ["Code Battle", "/events/code-battle"],
              ["Hackathon", "/events/hackathon"],
              ["Gaming Fest", "/events/gaming-fest"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Follow Us
          </h4>
          <div className="flex space-x-3">
            {[
              [Facebook, "fb"],
              [Twitter, "tw"],
              [Instagram, "ig"],
            ].map(([Icon, key]) => (
              <a
                key={key}
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="mt-6 bg-white/10 border border-white/10 rounded-2xl p-4">
            <p className="text-white/40 text-xs mb-1 font-bold">Contact</p>
            <p className="text-white/70 text-sm">csecarnival@baiust.edu.bd</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs">
          © 2026 BAIUST CSE CARNIVAL. All rights reserved.
        </p>
        <div className="flex items-center space-x-1">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/30 text-xs">Registration Open</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function CarnivalLandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter selection:bg-[#2E3A2E]/20 selection:text-[#2E3A2E]">
      <CarnivalNavbar />
      <Hero />
      <StatsSection />
      <Segments />
      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        * { font-family: 'Inter', sans-serif; box-sizing: border-box; }

        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
      `}</style>
    </div>
  );
}