import React from "react";
import CarnivalNavbar from "@/components/CarnivalNavbar";
import {
  Trophy,
  Users,
  Clock,
  ArrowLeft,
  CheckCircle,
  Calendar,
  MapPin,
} from "lucide-react";

const prizes = [
  { place: "1st", amount: "৳50,000", badge: "🥇" },
  { place: "2nd", amount: "৳25,000", badge: "🥈" },
  { place: "3rd", amount: "৳10,000", badge: "🥉" },
];

const rules = [
  "Each team must consist of 2 to 3 members.",
  "All team members must be enrolled in a university as a full-time student.",
  "Teams must bring their own laptops and chargers.",
  "Internet access will NOT be provided during the contest.",
  "Use of any pre-written code or AI tools is strictly prohibited.",
  "Only ICPC-approved programming languages are allowed: C, C++, Java, Python.",
  "Decisions of the judges will be final and binding.",
  "Teams must register before the deadline. No walk-in registrations.",
  "Any form of plagiarism will result in immediate disqualification.",
  "Participants must carry their valid university ID cards.",
];

const timeline = [
  { time: "08:00 AM", event: "Registration & Check-in" },
  { time: "09:00 AM", event: "Opening Ceremony" },
  { time: "10:00 AM", event: "Contest Begins" },
  { time: "03:00 PM", event: "Contest Ends" },
  { time: "04:00 PM", event: "Results & Award Ceremony" },
];

export default function IUPCPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter">
      <CarnivalNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-[#2E3A2E] overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <a
            href="/"
            className="inline-flex items-center space-x-2 text-white/60 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-semibold">Back to Home</span>
          </a>
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Segment 01
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
              IUPC
              <br />
              <span className="text-white/40 text-3xl md:text-4xl font-light">
                Inter-University Programming Contest
              </span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl">
              The most prestigious competitive programming contest of the
              carnival. Pit your algorithmic skills against the best minds
              across the country.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Calendar size={18} />
                <span>July 11, 2026</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Users size={18} />
                <span>Team of 2–3</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Clock size={18} />
                <span>5 Hours</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Trophy size={18} />
                <span>৳85,000 Prize Pool</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#2E3A2E] mb-6">
                About IUPC
              </h2>
              <p className="text-[#2E3A2E]/70 text-lg leading-relaxed mb-4">
                The Inter-University Programming Contest (IUPC) is the flagship
                event of BAIUST CSE Carnival 2026. Teams of 2–3 students compete
                to solve a set of algorithmic problems within a 5-hour window.
              </p>
              <p className="text-[#2E3A2E]/70 text-lg leading-relaxed">
                Inspired by ICPC-style contests, participants will face problems
                ranging from basic data structures to advanced graph algorithms,
                dynamic programming, and computational geometry. The team that
                solves the most problems (with fewer wrong submissions and less
                time) wins.
              </p>
            </div>

            {/* Rules */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#2E3A2E] mb-8">
                Rules & Regulations
              </h2>
              <ul className="space-y-4">
                {rules.map((rule, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle
                      size={20}
                      className="text-[#2E3A2E] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-[#2E3A2E]/80 leading-relaxed">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#2E3A2E] mb-8">
                Event Schedule
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200" />
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-6 relative pl-12"
                    >
                      <div className="absolute left-0 w-8 h-8 bg-[#2E3A2E] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between bg-[#F5F5F5] rounded-2xl px-6 py-4">
                        <span className="font-black text-[#2E3A2E] text-lg">
                          {item.event}
                        </span>
                        <span className="text-[#2E3A2E]/60 font-mono font-bold text-sm">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Prizes */}
            <div className="bg-[#2E3A2E] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-black mb-6">Prize Pool</h3>
              <div className="space-y-4">
                {prizes.map((p) => (
                  <div
                    key={p.place}
                    className="flex items-center justify-between bg-white/10 rounded-2xl px-5 py-4"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{p.badge}</span>
                      <span className="font-bold text-white/80">
                        {p.place} Place
                      </span>
                    </div>
                    <span className="font-black text-xl">{p.amount}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between bg-white/10 rounded-2xl px-5 py-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🎁</span>
                    <span className="font-bold text-white/80">All Teams</span>
                  </div>
                  <span className="font-bold text-sm">Crest + Certificate</span>
                </div>
              </div>
            </div>

            {/* Registration CTA */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-28">
              <h3 className="text-2xl font-black text-[#2E3A2E] mb-2">
                Ready to Compete?
              </h3>
              <p className="text-[#2E3A2E]/60 text-sm mb-6">
                Registration closes July 1, 2026. Spots are limited!
              </p>
              <div className="space-y-3 text-sm text-[#2E3A2E]/70 mb-6">
                <div className="flex justify-between">
                  <span>Registration Fee</span>
                  <span className="font-bold text-[#2E3A2E]">৳500 / team</span>
                </div>
                <div className="flex justify-between">
                  <span>Team Size</span>
                  <span className="font-bold text-[#2E3A2E]">2–3 Members</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Teams</span>
                  <span className="font-bold text-[#2E3A2E]">100</span>
                </div>
              </div>
              <a
                href="/register?event=IUPC"
                className="block w-full bg-[#2E3A2E] text-white text-center font-bold py-4 rounded-2xl hover:bg-[#1B261B] transition-colors"
              >
                REGISTER NOW →
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#1B261B] text-white py-8 text-center text-sm text-white/40">
        <p>© 2026 BAIUST CSE CARNIVAL. All rights reserved.</p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
}
