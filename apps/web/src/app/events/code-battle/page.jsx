import React from "react";
import CarnivalNavbar from "@/components/CarnivalNavbar";
import {
  Trophy,
  User,
  Clock,
  ArrowLeft,
  CheckCircle,
  Calendar,
  Zap,
} from "lucide-react";

const prizes = [
  { place: "1st", amount: "৳20,000", badge: "🥇" },
  { place: "2nd", amount: "৳10,000", badge: "🥈" },
  { place: "3rd", amount: "৳5,000", badge: "🥉" },
];

const rules = [
  "This is an individual event — no teams allowed.",
  "Each participant must be a currently enrolled university student.",
  "Problems will be hosted on an online judge platform provided by organizers.",
  "Participants must bring their own laptops. No internet access is permitted.",
  "Allowed languages: C, C++, Java, Python 3.",
  "Use of AI tools, external references, or communication is strictly forbidden.",
  "Participants found cheating will be immediately disqualified.",
  "The contest will have two rounds: Qualifying Round and Final Round.",
  "Top 20 from the qualifying round advance to the final.",
  "University ID is mandatory for check-in.",
];

const timeline = [
  { time: "09:00 AM", event: "Check-in & Setup" },
  { time: "10:00 AM", event: "Qualifying Round Begins (90 mins)" },
  { time: "11:30 AM", event: "Qualifying Round Ends" },
  { time: "12:00 PM", event: "Shortlist Announced — Lunch Break" },
  { time: "01:00 PM", event: "Final Round Begins (60 mins)" },
  { time: "02:00 PM", event: "Final Round Ends" },
  { time: "03:00 PM", event: "Results & Prize Distribution" },
];

export default function CodeBattlePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter">
      <CarnivalNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-[#1a1a2e] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#4a5568 1px, transparent 1px), linear-gradient(90deg, #4a5568 1px, transparent 1px)",
            backgroundSize: "40px 40px",
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
              Segment 02
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
              CODE
              <br />
              BATTLE
              <span className="text-white/40 text-3xl md:text-4xl font-light block mt-2">
                Solo Speed Coding Challenge
              </span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl">
              The ultimate test of individual coding speed and accuracy. One
              coder, one machine, no excuses. Who is the fastest programmer in
              the room?
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Calendar size={18} />
                <span>July 11, 2026</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <User size={18} />
                <span>Individual</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Clock size={18} />
                <span>2 Rounds</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Trophy size={18} />
                <span>৳35,000 Prize Pool</span>
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
                About Code Battle
              </h2>
              <p className="text-[#2E3A2E]/70 text-lg leading-relaxed mb-4">
                Code Battle is a solo competitive programming event where
                individual skill and speed are what matter most. Unlike team
                events, here you're on your own — and every second counts.
              </p>
              <p className="text-[#2E3A2E]/70 text-lg leading-relaxed mb-4">
                The contest runs in two stages: a qualifying round open to all
                participants, and a tense final round for the top 20 coders.
                Problems span a variety of topics including greedy algorithms,
                sorting, graph traversal, and dynamic programming.
              </p>
              <p className="text-[#2E3A2E]/70 text-lg leading-relaxed">
                The scoring is based on the number of problems solved correctly,
                with penalty time added for incorrect submissions. Think fast,
                code clean, and win big.
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
                      className="text-[#1a1a2e] mt-0.5 flex-shrink-0"
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
                      <div className="absolute left-0 w-8 h-8 bg-[#1a1a2e] rounded-full flex items-center justify-center text-white text-xs font-bold">
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
            <div className="bg-[#1a1a2e] rounded-3xl p-8 text-white">
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
                    <span className="font-bold text-white/80">Top 20</span>
                  </div>
                  <span className="font-bold text-sm">Certificate</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-28">
              <h3 className="text-2xl font-black text-[#2E3A2E] mb-2">
                Ready to Battle?
              </h3>
              <p className="text-[#2E3A2E]/60 text-sm mb-6">
                Registration closes July 1, 2026. Limited seats!
              </p>
              <div className="space-y-3 text-sm text-[#2E3A2E]/70 mb-6">
                <div className="flex justify-between">
                  <span>Registration Fee</span>
                  <span className="font-bold text-[#2E3A2E]">
                    ৳200 / person
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Team Size</span>
                  <span className="font-bold text-[#2E3A2E]">Individual</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Participants</span>
                  <span className="font-bold text-[#2E3A2E]">200</span>
                </div>
              </div>
              <a
                href="/register?event=Code+Battle"
                className="block w-full bg-[#1a1a2e] text-white text-center font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity"
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
