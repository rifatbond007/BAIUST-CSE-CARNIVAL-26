import React from "react";
import CarnivalNavbar from "@/components/CarnivalNavbar";
import {
  Trophy,
  Users,
  Clock,
  ArrowLeft,
  CheckCircle,
  Calendar,
  Gamepad2,
} from "lucide-react";

const games = [
  { icon: "⚽", title: "FIFA 25", type: "1v1", prize: "৳15,000", seats: 32 },
  {
    icon: "🔫",
    title: "Free Fire",
    type: "Squad (4)",
    prize: "৳20,000",
    seats: 16,
  },
  {
    icon: "🧱",
    title: "Minecraft Build Challenge",
    type: "Solo",
    prize: "৳8,000",
    seats: 20,
  },
  { icon: "🎮", title: "Tekken 8", type: "1v1", prize: "৳10,000", seats: 32 },
];

const rules = [
  "Each participant may register for up to 2 game titles.",
  "All games will be played on hardware provided by the organizers — no personal devices.",
  "Match schedules will be fixed. Absence from a match will result in a walkover.",
  "Participants must be currently enrolled university students.",
  "In-game purchases, hacks, or external software are strictly prohibited.",
  "Organizers reserve the right to change game settings for fairness.",
  "All disputes must be reported to the referee immediately — no retrospective claims.",
  "Unsportsmanlike behavior (verbal abuse, screen-watching) leads to disqualification.",
  "Each game has its own bracket; eliminations follow single-elimination format.",
  "Winners must be present during the prize distribution ceremony.",
];

const timeline = [
  { time: "09:00 AM", event: "Venue Opens & Warm-up Sessions" },
  { time: "10:00 AM", event: "FIFA 25 — Round of 32" },
  { time: "10:00 AM", event: "Tekken 8 — Round of 32" },
  { time: "12:00 PM", event: "Lunch Break" },
  { time: "01:00 PM", event: "Free Fire — Group Stage" },
  { time: "01:00 PM", event: "Minecraft Build Challenge Begins" },
  { time: "03:00 PM", event: "Semi-Finals (All Titles)" },
  { time: "05:00 PM", event: "Grand Finals" },
  { time: "07:00 PM", event: "Award Ceremony & Closing" },
];

export default function GamingFestPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter">
      <CarnivalNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#0f0f0f] via-[#1a0533] to-[#0d1f3c] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        </div>
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
              Segment 04
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
              GAMING
              <br />
              FEST
              <span className="text-white/40 text-3xl md:text-4xl font-light block mt-2">
                Battle for the Crown
              </span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl">
              Drop your studies, pick up your controller. The BAIUST Gaming Fest
              is the ultimate e-sports showdown featuring multiple game titles
              and massive prizes.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Calendar size={18} />
                <span>July 12, 2026</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Gamepad2 size={18} />
                <span>4 Game Titles</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Clock size={18} />
                <span>All Day</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Trophy size={18} />
                <span>৳53,000 Prize Pool</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Game Titles */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#2E3A2E] mb-3">
                Game Titles
              </h2>
              <p className="text-[#2E3A2E]/60 mb-8">
                Register for individual game titles. Up to 2 per person.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {games.map((game) => (
                  <div
                    key={game.title}
                    className="bg-gradient-to-br from-[#0f0f0f] to-[#1a0533] rounded-2xl p-6 text-white"
                  >
                    <div className="text-3xl mb-3">{game.icon}</div>
                    <h4 className="font-black text-xl mb-1">{game.title}</h4>
                    <div className="flex flex-col space-y-1 mt-3 text-white/60 text-sm">
                      <span>
                        Format:{" "}
                        <span className="text-white font-bold">
                          {game.type}
                        </span>
                      </span>
                      <span>
                        Prize:{" "}
                        <span className="text-yellow-400 font-black">
                          {game.prize}
                        </span>
                      </span>
                      <span>
                        Max Seats:{" "}
                        <span className="text-white font-bold">
                          {game.seats}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#2E3A2E] mb-6">
                About Gaming Fest
              </h2>
              <p className="text-[#2E3A2E]/70 text-lg leading-relaxed mb-4">
                The BAIUST Gaming Fest brings together the best gamers from
                universities across Bangladesh. With 4 popular game titles,
                professional-grade setups, and a charged crowd atmosphere — this
                is the most electric event of the carnival.
              </p>
              <p className="text-[#2E3A2E]/70 text-lg leading-relaxed">
                All games will be played on high-end PCs and consoles provided
                by the organizers. Participants just need to show up and play. A
                live commentator will keep the energy up throughout the day.
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
                      className="text-purple-600 mt-0.5 flex-shrink-0"
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
                <div className="space-y-5">
                  {timeline.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-6 relative pl-12"
                    >
                      <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between bg-[#F5F5F5] rounded-2xl px-6 py-4">
                        <span className="font-black text-[#2E3A2E] text-base">
                          {item.event}
                        </span>
                        <span className="text-[#2E3A2E]/60 font-mono font-bold text-xs mt-1 md:mt-0">
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
            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a0533] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-black mb-6">Prize Pool</h3>
              <div className="space-y-3">
                {games.map((g) => (
                  <div
                    key={g.title}
                    className="flex items-center justify-between bg-white/10 rounded-2xl px-4 py-3"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{g.icon}</span>
                      <span className="font-bold text-white/80 text-sm">
                        {g.title}
                      </span>
                    </div>
                    <span className="font-black text-yellow-400">
                      {g.prize}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-28">
              <h3 className="text-2xl font-black text-[#2E3A2E] mb-2">
                Join the Fest!
              </h3>
              <p className="text-[#2E3A2E]/60 text-sm mb-6">
                Limited seats per game. Register fast!
              </p>
              <div className="space-y-3 text-sm text-[#2E3A2E]/70 mb-6">
                <div className="flex justify-between">
                  <span>Registration Fee</span>
                  <span className="font-bold text-[#2E3A2E]">৳150 / game</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Games</span>
                  <span className="font-bold text-[#2E3A2E]">2 per person</span>
                </div>
                <div className="flex justify-between">
                  <span>Format</span>
                  <span className="font-bold text-[#2E3A2E]">Single Elim.</span>
                </div>
              </div>
              <a
                href="/register?event=Gaming+Fest"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity"
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
