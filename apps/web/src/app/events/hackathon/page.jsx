import React from "react";
import CarnivalNavbar from "@/components/CarnivalNavbar";
import {
  Trophy,
  Users,
  Clock,
  ArrowLeft,
  CheckCircle,
  Calendar,
  Lightbulb,
} from "lucide-react";

const prizes = [
  { place: "1st", amount: "৳60,000", badge: "🥇" },
  { place: "2nd", amount: "৳30,000", badge: "🥈" },
  { place: "3rd", amount: "৳15,000", badge: "🥉" },
  { place: "Best Innovation", amount: "Special Award", badge: "💡" },
  { place: "Best UI/UX", amount: "Special Award", badge: "🎨" },
];

const rules = [
  "Teams must consist of 3 to 5 members.",
  "All team members must be enrolled full-time university students.",
  "Projects must be built from scratch during the hackathon — no pre-built code.",
  "Use of open-source libraries, frameworks, and APIs is allowed.",
  "AI tools (ChatGPT, Copilot, etc.) are permitted for assistance only, not code generation.",
  "The theme will be announced at the start of the hackathon.",
  "Teams must submit a GitHub repo link and a short demo video by the deadline.",
  "Each team will get a 5-minute pitch + 3-minute Q&A with the judges.",
  "Judging criteria: Innovation (30%), Technical Execution (30%), Impact (20%), Presentation (20%).",
  "Internet access will be provided. Teams must bring their own devices.",
  "Meals and refreshments will be provided throughout the event.",
  "Projects must be original and must not infringe on existing IP.",
];

const timeline = [
  { time: "Day 1 — 09:00 AM", event: "Opening & Theme Announcement" },
  { time: "Day 1 — 10:00 AM", event: "Hacking Begins" },
  { time: "Day 1 — 01:00 PM", event: "Lunch Break" },
  { time: "Day 1 — 06:00 PM", event: "Mentor Check-in Sessions" },
  { time: "Day 1 — 10:00 PM", event: "Midnight Snacks + Networking" },
  { time: "Day 2 — 08:00 AM", event: "Breakfast + Final Sprint" },
  { time: "Day 2 — 10:00 AM", event: "Submission Deadline" },
  { time: "Day 2 — 11:00 AM", event: "Demos & Judging" },
  { time: "Day 2 — 03:00 PM", event: "Closing Ceremony & Awards" },
];

const tracks = [
  {
    icon: "🏥",
    title: "HealthTech",
    desc: "Solutions for healthcare accessibility and patient management.",
  },
  {
    icon: "🌾",
    title: "AgriTech",
    desc: "Technology for farmers, supply chains, and food security.",
  },
  {
    icon: "🎓",
    title: "EdTech",
    desc: "Innovative tools for learning and education in Bangladesh.",
  },
  {
    icon: "🌿",
    title: "GreenTech",
    desc: "Eco-friendly solutions to combat climate change.",
  },
];

export default function HackathonPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter">
      <CarnivalNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)",
            backgroundSize: "35px 35px",
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
              Segment 03
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
              HACK
              <br />
              ATHON
              <span className="text-white/40 text-3xl md:text-4xl font-light block mt-2">
                Build. Innovate. Impact.
              </span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl">
              36 hours of non-stop building. Bring your team, pick a track, and
              create something that matters. The best ideas get funded and
              recognized.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Calendar size={18} />
                <span>July 11–12, 2026</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Users size={18} />
                <span>Team of 3–5</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Clock size={18} />
                <span>36 Hours</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 text-white px-5 py-3 rounded-2xl text-sm font-semibold">
                <Trophy size={18} />
                <span>৳1,05,000 Prize Pool</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Tracks */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#2E3A2E] mb-3">
                Hackathon Tracks
              </h2>
              <p className="text-[#2E3A2E]/60 mb-8">
                The theme will be narrowed at the start. Choose one track for
                your project.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {tracks.map((track) => (
                  <div
                    key={track.title}
                    className="bg-[#F5F5F5] rounded-2xl p-6 border border-gray-100 hover:border-purple-200 transition-colors"
                  >
                    <div className="text-3xl mb-3">{track.icon}</div>
                    <h4 className="font-black text-[#2E3A2E] text-lg mb-1">
                      {track.title}
                    </h4>
                    <p className="text-[#2E3A2E]/60 text-sm">{track.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#2E3A2E] mb-6">
                About the Hackathon
              </h2>
              <p className="text-[#2E3A2E]/70 text-lg leading-relaxed mb-4">
                The BAIUST CSE Carnival Hackathon is a 36-hour marathon of
                innovation where teams of 3–5 students build solutions to
                real-world problems. Mentors from industry will be on-site to
                guide and advise teams throughout the event.
              </p>
              <p className="text-[#2E3A2E]/70 text-lg leading-relaxed">
                Participants will have access to cloud credits, APIs, and tools
                provided by our sponsors. All meals, snacks, and refreshments
                are covered by the organizers. The best projects will be pitched
                to a panel of judges including startup founders, engineers, and
                academic experts.
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
                      <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] rounded-full flex items-center justify-center text-white text-xs font-bold">
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
            <div className="bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-black mb-6">Prize Pool</h3>
              <div className="space-y-3">
                {prizes.map((p) => (
                  <div
                    key={p.place}
                    className="flex items-center justify-between bg-white/10 rounded-2xl px-4 py-3"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{p.badge}</span>
                      <span className="font-bold text-white/80 text-sm">
                        {p.place}
                      </span>
                    </div>
                    <span className="font-black">{p.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-28">
              <h3 className="text-2xl font-black text-[#2E3A2E] mb-2">
                Join the Hackathon
              </h3>
              <p className="text-[#2E3A2E]/60 text-sm mb-6">
                Only 40 teams accepted. Register early!
              </p>
              <div className="space-y-3 text-sm text-[#2E3A2E]/70 mb-6">
                <div className="flex justify-between">
                  <span>Registration Fee</span>
                  <span className="font-bold text-[#2E3A2E]">
                    ৳1,500 / team
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Team Size</span>
                  <span className="font-bold text-[#2E3A2E]">3–5 Members</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Teams</span>
                  <span className="font-bold text-[#2E3A2E]">40</span>
                </div>
                <div className="flex justify-between">
                  <span>Meals</span>
                  <span className="font-bold text-green-600">Provided ✓</span>
                </div>
              </div>
              <a
                href="/register?event=Hackathon"
                className="block w-full bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white text-center font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity"
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
